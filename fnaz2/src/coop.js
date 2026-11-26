/* Online co-op. The host is the Guard (office, flashlight, mask) and runs the whole night. The guest is the Operator: only they can use
 * the cameras and wind the music box, and they see what the cameras see. Snapshots go to the guest 10 times a second. */
import { createNet, cleanCode, PROTO } from './net.js';

const PLACES = new Set(['stage', 'main', 'game', 'prize', 'partyL', 'partyR', 'parts', 'kids', 'ceiling', 'hall', 'ventL', 'ventR', 'office']);
const PINGS = { mask: 'Mask on!', hall: 'Light the hallway!', left: 'Left vent!', right: 'Right vent!', wind: 'Wind the music box!', ok: 'Got it', thx: 'Nice!' };

export function initCoop(ctx) {
  const { G, $, esc, toast, Snd } = ctx;
  const net = createNet(); G.net = net;
  let acc = 0, pendingFx = [], inpT = 0, lastInp = '', lobbyNight = 1, started = false;
  const screen = (html) => { const s = $('#screen'); s.hidden = false; s.className = 'screen'; s.innerHTML = html; return s; };
  const back = () => { leave(); ctx.home(); };

  function leave() { net.send('leave', 1); setTimeout(() => net.close(), 60); G.coop = null; G.guest = false; started = false; document.body.classList.remove('coop-guest', 'coop-host'); const p = $('#partner'); if (p) p.hidden = true; const k = $('#pings'); if (k) k.hidden = true; }

  function menu() {
    screen(`<div class="panel"><h2>Online co-op</h2><p>Two players, one night. The <b>Guard</b> holds the office: flashlight and mask. The <b>Operator</b> has the cameras and the music box. Neither of you can do the other's job, so talk (use the quick messages).</p>
      <div class="btnrow"><button class="pri" id="chost">Host a game</button><button id="cjoin">Join a game</button><button id="cbk">Back</button></div>
      <p class="hint">Peer-to-peer: the game goes straight between you. A small matchmaking server only introduces you. If it can't connect, both of you need an internet connection that allows WebRTC.</p></div>`);
    $('#chost').onclick = hostLobby; $('#cjoin').onclick = () => joinLobby(); $('#cbk').onclick = ctx.home;
  }

  async function hostLobby() {
    screen(`<div class="panel"><h2>Hosting</h2><p id="cstat" class="pulse">Opening a room…</p></div>`);
    try { await net.host(); } catch (e) { return fail(net.error || 'Could not open a room.'); }
    const render = () => {
      const link = location.origin + location.pathname + '?join=' + net.code; const on = net.state === 'connected';
      screen(`<div class="panel"><h2>Hosting</h2><p>Room code</p><div class="code">${net.code}</div>
        <div class="btnrow"><button id="ccopy">Copy code</button><button id="clink">Copy invite link</button></div>
        <p id="cstat" class="${on ? '' : 'pulse'}">${on ? 'Partner connected · ' + Math.max(1, net.ping) + ' ms' : 'Waiting for your partner…'}</p>
        <div class="row"><label for="cn">Night</label><select id="cn">${[1, 2, 3, 4, 5, 6].map((n) => `<option value="${n}" ${n === lobbyNight ? 'selected' : ''} ${n > ctx.unlocked() ? 'disabled' : ''}>Night ${n}</option>`).join('')}</select></div>
        <div class="btnrow"><button class="pri" id="cgo" ${on ? '' : 'disabled'}>Start night</button><button id="cbk">Leave</button></div></div>`);
      $('#ccopy').onclick = () => copy(net.code); $('#clink').onclick = () => copy(link); $('#cn').onchange = (e) => { lobbyNight = +e.target.value; }; $('#cbk').onclick = back;
      $('#cgo').onclick = () => { const seed = (Date.now() & 0xffff) + 1; net.send('start', { night: lobbyNight, seed }); begin(lobbyNight, seed, 'host'); };
    };
    render(); const off = net.onState((st, err) => { if (G.mode === 'play' || !net.role) return; if (st === 'connected') { net.send('hello', {}); render(); } if (st === 'lost') { toast(err || 'Partner left'); net.reopen(); render(); } if (st === 'error') { off(); fail(err); } });
    const tick = setInterval(() => { if (!net.role || G.mode === 'play') { clearInterval(tick); return; } const el = $('#cstat'); if (el && net.state === 'connected') el.textContent = 'Partner connected · ' + Math.max(1, net.ping) + ' ms'; }, 1000);
  }

  function joinLobby(code = '') {
    screen(`<div class="panel"><h2>Join a game</h2><div class="row"><label for="cc">Room code</label><input id="cc" class="sm code-in" maxlength="5" autocomplete="off" autocapitalize="characters" value="${esc(code)}" placeholder="ABCDE"></div><p id="cstat"></p>
      <div class="btnrow"><button class="pri" id="cj">Join</button><button id="cbk">Back</button></div></div>`);
    const inp = $('#cc'); inp.oninput = () => { inp.value = cleanCode(inp.value); }; $('#cbk').onclick = menu; inp.focus();
    const go = async () => {
      const el = $('#cstat'); el.className = 'pulse'; el.textContent = 'Connecting…'; $('#cj').disabled = true;
      try { await net.join(inp.value); } catch (e) { el.className = ''; el.textContent = net.error || 'Could not connect.'; $('#cj').disabled = false; return; }
      screen(`<div class="panel"><h2>Connected</h2><p>You are the <b>Operator</b>: cameras and the music box.</p><p class="pulse" id="cstat">Waiting for the host to start the night…</p><div class="btnrow"><button id="cbk">Leave</button></div></div>`); $('#cbk').onclick = back;
    };
    $('#cj').onclick = go; inp.onkeydown = (e) => { if (e.key === 'Enter') go(); };
    if (code.length === 5) go();
  }
  const fail = (msg) => { net.close(); screen(`<div class="panel"><h2>Could not connect</h2><p>${esc(msg)}</p><div class="btnrow"><button class="pri" id="cr">Try again</button><button id="cbk">Back</button></div></div>`); $('#cr').onclick = menu; $('#cbk').onclick = ctx.home; };
  const copy = (t) => { try { navigator.clipboard.writeText(t); toast('Copied'); } catch (e) { toast(t); } };

  /* ---- starting and syncing a night ---- */
  function begin(night, seed, role) {
    started = true; G.coop = { role, remote: { cam: null, wind: false }, partnerCam: null }; G.guest = role === 'guest';
    document.body.classList.toggle('coop-guest', G.guest); document.body.classList.toggle('coop-host', !G.guest);
    ctx.startNight(night, { seed, coop: role, label: 'Co-op · Night ' + night });
    if (G.guest) { G.cam = G.camLast || 'stage'; $('#camUI').hidden = false; ctx.selectCam(G.cam); }
    setPanels();
  }
  function setPanels() {
    let p = $('#partner'); if (!p) { p = document.createElement('div'); p.id = 'partner'; $('#hud').appendChild(p); } p.hidden = false; p.textContent = G.guest ? 'Guard: holding the office' : 'Operator: connecting…';
    let k = $('#pings'); if (!k) { k = document.createElement('div'); k.id = 'pings'; document.body.appendChild(k); k.addEventListener('pointerdown', (e) => { const b = e.target.closest('button'); if (b) { e.stopPropagation(); sendPing(b.dataset.k); } }); }
    k.hidden = false; k.innerHTML = Object.entries(PINGS).map(([id, t]) => `<button data-k="${id}">${t}</button>`).join('');
  }
  const sendPing = (id) => { if (!PINGS[id]) return; net.send('chat', id); Snd.click(); ctx.say('You: ' + PINGS[id], 1500); };

  net.on('start', (d) => { if (net.role !== 'guest' || !d) return; begin(+d.night || 1, +d.seed || 1, 'guest'); });
  net.on('hello', (d) => { if (d && d.v !== undefined && d.v !== PROTO) toast('Your partner has a different game version. Update both.'); });
  net.on('chat', (id) => { if (PINGS[id]) { ctx.say((G.guest ? 'Guard' : 'Operator') + ': ' + PINGS[id], 2600); Snd.chime(); } });
  net.on('inp', (d) => { if (!G.coop || G.guest || !d) return; G.coop.remote.cam = d.cam && ctx.CAMS[d.cam] ? d.cam : null; G.coop.remote.wind = !!d.wind; G.coop.partnerCam = G.coop.remote.cam; });
  /* Everything from the other player is checked before it touches the game: only known fields, known characters and known places. */
  const NUM = ['t', 'hour', 'box', 'boxOut', 'battery', 'flashDead', 'mask'], FX = new Set(['move', 'enter', 'run', 'pushed', 'boxout', 'boxsafe', 'revived', 'kill', 'win', 'leave']), num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : null);
  function takeSnap(d) {
    const s = d.s || {}, S = G.S;
    for (const k of NUM) { const v = num(s[k]); if (v !== null) S[k] = v; }
    if (typeof s.flashOn === 'boolean') S.flashOn = s.flashOn; if (typeof s.won === 'boolean') S.won = s.won;
    S.aimedAt = typeof s.aimedAt === 'string' && PLACES.has(s.aimedAt) ? s.aimedAt : null; S.dead = typeof s.dead === 'string' && ctx.NAMES[s.dead] ? s.dead : null;
    if (s.pos && typeof s.pos === 'object') for (const w of Object.keys(ctx.NAMES)) if (typeof s.pos[w] === 'string' && PLACES.has(s.pos[w])) S.pos[w] = s.pos[w];
    if (d.from && typeof d.from === 'object') for (const w of Object.keys(ctx.NAMES)) if (typeof d.from[w] === 'string' && PLACES.has(d.from[w])) G.from[w] = d.from[w];
    const fx = Array.isArray(d.fx) ? d.fx.slice(0, 40).filter((f) => f && FX.has(f.type) && (f.who === undefined || ctx.NAMES[f.who]) && (f.from === undefined || PLACES.has(f.from)) && (f.to === undefined || PLACES.has(f.to))) : [];
    if (fx.length) ctx.apply(fx);
  }
  net.on('snap', (d) => { if (G.guest && G.S && d && typeof d === 'object') takeSnap(d); });
  net.onState((st, err) => {
    if (st === 'lost' && !started && net.role === 'guest' && G.mode !== 'play') { toast(err || 'The host left'); G.coop = null; G.guest = false; net.close(); ctx.leaveToMenu('The host closed the room.'); return; } // host left before the night started
    if (st !== 'lost' || !started) return; started = false;
    if (G.guest) { toast(err || 'The host left'); G.coop = null; G.guest = false; G.cam = null; ctx.leaveToMenu('The host disconnected. The night ended.'); net.close(); }
    else if (G.coop) { toast('Your partner left. The cameras are yours again.'); G.coop = null; document.body.classList.remove('coop-host'); const p = $('#partner'); if (p) p.hidden = true; const k = $('#pings'); if (k) k.hidden = true; net.reopen(); const rt = $('#rt'); if (rt && (G.mode === 'dead' || G.mode === 'won')) { rt.textContent = 'Play again (solo)'; rt.onclick = () => ctx.startNight(G.S.night, {}); } }
  });

  /* every frame */
  function hostTick(dt, fx) {
    if (!G.coop || G.guest) return; pendingFx.push(...fx); acc += dt;
    const p = $('#partner'); if (p) p.textContent = G.coop.partnerCam ? 'Operator watching: ' + ctx.CAMS[G.coop.partnerCam].name : 'Operator: cameras down';
    if (acc >= 0.1) { acc = 0; const S = G.S; net.send('snap', { s: { t: S.t, hour: S.hour, pos: S.pos, box: S.box, boxOut: S.boxOut, battery: S.battery, flashOn: S.flashOn, flashDead: S.flashDead, mask: S.mask, aimedAt: S.aimedAt, dead: S.dead, won: S.won }, from: G.from, fx: pendingFx }); pendingFx = []; }
  }
  function guestTick(dt) {
    if (!G.guest) return; inpT += dt; const cur = JSON.stringify({ cam: G.cam, wind: !!G.wind });
    if (cur !== lastInp || inpT > 0.4) { lastInp = cur; inpT = 0; net.send('inp', { cam: G.cam, wind: !!G.wind }); }
  }
  function again() { if (!G.coop || G.guest || !G.S) return; const night = G.S.night, seed = (Date.now() & 0xffff) + 1; net.send('start', { night, seed }); begin(night, seed, 'host'); }
  return { again, menu, hostLobby, joinLobby, hostTick, guestTick, sendPing, net, leave, active: () => !!G.coop };
}
