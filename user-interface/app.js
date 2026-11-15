import { createPageLifecycle } from "./src/lib/page-lifecycle.js";export function initializeHome(navigate) {
  'use strict';const lifecycle = createPageLifecycle();const { listen, setTimeout, clearTimeout } = lifecycle;
  const data = window.WAREHOUSE;
  if (!data) {console.error('Missing content.js');return;}
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (value = '') => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const safeStorage = {
    get(k, defaultValue = '') {try {return localStorage.getItem(k) || defaultValue;} catch {return defaultValue;}},
    set(k, v) {try {localStorage.setItem(k, v);return true;} catch {return false;}}
  };
  let saved = new Set(JSON.parse(safeStorage.get('warehouse-bookmarks', '[]')));
  let activeFilter = 'all';
  let expanded = false;
  let featuredIndex = 0;
  let toastTimer;
  const postById = new Map(data.posts.map((p) => [p.id, p]));
  const projectById = new Map(data.projects.map((p) => [p.id, p]));

  function toast(message) {
    const node = $('#toast');
    node.textContent = message;
    node.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('visible'), 4000);
  }
  function tag(p) {return `<span class="tag ${esc(p.category || '')}">${esc(p.label || p.category)}</span>`;}
  function tools(items) {return `<div class="stack-list">${items.map((item) => `<span>${esc(item)}</span>`).join('')}</div>`;}

  function renderRecent() {
    $('#recent-posts').innerHTML = data.posts.slice(0, 3).map((p) => `
      <button type="button" class="recent-card" data-post="${esc(p.id)}" aria-label="Read ${esc(p.title)}">
        <img src="${esc(p.image)}" alt="" loading="eager">
        <div class="recent-info"><div class="recent-meta">${tag(p)}<span>${esc(p.minutes)} min read</span></div>
          <h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p>
        </div>
      </button>`).join('');
  }
  function renderFilters() {
    $('#post-filters').innerHTML = data.categories.map((c) => `<button type="button" class="filter-chip ${c.id === activeFilter ? 'active' : ''}" data-filter="${esc(c.id)}" aria-pressed="${c.id === activeFilter}">${c.emoji} ${esc(c.name)}</button>`).join('');
  }
  function postCard(p) {
    return `<article class="post-card">
      <button type="button" class="post-image-button" data-post="${esc(p.id)}" aria-label="Read ${esc(p.title)}"><img src="${esc(p.image)}" alt="" loading="eager"></button>
      <div class="post-card-body">${tag(p)}<h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p>
        <div class="post-card-meta"><button class="read-button" type="button" data-post="${esc(p.id)}">Read note ↗ <span class="visually-hidden">${esc(p.title)}</span></button>
        <button class="bookmark-button ${saved.has(p.id) ? 'saved' : ''}" data-save="${esc(p.id)}" aria-label="${saved.has(p.id) ? 'Remove bookmark' : 'Bookmark'}: ${esc(p.title)}" aria-pressed="${saved.has(p.id)}" type="button">${saved.has(p.id) ? '♥' : '♡'}</button></div>
      </div>
    </article>`;
  }
  function renderPosts() {
    renderFilters();
    const matching = data.posts.filter((p) => activeFilter === 'all' || p.category === activeFilter);
    const shown = expanded ? matching : matching.slice(0, 3);
    $('#post-grid').innerHTML = shown.map(postCard).join('') || '<p class="empty-state">This shelf is empty for now. Add a post in content.js ♡</p>';
    $('#post-count').textContent = `Showing ${shown.length} of ${matching.length} notes`;
    const more = $('#show-more');
    more.hidden = matching.length <= 3;
    more.innerHTML = expanded ? 'Show fewer notes <span aria-hidden="true">↑</span>' : 'Show more notes <span aria-hidden="true">↓</span>';
  }
  function renderFeatured() {
    const p = data.projects[featuredIndex];
    if (!p) return;
    $('#featured-project').innerHTML = `<img class="feature-image" src="${esc(p.image)}" alt="Preview of ${esc(p.title)}">
      <div class="feature-body">${tag(p)}<h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>${tools(p.tools)}<button class="feature-view" type="button" data-project="${esc(p.id)}">Explore case study ↗</button></div>`;
    $('#featured-dots').innerHTML = data.projects.map((_, i) => `<button class="${i === featuredIndex ? 'active' : ''}" type="button" data-slide="${i}" aria-label="Go to featured project ${i + 1}" aria-current="${i === featuredIndex ? 'true' : 'false'}"></button>`).join('');
  }
  function renderProjects() {
    $('#project-grid').innerHTML = data.projects.map((p) => `
      <article class="project-card"><img src="${esc(p.image)}" loading="eager" alt="Preview of ${esc(p.title)}">
        <div class="project-card-body">${tag(p)}<h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
          ${tools(p.tools)}<button type="button" class="read-button" data-project="${esc(p.id)}">View case study ↗</button>
        </div></article>`).join('');
  }
  function renderTimeline() {
    $('#timeline').innerHTML = data.timeline.map((t) => `<div class="timeline-item"><div class="timeline-step" aria-hidden="true">${t.emoji}</div><div class="timeline-content"><span class="timeline-index">CHAPTER ${esc(t.year)}</span><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p></div></div>`).join('');
  }
  function openDialog(dialog) {
    if (typeof dialog.showModal === 'function') dialog.showModal();else
    dialog.setAttribute('open', '');
    document.body.classList.add('modal-open');
  }
  function closeDialog(dialog) {
    if (typeof dialog.close === 'function') dialog.close();else
    dialog.removeAttribute('open');
    if (!$$('dialog[open]').length) document.body.classList.remove('modal-open');
  }
  function postDetail(p) {
    $('#detail-type').textContent = `${p.label.toUpperCase()}  ·  ${p.minutes} MIN READ${p.demo ? '  ·  EXAMPLE ARTICLE' : ''}`;
    $('#detail-content').innerHTML = `<img class="detail-cover" src="${esc(p.image)}" alt="">
      <h2 id="detail-title">${esc(p.title)}</h2><p class="detail-lead">${esc(p.intro || p.excerpt)}</p>
      ${(p.paragraphs || []).map((x) => `<p>${esc(x)}</p>`).join('')}
      ${p.takeaways?.length ? `<h3>Notes to keep 📦</h3><ul>${p.takeaways.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
      <div class="detail-actions"><button type="button" class="detail-back" data-close-detail>Back to warehouse</button><button type="button" class="detail-copy" data-copy="${esc(p.id)}">Copy article link ↗</button></div>`;
    openDialog($('#detail-dialog'));
  }
  function projectDetail(p) {
    $('#detail-type').textContent = `${p.category.toUpperCase()}${p.demo ? '  ·  EXAMPLE PROJECT' : ''}`;
    $('#detail-content').innerHTML = `<img class="detail-cover" src="${esc(p.image)}" alt="">
      <h2 id="detail-title">${esc(p.title)}</h2><p class="detail-lead">${esc(p.summary)}</p>
      ${tools(p.tools)}<h3>The question</h3><p>${esc(p.challenge)}</p><h3>My approach</h3><p>${esc(p.approach)}</p>
      <h3>What this project explores</h3><ul>${p.insights.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="detail-actions"><button type="button" class="detail-back" data-close-detail>Back to warehouse</button><button type="button" class="detail-copy" data-copy="${esc(p.id)}">Copy project link ↗</button></div>`;
    openDialog($('#detail-dialog'));
  }
  function openPost(id) {if (postById.has(id)) navigate(`/notes/${encodeURIComponent(id)}`);}
  function openProject(id) {if (projectById.has(id)) navigate(`/projects/${encodeURIComponent(id)}`);}
  function toggleSaved(id) {
    if (saved.has(id)) saved.delete(id);else saved.add(id);
    safeStorage.set('warehouse-bookmarks', JSON.stringify([...saved]));
    renderPosts();
    toast(saved.has(id) ? 'Saved this note to your browser bookmarks ♡' : 'Removed the bookmark.');
  }
  function slideTo(i) {
    featuredIndex = (i + data.projects.length) % data.projects.length;
    renderFeatured();
  }
  function search(query) {
    const q = query.trim().toLowerCase();
    const matches = [
    ...data.posts.map((p) => ({ ...p, kind: 'post', group: 'NOTE' })),
    ...data.projects.map((p) => ({ ...p, kind: 'project', group: 'PROJECT' }))].
    filter((p) => !q || [p.title, p.excerpt, p.summary, p.category, p.label, ...(p.tools || [])].filter(Boolean).join(' ').toLowerCase().includes(q));
    $('#search-results').innerHTML = matches.length ? matches.map((p) => `<button type="button" class="search-result" data-${p.kind}="${esc(p.id)}">
      <img src="${esc(p.image)}" alt=""><span><small>${p.group} · ${esc(p.category)}</small><strong>${esc(p.title)}</strong></span><span aria-hidden="true">↗</span>
    </button>`).join('') : '<div class="empty-state">Nothing on that shelf yet. Try SQL, Python, or career ✦</div>';
  }
  function openSearch() {
    $('#search-input').value = '';
    search('');
    openDialog($('#search-dialog'));
    $('#search-input').focus();
  }
  function openSocial(key) {
    const value = (data.settings[key] || '').trim();
    if (!value) {toast(`Add your ${key === 'coffee' ? 'coffee support link' : key === 'email' ? 'email address' : key + ' URL'} in content.js to activate this button ♡`);return;}
    if (key === 'email') {
      window.location.href = `mailto:${encodeURIComponent(value).replace('%40', '@')}?subject=Hello%20from%20My%20Data%20Warehouse`;
    } else if (/^https?:\/\//i.test(value)) {
      window.open(value, '_blank', 'noopener,noreferrer');
    } else {
      toast('Please enter a full https:// URL in content.js.');
    }
  }
  function copyLink(id) {
    const url = `${location.href.split('#')[0]}#${encodeURIComponent(id)}`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(() => toast('Link copied! ♡')).catch(() => toast(`Copy this link: ${url}`));
    } else {
      const tmp = document.createElement('textarea');
      tmp.value = url;tmp.style.cssText = 'position:fixed;top:-1000px;left:-1000px';
      document.body.appendChild(tmp);tmp.select();
      let ok = false;try {ok = document.execCommand('copy');} catch {}tmp.remove();
      toast(ok ? 'Link copied! ♡' : `Copy this link: ${url}`);
    }
  }
  function routeFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (postById.has(id)) openPost(id);else
    if (projectById.has(id)) openProject(id);
  }
  function closeMobileMenu() {
    $('.mobile-nav').hidden = true;
    $('.mobile-toggle').setAttribute('aria-expanded', 'false');
    $('.mobile-toggle').setAttribute('aria-label', 'Open menu');
  }
  function initEvents() {
    listen(document, 'click', (e) => {
      const target = e.target.closest('button,a');
      if (!target) return;
      if (target.matches('[data-post]')) {closeOpenSearch();openPost(target.dataset.post);} else
      if (target.matches('[data-project]')) {closeOpenSearch();openProject(target.dataset.project);} else
      if (target.matches('[data-save]')) toggleSaved(target.dataset.save);else
      if (target.matches('[data-filter]')) {activeFilter = target.dataset.filter;expanded = false;renderPosts();} else
      if (target.matches('[data-slide]')) slideTo(Number(target.dataset.slide));else
      if (target.matches('[data-social]')) openSocial(target.dataset.social);else
      if (target.matches('[data-close-detail]')) closeDialog($('#detail-dialog'));else
      if (target.matches('[data-copy]')) copyLink(target.dataset.copy);else
      if (target.matches('.close-modal')) closeDialog(target.closest('dialog'));
      if (target.closest('.mobile-nav') && target.tagName === 'A') closeMobileMenu();
    });
    $$('.search-open').forEach((b) => listen(b, 'click', openSearch));
    listen($('#search-input'), 'input', (e) => search(e.target.value));
    listen($('#featured-next'), 'click', () => slideTo(featuredIndex + 1));
    listen($('#featured-prev'), 'click', () => slideTo(featuredIndex - 1));
    listen($('#show-more'), 'click', () => {expanded = !expanded;renderPosts();});
    listen($('#career-story-btn'), 'click', () => {navigate('/journey');});
    listen($('.mobile-toggle'), 'click', () => {
      const nav = $('.mobile-nav');nav.hidden = !nav.hidden;
      $('.mobile-toggle').setAttribute('aria-expanded', String(!nav.hidden));
      $('.mobile-toggle').setAttribute('aria-label', nav.hidden ? 'Open menu' : 'Close menu');
    });
    listen($('#subscribe-form'), 'submit', (e) => {
      e.preventDefault();const input = $('#subscribe-email');
      if (!input.validity.valid) {input.focus();toast('Please enter a valid email address.');return;}
      safeStorage.set('warehouse-newsletter-demo', input.value.trim());
      input.value = '';
      toast('Saved in this browser only! ✦ Connect an email service to enable real subscriptions.');
    });
    listen(document, 'keydown', (e) => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !/input|textarea/i.test(document.activeElement.tagName) && !$$('dialog[open]').length) {e.preventDefault();openSearch();}
      if (e.key === 'Escape') closeMobileMenu();
    });
    $$('dialog').forEach((dialog) => {
      listen(dialog, 'click', (e) => {if (e.target === dialog) closeDialog(dialog);});
      listen(dialog, 'close', () => {if (!$$('dialog[open]').length) document.body.classList.remove('modal-open');});
    });
    if (false && 'IntersectionObserver' in window) {
      const navLinks = $$('.desktop-nav a');
      const sections = ['top', 'career', 'knowledge', 'portfolio', 'about'].map((id) => document.getElementById(id)).filter(Boolean);
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) if (entry.isIntersecting) {
          const key = entry.target.id;
          navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${key}`));
        }
      }, { rootMargin: '-20% 0px -70% 0px' });
      sections.forEach((el) => observer.observe(el));
    }
    listen(window, 'hashchange', routeFromHash);
  }
  function closeOpenSearch() {if ($('#search-dialog').open) closeDialog($('#search-dialog'));}
  function init() {
    $('#year').textContent = new Date().getFullYear();
    renderRecent();renderPosts();renderFeatured();renderProjects();renderTimeline();initEvents();routeFromHash();
  }
  init();return lifecycle.cleanup;
}
