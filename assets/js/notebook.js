/* Progressive enhancement: the complete archive remains readable without JS. */
(() => {
  'use strict';
  const archive = document.querySelector('[data-notebook]');
  if (!archive) return;
  const form = archive.querySelector('form');
  const count = archive.querySelector('[data-result-count]');
  const empty = archive.querySelector('[data-empty]');
  const entries = Array.from(archive.querySelectorAll('[data-note]'), element => ({
    element,
    tags: JSON.parse(element.dataset.tags || '[]'),
    year: element.dataset.year,
    status: element.dataset.status,
    text: element.querySelector('[data-search-text]').textContent.toLocaleLowerCase()
  }));
  const controls = Object.fromEntries(['q', 'tag', 'year', 'status'].map(name => [name, form.elements.namedItem(name)]));
  const options = {
    tag: [...new Set(entries.flatMap(entry => entry.tags))].sort(),
    year: [...new Set(entries.map(entry => entry.year))].sort().reverse(),
    status: [...new Set(entries.map(entry => entry.status))].sort()
  };
  Object.entries(options).forEach(([key, values]) => {
    values.forEach(value => controls[key].add(new Option(value, value)));
  });
  function filter(syncUrl = true) {
    const words = controls.q.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    entries.forEach(entry => {
      const match = words.every(word => entry.text.includes(word)) &&
        (!controls.tag.value || entry.tags.includes(controls.tag.value)) &&
        (!controls.year.value || entry.year === controls.year.value) &&
        (!controls.status.value || entry.status === controls.status.value);
      entry.element.hidden = !match;
      if (match) visible++;
    });
    archive.querySelectorAll('[data-month]').forEach(month => {
      month.hidden = !month.querySelector('[data-note]:not([hidden])');
    });
    count.textContent = `${visible} / ${entries.length} 篇记录`;
    empty.hidden = visible !== 0;
    if (syncUrl) {
      const url = new URL(window.location.href);
      Object.entries(controls).forEach(([key, control]) => {
        if (control.value) url.searchParams.set(key, control.value);
        else url.searchParams.delete(key);
      });
      window.history.replaceState(null, '', url);
    }
  }
  function restore() {
    const params = new URLSearchParams(window.location.search);
    Object.entries(controls).forEach(([key, control]) => {
      const value = params.get(key) || '';
      control.value = key === 'q' || options[key].includes(value) ? value : '';
    });
    filter(false);
  }
  form.addEventListener('submit', event => { event.preventDefault(); filter(); });
  form.addEventListener('input', () => filter());
  form.addEventListener('change', () => filter());
  form.addEventListener('reset', () => { setTimeout(() => filter(), 0); });
  window.addEventListener('popstate', restore);
  restore();
  form.hidden = false;
})();
