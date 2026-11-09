'use strict';
/* ===== DATA (edit here) ===== */
const EMAIL = 'randymaulanaputra6@gmail.com'; // isi email asli, mis. 'nama@domain.com'
const PROJECTS = [
  { id: 'sate-life', name: 'Sate Life', desc: 'Manage your own satay business and grow your shop!',
    genre: ['Simulation', 'Management', 'Android', 'Windows'], engine: 'Godot Engine', platform: '—', status: 'In Development',
    cover: 'assets/images/projects/sate-life/SateLife.jpg', screenshots: [],
    overview: '[Isi ringkasan game]', features: [], tech: [], challenges: [], credits: [], links: [] },
  { id: 'farmer-homer', name: 'Farmer Homer', desc: 'A farming simulation game with a relaxing atmosphere.',
    genre: ['Simulation', 'Pixel Art', 'Android'], engine: 'Godot Engine', platform: '—', status: 'On Hold',
    cover: 'assets/images/projects/farmer-homer/FarmerHomer.png', screenshots: [],
    overview: 'Farmer Homer adalah game idle / clicker santai yang berfokus pada gameplay yang santai. Tanam berbagai jenis tanaman, panen hasilnya, kumpulkan uang, lalu tingkatkan kecepatan tumbuh dan pendapatan untuk membangun kebun yang semakin besar.', features: [], tech: [], challenges: [], credits: [], links: [] },
  { id: 'tapak-adventure', name: 'Tapak Adventure', desc: 'A cozy adventure game about exploring a mysterious island.',
    genre: ['Adventure', '2D', '2D Platformer', 'Android'], engine: 'Godot Engine', platform: '—', status: 'Released',
    cover: 'assets/images/projects/tapak-adventure/TapakAdventure.png', screenshots: [],
    overview: 'Tapak Adventure, permainan bergenre 2D platformer game yang mempunyai 30 level, memiliki sistem koin dan nyawa, serta musuh berupa slime bewarna merah yang bisa membuat mu memantul saat menginjak di atas nya.', features: [], tech: [], challenges: [], credits: [], links: [] }
];
const INFO = [['Role', 'Solo Game Developer'], ['Primary Engine', 'Godot Engine'], ['Primary Language', 'GDScript'],
  ['Currently Learning', 'C#'], ['Brand', 'RA Production']];
const SKILLS = [
  { name: 'Godot Engine', cat: 'Game Development', level: 'Primary', icon: '◆', desc: 'Game engine utama.' },
  { name: 'GDScript', cat: 'Game Development', level: 'Primary', icon: '</>', desc: 'Bahasa utama untuk gameplay.' },
  { name: 'Gameplay Programming', cat: 'Game Development', level: 'Primary', icon: '▶', desc: 'Mekanik dan sistem game.' },
  { name: 'UI Development', cat: 'Game Development', level: 'Primary', icon: '▣', desc: 'Antarmuka dalam game.' },
  { name: 'VS Code', cat: 'Development Tools', level: 'Familiar', icon: '✎', desc: 'Code editor.' },
  { name: 'Git & GitHub', cat: 'Development Tools', level: 'Familiar', icon: '⑂', desc: 'Version control.' },
  { name: 'C#', cat: 'Currently Learning', level: 'Learning', icon: '#', desc: 'Sedang dipelajari.' }
];
const DEVLOG_CATS = ['Programming', 'Game Design', 'UI/UX', 'Development Progress', 'Bug Fixes', 'Behind the Scenes'];
const DEVLOGS = [
  { id: 'd1', title: 'Membuat Menu Settings Baru', project: 'sate-life', cat: 'Development Progress', date: '11-09-2026',
  thumb: 'assets/images/projects/sate-life/SateLife.jpg', url: '', // isi link YouTube
  excerpt: 'Contoh artikel. Ganti dengan tulisan asli Anda.', body: ['[Isi artikel di sini.]'], images: [] }
];
const SOCIALS = [
  { name: 'GitHub', desc: 'Explore my code', url: 'https://github.com/randymaulanaputra6-sketch?tab=repositories', icon: '⌘' },
  { name: 'itch.io', desc: 'Play my games', url: 'https://ranzdev.itch.io', icon: '▶' },
  { name: 'TikTok', desc: 'Watch my devlog', url: 'https://www.tiktok.com/@ranzzdev', icon: '●' },
  { name: 'YouTube / Devlog', desc: 'Watch my devlog', url: 'https://www.youtube.com/@randymaulanaputra6893', icon: '●'},
  { name: 'Whatsapp', desc: 'Collab? here!', url: 'https://wa.link/nqt8ov', icon: '✉'},
  { name: 'Email', desc: EMAIL || 'Belum diisi', url: EMAIL ? 'mailto:' + EMAIL : '', icon: '✉' }
];
const NAV = [['home', 'Home'], ['projects', 'Projects'], ['about', 'About'], ['skills', 'Skills'], ['devlog', 'Devlog'], ['contact', 'Contact']];
const PAGE = 6;

