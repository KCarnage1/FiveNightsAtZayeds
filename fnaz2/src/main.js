import * as THREE from 'three';
import { buildMap, ROOMS, CAMS } from './map.js';
import { buildZayed, animate } from './models/cast.js';
import { buildIbrahim, buildGelly, buildBidoof } from './models/extras.js';
import { newNight, step, CAST, WHO, HOUR_SEC } from './ai.js';
import { S as Snd, start as startAudio } from './audio.js';

const $ = (s) => document.querySelector(s);
const ls = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };
const NAMES = { toyZayed: 'Toy Zayed', toyBubbles: 'Toy Bubbles', toyTaffy: 'Toy Taffy', toySherbet: 'Toy Sherbet', wZayed: 'Withered Zayed', wBubbles: 'Withered Bubbles', wTaffy: 'Withered Taffy', wSherbet: 'Withered Sherbet', gelly: 'Gelly', bidoof: 'Bidoof', ibrahim: 'Ibrahim' };

const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5)); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.3;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x030206); scene.fog = new THREE.FogExp2(0x040308, 0.03);
scene.add(new THREE.HemisphereLight(0x8a86c0, 0x1c1018, 0.16));
const map = buildMap(scene);
const player = new THREE.PerspectiveCamera(68, 1, 0.05, 80); player.position.set(0, 1.35, 0.6); scene.add(player);
const camV = new THREE.PerspectiveCamera(72, 1, 0.05, 80); scene.add(camV);
const camLight = new THREE.PointLight(0xe8f0ff, 0, 30, 1.2); scene.add(camLight);
const flash = new THREE.SpotLight(0xfff2cf, 0, 34, 0.32, 0.5, 1.2); player.add(flash); player.add(flash.target); flash.target.position.set(0, 0, -5);
const officeLight = new THREE.PointLight(0xffc88a, 7, 14, 1.6); officeLight.position.set(0, 2.7, 0.5); scene.add(officeLight);

/* ---- the cast ---- */
const bots = {};
for (const w of WHO) {
  const c = CAST[w];
  bots[w] = w === 'ibrahim' ? buildIbrahim() : w === 'gelly' ? buildGelly() : w === 'bidoof' ? buildBidoof() : buildZayed(c.body, c.toy ? 'toy' : 'withered');
  bots[w].root.visible = false; scene.add(bots[w].root);
}

/* ---- game state ---- */
const G = { mode: 'title', S: null, cam: null, pitch: 0, yaw: 0, yawT: 0, keys: {}, wind: false, mask: false, light: false, scareT: 0, scareWho: null, from: {}, breathT: 0, speed: 1, shake: 0 };
const UNLOCK = 'fnaz2_unlocked';
const unlocked = () => Math.max(1, +ls.get(UNLOCK) || 1);

function startNight(n, opts = {}) {
  startAudio(); G.S = newNight(n, opts.seed || (Date.now() & 0xffff), opts); G.mode = 'play'; G.cam = null; G.mask = false; G.light = false; G.yaw = G.yawT = 0; G.from = {}; G.scareWho = null; G.speed = opts.speed || 1;
  $('#screen').hidden = true; $('#hud').hidden = false; $('#hNight').textContent = 'Night ' + n; $('#scareBar').hidden = true;
  say('Hold F or click for the flashlight. Hold M to wear the mask. C opens the cameras.', 6000);
}
let hintT = 0; const say = (t, ms = 3000) => { $('#hint').textContent = t; hintT = ms; };

