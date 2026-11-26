/* Procedural sound kit (no audio files). Everything is built from Web Audio nodes. Full story notes: docs/sound-design.md.
 *
 * Buses: sfxBus + musicBus -> master -> gentle limiter (DynamicsCompressor) -> output. Volumes come from settings (master/sfx/music).
 * Cheap by design: one shared noise buffer, a handful of looping voices built once, one-shots capped at MAX_VOICES, no per-frame allocation.
 *
 * SOUND LIST (trigger -> meaning)
 *  room tone   start(); S.hum(v)      Two saws 0.35 Hz apart through a low-pass plus dark noise: the empty restaurant breathing. Slow beating = unease.
 *  vent clank  S.frame (random 14-34s) Metal clank panned hard left or right: something shifts in ventL or ventR. Teaches the player to listen to both vents.
 *  scrape      S.frame (random 9-26s)  Distant filtered scrape sweep, panned: far-off movement, usually nothing, sometimes not.
 *  vent move   S.move(vent/ceiling), S.vent  Clank plus scrape on the vent's side: a body crawling in the duct.
 *  footsteps   S.move(hall...), S.step  Two soft steps; farther nodes are quieter and duller (low-pass + gain): something walks the hall.
 *  clang       S.clang                  Heavy metal hit when something bursts out of a vent into the office.
 *  flashlight  S.frame(light) / S.click  Click on/off, faint 100 Hz buzz while lit; below 25% battery the buzz stutters and dips: it is dying.
 *  mask        S.mask(on), S.breath     Rubber thud, then slow filtered breathing (alternating inhale/exhale pitch). Safety, and claustrophobia.
 *  heartbeat   S.frame(inside)          Lub-dub that speeds up and swells while any animatronic stands in the office: you are being hunted.
 *  phone       S.ring                   Line static crackle, then two-tone ring bursts, then the call (Calls) starts: the voice on the line.
 *  music box   S.box(level, dt)         Minor-key tune, sine plus octave partial. As it winds down: slower, flatter, more detuned. Silence = danger.
 *  laugh/chime S.laugh, S.chime         Bidoof's mocking laugh; bell for pickups, boxout and wins.
 *  jumpscare   S.scare                  Layered: noise burst, 3 detuned saw screams, low thump. Peak kept under about -3 dBFS; with cfg.flashing
 *                                       off the attack is softened and the level reduced (comfort mode).
 */