/* ===== HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function el(tag, props = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') n.className = v; else if (k === 'text') n.textContent = v; else n.setAttribute(k, v);
  }
  kids.flat().filter(Boolean).forEach(c => n.append(c));
  return n;
}
const statusClass = s => (s === 'Released' ? 'ok' : s === 'In Development' ? 'warn' : '');
function img(src, alt, w = 640, h = 360) {
  const i = el('img', { src, alt, width: w, height: h, loading: 'lazy' });
  i.addEventListener('error', () => i.remove());
  return i;
}
function fillSelect(sel, label, items) {
  sel.replaceChildren(el('option', { value: '', text: label }), ...items.map(([v, t]) => el('option', { value: v, text: t })));
}
const unique = a => [...new Set(a)];

/* ===== 1. NAVIGATION ===== */
function initNav() {
  const nav = $('#nav'), menu = $('#menu'), burger = $('#burger');
  const onScroll = () => {
    nav.classList.toggle('solid', scrollY > 40);
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#progress').style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
    $('#top').hidden = scrollY < 600;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const setOpen = o => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); };
  burger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  const links = $$('a', menu);
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  NAV.forEach(([id]) => io.observe($('#' + id)));
  $('#fNav').append(...NAV.map(([id, t]) => el('a', { href: '#' + id, text: t })));
}

/* ===== 2. SCROLL REVEAL ===== */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
  $$('.head, .about, .skills-wrap, .link').forEach(n => { n.classList.add('reveal'); io.observe(n); });
}

/* ===== 3-5. PROJECTS ===== */
function projectCard(p) {
  return el('article', { class: 'card' },
    el('div', { class: 'cover' }, img(p.cover, 'Cover game ' + p.name)),
    el('div', { class: 'body' }, el('h3', { text: p.name }), el('p', { text: p.desc }),
      el('div', { class: 'tags' }, p.genre.map(g => el('span', { class: 'tag', text: g })),
        el('span', { class: 'badge ' + statusClass(p.status), text: p.status }))),
    el('button', { class: 'btn', 'data-id': p.id, text: 'View Details' }));
}
function renderProjects() {
  const q = $('#pSearch').value.trim().toLowerCase(), g = $('#pGenre').value, s = $('#pStatus').value;
  const list = PROJECTS.filter(p => p.name.toLowerCase().includes(q) && (!g || p.genre.includes(g)) && (!s || p.status === s));
  $('#pGrid').replaceChildren(...list.map(projectCard));
  $('#pEmpty').hidden = list.length > 0;
}
function initProjects() {
  fillSelect($('#pGenre'), 'Semua genre', unique(PROJECTS.flatMap(p => p.genre)).map(x => [x, x]));
  fillSelect($('#pStatus'), 'Semua status', unique(PROJECTS.map(p => p.status)).map(x => [x, x]));
  ['input', 'change'].forEach(ev => $('#projects .tools').addEventListener(ev, renderProjects));
  $('#pGrid').addEventListener('click', e => {
    const b = e.target.closest('[data-id]'); if (b) openProject(PROJECTS.find(p => p.id === b.dataset.id));
  });
  renderProjects();
}
const section = (title, items) => items && items.length ? [el('h4', { text: title }), el('ul', {}, items.map(i => el('li', { text: i })))] : [];
function openProject(p) {
  openModal(el('div', {},
    el('div', { class: 'cover' }, img(p.cover, 'Cover game ' + p.name, 800, 450)),
    el('h2', { id: 'mTitle', text: p.name }),
    el('div', { class: 'tags' }, [...p.genre, p.engine, p.platform].map(t => el('span', { class: 'tag', text: t })),
      el('span', { class: 'badge ' + statusClass(p.status), text: p.status })),
    el('h4', { text: 'Overview' }), el('p', { text: p.overview }),
    p.screenshots.map(s => el('div', { class: 'cover' }, img(s.src, s.alt, 800, 450))),
    section('Gameplay features', p.features), section('Technical highlights', p.tech),
    section('Development challenges', p.challenges), section('Credits', p.credits),
    p.links.length ? el('div', { class: 'grid links' }, p.links.map(l => el('a', { class: 'link', href: l.url, target: '_blank', rel: 'noopener noreferrer' }, el('b', { text: l.label })))) : null));
}

/* ===== 6. SKILLS ===== */
function initSkills() {
  $('#sGrid').append(...SKILLS.map(s => el('div', { class: 'skill' },
    el('span', { class: 'mono', text: s.icon }), el('b', { text: s.name }),
    el('small', { text: s.cat + ' · ' + s.level }), el('small', { text: s.desc }))));
}

