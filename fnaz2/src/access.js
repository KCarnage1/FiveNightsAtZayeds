/* Accessibility and onboarding for the HUD: text size, high contrast, shape cues, sound captions and the first-night tutorial.
 * It touches only the DOM it owns plus a few body classes; the game state is read, never written. */
import { cfg, stats, saveStats } from './settings.js';

const $ = (s) => document.querySelector(s);
const coarse = typeof matchMedia === 'function' && matchMedia('(pointer:coarse)').matches;

/* ---- display options: text size, high contrast, colour-blind cues ---- */
export function applyDisplay() {
  document.documentElement.style.setProperty('--tx', String(Math.max(100, Math.min(160, +cfg.textSize || 100)) / 100));
  document.body.classList.toggle('hc', !!cfg.contrast);
  document.body.classList.toggle('cues', !!cfg.cues);
}

/* ---- sound captions: a short line with an arrow for where the sound is (left, right, ahead) ---- */
const ARROW = { L: '←', R: '→', C: '↑' };
const LAST = {};
export function caption(text, side = 'C', ms = 3200) {
  if (!cfg.captions) return;
  const box = $('#caps'); if (!box) return;
  const key = text + side, now = performance.now(); if (LAST[key] && now - LAST[key] < 900) return; LAST[key] = now;
  while (box.children.length >= 3) box.firstChild.remove();
  const el = document.createElement('div'); el.className = 'cap ' + side;
  el.innerHTML = `<span class="arr" aria-hidden="true">${ARROW[side] || ''}</span><span class="ct"></span>`; el.lastChild.textContent = text;
  box.appendChild(el); setTimeout(() => el.remove(), ms);
}
/* the side a sound comes from, as seen from the player's chair */
export const sideOf = (n) => (n === 'ventL' || n === 'partyL' || n === 'prize' || n === 'kids' ? 'L' : n === 'ventR' || n === 'partyR' || n === 'game' ? 'R' : 'C');
export function captionFx(f) {
  if (f.type === 'move') { if (f.to === 'hall') caption('Footsteps in the hall', 'C'); else if (f.to === 'ceiling') caption('Scraping above', 'C'); else if (f.to.startsWith('vent')) caption('Vent clank', sideOf(f.to)); }
  else if (f.type === 'enter') caption(f.from.startsWith('vent') ? 'Loud clang from the vent' : 'Footsteps at the door', sideOf(f.from));
  else if (f.type === 'run') caption('Fast footsteps in the hall', 'C');
  else if (f.type === 'boxout') caption('The music box has stopped', 'L');
}
let boxLow = false;
export function captionBox(box) { const low = box < 25; if (low && !boxLow) caption('Music box playing low', 'L'); boxLow = low; }

/* ---- danger and battery cues that do not rely on colour: numbers, the word LOW, a striped fill and a warning badge ---- */
export function cueHud(S, who) {
  const lo = S.battery < 25, bl = S.box < 25;
  $('#fPct').textContent = Math.round(S.battery) + '%' + (lo ? ' LOW' : ''); $('#bPct').textContent = Math.round(S.box) + '%' + (bl ? ' LOW' : '');
  $('#mFlash').classList.toggle('low', lo); $('#mBox').classList.toggle('low', bl);
  const d = $('#danger'); d.hidden = !who; if (who) d.lastChild.textContent = who;
}

