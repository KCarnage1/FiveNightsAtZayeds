/* Announcements: a message that shows up on players' screens without releasing a new version.
 *
 * The game asks the live server (live.js) for the current announcement a few seconds after it starts and then every 5 seconds, so
 * everyone who is playing sees a new one within about five seconds (if the server cannot be reached it falls back to announce.json
 * in the repository, at most once a minute). On the title screen it
 * is a card; in a night, in an online room or on any other screen it is a banner at the top that does not block anything and
 * fades after a while. "Got it" (or the banner showing once) remembers the id so the same announcement is not shown twice. An empty id means no announcement. Fields:
 *   id       anything unique, for example 2026-11-20-1 (change it to show a new message)
 *   title    the headline (up to 80 characters)
 *   message  the text (up to 600 characters; line breaks are kept)
 *   link     optional https address, and linkText the button label ("Read more")
 *   until    optional date, YYYY-MM-DD: the announcement stops showing after that day
 *   gift     optional {"coins": 700}: shop coins handed out once to each player who receives the announcement
 *   giftUntil  optional UTC time, e.g. 2026-11-19T00:00:00Z: only players who get it before then receive the gift (the player's own clock, since
 *              GitHub's file server does not share its time with web pages). The gift needs version 1.6.1 or newer; older versions only show the text.
 * The admin menu (type the admin word) has an Announcement section that writes this file's text for you to paste in.
 * Only plain text is ever shown, and a link must start with https://. Optional "type": "warn" makes the banner red. */