/* ===== 7-9. DEVLOG ===== */
let dShown = PAGE;
const fmtDate = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
const projName = id => (PROJECTS.find(p => p.id === id) || {}).name || id;
function normalizeUrl(raw) {
  const v = (raw || '').trim();
  if (!v) return '';
  const full = /^https?:\/\//i.test(v) ? v : 'https://' + v.replace(/^\/+/, '');
  try { return new URL(full).href; } catch { return ''; }
}
function devlogThumb(d) {
  if (!d.thumb) return null;
  const image = img(d.thumb, 'Thumbnail ' + d.title);
  const href = normalizeUrl(d.url);
  if (!href) return image;
  return el('a', { class: 'cover-link', href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Buka link: ' + d.title }, image);
}
function renderDevlog(reset = true) {
  if (reset) dShown = PAGE;
  const q = $('#dSearch').value.trim().toLowerCase(), pr = $('#dProject').value, c = $('#dCat').value;
  const list = DEVLOGS.filter(d => d.title.toLowerCase().includes(q) && (!pr || d.project === pr) && (!c || d.cat === c))
    .sort((a, b) => b.date.localeCompare(a.date));
  $('#dGrid').replaceChildren(...list.slice(0, dShown).map(d => el('article', { class: 'card' },
    el('div', { class: 'cover' }, devlogThumb(d)),
    el('div', { class: 'body' }, el('span', { class: 'meta', text: fmtDate(d.date) + ' — ' + projName(d.project) }),
      el('h3', { text: d.title }), el('p', { text: d.excerpt }), el('span', { class: 'tag', text: d.cat })),
    el('button', { class: 'btn', 'data-id': d.id, text: 'Read More' }))));
  $('#dEmpty').hidden = list.length > 0;
  $('#dMore').hidden = list.length <= dShown;
}
function initDevlog() {
  fillSelect($('#dProject'), 'Semua proyek', PROJECTS.map(p => [p.id, p.name]));
  fillSelect($('#dCat'), 'Semua kategori', DEVLOG_CATS.map(x => [x, x]));
  ['input', 'change'].forEach(ev => $('#devlog .tools').addEventListener(ev, () => renderDevlog()));
  $('#dMore').addEventListener('click', () => { dShown += PAGE; renderDevlog(false); });
  $('#dGrid').addEventListener('click', e => {
    const b = e.target.closest('[data-id]'); if (!b) return;
    const d = DEVLOGS.find(x => x.id === b.dataset.id);
    openModal(el('div', {}, el('h2', { id: 'mTitle', text: d.title }),
      el('p', { class: 'meta', text: fmtDate(d.date) + ' — ' + d.cat + ' — ' + projName(d.project) }),
      d.body.map(t => el('p', { text: t })),
      d.images.map(i => el('figure', {}, img(i.src, i.caption, 800, 450), el('figcaption', { class: 'meta', text: i.caption })))));
  });
  renderDevlog();
}

/* ===== MODAL ===== */
let lastFocus = null;
function openModal(content) {
  lastFocus = document.activeElement;
  $('#mBody').replaceChildren(content);
  $('#modal').hidden = false; document.body.style.overflow = 'hidden'; $('#mClose').focus();
}
function closeModal() {
  $('#modal').hidden = true; document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
function initModal() {
  $('#mClose').addEventListener('click', closeModal);
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });
}

/* ===== ABOUT ===== */
function initAbout() {
  $('#info').append(...INFO.flatMap(([k, v]) => [el('dt', { text: k }), el('dd', { text: v })]));
  const btn = $('#readMore'), more = $('#more');
  btn.addEventListener('click', () => {
    more.hidden = !more.hidden; btn.textContent = more.hidden ? 'Read More' : 'Show Less';
    btn.setAttribute('aria-expanded', !more.hidden);
  });
}

/* ===== 10-11. CONTACT & TOAST ===== */
let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}
function initContact() {
  $('#cGrid').append(...SOCIALS.map(s => {
    const inner = [el('span', { class: 'mono', text: s.icon }), el('b', { text: s.name }), el('small', { text: s.desc })];
    if (!s.url) return el('div', { class: 'link', 'aria-disabled': 'true' }, ...inner, el('small', { text: '(URL belum diisi)' }));
    const ext = !s.url.startsWith('mailto:');
    return el('a', Object.assign({ class: 'link', href: s.url }, ext ? { target: '_blank', rel: 'noopener noreferrer' } : {}), ...inner);
  }));
  $('#copyEmail').addEventListener('click', async () => {
    if (!EMAIL) return toast('Email belum diisi di javascript.js');
    try { await navigator.clipboard.writeText(EMAIL); toast('Email disalin'); }
    catch { toast('Gagal menyalin. Salin manual: ' + EMAIL); }
  });
}

/* ===== 12. BACK TO TOP & INIT ===== */
function init() {
  $('#year').textContent = new Date().getFullYear();
  $('#top').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  initNav(); initProjects(); initAbout(); initSkills(); initDevlog(); initContact(); initModal(); initReveal();
}
document.addEventListener('DOMContentLoaded', init);
