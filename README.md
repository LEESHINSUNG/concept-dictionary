# 기억해봐요

내가 공부하고 이해한 개념을 가나다순으로 모아 둔 개인 개념 사전이에요.
순수 HTML / CSS / JavaScript로만 만들었고, GitHub Pages로 배포됩니다.

**사이트:** https://leeshinsung.github.io/concept-dictionary/

## 개념 추가하는 방법

1. 이 폴더에서 Claude Code를 켜고 `개념 추가: 가상환경` 처럼 한 줄 말하면 됩니다.
   일본어 단어는 `단어 추가: 順序` 처럼 말하면 단어장 쪽에 들어갑니다.
2. Claude Code가 개념 페이지를 쓰고, 목차에 반영하고, 커밋 후 push까지 합니다.
3. 1~2분 뒤 사이트에 반영됩니다. (자세한 규칙은 `CLAUDE.md`)

## 폴더 구조

| 경로 | 역할 |
|---|---|
| `index.html` | 목차 화면 (초성 탭 · 검색 · 카테고리 필터) |
| `concepts/<slug>.html` | 개념 1건 = 파일 1개 |
| `concepts/_template.html` | 개념 페이지 템플릿 |
| `data/concepts.js` | 개념 목록 데이터 |
| `assets/css`, `assets/js` | 공통 스타일·스크립트 |
| `scripts/check.mjs` | 무결성 검사 (`node scripts/check.mjs`) |
| `scripts/sort.mjs` | 개념·단어 목록을 slug 알파벳순으로 정렬 (`node scripts/sort.mjs`) |
| `jp/index.html` | 일본어 단어장 목차 (오십음 탭 · 품사 필터) |
| `jp/words/<slug>.html` | 단어 1개 = 파일 1개 |
| `data/words.js` | 단어 목록 데이터 |
