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

  /* ---------- Settings: the switch ---------- */
  const settings = document.querySelector('#settings .settings');
  if (settings) {
    const row = document.createElement('div');
    row.className = 'set-row';
    row.innerHTML = '<label for="setShare">Show that I am online</label><input id="setShare" type="checkbox"><span></span><p class="hint">Tells the developer that the game is open: a random ID, the version, your device type and the screen you are on. No name, no account and no location.</p>';
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
        $l('#lvList').innerHTML = d.players.length ? d.players.map((p) => `<div><b>${p.id}</b><span>${p.platform || '?'} · v${p.ver || '?'}</span><span>${nightText(p)}${p.mode === 'online' ? ' · online room' : ''}</span><i>${p.mins}m</i></div>`).join('') : '<em>Nobody has the game open right now.</em>';
        $l('#lvNote').textContent = 'Anonymous: a short ID, never a name. Updates every few seconds.';
      } catch (e) { $l('#lvNote').textContent = 'Could not reach the server.'; }
      finally { busy = false; }
    }
    const start = () => { clearInterval(timer); refresh(); timer = setInterval(() => { if (panel.hidden) { clearInterval(timer); return; } refresh(); }, 4000); };
    panel.addEventListener('fnaz:open', start);
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