/* ---- the first-night tutorial: teaches by doing, ticks itself off, never repeats ---- */
const STEPS = [
  { id: 'look', t: 'Look at the vents', how: () => (coarse ? 'Touch the far left or far right of the screen to look into a vent.' : 'Move the mouse to the far left or right, or hold A or D, to look into a vent.') },
  { id: 'seal', t: 'Close a vent', how: () => (coarse ? 'Tap SEAL L or SEAL R to close that vent for a few seconds. Then it needs time to recharge.' : 'Press Q to seal the left vent, or E for the right. A sealed vent keeps everything out for a few seconds, then needs time to recharge.') },
  { id: 'light', t: 'Use the flashlight', how: () => (coarse ? 'Hold the LIGHT button to shine down the hall.' : 'Hold F, or click and hold, to shine the flashlight.') },
  { id: 'mask', t: 'Wear the mask', how: () => (coarse ? 'Something got in. Hold the MASK button until it leaves.' : 'Something got in. Hold M until it leaves.') },
  { id: 'cam', t: 'Open the cameras', how: () => (coarse ? 'Tap CAMERAS to see the rooms.' : 'Press C to see the rooms.') },
  { id: 'wind', t: 'Wind the music box', how: () => (coarse ? 'In the cameras, pick the Prize Corner, then hold the wind button.' : 'In the cameras, pick the Prize Corner, then hold W.') }
];
const T = { on: false, t: 0, entered: false, fin: 0, cur: undefined, shown: false };
const done = (id) => !!stats.tutSteps[id];
function render() {
  const el = $('#tut'), cur = T.cur, n = STEPS.filter((s) => done(s.id)).length;
  el.innerHTML = `<div class="th"><b>Tutorial <span>${n} of ${STEPS.length}</span></b><button class="sm" id="tutSkip">Skip</button></div>`
    + `<ul>${STEPS.map((s) => `<li class="${done(s.id) ? 'ok' : s === cur ? 'now' : ''}"><i aria-hidden="true">${done(s.id) ? '\u2713' : s === cur ? '\u25B6' : '\u25CB'}</i><span>${s.t}${done(s.id) ? ' (done)' : ''}</span></li>`).join('')}</ul>`
    + `<p>${cur ? `<b class="ttl">${cur.t}.</b> ${cur.how()}` : n === STEPS.length ? 'All done. Good luck tonight.' : 'Keep going. The next tip shows up when you need it.'}</p>`;
  $('#tutSkip').onclick = finish; $('#tutSkip').setAttribute('aria-label', 'Skip the tutorial');
}
function finish() { T.on = false; stats.tutorial = true; saveStats(); $('#tut').hidden = true; }
export function tutStart(G) {
  T.on = false; $('#tut').hidden = true; const S = G.S, o = G.opts || {};
  if (!cfg.tutorial || stats.tutorial || !S || S.night !== 1 || o.label || o.daily || o.coop || o.custom) return;
  Object.assign(T, { on: true, t: 0, entered: false, fin: 0, cur: undefined, shown: false });
}
export const tutEnter = () => { T.entered = true; };
export function tutTick(G, dt) {
  if (!T.on) return;
  T.t += dt; const el = $('#tut');
  const mark = (id) => { if (!done(id)) { stats.tutSteps[id] = true; saveStats(); T.cur = undefined; } };
  if (T.t > 3.5 && Math.abs(G.yaw) > 0.9) mark('look');
  if (G.S && (G.S.seal.ventL > 0 || G.S.seal.ventR > 0)) mark('seal');
  if (G.light && (done('look') || T.t > 12)) mark('light');
  if (T.entered && G.mask) mark('mask');
  if (G.cam) mark('cam');
  if (G.cam && G.wind) mark('wind');
  const want = (s) => !done(s.id) && (s.id === 'look' ? T.t > 3.5 : s.id === 'seal' ? done('look') || T.t > 8 : s.id === 'light' ? done('seal') || T.t > 12 : s.id === 'mask' ? T.entered : s.id === 'cam' ? done('light') || T.t > 25 : done('cam'));
  const next = (T.entered && want(STEPS[2]) ? STEPS[2] : STEPS.find(want)) || null;
  if (next !== T.cur) { T.cur = next; render(); }
  el.hidden = T.t <= 3.5 || !!G.paused || !!G.scareWho;
  const rest = STEPS.filter((s) => !done(s.id));
  if (!rest.length || (rest.length === 1 && rest[0].id === 'mask' && T.t > 90)) { if (!T.fin) render(); T.fin += dt; if (T.fin > 4) finish(); }
}
