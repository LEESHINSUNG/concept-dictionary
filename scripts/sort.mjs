/*
 * data/concepts.js 와 data/words.js 의 항목을 slug 알파벳순으로 다시 줄 세웁니다.
 * 실행: node scripts/sort.mjs
 * Node 내장 모듈만 사용합니다 (외부 의존성 0).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CLOSE = '];';

const TARGETS = [
  { file: path.join(ROOT, 'data', 'concepts.js'), open: 'window.CONCEPTS = [\n', label: '개념' },
  { file: path.join(ROOT, 'data', 'words.js'), open: 'window.WORDS = [\n', label: '단어' }
];

let failed = false;

for (const { file, open, label } of TARGETS) {
  const rel = path.relative(ROOT, file);
  if (!fs.existsSync(file)) {
    console.log(`건너뜀: ${rel} 없음`);
    continue;
  }

  const source = fs.readFileSync(file, 'utf8');
  const openAt = source.indexOf(open);
  const closeAt = source.lastIndexOf(CLOSE);
  if (openAt === -1 || closeAt === -1) {
    console.error(`실패: ${rel}에서 배열을 찾지 못했습니다.`);
    failed = true;
    continue;
  }

  const head = source.slice(0, openAt + open.length);
  const body = source.slice(openAt + open.length, closeAt);
  const tail = source.slice(closeAt + CLOSE.length);

  // 항목 하나는 두 칸 들여쓴 { ... } 덩어리입니다.
  const blocks = body.match(/ {2}\{\n[\s\S]*?\n {2}\},?\n/g) || [];

  // 덩어리를 이어 붙인 결과가 원본과 같아야 안전하게 다시 쓸 수 있습니다.
  if (blocks.join('') !== body) {
    console.error(`실패: ${rel}의 항목을 알아보지 못했습니다. 손으로 고친 뒤 다시 실행해 주세요.`);
    failed = true;
    continue;
  }

  const slugOf = (block) => {
    const found = block.match(/slug:\s*'([^']+)'/);
    if (!found) {
      console.error(`실패: ${rel}에 slug가 없는 항목이 있습니다.`);
      failed = true;
      return '';
    }
    return found[1];
  };

  const before = blocks.map(slugOf);
  const sorted = blocks
    .map((block) => block.replace(/\n$/, '').replace(/,$/, ''))
    .sort((a, b) => slugOf(a).localeCompare(slugOf(b), 'en'));
  const after = sorted.map(slugOf);

  const output = head + sorted.join(',\n') + '\n' + CLOSE + tail;

  if (output === source) {
    console.log(`${label}: 이미 정렬돼 있습니다 (${blocks.length}건).`);
    continue;
  }

  fs.writeFileSync(file, output);
  const moved = before.filter((slug, i) => slug !== after[i]);
  console.log(`${label}: 정렬했습니다 — ${blocks.length}건${moved.length ? ` (자리가 바뀐 항목: ${moved.join(', ')})` : ''}`);
}

process.exit(failed ? 1 : 0);
