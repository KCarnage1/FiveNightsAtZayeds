import * as THREE from 'three';
import { buildMap, ROOMS, CAMS } from './map.js';
import { buildZayed, animate } from './models/cast.js';
import { buildIbrahim, buildGelly, buildBidoof } from './models/extras.js';
import { newNight, step, CAST, WHO, HOUR_SEC } from './ai.js';
import { S as Snd, start as startAudio } from './audio.js';
import { cfg, set as setCfg, onChange, stats, saveStats, unlocked, resetSettings, resetProgress, DEFAULTS } from './settings.js';
import * as Calls from './calls.js';
import * as Online from './online.js';
import { loadFace } from './models/kit.js';

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
  startAudio(); closeModal(); G.S = newNight(n, opts.seed || (Date.now() & 0xffff), opts); G.mode = 'play'; G.paused = false; G.cam = null; G.mask = false; G.light = false; G.yaw = G.yawT = 0; G.from = {}; G.scareWho = null; G.speed = opts.speed || 1; G.label = opts.label || LABEL[n] || 'Night ' + n; G.opts = opts;
  stats.plays++; saveStats(); document.body.classList.add('playing');
  $('#screen').hidden = true; $('#hud').hidden = false; $('#hNight').textContent = G.label; $('#scareBar').hidden = true; $('#bPause').hidden = false;
  intro(G.label);
  if (n <= 6 && !opts.label) setTimeout(() => { if (G.mode === 'play' && G.S && G.S.night === n) { Snd.ring(); setTimeout(() => { if (G.mode === 'play') Calls.start(n, $('#call')); }, 1800); } }, 2600);
  else say('Hold F or click for the flashlight. Hold M for the mask. C opens the cameras.', 6000);
}
function intro(label) { const d = document.createElement('div'); d.className = 'intro'; d.innerHTML = `<b>${label}</b><span>12:00 AM</span>`; document.body.appendChild(d); setTimeout(() => d.remove(), 3200); }
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
  Video: [{ k: 'quality', t: 'select', l: 'Quality', o: [['low', 'Low (best for phones)'], ['medium', 'Medium'], ['high', 'High']], p: 'Lower quality renders fewer pixels. Try Low if the game stutters.' }, { k: 'fov', t: 'range', l: 'Field of view', min: 55, max: 95 }, { k: 'shake', t: 'toggle', l: 'Screen shake' }, { k: 'flashing', t: 'toggle', l: 'Flashing effects', p: 'Turn off to remove bright flashes and flicker.' }, { k: 'fps', t: 'toggle', l: 'Show FPS' }, { t: 'button', l: 'Fullscreen', b: 'Toggle', act: () => toggleFull() }],
  Gameplay: [{ k: 'sens', t: 'range', l: 'Look sensitivity', min: 40, max: 200 }, { k: 'invert', t: 'toggle', l: 'Invert look' }, { k: 'hints', t: 'toggle', l: 'On-screen hints' }, { k: 'calls', t: 'toggle', l: 'Phone calls' }, { k: 'voice', t: 'toggle', l: 'Read calls aloud', p: 'Uses your device\'s text-to-speech voice.' }, { k: 'subtitles', t: 'toggle', l: 'Subtitles' }, { k: 'autopause', t: 'toggle', l: 'Pause when the tab loses focus' }],
  Online: [{ k: 'share', t: 'toggle', l: 'Show that I am online', p: 'Tells the developer the game is open: a random ID, the version, your device type and the screen you are on. No name, no account, no location.' }, { t: 'status' }],
  Data: [{ t: 'button', l: 'Reset settings', b: 'Reset', act: () => { resetSettings(); settings('Data'); toast('Settings reset'); } }, { t: 'button', l: 'Erase progress and stats', b: 'Erase…', danger: true, act: () => { if (confirm('Erase all nights beaten and stats?')) { resetProgress(); settings('Data'); toast('Progress erased'); if (G.mode === 'title') home(); } } }]
};
function settings(tab = 'Audio') {
  const rows = TABS[tab].map((r, i) => {
    if (r.t === 'range') return `<div class="row"><label for="s${i}">${r.l}</label><span><input id="s${i}" data-k="${r.k}" type="range" min="${r.min}" max="${r.max}" value="${cfg[r.k]}"> <output>${cfg[r.k]}</output></span></div>`;
    if (r.t === 'toggle') return `<div class="row"><label for="s${i}">${r.l}</label><input id="s${i}" class="tog" data-k="${r.k}" type="checkbox" ${cfg[r.k] ? 'checked' : ''}>${r.p ? `<p>${r.p}</p>` : ''}</div>`;
    if (r.t === 'select') return `<div class="row"><label for="s${i}">${r.l}</label><select id="s${i}" data-k="${r.k}">${r.o.map(([v, n]) => `<option value="${v}" ${cfg[r.k] === v ? 'selected' : ''}>${n}</option>`).join('')}</select>${r.p ? `<p>${r.p}</p>` : ''}</div>`;
    if (r.t === 'button') return `<div class="row"><label>${r.l}</label><button class="sm ${r.danger ? 'danger' : ''}" data-act="${i}">${r.b}</button></div>`;
    return `<div class="row"><label>Server</label><span id="olStatus">${Online.status.online === null ? 'not checked' : Online.status.online ? 'connected' : 'offline'}</span><p><button class="sm" id="olCheck">Check connection</button></p></div>`;
  }).join('');
  openModal(`<h2>Settings</h2><div class="tabs">${Object.keys(TABS).map((t) => `<button class="${t === tab ? 'on' : ''}" data-tab="${t}">${t}</button>`).join('')}</div>${rows}<div class="btnrow"><button class="pri" id="mClose">Done</button></div>`);
  const m = $('#modal');
  m.querySelectorAll('[data-tab]').forEach((b) => { b.onclick = () => settings(b.dataset.tab); });
  m.querySelectorAll('input[type=range]').forEach((el) => { el.oninput = () => { setCfg(el.dataset.k, +el.value); el.nextElementSibling.textContent = el.value; Snd.click(); }; });
  m.querySelectorAll('input.tog').forEach((el) => { el.onchange = () => setCfg(el.dataset.k, el.checked); });
  m.querySelectorAll('select').forEach((el) => { el.onchange = () => setCfg(el.dataset.k, el.value); });
  m.querySelectorAll('[data-act]').forEach((el) => { el.onclick = () => TABS[tab][+el.dataset.act].act(); });
  const chk = $('#olCheck'); if (chk) chk.onclick = async () => { $('#olStatus').textContent = 'checking…'; try { await Online.rpc('get_announcement', {}); } catch (e) { /* status set */ } if ($('#olStatus')) $('#olStatus').textContent = Online.status.online ? 'connected' : 'offline'; };
  $('#mClose').onclick = () => { closeModal(); if (G.paused) pauseScreen(); };
}
function toggleFull() { try { if (document.fullscreenElement) document.exitFullscreen(); else (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen).call(document.documentElement); } catch (e) { toast('Fullscreen is not available here'); } }
onChange((k) => {
  if (k === 'quality' || k === '*') applyQuality(); if (k === 'fov' || k === '*') { player.fov = camV.fov = cfg.fov; player.updateProjectionMatrix(); camV.updateProjectionMatrix(); }
  if (k === 'fps' || k === '*') { $('#fps').hidden = !cfg.fps; } if (k === 'flashing' || k === '*') document.body.classList.toggle('noflash', !cfg.flashing);
  if (k === 'share' && cfg.share) Online.beat(G.mode, G.S ? G.S.night : 0);
});
const RATIO = { low: 0.7, medium: 1, high: 1.5 };
function applyQuality() { renderer.setPixelRatio(Math.min(devicePixelRatio || 1, RATIO[cfg.quality] || 1)); G.sized = 0; }

