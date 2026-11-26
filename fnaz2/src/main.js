import * as THREE from 'three';
import { buildMap, dressMap, ROOMS, CAMS } from './map.js';
import { buildZayed, animate } from './models/cast.js';
import { buildIbrahim, buildGelly, buildBidoof } from './models/extras.js';
import { newNight, step, CAST, WHO, HOUR_SEC } from './ai.js';
import { S as Snd, start as startAudio } from './audio.js';
import { cfg, set as setCfg, onChange, stats, saveStats, unlocked, resetSettings, resetProgress, OPEN_NIGHTS } from './settings.js';
import * as Calls from './calls.js';
import * as Online from './online.js';
import { faceReady, faceCanvas } from './models/kit.js';
import { startLiveFaces, refreshFaces } from './faces.js';
import * as Updater from './update.js';
import * as Shop from './shop.js';
import { openShop, dailyReward } from './shopui.js';
import { initCoop } from './coop.js';
import { initAdmin } from './adminui.js';
import { ic } from './icons.js';
import * as Lore from './lore.js';
import { buildLoreItems, showLoreItems, hideLoreItems, pickLoreItem, loreScreen } from './lore3d.js';
import { wordTyper } from './admin.js';

const $ = (s) => document.querySelector(s);
const NAMES = { toyZayed: 'Toy Zayed', toyBubbles: 'Toy Bubbles', toyTaffy: 'Toy Taffy', toySherbet: 'Toy Sherbet', wZayed: 'Withered Zayed', wBubbles: 'Withered Bubbles', wTaffy: 'Withered Taffy', wSherbet: 'Withered Sherbet', gelly: 'Gelly', bidoof: 'Bidoof', ibrahim: 'Ibrahim' };

const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5)); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.3;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x030206); scene.fog = new THREE.FogExp2(0x040308, 0.03);
scene.add(new THREE.HemisphereLight(0x8a86c0, 0x1c1018, 0.16));
const map = buildMap(scene); buildLoreItems(scene); const propsReady = dressMap(scene).catch(() => 0);
const player = new THREE.PerspectiveCamera(68, 1, 0.05, 80); player.position.set(0, 1.35, 0.6); scene.add(player);
const camV = new THREE.PerspectiveCamera(72, 1, 0.05, 80); scene.add(camV);
const camLight = new THREE.PointLight(0xe8f0ff, 0, 30, 1.2); scene.add(camLight);
const flash = new THREE.SpotLight(0xfff2cf, 0, 34, 0.32, 0.5, 1.2); player.add(flash); player.add(flash.target); flash.target.position.set(0, 0, -5);
const officeLight = new THREE.PointLight(0xffc88a, 7, 14, 1.6); officeLight.position.set(0, 2.7, 0.5); scene.add(officeLight);

/* ---- the cast ---- */
const bots = {};
function makeBot(w) {
  const c = CAST[w];
  bots[w] = w === 'ibrahim' ? buildIbrahim() : w === 'gelly' ? buildGelly() : w === 'bidoof' ? buildBidoof() : buildZayed(c.body, c.toy ? 'toy' : 'withered');
  bots[w].root.visible = false; scene.add(bots[w].root);
}

