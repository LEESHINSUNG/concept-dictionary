/*
 * 무결성 검사. 실행: node scripts/check.mjs
 * Node 내장 모듈만 사용합니다 (외부 의존성 0).
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const problems = [];
const warnings = [];

const fail = (message) => problems.push(message);
const warn = (message) => warnings.push(message);
const rel = (p) => path.relative(ROOT, p) || '.';

/* ── 데이터 읽기 ───────────────────────────────────── */
function loadData(fileName, key) {
  const file = path.join(ROOT, 'data', fileName);
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  const list = sandbox.window[key];
  if (!Array.isArray(list)) {
    fail(`data/${fileName}: window.${key} 배열이 없습니다.`);
    return [];
  }
  return list;
}

const loadConcepts = () => loadData('concepts.js', 'CONCEPTS');
const loadWords = () => loadData('words.js', 'WORDS');

/* ── 모든 HTML 파일 목록 ───────────────────────────── */
function htmlFiles() {
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      if (entry.name === '_template.html') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) out.push(full);
    }
  };
  walk(ROOT);
  return out.sort();
}

const stripTags = (html) => html.replace(/<[^>]*>/g, '');
const decode = (text) => text
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const textOf = (html) => decode(stripTags(html)).replace(/\s+/g, ' ').trim();

/* ── 1. 데이터 검사 ────────────────────────────────── */
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const REQUIRED = ['slug', 'title', 'summary', 'category', 'date'];

function isRealDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y
    && date.getUTCMonth() === m - 1
    && date.getUTCDate() === d;
}

function checkData(concepts) {
  const seenSlug = new Map();
  const seenTitle = new Map();

  concepts.forEach((item, i) => {
    const where = `data/concepts.js [${i}]`;
    if (!item || typeof item !== 'object') {
      fail(`${where}: 객체가 아닙니다.`);
      return;
    }
    for (const key of REQUIRED) {
      const value = item[key];
      if (typeof value !== 'string' || value.trim() === '') {
        fail(`${where} (${item.slug ?? '?'}): 필수 필드 ${key}가 비어 있습니다.`);
      }
    }
    if (typeof item.slug === 'string' && !SLUG_RE.test(item.slug)) {
      fail(`${where}: slug '${item.slug}'가 규칙(영문 소문자·숫자·하이픈)에 맞지 않습니다.`);
    }
    if (typeof item.date === 'string' && !isRealDate(item.date)) {
      fail(`${where} (${item.slug}): date '${item.date}'는 실제 날짜(YYYY-MM-DD)가 아닙니다.`);
    }
    if (item.updated !== undefined && !isRealDate(String(item.updated))) {
      fail(`${where} (${item.slug}): updated '${item.updated}'는 실제 날짜(YYYY-MM-DD)가 아닙니다.`);
    }
    if (seenSlug.has(item.slug)) fail(`slug 중복: '${item.slug}'`);
    else seenSlug.set(item.slug, i);
    if (seenTitle.has(item.title)) fail(`title 중복: '${item.title}'`);
    else seenTitle.set(item.title, i);
  });

  const slugs = concepts.map((item) => item.slug);
  const sortedSlugs = [...slugs].sort();
  if (slugs.join('\u0000') !== sortedSlugs.join('\u0000')) {
    warn('data/concepts.js: 항목이 slug 알파벳순이 아닙니다 (git diff가 커집니다).');
  }
}

/* ── 2. 데이터 ↔ 파일 1:1 ─────────────────────────── */
function checkPairs(concepts) {
  const dir = path.join(ROOT, 'concepts');
  const files = fs.readdirSync(dir)
    .filter((name) => name.endsWith('.html') && name !== '_template.html')
    .map((name) => name.replace(/\.html$/, ''));

  const data = new Set(concepts.map((item) => item.slug));
  for (const slug of files) {
    if (!data.has(slug)) fail(`concepts/${slug}.html 파일은 있는데 data/concepts.js에 항목이 없습니다.`);
  }
  for (const slug of data) {
    if (!files.includes(slug)) fail(`data/concepts.js의 '${slug}' 항목에 해당하는 concepts/${slug}.html이 없습니다.`);
  }
}

/* ── 3. 상세 HTML 검사 ────────────────────────────── */
const REQUIRED_IDS = ['head', 'easy', 'diagram', 'example', 'summary', 'pager'];