(() => {
  'use strict';
  // the same file from three places, tried in this order: the repository's raw file (fastest to update), then GitHub's API, then a CDN
  const SOURCES = [
    { url: 'https://raw.githubusercontent.com/KCarnage1/FiveNightsAtZayeds/main/announce.json', read: (res) => res.json() },
    { url: 'https://api.github.com/repos/KCarnage1/FiveNightsAtZayeds/contents/announce.json', read: async (res) => JSON.parse(decodeURIComponent(escape(atob(String((await res.json()).content || '').replace(/\s/g, ''))))) },
    { url: 'https://cdn.jsdelivr.net/gh/KCarnage1/FiveNightsAtZayeds@main/announce.json', read: (res) => res.json() }
  ];
  const status = { last: 0, source: '', result: 'not checked yet', id: '' };
  const SEEN = 'fnaz_news_seen_v1';
  const NET = window.FNAZNET;
  const stage = document.getElementById('stage');
  if (!stage) return;

  const seen = () => { try { const a = JSON.parse(localStorage.getItem(SEEN) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } };
  // gifts are remembered separately: a gift is claimed the moment it is handed over, even if the card is never dismissed
  const CLAIMED = 'fnaz_gift_v1';
  const claimed = () => { try { const a = JSON.parse(localStorage.getItem(CLAIMED) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } };
  const claim = (id) => { try { localStorage.setItem(CLAIMED, JSON.stringify([id, ...claimed().filter((x) => x !== id)].slice(0, 50))); } catch (e) { /* private mode */ } };
  const markSeen = (id) => { try { localStorage.setItem(SEEN, JSON.stringify([id, ...seen().filter((x) => x !== id)].slice(0, 30))); } catch (e) { /* private mode: shown again next time */ } };

  // plain text only, with limits, from anything the file contains
  function clean(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');
    const a = { id: str(raw.id, 60), title: str(raw.title, 80), message: str(raw.message, 600), link: str(raw.link, 300), linkText: str(raw.linkText, 40), until: str(raw.until, 10), type: raw.type === 'warn' ? 'warn' : 'info', gift: 0, giftUntil: '' };
    if (raw.gift && typeof raw.gift === 'object') {
      const g = {}, n = (v, max) => { v = Math.round(Number(v)); return Number.isFinite(v) && v > 0 ? Math.min(v, max) : 0; };
      if (n(raw.gift.coins, 5000)) g.coins = n(raw.gift.coins, 5000);
      for (const k of ['mask', 'battery', 'spray', 'wrap']) if (n(raw.gift[k], 20)) g[k] = n(raw.gift[k], 20);
      if (Object.keys(g).length) a.gift = g;
    }
    if (a.gift && typeof raw.giftUntil === 'string' && !Number.isNaN(Date.parse(raw.giftUntil))) a.giftUntil = raw.giftUntil.slice(0, 40);
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
  let lastFallback = 0, lastV = null;
  async function fetchOne() {
    let lastError = 'no answer';
    if (window.FNAZLIVE) {
      try {
        const r = await FNAZLIVE.rpc('get_announcement', {}, 6000);
        if (r && typeof r === 'object') return { data: r.data || {}, from: 'live server', serverTime: Date.now(), v: r.v };
      } catch (e) { lastError = 'live server: ' + (e && e.message ? e.message : 'unreachable'); }
      if (Date.now() - lastFallback < 60000) throw new Error(lastError); // the backups are only for when the live server is down, and gently
      lastFallback = Date.now();
    }
    for (const src of SOURCES) {
      try {
        const res = await fetch(src.url + (src.url.includes('?') ? '&' : '?') + 't=' + Math.floor(Date.now() / 60000), { cache: 'no-store' });
        if (!res.ok) { lastError = src.url.split('/')[2] + ' answered ' + res.status; continue; }
        return { data: await src.read(res), from: src.url.split('/')[2], serverTime: Date.parse(res.headers.get('date') || '') || Date.now() };
      } catch (e) { lastError = src.url.split('/')[2] + ': ' + (e && e.message ? e.message : 'blocked'); }
    }
    throw new Error(lastError);
  }
  async function check(force) {
    if (busy || (document.hidden && !force)) return;
    busy = true;
    try {
      const got = await fetchOne();
      if (window.FNAZMOD && FNAZMOD.setEvent) FNAZMOD.setEvent(got.data && got.data.event);
      if (got.v !== undefined && got.v === lastV && !force) { status.last = Date.now(); status.source = got.from; return; } // nothing new since the last look
      lastV = got.v;
      const a = clean(got.data);
      status.last = Date.now(); status.source = got.from; status.id = a ? a.id : '';
      if (!a) { status.result = 'no announcement right now'; return; }
      if (seen().includes(a.id) && !force) { status.result = 'already shown (' + a.id + ')'; return; }
      status.result = 'showing ' + a.id;
      // a gift is handed out once, and only while GitHub's clock says the offer is still open
      if (a.gift && !claimed().includes(a.id) && window.FNAZMOD && FNAZMOD.give && (!a.giftUntil || got.serverTime <= Date.parse(a.giftUntil))) {
        claim(a.id); // first, so nothing can hand it out twice
        const got2 = FNAZMOD.give(a.gift);
        if (got2) { a.message = (a.message ? a.message + '\n\n' : '') + 'You received: ' + got2 + '.'; status.result += ' (gift: ' + got2 + ')'; }
      }
      if (where() === 'title' && !(NET && NET.role) && card.hidden) show(a); // the title screen: a card
      else if (where() && where() !== 'title') banner(a);                     // anywhere else, including a night: a banner
    } catch (e) { status.last = Date.now(); status.result = 'could not check: ' + (e && e.message ? e.message : 'offline'); }
    finally { busy = false; renderStatus(); }
  }
  setTimeout(check, 2500);
  setInterval(check, 5000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) check(); });
  window.addEventListener('focus', () => check());
  window.addEventListener('online', () => check());
  // coming back to the title screen (after a night or a menu) looks again, at most every 20 seconds
  let prev = '', stamp = 0;
  setInterval(() => { const w = where(); if (w === 'title' && prev !== 'title' && Date.now() - stamp > 20000) { stamp = Date.now(); check(); } prev = w; }, 1500);

  /* ---------- writing one (admin menu) ----------
     Publishing sends the announcement to the live server with the admin password, and everyone online has it within about five
     seconds. Nothing is committed anywhere. */
  const panel = document.getElementById('modMenu');
  const RECENT = 'fnaz_announce_recent_v1';
  const ls = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };
  const recent = () => { try { const a = JSON.parse(ls.get(RECENT) || '[]'); return Array.isArray(a) ? a.slice(0, 6) : []; } catch (e) { return []; } };
  const pushRecent = (f) => ls.set(RECENT, JSON.stringify([f, ...recent().filter((x) => x.title !== f.title || x.message !== f.message)].slice(0, 6)));

  if (panel) {
    const sec = document.createElement('section');
    sec.className = 'mm-sec ann';
    sec.innerHTML = `<h3>Announce to everyone</h3>
      <div class="mm-btns ann-presets"><button type="button" data-preset="gift">🎁 Gift</button><button type="button" data-preset="double">⚡ 2× coins</button><button type="button" data-preset="sale">🏷️ Shop sale</button><button type="button" data-preset="update">🆕 Update out</button><button type="button" data-preset="warn">⚠️ Warning</button></div>
      <input type="text" id="anT" maxlength="80" placeholder="Title" aria-label="Announcement title">
      <textarea id="anM" rows="3" maxlength="600" placeholder="Message" aria-label="Announcement message"></textarea>
      <input type="text" id="anL" maxlength="300" placeholder="Link (optional, https://...)" aria-label="Announcement link">
      <div class="ann-gift"><span>Give away</span>
        <label>coins <input type="text" inputmode="numeric" id="anG" maxlength="4" placeholder="0"></label>
        <label>🎭 <input type="text" inputmode="numeric" id="anG1" maxlength="2" placeholder="0"></label>
        <label>🔋 <input type="text" inputmode="numeric" id="anG2" maxlength="2" placeholder="0"></label>
        <label>🧴 <input type="text" inputmode="numeric" id="anG3" maxlength="2" placeholder="0"></label>
        <label>🌯 <input type="text" inputmode="numeric" id="anG4" maxlength="2" placeholder="0"></label>
        <label>open for <input type="text" inputmode="numeric" id="anW" maxlength="4" placeholder="60"> min</label></div>
      <div class="ann-gift"><span>Event</span>
        <select id="anE" aria-label="Live event"><option value="">none</option><option value="double">⚡ Double coins</option><option value="sale">🏷️ Shop half price</option></select>
        <label>for <input type="text" inputmode="numeric" id="anEM" maxlength="4" placeholder="60"> min</label></div>
      <label class="ann-warn"><input type="checkbox" id="anY"> Red warning banner</label>
      <div class="mm-btns"><button type="button" id="anP">Preview</button><button type="button" id="anPub" class="ann-go">Publish to everyone</button><button type="button" id="anX">Take it down</button></div>
      <p class="mm-note" id="anH"></p>
      <p class="mm-note" id="anS"></p>
      <div class="ann-recent" id="anRecent"></div>
      <div class="mm-btns"><button type="button" id="anCheck">Check now</button><button type="button" id="anAgain">Show it again</button><button type="button" id="anC">Copy as JSON</button></div>`;
    panel.insertBefore(sec, panel.querySelector('.mm-foot'));
    const $a = (s2) => sec.querySelector(s2);
    const hint = (t, bad) => { const h = $a('#anH'); h.textContent = t || ''; h.style.color = bad ? '#ff8a8a' : ''; };
    const num = (id, max) => Math.max(0, Math.min(max, Math.round(Number($a(id).value)) || 0));
    const form = () => ({ title: $a('#anT').value.trim(), message: $a('#anM').value.trim(), link: $a('#anL').value.trim(), warn: $a('#anY').checked,
      coins: num('#anG', 5000), mask: num('#anG1', 20), battery: num('#anG2', 20), spray: num('#anG3', 20), wrap: num('#anG4', 20), mins: Math.round(Number($a('#anW').value)) || 60,
      event: $a('#anE').value, eventMins: Math.round(Number($a('#anEM').value)) || 60 });
    const fill = (f) => { $a('#anT').value = f.title || ''; $a('#anM').value = f.message || ''; $a('#anL').value = f.link || ''; $a('#anY').checked = !!f.warn;
      $a('#anG').value = f.coins || ''; ['mask', 'battery', 'spray', 'wrap'].forEach((k, i) => { $a('#anG' + (i + 1)).value = f[k] || ''; }); $a('#anW').value = f.mins && f.mins !== 60 ? f.mins : '';
      $a('#anE').value = f.event || ''; $a('#anEM').value = f.eventMins && f.eventMins !== 60 ? f.eventMins : ''; };
    const toData = (f) => {
      const now = new Date(), p = (n) => String(n).padStart(2, '0');
      const a = { id: `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}-${p(now.getHours())}${p(now.getMinutes())}${p(now.getSeconds())}`, title: f.title, message: f.message, link: f.link, linkText: f.link ? 'Read more' : '', until: '' };
      if (f.warn) a.type = 'warn';
      const gift = {};
      if (f.coins) gift.coins = f.coins;
      for (const k of ['mask', 'battery', 'spray', 'wrap']) if (f[k]) gift[k] = f[k];
      if (Object.keys(gift).length) { a.gift = gift; a.giftUntil = new Date(Date.now() + f.mins * 60000).toISOString().replace(/\.\d+Z$/, 'Z'); }
      if (f.event) a.event = { type: f.event, until: new Date(Date.now() + f.eventMins * 60000).toISOString().replace(/\.\d+Z$/, 'Z') };
      return a;
    };
    const BLANK = { coins: 0, mask: 0, battery: 0, spray: 0, wrap: 0, event: '', eventMins: 60, warn: false, link: '' };
    const PRESETS = {
      gift: { title: 'A gift for you!', message: 'Thanks for playing. Everyone who is online right now gets a present. Open the Shop to use it.', coins: 700, mins: 120 },
      double: { title: 'Double coins!', message: 'Every coin you earn counts double for a while. Go survive some nights.', event: 'double', eventMins: 60 },
      sale: { title: 'Shop sale', message: 'Everything in the Shop is half price for a while.', event: 'sale', eventMins: 60 },
      update: { title: 'New update out', message: 'A new version of the game is available. Update it from the title screen (desktop) or reload the page (phone).' },
      warn: { title: 'Heads up', message: 'We are about to make a change. Save your progress and come back in a few minutes.', warn: true }
    };
    sec.querySelectorAll('[data-preset]').forEach((b) => b.addEventListener('click', () => { fill(Object.assign({}, BLANK, PRESETS[b.dataset.preset])); hint('Edit the text if you like, then Preview or Publish.'); }));
    const renderRecent = () => {
      const box = $a('#anRecent'), list = recent();
      box.innerHTML = list.length ? '<small>Recent</small>' : '';
      list.forEach((f) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = f.title || (f.event ? f.event : (f.message || '').slice(0, 24)); b.title = 'Load this one again'; b.addEventListener('click', () => { fill(Object.assign({}, BLANK, f)); hint('Loaded. Publish to send it again.'); }); box.appendChild(b); });
    };
    renderRecent();
    const valid = (f) => !!(f.title || f.message || f.event);
    $a('#anP').addEventListener('click', () => { const f = form(); const a = clean(toData(f)); if (!a) { hint('Add a title or a message first.', true); return; } show(a, true); });
    $a('#anC').addEventListener('click', async () => { const f = form(); if (!valid(f)) { hint('Add a title or a message first.', true); return; } const text = JSON.stringify(toData(f), null, 2) + '\n'; try { await navigator.clipboard.writeText(text); hint('Copied.'); } catch (e) { hint('Could not copy:\n' + text, true); } });

    // send it to the server with the admin password; the server checks the password again itself
    async function publish(obj, label) {
      const pw = window.FNAZMOD && FNAZMOD.admin.get();
      if (!pw) { hint('Log in to the admin menu first.', true); return; }
      hint('Publishing…'); $a('#anPub').disabled = true;
      const t0 = performance.now();
      try {
        const v = await FNAZLIVE.rpc('admin_publish', { p_secret: pw, p_data: obj }, 8000);
        if (!v) throw new Error('The server did not accept it. The password may have changed or the message is too long.');
        hint(label + ' Live in ' + Math.round(performance.now() - t0) + ' ms. Players see it within about 5 seconds.');
        status.result = 'published ' + (obj.id || '(empty)'); renderStatus();
        setTimeout(() => check(true), 700);
      } catch (e) { hint(e && e.message ? (e.name === 'AbortError' ? 'The server took too long. Try again.' : e.message) : 'Could not publish.', true); }
      finally { $a('#anPub').disabled = false; }
    }
    $a('#anPub').addEventListener('click', () => {
      const f = form(), obj = toData(f);
      if (!valid(f)) { hint('Add a title or a message first.', true); return; }
      pushRecent(f); renderRecent();
      publish(obj, obj.gift ? 'Published with a gift, open for ' + f.mins + ' minutes.' : obj.event ? 'Event started.' : 'Published.');
    });
    $a('#anX').addEventListener('click', () => publish({}, 'Taken down.'));
    $a('#anCheck').addEventListener('click', () => { status.result = 'checking…'; renderStatus(); check(true).then(renderStatus); });
    $a('#anAgain').addEventListener('click', () => { try { localStorage.removeItem(SEEN); localStorage.removeItem(CLAIMED); } catch (e) { /* nothing */ } lastV = null; status.result = 'will show it again'; renderStatus(); check(true); });
    sec.addEventListener('keydown', (e) => e.stopPropagation());
    window.FNAZNEWS_publish = publish; // for tests
  }

  function renderStatus() {
    const el = document.getElementById('anS');
    if (!el) return;
    const t = status.last ? new Date(status.last).toLocaleTimeString() : '';
    el.textContent = 'This device (version ' + ((document.getElementById('upVer') || {}).textContent || '?') + '): ' + status.result + (t ? ' · checked ' + t + (status.source ? ' via ' + status.source : '') : '');
  }
  if (panel) new MutationObserver(renderStatus).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
  window.FNAZNEWS = { clean, show, banner, check, status };
})();