/* ---- the home page ---- */
let newsItem = null;
function home() {
  G.mode = 'title'; Calls.stop(); document.body.classList.remove('playing'); G.paused = false; $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on'); $('#call').hidden = true; $('#scareBar').hidden = true; $('#staticOv').classList.remove('on'); closeModal();
  const u = unlocked(), s = $('#screen'); s.hidden = false; s.className = 'screen clear';
  s.innerHTML = `<div class="home"><h1 class="logo">Five Nights<br>at Zayed's 2</h1>
    <div class="menu"><button id="mNew">${stats.beaten ? 'Continue' : 'New game'} <small>Night ${u}</small></button><button id="mNights">Night select</button><button id="mCustom">Custom night <small>${stats.beaten >= 6 ? '' : 'beat Night 6'}</small></button><button id="mDaily">Daily challenge</button><button id="mExtras">Extras</button><button id="mSet">Settings</button></div>
    ${newsItem ? `<div class="news"><b>${esc(newsItem.title || 'News')}</b> ${esc(String(newsItem.message || '').replace(/\s+/g, ' ').slice(0, 200))}</div>` : ''}
    <div class="foot">v${Online.VERSION} · ${stats.wins} win${stats.wins === 1 ? '' : 's'} · ${stats.deaths} death${stats.deaths === 1 ? '' : 's'}</div></div>`;
  $('#mNew').onclick = () => startNight(u); $('#mNights').onclick = nightSelect; $('#mCustom').onclick = () => (stats.beaten >= 6 ? customNight() : toast('Beat Night 6 to unlock the Custom Night')); $('#mDaily').onclick = daily; $('#mExtras').onclick = extras; $('#mSet').onclick = () => settings();
  s.querySelectorAll('.menu button').forEach((b) => b.addEventListener('pointerenter', () => Snd.click()));
  Online.beat('title', 0);
}
function nightSelect() {
  const u = unlocked(); let b = ''; for (let n = 1; n <= 6; n++) b += `<button data-n="${n}" ${n > u ? 'disabled' : ''}>Night ${n}</button>`;
  const s = $('#screen'); s.className = 'screen'; s.innerHTML = `<div><h2>Night select</h2><div class="nights">${b}</div><button class="big alt" id="bk">Back</button></div>`;
  s.querySelectorAll('.nights button').forEach((el) => { el.onclick = () => startNight(+el.dataset.n); }); $('#bk').onclick = home;
}
function daily() {
  const key = Online.dayKey(), setup = Online.dailySetup(key), done = stats.daily[key];
  const s = $('#screen'); s.className = 'screen';
  s.innerHTML = `<div><h2>Daily challenge · ${key}</h2><p>Everyone gets the same night today. Beat it once to earn a streak mark.</p><p>${ORDER.map((w) => `${NAMES[w]} <b>${setup.levels[w]}</b>`).join(' · ')}</p><p>${done ? '✔ You beat today\'s challenge.' : 'Not beaten yet.'}</p><button class="big" id="go">Start</button><button class="big alt" id="bk">Back</button></div>`;
  $('#go').onclick = () => startNight(7, { levels: setup.levels, seed: setup.seed, label: 'Daily ' + key, daily: key }); $('#bk').onclick = home;
}
const CUSTOM_KEY = 'fnaz2_custom';
function loadCustom() { try { const v = JSON.parse(localStorage.getItem(CUSTOM_KEY)); if (v) return v; } catch (e) { /* none */ } const o = {}; ORDER.forEach((w) => { o[w] = 5; }); return o; }
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
  toyZayed: 'The Camel, new body. Patience made plastic. Walks the hallway straight at you. Mask works.', toyBubbles: 'The Cat, new body. Nerve. Comes through the left vent.', toyTaffy: 'The Goat, new body. Memory. Takes the right vent.', toySherbet: 'The Falcon, new body. Hunger, freshly painted. Delivers.',
  wZayed: 'The old Camel body from the first game. Worn, hanging jaw, one arm gone. Slow but sure.', wBubbles: 'The old Cat. The metal shows through. Left vent.', wTaffy: 'The old Goat. Right vent, and patient about it.', wSherbet: 'The old Falcon. Runs the hallway. The mask will not save you; light him up.',
  gelly: 'Lives in the Kid\'s Cove and crawls through the ceiling into the vents. Slow to leave. (Real model coming.)', bidoof: 'Small, round, laughing. Never hurts you. Kills your flashlight. (Real model coming.)', ibrahim: 'Lives in the music box. Keep it wound or he comes out. Not one of the four. (Real model coming.)'
};
function extras() {
  const s = $('#screen'); s.className = 'screen'; const k = Object.entries(stats.killers).sort((a, b) => b[1] - a[1])[0];
  s.innerHTML = `<div class="panel"><h2>Extras</h2><div class="stat"><div><b>${stats.beaten}</b><span>Nights beaten</span></div><div><b>${stats.wins}</b><span>Wins</span></div><div><b>${stats.deaths}</b><span>Deaths</span></div><div><b>${Math.round(stats.seconds / 60)}m</b><span>Played</span></div></div>
   <p>${k ? `Most deaths: <b>${NAMES[k[0]] || k[0]}</b> (${k[1]})` : 'No deaths yet.'}</p>
   <div class="btnrow"><button class="pri" id="xg">Characters</button><button id="xc">Controls</button><button id="bk">Back</button></div></div>`;
  $('#xg').onclick = gallery; $('#bk').onclick = home;
  $('#xc').onclick = () => { s.innerHTML = `<div class="panel"><h2>Controls</h2><p>Mouse / finger: look left and right (vents are at the sides).<br>Hold <b>F</b> or click: flashlight.<br>Hold <b>M</b>: Zayed mask (cameras off while worn).<br><b>C</b> / Tab: cameras · <b>1–9</b>: pick a camera.<br>Hold <b>W</b> on the Prize Corner camera: wind the music box.<br><b>Esc</b> / P: pause.</p><div class="btnrow"><button id="bk">Back</button></div></div>`; $('#bk').onclick = extras; };
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
  if (G.mode !== 'play' || G.scareWho) return; G.paused = on; if (on) { G.light = false; G.wind = false; setMask(false); Calls.stop(); pauseScreen(); } else { $('#screen').hidden = true; closeModal(); }
}
function pauseScreen() { const s = $('#screen'); s.hidden = false; s.className = 'screen'; s.innerHTML = `<div><h2>Paused</h2><p>${G.label} · ${(G.S.hour === 0 ? 12 : G.S.hour)} AM</p><button class="big" id="pr">Resume</button><button class="big alt" id="ps">Settings</button><button class="big alt" id="pm">Quit to menu</button></div>`; $('#pr').onclick = () => pause(false); $('#ps').onclick = () => settings(); $('#pm').onclick = () => { G.mode = 'title'; home(); }; }
function over(win) {
  Calls.stop(); const n = G.S.night; G.mode = win ? 'won' : 'dead'; $('#hud').hidden = true; $('#camUI').hidden = true; $('#maskOv').classList.remove('on'); $('#scareBar').hidden = true; $('#call').hidden = true; $('#staticOv').classList.remove('on'); document.body.classList.remove('playing');
  if (win) { stats.wins++; if (n <= 6 && !G.opts.label) stats.beaten = Math.max(stats.beaten, n); if (G.opts.daily) stats.daily[G.opts.daily] = true; } else { stats.deaths++; stats.killers[G.scareWho] = (stats.killers[G.scareWho] || 0) + 1; }
  saveStats();
  const s = $('#screen'); s.hidden = false; s.className = 'screen';
  s.innerHTML = win
    ? `<div><h1>6 AM</h1><h2>You survived ${G.label}</h2><p>${n === 6 && !G.opts.label ? 'The sun is up. The police at the door are no longer the worst thing in the building.' : 'The sun is up. The bodies are still. For now.'}</p>${n < 6 && !G.opts.label ? `<button class="big" id="nx">Night ${n + 1}</button>` : ''}<button class="big alt" id="rt">Replay</button><button class="big alt" id="tt">Menu</button></div>`
    : `<div><h2>${NAMES[G.scareWho] || 'Something'} got you</h2><p>You lasted until ${fmtTime(G.S.t)}.</p><p>${hintFor(G.scareWho)}</p><button class="big" id="rt">Try again</button><button class="big alt" id="tt">Menu</button></div>`;
  if ($('#nx')) $('#nx').onclick = () => startNight(n + 1); $('#rt').onclick = () => startNight(n, G.opts); $('#tt').onclick = home;
}
const hintFor = (w) => ({ ibrahim: 'The music box ran out. Keep winding it from the Prize Corner camera.', wSherbet: 'Withered Sherbet runs the hallway. The mask will not stop him: shine the light down the hall.', gelly: 'Gelly comes through the vents. Wear the mask until she leaves.' }[w] || 'Put the mask on when something is in the office.');

