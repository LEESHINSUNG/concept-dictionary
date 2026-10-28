/*
 * 공통 CSS·JS 주소에 내용 지문을 붙입니다. 실행: node scripts/stamp.mjs
 *
 * 왜 필요한가:
 *   style.css 를 고쳐 배포해도 브라우저가 전에 받아 둔 파일을 계속 쓰는 일이 있습니다.
 *   주소가 그대로라 바뀐 줄 모르기 때문입니다. 그래서 파일 내용이 바뀌면
 *   style.css?v=1a2b3c4d 처럼 뒤에 붙는 값도 바뀌게 해 둡니다. 주소가 달라지면
 *   브라우저는 새 파일로 보고 다시 받아 옵니다.
 *
 * 대상은 assets/ 아래의 .css·.js 뿐입니다. data/ 는 건드리지 않습니다
 *   (HTML 자체도 같이 캐시되므로 지문을 붙여도 얻는 게 없습니다).
 *
 * Node 내장 모듈만 사용합니다 (외부 의존성 0).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = path.join(ROOT, 'assets');
const rel = (p) => path.relative(ROOT, p) || '.';

const hashes = new Map();
function hashOf(file) {
  if (!hashes.has(file)) {
    const sum = crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex');
    hashes.set(file, sum.slice(0, 8));
  }
  return hashes.get(file);
}

function htmlFiles() {
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) out.push(full);
    }
  };
  walk(ROOT);
  return out.sort();
}

/* href="..." / src="..." 중 assets/ 아래의 css·js 만 골라 ?v= 를 새로 답니다. */
const REF_RE = /\b(href|src)="([^"]+\.(?:css|js))(\?[^"]*)?"/g;

let changed = 0;
let stamped = 0;

for (const file of htmlFiles()) {
  const before = fs.readFileSync(file, 'utf8');
  const after = before.replace(REF_RE, (whole, attr, url) => {
    if (/^(https?:|\/\/|\/)/.test(url)) return whole;           // 외부·절대경로는 그대로
    const target = path.resolve(path.dirname(file), url);
    if (!target.startsWith(ASSETS + path.sep)) return whole;     // assets/ 밖은 그대로
    if (!fs.existsSync(target)) return whole;
    stamped += 1;
    return `${attr}="${url}?v=${hashOf(target)}"`;
  });
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed += 1;
  }
}

console.log(changed
  ? `지문을 새로 달았습니다 — HTML ${changed}개 (참조 ${stamped}곳).`
  : `지문은 이미 최신입니다 (참조 ${stamped}곳).`);
