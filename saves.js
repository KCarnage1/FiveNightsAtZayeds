/* Save transfer: move your progress between devices (desktop app, phone, another browser) or keep a backup.
 *
 * Settings > "Transfer save" opens a window with:
 *   - Export: a file (FNAZ-save-<date>.json) or a short code you can copy and paste (handy on a phone).
 *   - Import: pick that file or paste the code. You see what is in it first, then choose to replace your progress or combine
 *     it with what you have (the best of both). Settings such as volume and graphics stay as they are unless you tick the box.
 *   - Undo: the save you had before an import is kept, and one click puts it back.
 * What travels: story progress and stars, achievements, and shop coins and items. Nothing is sent anywhere; it is all done
 * in the page. The code carries a checksum, so a code that was cut or mistyped is refused instead of half-loading. */
(() => {
  'use strict';
  const KEYS = { game: 'fnaz_save_v1', ach: 'fnaz_ach_v1', mods: 'fnaz_mods_v1' };
  const BACKUP = 'fnaz_backup_v1';
  const SETTINGS = ['volume', 'quality', 'subs', 'fps', 'fpsCustom', 'fpsShow', 'rpc', 'authentic', 'authenticSet', 'calm', 'fit'];
  const ITEMS = ['mask', 'battery', 'spray', 'wrap'];
  const MAX = 200000; // bytes: far more than any real save

  /* ---------- reading and cleaning ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* nothing to remove */ } }
  };
  // plain data only: no prototype tricks, nothing but numbers, strings, booleans, arrays and objects
  function clean(v, depth = 0) {
    if (depth > 6) return undefined;
    if (v === null || typeof v === 'boolean' || typeof v === 'string' || (typeof v === 'number' && Number.isFinite(v))) return v;
    if (Array.isArray(v)) return v.slice(0, 64).map((x) => clean(x, depth + 1));
    if (typeof v === 'object') {
      const o = {};
      for (const k of Object.keys(v).slice(0, 128)) { if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue; const c = clean(v[k], depth + 1); if (c !== undefined) o[k] = c; }
      return o;
    }
    return undefined;
  }
  const read = (k) => { try { const o = JSON.parse(store.get(k) || '{}'); return o && typeof o === 'object' && !Array.isArray(o) ? clean(o) : {}; } catch (e) { return {}; } };
  const int = (v, lo, hi, d) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.max(lo, Math.min(hi, n)) : d; };

  /* ---------- the three parts of a save, made safe ---------- */
  function safeGame(g) {
    g = g || {};
    const o = { night: int(g.night, 1, 5, 1), unlocked: int(g.unlocked, 1, 5, 1), nmUnlocked: int(g.nmUnlocked, 1, 5, 1), stars: {}, custom: [5, 5, 5, 5] };
    for (const k of Object.keys(g.stars || {}).slice(0, 16)) if (/^[a-z0-9]{1,12}$/i.test(k) && g.stars[k]) o.stars[k] = 1;
    if (Array.isArray(g.custom)) o.custom = [0, 1, 2, 3].map((i) => int(g.custom[i], 0, 20, 5));
    for (const k of SETTINGS) if (g[k] !== undefined && ['number', 'string', 'boolean'].includes(typeof g[k])) o[k] = g[k];
    return o;
  }
  function safeAch(a) {
    const o = {};
    for (const k of Object.keys(a || {}).slice(0, 64)) if (/^[a-z0-9_]{1,24}$/i.test(k) && a[k]) o[k] = typeof a[k] === 'number' ? a[k] : 1;
    return o;
  }
  function safeMods(m) {
    m = m || {};
    const o = { coins: int(m.coins, 0, 1e9, 0), inv: {} };
    for (const k of ITEMS) o.inv[k] = int((m.inv || {})[k], 0, 999, 0);
    return o;
  }

  /* ---------- the pack: what is exported ---------- */
  function pack() {
    return { app: 'fnaz', format: 1, saved: Date.now(), game: safeGame(read(KEYS.game)), ach: safeAch(read(KEYS.ach)), mods: safeMods(read(KEYS.mods)) };
  }
  const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
  const b64 = (s) => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const unb64 = (s) => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
  function encode(p) { const body = b64(JSON.stringify(p)); return 'FNAZ1.' + body + '.' + hash(body); }

  // accepts a code or the contents of an exported file
  function decode(text) {
    text = String(text || '').trim();
    if (!text) throw new Error('Nothing to import yet.');
    if (text.length > MAX * 2) throw new Error('That is too big to be a save.');
    let obj;
    if (text.startsWith('FNAZ1.')) {
      const parts = text.replace(/\s+/g, '').split('.');
      if (parts.length !== 3) throw new Error('The code looks cut off. Copy all of it.');
      if (hash(parts[1]) !== parts[2]) throw new Error('The code does not match its checksum. It was probably cut or mistyped.');
      try { obj = JSON.parse(unb64(parts[1])); } catch (e) { throw new Error('The code could not be read.'); }
    } else {
      try { obj = JSON.parse(text); } catch (e) { throw new Error('That is not a save file or code.'); }
    }
    if (!obj || obj.app !== 'fnaz' || obj.format !== 1) throw new Error('That is not a Five Nights at Zayed\'s save.');
    return { app: 'fnaz', format: 1, saved: Number(obj.saved) || 0, game: safeGame(clean(obj.game)), ach: safeAch(clean(obj.ach)), mods: safeMods(clean(obj.mods)) };
  }

  function summary(p) {
    const stars = Object.keys(p.game.stars).length, ach = Object.keys(p.ach).length;
    const when = p.saved ? new Date(p.saved).toLocaleDateString() : 'unknown date';
    const night = p.game.unlocked >= 5 && p.game.stars.n5 ? 'Night 5 beaten' : 'Night ' + p.game.unlocked + ' unlocked';
    return `Saved ${when}. ${night}, ${stars} star${stars === 1 ? '' : 's'}, ${ach} achievement${ach === 1 ? '' : 's'}, ${p.mods.coins} coins.`;
  }

  /* ---------- combining and applying ---------- */
  // settings only travel when asked for
  function addSettings(next, on, inc) { if (on) for (const k of SETTINGS) if (inc.game[k] !== undefined) next.game[k] = inc.game[k]; return next; }
  function combine(cur, inc, mode, withSettings) {
    const g = safeGame(read(KEYS.game)); // what this device has (its settings are kept)
    if (mode === 'merge') {
      const game = Object.assign({}, g, {
        night: Math.max(g.night, inc.game.night), unlocked: Math.max(g.unlocked, inc.game.unlocked), nmUnlocked: Math.max(g.nmUnlocked, inc.game.nmUnlocked),
        stars: Object.assign({}, g.stars, inc.game.stars)
      });
      return addSettings({
        game,
        ach: Object.assign({}, cur.ach, inc.ach),
        mods: { coins: Math.max(cur.mods.coins, inc.mods.coins), inv: Object.fromEntries(ITEMS.map((k) => [k, Math.max(cur.mods.inv[k], inc.mods.inv[k])])) }
      }, withSettings, inc);
    }
    const game = Object.assign({}, g, { night: inc.game.night, unlocked: inc.game.unlocked, nmUnlocked: inc.game.nmUnlocked, stars: inc.game.stars, custom: inc.game.custom });
    return addSettings({ game, ach: inc.ach, mods: inc.mods }, withSettings, inc);
  }

  function apply(inc, mode, withSettings) {
    const cur = pack();
    // keep what is here now, so it can be put back
    const backup = JSON.stringify({ saved: Date.now(), raw: { game: store.get(KEYS.game), ach: store.get(KEYS.ach), mods: store.get(KEYS.mods) } });
    store.set(BACKUP, backup);
    const next = combine(cur, inc, mode, withSettings);
    // the game's own save keeps fields this tool does not know about: merge into it rather than replacing it
    const rawGame = read(KEYS.game);
    const ok = store.set(KEYS.game, JSON.stringify(Object.assign({}, rawGame, next.game))) &&
      store.set(KEYS.ach, JSON.stringify(next.ach)) && store.set(KEYS.mods, JSON.stringify(next.mods));
    if (!ok) { restore(); throw new Error('This browser would not let the save be written.'); }
  }
  function restore() {
    let b; try { b = JSON.parse(store.get(BACKUP) || 'null'); } catch (e) { b = null; }
    if (!b || !b.raw) return false;
    for (const [name, key] of Object.entries(KEYS)) { if (b.raw[name] === null || b.raw[name] === undefined) store.del(key); else store.set(key, b.raw[name]); }
    return true;
  }
  const hasBackup = () => { try { return !!JSON.parse(store.get(BACKUP) || 'null'); } catch (e) { return false; } };

  /* ---------- the window ---------- */
  const stage = document.getElementById('stage');
  const settings = document.querySelector('#settings .settings');
  if (!stage) return;

  const box = document.createElement('div');
  box.id = 'saveBox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-labelledby', 'svH');
  box.innerHTML = `<h3 id="svH">Transfer your save</h3>
    <p class="sv-lead">Move your progress to another device, or keep a backup. Story progress, stars, achievements and shop coins and items travel with it.</p>
    <div class="sv-sec"><h4>Export</h4>
      <div class="sv-btns"><button type="button" id="svFile">Save to a file</button><button type="button" id="svCopy">Copy a code</button></div>
      <textarea id="svOut" readonly rows="2" aria-label="Your save code" hidden></textarea></div>
    <div class="sv-sec"><h4>Import</h4>
      <div class="sv-btns"><label class="sv-pick">Choose a file<input type="file" id="svIn" accept=".json,.txt,application/json,text/plain"></label></div>
      <textarea id="svPaste" rows="2" placeholder="or paste a save code here" spellcheck="false" autocomplete="off" autocapitalize="none"></textarea>
      <p id="svSum" class="sv-sum" aria-live="polite"></p>
      <div id="svOpts" hidden>
        <label><input type="radio" name="svMode" value="replace" checked> Replace my progress with this</label>
        <label><input type="radio" name="svMode" value="merge"> Combine: keep the best of both</label>
        <label><input type="checkbox" id="svSet"> Also copy the settings (volume, graphics, subtitles)</label>
      </div>
      <div class="sv-btns"><button type="button" id="svGo" disabled>Import</button><button type="button" id="svUndo" hidden>Undo the last import</button></div></div>
    <p id="svMsg" class="sv-msg" aria-live="polite"></p>
    <button type="button" id="svClose" class="sv-close">Close</button>`;
  stage.appendChild(box);
  const $ = (s) => box.querySelector(s);
  const msg = (t, bad) => { $('#svMsg').textContent = t || ''; $('#svMsg').classList.toggle('bad', !!bad); };

  let incoming = null;
  function inspect(text) {
    incoming = null; $('#svGo').disabled = true; $('#svOpts').hidden = true; $('#svSum').textContent = '';
    if (!String(text || '').trim()) { msg(''); return; }
    try { incoming = decode(text); $('#svSum').textContent = summary(incoming); $('#svGo').disabled = false; $('#svOpts').hidden = false; msg(''); }
    catch (e) { msg(e.message, true); }
  }
  function open() {
    box.hidden = false; box.classList.remove('out');
    $('#svOut').hidden = true; $('#svPaste').value = ''; $('#svIn').value = ''; inspect('');
    $('#svUndo').hidden = !hasBackup();
    $('#svFile').focus();
  }
  function close() { box.classList.add('out'); setTimeout(() => { if (box.classList.contains('out')) box.hidden = true; }, 200); }

  $('#svFile').addEventListener('click', () => {
    const p = pack(), blob = new Blob([JSON.stringify(p, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'FNAZ-save-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    msg('Saved a file. Keep it somewhere safe, or open it on your other device with Import.');
  });
  $('#svCopy').addEventListener('click', async () => {
    const code = encode(pack()), out = $('#svOut');
    out.value = code; out.hidden = false; out.select();
    try { await navigator.clipboard.writeText(code); msg('Copied. Paste it into Import on your other device.'); }
    catch (e) { try { document.execCommand('copy'); msg('Copied. Paste it into Import on your other device.'); } catch (x) { msg('Select the code above and copy it.'); } }
  });
  $('#svIn').addEventListener('change', () => {
    const f = $('#svIn').files && $('#svIn').files[0];
    if (!f) return;
    if (f.size > MAX) { msg('That file is too big to be a save.', true); return; }
    const r = new FileReader();
    r.onload = () => { $('#svPaste').value = ''; inspect(String(r.result)); };
    r.onerror = () => msg('The file could not be read.', true);
    r.readAsText(f);
  });
  $('#svPaste').addEventListener('input', () => inspect($('#svPaste').value));
  $('#svGo').addEventListener('click', () => {
    if (!incoming) return;
    try {
      apply(incoming, (box.querySelector('input[name=svMode]:checked') || {}).value || 'replace', $('#svSet').checked);
      msg('Imported. Reloading…'); $('#svGo').disabled = true;
      setTimeout(() => location.reload(), 700);
    } catch (e) { msg(e.message, true); }
  });
  $('#svUndo').addEventListener('click', () => { if (restore()) { msg('Put back. Reloading…'); setTimeout(() => location.reload(), 700); } });
  $('#svClose').addEventListener('click', close);
  box.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') close(); });

  if (settings) {
    const row = document.createElement('div');
    row.className = 'set-row';
    row.innerHTML = '<span>Save transfer</span><div class="up-row"><button type="button" id="svOpen">Export or import a save…</button></div>';
    settings.insertBefore(row, settings.children[1] || null);
    row.querySelector('#svOpen').addEventListener('click', open);
  }
  window.FNAZSAVE = { pack, encode, decode, apply, restore, summary, open };
})();
