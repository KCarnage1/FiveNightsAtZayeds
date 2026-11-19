/* The admin menu and the shop.
 *
 *  - The admin menu opens with a secret word typed anywhere (menus or in a night), then asks for the admin password. The password
 *    is checked on the server (it is never in this file), so knowing the word gets nobody further than the login box. Inside:
 *    powers, time control, radar, summoning, coins, who is online right now, live events and announcements. (On a phone: tap the
 *    version number on the title screen five times and enter the word in the box.)
 *  - The Shop (title menu) sells things to use during a night: the Zayed Mask (a few seconds of invulnerability, and whoever is
 *    in your office leaves), a Spare Battery, Cool Spray and a Shawarma Wrap. Coins come from surviving nights.
 *    Items are used from the bar on the left of the screen or with the keys 1 to 4.
 *  Nothing here works in online rooms, so it cannot desync a game. The powers reach the game through the `env` flags that
 *  ai.js and the Rust brain both understand (invuln, freeze, infinite, noheat). */
(() => {
  'use strict';
  const NET = window.FNAZNET;
  const H = () => (NET && NET.h && typeof NET.h.ai === 'function' && NET.h.y ? NET.h : null); // the game binds its functions a moment after the page loads
  const online = () => !!(NET && NET.role);
  const $ = (s, r = document) => r.querySelector(s);
  const stage = document.getElementById('stage');
  // the secret word is not written down here: only a hash of each of its first letters, so the file does not give it away
  const H32 = (t) => { let h = 0x811c9dc5; t = 'fnaz|' + t; for (let r = 0; r < 3; r++) for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
  const CODE_H = [3313290362, 719455989, 3870594709, 2614364126, 371924548, 393033805, 2869192982, 2811781118];

  /* ---------- saved: coins and what you own ---------- */
  const KEY = 'fnaz_mods_v1';
  const ITEMS = [
    { id: 'mask', name: 'Zayed Mask', price: 150, key: '1', icon: '🎭', blurb: 'Put it on: 8 seconds of invulnerability, and whoever is in your office runs away.' },
    { id: 'battery', name: 'Spare Battery', price: 80, key: '2', icon: '🔋', blurb: 'Recharges 30% of your power on the spot.' },
    { id: 'spray', name: 'Cool Spray', price: 60, key: '3', icon: '🧴', blurb: 'Cools both doors, and they cannot overheat for 30 seconds.' },
    { id: 'wrap', name: 'Shawarma Wrap', price: 120, key: '4', icon: '🌯', blurb: 'Zayed gets distracted: everyone backs off and nobody advances for 20 seconds.' }
  ];
  let save = { coins: 0, inv: { mask: 0, battery: 0, spray: 0, wrap: 0 }, daily: { last: '', streak: 0 } };
  try { const s = JSON.parse(localStorage.getItem(KEY) || '{}'); if (s && typeof s === 'object') save = { coins: Math.max(0, +s.coins || 0), inv: Object.assign(save.inv, s.inv || {}), daily: { last: /^\d{4}-\d\d-\d\d$/.test((s.daily || {}).last) ? s.daily.last : '', streak: Math.max(0, Math.min(999, +(s.daily || {}).streak || 0)) } }; } catch (e) { /* first time */ }
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* private mode: lasts until you close the page */ } };
  // two tabs of the game share one balance: when the other one changes it, take its numbers instead of overwriting them later
  window.addEventListener('storage', (e) => {
    if (e.key !== KEY || !e.newValue) return;
    try { const n = JSON.parse(e.newValue); save.coins = Math.max(0, +n.coins || 0); Object.assign(save.inv, n.inv || {}); if (n.daily) save.daily = { last: /^\d{4}-\d\d-\d\d$/.test(n.daily.last) ? n.daily.last : '', streak: Math.max(0, Math.min(999, +n.daily.streak || 0)) }; if (typeof refreshShop === 'function') refreshShop(); } catch (err) { /* keep ours */ }
  });
  const toast = (text) => {
    const d = document.createElement('div');
    d.className = 'cheat-toast'; d.textContent = text; stage.appendChild(d);
    setTimeout(() => d.remove(), 3000);
  };
  const sound = (name, ...a) => { try { if (typeof Sound !== 'undefined' && Sound[name]) Sound[name](...a); } catch (e) { /* no sound is fine */ } };

  /* ---------- the powers ---------- */
  const mod = { infinite: false, noheat: false, invuln: false, freeze: false, radar: false, freeShop: false, speed: 1 };
  let maskT = 0, sprayT = 0;
  const flags = () => (online() ? {} : { infinite: mod.infinite, noheat: mod.noheat || sprayT > 0, invuln: mod.invuln || maskT > 0, freeze: mod.freeze });

  const speed = () => (online() ? 1 : mod.speed);

  /* ---------- live events (sent from the admin menu to everyone online): double coins, shop sale ---------- */
  let event = null;
  function setEvent(ev) {
    if (!ev || typeof ev !== 'object' || !['double', 'sale'].includes(ev.type)) { event = null; return; }
    const until = Date.parse(ev.until);
    event = Number.isFinite(until) && until > Date.now() && until - Date.now() < 7 * 24 * 3600e3 ? { type: ev.type, until } : null;
  }
  const eventOn = (type) => !!(event && event.type === type && event.until > Date.now());
  const priceOf = (it) => (mod.freeShop && !online() ? 0 : Math.max(1, Math.round(it.price * (eventOn('sale') ? 0.5 : 1))));

  /* ---------- ways to collect coins ---------- */
  function earn(n, why, quiet) { // every way of earning goes through here, so a double-coins event counts for all of them
    n = Math.round(n * (eventOn('double') ? 2 : 1));
    if (n <= 0) return 0;
    save.coins += n; persist(); refreshShop();
    if (!quiet) toast('+' + n + ' coins' + (why ? ' · ' + why : ''));
    return n;
  }
  let paid = -1;
  function won(night) {
    const h = H();
    if (online() || !h || paid === h.y.rng) return;
    paid = h.y.rng;
    earn(night >= 8 ? 100 + 20 * (night - 7) : 40 + 15 * night, 'night survived');
  }
  // a little pay for every hour you get through, even if the night goes badly
  let hourPaid = '';
  function hour(night) {
    const h = H();
    if (online() || !h || !h.y.running || h.y.hour < 1 || h.y.hour > 5) return;
    const k = h.y.rng + ':' + h.y.hour;
    if (hourPaid === k) return;
    hourPaid = k;
    earn(2 + Math.min(8, night >= 8 ? 8 : night), h.y.hour + ' AM', true);
    pulse('+hour');
  }
  const today = () => new Date().toISOString().slice(0, 10);
  const dailyAmount = () => 50 + 10 * Math.min(save.daily.streak, 9);
  function dailyReady() { return save.daily.last !== today(); }
  function claimDaily() {
    if (!dailyReady()) return 0;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    save.daily.streak = save.daily.last === y ? Math.min(999, save.daily.streak + 1) : 0;
    const n = earn(dailyAmount(), 'daily reward · day ' + (save.daily.streak + 1), true);
    save.daily.last = today(); persist();
    return n;
  }
  const pulse = () => { const c = $('#shopCoins'); if (c) { c.classList.remove('tickc'); void c.offsetWidth; c.classList.add('tickc'); } };

  /* ---------- using items in a night ---------- */
  const playing = () => { const h = H(); return !!(h && h.ai() && !online()); };
  function send(y, who) { // a walker leaves the office or the corridor (same result as the brain's own eject)
    if (window.FNAZAI && FNAZAI.eject) FNAZAI.eject(y, who);
  }
  const USE = {
    mask() {
      const h = H(), y = h.y;
      if (maskT > 0) return false;
      maskT = 8;
      for (const k of ['zayed', 'bubbles', 'taffy']) if (y.ai[k].office) send(y, k);
      if (y.ai.sherbet.running) send(y, 'sherbet');
      y.goldenIn = false; y.goldenArmed = false;
      sound('breathing'); sound('whisper');
      return true;
    },
    battery() { const y = H().y; if (y.power >= 100) return false; y.power = Math.min(100, y.power + 30); sound('chime'); return true; },
    spray() { const y = H().y; y.heatL = y.heatR = y.coolL = y.coolR = 0; sprayT = 30; sound('lightClick'); return true; },
    wrap() {
      const y = H().y;
      y.calmT = 20;
      for (const [k, back] of [['bubbles', 'westHall'], ['taffy', 'eastHall'], ['zayed', 'eastHall']]) {
        const a = y.ai[k];
        if (!a.office && (a.room === 'westCor' || a.room === 'eastCor')) { a.room = back; a.dw = 0; a.armed = false; }
      }
      if (y.ai.sherbet.stage > 1) y.ai.sherbet.stage = 1;
      sound('chime'); return true;
    }
  };
  function useItem(id) {
    if (!playing() || !(save.inv[id] > 0)) return;
    if (USE[id]() === false) return;
    save.inv[id]--; persist(); renderBar(id);
  }

  /* ---------- the item bar ---------- */
  const bar = document.createElement('div');
  bar.id = 'itemBar';
  bar.innerHTML = ITEMS.map((i) => `<button type="button" class="item-slot" data-use="${i.id}" title="${i.name} (${i.key})"><span class="ic">${i.icon}</span><kbd>${i.key}</kbd><b class="ct"></b></button>`).join('') + '<div id="modChips"></div>';
  const hud = document.getElementById('hud');
  if (hud) hud.appendChild(bar);
  const chips = bar.querySelector('#modChips');
  function renderBar(popId) {
    const any = ITEMS.some((i) => save.inv[i.id] > 0);
    bar.classList.toggle('on', any && !online());
    for (const i of ITEMS) {
      const b = bar.querySelector(`[data-use="${i.id}"]`);
      b.querySelector('.ct').textContent = save.inv[i.id] > 0 ? '×' + save.inv[i.id] : '';
      b.classList.toggle('empty', !(save.inv[i.id] > 0));
      if (popId === i.id) { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
    }
  }
  bar.addEventListener('pointerdown', (e) => { const b = e.target.closest('[data-use]'); if (b) { e.preventDefault(); e.stopPropagation(); useItem(b.dataset.use); } });

  /* the mask on screen: like the mask in the second game, you see the room through its eye holes and the inside of the mask
     frames everything. It flips up from the bottom and back down when it runs out. */
  const mask = document.createElement('div');
  mask.id = 'maskView';
  mask.innerHTML = `<svg viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <pattern id="maskHatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="9" height="9" fill="#08070b"/><line x1="0" y1="0" x2="0" y2="9" stroke="#14121a" stroke-width="3"/></pattern>
      <radialGradient id="maskShade" cx="50%" cy="48%" r="75%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".85"/></radialGradient>
    </defs>
    <path fill="url(#maskHatch)" fill-rule="evenodd" d="M0 0H1600V900H0Z M 469 100 C 766 88 799 320 788 474 C 779 673 568 766 403 728 C 200 678 117 485 167 320 C 200 194 316 109 469 100Z M 1131 100 C 834 88 801 320 812 474 C 821 673 1032 766 1197 728 C 1400 678 1483 485 1433 320 C 1400 194 1284 109 1131 100Z"/>
    <path fill="url(#maskShade)" d="M0 0H1600V900H0Z"/>
    <g fill="none" stroke-linejoin="round" stroke-linecap="round">
      <path class="rim" d="M 469 100 C 766 88 799 320 788 474 C 779 673 568 766 403 728 C 200 678 117 485 167 320 C 200 194 316 109 469 100Z"/>
      <path class="rim" d="M 1131 100 C 834 88 801 320 812 474 C 821 673 1032 766 1197 728 C 1400 678 1483 485 1433 320 C 1400 194 1284 109 1131 100Z"/>
      <path class="edge" d="M60 880 C20 600 40 300 120 120 C160 40 330 0 520 0"/>
      <path class="edge" d="M1540 880 C1580 600 1560 300 1480 120 C1440 40 1270 0 1080 0"/>
      <circle class="edge" cx="150" cy="120" r="170"/><circle class="edge" cx="1450" cy="120" r="170"/>
      <path class="edge" d="M640 900 C690 790 760 745 800 742 C840 745 910 790 960 900"/>
      <path class="edge" d="M720 842 C760 862 840 862 880 842"/>
    </g></svg><span id="maskT"></span>`;
  stage.appendChild(mask);
  let maskShown = false, maskHide = 0;

  /* ---------- the admin menu ---------- */
  const panel = document.createElement('aside');
  panel.id = 'modMenu';
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Admin menu');
  const TOGGLES = [['infinite', 'Unlimited power'], ['noheat', 'No door overheating'], ['invuln', 'Invulnerable'], ['freeze', 'Freeze the animatronics'], ['radar', 'Radar: show where they are'], ['freeShop', 'Everything in the shop is free']];
  const BOTS = [['zayed', 'Camel'], ['bubbles', 'Cat'], ['taffy', 'Goat'], ['sherbet', 'Falcon']];
  panel.innerHTML = `
    <header><h2>ADMIN</h2><button type="button" id="modX" aria-label="Close">×</button></header>
    <p class="mm-note" id="modNote"></p>
    <section class="mm-sec"><h3>Powers</h3>${TOGGLES.map(([k, n]) => `<label class="mm-row"><span>${n}</span><input type="checkbox" data-mod="${k}"><i class="sw"></i></label>`).join('')}</section>
    <section class="mm-sec"><h3>Time</h3>
      <label class="mm-row"><span>Game speed</span><select id="modSpeed"><option value="0">Paused (0×)</option><option value="0.5">0.5×</option><option value="1" selected>Normal</option><option value="2">2×</option><option value="5">5×</option><option value="10">10×</option></select></label>
      <div class="mm-btns"><button type="button" data-do="hour">+1 hour</button><button type="button" data-do="blackout">Cut the power</button></div></section>
    <section class="mm-sec"><h3>Summon to my door</h3>
      <div class="mm-btns"><button type="button" data-summon="zayed">Camel</button><button type="button" data-summon="bubbles">Cat</button><button type="button" data-summon="taffy">Goat</button><button type="button" data-summon="sherbet">Falcon</button></div></section>
    <section class="mm-sec"><h3>Night</h3>
      <div class="mm-btns"><button type="button" data-do="skip">Skip to 6 AM</button><button type="button" data-do="away">Send them all away</button><button type="button" data-do="power">Full power</button></div>
      <label class="mm-row"><span>Start night</span><select id="modNight">${[1, 2, 3, 4, 5, 6, 7, 13].map((n) => `<option value="${n}">${n === 6 ? '4/20 mode' : n === 7 ? 'Custom' : n === 13 ? 'Secret night' : 'Night ' + n}</option>`).join('')}</select><button type="button" data-do="start">Go</button></label>
    </section>
    <section class="mm-sec"><h3>AI levels (this night)</h3>${BOTS.map(([k, n]) => `<label class="mm-row"><span>${n}</span><input type="range" min="0" max="20" step="1" value="0" data-ai="${k}"><output>0</output></label>`).join('')}</section>
    <section class="mm-sec"><h3>Coins <b id="modCoins"></b></h3>
      <div class="mm-btns"><button type="button" data-do="coins500">+500</button><button type="button" data-do="coins5000">+5000</button><button type="button" data-do="items">Fill the bag</button><button type="button" data-do="nights">Unlock all nights</button></div>
      <label class="mm-row"><span>Set my coins to</span><input type="text" inputmode="numeric" id="modSetCoins" maxlength="9" placeholder="0" style="width:130px"><button type="button" data-do="setcoins">Set</button></label>
    </section>
    <p class="mm-foot">Press <kbd>Esc</kbd> to close.</p>`;
  stage.appendChild(panel);
  const note = $('#modNote', panel);

  function syncPanel() {
    const h = H(), y = h && h.y;
    for (const [k] of TOGGLES) $(`[data-mod="${k}"]`, panel).checked = !!mod[k];
    $('#modSpeed', panel).value = String(mod.speed);
    $('#modCoins', panel).textContent = save.coins;
    const inNight = !!(y && y.running && y.ai);
    note.textContent = online() ? 'Not available in online rooms.' : inNight ? 'Changes apply right away.' : 'Powers switch on when a night starts.';
    for (const [k] of BOTS) {
      const r = $(`[data-ai="${k}"]`, panel);
      r.disabled = !inNight;
      if (inNight) { r.value = y.ai[k].ai; r.nextElementSibling.textContent = Math.round(y.ai[k].ai); }
    }
  }
  const isOpen = () => !panel.hidden;
  /* ---------- the admin login ----------
     The password lives on the server (as a hash). This box only asks for it and the server says yes or no; the rest of the admin
     tools (publishing, the online list) ask the server again each time with the same password, so skipping this box in the
     browser's tools opens an empty panel and nothing else. */
  const admin = { pw: '', remembered: false };
  const nativeKey = window.fnaz && window.fnaz.secret;
  const login = document.createElement('div');
  login.id = 'adminLogin';
  login.hidden = true;
  login.setAttribute('role', 'dialog');
  login.setAttribute('aria-label', 'Admin login');
  login.innerHTML = `<form autocomplete="off"><h3>Admin</h3><input type="password" id="alPw" placeholder="Password" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Admin password">
    <label class="al-rem" hidden><input type="checkbox" id="alRem"> Remember on this computer</label>
    <p id="alMsg" class="al-msg" aria-live="polite"></p><div class="al-btns"><button type="submit" id="alGo">Log in</button><button type="button" id="alNo">Cancel</button></div></form>`;
  stage.appendChild(login);
  let fails = 0, lockUntil = 0;
  const live = () => window.FNAZLIVE;
  function closeLogin() { login.hidden = true; login.querySelector('#alPw').value = ''; login.querySelector('#alMsg').textContent = ''; }
  async function verify(pw) { try { return (await live().rpc('admin_check', { p_secret: pw })) === true; } catch (e) { return null; } }
  async function tryLogin(pw, remember) {
    if (Date.now() < lockUntil) return 'Too many tries. Wait a moment.';
    const ok = await verify(pw);
    if (ok === null) return 'Could not reach the server. Check your connection.';
    if (!ok) { if (++fails >= 5) { lockUntil = Date.now() + 60000; fails = 0; } return 'Wrong password.'; }
    fails = 0; admin.pw = pw;
    if (remember && nativeKey) { admin.remembered = !!(await nativeKey.save(pw).catch(() => false)); }
    return '';
  }
  function showLogin() {
    login.hidden = false; login.classList.remove('out');
    login.querySelector('.al-rem').hidden = !nativeKey;
    login.querySelector('#alPw').focus();
  }
  login.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const pw = login.querySelector('#alPw').value, msgEl = login.querySelector('#alMsg'), go = login.querySelector('#alGo');
    if (!pw) return;
    go.disabled = true; msgEl.textContent = 'Checking…';
    const err = await tryLogin(pw, login.querySelector('#alRem').checked);
    go.disabled = false;
    if (err) { msgEl.textContent = err; login.querySelector('#alPw').select(); return; }
    closeLogin(); toggle(true);
  });
  login.querySelector('#alNo').addEventListener('click', closeLogin);
  login.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') closeLogin(); });
  // a remembered password (desktop app) logs in quietly in the background
  if (nativeKey) nativeKey.load().then(async (pw) => { if (pw && (await verify(pw)) === true) { admin.pw = pw; admin.remembered = true; } }).catch(() => {});

  function toggle(force) {
    const open = force === undefined ? !isOpen() : !!force;
    if (open && online()) { toast('Not available in online rooms.'); return; }
    if (open === isOpen()) return;
    if (open) {
      if (!admin.pw) { showLogin(); return; }
      panel.hidden = false; panel.classList.remove('out'); syncPanel(); sound('chime');
      panel.dispatchEvent(new Event('fnaz:open'));
    } else { panel.classList.add('out'); setTimeout(() => { if (panel.classList.contains('out')) panel.hidden = true; }, 220); }
  }
  panel.addEventListener('click', (e) => {
    if (e.target.id === 'modX') return toggle(false);
    const sm = e.target.closest('[data-summon]');
    if (sm) { summon(sm.dataset.summon); return; }
    const d = e.target.closest('[data-do]');
    if (!d) return;
    const h = H(), y = h && h.y, act = d.dataset.do;
    if (act === 'skip' && y && y.running) h.fc();
    else if (act === 'away' && y && y.ai) { for (const k of ['zayed', 'bubbles', 'taffy', 'sherbet']) { const a = y.ai[k]; if (k === 'sherbet') { a.running = false; a.stage = 0; } else { a.office = false; a.room = 'stage'; a.armed = false; } } sound('whisper'); }
    else if (act === 'power' && y) y.power = 100;
    else if (act === 'start' && h) { toggle(false); h.ba(+$('#modNight', panel).value, true); }
    else if (act === 'coins500') { save.coins += 500; persist(); }
    else if (act === 'coins5000') { save.coins += 5000; persist(); }
    else if (act === 'setcoins') { const v = Math.max(0, Math.min(999999999, Math.round(Number($('#modSetCoins', panel).value)) || 0)); save.coins = v; persist(); }
    else if (act === 'hour' && y && y.running && y.ai) { y.time += 88; }
    else if (act === 'blackout' && y && y.running && y.ai) { y.power = 0.01; }
    else if (act === 'items') { for (const i of ITEMS) save.inv[i.id] = Math.max(save.inv[i.id], 5); persist(); renderBar(); }
    else if (act === 'nights' && window.FNAZ_unlock) window.FNAZ_unlock();
    $('#modCoins', panel).textContent = save.coins; refreshShop();
    d.classList.remove('pop'); void d.offsetWidth; d.classList.add('pop');
  });
  panel.addEventListener('input', (e) => {
    const t = e.target, h = H();
    if (t.id === 'modSpeed') { mod.speed = Math.max(0, Math.min(10, Number(t.value))); sound('lightClick'); }
    else if (t.dataset.mod) { mod[t.dataset.mod] = t.checked; sound('lightClick'); if (t.dataset.mod === 'freeShop') refreshShop(); }
    else if (t.dataset.ai && h && h.y.ai) { h.y.ai[t.dataset.ai].ai = +t.value; t.nextElementSibling.textContent = t.value; }
  });
  // bring someone to your door (the same rooms the game itself uses)
  function summon(who) {
    const h = H(), y = h && h.y;
    if (!y || !y.running || !y.ai) { toast('Start a night first.'); return; }
    const a = y.ai[who];
    if (who === 'sherbet') { a.stage = 4; a.wait = 0.2; a.running = false; }
    else { a.room = who === 'bubbles' ? 'westCor' : 'eastCor'; a.office = false; a.armed = false; a.dw = 0; if (who === 'zayed') { a.armed = true; a.pending = 0.5; a.pendMax = 0.5; } }
    sound('knock', who === 'bubbles' ? -0.7 : 0.7); toast('Sent ' + ({ zayed: 'the Camel', bubbles: 'the Cat', taffy: 'the Goat', sherbet: 'the Falcon' })[who] + ' to your door.');
  }
  // keep typing in the panel from reaching the game
  panel.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') toggle(false); });

  /* ---------- the shop ---------- */
  const shop = document.createElement('section');
  shop.id = 'shop';
  shop.className = 'screen';
  shop.setAttribute('aria-labelledby', 'shopH');
  shop.innerHTML = `<h2 id="shopH">Shop</h2><p class="lead">Spend what you earn by surviving. Use items during a night: click the bar on the left, or press 1 to 4.</p>
    <div class="shop-coins"><span>Coins</span><b id="shopCoins">0</b></div>
    <div class="shop-earn"><button type="button" id="shopDaily"></button><span id="shopEvent"></span></div>
    <div class="shop-grid" id="shopGrid"></div><p id="shopMsg" class="shop-msg" aria-live="polite"></p>
    <button type="button" class="back" data-act="title">Back</button>`;
  stage.appendChild(shop);
  const grid = $('#shopGrid', shop), coinsEl = $('#shopCoins', shop), msg = $('#shopMsg', shop);
  grid.innerHTML = ITEMS.map((i) => `<article class="shop-card" data-item="${i.id}"><div class="sc-ic">${i.icon}</div><h3>${i.name}</h3><p>${i.blurb}</p>
    <div class="sc-foot"><span class="sc-own">Owned <b>0</b></span><button type="button" class="sc-buy" data-buy="${i.id}">Buy <i>${i.price}</i></button></div></article>`).join('');
  const dailyBtn = $('#shopDaily', shop), eventEl = $('#shopEvent', shop);
  let shown = 0;
  function countTo(el, to) { // the number ticks up or down to the new value
    const from = shown; shown = to;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || from === to) { el.textContent = to; return; }
    const t0 = performance.now();
    (function step(t) { const k = Math.min(1, (t - t0) / 450); el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); })(t0);
  }
  function refreshShop() {
    countTo(coinsEl, save.coins);
    for (const i of ITEMS) {
      const c = $(`[data-item="${i.id}"]`, grid);
      const price = priceOf(i);
      $('.sc-own b', c).textContent = save.inv[i.id];
      const buy = $('.sc-buy', c);
      buy.disabled = save.coins < price;
      buy.querySelector('i').textContent = price === 0 ? 'free' : price;
      buy.classList.toggle('sale', price < i.price);
      c.classList.toggle('poor', save.coins < price);
    }
    dailyBtn.disabled = !dailyReady();
    dailyBtn.textContent = dailyReady() ? '🎁 Claim today\'s reward: +' + dailyAmount() * (eventOn('double') ? 2 : 1) + ' coins' + (save.daily.streak ? ' (day ' + (save.daily.streak + 1) + ')' : '') : '🎁 Come back tomorrow for more' + (save.daily.streak ? ' · streak ' + (save.daily.streak + 1) + ' days' : '');
    eventEl.textContent = event && event.until > Date.now() ? (event.type === 'double' ? '⚡ Double coins event' : '🏷️ Shop sale: half price') + ' · ' + Math.max(1, Math.ceil((event.until - Date.now()) / 60000)) + ' min left' : '';
    renderBar();
  }
  grid.addEventListener('click', (e) => {
    const b = e.target.closest('[data-buy]');
    if (!b || b.disabled) return;
    const it = ITEMS.find((i) => i.id === b.dataset.buy), price = priceOf(it);
    if (save.coins < price) return;
    save.coins -= price; save.inv[it.id]++; persist();
    sound('chime'); refreshShop();
    const card = b.closest('.shop-card');
    card.classList.remove('bought'); void card.offsetWidth; card.classList.add('bought');
    msg.textContent = 'Bought ' + it.name + '.';
    const f = document.createElement('i'); f.className = 'sc-fly'; f.textContent = it.icon; card.appendChild(f); setTimeout(() => f.remove(), 900);
  });
  dailyBtn.addEventListener('click', () => { const n = claimDaily(); if (n) { sound('chime'); msg.textContent = 'Claimed +' + n + ' coins. Come back tomorrow.'; pulse(); refreshShop(); } });
  setInterval(() => { if (!shop.hidden && shop.classList.contains('active')) refreshShop(); }, 20000);
  const menu = $('#title .menu');
  if (menu) {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.shop = '1'; b.textContent = 'Shop';
    const after = menu.querySelector('[data-act="custom"]');
    menu.insertBefore(b, after ? after.nextSibling : null);
    b.addEventListener('click', () => { const h = H(); if (h) { refreshShop(); msg.textContent = ''; h.xn('shop'); } });
  }

  /* ---------- the code, on a keyboard ---------- */
  let typed = '';
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1 || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    const k = e.key.toLowerCase();
    const next = typed + k;
    typed = next.length <= CODE_H.length && H32(next) === CODE_H[next.length - 1] ? next : H32(k) === CODE_H[0] ? k : '';
    if (typed.length === CODE_H.length) { typed = ''; e.preventDefault(); e.stopImmediatePropagation(); toggle(); return; }
    // letters that could still be the start of the code are kept away from the game (E and D are controls)
    if (typed.length >= 2) { e.preventDefault(); e.stopImmediatePropagation(); return; }
    // items: 1 to 4 during a night
    if (/^[1-4]$/.test(e.key) && playing() && !isOpen()) { const it = ITEMS.find((i) => i.key === e.key); if (it) { e.preventDefault(); useItem(it.id); } }
  }, true);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen()) { toggle(false); e.stopImmediatePropagation(); } }, true);

  /* ---------- timers and the on-screen chips ---------- */
  let last = performance.now();
  (function loop(now) {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    const h = H();
    if (h && h.ai() && !online()) { if (maskT > 0) maskT = Math.max(0, maskT - dt); if (sprayT > 0) sprayT = Math.max(0, sprayT - dt); }
    else if (!h || !h.y.running) { maskT = 0; sprayT = 0; }
    if (maskT > 0 && !maskShown) { maskShown = true; clearTimeout(maskHide); mask.classList.remove('down'); mask.classList.add('on'); }
    else if (maskT <= 0 && maskShown) { maskShown = false; mask.classList.add('down'); maskHide = setTimeout(() => mask.classList.remove('on', 'down'), 260); }
    if (maskT > 0) { $('#maskT').textContent = Math.ceil(maskT); mask.classList.toggle('last', maskT < 2); }
    const bits = [];
    if (maskT > 0) bits.push('Mask ' + Math.ceil(maskT) + 's');
    if (sprayT > 0 && !mod.noheat) bits.push('Cooled ' + Math.ceil(sprayT) + 's');
    for (const [k, n] of TOGGLES) if (mod[k] && k !== 'radar') bits.push(n);
    if (mod.speed !== 1) bits.push(mod.speed + '× speed');
    if (eventOn('double')) bits.push('⚡ 2× coins');
    if (mod.radar && h && h.y.ai && h.y.running) { const a = h.y.ai; bits.push('Camel ' + a.zayed.room + (a.zayed.office ? '*' : '') + ' · Cat ' + a.bubbles.room + (a.bubbles.office ? '*' : '') + ' · Goat ' + a.taffy.room + (a.taffy.office ? '*' : '') + ' · Falcon ' + (a.sherbet.running ? 'running' : 'stage ' + a.sherbet.stage)); }
    const txt = bits.join(' · ');
    if (chips.textContent !== txt) chips.textContent = txt;
    bar.classList.toggle('chips', !!txt);
    requestAnimationFrame(loop);
  })(last);

  /* ---------- the sixth night: a secret way in ----------
     Type  yousef  on any menu, or tap the little "at" in the title six times. It stays unlocked (it is part of the save). */
  function unlockSecret() {
    const h = H();
    if (!h || online()) return;
    if (h.ce.secret6) { toast('The sixth night is already on the Time card.'); return; }
    h.ce.secret6 = true;
    try { const g = JSON.parse(store('fnaz_save_v1') || '{}'); g.secret6 = true; localStorage.setItem('fnaz_save_v1', JSON.stringify(g)); } catch (e) { /* kept in memory, saved with the next save */ }
    sound('chime'); sound('laugh', 0.1, 0.5);
    toast('A sixth night has been scheduled. Check the Time card.');
  }
  const store = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  let word = '';
  window.addEventListener('keydown', (e) => {
    const h = H();
    if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1 || !h || h.y.screen === 'game' || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) { word = ''; return; }
    word = (word + e.key.toLowerCase()).slice(-6);
    if (word === 'yousef') { word = ''; unlockSecret(); }
  }, true);
  const at = document.querySelector('#title .fn-l2');
  if (at) {
    let taps = 0, timer = 0;
    at.addEventListener('click', () => { clearTimeout(timer); timer = setTimeout(() => { taps = 0; }, 4000); if (++taps >= 6) { taps = 0; unlockSecret(); } });
  }

  // a gift of coins (from an announcement); the amount is capped so a typo cannot hand out millions
  // Takes a number of coins or { coins, mask, battery, spray, wrap }. Returns a short description of what was handed over ('' for nothing).
  function give(g) {
    if (typeof g !== 'object' || !g) g = { coins: g };
    const parts = [], num = (v, max) => Math.max(0, Math.min(max, Math.round(Number(v) || 0)));
    const coins = num(g.coins, 5000);
    if (coins) { save.coins += coins; parts.push(coins + ' coins'); }
    for (const it of ITEMS) {
      const n = num(g[it.id], 20);
      if (n) { save.inv[it.id] = Math.min(999, save.inv[it.id] + n); parts.push(n + ' × ' + it.name); }
    }
    if (parts.length) { persist(); refreshShop(); renderBar(); }
    return parts.join(', ');
  }

  // the word typed into the box on devices without a keyboard (secret.js)
  const isAdminWord = (w) => { w = String(w || '').trim().toLowerCase(); return w.length === CODE_H.length && H32(w) === CODE_H[CODE_H.length - 1]; };
  const adminApi = { get: () => admin.pw, set: async (pw) => { admin.pw = pw; if (admin.remembered && nativeKey) await nativeKey.save(pw).catch(() => {}); }, forget() { admin.pw = ''; admin.remembered = false; if (nativeKey) nativeKey.save('').catch(() => {}); } };

  window.FNAZMOD = { flags, speed, earn, hour, setEvent, event: () => event, eventOn, word: isAdminWord, admin: adminApi, won, toggle, mod, give, wear(sec) { maskT = sec; }, save: () => save, reset() { maskT = 0; sprayT = 0; } };
  refreshShop();
})();