/* ---- game state ---- */
const G = { mode: 'title', S: null, cam: null, pitch: 0, yaw: 0, yawT: 0, keys: {}, wind: false, mask: false, light: false, scareT: 0, scareWho: null, from: {}, breathT: 0, speed: 1, shake: 0 };
const ORDER = WHO.slice();
const LABEL = { 7: 'Custom Night' };
function startNight(n, opts = {}) {
  startAudio(); closeModal(); const mods = opts.daily || opts.coop === 'guest' ? undefined : Shop.mods(); G.S = newNight(n, opts.seed || (Date.now() & 0xffff), Object.assign({}, opts, { mods })); G.S.cheated = false; G.hourPaid = 0; G.opts = opts; const S0 = G.S; if (G.adm) { G.adm.used = false; } G.mode = 'play'; G.paused = false; G.cam = null; G.mask = false; G.light = false; G.yaw = G.yawT = 0; G.from = {}; G.scareWho = null; G.speed = opts.speed || 1; G.label = opts.label || LABEL[n] || 'Night ' + n; G.opts = opts; applyCosmetics();
  stats.plays++; saveStats(); document.body.classList.add('playing');
  $('#screen').hidden = true; $('#hud').hidden = false; $('#hNight').textContent = G.label; $('#scareBar').hidden = true; $('#bPause').hidden = false;
  intro(G.label); if (n <= 6 && !opts.daily) showLoreItems(n); else hideLoreItems();
  if (n <= 6 && (!opts.label || opts.coop) && !opts.daily) setTimeout(() => { if (G.mode === 'play' && !G.paused && G.S && G.S.night === n && G.S === S0) { Snd.ring(); setTimeout(() => { if (G.mode === 'play' && !G.paused && G.S === S0) Calls.start(n, $('#call')); }, 1800); } }, 2600);
  else say('Hold F or click for the flashlight. Hold M for the mask. C opens the cameras.', 6000);
}
const NIGHT_LINE = { 1: "Qerh Cooperations. The new location. Please do not read the old paperwork.", 2: 'The vents were the order chute. Some orders are still coming up.', 3: 'The line is still open. Keep the music playing.', 4: 'Two more have arrived. One only laughs.', 5: 'Claim Q-0007 has been reopened.', 6: 'Six o\'clock. The police are at the door.' };
function intro(label) { const n = G.S && G.S.night, line = !G.opts.label || G.opts.coop ? NIGHT_LINE[n] || '' : ''; const d = document.createElement('div'); d.className = 'intro'; d.innerHTML = `<b>${label}</b><span>12:00 AM</span>${line ? `<em>${esc(line)}</em>` : ''}`; document.body.appendChild(d); setTimeout(() => d.remove(), line ? 4200 : 3200); }
let hintT = 0; const say = (t, ms = 3000) => { if (!cfg.hints && ms < 5000 && !/is in the office|running|ran out/.test(t)) return; $('#hint').textContent = t; hintT = ms; };
const toast = (t) => { const e = $('#toast'); e.textContent = t; e.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => { e.hidden = true; }, 2600); };
const fmtTime = (sec) => { const m = sec / (HOUR_SEC / 60); const h = Math.floor(m / 60); return (h === 0 ? 12 : h) + ':' + String(Math.floor(m % 60)).padStart(2, '0') + ' AM'; };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---- modal (settings and friends) ---- */
function openModal(html) { const m = $('#modal'); m.innerHTML = '<div class="panel">' + html + '</div>'; m.hidden = false; }
function closeModal() { $('#modal').hidden = true; $('#modal').innerHTML = ''; }
const modalOpen = () => !$('#modal').hidden;
const TABS = {
  Audio: [{ k: 'master', t: 'range', l: 'Master volume', min: 0, max: 100 }, { k: 'sfx', t: 'range', l: 'Effects', min: 0, max: 100 }, { k: 'music', t: 'range', l: 'Music box', min: 0, max: 100 }],
  Video: [{ k: 'quality', t: 'select', l: 'Quality', o: [['low', 'Low (best for phones)'], ['medium', 'Medium'], ['high', 'High']], p: 'Lower quality renders fewer pixels. Try Low if the game stutters.' }, { k: 'fov', t: 'range', l: 'Field of view', min: 55, max: 95 }, { k: 'brightness', t: 'range', l: 'Brightness', min: 60, max: 150 }, { k: 'uiScale', t: 'range', l: 'HUD size', min: 80, max: 130 }, { k: 'shake', t: 'toggle', l: 'Screen shake' }, { k: 'flashing', t: 'toggle', l: 'Flashing effects', p: 'Turn off to remove bright flashes and flicker.' }, { k: 'fps', t: 'toggle', l: 'Show FPS' }, { t: 'button', l: 'Fullscreen', b: 'Toggle', act: () => toggleFull() }],
  Gameplay: [{ k: 'sens', t: 'range', l: 'Look sensitivity', min: 40, max: 200 }, { k: 'invert', t: 'toggle', l: 'Invert look' }, { k: 'toggleMask', t: 'toggle', l: 'Mask: tap to toggle', p: 'Off = hold to wear it.' }, { k: 'toggleLight', t: 'toggle', l: 'Flashlight: tap to toggle', p: 'Off = hold to shine it.' }, { k: 'haptics', t: 'toggle', l: 'Vibration (phones)' }, { k: 'hints', t: 'toggle', l: 'On-screen hints' }, { k: 'calls', t: 'toggle', l: 'Phone calls' }, { k: 'voice', t: 'toggle', l: 'Read calls aloud', p: 'Uses your device\'s text-to-speech voice.' }, { k: 'subtitles', t: 'toggle', l: 'Subtitles' }, { k: 'autopause', t: 'toggle', l: 'Pause when the tab loses focus' }],
  Online: [{ k: 'liveFaces', t: 'toggle', l: 'Live profile pictures', p: 'Characters can use the current Discord profile picture of the person they are based on. Your device loads the picture from Discord. Off keeps the pictures that came with the game.' }, { k: 'share', t: 'toggle', l: 'Show that I am online', p: 'Tells the developer the game is open: a random ID, the version, your device type and the screen you are on. No name, no account, no location.' }, { k: 'broker', t: 'text', l: 'Custom matchmaking server', p: 'Leave empty for the default. Format host:port, for example localhost:9000.' }, { t: 'status' }],
  Data: [{ t: 'update' }, { t: 'button', l: 'Reset settings', b: 'Reset', act: () => { resetSettings(); settings('Data'); toast('Settings reset'); } }, { t: 'button', l: 'Erase progress and stats', b: 'Erase…', danger: true, act: () => { if (confirm('Erase all nights beaten and stats?')) { resetProgress(); settings('Data'); toast('Progress erased'); if (G.mode === 'title') home(); } } }]
};
function settings(tab = 'Audio') {
  const rows = TABS[tab].map((r, i) => {
    if (r.t === 'range') return `<div class="row"><label for="s${i}">${r.l}</label><span><input id="s${i}" data-k="${r.k}" type="range" min="${r.min}" max="${r.max}" value="${cfg[r.k]}"> <output>${cfg[r.k]}</output></span></div>`;
    if (r.t === 'toggle') return `<div class="row"><label for="s${i}">${r.l}</label><input id="s${i}" class="tog" data-k="${r.k}" type="checkbox" ${cfg[r.k] ? 'checked' : ''}>${r.p ? `<p>${r.p}</p>` : ''}</div>`;
    if (r.t === 'select') return `<div class="row"><label for="s${i}">${r.l}</label><select id="s${i}" data-k="${r.k}">${r.o.map(([v, n]) => `<option value="${v}" ${cfg[r.k] === v ? 'selected' : ''}>${n}</option>`).join('')}</select>${r.p ? `<p>${r.p}</p>` : ''}</div>`;
    if (r.t === 'update') return `<div class="row"><label>Updates</label><span><button class="sm" id="updBtn">Check for updates</button></span><p id="updMsg">${Updater.dev ? 'This is a development copy. Updates apply to the published game.' : `You have version ${Online.VERSION}.`}</p></div>`;
    if (r.t === 'text') return `<div class="row"><label for="s${i}">${r.l}</label><input id="s${i}" class="sm" data-k="${r.k}" type="text" value="${esc(cfg[r.k] || '')}" style="width:170px" autocomplete="off">${r.p ? `<p>${r.p}</p>` : ''}</div>`;
    if (r.t === 'button') return `<div class="row"><label>${r.l}</label><button class="sm ${r.danger ? 'danger' : ''}" data-act="${i}">${r.b}</button></div>`;
    return `<div class="row"><label>Server</label><span id="olStatus">${Online.status.online === null ? 'not checked' : Online.status.online ? 'connected' : 'offline'}</span><p><button class="sm" id="olCheck">Check connection</button></p></div>`;
  }).join('');
  openModal(`<h2>Settings</h2><div class="tabs">${Object.keys(TABS).map((t) => `<button class="${t === tab ? 'on' : ''}" data-tab="${t}">${t}</button>`).join('')}</div>${rows}<div class="btnrow"><button class="pri" id="mClose">Done</button></div>`);
  const m = $('#modal');
  m.querySelectorAll('[data-tab]').forEach((b) => { b.onclick = () => settings(b.dataset.tab); });
  m.querySelectorAll('input[type=range]').forEach((el) => { el.oninput = () => { setCfg(el.dataset.k, +el.value); el.nextElementSibling.textContent = el.value; Snd.click(); }; });
  m.querySelectorAll('input.tog').forEach((el) => { el.onchange = () => setCfg(el.dataset.k, el.checked); });
  m.querySelectorAll('select').forEach((el) => { el.onchange = () => setCfg(el.dataset.k, el.value); });
  m.querySelectorAll('input[type=text]').forEach((el) => { el.onchange = () => setCfg(el.dataset.k, el.value.trim()); });
  m.querySelectorAll('[data-act]').forEach((el) => { el.onclick = () => TABS[tab][+el.dataset.act].act(); });
  const ub = $('#updBtn'); if (ub) ub.onclick = async () => { const m = $('#updMsg'); m.textContent = 'Checking…'; const a = await Updater.check(); if (a) { m.innerHTML = `Version ${esc(a.version)} is available. <button class="sm" id="updNow">Update now</button>`; $('#updNow').onclick = Updater.applyUpdate; } else m.textContent = Updater.status.error || 'You have the latest version.'; };
  const chk = $('#olCheck'); if (chk) chk.onclick = async () => { $('#olStatus').textContent = 'checking…'; try { await Online.rpc('get_announcement', {}); } catch (e) { /* status set */ } if ($('#olStatus')) $('#olStatus').textContent = Online.status.online ? 'connected' : 'offline'; };
  $('#mClose').onclick = () => { closeModal(); if (G.paused) pauseScreen(); };
}
function toggleFull() { try { if (document.fullscreenElement) document.exitFullscreen(); else (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen).call(document.documentElement); } catch (e) { toast('Fullscreen is not available here'); } }
onChange((k) => {
  if (k === 'quality' || k === '*') applyQuality(); if (k === 'fov' || k === '*') applyFov();
  if (k === 'brightness' || k === '*') renderer.toneMappingExposure = 1.3 * cfg.brightness / 100; if (k === 'uiScale' || k === '*') document.documentElement.style.setProperty('--ui', cfg.uiScale / 100);
  if (k === 'fps' || k === '*') { $('#fps').hidden = !cfg.fps; } if (k === 'flashing' || k === '*') document.body.classList.toggle('noflash', !cfg.flashing);
  if (k === 'share' && cfg.share) Online.beat(G.mode, G.S ? G.S.night : 0);
});
const RATIO = { low: 0.7, medium: 1, high: 1.5 };
/* In portrait the sideways view would be cramped, so the vertical field of view widens to keep the same horizontal view (up to a limit). */
function applyFov() { const asp = innerWidth / Math.max(1, innerHeight), v = asp >= 1 ? cfg.fov : Math.min(92, 2 * Math.atan(Math.tan(cfg.fov * Math.PI / 360) / asp) * 180 / Math.PI); if (Math.abs(player.fov - v) > 0.01) { player.fov = camV.fov = v; player.updateProjectionMatrix(); camV.updateProjectionMatrix(); } }
function applyQuality() { renderer.setPixelRatio(Math.min(devicePixelRatio || 1, RATIO[cfg.quality] || 1)); G.sized = 0; }

