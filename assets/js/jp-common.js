/* 오십음 분류·정렬 유틸. 단어장 목차와 상세 페이지가 함께 씁니다. */
(function () {
  'use strict';

  // 행(탭) 순서 — 이 순서가 목차 표시 순서이자 이전/다음 단어의 순서입니다.
  var ROWS = ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ', '기타'];

  // 글자 하나하나를 어느 행으로 볼지 (탁음·반탁음·작은 글자 포함)
  var ROW_OF = {};
  [
    ['あ', 'あいうえおぁぃぅぇぉ'],
    ['か', 'かきくけこがぎぐげご'],
    ['さ', 'さしすせそざじずぜぞ'],
    ['た', 'たちつてとだぢづでどっ'],
    ['な', 'なにぬねの'],
    ['は', 'はひふへほばびぶべぼぱぴぷぺぽ'],
    ['ま', 'まみむめも'],
    ['や', 'やゆよゃゅょ'],
    ['ら', 'らりるれろ'],
    ['わ', 'わゐゑをん']
  ].forEach(function (pair) {
    pair[1].split('').forEach(function (ch) { ROW_OF[ch] = pair[0]; });
  });

  // 가타카나는 히라가나로 바꿔서 봅니다.
  function toHiragana(ch) {
    var code = ch.charCodeAt(0);
    if (code >= 0x30A1 && code <= 0x30F6) return String.fromCharCode(code - 0x60);
    return ch;
  }

  function firstKana(kana) {
    var text = String(kana == null ? '' : kana).trim();
    return text ? toHiragana(text.charAt(0)) : '';
  }

  function rowOf(kana) {
    var c = firstKana(kana);
    return ROW_OF[c] || '기타';
  }

  // 섹션 머리글은 행 이름을 그대로 씁니다.
  function headingOf(kana) {
    return rowOf(kana);
  }

  function sorted(list) {
    return (list || []).slice().sort(function (a, b) {
      var ra = ROWS.indexOf(rowOf(a.kana));
      var rb = ROWS.indexOf(rowOf(b.kana));
      if (ra !== rb) return ra - rb;
      // 행 안에서는 오십음순 (브라우저의 일본어 정렬을 씁니다)
      return String(a.kana).localeCompare(String(b.kana), 'ja');
    });
  }

  function all() {
    return (window.WORDS || []).slice();
  }

  // 데이터에 실제로 있는 품사 목록
  function partsOfSpeech() {
    var seen = {};
    var out = [];
    all().forEach(function (item) {
      if (item && item.pos && !seen[item.pos]) {
        seen[item.pos] = true;
        out.push(item.pos);
      }
    });
    return out.sort(function (a, b) { return a.localeCompare(b, 'ko'); });
  }

  function find(slug) {
    var list = all();
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].slug === slug) return list[i];
    }
    return null;
  }

  function neighbors(slug) {
    var list = sorted(all());
    var at = -1;
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].slug === slug) { at = i; break; }
    }
    if (at === -1) return { prev: null, next: null };
    return {
      prev: at > 0 ? list[at - 1] : null,
      next: at < list.length - 1 ? list[at + 1] : null
    };
  }

  window.JPWord = {
    ROWS: ROWS,
    rowOf: rowOf,
    headingOf: headingOf,
    sorted: sorted,
    all: all,
    partsOfSpeech: partsOfSpeech,
    find: find,
    neighbors: neighbors
  };
})();
