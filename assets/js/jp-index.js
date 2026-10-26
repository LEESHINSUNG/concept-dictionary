/* 단어장 목차 동작 — 행 탭 · 검색 · 품사 필터 · URL 해시 저장 */
(function () {
  'use strict';

  var W = window.JPWord;
  var ALL_POS = '전체';
  var ALL_TAB = '전체';
  var TABS = [ALL_TAB].concat(W.ROWS);

  var el = {
    total: document.getElementById('total'),
    search: document.getElementById('search'),
    pos: document.getElementById('pos'),
    tabs: document.getElementById('tabs'),
    result: document.getElementById('result'),
    list: document.getElementById('list')
  };

  var state = { tab: ALL_TAB, pos: ALL_POS, q: '' };

  function readHash() {
    var params = new URLSearchParams(location.hash.replace(/^#/, ''));
    var tab = params.get('tab');
    var pos = params.get('pos');
    var q = params.get('q');
    if (tab && TABS.indexOf(tab) !== -1) state.tab = tab;
    if (pos) state.pos = pos;
    if (q) state.q = q;
  }

  function writeHash() {
    var params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    if (state.tab !== ALL_TAB) params.set('tab', state.tab);
    if (state.pos !== ALL_POS) params.set('pos', state.pos);
    var text = params.toString();
    history.replaceState(null, '', text ? '#' + text : location.pathname + location.search);
  }

  function byPos(list) {
    if (state.pos === ALL_POS) return list;
    return list.filter(function (item) { return item.pos === state.pos; });
  }

  function matches(item, needle) {
    var hay = [item.word, item.kana, item.meaning, item.pos, item.level]
      .filter(Boolean).join(' ').toLowerCase();
    return hay.indexOf(needle) !== -1;
  }

  function visible() {
    var list = byPos(W.all());
    var needle = state.q.trim().toLowerCase();
    if (needle) {
      return W.sorted(list.filter(function (item) { return matches(item, needle); }));
    }
    if (state.tab === ALL_TAB) return W.sorted(list);
    return W.sorted(list.filter(function (item) { return W.rowOf(item.kana) === state.tab; }));
  }

  function tabCounts() {
    var counts = {};
    TABS.forEach(function (t) { counts[t] = 0; });
    var list = byPos(W.all());
    list.forEach(function (item) {
      var r = W.rowOf(item.kana);
      counts[r] = (counts[r] || 0) + 1;
    });
    counts[ALL_TAB] = list.length;
    return counts;
  }

  function renderPos() {
    el.pos.textContent = '';
    [ALL_POS].concat(W.partsOfSpeech()).forEach(function (name) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pill';
      button.textContent = name;
      button.setAttribute('aria-pressed', String(state.pos === name));
      button.addEventListener('click', function () {
        state.pos = name;
        if (!state.q && !tabCounts()[state.tab]) state.tab = ALL_TAB;
        render();
      });
      el.pos.appendChild(button);
    });
  }

  function renderTabs() {
    var counts = tabCounts();
    var searching = state.q.trim() !== '';
    el.tabs.textContent = '';
    TABS.forEach(function (row) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pill pill--tab' + (counts[row] ? '' : ' pill--empty');
      button.textContent = row;
      button.setAttribute('aria-pressed', String(!searching && state.tab === row));
      button.setAttribute('aria-label', row + ' 단어 ' + counts[row] + '개');
      button.addEventListener('click', function () {
        state.tab = row;
        state.q = '';
        el.search.value = '';
        render();
      });
      el.tabs.appendChild(button);
    });
  }

  function cardOf(item) {
    var link = document.createElement('a');
    link.className = 'card';
    link.href = 'words/' + item.slug + '.html';

    var main = document.createElement('span');
    main.className = 'card__main';

    var word = document.createElement('span');
    word.className = 'card__word';
    word.textContent = item.word;
    var kana = document.createElement('span');
    kana.className = 'card__kana';
    kana.textContent = item.kana;
    word.appendChild(kana);
    main.appendChild(word);

    var meaning = document.createElement('span');
    meaning.className = 'card__summary';
    meaning.textContent = item.meaning;
    main.appendChild(meaning);

    var meta = document.createElement('span');
    meta.className = 'card__meta';

    if (item.level) {
      var level = document.createElement('span');
      level.className = 'chip chip--level';
      level.textContent = item.level;
      meta.appendChild(level);
    }

    var pos = document.createElement('span');
    pos.className = 'chip';
    pos.textContent = item.pos;
    meta.appendChild(pos);

    var date = document.createElement('span');
    date.className = 'card__date';
    date.textContent = item.date;
    meta.appendChild(date);

    var go = document.createElement('span');
    go.className = 'card__go';
    go.textContent = '보기 →';
    meta.appendChild(go);

    link.appendChild(main);
    link.appendChild(meta);
    return link;
  }

  function renderList(items) {
    el.list.textContent = '';

    if (!items.length) {
      var empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = W.all().length === 0
        ? '아직 등록된 단어가 없어요.'
        : '검색 결과가 없어요.';
      el.list.appendChild(empty);
      return;
    }

    var heading = null;
    items.forEach(function (item) {
      var next = W.headingOf(item.kana);
      if (next !== heading) {
        heading = next;
        var head = document.createElement('h2');
        head.className = 'section-head';
        head.textContent = heading;
        el.list.appendChild(head);
      }
      el.list.appendChild(cardOf(item));
    });
  }

  function render() {
    var items = visible();
    renderPos();
    renderTabs();
    var needle = state.q.trim();
    el.result.textContent = needle
      ? '‘' + needle + '’ 검색 결과 ' + items.length + '개'
      : '‘' + state.tab + '’ 단어 ' + items.length + '개';
    renderList(items);
    writeHash();
  }

  el.total.textContent = String(W.all().length);
  readHash();
  el.search.value = state.q;
  el.search.addEventListener('input', function () {
    state.q = el.search.value;
    render();
  });
  render();
})();