import { cfg, onChange } from './settings.js';
let ctx, master, sfxBus, musicBus, hum, buzz, nbuf, boxTimer = 0, voices = 0, ventT = 12, scrapeT = 8, beatT = 0, buzzOn = false, flick = 0, boxN = 0;
const MAX_VOICES = 24;
const ok = () => ctx && ctx.state !== 'closed';
const rnd = (a, b) => a + Math.random() * (b - a);
/* distance of each map node from the office, 0 (here) .. 1 (far away) */
const DIST = { office: 0, hall: 0.25, ventL: 0.3, ventR: 0.3, ceiling: 0.4, partyL: 0.6, partyR: 0.6, parts: 0.7, kids: 0.75, game: 0.8, prize: 0.85, main: 0.9, stage: 1 };
export function start() {
  if (ctx) { ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  master = ctx.createGain(); sfxBus = ctx.createGain(); musicBus = ctx.createGain(); sfxBus.connect(master); musicBus.connect(master);
  const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -8; lim.knee.value = 8; lim.ratio.value = 12; lim.attack.value = 0.004; lim.release.value = 0.25;
  master.connect(lim); lim.connect(ctx.destination); applyVol(); onChange(applyVol);
  nbuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const d = nbuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  /* room tone: two slightly detuned saws (beating 0.35 Hz) + dark looping noise */
  const g = ctx.createGain(), f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 180; g.gain.value = 0.05; f.connect(g).connect(sfxBus);
  [55, 55.35].forEach((fr) => { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = fr; o.connect(f); o.start(); });
  const n = ctx.createBufferSource(), nf = ctx.createBiquadFilter(), ng = ctx.createGain(); n.buffer = nbuf; n.loop = true; nf.type = 'lowpass'; nf.frequency.value = 260; ng.gain.value = 0.5; n.connect(nf).connect(ng).connect(g); n.start();
  hum = g;
  /* flashlight buzz: quiet low-passed square at 100 Hz, gain driven from S.frame */
  const bo = ctx.createOscillator(), bf = ctx.createBiquadFilter(), bg = ctx.createGain(); bo.type = 'square'; bo.frequency.value = 100; bf.type = 'lowpass'; bf.frequency.value = 700; bg.gain.value = 0; bo.connect(bf).connect(bg).connect(sfxBus); bo.start(); buzz = bg;
}
function applyVol() { if (!master) return; master.gain.value = cfg.master / 100 * 0.8; sfxBus.gain.value = cfg.sfx / 100; musicBus.gain.value = cfg.music / 100; }
/* voice cap: returns false when too many one-shots are alive */
const take = () => { if (voices >= MAX_VOICES) return false; voices++; return true; };
const noiseSrc = (t) => { const s = ctx.createBufferSource(); s.buffer = nbuf; s.start(t, Math.random() * 1.2); return s; };
const release = (src) => { src.onended = () => { voices--; }; };
function tone(f, dur, type = 'sine', vol = 0.15, when = 0, slide, bus, detune = 0, pan = 0) {
  if (!ok() || !take()) return;
  const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + when; o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur); if (detune) o.detune.value = detune;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
  let out = g; if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); out = p; }
  o.connect(g); out.connect(bus || sfxBus); o.start(t); o.stop(t + dur + 0.05); release(o);
}
/* filtered noise hit; q is the filter type */
function thump(freq, dur, vol, pan = 0, when = 0, type = 'lowpass') {
  if (!ok() || !take()) return;
  const t = ctx.currentTime + when, s = noiseSrc(t), f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = type; f.frequency.value = freq; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.stop(t + dur + 0.02); s.connect(f); f.connect(g);
  if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); p.connect(sfxBus); } else g.connect(sfxBus);
  release(s);
}
/* a footstep at distance 0..1: farther = duller and quieter */
function footstep(pan, dist, when = 0) { thump((1500 * (1 - dist) + 160) * rnd(0.85, 1.15), 0.2, 0.5 * (1 - dist * 0.75) * rnd(0.85, 1), pan * (0.4 + dist * 0.4), when); }
function scrape(pan, vol = 0.07) {
  if (!ok() || !take()) return;
  const t = ctx.currentTime, d = rnd(0.7, 1.3), s = noiseSrc(t), f = ctx.createBiquadFilter(), g = ctx.createGain(), p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  f.type = 'bandpass'; f.Q.value = 6; f.frequency.setValueAtTime(rnd(500, 800), t); f.frequency.exponentialRampToValueAtTime(rnd(1400, 2200), t + d);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + d * 0.4); g.gain.linearRampToValueAtTime(0.0001, t + d); s.stop(t + d + 0.05);
  s.connect(f); f.connect(g); if (p) { p.pan.value = pan; g.connect(p); p.connect(sfxBus); } else g.connect(sfxBus); release(s);
}
function clank(pan, vol = 0.35) { thump(500, 0.3, vol, pan); tone(310, 0.35, 'square', vol * 0.12, 0, 190, undefined, 0, pan); tone(497, 0.25, 'sine', vol * 0.2, 0.01, 400, undefined, 0, pan); }
export const S = {
  step(pan = 0) { footstep(pan, 0.1); footstep(pan, 0.1, 0.34); },
  /* something moved to map node `to`; vents and ceiling scrape, everything else walks (quieter/duller when far) */
  move(to, pan = 0) {
    if (to.startsWith('vent') || to === 'ceiling') { scrape(pan || (Math.random() < 0.5 ? -1 : 1), 0.12); clank(pan, 0.4); return; }
    const d = DIST[to] === undefined ? 0.8 : DIST[to]; footstep(pan, d); footstep(pan, d, 0.36);
  },
  vent(pan = 0) { clank(pan, 0.55); scrape(pan, 0.1); },
  clang(pan = 0) { thump(900, 0.5, 0.6, pan); tone(310, 0.5, 'square', 0.06, 0, 180, undefined, 0, pan); tone(233, 0.6, 'sine', 0.1, 0.02, 150, undefined, 0, pan); },
  click() { tone(900, 0.05, 'square', 0.06); },
  mask(on) { thump(on ? 500 : 300, 0.25, 0.4); },
  /* mask breathing: alternate a brighter inhale and a darker, longer exhale */
  breath() {
    if (!ok() || !take()) return; this._in = !this._in; const t = ctx.currentTime, s = noiseSrc(t), f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = 'bandpass'; f.Q.value = 0.8; f.frequency.value = this._in ? 900 : 520; g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(this._in ? 0.16 : 0.2, t + 0.4); g.gain.linearRampToValueAtTime(0.0001, t + 0.9);
    s.stop(t + 0.95); s.connect(f); f.connect(g); g.connect(sfxBus); release(s);
  },
  laugh() { [0, 0.22, 0.44, 0.66].forEach((w) => tone(520, 0.16, 'triangle', 0.12, w, 380)); },
  /* layered jumpscare: noise burst + detuned scream + low thump. Sum of layer peaks is held near 0.65 so the limited output stays under about -3 dBFS. */
  scare() {
    if (!ok()) return; const soft = !cfg.flashing, k = soft ? 0.7 : 1, a = soft ? 0.06 : 0.012, t = ctx.currentTime;
    if (take()) {
      const s = noiseSrc(t), f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = 0.6;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.22 * k, t + a); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2); s.stop(t + 1.25); s.connect(f); f.connect(g); g.connect(sfxBus); release(s);
    }
    [610, 618, 587].forEach((fr, i) => {
      if (!take()) return;
      const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(fr, t); o.frequency.exponentialRampToValueAtTime(fr * 1.6, t + 0.5); o.frequency.exponentialRampToValueAtTime(fr * 1.3, t + 1.2); o.detune.value = (i - 1) * 35;
      f.type = 'lowpass'; f.frequency.value = 2600; g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.07 * k, t + a * 2); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
      o.connect(f); f.connect(g); g.connect(sfxBus); o.start(t); o.stop(t + 1.25); release(o);
    });
    tone(80, 1.1, 'sine', 0.3 * k, 0, 30);
  },
  chime() { [0, 0.18, 0.36].forEach((w, i) => tone(880 * [1, 1.25, 1.5][i], 0.9, 'sine', 0.18, w)); },
  /* the music box: an A-minor lullaby. Wound down it gets slower, flatter and more out of tune (box 0..100). */
  box(level, dt) {
    if (!ok()) return; boxTimer -= dt; if (boxTimer > 0 || level <= 0) return;
    const notes = [440, 523, 659, 587, 523, 494, 440, 392, 440, 523, 659, 784, 659, 587, 523, 494];
    boxN = (boxN + 1) % notes.length; const low = 1 - Math.min(1, level / 70);
    const cents = -low * 80 + (Math.random() - 0.5) * low * 90, f = notes[boxN];
    tone(f, 0.7, 'sine', 0.1, 0, undefined, musicBus, cents); tone(f * 2, 0.35, 'sine', 0.035, 0, undefined, musicBus, cents * 1.3);
    boxTimer = 0.3 + low * 0.55 + (boxN % 8 === 7 ? 0.25 : 0);
  },
  hum(v) { if (hum) hum.gain.value = v; },
  /* phone: line static first, then the double ring (the call itself starts ~1.8 s later, see main.js) */
  ring() {
    if (!ok()) return; thump(3500, 0.5, 0.05, 0, 0, 'highpass'); thump(2200, 0.35, 0.04, 0, 0.1, 'bandpass');
    [0.5, 0.95, 1.4].forEach((w) => { tone(1100, 0.14, 'square', 0.06, w); tone(880, 0.14, 'square', 0.06, w + 0.15); });
  },
  /* per-frame ambience: flashlight buzz and flicker, vent/scrape cues, heartbeat. No allocation. pos = S.pos (who is where). */
  frame(dt, light, battery, mask, pos) {
    if (!ok() || !buzz) return;
    const low = battery < 25 && battery > 0;
    if (light !== buzzOn) { buzzOn = light; this.click(); }
    let target = light ? 0.018 : 0;
    if (light && low) { flick -= dt; if (flick <= 0) { flick = rnd(0.05, 0.4); this._dip = Math.random() < 0.55; } if (this._dip) target = 0; else target *= 1.6; }
    buzz.gain.value += (target - buzz.gain.value) * Math.min(1, dt * 40);
    ventT -= dt; if (ventT <= 0) { ventT = rnd(14, 34); clank(Math.random() < 0.5 ? -0.9 : 0.9, 0.12); }
    scrapeT -= dt; if (scrapeT <= 0) { scrapeT = rnd(9, 26); scrape(Math.random() < 0.5 ? -0.8 : 0.8, 0.04); }
    let inside = false; if (pos) for (const k in pos) if (pos[k] === 'office') { inside = true; break; }
    if (inside) { beatT -= dt; if (beatT <= 0) { const v = mask ? 0.35 : 0.5; tone(62, 0.16, 'sine', v, 0, 38); tone(55, 0.2, 'sine', v * 0.7, 0.2, 34); beatT = mask ? 0.85 : 0.65; } } else beatT = 0;
  }
};