/* ---- the home page ---- */
let newsItem = null;
function home() {
  G.mode = 'title'; Calls.stop(); document.body.classList.remove('playing'); G.paused = false; G.menuOpen = false; $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on'); $('#call').hidden = true; $('#scareBar').hidden = true; $('#staticOv').classList.remove('on'); closeModal(); const pk = $('#pings'); if (pk) pk.hidden = true;
  const u = unlocked(), s = $('#screen'); s.hidden = false; s.className = 'screen titlebg';
  const dly = stats.claim !== Online.dayKey();
  s.innerHTML = `<div class="title"><div class="top"><h1 class="logo">Five Nights<br><em>at Zayed's 2</em></h1><p class="tag1">One soul, four bodies.</p></div>
    <div class="bottom"><div class="tmenu"><button class="main" id="mNew">${stats.beaten ? 'Continue' : 'Play'}<small>Night ${u}</small></button><button id="mCoop">Co-op<small>2 players online</small></button><button id="mNights">Nights</button><button id="mCustom">Custom<small>coming soon</small></button><button id="mDaily">Daily<small>coming soon</small></button><button id="mShop">Shop${dly ? '<small>reward ready!</small>' : ''}</button><button id="mExtras">Extras</button><button id="mSet">Settings</button></div>
    ${newsItem ? `<div class="news"><b>${esc(newsItem.title || 'News')}</b> ${esc(String(newsItem.message || '').replace(/\s+/g, ' ').slice(0, 200))}</div>` : ''}
    <div class="foot">v${Online.VERSION} · ${stats.wins} win${stats.wins === 1 ? '' : 's'} · ${stats.deaths} death${stats.deaths === 1 ? '' : 's'}<span id="kb"> · F3 debug</span></div></div></div><div class="corner"><span class="coins" id="coins">${ic('coin')}${stats.coins}</span></div>`;
  $('#mNew').onclick = () => maybeIntro(() => startNight(u)); $('#mNights').onclick = nightSelect; $('#mCustom').onclick = () => toast('The Custom Night is coming soon'); $('#mDaily').onclick = () => toast('The Daily challenge is coming soon'); $('#mExtras').onclick = extras; $('#mSet').onclick = () => settings(); $('#mCoop').onclick = () => coop.menu(); $('#mShop').onclick = () => openShop(ctx); $('#coins').onclick = () => openShop(ctx);
  s.querySelectorAll('.tmenu button').forEach((b) => b.addEventListener('pointerenter', () => Snd.click()));
  Online.beat('title', 0);
}
const refreshHome = () => { if (G.mode === 'title' && $('#screen').querySelector('.title') && !$('#screen').hidden) { const c = $('#coins'); if (c) c.innerHTML = ic('coin') + stats.coins; } };
function leaveToMenu(msg) { G.mode = 'title'; Calls.stop(); $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on'); document.body.classList.remove('playing'); closeModal(); const s = $('#screen'); s.hidden = false; s.className = 'screen'; s.innerHTML = `<div><h2>${esc(msg)}</h2><button class="big" id="tt">Menu</button></div>`; $('#tt').onclick = home; }
function applyCosmetics() { flash.color.set(Shop.colorOf('light')); const c = Shop.colorOf('mask'); document.querySelectorAll('#maskOv path:nth-child(2)').forEach((p) => p.setAttribute('stroke', c)); }
const dbg = document.createElement('div'); dbg.id = 'dbg'; dbg.hidden = true; document.body.appendChild(dbg);
const errLog = []; addEventListener('error', (e) => errLog.push(e.message)); addEventListener('unhandledrejection', (e) => errLog.push('promise: ' + (e.reason && e.reason.message || e.reason)));
function toggleDebug() { dbg.hidden = !dbg.hidden; }
/* The first time someone plays: four short slides that set the story up and explain nothing. */
const STORY = ["Abdulla's Cafeteria had one phone line.", 'On the night of the last order, the line was answered by someone who promised it would arrive.', 'It never did. By morning the building was empty, the kitchen was warm, and the phone was off the hook.', 'Years later a company called Qerh Cooperations reopened the building. New bodies. No doors.<br>You are Rashid, the night guard.<br>Please do not read the old paperwork.'];
function maybeIntro(go) {
  if (stats.intro) { go(); return; }
  let i = 0; const s = $('#screen'); s.hidden = false; s.className = 'screen story';
  const show = () => { s.innerHTML = `<div class="slide" key="${i}"><p>${STORY[i]}</p><div class="btnrow"><button class="big" id="sn">${i < STORY.length - 1 ? 'Next' : 'Begin'}</button><button class="big alt" id="ss">Skip</button></div></div>`; $('#sn').onclick = () => { i++; if (i >= STORY.length) done(); else show(); }; $('#ss').onclick = done; };
  const done = () => { stats.intro = true; saveStats(); go(); };
  show();
}
function nightSelect() {
  const u = unlocked(); let b = ''; for (let n = 1; n <= 6; n++) b += `<button data-n="${n}" ${n > u ? 'disabled' : ''}>Night ${n}</button>`;
  const s = $('#screen'); s.className = 'screen'; s.innerHTML = `<div><h2>Night select</h2><div class="nights">${b}</div><p class="hint">Nights ${OPEN_NIGHTS + 1} to 6 are coming soon.</p><button class="big alt" id="bk">Back</button></div>`;
  s.querySelectorAll('.nights button').forEach((el) => { el.onclick = () => startNight(+el.dataset.n); }); $('#bk').onclick = home;
}
/* kept for the release of nights 3 to 6 */
// eslint-disable-next-line no-unused-vars
function daily() {
  const key = Online.dayKey(), setup = Online.dailySetup(key), done = stats.daily[key];
  const s = $('#screen'); s.className = 'screen';
  s.innerHTML = `<div><h2>Daily challenge · ${key}</h2><p>Everyone gets the same night today. Beat it once to earn a streak mark.</p><p>${ORDER.map((w) => `${NAMES[w]} <b>${setup.levels[w]}</b>`).join(' · ')}</p><p>${done ? '✔ You beat today\'s challenge.' : 'Not beaten yet.'}</p><button class="big" id="go">Start</button><button class="big alt" id="bk">Back</button></div>`;
  $('#go').onclick = () => startNight(7, { levels: setup.levels, seed: setup.seed, label: 'Daily ' + key, daily: key }); $('#bk').onclick = home;
}
const CUSTOM_KEY = 'fnaz2_custom';
function loadCustom() { try { const v = JSON.parse(localStorage.getItem(CUSTOM_KEY)); if (v && typeof v === 'object' && !Array.isArray(v)) { const o = {}; ORDER.forEach((w) => { o[w] = Math.min(20, Math.max(0, +v[w] | 0)); }); return o; } } catch (e) { /* none */ } const o = {}; ORDER.forEach((w) => { o[w] = 5; }); return o; }
// eslint-disable-next-line no-unused-vars
function customNight() {
  const lv = loadCustom(), s = $('#screen'); s.className = 'screen';
  s.innerHTML = `<div class="panel"><h2>Custom night</h2><div class="cust">${ORDER.map((w, i) => `<label for="c${i}">${NAMES[w]}</label><input id="c${i}" data-w="${w}" type="range" min="0" max="20" value="${lv[w] || 0}"><output>${lv[w] || 0}</output>`).join('')}</div>
   <div class="btnrow"><button id="cz">All 0</button><button id="c5">All 5</button><button id="c20">All 20</button><button id="cr">Random</button></div>
   <div class="row"><label>Share code</label><span><input id="code" style="width:150px" class="sm" value="${Online.encode(lv, ORDER)}"> <button class="sm" id="cp">Copy</button> <button class="sm" id="ld">Load</button></span></div>
   <div class="btnrow"><button class="pri" id="go">Start</button><button id="bk">Back</button></div></div>`;
  const read = () => { const o = {}; s.querySelectorAll('input[data-w]').forEach((el) => { o[el.dataset.w] = +el.value; }); return o; };
  const sync = (o) => { s.querySelectorAll('input[data-w]').forEach((el) => { el.value = o[el.dataset.w] || 0; el.nextElementSibling.textContent = el.value; }); $('#code').value = Online.encode(o, ORDER); try { localStorage.setItem(CUSTOM_KEY, JSON.stringify(o)); } catch (e) { /* ignore */ } };
  s.querySelectorAll('input[data-w]').forEach((el) => { el.oninput = () => { el.nextElementSibling.textContent = el.value; sync(read()); }; });
  const all = (n) => { const o = {}; ORDER.forEach((w) => { o[w] = typeof n === 'function' ? n() : n; }); sync(o); };
  $('#cz').onclick = () => all(0); $('#c5').onclick = () => all(5); $('#c20').onclick = () => all(20); $('#cr').onclick = () => all(() => Math.floor(Math.random() * 21));
  $('#cp').onclick = () => { try { navigator.clipboard.writeText($('#code').value); toast('Code copied'); } catch (e) { $('#code').select(); } };
  $('#ld').onclick = () => { const o = Online.decode($('#code').value, ORDER); if (o) { sync(o); toast('Loaded'); } else toast('That code is not valid'); };
  $('#go').onclick = () => { const o = read(); startNight(7, { levels: o, label: 'Custom Night', custom: true }); }; $('#bk').onclick = home;
}
const BLURB = {
  toyZayed: 'The Camel, new body. Patience. "No rush. We can wait." Walks the hallway straight at you. The mask works on him.', toyBubbles: 'The Cat, new body. Nerve. She rang the number herself. Comes through the left vent.', toyTaffy: 'The Goat, new body. Memory. Counts out an order under her breath. Takes the right vent.', toySherbet: 'The Falcon, new body. Hunger, freshly painted, and always late. Delivers.',
  wZayed: 'The old Camel body. Worn, hanging jaw, one arm gone. They kept your place.', wBubbles: 'The old Cat. The metal shows through. Left vent, and it keeps ringing.', wTaffy: 'The old Goat. Right vent. She remembers, and she is patient about it.', wSherbet: 'The old Falcon, still on skates. Runs the hallway. The mask will not save you; light him up.',
  gelly: 'Rides the old order chute through the ceiling vents. It was built to deliver, and it never knocks. Slow to leave.', bidoof: 'Small, round, laughing. Rings the bell for every complaint. Never hurts you. Takes your light.', ibrahim: 'Lives in the music box. On hold since the night of the order. Keep the tune wound, or the line drops. Not one of the four.'
};
function extras() {
  const s = $('#screen'); s.className = 'screen'; const k = Object.entries(stats.killers).sort((a, b) => b[1] - a[1])[0];
  s.innerHTML = `<div class="panel"><h2>Extras</h2><div class="stat"><div><b>${stats.beaten}</b><span>Nights beaten</span></div><div><b>${stats.wins}</b><span>Wins</span></div><div><b>${stats.deaths}</b><span>Deaths</span></div><div><b>${Math.round(stats.seconds / 60)}m</b><span>Played</span></div></div>
   <p>${k ? `Most deaths: <b>${NAMES[k[0]] || k[0]}</b> (${k[1]})` : 'No deaths yet.'}</p>
   <div class="btnrow"><button class="pri" id="xf">Case file ${Lore.countFound()}/${Lore.total()}</button><button id="xg">Characters</button><button id="xc">Controls</button><button id="xa">About</button><button id="bk">Back</button></div></div>`;
  $('#xf').onclick = () => caseFile(); $('#xg').onclick = gallery; $('#bk').onclick = home;
  $('#xa').onclick = about;
  $('#xc').onclick = () => { s.innerHTML = `<div class="panel"><h2>Controls</h2><p>Mouse / finger: look left and right (vents are at the sides).<br>Hold <b>F</b> or click: flashlight.<br>Hold <b>M</b>: Zayed mask (cameras off while worn).<br><b>C</b> / Tab: cameras · <b>1–9</b>: pick a camera.<br>Hold <b>W</b> on the Prize Corner camera: wind the music box.<br><b>Esc</b> / P: pause.</p><div class="btnrow"><button id="bk">Back</button></div></div>`; $('#bk').onclick = extras; };
}
/* The case file: everything found so far, with a hint for what is not. Four digits unlock the last page. */
function caseFile(sel = null, msg = '') {
  const s = $('#screen'); s.className = 'screen'; const docs = Lore.DOCS.filter((d) => d.kind !== 'final' || Lore.has(d.id));
  const cur = sel && Lore.byId(sel) ? Lore.byId(sel) : null;
  const list = docs.map((d) => { const got = Lore.has(d.id); return `<button class="doc ${got ? 'got' : ''} ${cur && cur.id === d.id ? 'on' : ''}" data-id="${d.id}"><b>${got ? esc(d.title) : 'Not found yet'}</b><span>${got ? esc(d.where) : esc(d.kind === 'call' ? 'Night ' + d.night : 'Night ' + d.night + ' or later')}</span></button>`; }).join('');
  const body = cur ? (Lore.has(cur.id) ? `<h3>${esc(cur.title)}</h3><p class="docbody">${esc(cur.text).replace(/\n/g, '<br>')}</p>` : `<h3>Not found yet</h3><p>${esc(Lore.hint(cur))}</p>`) : `<h3>Case file Q-0007</h3><p>Claims file for the old Abdulla's Cafeteria building. Papers turn up in the cameras and around your office from the night they were filed. Click one to pick it up. Calls are filed after you survive the night. ${Lore.countFound()} of ${Lore.total()} found.</p>`;
  s.innerHTML = `<div class="panel wide"><h2>Case file</h2><div class="cf"><div class="cflist">${list}</div><div class="cfview">${body}<p class="hint" id="cfmsg">${esc(msg)}</p></div></div>
    <div class="row"><label for="dial">Dial the order</label><span><input id="dial" class="sm code-in" maxlength="4" inputmode="numeric" placeholder="0000" autocomplete="off" style="width:110px"> <button class="sm" id="dialgo">Dial</button></span><p>${Lore.slipsFound() ? 'You hold all four order slips.' : 'Four digits. The slips will tell you which.'}</p></div>
    <div class="btnrow"><button class="pri" id="bk">Back</button></div></div>`;
  s.querySelectorAll('.doc').forEach((b) => { b.onclick = () => caseFile(b.dataset.id); }); $('#bk').onclick = extras;
  const dial = () => { const v = $('#dial').value; if (Lore.has(Lore.FINAL_ID) && v === Lore.CODE) { caseFile(Lore.FINAL_ID); return; } if (Lore.tryCode(v)) { Snd.chime(); caseFile(Lore.FINAL_ID, 'The line connects.'); } else { Snd.click(); caseFile(sel, 'The line is busy.'); } };
  $('#dialgo').onclick = dial; $('#dial').onkeydown = (e) => { e.stopPropagation(); if (e.key === 'Enter') dial(); };
}
function about() {
  const s = $('#screen'); s.className = 'screen';
  s.innerHTML = `<div class="panel"><h2>About</h2><p>Five Nights at Zayed's 2 is a fan game made for fun. It is not affiliated with Scott Cawthon or Five Nights at Freddy's. The characters, faces and story belong to the people who made them.</p><p>Version ${Online.VERSION}. Made with three.js, PeerJS and CAD models built in build123d.</p><h3>What the game loads</h3><p>With Live profile pictures on, your device fetches each character's current Discord profile picture from Discord's picture server, so Discord can see your address, as with any image. Turn it off in Settings to use only the pictures bundled with the game.</p><h3>What the game sends</h3><p>If you leave "Show that I am online" on, the game sends a random ID, the version, your device type and the screen you are on, about every 30 seconds. No name, no account, no location. Co-op connects the two players directly; the matchmaking server only introduces them. Your saves, settings and coins stay in this browser.</p><div class="btnrow"><button class="pri" id="bk">Back</button></div></div>`;
  $('#bk').onclick = extras;
}
let gi = 0;
function gallery() {
  G.mode = 'gallery'; $('#screen').hidden = true; for (const w of WHO) bots[w].root.visible = false;
  const show = () => {
    const w = ORDER[gi]; for (const x of WHO) bots[x].root.visible = x === w;
    openGal(`<div class="gal"><button class="sm" id="gp">‹</button><p><b>${NAMES[w]}</b><br>${BLURB[w]}</p><button class="sm" id="gn">›</button></div><div class="btnrow"><button id="bk">Back</button></div>`);
    $('#gp').onclick = () => { gi = (gi + ORDER.length - 1) % ORDER.length; show(); }; $('#gn').onclick = () => { gi = (gi + 1) % ORDER.length; show(); }; $('#bk').onclick = () => { closeGal(); for (const x of WHO) bots[x].root.visible = false; G.mode = 'title'; $('#screen').hidden = false; extras(); };
  };
  show();
}
function openGal(html) { const m = $('#modal'); m.className = 'screen gallery'; m.innerHTML = '<div class="panel">' + html + '</div>'; m.hidden = false; }
function closeGal() { const m = $('#modal'); m.className = 'screen modal'; m.hidden = true; m.innerHTML = ''; }

/* ---- pause, game over, win ---- */
function pause(on) {
  if (G.mode !== 'play' || G.scareWho) return;
  if (G.coop) { G.menuOpen = on; if (on) pauseScreen(); else { $('#screen').hidden = true; closeModal(); } return; }
  G.paused = on; if (on) { G.light = false; G.wind = false; setMask(false); Calls.stop(); pauseScreen(); } else { $('#screen').hidden = true; closeModal(); }
}
function pauseScreen() { const s = $('#screen'); s.hidden = false; s.className = 'screen'; s.innerHTML = `<div class="panel pausebox"><h2>${G.coop ? 'Menu' : 'Paused'}</h2><p class="hint">${G.label} at ${(G.S.hour === 0 ? 12 : G.S.hour)} AM${G.coop ? '. The night keeps running for your partner.' : ''}</p><div class="stack"><button class="big" id="pr">Resume</button><button class="big alt" id="ps">Settings</button><button class="big alt" id="pm">${G.coop ? 'Leave the room' : 'Quit to menu'}</button></div><p class="hint">Esc or P also resumes.</p></div>`; $('#pr').onclick = () => pause(false); $('#ps').onclick = () => settings(); $('#pm').onclick = () => { if (G.coop) coop.leave(); G.mode = 'title'; home(); }; }
function over(win) {
  Calls.stop(); const n = G.S.night, cheated = !!(G.S.cheated || (G.adm && G.adm.used)); G.mode = win ? 'won' : 'dead'; G.cam = null; G.light = false; G.mask = false; $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on'); $('#scareBar').hidden = true; $('#call').hidden = true; $('#staticOv').classList.remove('on'); document.body.classList.remove('playing'); const pk = $('#pings'); if (pk) pk.hidden = true;
  let rw = { parts: [], total: 0 };
  if (!cheated && win && n <= 6 && (!G.opts.label || G.opts.coop)) for (let k = 1; k <= n; k++) Lore.collect('call' + k);
  if (!cheated) {
    rw = Shop.reward(win, n, G.S.hour, !!G.opts.custom || n === 7, G.S.lv); if (rw.total) Shop.earn(rw.total);
    if (win) { stats.wins++; if (n <= 6 && !G.opts.label || (G.opts.coop && n <= 6)) stats.beaten = Math.max(stats.beaten, n); if (G.opts.daily) stats.daily[G.opts.daily] = true; } else { stats.deaths++; stats.killers[G.scareWho] = (stats.killers[G.scareWho] || 0) + 1; }
  }
  saveStats();
  const coopMode = !!G.coop, guest = !!G.guest;
  const pay = cheated ? '<p class="hint">Admin powers were used: no coins or progress for this run.</p>' : rw.total ? `<p>${rw.parts.map(([l, v]) => `${l} +${v}`).join(' · ')} → <b>${ic('coin')}+${rw.total}</b></p>` : '';
  const s = $('#screen'); s.hidden = false; s.className = 'screen';
  const next = win && n < OPEN_NIGHTS && !G.opts.label ? `<button class="big" id="nx">Night ${n + 1}</button>` : '';
  const buttons = coopMode ? (guest ? '<p class="pulse">Waiting for the host to start again…</p>' : `<button class="big" id="rt">Play again</button>`) + '<button class="big alt" id="tt">Leave</button>' : `${next}<button class="big ${next ? 'alt' : ''}" id="rt">${win ? 'Replay' : 'Try again'}</button><button class="big alt" id="tt">Menu</button>`;
  s.innerHTML = win
    ? `<div><h1>6 AM</h1><h2>You survived ${G.label}</h2><p>${n === 6 && !G.opts.label ? (Lore.has(Lore.FINAL_ID) ? 'The sun is up. You know whose order this was. The door is yours to open, Rashid.' : Lore.countFound() >= Math.round(Lore.total() * 0.6) ? 'The sun is up, and the police are at the door. You hold most of the pieces. Four numbers in the case file would tell you the rest.' : 'The sun is up. The police at the door are no longer the worst thing in the building. There is more to find in the cameras, from the first night on.') : 'The sun is up. The bodies are still. For now.'}${win && n >= OPEN_NIGHTS && !G.opts.label ? ' More nights are coming soon.' : ''}</p>${pay}${buttons}</div>`
    : `<div><h2>${NAMES[G.scareWho] || 'Something'} got you</h2><p>You lasted until ${fmtTime(G.S.t)}.</p>${DEATH_LINE[G.scareWho] ? `<p class="quote">${DEATH_LINE[G.scareWho]}</p>` : ''}<p>${hintFor(G.scareWho)}</p>${pay}${buttons}</div>`;
  if ($('#nx')) $('#nx').onclick = () => startNight(n + 1, { }); 
  if ($('#rt')) $('#rt').onclick = () => (coopMode ? coop.again() : startNight(n, G.opts));
  $('#tt').onclick = () => { if (coopMode) coop.leave(); home(); };
}
const DEATH_LINE = { toyZayed: '"No rush. We can wait."', toyBubbles: '"Do not hang up."', toyTaffy: '"Twelve cupcakes. Four candles each."', toySherbet: '"Special delivery!"', wZayed: '"We kept your place."', wBubbles: '"Pick up. Pick up."', wTaffy: '"You were supposed to remember."', wSherbet: '"Late. So late."', ibrahim: '"Thank you for holding."', gelly: '"I never knock."', bidoof: '"Complaint received!"' };
const hintFor = (w) => ({ ibrahim: 'The music box ran out. Keep winding it from the Prize Corner camera.', wSherbet: 'Withered Sherbet runs the hallway. The mask will not stop him: shine the light down the hall.', gelly: 'Gelly comes through the vents. Wear the mask until she leaves.' }[w] || 'Put the mask on when something is in the office.');

/* ---- input ---- */
const buzz = (p) => { if (cfg.haptics && navigator.vibrate) try { navigator.vibrate(p); } catch (e) { /* ignore */ } };
const canPlay = () => G.mode === 'play' && !G.paused && !G.scareWho && !G.guest;
const setLight = (v) => { if (!canPlay() || G.cam) { if (!v) G.light = false; return; } G.light = v; };
const pressLight = () => { if (cfg.toggleLight) setLight(!G.light); else setLight(true); }; const releaseLight = () => { if (!cfg.toggleLight) setLight(false); };
const setMask = (v) => { if (!canPlay()) { if (!v) G.mask = false; return; } if (v && (G.cam && !G.coop)) return; if (v !== G.mask) Snd.mask(v); G.mask = v; };
const pressMask = () => { if (cfg.toggleMask) setMask(!G.mask); else setMask(true); }; const releaseMask = () => { if (!cfg.toggleMask) setMask(false); };
addEventListener('pointermove', (e) => { const v = (e.clientX / innerWidth - 0.5) * 2 * 1.45 * (cfg.sens / 100) * (cfg.invert ? -1 : 1); G.yawT = Math.max(-1.45, Math.min(1.45, v)); });
canvas.addEventListener('pointerdown', (e) => { if (e.button !== 2 && tryPickup(e)) return; if (e.button !== 2) pressLight(); });
/* A paper from the case file under the pointer? Pick it up instead of using the light. */
function tryPickup(e) {
  if (G.mode !== 'play' || G.paused || G.scareWho) return false;
  const id = pickLoreItem(e.clientX, e.clientY, G.cam ? camV : player); if (!id) return false;
  if (Lore.collect(id)) { Snd.chime(); buzz(40); const d = Lore.byId(id); toast('Picked up: ' + d.title + '. It is in Extras, under Case file.'); showLoreItems(G.S.night); if (Lore.slipsFound() && !Lore.has(Lore.FINAL_ID)) say('You have all four order slips. Something about their order matters.', 5000); }
  return true;
}
addEventListener('pointerup', () => { releaseLight(); G.wind = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
const typer = wordTyper(); let admin = null, coop = null;
const typing = (e) => { const t = e.target; return t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName); };
addEventListener('keydown', (e) => {
  if (typing(e)) return; const k = e.key.toLowerCase();
  if (!e.repeat && typer(e.key) && admin) { e.preventDefault(); admin.open(); return; }
  if (e.repeat) return; G.keys[k] = 1;
  if (k === 'f3') { e.preventDefault(); toggleDebug(); return; }
  if (k === 'escape' || k === 'p') { if (modalOpen()) { $('#mClose') ? $('#mClose').click() : closeModal(); } else if (G.mode === 'play') pause(G.coop ? !G.menuOpen : !G.paused); return; }
  if ((G.mode === 'dead' || G.mode === 'won') && (k === 'r' || k === 'enter')) { const bt = $('#rt') || $('#nx'); if (bt) bt.click(); return; }
  if (G.paused) return;
  if (k === 'f' || k === ' ') { if (k === ' ') e.preventDefault(); pressLight(); } if (k === 'm') pressMask(); if (k === 'w') G.wind = true;
  if (k === 'c' || k === 'tab') { e.preventDefault(); toggleCam(); }
  if (G.cam && (k === 'arrowleft' || k === 'q' || k === 'arrowright' || k === 'e')) { const i = camIds.indexOf(G.cam), d = k === 'arrowleft' || k === 'q' ? -1 : 1; selectCam(camIds[(i + d + camIds.length) % camIds.length]); }
  const d = '1234567890'.indexOf(k); if (G.cam && d >= 0 && d < camIds.length) selectCam(camIds[d]);
});
addEventListener('keyup', (e) => { if (typing(e)) return; const k = e.key.toLowerCase(); G.keys[k] = 0; if (k === 'f' || k === ' ') releaseLight(); if (k === 'm') releaseMask(); if (k === 'w') G.wind = false; });
const hold = (el, on, off) => { el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); on(); }); for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) el.addEventListener(ev, off); };
hold($('#bMask'), pressMask, releaseMask); hold($('#bFlash'), pressLight, releaseLight);
$('#bCam').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); toggleCam(); });
hold($('#bWind'), () => { G.wind = true; }, () => { G.wind = false; });