function checkDetail(item) {
  const file = path.join(ROOT, 'concepts', `${item.slug}.html`);
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf8');
  const where = `concepts/${item.slug}.html`;

  const bodySlug = html.match(/<body[^>]*\bdata-slug="([^"]*)"/);
  if (!bodySlug) fail(`${where}: <body data-slug="...">가 없습니다.`);
  else if (bodySlug[1] !== item.slug) {
    fail(`${where}: data-slug가 '${bodySlug[1]}'인데 파일명은 '${item.slug}'입니다.`);
  }

  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!h1) fail(`${where}: <h1>이 없습니다.`);
  else if (textOf(h1[1]) !== item.title) {
    fail(`${where}: <h1> 텍스트 '${textOf(h1[1])}'가 title '${item.title}'과 다릅니다.`);
  }

  const dates = [...html.matchAll(/<time[^>]*\bdatetime="([^"]*)"/g)].map((m) => m[1]);
  if (!dates.includes(item.date)) {
    fail(`${where}: <time datetime="${item.date}">가 없습니다 (찾은 값: ${dates.join(', ') || '없음'}).`);
  }
  if (item.updated && !dates.includes(item.updated)) {
    fail(`${where}: 수정일 <time datetime="${item.updated}">가 없습니다.`);
  }

  for (const id of REQUIRED_IDS) {
    if (!new RegExp(`\\bid="${id}"`).test(html)) {
      fail(`${where}: 필수 id '${id}'가 없습니다.`);
    }
  }
}

/* ── 4. 전체 HTML 공통 검사 ───────────────────────── */
const GOOGLE_FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