/* ---- screens ---- */
function title() {
  G.mode = 'title'; $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on');
  const u = unlocked(); let b = '';
  for (let n = 1; n <= 6; n++) b += `<button data-n="${n}" ${n > u ? 'disabled' : ''}>Night ${n}</button>`;
  $('#screen').hidden = false;
  $('#screen').innerHTML = `<div><h1>Five Nights<br>at Zayed's 2</h1><p>New bodies. Old souls. Surviving until 6 AM means keeping the one soul in four bodies out of your office, with no doors.</p><div class="nights">${b}</div><button class="big" id="go">Continue — Night ${u}</button><p class="keys">Move the mouse to look · hold <b>F</b>/click: flashlight · hold <b>M</b>: Zayed mask · <b>C</b>: cameras · hold <b>W</b> on the Prize Corner camera: wind the music box</p></div>`;
  $('#go').onclick = () => startNight(u);
  $('#screen').querySelectorAll('.nights button').forEach((el) => { el.onclick = () => startNight(+el.dataset.n); });
}
function over(win) {
  G.mode = win ? 'won' : 'dead'; $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on'); $('#scareBar').hidden = true;
  const n = G.S.night;
  if (win && n >= unlocked() && n < 6) ls.set(UNLOCK, String(n + 1));
  $('#screen').hidden = false;
  $('#screen').innerHTML = win
    ? `<div><h1>6 AM</h1><h2>You survived Night ${n}</h2><p>${n < 6 ? 'The sun is up. The bodies are still. For now.' : 'The sun is up. The police at the door are no longer the worst thing in the building.'}</p>${n < 6 ? `<button class="big" id="nx">Night ${n + 1}</button>` : ''}<button class="big alt" id="tt">Menu</button></div>`
    : `<div><h2>${NAMES[G.scareWho] || 'Something'} got you</h2><p>${hintFor(G.scareWho)}</p><button class="big" id="rt">Try again</button><button class="big alt" id="tt">Menu</button></div>`;
  if ($('#nx')) $('#nx').onclick = () => startNight(n + 1); if ($('#rt')) $('#rt').onclick = () => startNight(n); $('#tt').onclick = title;
}
const hintFor = (w) => ({ ibrahim: 'The music box ran out. Keep winding it from the Prize Corner camera.', wSherbet: 'Withered Sherbet runs the hallway. The mask will not stop him: shine the light down the hall.', bidoof: '' }[w] || 'Put the mask on when something is in the office.');

/* ---- input ---- */
addEventListener('pointermove', (e) => { G.yawT = (e.clientX / innerWidth - 0.5) * 2 * 1.45; });
canvas.addEventListener('pointerdown', (e) => { if (G.mode === 'play' && !G.cam && e.button !== 2) G.light = true; });
addEventListener('pointerup', () => { G.light = false; G.wind = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
const setMask = (v) => { if (G.mode !== 'play') return; if (v && G.cam) return; if (v !== G.mask) Snd.mask(v); G.mask = v; };
addEventListener('keydown', (e) => {
  if (e.repeat) return; const k = e.key.toLowerCase(); G.keys[k] = 1;
  if (k === 'f') G.light = true; if (k === 'm') setMask(true); if (k === 'w') G.wind = true;
  if (k === 'c' || k === 'tab') { e.preventDefault(); toggleCam(); }
  const d = '1234567890'.indexOf(k); if (G.cam && d >= 0 && d < camIds.length) selectCam(camIds[d]);
});
addEventListener('keyup', (e) => { const k = e.key.toLowerCase(); G.keys[k] = 0; if (k === 'f') G.light = false; if (k === 'm') setMask(false); if (k === 'w') G.wind = false; });
const hold = (el, on, off) => { el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); on(); }); for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) el.addEventListener(ev, off); };
hold($('#bMask'), () => setMask(true), () => setMask(false)); hold($('#bFlash'), () => { if (!G.cam) G.light = true; }, () => { G.light = false; });
$('#bCam').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); toggleCam(); });
hold($('#bWind'), () => { G.wind = true; }, () => { G.wind = false; });

