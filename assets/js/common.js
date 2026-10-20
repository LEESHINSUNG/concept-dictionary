/* 초성 분류·정렬 유틸. 목차와 상세 페이지가 함께 씁니다. */
(function () {
  'use strict';

  // 탭(그룹) 순서 — 이 순서가 목차 표시 순서이자 이전/다음 개념의 순서입니다.
  var GROUPS = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
    'A–Z', '0–9', '기타'
  ];

  // 한글 초성 19개를 기본 자음 14개로 합친 표 (쌍자음 → 기본 자음)
  var CHOSEONG = [
    'ㄱ', 'ㄱ', 'ㄴ', 'ㄷ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅂ', 'ㅅ',
    'ㅅ', 'ㅇ', 'ㅈ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ];

  // 제목 앞에 붙는 공백·기호는 건너뜁니다.
  var SKIP = /[\s(){}\[\]<>"'“”‘’«»『』「」.,!?;:*#~`_\-+=/\\|&^%$@]/;

  function firstChar(title) {
    var text = String(title == null ? '' : title);
    for (var i = 0; i < text.length; i += 1) {
      if (!SKIP.test(text.charAt(i))) return text.charAt(i);
    }
    return '';
  }

  function groupOf(title) {
    var c = firstChar(title);
    if (!c) return '기타';
    var code = c.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      return CHOSEONG[Math.floor((code - 0xAC00) / 588)];
    }
    if (/[A-Za-z]/.test(c)) return 'A–Z';
    if (/[0-9]/.test(c)) return '0–9';
    return '기타';
  }

  function headingOf(title) {
    var group = groupOf(title);
    if (group === 'A–Z') return firstChar(title).toUpperCase();
    return group;
  }

  function sorted(list) {
    return (list || []).slice().sort(function (a, b) {
      var ga = GROUPS.indexOf(groupOf(a.title));
      var gb = GROUPS.indexOf(groupOf(b.title));
      if (ga !== gb) return ga - gb;
      return String(a.title).toLowerCase()
        .localeCompare(String(b.title).toLowerCase(), 'ko', { numeric: true });
    });
  }

  function all() {
    return (window.CONCEPTS || []).slice();
  }

  // 데이터에 실제로 존재하는 카테고리 목록 (가나다순)
  function categories() {
    var seen = {};
    var out = [];
    all().forEach(function (item) {
      if (item && item.category && !seen[item.category]) {
        seen[item.category] = true;
        out.push(item.category);
      }
    });
    return out.sort(function (a, b) {
      return a.localeCompare(b, 'ko', { numeric: true });
    });
  }

  function find(slug) {
    var list = all();
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].slug === slug) return list[i];
    }
    return null;
  }

  // 정렬된 전체 목록에서 앞·뒤 개념을 찾습니다.
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

  window.Concept = {
    GROUPS: GROUPS,
    groupOf: groupOf,
    headingOf: headingOf,
    sorted: sorted,
    all: all,
    categories: categories,
    find: find,
    neighbors: neighbors
  };
})();