const camIds = Object.keys(CAMS);
function toggleCam() {
  if (G.mode !== 'play' || G.paused || G.guest || G.scareWho) return;
  if (G.coop) { toast('Your partner has the cameras'); return; }
  if (G.cam) { G.cam = null; $('#camUI').hidden = true; $('#bCam').classList.remove('on'); Snd.click(); return; }
  if (G.mask) setMask(false);
  G.cam = G.camLast || 'stage'; $('#camUI').hidden = false; $('#bCam').classList.add('on'); selectCam(G.cam); Snd.click();
}
function selectCam(id) { G.cam = G.camLast = id; $('#camName').textContent = 'CAM ' + (camIds.indexOf(id) + 1) + ' · ' + CAMS[id].name; $('#bWind').hidden = id !== 'prize'; [...$('#camList').children].forEach((b) => b.classList.toggle('on', b.dataset.id === id)); Snd.click(); }
$('#bPause').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); pause(true); });
$('#callSkip').addEventListener('click', () => { Calls.stop(); });
$('#camList').innerHTML = camIds.map((id, i) => `<button data-id="${id}" title="${CAMS[id].name}" aria-label="Camera ${i + 1}, ${CAMS[id].name}"><b>${i + 1}</b><span> ${CAMS[id].name}</span></button>`).join('');
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
    else if (f.type === 'enter') { G.from[f.who] = f.from; (f.from.startsWith('vent') ? Snd.clang : Snd.step)(pan(f.from)); if (f.who === 'bidoof') Snd.laugh(); buzz(60); say(f.who === 'bidoof' ? 'Bidoof is in the office. The flashlight is dead.' : (NAMES[f.who] || f.who) + ' is in the office!', 3000); G.shake = 0.5; }
    else if (f.type === 'run') { Snd.clang(0); say('Withered Sherbet is running the hall! Shine the light down it!', 3000); }
    else if (f.type === 'pushed') { Snd.step(pan(f.from)); }
    else if (f.type === 'boxout') { Snd.chime(); say('The music box ran out. Wind it from the Prize Corner camera!', 4000); }
    else if (f.type === 'revived') { Snd.chime(); say('The lucky charm saved you!', 3000); buzz(80); }
    else if (f.type === 'kill') { G.cam = null; buzz([200, 60, 200]); G.scareWho = f.who; G.scareT = 0; Snd.scare(); $('#scareBar').hidden = false; $('#maskOv').classList.remove('on'); $('#camUI').hidden = true; }
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
  const S = G.S; if (!G.guest && S.hour > (G.hourPaid | 0)) { G.hourPaid = S.hour; toast('Hour survived'); } $('#hClock').textContent = (S.hour === 0 ? 12 : S.hour) + ' AM'; $('#mFlash').style.width = S.battery + '%'; $('#boxM').style.display = ''; $('#mBox').style.width = S.box + '%';
  $('#mBox').style.background = S.box < 25 ? '#e8453c' : ''; $('#bMask').classList.toggle('on', G.mask); $('#bFlash').classList.toggle('on', G.light);
  $('#staticOv').classList.toggle('on', !!G.cam);
}
let last = performance.now(), fpsN = 0, fpsT = 0, titleT = 3, titleBot = null, titleOn = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.1, (now - last) / 1000); last = now;
  const w = innerWidth, h = innerHeight, pr = renderer.getPixelRatio();
  if (G.sized !== w + 'x' + h + 'x' + pr) { G.sized = w + 'x' + h + 'x' + pr; renderer.setSize(w, h, false); player.aspect = camV.aspect = w / h; player.updateProjectionMatrix(); camV.updateProjectionMatrix(); applyFov(); }
  if (!G.ready) return;
  if (cfg.fps) { fpsN++; fpsT += dt; if (fpsT >= 0.5) { $('#fps').textContent = Math.round(fpsN / fpsT) + ' fps'; fpsN = 0; fpsT = 0; } }
  if (!dbg.hidden) dbg.textContent = `${Math.round(1 / Math.max(dt, 0.001))} fps · mode ${G.mode}${G.S ? ' · ' + G.label + ' · t ' + G.S.t.toFixed(1) + 's · bat ' + Math.round(G.S.battery) + ' · box ' + Math.round(G.S.box) : ''}\nnet ${G.net ? G.net.state + ' ' + (G.net.role || '') + ' ' + G.net.code + ' ' + G.net.ping + 'ms' : '-'} · errors ${errLog.length}${errLog.length ? '\n' + errLog.slice(-2).join('\n') : ''}\nF3 hides this · /debug.html runs the self-tests`;
  if (hintT > 0) { hintT -= dt * 1000; if (hintT <= 0) $('#hint').textContent = ''; }
  const live = G.mode === 'play' && G.S && !G.paused;
  let titleFlash = 0;
  if (G.mode === 'title') { // the stage: the four Toy bodies under the lights, with the odd blackout
    titleT -= dt; if (titleT <= 0 && !titleOn) { titleOn = 0.3; titleT = 6 + Math.random() * 6; }
    if (titleOn > 0) titleOn -= dt;
    const camPos = player.position;
    for (const x of WHO) { const toy = CAST[x].toy; bots[x].root.visible = toy; if (toy) { const [bx, by, bz] = spot(x, 'stage'); const r = bots[x].root; r.position.set(bx, by, bz); r.scale.setScalar(1); r.rotation.set(0, 0, 0); r.lookAt(camPos.x * 0.6, by, camPos.z); animate(bots[x], dt, 'idle'); } }
  }
  if (G.mode === 'won' || G.mode === 'dead') { // a slow pan, and now and then something stands in the hall
    G.yaw = Math.sin(now / 4000) * 0.45; titleT -= dt;
    if (titleT <= 0 && !titleOn) { titleOn = 0.32; titleBot = WHO[Math.floor(Math.random() * 8)]; titleT = 5 + Math.random() * 5; }
    for (const x of WHO) bots[x].root.visible = false;
    if (titleOn > 0) { titleOn -= dt; const b = bots[titleBot]; b.root.visible = cfg.flashing || titleOn > 0.15; b.root.position.set(0, 0, -6.5); b.root.scale.setScalar(1); b.root.rotation.set(0, 0, 0); b.root.lookAt(0, 0, 0.6); animate(b, dt, 'idle'); titleFlash = cfg.flashing ? 1 : 0.4; }
  }
  if (live && !G.scareWho) {
    const S = G.S; stats.seconds += dt; G.yaw += (G.yawT - G.yaw) * Math.min(1, dt * 6);
    const aim = G.yaw < -0.9 ? 'ventL' : G.yaw > 0.9 ? 'ventR' : 'hall';
    let fx = [];
    if (!G.guest) { const rc = G.coop ? G.coop.remote : null; fx = step(S, dt * G.speed, { mask: G.mask, flash: G.light && !G.cam, aim, cam: rc ? rc.cam : G.cam, wind: rc ? rc.wind : G.wind, coop: !!G.coop }); if (G.coop) coop.hostTick(dt, fx); } else coop.guestTick(dt);
    if (admin) admin.frame();
    apply(fx); Snd.box(S.box, dt); Snd.hum(0.04 + (G.cam ? 0.02 : 0));
    if (G.mask) { G.breathT -= dt; if (G.breathT <= 0) { Snd.breath(); G.breathT = 1.4; } }
    $('#maskOv').classList.toggle('on', S.mask > 0.5); $('#bWind').classList.toggle('on', G.wind && !!G.cam);
    updateHud(); if (G.cam) drawMini();
  }
  if (G.scareWho && G.mode === 'play') { // the jumpscare: the body fills the view, shaking
    G.scareT += dt; const b = bots[G.scareWho]; b.root.visible = true; b.root.scale.setScalar(1.1);
    const p = Math.min(1, G.scareT / 0.18), d = 2.2 - p * 1.15; b.root.position.set(player.position.x + Math.sin(-G.yaw) * d, 0.0, player.position.z - Math.cos(G.yaw) * d); b.root.lookAt(player.position.x, 0, player.position.z);
    b.root.position.x += Math.sin(G.scareT * 90) * 0.05; b.root.position.y = -0.55;
    animate(b, dt, 'scare'); officeLight.intensity = cfg.flashing ? 3 + Math.random() * 12 : 8; $('#flashOv').style.opacity = cfg.flashing && G.scareT < 0.25 ? 0.8 - G.scareT * 3 : 0;
    if (G.scareT > 1.6) { officeLight.intensity = 7; b.root.visible = false; $('#flashOv').style.opacity = 0; over(false); }
  } else if (live || G.mode === 'title') { for (const x of WHO) if (!(G.mode === 'title' && x === titleBot)) animate(bots[x], dt * (live ? 1 : 0), 'idle'); }
  if (live && !G.scareWho) placeAll();
  document.body.classList.toggle('cam-on', !!(G.cam && G.mode === 'play'));
  // camera + lights
  if (G.mode === 'title') {
    for (const id in map.lights) map.lights[id].intensity = 0; officeLight.intensity = 0; camLight.intensity = 0; flash.intensity = 0;
    const dark = titleOn > 0 && cfg.flashing; map.lights.main.intensity = dark ? 0 : 13 + Math.sin(now / 900) * 1.5; camLight.position.set(0, 2.5, -14); camLight.intensity = dark ? 0 : 2;
    player.position.set(Math.sin(now / 6000) * 1.3, 2.35, -13.3); player.lookAt(Math.sin(now / 8000) * 0.7, 1.7, -20.2); renderer.render(scene, player); return;
  }
  G.shake = Math.max(0, G.shake - dt); const shake = cfg.shake ? G.shake * 0.03 : 0;
  for (const id in map.lights) map.lights[id].intensity = 0;
  if (G.cam && G.mode === 'play') {
    const c = CAMS[G.cam]; camV.position.set(...c.pos); camV.lookAt(...c.look); camV.position.x += Math.sin(now / 900) * 0.04;
    map.lights[c.room].intensity = c.room.startsWith('vent') ? 4 : 16; camLight.position.set(...c.pos); camLight.intensity = c.room.startsWith('vent') ? 1.5 : 5;
    officeLight.intensity = 0; flash.intensity = 0; renderer.render(scene, camV);
  } else {
    camLight.intensity = 0; if (!G.scareWho) officeLight.intensity = G.mode === 'play' ? 6 + (cfg.flashing && Math.random() < 0.02 ? -3 : 0) : 7;
    if (G.mode === 'gallery') { // turntable
      const b = bots[ORDER[gi]]; b.root.position.set(0, 0, -60); b.root.scale.setScalar(1); b.root.rotation.set(0, now / 1800, 0); animate(b, dt, 'idle'); officeLight.position.set(1.5, 3, -57); officeLight.intensity = 14;
      player.position.set(0, 1.15, -55.3); player.rotation.set(-0.02, 0, 0, 'YXZ'); flash.intensity = 0; renderer.render(scene, player); officeLight.position.set(0, 2.7, 0.5); return;
    }
    flash.intensity = G.S && G.S.flashOn && live ? 260 : titleFlash ? 260 : 0;
    player.rotation.set(Math.abs(G.yaw) > 0.9 ? -0.32 : -0.05, -G.yaw, 0, 'YXZ');
    player.position.set(Math.sin(now / 1500) * 0.01 + (Math.random() - .5) * shake, 1.35, 0.6); renderer.render(scene, player);
  }
}
addEventListener('visibilitychange', () => { if (document.hidden && cfg.autopause && G.mode === 'play' && !G.coop) pause(true); });
addEventListener('blur', () => { if (G.mode === 'play' && !cfg.toggleLight) G.light = false; if (G.mode === 'play' && !cfg.toggleMask) G.mask = false; G.wind = false; G.keys = {}; if (cfg.autopause && G.mode === 'play' && !G.scareWho && !G.coop) pause(true); });
canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); toast('Graphics context lost. Reload the page.'); });
setInterval(() => { const sc = G.mode === 'play' ? 'game' : G.mode; Online.beat(sc, G.S && G.mode === 'play' ? G.S.night : 0); }, 30000);