const camIds = Object.keys(CAMS);
function toggleCam() {
  if (G.mode !== 'play') return;
  if (G.cam) { G.cam = null; $('#camUI').hidden = true; $('#bCam').classList.remove('on'); Snd.click(); return; }
  if (G.mask) setMask(false);
  G.cam = G.camLast || 'stage'; $('#camUI').hidden = false; $('#bCam').classList.add('on'); selectCam(G.cam); Snd.click();
}
function selectCam(id) { G.cam = G.camLast = id; $('#camName').textContent = 'CAM ' + (camIds.indexOf(id) + 1) + ' · ' + CAMS[id].name; $('#bWind').hidden = id !== 'prize'; [...$('#camList').children].forEach((b) => b.classList.toggle('on', b.dataset.id === id)); Snd.click(); }
$('#camList').innerHTML = camIds.map((id, i) => `<button data-id="${id}">${i + 1} ${CAMS[id].name}</button>`).join('');
$('#camList').addEventListener('pointerdown', (e) => { const b = e.target.closest('button'); if (b) { e.stopPropagation(); selectCam(b.dataset.id); } });

/* ---- placing the cast in the world ---- */
const SLOT = {}; WHO.forEach((w, i) => { SLOT[w] = i; });
const NODE_ROOM = (n) => (n === 'stage' || n === 'ceiling' ? 'main' : n);
function spot(w, node) {
  const i = SLOT[w], r = (a, b) => a + ((i % 3) - 1) * b;
  switch (node) {
    case 'stage': return [[-3.3, -1.1, 1.1, 3.3][i % 4], 0.4, -20.1, 1];
    case 'main': return [-6 + (i % 6) * 2.4, 0, -16.5 - ((i / 6) | 0) * 1.6, 1];
    case 'game': return [11.2 + (i % 3) * 1.2, 0, -18 - ((i / 3) | 0) * 1.1, 1];
    case 'prize': return [-13.6 + (i % 3) * 1.2, 0, -18 - ((i / 3) | 0) * 1.1, 1];
    case 'partyL': return [r(-12, 1.4), 0, -7 - ((i / 3) | 0) * 1.6, 1];
    case 'partyR': return [r(12, 1.4), 0, -7 - ((i / 3) | 0) * 1.6, 1];
    case 'parts': return [-2.6 + (i % 5) * 1.3, 0, -26.5, 1];
    case 'kids': return [-8.5 + (i % 3) * 1.3, 0, -26.5, 1];
    case 'ceiling': return [0, 1.2, -15.5, 1];
    case 'hall': return [((i % 3) - 1) * 0.55, 0, -7.5 - ((i / 3) | 0) * 1.1, 1];
    case 'ventL': return [-6.2 - (i % 2) * 1.1, 0, -0.4, 0.34];
    case 'ventR': return [6.2 + (i % 2) * 1.1, 0, -0.4, 0.34];
    case 'office': { const f = G.from[w]; return f === 'ventL' ? [-2.35, 0, -0.35, 0.8] : f === 'ventR' ? [2.35, 0, -0.35, 0.8] : [0, 0, -1.9, 1]; }
  }
  return [0, 0, -9, 1];
}
function placeAll() {
  const S = G.S; if (!S) return;
  const hallLit = S.aimedAt === 'hall', vL = S.aimedAt === 'ventL', vR = S.aimedAt === 'ventR';
  for (const w of WHO) {
    const b = bots[w], node = S.pos[w];
    if (w === 'ibrahim' && S.boxOut <= 0) { b.root.visible = false; continue; }
    const [x, y, z, s] = w === 'ibrahim' && node === 'prize' ? [-12, 1.5 + Math.min(1, S.boxOut / 4) * 0, -20, 1] : spot(w, node);
    b.root.position.set(x, y, z); b.root.scale.setScalar(s); b.root.rotation.set(0, 0, 0);
    const room = NODE_ROOM(node);
    if (node === 'hall' || node === 'office' || node === 'ventL' || node === 'ventR') b.root.lookAt(0, y, 0.6);
    else if (node === 'ceiling') { b.root.lookAt(0, y, 3); b.root.rotation.x = Math.PI * 0.7; }
    else { const c = CAMS[room === 'main' ? 'main' : room]; b.root.lookAt(c.pos[0], y, c.pos[2]); }
    let vis;
    if (G.cam) { const cr = CAMS[G.cam].room; vis = room === cr || (cr === 'main' && node === 'stage' && G.cam === 'stage') || (G.cam === 'main' && node === 'stage' && false); if (G.cam === 'stage') vis = node === 'stage'; else if (G.cam === 'main') vis = node === 'main' || node === 'ceiling'; }
    else vis = node === 'office' || (node === 'hall' && hallLit) || (node === 'ventL' && vL) || (node === 'ventR' && vR);
    b.root.visible = !!vis && !G.scareWho;
  }
}

