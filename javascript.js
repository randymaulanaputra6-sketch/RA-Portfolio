'use strict';
/* ===== DATA (edit here) ===== */
const EMAIL = 'randymaulanaputra6@gmail.com'; // isi email asli, mis. 'nama@domain.com'
const PROJECTS = [
  { id: 'sate-life', name: 'Sate Life', desc: 'Manage your own satay business and grow your shop!',
    genre: ['Simulation', 'Management', 'Android', 'Windows'], engine: 'Godot Engine', platform: '—', status: 'In Development',
    cover: 'assets/images/projects/sate-life/SateLife.webp',
    hover: 'assets/images/projects/sate-life/SateLife.webp',
    url: 'https://ranzdev.itch.io/sate-life',
    screenshots: [],
    overview: '[Isi ringkasan game]', features: [], tech: [], challenges: [], credits: [], links: [] },
  { id: 'farmer-homer', name: 'Farmer Homer', desc: 'A farming simulation game with a relaxing atmosphere.',
    genre: ['Simulation', 'Pixel Art', 'Android'], engine: 'Godot Engine', platform: '—', status: 'On Hold',
    cover: 'assets/images/projects/farmer-homer/FarmerHomer.webp',
    hover: 'assets/images/projects/farmer-homer/FarmerHomer.webp',
    url: 'https://ranzdev.itch.io/farmer-homer',
    screenshots: [],
    overview: 'Farmer Homer adalah game idle / clicker santai yang berfokus pada gameplay yang santai. Tanam berbagai jenis tanaman, panen hasilnya, kumpulkan uang, lalu tingkatkan kecepatan tumbuh dan pendapatan untuk membangun kebun yang semakin besar.', features: [], tech: [], challenges: [], credits: [], links: [] },
  { id: 'tapak-adventure', name: 'Tapak Adventure', desc: 'A cozy adventure game about exploring a mysterious island.',
    genre: ['Adventure', '2D', '2D Platformer', 'Android'], engine: 'Godot Engine', platform: '—', status: 'Released',
    cover: 'assets/images/projects/tapak-adventure/TapakAdventure.webp',
    hover: 'assets/images/projects/tapak-adventure/TapakAdventure.webp',
    url: 'https://ranzdev.itch.io/tapak-adventure',
    screenshots: [],
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
  {
  id: 'd1',
  title: 'Membuat Menu Settings Baru',
  project: 'sate-life',
  cat: 'Development Progress',
  date: '11-09-2026',
  thumb: 'assets/images/devlog/sate-life/Setting-Menu-Baru.webp',
  hover: 'assets/images/devlog/sate-life/Setting-Menu-Baru-Hover.webp',
  url: '',
  excerpt: 'Mengembangkan ulang menu pengaturan Sate Life menjadi scene fullscreen dengan sistem konfigurasi terpusat, penyimpanan otomatis, dan integrasi pengaturan grafis Sky3D.',
  body: [
    'Pada tahap pengembangan ini, saya memutuskan untuk melakukan perombakan pada sistem pengaturan Sate Life. Sebelumnya, menu Settings hanya tersedia dalam bentuk popup yang muncul di dalam permainan. Sekarang, menu tersebut dikembangkan menjadi scene tersendiri dengan tampilan fullscreen agar navigasi dan pengelolaan pengaturan menjadi lebih terstruktur.',

    'Menu Settings baru dibagi menjadi beberapa kategori utama, yaitu Audio, Gameplay, dan Grafik. Kategori Audio menyediakan pengaturan volume musik dan efek suara. Gameplay menyediakan pengaturan sensitivitas kamera serta tampilan petunjuk interaksi. Sementara itu, kategori Grafik mencakup preset kualitas visual, batas FPS, fullscreen, serta pengaturan lingkungan permainan.',

    'Salah satu perubahan terpenting adalah menjadikan SettingsManager sebagai pusat pengelolaan seluruh konfigurasi. Sebelumnya, sebagian tanggung jawab pengaturan masih tersebar di dalam script antarmuka. Sekarang, OptionGrafikPanel hanya bertugas menghubungkan kontrol UI dengan fungsi yang tersedia di SettingsManager. Proses penerapan perubahan dan penyimpanan konfigurasi sepenuhnya ditangani oleh SettingsManager menggunakan ConfigFile Godot.',

    'Sistem penyimpanan ini memungkinkan pengaturan tetap dipertahankan meskipun pemain berpindah scene atau menjalankan ulang permainan. Setiap perubahan pada slider, checkbox, preset grafik, maupun batas FPS akan langsung diterapkan sesuai jenis pengaturannya dan disimpan ke dalam konfigurasi lokal.',

    'Untuk pengaturan grafis, saya mengembangkan beberapa preset kualitas, yaitu Low, Medium, High, Max, dan Custom. Setiap preset memiliki kombinasi pengaturan Sky, Clouds, Fog, dan Shadows yang berbeda. Selain itu, status checkbox dan tombol preset dibuat mengikuti konfigurasi terakhir sehingga tampilan menu tetap sinkron ketika dibuka kembali.',

    'Bagian yang cukup menantang adalah integrasi dengan plugin Sky3D. Awalnya, perubahan pengaturan lingkungan tidak memberikan efek apa pun ketika pemain kembali ke permainan. Setelah ditelusuri, masalahnya berasal dari pemisahan scene. Sky3D hanya tersedia di dalam scene World, sedangkan menu Settings dan Main Menu merupakan scene yang berbeda.',

    'Solusinya adalah memisahkan proses penyimpanan pengaturan dengan penerapan pengaturan ke lingkungan permainan. SettingsManager menyimpan seluruh preferensi pemain terlebih dahulu. Ketika scene World selesai dimuat, scene tersebut memanggil fungsi SettingsManager untuk menerapkan konfigurasi yang tersimpan ke node Sky3D. Dengan pendekatan ini, sistem tidak perlu membuat duplikasi Sky3D di Main Menu maupun Settings.',

    'Pengembangan ini menjadi salah satu langkah penting dalam membangun arsitektur Sate Life yang lebih terorganisir. Selain memperbaiki tampilan menu, saya juga belajar bahwa pengelolaan data, siklus hidup scene, dan komunikasi antar sistem memiliki peran besar dalam pengembangan game. Menu Settings sekarang tidak hanya menjadi tempat untuk mengubah preferensi, tetapi juga bagian dari sistem konfigurasi terpusat yang dapat dikembangkan lebih lanjut.'
  ],
  images: []
  },
  {
  id: 'd2',
  title: 'Memperbarui Tampilan Tablet',
  project: 'sate-life',
  cat: 'UI/UX',
  date: '11-14-2026',
  thumb: 'assets/images/devlog/sate-life/UI-Baru-Tablet.webp',
  hover: 'assets/images/devlog/sate-life/UI-Baru-Tablet.webp',
  url: '',
  excerpt: 'Memperbarui tampilan tablet dalam Sate Life dengan desain yang lebih modern, dan responsif, serta menambahkan fitur baru untuk meningkatkan pengalaman pengguna.',
  body: [
    'Dalam pengembangan Sate Life, tablet merupakan salah satu fitur utama yang digunakan pemain untuk mengakses berbagai menu dan mengelola bisnis sate mereka. Pada tahap ini, saya melakukan pembaruan pada tampilan antarmuka tablet agar terlihat lebih modern, rapi, dan nyaman digunakan.',

    'Pembaruan ini berfokus pada peningkatan visual UI, penataan elemen, serta konsistensi desain antar-menu. Tujuannya bukan sekadar membuat tampilan lebih menarik, tetapi juga meningkatkan pengalaman pemain ketika berinteraksi dengan berbagai fitur di dalam game.',
  
    'Dengan tampilan baru ini, tablet diharapkan dapat memberikan kesan seperti perangkat digital yang benar-benar digunakan untuk mengelola sebuah bisnis. Pembaruan ini menjadi salah satu langkah dalam meningkatkan kualitas visual dan pengalaman pengguna di Sate Life.'
  ],
  images: []
},
  {
  id: 'd3',
  title: 'Membuat Aplikasi Wallpaper Untuk Tablet',
  project: 'sate-life',
  cat: 'UI/UX',
  date: '11-15-2026',
  thumb: 'assets/images/devlog/sate-life/UI-&-Aplikasi-Wallpaper.webp',
  hover: 'assets/images/devlog/sate-life/UI-&-Aplikasi-Wallpaper.webp',
  url: '',
  excerpt: 'Menambahkan UI Tanpa Logic Aplikasi Wallpaper di tablet Sate Life, memungkinkan pemain untuk mengubah tampilan latar belakang tablet sesuai preferensi mereka.',
  body: [
    'Pada pengembangan Sate Life kali ini, saya mulai mengerjakan sebuah aplikasi wallpaper baru yang akan menjadi bagian dari sistem tablet dalam game. Aplikasi ini dirancang untuk memberikan pilihan kepada pemain dalam mengubah tampilan wallpaper tablet sesuai dengan preferensi mereka.',

    'Saat ini, aplikasi menyediakan 4 pilihan wallpaper berbeda yang dapat dipilih melalui antarmuka aplikasi. Saya berusaha membuat tampilannya tetap sederhana, modern, dan konsisten dengan desain UI tablet Sate Life secara keseluruhan.',
  
    'Fokus utama pada tahap ini adalah membangun UI/UX, mulai dari penyusunan layout, penempatan pilihan wallpaper, hingga merancang tampilan agar mudah dipahami dan digunakan oleh pemain.',

    'Meskipun aplikasi ini belum memiliki logika fungsional untuk mengubah wallpaper secara dinamis, tahap ini merupakan langkah awal yang penting dalam pengembangan fitur baru. Nantinya, saya akan menambahkan logika yang memungkinkan pemain untuk memilih dan menerapkan wallpaper pilihan mereka ke tablet dalam game.'
  ],
  images: []
},
  {
  id: 'd4',
  title: 'Menambahkan Logic Untuk Aplikasi Wallpaper di Tablet',
  project: 'sate-life',
  cat: 'Programming',
  date: '11-15-2026',
  thumb: 'assets/images/devlog/sate-life/Wallpaper-App-Logic.webp',
  hover: 'assets/images/devlog/sate-life/Wallpaper-App-Logic-Hover.webp',
  url: 'https://youtu.be/xe952vxWH5g',
  excerpt: 'Menambahkan Logic Aplikasi Wallpaper di tablet Sate Life, memungkinkan pemain untuk mengubah tampilan latar belakang tablet sesuai preferensi mereka.',
  body: [
    'Setelah menyelesaikan tahap perancangan UI/UX, kali ini saya melanjutkan pengembangan aplikasi wallpaper pada tablet Sate Life ke tahap implementasi logic. Fokus utamanya adalah membuat seluruh elemen antarmuka yang sebelumnya hanya berupa tampilan menjadi fitur yang benar-benar dapat digunakan.',

    'Sistem pergantian wallpaper kini sudah berhasil diimplementasikan. Pemain dapat memilih salah satu dari 4 pilihan wallpaper yang tersedia dan menerapkannya untuk mengubah tampilan latar belakang tablet di dalam game.',
  
    'Selain itu, saya juga menyelesaikan integrasi antara antarmuka aplikasi dengan sistem utama tablet, sehingga perubahan wallpaper dapat langsung diterapkan pada tampilan tablet tanpa harus keluar dari aplikasi.',

    'Dengan penambahan logic ini, aplikasi wallpaper kini berfungsi sepenuhnya, memberikan pemain pengalaman yang lebih interaktif dan personalisasi dalam mengelola tampilan tablet mereka di Sate Life.'
  ],
  images: []
},
  {
  id: 'd5',
  title: 'Inventory System & Stock Management',
  project: 'sate-life',
  cat: 'Programming',
  date: '11-16-2026',
  thumb: 'assets/images/devlog/sate-life/UI-dan-Logic-Tas.webp',
  hover: 'assets/images/devlog/sate-life/UI-dan-Logic-Tas.webp',
    url: '',
    excerpt: 'Membuat Sistem dan UI Untuk Tas di tablet Sate Life, memungkinkan pemain untuk mengelola item dan inventaris mereka dengan lebih mudah.',
  body: [
    'Pada tahap pengembangan kali ini, saya menyelesaikan sistem inventaris beserta UI tas pada game Sate Life. Fitur ini dirancang untuk mempermudah pemain dalam mengelola persediaan bahan baku sebelum digunakan dalam aktivitas berjualan.',

    'Sistem ini memiliki beberapa fungsi utama, yaitu menampilkan isi tas dan stok yang tersedia di gerobak, serta memungkinkan pemain memindahkan persediaan dari tas ke gerobak sesuai kebutuhan.',
  
    'Selain itu, sistem inventaris juga sudah terintegrasi dengan aplikasi pesan pada tablet. Setiap aktivitas transfer stok akan memicu notifikasi sehingga pemain dapat mengetahui perubahan persediaan secara langsung.',

    'Dengan adanya sistem inventaris ini, pemain dapat lebih mudah mengatur bahan baku yang dimiliki, memastikan ketersediaan stok untuk berjualan, dan meningkatkan efisiensi dalam mengelola bisnis sate mereka di dalam game.'
  ],
  images: []
},
  {
  id: 'd6',
  title: 'Memperbarui Tampilan Aplikasi Finance di Tablet',
  project: 'sate-life',
  cat: 'Programming',
  date: '11-16-2026',
  thumb: 'assets/images/devlog/sate-life/UI-Baru-App-Finance.webp',
  hover: 'assets/images/devlog/sate-life/UI-Baru-App-Finance.webp',
    url: '',
    excerpt: 'Memperbarui tampilan aplikasi finance di tablet Sate Life, meningkatkan pengalaman pengguna dalam mengelola keuangan.',
  body: [
    'Pada pembaruan kali ini, saya melakukan peningkatan pada UI aplikasi Finance di dalam game Sate Life. Fokus utama pembaruan ini adalah menciptakan tampilan yang lebih modern, rapi, dan nyaman digunakan oleh player.',

    'Beberapa elemen antarmuka disesuaikan agar informasi keuangan lebih mudah dibaca dan navigasi terasa lebih intuitif. Dengan tampilan yang lebih segar, diharapkan player dapat mengakses informasi keuangan dan mengelola uang dalam game dengan lebih mudah.',
  
    'Pembaruan ini menjadi salah satu langkah untuk meningkatkan kualitas UI/UX sekaligus membuat pengalaman bermain Sate Life terasa lebih profesional.'
  ],
  images: []
},
{
  id: 'd7',
  title: 'Mengembangkan Sistem Player Upgrade',
  project: 'sate-life',
  cat: 'Development Progress',
  date: '11-17-2026',
  thumb: 'assets/images/devlog/sate-life/Make-Upgrade-Player-App.webp',
  hover: 'assets/images/devlog/sate-life/Make-Upgrade-Player-App.webp',
  url: '',
  excerpt: 'Mengembangkan sistem Player Upgrade untuk meningkatkan kemampuan karakter dan memberikan progres perkembangan yang lebih menarik dalam Sate Life.',
  body: [
    'Pada tahap pengembangan kali ini, saya berhasil menyelesaikan sistem Player Upgrade di dalam game Sate Life. Fitur ini dirancang untuk memberikan kesempatan kepada player dalam meningkatkan kemampuan karakter menggunakan uang yang diperoleh dari aktivitas berjualan.',

    'Sistem ini menghadirkan empat kategori peningkatan, yaitu Walk Speed, Bag Capacity, Shop Closing Time, dan Charisma. Setiap upgrade memiliki fungsi dan pengaruh tersendiri terhadap gameplay, mulai dari meningkatkan mobilitas pemain hingga memberikan peluang lebih baik dalam melayani pelanggan.',

    'Selain itu, sistem pembelian telah terintegrasi dengan ekonomi permainan, sehingga setiap peningkatan membutuhkan uang yang diperoleh dari aktivitas berjualan. Seluruh progres upgrade juga terhubung dengan sistem save/load agar peningkatan yang telah dibeli tetap tersimpan.',

    'Dengan selesainya fitur ini, Sate Life memiliki sistem pengembangan karakter yang lebih terstruktur dan memberikan lebih banyak alasan bagi player untuk terus mengembangkan bisnis mereka.'
  ],
  images: []
}

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
function coverMedia({ src, hover, alt, url, label }) {
  const main = img(src, alt);
  main.classList.add('cover-main');
  const stack = el('div', { class: 'cover-stack' }, main);
  if (hover) {
    const alt2 = img(hover, '');
    alt2.classList.add('cover-alt');
    alt2.setAttribute('aria-hidden', 'true');
    stack.append(alt2);
  }
  const href = normalizeUrl(url);
  if (!href) return stack;
  return el('a', { class: 'cover-link', href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': label }, stack);
}
function projectThumb(p) {
  const main = img(p.cover, 'Cover game ' + p.name);
  main.classList.add('cover-main');
  const stack = el('div', { class: 'cover-stack' }, main);
  if (p.hover) {
    const alt = img(p.hover, '');
    alt.classList.add('cover-alt');
    alt.setAttribute('aria-hidden', 'true');
    stack.append(alt);
  }
  const href = normalizeUrl(p.url);
  if (!href) return stack;
  return el('a', { class: 'cover-link', href, target: '_blank', rel: 'noopener noreferrer',
    'aria-label': 'Buka halaman download ' + p.name }, stack);
}
function projectCard(p) {
  return el('article', { class: 'card' },
    el('div', { class: 'cover' }, projectThumb(p)),
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
  return coverMedia({ src: d.thumb, hover: d.hover, alt: 'Thumbnail ' + d.title,
    url: d.url, label: 'Buka link: ' + d.title });
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
