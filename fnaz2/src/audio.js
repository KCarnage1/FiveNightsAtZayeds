/* Small procedural sound kit (no files needed): hum, footsteps, vent bangs, the music box, breathing, jumpscare. */
let ctx, master, hum, boxTimer = 0;
const ok = () => ctx && ctx.state !== 'closed';
export function start() {
  if (ctx) { ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  master = ctx.createGain(); master.gain.value = 0.7; master.connect(ctx.destination);
  const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.value = 55; f.type = 'lowpass'; f.frequency.value = 180; g.gain.value = 0.05; o.connect(f).connect(g).connect(master); o.start(); hum = g;
}
const noise = (dur) => { const b = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; const s = ctx.createBufferSource(); s.buffer = b; return s; };
function tone(f, dur, type = 'sine', vol = 0.15, when = 0, slide) { if (!ok()) return; const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + when; o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur); o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.05); }
function thump(freq, dur, vol, pan = 0) { if (!ok()) return; const s = noise(dur), f = ctx.createBiquadFilter(), g = ctx.createGain(), p = ctx.createStereoPanner ? ctx.createStereoPanner() : null; f.type = 'lowpass'; f.frequency.value = freq; g.gain.setValueAtTime(vol, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur); if (p) { p.pan.value = pan; s.connect(f).connect(g).connect(p).connect(master); } else s.connect(f).connect(g).connect(master); s.start(); }
export const S = {
  step(pan = 0) { thump(260, .22, .5, pan); },
  vent(pan = 0) { thump(420, .35, .55, pan); tone(120, .3, 'square', .08, 0, 70); },
  clang(pan = 0) { thump(900, .5, .6, pan); tone(310, .5, 'square', .06, 0, 180); },
  click() { tone(900, .05, 'square', .06); },
  mask(on) { thump(on ? 500 : 300, .25, .4); },
  breath(t) { if (!ok()) return; const s = noise(.9), f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = 'bandpass'; f.frequency.value = 700; g.gain.setValueAtTime(0.0001, ctx.currentTime); g.gain.linearRampToValueAtTime(.18, ctx.currentTime + .4); g.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + .9); s.connect(f).connect(g).connect(master); s.start(); },
  laugh() { [0, .22, .44, .66].forEach((w) => tone(520, .16, 'triangle', .12, w, 380)); },
  scare() { if (!ok()) return; const s = noise(1.2), g = ctx.createGain(); g.gain.setValueAtTime(.9, ctx.currentTime); g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + 1.2); s.connect(g).connect(master); s.start(); tone(90, 1.1, 'sawtooth', .4, 0, 40); tone(1400, 1, 'square', .2, 0, 300); },
  chime() { [0, .18, .36].forEach((w, i) => tone(880 * [1, 1.25, 1.5][i], .9, 'sine', .18, w)); },
  /* the music box: plays a short tune; slower and more out of tune as it runs down (box 0..100) */
  box(level, dt) {
    if (!ok()) return; boxTimer -= dt; if (boxTimer > 0 || level <= 0) return;
    const notes = [523, 659, 784, 659, 523, 392, 440, 523]; this._n = ((this._n || 0) + 1) % notes.length;
    const detune = (1 - Math.min(1, level / 60)) * 40;
    tone(notes[this._n] + (Math.random() - .5) * detune, .5, 'triangle', .1);
    boxTimer = 0.28 + (1 - Math.min(1, level / 80)) * .5;
  },
  hum(v) { if (hum) hum.gain.value = v; }
};
