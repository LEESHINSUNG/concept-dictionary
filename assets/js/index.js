/* 목차 화면 동작 — 탭 · 검색 · 카테고리 필터 · URL 해시 저장 */
(function () {
  'use strict';

  var C = window.Concept;
  var ALL_CAT = '전체';

  var el = {
    total: document.getElementById('total'),
    search: document.getElementById('search'),
    cats: document.getElementById('cats'),
    tabs: document.getElementById('tabs'),
    result: document.getElementById('result'),
    list: document.getElementById('list')
  };

  var state = { tab: null, cat: ALL_CAT, q: '' };

  // ── 상태 ↔ URL 해시 ──────────────────────────────
  function readHash() {
    var raw = location.hash.replace(/^#/, '');
    var params = new URLSearchParams(raw);
    var tab = params.get('tab');
    var cat = params.get('cat');
    var q = params.get('q');
    if (tab && C.GROUPS.indexOf(tab) !== -1) state.tab = tab;
    if (cat) state.cat = cat;
    if (q) state.q = q;
  }

  function writeHash() {
    var params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    if (state.tab) params.set('tab', state.tab);
    if (state.cat !== ALL_CAT) params.set('cat', state.cat);
    var text = params.toString();
    history.replaceState(null, '', text ? '#' + text : location.pathname + location.search);
  }

  // ── 걸러내기 ─────────────────────────────────────
  function byCategory(list) {
    if (state.cat === ALL_CAT) return list;
    return list.filter(function (item) { return item.category === state.cat; });
  }

  function matches(item, needle) {
    var hay = [item.title, item.sub, item.summary, item.category]
      .filter(Boolean).join(' ').toLowerCase();
    return hay.indexOf(needle) !== -1;
  }

  function visible() {
    var list = byCategory(C.all());
    var needle = state.q.trim().toLowerCase();
    if (needle) {
      // 검색 중에는 탭을 무시하고 전체에서 찾습니다.
      return C.sorted(list.filter(function (item) { return matches(item, needle); }));
    }
    return C.sorted(list.filter(function (item) { return C.groupOf(item.title) === state.tab; }));
  }

  // ── 그리기 ───────────────────────────────────────
  function tabCounts() {
    var counts = {};
    C.GROUPS.forEach(function (g) { counts[g] = 0; });
    byCategory(C.all()).forEach(function (item) {
      var g = C.groupOf(item.title);
      counts[g] = (counts[g] || 0) + 1;
    });
    return counts;
  }

  function firstFilledTab() {
    var counts = tabCounts();
    for (var i = 0; i < C.GROUPS.length; i += 1) {
      if (counts[C.GROUPS[i]] > 0) return C.GROUPS[i];
    }
    return 'ㄱ';
  }

  function renderCats() {
    el.cats.textContent = '';
    [ALL_CAT].concat(C.categories()).forEach(function (name) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pill';
      button.textContent = name;
      button.setAttribute('aria-pressed', String(state.cat === name));
      button.addEventListener('click', function () {
        state.cat = name;
        var counts = tabCounts();
        if (!state.q && !counts[state.tab]) state.tab = firstFilledTab();
        render();
      });
      el.cats.appendChild(button);
    });
  }

  function renderTabs() {
    var counts = tabCounts();
    var searching = state.q.trim() !== '';
    el.tabs.textContent = '';
    C.GROUPS.forEach(function (group) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pill pill--tab' + (counts[group] ? '' : ' pill--empty');
      button.textContent = group;
      button.setAttribute('aria-pressed', String(!searching && state.tab === group));
      button.setAttribute('aria-label', group + ' 개념 ' + counts[group] + '개');
      button.addEventListener('click', function () {
        state.tab = group;
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
    link.href = 'concepts/' + item.slug + '.html';

    var main = document.createElement('span');
    main.className = 'card__main';

    var title = document.createElement('span');
    title.className = 'card__title';
    title.textContent = item.title;
    if (item.sub) {
      var sub = document.createElement('span');
      sub.className = 'card__sub';
      sub.textContent = item.sub;
      title.appendChild(sub);
    }
    main.appendChild(title);

    var summary = document.createElement('span');
    summary.className = 'card__summary';
    summary.textContent = item.summary;
    main.appendChild(summary);

    var meta = document.createElement('span');
    meta.className = 'card__meta';

    var chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = item.category;
    meta.appendChild(chip);

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
      empty.textContent = C.all().length === 0
        ? '아직 등록된 개념이 없어요.'
        : '검색 결과가 없어요.';
      el.list.appendChild(empty);
      return;
    }

    var heading = null;
    items.forEach(function (item) {
      var next = C.headingOf(item.title);
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

  function renderResult(count) {
    var needle = state.q.trim();
    el.result.textContent = needle
      ? '‘' + needle + '’ 검색 결과 ' + count + '개'
      : '‘' + state.tab + '’ 개념 ' + count + '개';
  }

  function render() {
    var items = visible();
    renderCats();
    renderTabs();
    renderResult(items.length);
    renderList(items);
    writeHash();
  }

  // ── 시작 ─────────────────────────────────────────
  el.total.textContent = String(C.all().length);
  readHash();
  // 해시로 지정된 탭은 비어 있어도 그대로 존중합니다.
  if (!state.tab) state.tab = firstFilledTab();
  el.search.value = state.q;

  el.search.addEventListener('input', function () {
    state.q = el.search.value;
    render();
  });

  render();
})();
