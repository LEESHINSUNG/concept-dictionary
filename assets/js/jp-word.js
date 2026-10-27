/* 단어 상세 페이지 — 빵부스러기의 행 이름과 이전/다음 단어 채우기 */
(function () {
  'use strict';

  var W = window.JPWord;
  var slug = document.body.getAttribute('data-slug');
  var item = W.find(slug);
  if (!item) return;

  var row = W.rowOf(item.kana);
  var indexHref = '../index.html#' + new URLSearchParams({ tab: row }).toString();

  // 최근에 추가된 단어면 칩 줄 맨 앞에 NEW
  if (W.isNew(item)) {
    var chips = document.querySelector('#head .chips');
    if (chips) {
      var badge = document.createElement('span');
      badge.className = 'chip chip--new';
      badge.textContent = 'NEW';
      chips.insertBefore(badge, chips.firstChild);
    }
  }

  var rowSlot = document.querySelector('[data-row]');
  if (rowSlot) rowSlot.textContent = row;

  Array.prototype.forEach.call(
    document.querySelectorAll('[data-index-link]'),
    function (link) { link.href = indexHref; }
  );

  var around = W.neighbors(slug);
  [['prev', around.prev], ['next', around.next]].forEach(function (pair) {
    var link = document.querySelector('[data-pager="' + pair[0] + '"]');
    if (!link) return;
    var other = pair[1];
    if (!other) { link.hidden = true; return; }
    link.hidden = false;
    link.href = other.slug + '.html';
    var title = link.querySelector('[data-pager-title]');
    if (title) title.textContent = other.word;
  });
})();
