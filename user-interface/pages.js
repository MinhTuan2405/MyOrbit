import { createPageLifecycle } from "./src/lib/page-lifecycle.js";export function initializePage(navigate) {
  'use strict';const lifecycle = createPageLifecycle();const { listen, setTimeout, clearTimeout } = lifecycle;
  const D = window.WAREHOUSE;
  if (!D) return;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (v = '') => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const param = (name) => new URLSearchParams(location.search).get(name) || '';
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const noteLink = (id) => `note.html?id=${encodeURIComponent(id)}`;
  const projectLink = (id) => `project.html?id=${encodeURIComponent(id)}`;
  function getSaved() {try {return new Set(JSON.parse(localStorage.getItem('warehouse-bookmarks') || '[]'));} catch {return new Set();}}
  let saved = getSaved();
  let toastTimer;
  function toast(msg) {const x = $('#page-toast');if (!x) return;x.textContent = msg;x.classList.add('visible');clearTimeout(toastTimer);toastTimer = setTimeout(() => x.classList.remove('visible'), 3200);}
  function save(id) {if (saved.has(id)) saved.delete(id);else saved.add(id);try {localStorage.setItem('warehouse-bookmarks', JSON.stringify([...saved]));} catch {};toast(saved.has(id) ? 'Saved to your reading list.' : 'Removed from saved notes.');$$(`[data-bookmark="${id}"]`).forEach((el) => {el.textContent = saved.has(id) ? '★ Saved' : '☆ Save';el.setAttribute('aria-pressed', String(saved.has(id)));});if ($('#saved-count')) $('#saved-count').textContent = `(${saved.size})`;}
  function noteCard(n) {return `<article class="post-card full-post-card"><a class="post-image-button" href="${noteLink(n.id)}"><img src="${esc(n.image)}" alt="" loading="lazy"></a><div class="post-card-body"><span class="tag ${esc(n.category)}">${esc(n.label)}</span><h3><a href="${noteLink(n.id)}">${esc(n.title)}</a></h3><p>${esc(n.excerpt)}</p><div class="post-card-meta"><a class="read-button" href="${noteLink(n.id)}">Read full article ↗</a><button class="bookmark-button" data-bookmark="${esc(n.id)}" type="button" aria-pressed="${saved.has(n.id)}">${saved.has(n.id) ? '★ Saved' : '☆ Save'}</button></div></div></article>`;}
  function projectCard(p) {return `<article class="gallery-card"><a href="${projectLink(p.id)}" class="gallery-image"><img src="${esc(p.image)}" loading="lazy" alt="Preview image for ${esc(p.title)}"></a><div class="gallery-card-body"><div class="gallery-top"><span class="tag">${esc(p.label)}</span><span class="example-flag">SAMPLE CASE STUDY</span></div><h3><a href="${projectLink(p.id)}">${esc(p.title)}</a></h3><p>${esc(p.summary)}</p><div class="stack-list">${p.tools.map((t) => `<span>${esc(t)}</span>`).join('')}</div><div class="gallery-card-bottom"><a class="read-button" href="${projectLink(p.id)}">Open case study ↗</a>${p.id === 'ecommerce-dashboard' ? '<a href="lab.html" class="mini-demo-link">Live demo ↗</a>' : ''}</div></div></article>`;}
  function setupGlobal() {
    const active = { note: 'notes', project: 'projects', lab: 'projects' }[document.body.dataset.page] || document.body.dataset.page;
    $$('.desktop-nav [data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === active));
    $$('.year').forEach((x) => x.textContent = String(new Date().getFullYear()));
    const mt = $('.mobile-toggle'),mn = $('.mobile-nav');
    listen(mt, 'click', () => {mn.hidden = !mn.hidden;mt.setAttribute('aria-expanded', String(!mn.hidden));mt.setAttribute('aria-label', mn.hidden ? 'Open menu' : 'Close menu');});
    const dialog = $('#global-search'),input = $('#global-search-input'),results = $('#global-search-results');
    function showSearch() {input.value = '';doSearch('');dialog.showModal();setTimeout(() => input.focus(), 30);}
    function doSearch(q) {const term = q.trim().toLowerCase();const entries = [...D.posts.map((n) => ({ ...n, kind: 'NOTE', url: noteLink(n.id) })), ...D.projects.map((p) => ({ ...p, kind: 'PROJECT', url: projectLink(p.id) }))];const matches = entries.filter((e) => !term || [e.title, e.excerpt, e.summary, e.category, ...(e.tools || [])].filter(Boolean).join(' ').toLowerCase().includes(term));results.innerHTML = matches.length ? matches.slice(0, 16).map((e) => `<a class="search-result" href="${e.url}"><img src="${esc(e.image)}" alt=""><span><small>${e.kind} / ${esc(e.category)}</small><strong>${esc(e.title)}</strong></span><span aria-hidden="true">↗</span></a>`).join('') : '<div class="empty-state">Nothing found. Try a different keyword.</div>';}
    listen($('.search-open'), 'click', showSearch);listen($('.search-close'), 'click', () => dialog.close());listen(input, 'input', () => doSearch(input.value));
    listen(dialog, 'click', (e) => {if (e.target === dialog) dialog.close();});
    listen(document, 'keydown', (e) => {if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName) && !e.ctrlKey && !e.metaKey && !dialog.open) {e.preventDefault();showSearch();}});
    listen(document, 'click', (e) => {const b = e.target.closest('[data-bookmark]');if (b) {e.preventDefault();save(b.dataset.bookmark);}});
  }
  function setupNotes() {
    let cat = param('category') || 'all',q = '',order = 'default',savedOnly = false;
    $('#notes-total').textContent = `${D.posts.length} example notes`;
    function render() {
      $('#notes-filters').innerHTML = D.categories.map((c) => `<button class="filter-chip ${cat === c.id ? 'active' : ''}" data-topic="${c.id}" type="button" aria-pressed="${cat === c.id}">${c.emoji} ${esc(c.name)}</button>`).join('');
      let arr = D.posts.filter((n) => (cat === 'all' || n.category === cat) && (!q || [n.title, n.excerpt, n.label, ...(D.articleExtras[n.id] || []).map((x) => x.title)].join(' ').toLowerCase().includes(q)) && (!savedOnly || saved.has(n.id)));
      if (order === 'az') arr = [...arr].sort((a, b) => a.title.localeCompare(b.title));if (order === 'short') arr = [...arr].sort((a, b) => a.minutes - b.minutes);
      $('#notes-list').innerHTML = arr.map(noteCard).join('');$('#notes-list').hidden = !arr.length;$('#notes-empty').hidden = arr.length > 0;
      $('#notes-result-count').textContent = `${arr.length} ${arr.length === 1 ? 'note' : 'notes'} found${savedOnly ? ' in your saved list' : ''}`;
      $('#saved-count').textContent = `(${saved.size})`;
      $('#view-bookmarks').classList.toggle('active-filter', savedOnly);
    }
    listen($('#notes-filters'), 'click', (e) => {const b = e.target.closest('[data-topic]');if (b) {cat = b.dataset.topic;render();}});
    listen($('#notes-search'), 'input', (e) => {q = e.target.value.toLowerCase().trim();render();});
    listen($('#notes-sort'), 'change', (e) => {order = e.target.value;render();});
    listen($('#view-bookmarks'), 'click', () => {savedOnly = !savedOnly;render();});
    listen($('#notes-reset'), 'click', () => {cat = 'all';q = '';savedOnly = false;$('#notes-search').value = '';render();});
    listen(document, 'click', (e) => {if (e.target.closest('[data-bookmark]')) setTimeout(render, 0);});
    render();
  }
  function setupNote() {
    const n = D.posts.find((x) => x.id === param('id')) || D.posts[0];
    const extras = D.articleExtras[n.id] || [];
    document.title = `${n.title} | My Data Warehouse`;
    $('#crumb-article').textContent = n.title;
    const steps = [{ title: 'The starting point', text: n.intro }, ...n.paragraphs.map((p, i) => ({ title: ['First things first', 'What to watch out for', 'Putting it into practice'][i] || `Thought ${i + 1}`, text: p })), ...extras];
    const sections = steps.map((s, i) => `<section class="article-section" id="section-${i}"><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p>${s.code ? `<div class="code-block"><div class="code-top"><span>EXAMPLE CODE</span><button type="button" data-copy-code="${i}">Copy code</button></div><pre><code>${esc(s.code)}</code></pre></div>` : ''}</section>`).join('');
    $('#article-body').innerHTML = `<div class="eyebrow ink-eyebrow">${esc(n.label)} / ${n.minutes} MIN READ / EXAMPLE ARTICLE</div><h1>${esc(n.title)}</h1><p class="article-lead">${esc(n.excerpt)}</p><div class="article-actionbar"><span>📦 Knowledge shelf</span><button type="button" class="outline-button" data-bookmark="${esc(n.id)}" aria-pressed="${saved.has(n.id)}">${saved.has(n.id) ? '★ Saved' : '☆ Save'}</button><button class="outline-button" id="copy-note-link" type="button">Copy link ↗</button></div><img class="article-cover" src="${esc(n.image)}" alt="Topic illustration"><div class="article-notice"><strong>Example article</strong> This content is for previewing the full website and can be replaced in <code>content.js</code>.</div><div class="article-prose">${sections}<section class="article-section" id="takeaways"><h2>Quick recap</h2><ul>${n.takeaways.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></section></div><div class="article-outro"><span>That's the whole note.</span><a href="notes.html">← Back to all notes</a></div>`;
    $('#article-toc').innerHTML = steps.map((s, i) => `<a href="#section-${i}">${esc(s.title)}</a>`).join('') + '<a href="#takeaways">Quick recap</a>';
    $('#related-notes').innerHTML = D.posts.filter((x) => x.id !== n.id).sort((a, b) => Number(b.category === n.category) - Number(a.category === n.category)).slice(0, 3).map(noteCard).join('');
    listen($('#copy-note-link'), 'click', () => copyText(location.href));
    $$('[data-copy-code]').forEach((b) => listen(b, 'click', () => {const s = steps[Number(b.dataset.copyCode)];if (s?.code) copyText(s.code);}));
    function progress() {const doc = document.documentElement;const pct = Math.max(0, Math.min(100, window.scrollY / Math.max(1, doc.scrollHeight - innerHeight) * 100));$('#reading-progress').style.width = pct + '%';}
    listen(window, 'scroll', progress, { passive: true });progress();
  }
  function copyText(txt) {if (navigator.clipboard && window.isSecureContext) {navigator.clipboard.writeText(txt).then(() => toast('Copied to clipboard.')).catch(() => toast('Could not copy automatically.'));} else {const t = document.createElement('textarea');t.value = txt;t.style.position = 'fixed';t.style.opacity = '0';document.body.appendChild(t);t.select();try {document.execCommand('copy');toast('Copied to clipboard.');} catch {toast('Could not copy automatically.');}t.remove();}}
  function setupProjects() {
    const cats = ['All projects', ...new Set(D.projects.map((p) => p.label))];let cat = 'All projects';
    function render() {$('#projects-filters').innerHTML = cats.map((c) => `<button class="filter-chip ${cat === c ? 'active' : ''}" type="button" data-type="${esc(c)}" aria-pressed="${cat === c}">${esc(c)}</button>`).join('');const arr = D.projects.filter((p) => cat === 'All projects' || p.label === cat);$('#projects-result-count').textContent = `Showing ${arr.length} of ${D.projects.length} case studies`;$('#projects-list').innerHTML = arr.map(projectCard).join('');}
    listen($('#projects-filters'), 'click', (e) => {const b = e.target.closest('[data-type]');if (b) {cat = b.dataset.type;render();}});render();
  }
  function setupProject() {
    const p = D.projects.find((x) => x.id === param('id')) || D.projects[0],extra = D.projectExtras[p.id] || {};
    document.title = `${p.title} | My Data Warehouse`;$('#crumb-project').textContent = p.title;
    $('#case-study').innerHTML = `<div class="case-top"><div><span class="eyebrow ink-eyebrow">${esc(p.category.toUpperCase())} / SAMPLE CASE STUDY</span><h1>${esc(p.title)}</h1><p>${esc(p.summary)}</p><div class="stack-list">${p.tools.map((t) => `<span>${esc(t)}</span>`).join('')}</div><div class="case-actions">${p.id === 'ecommerce-dashboard' ? '<a class="primary-button" href="lab.html">Open live demo ↗</a>' : ''}<a class="outline-button" href="projects.html">← All projects</a></div></div><img class="case-hero-image" src="${esc(p.image)}" alt="Project preview illustration"><div class="case-stats"><div><small>FORMAT</small><strong>Case study</strong></div><div><small>DATA</small><strong>Synthetic / example</strong></div><div><small>STAGE</small><strong>Working concept</strong></div></div><div class="case-sections"><aside class="case-sidebar"><span class="eyebrow ink-eyebrow">IN THIS CASE STUDY</span><a href="#case-problem">01 / The problem</a><a href="#case-scope">02 / Scope</a><a href="#case-process">03 / Process</a><a href="#case-results">04 / What it shows</a><a href="#case-next">05 / Next iteration</a></aside><div class="case-content"><section id="case-problem"><span class="section-n">01 / THE QUESTION</span><h2>The problem</h2><p>${esc(p.challenge)}</p></section><section id="case-scope"><span class="section-n">02 / CONTEXT</span><h2>Scope and inputs</h2><p>${esc(extra.scope || 'An illustrative example dataset and a focused set of questions.')}</p></section><section id="case-process"><span class="section-n">03 / HOW IT WORKS</span><h2>Approach</h2><p>${esc(p.approach)}</p><ol class="process-steps">${(extra.steps || []).map((x, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><p>${esc(x)}</p></li>`).join('')}</ol></section><section id="case-results"><span class="section-n">04 / LEARNINGS</span><h2>What the project explores</h2><p>${esc(extra.outcome || 'This exercise demonstrates an analysis workflow using example data.')}</p><div class="insight-grid">${p.insights.map((v, i) => `<div><small>INSIGHT ${i + 1}</small><p>${esc(v)}</p></div>`).join('')}</div></section><section id="case-next"><span class="section-n">05 / LOOKING AHEAD</span><h2>What I'd improve next</h2><p>${esc(extra.next || 'Improve validation, explore additional segments, and automate repetitive steps.')}</p><div class="case-end"><a href="projects.html">← Back to all projects</a>${p.id === 'ecommerce-dashboard' ? '<a href="lab.html">Launch interactive demo ↗</a>' : ''}</div></section></div></div>`;
    $('#related-projects').innerHTML = D.projects.filter((x) => x.id !== p.id).slice(0, 2).map(projectCard).join('');
  }
  function setupJourney() {
    $('#journey-chapters').innerHTML = D.timeline.map((t, i) => `<article class="journey-chapter"><div class="chapter-stamp">${esc(t.emoji)}</div><div><span class="eyebrow ink-eyebrow">CHAPTER ${esc(t.year)}</span><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p><a href="${i === 2 ? 'projects.html' : i === 3 ? 'notes.html' : 'note.html?id=my-data-journey'}">${i === 2 ? 'Explore projects' : i === 3 ? 'Read recent notes' : 'Read the story'} ↗</a></div></article>`).join('');
  }
  function setupAbout() {
    listen($('#contact-button'), 'click', () => {const e = (D.settings.email || '').trim();if (!e) {toast('Add your email in content.js to activate this button.');return;}location.href = 'mailto:' + encodeURIComponent(e).replace('%40', '@') + '?subject=Hello%20from%20the%20website';});
  }
  function setupLab() {
    // Synthetic deterministic demo data. No customer, business or private information.
    const rows = [];const regions = ['North', 'Central', 'South'],labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let m = 0; m < 12; m++) for (let r = 0; r < 3; r++) {
      const orders = Math.round((125 + r * 44 + m * 12 + Math.sin(m * 1.6 + r) * 19) * (1 + (m === 10 ? .17 : 0)));
      const aov = Math.round(41 + r * 5 + m * .62 + Math.cos(m + r) * 3);
      rows.push({ month: labels[m], monthNo: m, region: regions[r], orders, revenue: orders * aov });
    }
    const fmt = (v) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(v);
    const money = (v) => '$' + fmt(v);
    const rg = $('#dash-region'),metric = $('#dash-metric');
    function filtered() {return labels.map((l, i) => {const selected = rows.filter((r) => r.monthNo === i && (rg.value === 'all' || r.region === rg.value));const revenue = selected.reduce((s, x) => s + x.revenue, 0),orders = selected.reduce((s, x) => s + x.orders, 0);return { month: l, revenue, orders, aov: orders ? revenue / orders : 0 };});}
    function draw() {const a = filtered(),revenue = a.reduce((x, r) => x + r.revenue, 0),orders = a.reduce((x, r) => x + r.orders, 0),aov = revenue / orders,key = metric.value,max = Math.max(...a.map((r) => r[key])) * 1.12;
      $('#dash-kpis').innerHTML = [['Total revenue', money(revenue), 'Across selected region'], ['Orders', fmt(orders), 'Synthetic transactions'], ['Average order value', money(aov), 'Revenue / order']].map(([title, val, sub]) => `<div class="kpi-card"><span>${title}</span><strong>${val}</strong><small>${sub}</small></div>`).join('');
      const names = { revenue: 'Revenue', orders: 'Orders', aov: 'Average order value' };$('#chart-title').textContent = names[key] + ' over time';$('#chart-legend').textContent = '● ' + (rg.value === 'all' ? 'All regions' : rg.value);
      const w = 960,h = 320,left = 65,top = 24,bottom = 48,right = 24,cw = w - left - right,ch = h - top - bottom;
      const px = (i) => left + i / (a.length - 1) * cw,py = (v) => top + ch - v / max * ch;
      const points = a.map((r, i) => [px(i), py(r[key])]),poly = points.map((p) => p.join(',')).join(' ');
      const area = points.map((p) => p.join(',')).join(' ') + ` ${px(11)},${top + ch} ${px(0)},${top + ch}`;
      const grid = Array.from({ length: 5 }, (_, i) => {let val = max * i / 4,y = py(val);return `<line x1="${left}" y1="${y}" x2="${w - right}" y2="${y}" stroke="#e9e1ee"/><text x="${left - 12}" y="${y + 4}" text-anchor="end" fill="#82758c" font-size="12">${key === 'orders' ? fmt(val) : money(val)}</text>`;}).join('');
      const months = labels.map((l, i) => `<text x="${px(i)}" y="${h - 12}" text-anchor="middle" fill="#80748c" font-size="12">${l}</text>`).join('');
      const marks = points.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#594379" stroke="#fff" stroke-width="2"><title>${labels[i]}: ${key === 'orders' ? fmt(a[i][key]) : money(a[i][key])}</title></circle>`).join('');
      $('#dash-chart').innerHTML = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Line chart of ${names[key]} per month">${grid}<polygon points="${area}" fill="#bba3e9" opacity=".18"/><polyline points="${poly}" fill="none" stroke="#5d487b" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>${marks}${months}</svg>`;
      $('#dash-table-body').innerHTML = a.map((row) => `<tr><th>${row.month}</th><td>${money(row.revenue)}</td><td>${fmt(row.orders)}</td><td>${money(row.aov)}</td></tr>`).join('');
    }
    listen(rg, 'change', draw);listen(metric, 'change', draw);
    listen($('#dash-export'), 'click', () => {const csv = ['month,revenue,orders,aov', ...filtered().map((r) => [r.month, r.revenue, r.orders, r.aov.toFixed(2)].join(','))].join('\n');const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' }),url = URL.createObjectURL(blob),a = document.createElement('a');a.href = url;a.download = 'warehouse-demo-' + rg.value.toLowerCase() + '.csv';a.click();setTimeout(() => URL.revokeObjectURL(url), 500);toast('CSV export started.');});draw();
  }
  setupGlobal();
  ({ notes: setupNotes, note: setupNote, projects: setupProjects, project: setupProject, journey: setupJourney, about: setupAbout, lab: setupLab }[document.body.dataset.page] || (() => {}))();return lifecycle.cleanup;
}
