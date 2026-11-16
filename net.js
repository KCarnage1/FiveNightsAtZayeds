/* Online play (peer to peer, WebRTC via PeerJS).
 *
 * The host runs the real game. The guest sends inputs and draws the host's state:
 *   - co-op:   both players are guards in the same office (shared doors, lights, power, tablet)
 *   - versus:  the host is the guard, the guest plays one animatronic (the other three stay AI)
 *
 * game.bundle.js calls into window.FNAZNET (hooks at mu/er/Wn/nr/ga/Ni/fc/vu/ec/va and the
 * title menu) and hands over its internals through FNAZNET.bind(). Offline, every hook is a no-op.
 *
 * Tweak these to rebalance the animatronic player. */
(() => {
  'use strict';

  const MOVE_COOLDOWN = { zayed: 6, bubbles: 5, taffy: 5, sherbet: 5 }; // seconds between animatronic actions
  const SNAP_HZ = 20;
  const PREFIX = 'fnaz-';
  const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const QUICK_CHAT = ['Check the west door!', 'Check the east door!', 'Cameras, now!', 'Save power!'];
  const ANI_KEYS = ['zayed', 'bubbles', 'taffy', 'sherbet'];
  const NO_FORWARD = new Set(['unlock', 'setVolume', 'ambient', 'stopAll', 'jumpscare', 'chime', 'powerOut']);
  const DEDUPE = new Set(['musicBox', 'lightBuzz']);

  const H = {}; // internals bound from the game bundle
  const NET = window.FNAZNET = {
    role: null, // null | 'host' | 'guest'
    mode: 'coop', // 'coop' | 'versus'
    ani: null, // animatronic key when versus
    playing: false,
    hcd: 0, // animatronic cooldown remaining
    bind(h) { Object.assign(H, h); },
    // hook stubs, replaced below once a session exists
    i() { return false; },
    ev() {},
    guestStep() {},
    hostStep() {},
    menu() {},
    leave() {},
    again() {},
    open() { openLobby(); },
  };

  const $ = (s) => document.querySelector(s);
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const isAni = () => NET.role === 'guest' && NET.mode === 'versus';

  let peer = null, conn = null;
  const cfg = { mode: 'coop', night: 1, levels: [10, 10, 10, 10], ani: 'bubbles' };
  let origCustom = null;

  /* ---------------- UI ---------------- */
  const stage = $('#stage');
  const titleNav = $('#title .menu');
  if (titleNav) {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.act = 'online';
    b.textContent = 'Online';
    titleNav.insertBefore(b, titleNav.querySelector('[data-act=settings]'));
  }

  const lobby = document.createElement('section');
  lobby.id = 'online';
  lobby.className = 'screen';
  lobby.setAttribute('aria-labelledby', 'olH');
  lobby.innerHTML = `
    <h2 id="olH">Online</h2>
    <p class="lead">Play with a friend over the internet. Co-op as two guards, or one guard against one animatronic.</p>
    <div id="olChoose">
      <div class="row">
        <button type="button" id="olHost" class="primary" data-primary>Host a game</button>
        <span class="ol-or">or join</span>
        <input id="olCode" maxlength="4" placeholder="CODE" autocomplete="off" spellcheck="false" aria-label="Room code">
        <button type="button" id="olJoin">Join</button>
      </div>
    </div>
    <div id="olRoom" hidden>
      <p id="olStatus" class="ol-status" aria-live="polite"></p>
      <div class="ol-grid">
        <div class="ol-col" id="olHostSet">
          <h3>Game</h3>
          <div class="seg" id="olMode">
            <label><input type="radio" name="olMode" value="coop"><span>Co-op guards</span></label>
            <label><input type="radio" name="olMode" value="versus"><span>Guard vs animatronic</span></label>
          </div>
          <p class="hint" id="olModeHint"></p>
          <label class="ol-line">Night
            <select id="olNight">
              <option value="1">Night 1</option><option value="2">Night 2</option><option value="3">Night 3</option>
              <option value="4">Night 4</option><option value="5">Night 5</option><option value="6">4/20 mode</option><option value="7">Custom</option>
            </select>
          </label>
          <div id="olLevels" class="ol-levels" hidden></div>
        </div>
        <div class="ol-col" id="olAniSet">
          <h3>Animatronic</h3>
          <div class="seg" id="olAni">
            <label><input type="radio" name="olAni" value="zayed"><span>Camel</span></label>
            <label><input type="radio" name="olAni" value="bubbles"><span>Cat</span></label>
            <label><input type="radio" name="olAni" value="taffy"><span>Goat</span></label>
            <label><input type="radio" name="olAni" value="sherbet"><span>Falcon</span></label>
          </div>
          <p class="hint" id="olAniHint"></p>
        </div>
      </div>
      <div class="row"><button type="button" id="olStart" class="primary">Start shift</button></div>
    </div>
    <button type="button" class="back" data-act="title">Back</button>`;
  stage.appendChild(lobby);

  const levelsBox = $('#olLevels');
  ['Camel', 'Cat', 'Goat', 'Falcon'].forEach((n, i) => {
    const l = document.createElement('label');
    l.className = 'ol-lv';
    l.innerHTML = `${n} <input type="range" min="0" max="20" value="10" data-lv="${i}"><output>10</output>`;
    levelsBox.appendChild(l);
  });

  const hud = document.createElement('div');
  hud.id = 'netHud';
  hud.hidden = true;
  stage.appendChild(hud);

  const chat = document.createElement('div');
  chat.id = 'netChat';
  chat.hidden = true;
  chat.innerHTML = '<div id="netLog" aria-live="polite"></div><input id="netChatIn" maxlength="120" placeholder="Say something (Enter to send)" autocomplete="off" hidden>' +
    '<div id="netHint">Enter: chat &middot; F1-F4: quick chat</div>';
  stage.appendChild(chat);
  const chatIn = $('#netChatIn');
  const log = $('#netLog');

  const toast = document.createElement('div');
  toast.id = 'netToast';
  toast.hidden = true;
  stage.appendChild(toast);
  let toastT = 0;
  function showToast(msg) {
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(() => { toast.hidden = true; }, 5000);
  }

  function say(who, text) {
    const d = document.createElement('div');
    d.className = 'ol-msg ' + who;
    d.textContent = (who === 'me' ? 'You' : who === 'them' ? 'Friend' : '') + (who === 'sys' ? '' : ': ') + text;
    log.appendChild(d);
    while (log.children.length > 6) log.removeChild(log.firstChild);
    setTimeout(() => d.classList.add('old'), 9000);
  }

  function setStatus(t) { $('#olStatus').textContent = t; }

  function renderLobby() {
    const host = NET.role === 'host';
    $('#olChoose').hidden = !!NET.role;
    $('#olRoom').hidden = !NET.role;
    if (!NET.role) return;
    $('#olHostSet').classList.toggle('ro', !host);
    $$('#olMode input').forEach((i) => { i.checked = i.value === cfg.mode; i.disabled = !host; });
    $('#olNight').value = String(cfg.night);
    $('#olNight').disabled = !host;
    levelsBox.hidden = cfg.night !== 7;
    levelsBox.querySelectorAll('input').forEach((r, i) => { r.value = cfg.levels[i]; r.nextElementSibling.textContent = cfg.levels[i]; r.disabled = !host; });
    $('#olModeHint').textContent = cfg.mode === 'coop'
      ? 'Both of you are guards in the same office. Doors, lights, power and the tablet are shared.'
      : 'The host is the guard. The guest plays one animatronic; the other three stay on their normal AI.';
    $('#olAniSet').hidden = cfg.mode !== 'versus';
    $$('#olAni input').forEach((i) => { i.checked = i.value === cfg.ani; i.disabled = host || !conn; });
    $('#olAniHint').textContent = host ? 'Your friend picks which animatronic they play.' : 'Pick who you want to play.';
    const start = $('#olStart');
    start.hidden = !host;
    start.disabled = !(conn && conn.open);
  }
  function $$(s) { return [...document.querySelectorAll(s)]; }

  /* ---------------- connection ---------------- */
  function peerOpts() {
    return window.FNAZ_PEER || {}; // tests can point this at a local PeerServer
  }
  function randomCode() {
    let c = '';
    for (let i = 0; i < 4; i++) c += ROOM_CODE_CHARS[Math.floor(Math.random() * ROOM_CODE_CHARS.length)];
    return c;
  }
  function send(m) {
    if (conn && conn.open) { try { conn.send(m); } catch (e) { /* closing */ } }
  }

  function hostGame() {
    if (typeof Peer === 'undefined') return showToast('Online play is unavailable (PeerJS failed to load).');
    teardown();
    NET.role = 'host';
    setStatus('Opening a room…');
    renderLobby();
    const tryId = (attempt) => {
      const code = randomCode();
      const p = new Peer(PREFIX + code, peerOpts());
      peer = p;
      p.on('open', () => {
        NET.code = code;
        setStatus('Room code: ' + code + '. Waiting for a friend to join…');
        renderLobby();
      });
      p.on('connection', (c) => {
        if (conn && conn.open) { c.on('open', () => c.close()); return; }
        wire(c);
      });
      p.on('error', (e) => {
        if (e.type === 'unavailable-id' && attempt < 5) { p.destroy(); return tryId(attempt + 1); }
        failed(e);
      });
      p.on('disconnected', () => { if (!p.destroyed) { try { p.reconnect(); } catch (e) { /* ignore */ } } });
    };
    tryId(0);
  }

  function joinGame(code) {
    code = (code || '').trim().toUpperCase();
    if (code.length !== 4) return showToast('Room codes are 4 letters.');
    if (typeof Peer === 'undefined') return showToast('Online play is unavailable (PeerJS failed to load).');
    teardown();
    NET.role = 'guest';
    NET.code = code;
    setStatus('Connecting to ' + code + '…');
    renderLobby();
    const p = new Peer(peerOpts());
    peer = p;
    const timer = setTimeout(() => { if (!conn || !conn.open) failed({ type: 'timeout' }); }, 15000);
    p.on('open', () => wire(p.connect(PREFIX + code, { reliable: true, serialization: 'json' }), timer));
    p.on('error', (e) => { clearTimeout(timer); failed(e); });
  }

  function failed(e) {
    const msg = e && e.type === 'peer-unavailable' ? 'No room with that code.'
      : e && e.type === 'timeout' ? 'Could not reach that room.'
      : 'Connection problem' + (e && e.type ? ' (' + e.type + ')' : '') + '.';
    const wasPlaying = NET.playing;
    teardown();
    renderLobby();
    showToast(msg);
    if (wasPlaying) H.va && H.va();
  }

  function wire(c, timer) {
    conn = c;
    c.on('open', () => {
      clearTimeout(timer);
      chat.hidden = false;
      say('sys', NET.role === 'host' ? 'Friend connected.' : 'Connected to host.');
      setStatus(NET.role === 'host' ? 'Friend connected. Choose settings and start.' : 'Connected. Waiting for the host to start…');
      if (NET.role === 'host') pushLobby();
      renderLobby();
    });
    c.on('data', onMsg);
    c.on('close', () => { if (conn === c) onDisconnect(); });
    c.on('error', () => { if (conn === c) onDisconnect(); });
  }

  function onDisconnect() {
    const wasPlaying = NET.playing;
    const host = NET.role === 'host';
    teardown();
    showToast(host ? 'Your friend left.' : 'Lost connection to the host.');
    if (wasPlaying) H.va && H.va(); else { renderLobby(); }
  }

  function teardown() {
    try { if (conn) { const c = conn; conn = null; c.close(); } } catch (e) { /* ignore */ }
    conn = null;
    try { if (peer) peer.destroy(); } catch (e) { /* ignore */ }
    peer = null;
    if (origCustom) { H.ce.custom = origCustom; origCustom = null; }
    NET.role = null;
    NET.ani = null;
    NET.mode = 'coop';
    NET.playing = false;
    NET.code = null;
    hud.hidden = true;
    chat.hidden = true;
    log.textContent = '';
    document.body.classList.remove('role-ani');
    if (H.y && H.y.ai) ANI_KEYS.forEach((k) => { if (H.y.ai[k]) H.y.ai[k].human = false; });
  }

  function pushLobby() { send({ t: 'lobby', cfg }); }

  /* ---------------- messages ---------------- */
  function onMsg(m) {
    if (!m || typeof m !== 'object') return;
    switch (m.t) {
      case 'lobby':
        if (NET.role === 'guest' && m.cfg) { Object.assign(cfg, m.cfg); renderLobby(); }
        break;
      case 'pick':
        if (NET.role === 'host' && ANI_KEYS.includes(m.ani)) { cfg.ani = m.ani; pushLobby(); renderLobby(); }
        break;
      case 'start':
        if (NET.role === 'guest') beginGame(m);
        break;
      case 'snap':
        if (NET.role === 'guest' && NET.playing) applySnap(m.s);
        break;
      case 'ev':
        if (NET.role === 'guest' && NET.playing) applyEvent(m);
        break;
      case 'snd':
        if (NET.role === 'guest' && NET.playing) playSound(m);
        break;
      case 'in':
        if (NET.role === 'host' && NET.playing) applyInput(m);
        break;
      case 'chat':
        if (typeof m.m === 'string') say('them', m.m.slice(0, 120));
        break;
    }
  }

  /* ---------------- starting a game ---------------- */
  function startAsHost() {
    if (NET.role !== 'host' || !conn || !conn.open) return;
    const m = { t: 'start', night: cfg.night, levels: cfg.levels.slice(), mode: cfg.mode, ani: cfg.mode === 'versus' ? cfg.ani : null };
    send(m);
    beginGame(m);
  }

  function beginGame(m) {
    NET.mode = m.mode;
    NET.ani = m.ani;
    if (!origCustom) origCustom = H.ce.custom;
    H.ce.custom = m.levels.slice();
    NET.playing = true;
    NET.hcd = 0;
    snapT = 0;
    H.ba(m.night, true);
    const y = H.y;
    if (NET.role === 'host' && NET.ani) y.ai[NET.ani].human = true;
    document.body.classList.toggle('role-ani', isAni());
    hud.hidden = !isAni();
    hudKey = '';
    chat.hidden = false;
    if (isAni()) {
      y.monitor = true;
      y.monA = 1;
      y.cam = aniCam();
      renderHud();
    }
  }

  NET.again = function () {
    if (NET.role !== 'host') return say('sys', 'Ask the host to start the next shift.');
    if (H.y.won && cfg.night < 5) cfg.night += 1;
    pushLobby();
    startAsHost();
  };

  /* ---------------- host: snapshots, sounds, inputs ---------------- */
  let snapT = 0;
  NET.hostStep = function (dt) {
    if (!NET.playing) return;
    if (NET.hcd > 0) NET.hcd = Math.max(0, NET.hcd - dt);
    snapT += dt;
    if (snapT < 1 / SNAP_HZ) return;
    snapT = 0;
    const y = H.y, a = y.ai;
    send({
      t: 'snap',
      s: {
        time: y.time, hour: y.hour, power: y.power,
        doorL: y.doorL, doorR: y.doorR, lightL: y.lightL, lightR: y.lightR,
        monitor: y.monitor, cam: y.cam, blackout: y.blackout, bT: y.bT, zFlash: y.zFlash,
        poster: y.poster, goldenArmed: y.goldenArmed, goldenIn: y.goldenIn, shake: y.shake,
        ai: {
          zayed: [a.zayed.room, a.zayed.office], bubbles: [a.bubbles.room, a.bubbles.office], taffy: [a.taffy.room, a.taffy.office],
          sherbet: [a.sherbet.stage, a.sherbet.running, a.sherbet.runT],
        },
        hcd: NET.hcd,
        wait: a.sherbet.wait, // seconds until Foxy runs on his own (animatronic HUD)
        zArmed: a.zayed.armed,
      },
    });
  };

  NET.ev = function (k, v) {
    if (NET.role === 'host' && NET.playing) send({ t: 'ev', k, v });
  };

  const lastSent = {};
  function wrapAudio(obj, prefix) {
    if (!obj) return;
    Object.keys(obj).forEach((name) => {
      const orig = obj[name];
      if (typeof orig !== 'function') return;
      if (prefix === 'S' && NO_FORWARD.has(name)) return;
      if (prefix === 'V' && name !== 'say') return;
      obj[name] = function (...args) {
        if (NET.role === 'host' && NET.playing && conn && conn.open) {
          const key = prefix + name, sig = JSON.stringify(args);
          if (!(DEDUPE.has(name) && lastSent[key] === sig)) {
            lastSent[key] = sig;
            send({ t: 'snd', p: prefix, n: name, a: args });
          }
        }
        return orig.apply(this, args);
      };
    });
  }
  /* Sound and Voice are top-level consts in audio.js, visible here by name. */
  try { wrapAudio(Sound, 'S'); } catch (e) { /* no audio */ }
  try { wrapAudio(Voice, 'V'); } catch (e) { /* no audio */ }

  function playSound(m) {
    try {
      const o = m.p === 'V' ? Voice : Sound;
      if (m.p === 'V' && ((H.y.dead || H.y.won))) return;
      if (typeof o[m.n] === 'function') o[m.n](...(m.a || []));
    } catch (e) { /* ignore */ }
  }

  function applyInput(m) {
    const y = H.y;
    if (!H.ai()) return;
    NET.applying = true;
    try {
      switch (m.a) {
        case 'er': if (NET.mode === 'coop') H.er(m.p[0]); break;
        case 'Wn': if (NET.mode === 'coop') H.Wn(m.p[0], !!m.p[1]); break;
        case 'nr': if (NET.mode === 'coop') H.nr(!!m.p[0]); break;
        case 'ga': if (NET.mode === 'coop') H.ga(m.p[0]); break;
        case 'move': aniMove(m.to); break;
      }
    } finally { NET.applying = false; }
    void y;
  }

  /* Animatronic actions. A click is a guaranteed "movement opportunity" for the chosen animatronic,
   * run through the same code the AI uses, so every rule (doors, tablet, Freddy 4B, Foxy cooldown) still applies. */
  function aniMove(to) {
    const y = H.y, who = NET.ani;
    if (!who || y.blackout || y.dead || y.won || y.scare) return;
    const a = y.ai[who];
    if (!a || NET.hcd > 0 || a.office) return;
    if (who === 'bubbles' || who === 'taffy') {
      const doorRoom = who === 'bubbles' ? 'westCor' : 'eastCor';
      if (a.room === doorRoom) { H.ru2(who); NET.hcd = MOVE_COOLDOWN[who]; return; }
      if ((H.zg[who][a.room] || []).includes(to)) { H.ru2(who, to); NET.hcd = MOVE_COOLDOWN[who]; }
    } else if (who === 'zayed') {
      if (a.armed) return; // already waiting for a chance to move
      a.armed = true;
      a.pending = 0;
      H.n_();
      NET.hcd = MOVE_COOLDOWN[who];
    } else if (who === 'sherbet') {
      if (a.running) return;
      if (a.stage >= 4) { H.Ql(); NET.hcd = MOVE_COOLDOWN[who]; return; }
      if (y.monitor || a.cd > 0) return;
      a.stage += 1;
      a.t = 0;
      H.oi('falcon');
      if (a.stage === 4) { a.wait = 25; Sound.steps(-0.8, 2, 0.1); }
      NET.hcd = MOVE_COOLDOWN[who];
    }
  }

  /* ---------------- guest: input, snapshots, events ---------------- */
  NET.i = function (name, args) {
    if (NET.role !== 'guest' || NET.applying || !NET.playing) return false;
    if (isAni()) {
      if (name === 'ga') send({ t: 'in', a: 'move', to: args[0] }); // a map click asks to move there
      return true; // the animatronic never touches the guard controls
    }
    send({ t: 'in', a: name, p: args });
    return true;
  };

  NET.guestStep = function (dt) {
    const y = H.y;
    if (!NET.playing) return;
    if (y.scare) { y.scare.t += dt; return; }
    if (y.dead || y.won) return;
    y.fade = Math.max(0, y.fade - dt * 0.45);
    y.dAnimL = clamp01(y.dAnimL + (y.doorL ? 6 : -6) * dt);
    y.dAnimR = clamp01(y.dAnimR + (y.doorR ? 6 : -6) * dt);
    y.monA = clamp01(y.monA + (y.monitor ? 4.5 : -4.5) * dt);
    y.statBurst = Math.max(0, y.statBurst - dt * 2.5);
    y.cupT = Math.max(0, y.cupT - dt);
    y.capT = Math.max(0, y.capT - dt);
  };

  function aniCam() {
    const a = H.y.ai[NET.ani];
    let room;
    if (NET.ani === 'sherbet') room = a.stage >= 4 || a.running ? 'westHall' : 'cove';
    else room = a.room;
    return H.vs[room] ? room : 'stage';
  }

  function applySnap(s) {
    const y = H.y;
    if (!s) return;
    ['time', 'hour', 'power', 'doorL', 'doorR', 'lightL', 'lightR', 'blackout', 'bT', 'zFlash', 'poster', 'goldenArmed', 'goldenIn'].forEach((k) => { y[k] = s[k]; });
    if (s.shake > y.shake) y.shake = s.shake;
    const a = y.ai;
    ['zayed', 'bubbles', 'taffy'].forEach((k) => { a[k].room = s.ai[k][0]; a[k].office = s.ai[k][1]; });
    a.sherbet.stage = s.ai.sherbet[0]; a.sherbet.running = s.ai.sherbet[1]; a.sherbet.runT = s.ai.sherbet[2];
    a.sherbet.wait = s.wait;
    a.zayed.armed = s.zArmed;
    NET.hcd = s.hcd;
    if (isAni()) {
      const cam = aniCam();
      if (cam !== y.cam) y.statBurst = 0.8;
      y.cam = cam;
      y.monitor = true;
      renderHud();
    } else {
      if (s.monitor !== y.monitor) y.statBurst = 1;
      else if (s.monitor && s.cam !== y.cam) y.statBurst = 0.8;
      y.monitor = s.monitor;
      y.cam = s.cam;
    }
  }

  function applyEvent(m) {
    const y = H.y;
    if (m.k === 'dead') {
      NET.applying = true;
      H.Ni(m.v);
      NET.applying = false;
      if (isAni()) setTimeout(() => {
        $('#overH').textContent = 'You got him!';
        $('#overCause').textContent = 'The guard fell to ' + H.nn[m.v] + '.';
        $('#overQuote').textContent = '';
        $('#overTip').textContent = 'Ask the host to start another shift.';
      }, 1600);
    } else if (m.k === 'win') {
      H.fc();
      if (isAni()) {
        $('#winTitle').textContent = 'The guard survived';
        $('#winNote').textContent = 'Six AM. You ran out of time.';
      }
    } else if (m.k === 'blackout') {
      H.vu();
    }
    void y;
  }

  /* ---------------- animatronic HUD ---------------- */
  let hudKey = '';
  function renderHud() {
    const y = H.y, who = NET.ani;
    if (!who) return;
    const a = y.ai[who];
    const cd = Math.ceil(NET.hcd);
    const buttons = [];
    let info = '';
    if (who === 'bubbles' || who === 'taffy') {
      const doorRoom = who === 'bubbles' ? 'westCor' : 'eastCor';
      if (a.office) info = 'You are in the office. Wait for the guard to lower the tablet.';
      else if (a.room === doorRoom) { buttons.push(['', 'Go for the door']); info = 'You are at the door. If it is open, you are in.'; }
      else (H.zg[who][a.room] || []).forEach((r) => buttons.push([r, 'Move to ' + (H.vs[r] ? H.vs[r].name : r)]));
    } else if (who === 'zayed') {
      if (a.office) info = 'You are in the office. Wait for the guard to lower the tablet.';
      else { buttons.push(['', a.armed ? 'Waiting for a chance…' : 'Advance']); info = 'You only move while the guard is not watching.'; }
    } else {
      const s = a;
      if (s.running) info = 'Run!';
      else if (s.stage >= 4) { buttons.push(['', 'RUN!']); info = 'In the hallway. Run now, or wait for the guard to look.'; }
      else { buttons.push(['', 'Creep out']); info = 'You only creep while the guard has the tablet down. Stage ' + s.stage + ' of 4.'; }
    }
    const key = [who, a.room, a.stage, a.office, a.armed, a.running, cd, info].join('|');
    if (key === hudKey) return;
    hudKey = key;
    hud.innerHTML = '<div class="ni-name"></div><div class="ni-info"></div><div class="ni-cd"></div><div class="ni-btns"></div>';
    hud.querySelector('.ni-name').textContent = 'You are ' + H.nn[who];
    hud.querySelector('.ni-info').textContent = info;
    hud.querySelector('.ni-cd').textContent = cd > 0 ? 'Ready in ' + cd + 's' : 'Ready';
    const box = hud.querySelector('.ni-btns');
    buttons.forEach(([to, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.disabled = cd > 0;
      b.addEventListener('click', () => { send({ t: 'in', a: 'move', to }); });
      box.appendChild(b);
    });
  }

  /* ---------------- Discord Rich Presence ---------------- */
  // Called from the game's once-a-second presence update; returns the status to show, or null for the offline one.
  NET.presence = function (t) {
    const y = H.y;
    const connected = !!(conn && conn.open);
    if (!NET.role) return y && y.screen === 'online' ? { details: 'Online lobby', state: 'Setting up a game' } : null;
    const party = [connected ? 2 : 1, 2];
    const name = NET.ani && H.nn ? H.nn[NET.ani] : '';
    if (!NET.playing) {
      return { details: 'Online lobby', state: connected ? 'Friend connected, picking settings' : (NET.role === 'host' ? 'Waiting for a friend' : 'Joining a game'), party };
    }
    const mode = NET.mode === 'coop' ? 'Co-op guards' : (NET.role === 'guest' ? 'Playing as ' + name : 'Guard vs ' + name);
    const out = Object.assign({}, t, { party });
    out.details = 'Online: ' + t.details;
    if (y.screen === 'game' && !y.dead && !y.paused && !y.blackout) out.state = mode + ', ' + (y.hour === 0 ? 12 : Math.min(6, y.hour)) + ' AM';
    else if (y.screen === 'game') out.state = mode + '. ' + t.state;
    return out;
  };

  /* ---------------- chat & leaving ---------------- */
  function sendChat(text) {
    text = text.trim().slice(0, 120);
    if (!text) return;
    say('me', text);
    send({ t: 'chat', m: text });
  }
  document.addEventListener('keydown', (e) => {
    if (!NET.role) return;
    if (e.target === chatIn) {
      e.stopPropagation();
      if (e.key === 'Enter') { sendChat(chatIn.value); chatIn.value = ''; chatIn.hidden = true; chatIn.blur(); }
      else if (e.key === 'Escape') { chatIn.value = ''; chatIn.hidden = true; chatIn.blur(); }
      return;
    }
    if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'Enter' && chat && !chat.hidden) {
      e.preventDefault();
      chatIn.hidden = false;
      chatIn.focus();
    } else if (/^F[1-4]$/.test(e.key) && NET.playing) {
      e.preventDefault();
      sendChat(QUICK_CHAT[+e.key.slice(1) - 1]);
    }
  }, true);
  document.addEventListener('keyup', (e) => { if (e.target === chatIn) e.stopPropagation(); }, true);

  NET.menu = function () {
    if (window.confirm('Leave the online game?')) NET.leave(false);
  };
  NET.leave = function (fromTitle) {
    teardown();
    if (!fromTitle && H.va) H.va();
  };

  /* ---------------- lobby wiring ---------------- */
  function openLobby() {
    H.xn('online');
    renderLobby();
    const first = $('#olRoom').hidden ? $('#olHost') : $('#olStart');
    if (first) first.focus();
  }

  $('#olHost').addEventListener('click', hostGame);
  $('#olJoin').addEventListener('click', () => joinGame($('#olCode').value));
  $('#olCode').addEventListener('keydown', (e) => { if (e.key === 'Enter') joinGame($('#olCode').value); });
  $('#olCode').addEventListener('input', (e) => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, ''); });
  $('#olStart').addEventListener('click', startAsHost);
  lobby.addEventListener('input', (e) => {
    const t = e.target;
    if (NET.role === 'host') {
      if (t.name === 'olMode') cfg.mode = t.value;
      else if (t.id === 'olNight') cfg.night = +t.value;
      else if (t.dataset && t.dataset.lv != null) cfg.levels[+t.dataset.lv] = +t.value;
      else return;
      pushLobby();
      renderLobby();
    } else if (NET.role === 'guest' && t.name === 'olAni') {
      cfg.ani = t.value;
      send({ t: 'pick', ani: t.value });
      renderLobby();
    }
  });

  window.addEventListener('beforeunload', () => { try { if (peer) peer.destroy(); } catch (e) { /* ignore */ } });
})();