/* ---- effects -> sound and game feel ---- */
const pan = (n) => (n === 'ventL' || n === 'partyL' || n === 'prize' || n === 'kids' ? -0.8 : n === 'ventR' || n === 'partyR' || n === 'game' ? 0.8 : 0);
function apply(fx) {
  for (const f of fx) {
    if (f.type === 'move') { (f.to.startsWith('vent') || f.to === 'ceiling' ? Snd.vent : Snd.step)(pan(f.to)); if (f.to === 'hall' && !G.cam) say('Something is in the hallway.', 2200); }
    else if (f.type === 'enter') { G.from[f.who] = f.from; (f.from.startsWith('vent') ? Snd.clang : Snd.step)(pan(f.from)); if (f.who === 'bidoof') Snd.laugh(); say(f.who === 'bidoof' ? 'Bidoof is in the office. The flashlight is dead.' : (NAMES[f.who] || f.who) + ' is in the office!', 3000); G.shake = 0.5; }
    else if (f.type === 'run') { Snd.clang(0); say('Withered Sherbet is running the hall! Shine the light down it!', 3000); }
    else if (f.type === 'pushed') { Snd.step(pan(f.from)); }
    else if (f.type === 'boxout') { Snd.chime(); say('The music box ran out. Wind it from the Prize Corner camera!', 4000); }
    else if (f.type === 'kill') { G.scareWho = f.who; G.scareT = 0; Snd.scare(); $('#scareBar').hidden = false; $('#maskOv').classList.remove('on'); $('#camUI').hidden = true; }
    else if (f.type === 'win') { Snd.chime(); over(true); }
  }
}

