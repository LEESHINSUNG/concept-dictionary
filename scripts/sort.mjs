/*
 * data/concepts.js의 항목을 slug 알파벳순으로 다시 줄 세웁니다.
 * 실행: node scripts/sort.mjs
 * Node 내장 모듈만 사용합니다 (외부 의존성 0).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'data', 'concepts.js');
const OPEN = 'window.CONCEPTS = [\n';
const CLOSE = '];';

const source = fs.readFileSync(FILE, 'utf8');

const openAt = source.indexOf(OPEN);
const closeAt = source.lastIndexOf(CLOSE);
if (openAt === -1 || closeAt === -1) {
  console.error(`실패: ${path.relative(ROOT, FILE)}에서 window.CONCEPTS 배열을 찾지 못했습니다.`);
  process.exit(1);
}

const head = source.slice(0, openAt + OPEN.length);
const body = source.slice(openAt + OPEN.length, closeAt);
const tail = source.slice(closeAt + CLOSE.length);

// 항목 하나는 두 칸 들여쓴 { ... } 덩어리입니다.
const blocks = body.match(/ {2}\{\n[\s\S]*?\n {2}\},?\n/g) || [];

// 덩어리를 이어 붙인 결과가 원본과 같아야 안전하게 다시 쓸 수 있습니다.
if (blocks.join('') !== body) {
  console.error('실패: 항목을 알아보지 못했습니다. 손으로 고친 뒤 다시 실행해 주세요.');
  process.exit(1);
}

const slugOf = (block) => {
  const found = block.match(/slug:\s*'([^']+)'/);
  if (!found) {
    console.error('실패: slug가 없는 항목이 있습니다.');
    process.exit(1);
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
  console.log(`이미 정렬돼 있습니다 (${blocks.length}건).`);
  process.exit(0);
}

fs.writeFileSync(FILE, output);

const moved = before.filter((slug, i) => slug !== after[i]);
console.log(`정렬했습니다: ${blocks.length}건${moved.length ? ` (자리가 바뀐 항목: ${moved.join(', ')})` : ''}`);
