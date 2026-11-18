/* ================================================================
   FIVE NIGHTS AT ZAYED'S: sound
   Procedural Web Audio for effects; real recordings for voices.
   Every one-shot is scheduled at ctx.currentTime so it plays the
   moment the game event happens.
   ================================================================ */
const Sound = (() => {
  'use strict';
  let ctx = null, master = null, volume = 0.9;
  let noiseBuf = null, amb = null, buzz = null, stat = null, music = null;

  function init() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  function unlock() { init(); if (ctx && ctx.state !== 'running') ctx.resume().catch(() => {}); }
  const now = () => ctx.currentTime;
  const ok = () => !!ctx;

  function out(pan = 0) {
    if (!ctx.createStereoPanner) return master;
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    p.connect(master);
    return p;
  }
  function env(g, t, a, d, peak) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  function noise(t, dur, vol, freq, q, pan, type = 'bandpass') {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain();
    env(g, t, 0.005, dur, vol);
    s.connect(f); f.connect(g); g.connect(out(pan));
    s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  function tone(t, freq, dur, vol, type = 'sine', pan = 0, slide) {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    const g = ctx.createGain();
    env(g, t, 0.01, dur, vol);
    o.connect(g); g.connect(out(pan));
    o.start(t); o.stop(t + dur + 0.05);
  }

  /* ------------------------------------------------------------ loops */
  function ambient(on) {
    if (!ok()) return;
    if (on && !amb) {
      // fan hum + low building drone
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380;
      const g = ctx.createGain(); g.gain.value = 0.05;
      s.connect(f); f.connect(g); g.connect(master); s.start();
      const o = ctx.createOscillator(); o.frequency.value = 58; o.type = 'sine';
      const og = ctx.createGain(); og.gain.value = 0.035;
      o.connect(og); og.connect(master); o.start();
      amb = { s, o };
    } else if (!on && amb) {
      try { amb.s.stop(); amb.o.stop(); } catch (e) {}
      amb = null;
    }
  }

  function lightBuzz(on) {
    if (!ok()) return;
    if (on && !buzz) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 120;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 3;
      const g = ctx.createGain(); g.gain.value = 0.045;
      o.connect(f); f.connect(g); g.connect(master); o.start();
      buzz = o;
    } else if (!on && buzz) {
      try { buzz.stop(); } catch (e) {}
      buzz = null;
    }
  }

  function staticOn(vol = 0.3) {
    if (!ok()) return;
    if (!stat) {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1200;
      const g = ctx.createGain();
      s.connect(f); f.connect(g); g.connect(master); s.start();
      stat = { s, g };
    }
    stat.g.gain.setTargetAtTime(vol * 0.25, now(), 0.02);
  }
  function staticOff() {
    if (!stat) return;
    try { stat.s.stop(now() + 0.05); } catch (e) {}
    stat = null;
  }

  // Power-out tune: an original "shawarma lullaby" on a music box.
  function musicBox(on) {
    if (!ok()) return;
    if (!on) { if (music) clearInterval(music); music = null; return; }
    if (music) return;
    const notes = [659, 784, 880, 784, 659, 587, 523, 587, 659, 659, 587, 523, 494, 523, 587, 0];
    let i = 0;
    music = setInterval(() => {
      const n = notes[i++ % notes.length];
      if (n) { tone(now(), n, 0.35, 0.09, 'triangle', -0.6); tone(now(), n * 2, 0.15, 0.03, 'sine', -0.6); }
    }, 260);
  }

  function stopAll() { lightBuzz(false); staticOff(); musicBox(false); }

  /* ------------------------------------------------------------ one-shots */
  const fx = {
    footstep(pan = 0, vol = 0.15) { if (!ok()) return; const t = now(); noise(t, 0.12, vol, 180, 1.2, pan); tone(t, 70, 0.1, vol * 0.6, 'sine', pan, 40); },
    steps(pan = 0, n = 3, vol = 0.15) { if (!ok()) return; for (let i = 0; i < n; i++) { const t = now() + i * 0.32; noise(t, 0.12, vol, 180, 1.2, pan); tone(t, 70, 0.1, vol * 0.6, 'sine', pan, 40); } },
    knock(pan = 0) { if (!ok()) return; for (let i = 0; i < 3; i++) noise(now() + i * 0.19, 0.08, 0.3, 500, 2, pan); },
    run() { if (!ok()) return; for (let i = 0; i < 9; i++) noise(now() + i * 0.12, 0.08, 0.25 + i * 0.03, 220, 1.5, -0.8); },
    bang() { if (!ok()) return; for (let i = 0; i < 3; i++) { const t = now() + i * 0.16; noise(t, 0.25, 0.6, 140, 0.8, -0.8); tone(t, 90, 0.2, 0.3, 'square', -0.8, 50); } },
    doorSlam() { if (!ok()) return; const t = now(); noise(t, 0.35, 0.45, 260, 0.7); tone(t, 110, 0.25, 0.25, 'square', 0, 45); },
    lightClick() { if (!ok()) return; tone(now(), 1800, 0.03, 0.08, 'square'); },
    camUp() { if (!ok()) return; noise(now(), 0.25, 0.12, 3000, 0.6); tone(now(), 400, 0.15, 0.05, 'sine', 0, 900); },
    camDown() { if (!ok()) return; noise(now(), 0.2, 0.1, 2000, 0.6); tone(now(), 700, 0.12, 0.05, 'sine', 0, 300); },
    camSwitch() { if (!ok()) return; tone(now(), 1200, 0.04, 0.06, 'square'); noise(now(), 0.15, 0.12, 4000, 0.5); },
    laugh(vol = 0.1, pan = 0) { // goofy "hoo-hoo-hoo"
      if (!ok()) return;
      for (let i = 0; i < 5; i++) tone(now() + i * 0.14, 260 - i * 18, 0.12, vol, 'sawtooth', pan, 180 - i * 10);
    },
    breathing() { if (!ok()) return; noise(now(), 1.1, 0.07, 700, 0.5); noise(now() + 1.3, 1.1, 0.06, 600, 0.5); },
    jumpscare() {
      if (!ok()) return;
      const t = now();
      noise(t, 1.4, 0.9, 1500, 0.3);
      tone(t, 420, 1.3, 0.35, 'sawtooth', 0, 160);
      tone(t, 610, 1.3, 0.25, 'square', 0, 220);
    },
    chime() { // 6 AM bells
      if (!ok()) return;
      [523, 659, 784, 1047, 784, 1047].forEach((f, i) => { tone(now() + i * 0.35, f, 1.2, 0.18, 'triangle'); tone(now() + i * 0.35, f * 2, 0.6, 0.04); });
      setTimeout(() => cheer(), 2200);
    },
    powerOut() { if (!ok()) return; tone(now(), 220, 1.6, 0.25, 'sawtooth', 0, 40); noise(now(), 0.6, 0.3, 300, 0.7); },
    honk() { if (!ok()) return; const t = now(); tone(t, 330, 0.18, 0.3, 'square', 0, 280); tone(t + 0.2, 300, 0.25, 0.3, 'square', 0, 240); },
    clatter(vol = 0.15) { if (!ok()) return; for (let i = 0; i < 6; i++) { const t = now() + Math.random() * 0.8; tone(t, 1500 + Math.random() * 2500, 0.25, vol * 0.5, 'triangle'); noise(t, 0.1, vol, 4000, 2); } },
    siren() { if (!ok()) return; const t = now(); for (let i = 0; i < 6; i++) tone(t + i * 0.5, i % 2 ? 700 : 950, 0.45, 0.06, 'sine'); },
    achieve() { if (!ok()) return; const t = now(); tone(t, 660, 0.12, 0.12, 'square'); tone(t + 0.12, 880, 0.12, 0.12, 'square'); tone(t + 0.24, 1320, 0.25, 0.12, 'square'); },
    tick() { if (!ok()) return; tone(now(), 900, 0.05, 0.05, 'square'); },
    ring() { if (!ok()) return; for (let r = 0; r < 2; r++) for (let i = 0; i < 12; i++) tone(now() + r * 0.9 + i * 0.05, i % 2 ? 1300 : 1600, 0.05, 0.06, 'square'); },
    whisper() { if (!ok()) return; noise(now(), 1.8, 0.12, 2400, 4); tone(now(), 90, 1.8, 0.1, 'sine', 0, 70); }
  };

  function cheer() {
    if (!ok()) return;
    for (let i = 0; i < 4; i++) noise(now() + i * 0.2, 1.4, 0.12, 1400 + i * 300, 0.6);
    for (let i = 0; i < 8; i++) tone(now() + Math.random() * 1.5, 700 + Math.random() * 600, 0.2, 0.04, 'triangle');
  }

  // v = 0..1 master volume for effects, voices and videos
  function setVolume(v) {
    volume = v * 0.9;
    if (master) master.gain.setTargetAtTime(volume, now(), 0.02);
    Voice.setVolume(v);
  }

  return Object.assign({ init, unlock, ambient, lightBuzz, staticOn, staticOff, musicBox, stopAll, setVolume, get running() { return !!ctx && ctx.state === 'running'; } }, fx);
})();