/* ---- input ---- */
addEventListener('pointermove', (e) => { const v = (e.clientX / innerWidth - 0.5) * 2 * 1.45 * (cfg.sens / 100) * (cfg.invert ? -1 : 1); G.yawT = Math.max(-1.45, Math.min(1.45, v)); });
canvas.addEventListener('pointerdown', (e) => { if (G.mode === 'play' && !G.paused && !G.cam && e.button !== 2) G.light = true; });
addEventListener('pointerup', () => { G.light = false; G.wind = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
const setMask = (v) => { if (G.mode !== 'play' || G.paused) return; if (v && G.cam) return; if (v !== G.mask) Snd.mask(v); G.mask = v; };
addEventListener('keydown', (e) => {
  if (e.repeat) return; const k = e.key.toLowerCase(); G.keys[k] = 1;
  if (k === 'escape' || k === 'p') { if (modalOpen()) { $('#mClose') ? $('#mClose').click() : closeModal(); } else if (G.mode === 'play') pause(!G.paused); return; }
  if (G.paused) return;
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
  if (G.mode !== 'play' || G.paused) return;
  if (G.cam) { G.cam = null; $('#camUI').hidden = true; $('#bCam').classList.remove('on'); Snd.click(); return; }
  if (G.mask) setMask(false);
  G.cam = G.camLast || 'stage'; $('#camUI').hidden = false; $('#bCam').classList.add('on'); selectCam(G.cam); Snd.click();
}
function selectCam(id) { G.cam = G.camLast = id; $('#camName').textContent = 'CAM ' + (camIds.indexOf(id) + 1) + ' · ' + CAMS[id].name; $('#bWind').hidden = id !== 'prize'; [...$('#camList').children].forEach((b) => b.classList.toggle('on', b.dataset.id === id)); Snd.click(); }
$('#bPause').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); pause(true); });
$('#callSkip').addEventListener('click', () => { Calls.stop(); });
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
let last = performance.now(), fpsN = 0, fpsT = 0, titleT = 3, titleBot = null, titleOn = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.1, (now - last) / 1000); last = now;
  const w = innerWidth, h = innerHeight, pr = renderer.getPixelRatio();
  if (G.sized !== w + 'x' + h + 'x' + pr) { G.sized = w + 'x' + h + 'x' + pr; renderer.setSize(w, h, false); player.aspect = camV.aspect = w / h; player.updateProjectionMatrix(); camV.updateProjectionMatrix(); }
  if (!G.ready) return;
  if (cfg.fps) { fpsN++; fpsT += dt; if (fpsT >= 0.5) { $('#fps').textContent = Math.round(fpsN / fpsT) + ' fps'; fpsN = 0; fpsT = 0; } }
  if (hintT > 0) { hintT -= dt * 1000; if (hintT <= 0) $('#hint').textContent = ''; }
  const live = G.mode === 'play' && G.S && !G.paused;
  let titleFlash = 0;
  if (G.mode === 'title' || G.mode === 'won' || G.mode === 'dead') { // a slow pan, and now and then something stands in the hall
    G.yaw = Math.sin(now / 4000) * 0.45; titleT -= dt;
    if (titleT <= 0 && !titleOn) { titleOn = 0.32; titleBot = WHO[Math.floor(Math.random() * 8)]; titleT = 5 + Math.random() * 5; }
    for (const x of WHO) bots[x].root.visible = false;
    if (titleOn > 0) { titleOn -= dt; const b = bots[titleBot]; b.root.visible = cfg.flashing || titleOn > 0.15; b.root.position.set(0, 0, -6.5); b.root.scale.setScalar(1); b.root.rotation.set(0, 0, 0); b.root.lookAt(0, 0, 0.6); animate(b, dt, 'idle'); titleFlash = cfg.flashing ? 1 : 0.4; }
  }
  if (live && !G.scareWho) {
    const S = G.S; stats.seconds += dt; G.yaw += (G.yawT - G.yaw) * Math.min(1, dt * 6);
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
    animate(b, dt, 'scare'); officeLight.intensity = cfg.flashing ? 3 + Math.random() * 12 : 8; $('#flashOv').style.opacity = cfg.flashing && G.scareT < 0.25 ? 0.8 - G.scareT * 3 : 0;
    if (G.scareT > 1.6) { officeLight.intensity = 7; b.root.visible = false; $('#flashOv').style.opacity = 0; over(false); }
  } else if (live || G.mode === 'title') { for (const x of WHO) if (!(G.mode === 'title' && x === titleBot)) animate(bots[x], dt * (live ? 1 : 0), 'idle'); }
  if (live && !G.scareWho) placeAll();
  // camera + lights
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
addEventListener('visibilitychange', () => { if (document.hidden && cfg.autopause && G.mode === 'play') pause(true); });
addEventListener('blur', () => { if (cfg.autopause && G.mode === 'play' && !G.scareWho) pause(true); });
canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); toast('Graphics context lost. Reload the page.'); });
setInterval(() => { const sc = G.mode === 'play' ? 'game' : G.mode; Online.beat(sc, G.S && G.mode === 'play' ? G.S.night : 0); }, 30000);

