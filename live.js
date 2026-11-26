/* The live connection to the game's server (a small Supabase project).
 *
 *  - Announcements and events are fetched from it every few seconds (news.js uses rpc() below), so a message reaches everyone
 *    who is playing within about five seconds.
 *  - "Online status": every 30 seconds the game tells the server that it is open: a random ID made once on this device, the game
 *    version, the platform (desktop, phone or web), the screen it is on and the night. No name, no account, no location. The
 *    admin menu shows these as a live list. Players can turn it off in Settings.
 *  - The admin menu also gets its "Online now" and "Change password" sections from here.
 * The key below is the public (publishable) key: it is meant to be in the page. What it can do is decided on the server: players
 * can only send "I'm here" and read the announcement; everything else asks for the admin password, which is stored only as a hash
 * on the server and is never in this code. */
(() => {
  'use strict';
  const BASE = 'https://vycivbylkaztscqfqlzj.supabase.co/rest/v1/rpc/';
  const KEY = 'sb_publishable_FuU_RDncjVu_suWe1P1EkA_HOvhiOgc';
  const NET = window.FNAZNET;
  const ls = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };

  async function rpc(name, args, ms) {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), ms || 7000);
    try {
      const res = await fetch(BASE + name, { method: 'POST', headers: { apikey: KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(args || {}), signal: ctl.signal, cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      return text ? JSON.parse(text) : null;
    } finally { clearTimeout(t); }
  }

  /* ---------- online status ---------- */
  const SHARE = 'fnaz_share_online';
  const sharing = () => ls.get(SHARE) !== '0';
  let pid = ls.get('fnaz_pid') || '';
  if (!/^[A-Za-z0-9-]{8,40}$/.test(pid)) { pid = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now().toString(36)).replace(/[^A-Za-z0-9-]/g, '').slice(0, 36); ls.set('fnaz_pid', pid); }
  let version = '?';
  const readVersion = async () => {
    try {
      if (window.fnaz && window.fnaz.update) { const s = await window.fnaz.update.state(); if (s && s.current) { version = String(s.current); return; } }
      const el = document.querySelector('#title .ver');
      const m = el && /ersion\s+(\S+?)\.\s/.exec(el.textContent);
      if (m) version = m[1];
    } catch (e) { /* keep '?' */ }
  };
  const platform = () => (window.fnaz ? (/Mac/i.test(navigator.userAgent) ? 'desktop-mac' : /Windows/i.test(navigator.userAgent) ? 'desktop-win' : 'desktop') : document.body.classList.contains('touch') ? 'phone' : 'web');
  let lastScreen = '', beating = false;
  async function beat() {
    const h = NET && NET.h;
    if (!sharing() || !h || !h.y || beating || document.hidden) return;
    beating = true;
    try {
      await rpc('heartbeat', { p_id: pid, p_ver: version, p_platform: platform(), p_screen: String(h.y.screen || ''), p_night: h.y.running ? Math.round(h.y.night) || 0 : 0, p_mode: NET.role ? 'online' : 'single' }, 6000);
    } catch (e) { /* offline: nothing to report */ }
    finally { beating = false; }
  }
  readVersion().then(() => setTimeout(beat, 3000));
  setInterval(beat, 30000);
  setInterval(() => { const h = NET && NET.h; const s = h && h.y ? h.y.screen + ':' + (h.y.running ? h.y.night : 0) : ''; if (s && s !== lastScreen) { lastScreen = s; setTimeout(beat, 800); } }, 2000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) beat(); });

  /* ---------- watching and events (same switch as the online status) ----------
   * While a night is running, a short summary of it goes to the server every 3 seconds, and the developer can send a few
   * fixed events back: a message, an animatronic at the door, a burst of speed, a gift of coins. Nothing else can be sent. */
  const M = () => window.FNAZMOD, SUMMON = ['zayed', 'bubbles', 'taffy', 'sherbet'];
  const room = (a) => (a ? (a.office ? '*' : '') + (a.room || '') : '');
  setInterval(() => {
    const y = NET && NET.h && NET.h.y; if (!sharing() || document.hidden || !y || !y.running || !y.ai) return;
    const ai = y.ai, p = SUMMON.map((w) => (w === 'sherbet' ? (ai.sherbet.running ? 'running' : 'stage ' + ai.sherbet.stage) : room(ai[w])));
    rpc('report_state', { p_id: pid, p_state: { n: Math.round(y.night) || 0, h: y.hour, p, w: Math.round(y.power), d: [+!!y.doorL, +!!y.doorR], l: [+!!y.lightL, +!!y.lightR], c: y.monitor ? String(y.cam || '') : '' } }, 4000).catch(() => {});
  }, 3000);
  let since = null;
  const num = (v, lo, hi) => Math.max(lo, Math.min(hi, Number(v) || lo));
  function run(c) {
    const m = M(), a = c.args || {}; if (!m) return;
    if (c.kind === 'msg' && typeof a.text === 'string') m.toast('Message from the developer: ' + a.text.slice(0, 160));
    else if (c.kind === 'summon' && SUMMON.includes(a.who)) m.summon(a.who);
    else if (c.kind === 'speed') { const old = m.mod.speed; m.mod.speed = num(a.mult, 0.5, 3); setTimeout(() => { m.mod.speed = old; }, num(a.sec, 1, 60) * 1000); }
    else if (c.kind === 'give') m.toast('A gift from the developer: ' + (m.give({ coins: num(a.coins, 0, 500) }) || 'nothing'));
  }
  async function poll() {
    if (!sharing() || document.hidden) return;
    try { const r = await rpc('get_commands', { p_id: pid, p_since: since }, 5000); if (r) { if (since !== null) r.cmds.forEach(run); since = r.last; } } catch (e) { /* offline */ }
  }
  poll(); setInterval(poll, 3000);

  /* ---------- Settings: the switch ---------- */
  const settings = document.querySelector('#settings .settings');
  if (settings) {
    const row = document.createElement('div');
    row.className = 'set-row';
    row.innerHTML = '<label for="setShare">Show that I am online</label><input id="setShare" type="checkbox"><span></span><p class="hint">Tells the developer that the game is open: a random ID, the version, your device type and the screen you are on, and during a night, the hour and where the animatronics are. The developer can send messages and events (an animatronic at your door, a gift) while you play. No name, no account, no location, no screen capture. Turn it off to opt out of all of it.</p>';
    settings.insertBefore(row, settings.children[2] || null);
    const box = row.querySelector('#setShare');
    box.checked = sharing();
    box.addEventListener('change', () => { ls.set(SHARE, box.checked ? '1' : '0'); if (box.checked) beat(); });
  }

  /* ---------- admin: who is online now, and the password ---------- */
  const panel = document.getElementById('modMenu');
  if (panel && window.FNAZMOD) {
    const sec = document.createElement('section');
    sec.className = 'mm-sec live';
    sec.innerHTML = `<h3>Online now <b id="lvTotal">…</b></h3>
      <div id="lvChips" class="lv-chips"></div>
      <div id="lvSpec" class="lv-spec" hidden><div class="lv-spec-head"><b id="lvSpecWho"></b><button type="button" id="lvStop">Stop watching</button></div><canvas id="lvMap" width="420" height="300" aria-label="Live map of the watched player's night"></canvas><p id="lvInfo" class="lv-info"></p></div>
      <input type="search" id="lvFind" class="lv-find" placeholder="Filter players (ID, device, night)" aria-label="Filter players">
      <div id="lvList" class="lv-list" aria-live="polite"></div>
      <p class="mm-note" id="lvNote"></p>
      <details class="ann-setup"><summary>Change the admin password</summary>
        <input type="password" id="lvOld" placeholder="Current password" autocomplete="off" aria-label="Current admin password">
        <input type="password" id="lvNew" placeholder="New password (12 or more characters)" autocomplete="off" aria-label="New admin password">
        <div class="mm-btns"><button type="button" id="lvChange">Change password</button><button type="button" id="lvOut">Log out here</button></div><p class="mm-note" id="lvPw"></p></details>`;
    panel.insertBefore(sec, panel.querySelector('.news-anchor') || panel.querySelector('.ann') || panel.querySelector('.mm-foot'));
    const $l = (s) => sec.querySelector(s);
    let timer = 0, busy = false;
    const nightText = (p) => (p.screen === 'game' ? (p.night === 13 ? 'secret night' : p.night >= 8 ? 'Nightmare ' + (p.night - 7) : p.night === 6 ? '4/20 mode' : p.night === 7 ? 'custom night' : 'Night ' + p.night) : p.screen === 'title' ? 'title screen' : p.screen || 'menu');
    const NAMES4 = { zayed: 'Camel', bubbles: 'Cat', taffy: 'Goat', sherbet: 'Falcon' };
    const st = (p) => (p.state ? `Night ${p.state.n}, ${p.state.h || 12} AM · Camel ${p.state.p[0] || '-'}, Cat ${p.state.p[1] || '-'}, Goat ${p.state.p[2] || '-'}, Falcon ${p.state.p[3] || '-'}` : '');
    const tools = (t) => `<span class="lv-tools" data-t="${t}">${Object.entries(NAMES4).map(([w, n]) => `<button type="button" data-k="summon" data-who="${w}">${n}</button>`).join('')}<button type="button" data-k="watch" class="lv-watch">Watch</button><button type="button" data-k="msg">Message</button><button type="button" data-k="speed">Fast 10s</button><button type="button" data-k="give">+50 coins</button></span>`;
    let last = [], watching = '';
    /* The floor plan of the old building (x, y, width, height in a 0-100 grid) for the live view. */
    const PLAN = { backstage: [3, 5, 20, 15, 'Backstage'], stage: [38, 3, 24, 15, 'Stage'], restroom: [77, 5, 20, 15, 'Restrooms'], cove: [3, 26, 20, 16, 'Cove'], dining: [28, 24, 44, 22, 'Dining'], kitchen: [77, 26, 20, 16, 'Kitchen'], westHall: [26, 50, 11, 22, 'W hall'], eastHall: [63, 50, 11, 22, 'E hall'], supply: [8, 74, 17, 14, 'Supply'], westCor: [26, 74, 11, 14, 'W corner'], eastCor: [63, 74, 11, 14, 'E corner'], office: [40, 76, 20, 18, 'OFFICE'] };
    const COLORS = { zayed: '#e0b56c', bubbles: '#ff8cc0', taffy: '#fff0d4', sherbet: '#ff9a3a' };
    function drawMap(p) {
      const cv = $l('#lvMap'), g = cv.getContext('2d'), W = cv.width, H = cv.height, s = p.state, X = (v) => v * W / 100, Y = (v) => v * H / 100;
      g.clearRect(0, 0, W, H); g.font = '600 12px sans-serif'; g.textAlign = 'center';
      for (const [k, [x, y, w, h, n]] of Object.entries(PLAN)) { g.fillStyle = k === 'office' ? '#3a1730' : '#1d1824'; g.strokeStyle = s && s.c === k ? '#ffe066' : 'rgba(241,231,208,.3)'; g.lineWidth = s && s.c === k ? 3 : 1.2; g.fillRect(X(x), Y(y), X(w), Y(h)); g.strokeRect(X(x), Y(y), X(w), Y(h)); g.fillStyle = 'rgba(241,231,208,.55)'; g.fillText(n, X(x + w / 2), Y(y + 4.2)); }
      if (!s) return;
      const slot = {}; // where each body stands: a room name, a '*' for in your office, or the Falcon's stage count
      ['zayed', 'bubbles', 'taffy', 'sherbet'].forEach((w, i) => {
        let r = s.p[i] || '', office = r[0] === '*'; r = office ? 'office' : r;
        if (w === 'sherbet') r = r === 'running' ? 'westHall' : 'cove';
        const box = PLAN[r] || PLAN.stage, n = (slot[r] = (slot[r] || 0) + 1) - 1;
        g.fillStyle = COLORS[w]; g.beginPath(); g.arc(X(box[0] + 4 + n * 5), Y(box[1] + box[3] - 4), 7, 0, 7); g.fill(); g.strokeStyle = office ? '#ff4d8d' : '#000'; g.lineWidth = office ? 3 : 1; g.stroke();
      });
      // the two doors and the lights beside them
      [[37, s.d && s.d[0], s.l && s.l[0]], [62, s.d && s.d[1], s.l && s.l[1]]].forEach(([x, door, light]) => { g.fillStyle = door ? '#ff4d8d' : '#555'; g.fillRect(X(x), Y(76), 5, Y(18)); if (light) { g.fillStyle = '#ffe066'; g.beginPath(); g.arc(X(x + 2.5), Y(72), 6, 0, 7); g.fill(); } });
    }
    function spectate() {
      const p = last.find((x) => x.pid === watching), box = $l('#lvSpec'); box.hidden = !watching;
      if (!watching) return;
      if (!p) { $l('#lvSpecWho').textContent = 'Player ' + watching.slice(0, 6) + ' left'; $l('#lvInfo').textContent = 'This player is no longer online.'; drawMap({}); return; }
      const s = p.state; $l('#lvSpecWho').textContent = 'Watching ' + p.id + ' · ' + (p.platform || '?') + ' · v' + (p.ver || '?');
      $l('#lvInfo').textContent = s ? `Night ${s.n}, ${s.h || 12} AM` + (s.d ? ` · power ${s.w}% · doors ${s.d[0] ? 'L closed' : 'L open'}, ${s.d[1] ? 'R closed' : 'R open'} · ${s.c ? 'on camera ' + s.c : 'looking at the office'}` : ' · (older version: no door or power info)') : `Not in a night (${nightText(p)}).`;
      drawMap(p);
    }
    function render() {
      const q = ($l('#lvFind').value || '').toLowerCase(), list = last.filter((p) => !q || [p.id, p.platform, p.ver, nightText(p), p.mode].join(' ').toLowerCase().includes(q));
      $l('#lvList').innerHTML = last.length ? (q ? '' : `<div class="lv-all"><b>Everyone</b>${tools('all')}</div>`) + (list.map((p) => `<div class="${p.pid === watching ? 'on' : ''}"><b>${p.id}</b><span>${p.platform || '?'} · v${p.ver || '?'}</span><span>${nightText(p)}${p.mode === 'online' ? ' · online room' : ''}</span><i>${p.mins}m</i>${p.state ? `<small class="lv-state">${st(p)}</small>` : ''}${tools(p.pid)}</div>`).join('') || '<em>No player matches the filter.</em>') : '<em>Nobody has the game open right now.</em>';
      spectate();
    }
    async function refresh() {
      if (busy) return;
      const pw = FNAZMOD.admin.get();
      if (!pw) return;
      busy = true;
      try {
        const d = await rpc('admin_online', { p_secret: pw }, 6000);
        if (!d) { $l('#lvNote').textContent = 'The server did not accept the password.'; return; }
        $l('#lvTotal').textContent = d.total + (d.today > d.total ? ' · ' + d.today + ' today' : '');
        const count = (key, f) => { const m = {}; for (const p of d.players) { const k = f ? f(p) : p[key] || '?'; m[k] = (m[k] || 0) + 1; } return Object.entries(m).sort((a, b) => b[1] - a[1]).map(([k, n]) => `<span>${n} ${k}</span>`).join(''); };
        $l('#lvChips').innerHTML = d.players.length ? count('platform') + count('ver', (p) => 'v' + (p.ver || '?')) + count('mode') : '';
        last = d.players; render();
        $l('#lvNote').textContent = 'Anonymous: a short ID, never a name. Updates every two seconds.';
      } catch (e) { $l('#lvNote').textContent = 'Could not reach the server.'; }
      finally { busy = false; }
    }
    const start = () => { clearInterval(timer); refresh(); timer = setInterval(() => { if (panel.hidden) { clearInterval(timer); return; } refresh(); }, 2000); };
    panel.addEventListener('fnaz:open', start);
    $l('#lvList').addEventListener('click', async (e) => {
      const b = e.target.closest('button[data-k]'); if (!b) return; const t = b.closest('.lv-tools').dataset.t, k = b.dataset.k, pw = FNAZMOD.admin.get();
      if (k === 'watch') { watching = t; render(); return; }
      const args = k === 'summon' ? { who: b.dataset.who } : k === 'speed' ? { mult: 2, sec: 10 } : k === 'give' ? { coins: 50 } : { text: (prompt('Message to show:') || '').trim() };
      if (k === 'msg' && !args.text) return;
      try { const r = await rpc('admin_send', { p_secret: pw, p_target: t, p_kind: k, p_args: args }, 6000); $l('#lvNote').textContent = r ? 'Sent.' : 'The server refused (password?).'; } catch (err) { $l('#lvNote').textContent = 'Could not reach the server.'; }
    });
    $l('#lvStop').addEventListener('click', () => { watching = ''; render(); });
    $l('#lvFind').addEventListener('input', render);
    $l('#lvChange').addEventListener('click', async () => {
      const o = $l('#lvOld').value, n = $l('#lvNew').value, m = $l('#lvPw');
      if (n.length < 12) { m.textContent = 'The new password needs 12 or more characters.'; return; }
      try {
        const ok = await rpc('admin_change_secret', { p_old: o, p_new: n });
        if (ok === true) { await FNAZMOD.admin.set(n); $l('#lvOld').value = ''; $l('#lvNew').value = ''; m.textContent = 'Changed. Use the new one from now on.'; }
        else m.textContent = 'The current password was not right (or the server is busy).';
      } catch (e) { m.textContent = 'Could not reach the server.'; }
    });
    $l('#lvOut').addEventListener('click', () => { FNAZMOD.admin.forget(); FNAZMOD.toggle(false); });
    sec.addEventListener('keydown', (e) => e.stopPropagation());
  }
  window.FNAZLIVE = { rpc, sharing, platform: platform, version: () => version, live: true };
})();