/* Recorded voice lines. Each robot is assigned two of the recordings in assets/voice
   (captions are what the clips say). Each speaker has its own channel, so the phone call
   and the robots never cut each other off, and a robot never talks over itself. */
const Voice = (() => {
  'use strict';
  const V = 'assets/voice/';
  const LINES = {
    camel:  [['bonnie2', "I'm gonna get you!"], ['foxy4', 'Leave no one alive!']],
    cat:    [['bonnie1', 'Yoo-hoo!'], ['bonnie4', 'Open wide!']],
    goat:   [['foxy3', "I'm gonna get your ass."], ['bonnie3', '']], // bonnie3 is unclear on the recording, so no caption
    falcon: [['foxy1', 'Here I come, San Francisco!'], ['foxy2', 'Arrrr!']]
  };
  /* "Authentic Zayed" (Settings, on by default): every robot uses these recordings instead of the stock clips.
     Each plays at random, never the same one twice in a row. [file, caption] */
  const AUTHENTIC = [
    ['zayed1', 'Yoo-hoo!'], ['zayed2', "I'm gonna get you!"], ['zayed3', "I'm gonna get your ass!"], ['zayed4', 'Jerona!'],
    ['zayed5', 'Qerh!'], ['zayed6', 'Open wide!'], ['zayed7', 'Leave no one alive!'], ['zayed8', 'Here I come, San Francisco!']
  ];
  // Lines that belong to one robot only. The Falcon sometimes greets you with this one, on top of whatever else he says.
  const OWN = { falcon: [['falcon_guard', 'It be the night guard!']] };
  let authentic = true;
  const chan = {};   // speaker -> Audio
  const base = {};   // speaker -> clip volume before master
  const last = {};   // speaker -> last line index, so the same line never plays twice in a row
  let vol = 1;

  function play(who, file, v) {
    stop(who);
    const a = new Audio(V + file + '.mp3');
    base[who] = v;
    a.volume = v * vol;
    chan[who] = a;
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
    return a;
  }
  const talking = (who) => chan[who] && !chan[who].paused && !chan[who].ended;
  function stop(who) {
    (who ? [who] : Object.keys(chan)).forEach(k => { if (chan[k]) { try { chan[k].pause(); } catch (e) {} chan[k] = null; } });
  }
  return {
    // Plays one of this robot's two lines (idx picks one, otherwise it alternates at random).
    // Returns the caption text, or null if the robot was already talking.
    say(who, idx) {
      if (talking(who)) return null;
      const own = OWN[who];
      if (own && idx === undefined && Math.random() < 0.4) { const o = own[(Math.random() * own.length) | 0]; play(who, o[0], 1); return o[1]; }
      if (authentic) {
        let k = (Math.random() * AUTHENTIC.length) | 0;
        if (k === last[who]) k = (k + 1) % AUTHENTIC.length;
        last[who] = k;
        play(who, AUTHENTIC[k][0], 0.9);
        return AUTHENTIC[k][1];
      }
      const list = LINES[who];
      let i = idx;
      if (i === undefined) { i = (Math.random() * list.length) | 0; if (i === last[who]) i = (i + 1) % list.length; }
      last[who] = i;
      play(who, list[i][0], 0.9);
      return list[i][1];
    },
    // Tapping a robot's picture: a fresh copy each time, so quick taps pile up and overlap instead of cutting each other off.
    poke() { const a = new Audio(V + 'tap1.mp3'); a.volume = Math.min(1, 0.95 * vol); const p = a.play(); if (p && p.catch) p.catch(() => {}); },
    phone(n) { return play('phone', 'phone' + n, 1); },
    phone2(n) { return play('phone2', 'phone' + n, 1); }, // a second line on the same call (Night 5's replacement phone guy)
    setAuthentic(on) { authentic = !!on; },
    stop,
    pause(on) { Object.values(chan).forEach(a => { if (a && !a.ended) { if (on) a.pause(); else { const p = a.play(); if (p && p.catch) p.catch(() => {}); } } }); },
    setVolume(v) { vol = v; Object.keys(chan).forEach(k => { if (chan[k]) chan[k].volume = base[k] * v; }); }
  };
})();

// Staff and robots: pressing a robot's photo plays his recording (overlapping, as often as you like)
document.addEventListener('pointerdown', (e) => { if (e.target && e.target.closest && e.target.closest('#castPhoto')) Voice.poke(); });