/* ---- boot: the loading page ---- */
const TIPS = ['The mask makes you look like one of them. It does not fool the Falcon.', 'Shine the flashlight down the hall: the old Falcon will turn back.', 'Wind the music box from the Prize Corner camera, and do not stop.', 'You cannot use the cameras while you wear the mask.', 'One soul. Four bodies. They do not want to be split.', 'Bidoof will not hurt you. He will only break your flashlight.', 'Qerh Cooperations thanks you for your service.', 'Abdulla\'s Cafeteria had one phone line. It is still ringing.', 'Papers turn up on the cameras. Click one to pick it up. They are filed in Extras.', 'Order slips have numbers. Keep them in the order the bodies were made.', 'Ibrahim has been on hold since the night of the order.', 'Nobody was hurt. Something was promised, and never kept.', 'Staff are on shift. The mask is the old staff cap.'];
async function boot() {
  $('#ldTip').textContent = TIPS[Math.floor(Math.random() * TIPS.length)]; applyQuality(); renderer.toneMappingExposure = 1.3 * cfg.brightness / 100; document.documentElement.style.setProperty('--ui', cfg.uiScale / 100); document.body.classList.toggle('noflash', !cfg.flashing); $('#fps').hidden = !cfg.fps; player.fov = camV.fov = cfg.fov;
  const bar = (p, m) => { $('#ldBar').style.width = Math.round(p * 100) + '%'; if (m) $('#ldMsg').textContent = m; };
  const nap = () => new Promise((r) => setTimeout(r, 25));
  bar(0.05, 'Building the pizzeria…'); await nap();
  let i = 0; for (const w of WHO) { bar(0.1 + (i++ / WHO.length) * 0.6, 'Assembling ' + NAMES[w] + '…'); makeBot(w); await nap(); }
  G.ready = true; bar(0.72, 'Loading faces…');
  await Promise.all(['zayed', 'bubbles', 'taffy', 'sherbet'].map(faceReady)); startLiveFaces();
  bar(0.8, 'Loading models…'); await Promise.race([propsReady, new Promise((r) => setTimeout(r, 6000))]);
  bar(0.9, 'Warming up the lights…'); for (const x of WHO) bots[x].root.visible = false; renderer.render(scene, player); await nap();
  bar(1, 'Ready.');
  if (!renderer.getContext()) { $('#ldWarn').hidden = false; $('#ldWarn').textContent = 'Your browser could not start 3D graphics.'; return; }
  Updater.startUpdateChecks();
  const go = $('#ldGo'); go.hidden = false; go.focus();
  const start = () => { startAudio(); if (matchMedia('(pointer:coarse)').matches) toggleFull(); $('#loading').classList.add('out'); setTimeout(() => $('#loading').remove(), 700); home(); const jc = new URLSearchParams(location.search).get('join'); if (jc) coop.joinLobby(jc.toUpperCase()); else if (stats.claim !== Online.dayKey()) setTimeout(() => dailyReward(ctx), 900); Updater.whatsNew().then((w) => { if (w) openModal(`<h2>Updated to version ${esc(w.version)}</h2>${w.notes.length ? `<ul class="notes">${w.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>` : '<p>Thanks for updating.</p>'}<div class="btnrow"><button class="pri" id="mClose">Continue</button></div>`); const c = $('#mClose'); if (c) c.onclick = closeModal; });
  Online.news().then((a) => { if (a) { newsItem = a; if (G.mode === 'title' && !modalOpen()) home(); } }); };
  go.onclick = start;
  window.__bootDone = true;
}
const ctx = { G, $, esc, toast, say, openModal, closeModal, startNight, home, over, Snd, bots, apply, NAMES, CAMS, selectCam, refreshHome, applyCosmetics, leaveToMenu, unlocked };
coop = initCoop(ctx); admin = initAdmin(ctx);
requestAnimationFrame(frame);
boot();
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && !/[?&]peer=/.test(location.search) && location.hostname !== 'localhost') navigator.serviceWorker.register('sw.js').catch(() => {});
window.FNAZ2 = { Lore, loreScreen, faceCanvas, refreshFaces, renderer, propsReady, G, startNight, bots, step, placeAll, scene, camV, player, home, settings, pause, cfg, stats };

/* the update banner: shown on every screen when a newer build is published */
{
  const bar = document.createElement('div'); bar.id = 'updbar'; bar.hidden = true; bar.innerHTML = '<span></span><button class="sm" id="updbarGo">Update now</button><button class="sm" id="updbarLater" aria-label="Dismiss">Later</button>'; document.body.appendChild(bar);
  bar.querySelector('#updbarGo').onclick = Updater.applyUpdate; bar.querySelector('#updbarLater').onclick = () => { bar.hidden = true; };
  Updater.onUpdate((s) => { if (s.available && !(G.mode === 'play' && !G.paused)) { bar.querySelector('span').textContent = `Version ${s.available.version} is ready.`; bar.hidden = false; } else if (!s.available) bar.hidden = true; });
}