/* ---- boot: the loading page ---- */
const TIPS = ['The mask makes you look like one of them. It does not fool the Falcon.', 'Shine the flashlight down the hall: the old Falcon will turn back.', 'Wind the music box from the Prize Corner camera, and do not stop.', 'You cannot use the cameras while you wear the mask.', 'One soul. Four bodies. They do not want to be split.', 'Bidoof will not hurt you. He will only break your flashlight.', 'Qerh Cooperations thanks you for your service.'];
async function boot() {
  $('#ldTip').textContent = TIPS[Math.floor(Math.random() * TIPS.length)]; applyQuality(); document.body.classList.toggle('noflash', !cfg.flashing); $('#fps').hidden = !cfg.fps; player.fov = camV.fov = cfg.fov;
  const bar = (p, m) => { $('#ldBar').style.width = Math.round(p * 100) + '%'; if (m) $('#ldMsg').textContent = m; };
  const nap = () => new Promise((r) => setTimeout(r, 25));
  bar(0.05, 'Building the pizzeria…'); await nap();
  let i = 0; for (const w of WHO) { bar(0.1 + (i++ / WHO.length) * 0.6, 'Assembling ' + NAMES[w] + '…'); makeBot(w); await nap(); }
  G.ready = true; bar(0.72, 'Loading faces…');
  await Promise.all(['zayed', 'bubbles', 'taffy', 'sherbet'].map((n) => new Promise((res) => { const t = loadFace(n); const t0 = Date.now(); (function poll() { if ((t.image && t.image.complete !== false && t.image.width) || Date.now() - t0 > 7000) res(); else setTimeout(poll, 60); })(); })));
  bar(0.9, 'Warming up the lights…'); for (const x of WHO) bots[x].root.visible = false; renderer.render(scene, player); await nap();
  bar(1, 'Ready.');
  if (!renderer.getContext()) { $('#ldWarn').hidden = false; $('#ldWarn').textContent = 'Your browser could not start 3D graphics.'; return; }
  const go = $('#ldGo'); go.hidden = false; go.focus();
  const start = () => { startAudio(); if (matchMedia('(pointer:coarse)').matches) toggleFull(); $('#loading').classList.add('out'); setTimeout(() => $('#loading').remove(), 700); home(); Online.news().then((a) => { if (a) { newsItem = a; if (G.mode === 'title' && !modalOpen()) home(); } }); };
  go.onclick = start;
}
requestAnimationFrame(frame);
boot();
window.FNAZ2 = { G, startNight, bots, step, placeAll, scene, camV, player, home, settings, pause, cfg, stats };
