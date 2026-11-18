/* Announcements: a message that shows up on players' screens without releasing a new version.
 *
 * The game reads announce.json from the repository (main branch) a few seconds after it starts and then every minute, on any
 * screen, so everyone who is playing sees a new announcement within a minute or two of it being committed. On the title screen it
 * is a card; in a night, in an online room or on any other screen it is a banner at the top that does not block anything and
 * fades after a while. "Got it" (or the banner showing once) remembers the id so the same announcement is not shown twice. An empty id means no announcement. Fields:
 *   id       anything unique, for example 2026-11-20-1 (change it to show a new message)
 *   title    the headline (up to 80 characters)
 *   message  the text (up to 600 characters; line breaks are kept)
 *   link     optional https address, and linkText the button label ("Read more")
 *   until    optional date, YYYY-MM-DD: the announcement stops showing after that day
 * The admin menu (type the admin word) has an Announcement section that writes this file's text for you to paste in.
 * Only plain text is ever shown, and a link must start with https://. Optional "type": "warn" makes the banner red. */
(() => {
  'use strict';
  const SOURCE = 'https://raw.githubusercontent.com/KCarnage1/FiveNightsAtZayeds/main/announce.json';
  const SEEN = 'fnaz_news_seen_v1';
  const NET = window.FNAZNET;
  const stage = document.getElementById('stage');
  if (!stage) return;

  const seen = () => { try { const a = JSON.parse(localStorage.getItem(SEEN) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } };
  const markSeen = (id) => { try { localStorage.setItem(SEEN, JSON.stringify([id, ...seen().filter((x) => x !== id)].slice(0, 30))); } catch (e) { /* private mode: shown again next time */ } };

  // plain text only, with limits, from anything the file contains
  function clean(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');
    const a = { id: str(raw.id, 60), title: str(raw.title, 80), message: str(raw.message, 600), link: str(raw.link, 300), linkText: str(raw.linkText, 40), until: str(raw.until, 10), type: raw.type === 'warn' ? 'warn' : 'info' };
    if (!a.id || !(a.title || a.message)) return null;
    if (!/^https:\/\/[^\s]+$/i.test(a.link)) a.link = '';
    if (a.until && /^\d{4}-\d{2}-\d{2}$/.test(a.until) && new Date(a.until + 'T23:59:59').getTime() < Date.now()) return null;
    return a;
  }

  /* ---------- the card ---------- */
  const card = document.createElement('div');
  card.id = 'newsCard';
  card.hidden = true;
  card.setAttribute('role', 'dialog');
  card.setAttribute('aria-labelledby', 'newsT');
  card.innerHTML = '<b class="news-tag">News</b><h3 id="newsT"></h3><p id="newsM"></p><div class="news-btns"><button type="button" id="newsLink" hidden></button><button type="button" id="newsOk" class="primary">Got it</button></div>';
  stage.appendChild(card);
  let shown = null;
  function show(a, preview) {
    shown = a;
    card.querySelector('#newsT').textContent = a.title;
    card.querySelector('#newsM').textContent = a.message;
    const l = card.querySelector('#newsLink');
    l.hidden = !a.link; l.textContent = a.linkText || 'Read more';
    card.classList.toggle('preview', !!preview);
    card.hidden = false; card.classList.remove('out');
    card.querySelector('#newsOk').focus();
  }
  function hide() {
    if (shown && !card.classList.contains('preview')) markSeen(shown.id);
    shown = null; card.classList.add('out'); setTimeout(() => { if (card.classList.contains('out')) card.hidden = true; }, 220);
  }
  card.querySelector('#newsOk').addEventListener('click', hide);
  card.querySelector('#newsLink').addEventListener('click', () => {
    if (!shown || !shown.link) return;
    if (window.fnaz && window.fnaz.open) window.fnaz.open(shown.link); else window.open(shown.link, '_blank', 'noopener,noreferrer');
  });
  card.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') hide(); });

  /* a banner for everyone who is in the middle of something: it never blocks a tap or a key */
  const bar = document.createElement('div');
  bar.id = 'newsBar';
  bar.hidden = true;
  bar.setAttribute('role', 'status');
  bar.innerHTML = '<b class="news-tag">News</b><span id="newsBarT"></span><span id="newsBarM"></span>';
  stage.appendChild(bar);
  let barTimer = 0;
  function banner(a) {
    bar.classList.toggle('warn', a.type === 'warn');
    bar.querySelector('#newsBarT').textContent = a.title;
    bar.querySelector('#newsBarM').textContent = a.message.replace(/\s+/g, ' ').slice(0, 220);
    bar.hidden = false; bar.classList.remove('out');
    clearTimeout(barTimer);
    barTimer = setTimeout(() => { bar.classList.add('out'); setTimeout(() => { if (bar.classList.contains('out')) bar.hidden = true; }, 400); }, 15000);
    markSeen(a.id);
  }

  /* ---------- looking for one ---------- */
  const where = () => { const h = NET && NET.h; return h && h.y ? h.y.screen : ''; };
  let busy = false;
  async function check() {
    if (busy || document.hidden) return;
    busy = true;
    try {
      const res = await fetch(SOURCE + '?t=' + Math.floor(Date.now() / 60000), { cache: 'no-store' });
      if (!res.ok) return;
      const a = clean(await res.json());
      if (!a || seen().includes(a.id)) return;
      if (where() === 'title' && !(NET && NET.role) && card.hidden) show(a); // the title screen: a card
      else if (where() && where() !== 'title') banner(a);                     // anywhere else, including a night: a banner
    } catch (e) { /* offline or blocked: no news is fine */ }
    finally { busy = false; }
  }
  setTimeout(check, 5000);
  setInterval(check, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) check(); });

  /* ---------- writing one (admin menu) ---------- */
  const panel = document.getElementById('modMenu');
  if (panel) {
    const sec = document.createElement('section');
    sec.className = 'mm-sec';
    sec.innerHTML = `<h3>Announcement</h3>
      <input type="text" id="anT" maxlength="80" placeholder="Title" aria-label="Announcement title">
      <textarea id="anM" rows="3" maxlength="600" placeholder="Message" aria-label="Announcement message"></textarea>
      <input type="text" id="anL" maxlength="300" placeholder="Link (optional, https://...)" aria-label="Announcement link">
      <div class="mm-btns"><button type="button" id="anP">Preview</button><button type="button" id="anC">Copy announce.json</button></div>
      <p class="mm-note" id="anH">Paste the copy into announce.json on GitHub and commit it. Players see it within minutes, no update needed.</p>`;
    const foot = panel.querySelector('.mm-foot');
    panel.insertBefore(sec, foot);
    const build = () => {
      const now = new Date(), p = (n) => String(n).padStart(2, '0');
      const a = { id: `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}-${p(now.getHours())}${p(now.getMinutes())}`,
        title: sec.querySelector('#anT').value.trim(), message: sec.querySelector('#anM').value.trim(), link: sec.querySelector('#anL').value.trim(),
        linkText: sec.querySelector('#anL').value.trim() ? 'Read more' : '', until: '' };
      return a;
    };
    sec.querySelector('#anP').addEventListener('click', () => { const a = clean(build()); if (!a) { sec.querySelector('#anH').textContent = 'Add a title or a message first.'; return; } show(a, true); });
    sec.querySelector('#anC').addEventListener('click', async () => {
      const a = build(), text = JSON.stringify(a, null, 2) + '\n', h = sec.querySelector('#anH');
      if (!clean(a)) { h.textContent = 'Add a title or a message first.'; return; }
      try { await navigator.clipboard.writeText(text); h.textContent = 'Copied. Paste it over announce.json on GitHub and commit.'; } catch (e) { h.textContent = 'Could not copy. Here it is:\n' + text; }
    });
    sec.addEventListener('keydown', (e) => e.stopPropagation());
  }
  window.FNAZNEWS = { clean, show, banner, check };
})();
