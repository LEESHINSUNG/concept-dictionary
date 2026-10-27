/* 상세 페이지 — 빵부스러기의 그룹 이름·목차 링크와 이전/다음 개념 채우기 */
(function () {
  'use strict';

  var C = window.Concept;
  var slug = document.body.getAttribute('data-slug');
  var item = C.find(slug);
  if (!item) return;

  var group = C.groupOf(item.title);
  var indexHref = '../index.html#' + new URLSearchParams({ tab: group }).toString();

  // 최근에 추가된 개념이면 칩 줄 맨 앞에 NEW
  if (C.isNew(item)) {
    var chips = document.querySelector('#head .chips');
    if (chips) {
      var badge = document.createElement('span');
      badge.className = 'chip chip--new';
      badge.textContent = 'NEW';
      chips.insertBefore(badge, chips.firstChild);
    }
  }

  // 빵부스러기의 그룹 이름 (JS가 꺼져 있으면 빈 칸으로 남습니다)
  var groupSlot = document.querySelector('[data-group]');
  if (groupSlot) groupSlot.textContent = group;

  // 목차 링크는 선택했던 탭이 열리도록 해시를 붙입니다.
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-index-link]'),
    function (link) { link.href = indexHref; }
  );

  // 이전/다음 개념
  var around = C.neighbors(slug);
  [['prev', around.prev], ['next', around.next]].forEach(function (pair) {
    var link = document.querySelector('[data-pager="' + pair[0] + '"]');
    if (!link) return;
    var other = pair[1];
    if (!other) {
      link.hidden = true;
      return;
    }
    link.hidden = false;
    link.href = other.slug + '.html';
    var title = link.querySelector('[data-pager-title]');
    if (title) title.textContent = other.title;
  });
})();