/* ---- main loop ---- */
const mini = $('#mini').getContext('2d');
function drawMini() {
  const w = 220, h = 200, sx = (x) => (x + 17) / 34 * w, sz = (z) => (z + 31) / 35 * h; mini.clearRect(0, 0, w, h);
  mini.strokeStyle = '#6a8'; mini.lineWidth = 1;
  for (const [id, r] of Object.entries(ROOMS)) { const [x0, z0, x1, z1] = r.b; mini.fillStyle = G.cam && CAMS[G.cam].room === id ? '#6a84' : '#0006'; mini.fillRect(sx(x0), sz(z0), sx(x1) - sx(x0), sz(z1) - sz(z0)); mini.strokeRect(sx(x0), sz(z0), sx(x1) - sx(x0), sz(z1) - sz(z0)); }
  mini.fillStyle = '#fff'; mini.fillRect(sx(-0.2), sz(0.4), 5, 5);
}
function updateHud() {
  const S = G.S; $('#hClock').textContent = (S.hour === 0 ? 12 : S.hour) + ' AM'; $('#mFlash').style.width = S.battery + '%'; $('#boxM').style.display = ''; $('#mBox').style.width = S.box + '%';
  $('#mBox').style.background = S.box < 25 ? '#e8453c' : ''; $('#bMask').classList.toggle('on', G.mask); $('#bFlash').classList.toggle('on', G.light);
  $('#staticOv').classList.toggle('on', !!G.cam);
}
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const w = innerWidth, h = innerHeight; if (canvas.width !== Math.floor(w * renderer.getPixelRatio())) { renderer.setSize(w, h, false); player.aspect = camV.aspect = w / h; player.updateProjectionMatrix(); camV.updateProjectionMatrix(); }
  if (hintT > 0) { hintT -= dt * 1000; if (hintT <= 0) $('#hint').textContent = ''; }
  if (G.mode === 'title') { /* idle slow pan of the office behind the menu */ G.yaw = Math.sin(now / 4000) * 0.5; }
  if (G.mode === 'play' && G.S && !G.scareWho) {
    const S = G.S; G.yaw += (G.yawT - G.yaw) * Math.min(1, dt * 6);
    const aim = G.yaw < -0.9 ? 'ventL' : G.yaw > 0.9 ? 'ventR' : 'hall';
    const fx = step(S, dt * G.speed, { mask: G.mask, flash: G.light && !G.cam, aim, cam: G.cam, wind: G.wind });
    apply(fx); Snd.box(S.box, dt); Snd.hum(0.04 + (G.cam ? 0.02 : 0));
    if (G.mask) { G.breathT -= dt; if (G.breathT <= 0) { Snd.breath(); G.breathT = 1.4; } }
    $('#maskOv').classList.toggle('on', S.mask > 0.5); $('#bWind').classList.toggle('on', G.wind && !!G.cam);
    updateHud(); if (G.cam) drawMini();
  }
  if (G.scareWho) { // the jumpscare: the body fills the view, shaking
    G.scareT += dt; const b = bots[G.scareWho]; b.root.visible = true; b.root.scale.setScalar(1.1);
    const p = Math.min(1, G.scareT / 0.18), d = 2.2 - p * 1.15; b.root.position.set(player.position.x + Math.sin(-G.yaw) * d, 0.0, player.position.z - Math.cos(G.yaw) * d); b.root.lookAt(player.position.x, 0, player.position.z);
    b.root.position.x += Math.sin(G.scareT * 90) * 0.05; b.root.position.y = -0.55;
    animate(b, dt, 'scare'); officeLight.intensity = 3 + Math.random() * 12; if (G.scareT > 1.6) { officeLight.intensity = 7; b.root.visible = false; over(false); }
  } else if (G.S) animate; // (animation below)
  if (G.S && !G.scareWho) for (const w of WHO) if (bots[w].root.visible || true) { if (G.S.pos[w] !== 'stage' || true) animate(bots[w], dt, 'idle'); }
  if (G.mode === 'play' && !G.scareWho) placeAll();
  // camera + lights
  const shake = (G.shake = Math.max(0, G.shake - dt)) * 0.03;
  for (const id in map.lights) map.lights[id].intensity = 0;
  if (G.cam && G.mode === 'play') {
    const c = CAMS[G.cam]; camV.position.set(...c.pos); camV.lookAt(...c.look); camV.rotation.z += 0; camV.position.x += Math.sin(now / 900) * 0.04;
    map.lights[c.room].intensity = c.room.startsWith('vent') ? 4 : 16; camLight.position.set(...c.pos); camLight.intensity = c.room.startsWith('vent') ? 1.5 : 5;
    officeLight.intensity = 0; flash.intensity = 0; renderer.render(scene, camV);
  } else {
    camLight.intensity = 0; if (!G.scareWho) officeLight.intensity = G.mode === 'play' ? 6 + (Math.random() < 0.02 ? -3 : 0) : 7;
    flash.intensity = G.S && G.S.flashOn ? 260 : 0;
    player.rotation.set(Math.abs(G.yaw) > 0.9 ? -0.32 : -0.05, -G.yaw, 0, 'YXZ');
    player.position.set(Math.sin(now / 1500) * 0.01 + (Math.random() - .5) * shake, 1.35, 0.6); renderer.render(scene, player);
  }
}
requestAnimationFrame(frame);
title();
window.FNAZ2 = { G, startNight, bots, step, placeAll, scene, camV, player };