function checkHtml(file) {
  const html = fs.readFileSync(file, 'utf8');
  const where = rel(file);

  for (const match of html.matchAll(/\b(href|src)="\/[^"]*"/g)) {
    fail(`${where}: 절대경로 금지 — ${match[0]}`);
  }

  for (const match of html.matchAll(/<script[^>]*\bsrc="([^"]+)"/g)) {
    if (/^(https?:)?\/\//.test(match[1])) {
      fail(`${where}: 외부 스크립트 금지 — ${match[1]}`);
    }
  }

  for (const match of html.matchAll(/<link[^>]*\bhref="([^"]+)"/g)) {
    const url = match[1];
    if (/^(https?:)?\/\//.test(url) && !GOOGLE_FONTS.test(url)) {
      fail(`${where}: 허용되지 않은 외부 스타일시트 — ${url}`);
    }
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = match[1].trim();
    if (!url || /^(https?:|\/\/|#|mailto:|tel:|data:|javascript:)/.test(url)) continue;
    const target = url.split(/[?#]/)[0];
    if (!target) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      fail(`${where}: 참조한 파일이 없습니다 — ${url}`);
    }
  }
}

/* ── 5. 카테고리 일관성 ───────────────────────────── */
function checkCategories(concepts) {
  const buckets = new Map();
  for (const item of concepts) {
    if (typeof item?.category !== 'string') continue;
    const key = item.category.toLowerCase().replace(/\s+/g, '');
    if (!buckets.has(key)) buckets.set(key, new Set());
    buckets.get(key).add(item.category);
  }
  for (const [, names] of buckets) {
    if (names.size > 1) {
      warn(`비슷한 카테고리가 갈라져 있습니다: ${[...names].map((n) => `'${n}'`).join(', ')}`);
    }
  }
}

/* ── 6. 일본어 단어장 ─────────────────────────────── */
const WORD_REQUIRED = ['slug', 'word', 'kana', 'meaning', 'pos', 'date'];
const WORD_IDS = ['head', 'kanji', 'example', 'near', 'summary', 'pager'];
const KANA_RE = /^[\u3041-\u309F\u30A1-\u30FFー・\s]+$/;

function checkWords(words) {
  const seenSlug = new Set();
  const seenWord = new Set();

  words.forEach((item, i) => {
    const where = `data/words.js [${i}]`;
    if (!item || typeof item !== 'object') {
      fail(`${where}: 객체가 아닙니다.`);
      return;
    }
    for (const key of WORD_REQUIRED) {
      const value = item[key];
      if (typeof value !== 'string' || value.trim() === '') {
        fail(`${where} (${item.slug ?? '?'}): 필수 필드 ${key}가 비어 있습니다.`);
      }
    }
    if (typeof item.slug === 'string' && !SLUG_RE.test(item.slug)) {
      fail(`${where}: slug '${item.slug}'가 규칙(영문 소문자·숫자·하이픈)에 맞지 않습니다.`);
    }
    if (typeof item.kana === 'string' && !KANA_RE.test(item.kana)) {
      fail(`${where} (${item.slug}): kana '${item.kana}'에 가나가 아닌 글자가 있습니다.`);
    }
    if (typeof item.date === 'string' && !isRealDate(item.date)) {
      fail(`${where} (${item.slug}): date '${item.date}'는 실제 날짜(YYYY-MM-DD)가 아닙니다.`);
    }
    if (seenSlug.has(item.slug)) fail(`단어 slug 중복: '${item.slug}'`);
    else seenSlug.add(item.slug);
    if (seenWord.has(item.word)) fail(`단어 중복: '${item.word}'`);
    else seenWord.add(item.word);
  });

  const slugs = words.map((item) => item.slug);
  if (slugs.join('\u0000') !== [...slugs].sort().join('\u0000')) {
    warn('data/words.js: 항목이 slug 알파벳순이 아닙니다 (node scripts/sort.mjs 를 돌리세요).');
  }

  const dir = path.join(ROOT, 'jp', 'words');
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((n) => n.endsWith('.html')).map((n) => n.replace(/\.html$/, ''))
    : [];
  for (const slug of files) {
    if (!seenSlug.has(slug)) fail(`jp/words/${slug}.html 파일은 있는데 data/words.js에 항목이 없습니다.`);
  }
  for (const slug of seenSlug) {
    if (!files.includes(slug)) fail(`data/words.js의 '${slug}' 항목에 해당하는 jp/words/${slug}.html이 없습니다.`);
  }

  for (const item of words) {
    const file = path.join(dir, `${item.slug}.html`);
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    const where = `jp/words/${item.slug}.html`;

    const bodySlug = html.match(/<body[^>]*\bdata-slug="([^"]*)"/);
    if (!bodySlug) fail(`${where}: <body data-slug="...">가 없습니다.`);
    else if (bodySlug[1] !== item.slug) {
      fail(`${where}: data-slug가 '${bodySlug[1]}'인데 파일명은 '${item.slug}'입니다.`);
    }

    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (!h1) fail(`${where}: <h1>이 없습니다.`);
    else if (textOf(h1[1]) !== item.word) {
      fail(`${where}: <h1> 텍스트 '${textOf(h1[1])}'가 word '${item.word}'와 다릅니다.`);
    }

    const kana = html.match(/<p class="word-kana">([^<]*)<\/p>/);
    if (!kana) fail(`${where}: 읽는 법(.word-kana) 줄이 없습니다.`);
    else if (kana[1].trim() !== item.kana) {
      fail(`${where}: 읽는 법 '${kana[1].trim()}'가 kana '${item.kana}'와 다릅니다.`);
    }

    const dates = [...html.matchAll(/<time[^>]*\bdatetime="([^"]*)"/g)].map((m) => m[1]);
    if (!dates.includes(item.date)) {
      fail(`${where}: <time datetime="${item.date}">가 없습니다.`);
    }

    for (const id of WORD_IDS) {
      if (!new RegExp(`\\bid="${id}"`).test(html)) {
        fail(`${where}: 필수 id '${id}'가 없습니다.`);
      }
    }
  }
}

/* ── 실행 ─────────────────────────────────────────── */
const concepts = loadConcepts();
checkData(concepts);
checkPairs(concepts);
concepts.forEach(checkDetail);
checkCategories(concepts);

const words = loadWords();
checkWords(words);

htmlFiles().forEach(checkHtml);

for (const message of warnings) console.log(`경고  ${message}`);

if (problems.length) {
  for (const message of problems) console.log(`문제  ${message}`);
  console.log(`\n실패: 문제 ${problems.length}건`);
  process.exit(1);
}

console.log(`통과: 개념 ${concepts.length}건, 단어 ${words.length}건, HTML ${htmlFiles().length}개 검사 완료${warnings.length ? ` (경고 ${warnings.length}건)` : ''}`);
