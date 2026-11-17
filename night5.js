/* Night 5, the finale.
 *
 *  1. A two-part phone call. The first phone guy tells the story and is killed mid-sentence (the Falcon delivers through the old
 *     cafeteria phone line); the replacement phone guy takes over the line while the first is still dying.
 *     The night does not start, and nothing moves, until the call ends. Power is unlimited until then.
 *  2. When the night is survived, an animated fight plays in the 3D engine: Abdulla (the gold camel) against the Falcon. The Falcon loses.
 *
 * Voice lines: put phone5a.mp3 (first guy) and phone5b.mp3 (replacement) in assets/voice and set CALL.voiced = true.
 * Until then the call runs as timed subtitles only. Everything here reaches the game through the hooks in game.bundle.js (FNAZ5.*). */
(() => {
  'use strict';
  const NET = window.FNAZNET;
  const H = NET.h; // the game's internals: y, We, Rt, X, xt, ar, xn, li, Wl ...
  const FNAZ5 = (window.FNAZ5 = {});

  /* ------------------------------------------------------------------ the call */
  const CALL = {
    voiced: false, // flip to true once phone5a.mp3 and phone5b.mp3 exist
    audioA: '5a',
    audioB: '5b',
    overlap: 3, // seconds the replacement starts before the first phone guy's line ends
    whoA: 'Phone guy, Qerh Cooperations',
    whoB: 'Replacement phone guy, Qerh Cooperations',
    // [text, who]  who: undefined = first phone guy, 'f' = the Falcon, 'sfx' = line noise
    a: [
      ["Hello? Hello, yoo-hoo! Yes, it's me. The phone guy. I know, I said last night was the final night. I was wrong."],
      ["You've earned the whole story, so listen, because I'm only going to say this once."],
      ["Abdulla's Cafeteria had one phone line. Delivery orders. When the cafeteria closed, that number went to Salem's Candy. Same line, same ring."],
      ["That's why the Falcon delivers. That's why the gold camel picks up whenever you call anyone. It's still his phone."],
      ["And the Zayeds? One soul, four bodies. It didn't fit, so it split."],
      ['The Camel is the patience. The Cat is the nerve. The Goat is the memory. The Falcon is the hunger.'],
      ["Now here's the part you won't like, Rashid. At Qerh Cooperations, I'm the one who handled the cafeteria's file. I read the police report. I read yours. And tonight, I reopened it."],
      ["The police will be waiting outside at six, and they're not coming for... Wait. Do you hear that? That's skates. On my office floor."],
      ['[Three knocks. Skates on the floor.]', 'sfx'],
      ['Special delivery.', 'f'],
      ["No, no, wait. I'm a claims adjuster. I just do the paperwork!"],
      ['[A crash. A scream. Static.]', 'sfx'],
    ],
    b: [
      ["Hello? Hello, yoo-hoo! Apologies for the interruption. I'm the replacement phone guy. Qerh Cooperations thanks the previous phone guy for his service, which has now concluded."],
      ["I'll be brief, because I've seen how this goes. The police are real. They're outside, and they come in at six."],
      ["At six, the doors open. Do not leave your chair. Something in this building has been waiting a long time to settle an argument, and it isn't about you."],
      ['The owner and the hunger have never agreed on who gets to serve you. Tonight, they decide.'],
      ["Someone left me a note about a cupcake. I don't know what it means. Do not eat it."],
      ["Good luck. I'd say goodbye, but I don't think I'll be here either. Goodbye!"],
    ],
  };
  FNAZ5.call = CALL;

  const est = (txt) => 2.5 + txt.length * 0.055;
  const whoOf = (type) => (type === 'b' ? CALL.whoB : type === 'f' ? 'Zayed the Falcon' : type === 'sfx' ? 'Line noise' : CALL.whoA);

  // timeline from text length alone (no audio): returns {lines, sb, end}
  function textTimeline() {
    let s = 0;
    const lines = [];
    CALL.a.forEach(([txt, who]) => { lines.push([s, txt, who || 'a']); s += est(txt); });
    const lastA = lines[lines.length - 1][0];
    const sb = lastA + 0.5; // the replacement picks up while the scream is still going
    let t = sb;
    CALL.b.forEach(([txt]) => { lines.push([t, txt, 'b']); t += est(txt); });
    return { lines, sb, end: t + 1.5 };
  }

  // timeline from the two recordings' real lengths
  function audioTimeline(dA, dB) {
    const lines = [];
    const wA = CALL.a.reduce((n, [t]) => n + t.length + 8, 0);
    let acc = 0;
    CALL.a.forEach(([txt, who]) => { lines.push([(acc / wA) * dA, txt, who || 'a']); acc += txt.length + 8; });
    const sb = Math.max(0, dA - CALL.overlap);
    const wB = CALL.b.reduce((n, [t]) => n + t.length + 8, 0);
    acc = 0;
    CALL.b.forEach(([txt]) => { lines.push([sb + (acc / wB) * dB, txt, 'b']); acc += txt.length + 8; });
    return { lines, sb, end: sb + dB + 0.6 };
  }

  FNAZ5.startCall = function (i) {
    const y = H.y, X = H.X;
    const tl = textTimeline();
    y.call = { n: i, parts: { voiced: !!CALL.voiced, fitted: false, sb: tl.sb }, lines: tl.lines, end: tl.end, t: -1.9, idx: -1, audio: null, voiced: false };
    y.pre = true; // the night waits for the call; power is unlimited meanwhile
    Sound.ring();
    X.callWho.textContent = CALL.whoA;
    X.callText.textContent = 'Ringing';
    X.call.classList.remove('note');
    X.call.classList.add('on');
  };

  function show(e) {
    const X = H.X, ce = H.ce;
    let n = -1;
    for (let s = 0; s < e.lines.length; s++) if (e.lines[s][0] <= e.t) n = s;
    if (n === e.idx || n < 0) return;
    e.idx = n;
    const [, txt, type] = e.lines[n];
    X.callWho.textContent = whoOf(type) + (H.y.pre ? ' (the night starts when this call ends)' : '');
    X.callText.textContent = e.parts.voiced && !ce.subs && type !== 'sfx' ? 'Call in progress (subtitles are off).' : txt;
  }

  FNAZ5.callStep = function (e, dt) {
    const k = e.parts, V = Voice;
    const t0 = e.t;
    e.t += dt;
    if (k.voiced) {
      if (t0 < 0 && e.t >= 0) {
        k.A = V.phone(CALL.audioA);
        k.Bp = new Audio('assets/voice/phone' + CALL.audioB + '.mp3');
        k.Bp.preload = 'auto';
        k.began = performance.now();
      }
      if (e.t < 0) return;
      if (!k.fitted) {
        const dA = k.A && k.A.duration, dB = k.Bp && k.Bp.duration;
        if (dA > 0 && dB > 0 && isFinite(dA) && isFinite(dB)) {
          const tl = audioTimeline(dA, dB);
          e.lines = tl.lines; e.end = tl.end; k.sb = tl.sb; k.fitted = true; e.idx = -1;
        } else if ((k.A && k.A.error) || performance.now() - k.began > 6000) {
          // the recordings are not there (yet): carry on with timed subtitles only
          k.voiced = false;
          V.stop('phone');
        }
      } else if (!k.Bstarted) {
        if (k.A && !k.A.ended && k.A.currentTime > 0) e.t = k.A.currentTime;
        if (e.t >= k.sb) { k.B = V.phone2(CALL.audioB); k.Bstarted = true; }
      } else if (k.B && !k.B.ended && k.B.currentTime > 0) {
        e.t = k.sb + k.B.currentTime;
      }
    }
    if (e.t < 0) return;
    show(e);
    if (e.t > e.end) H.li();
  };

  // called whenever a call ends or is hung up: the night begins (full power)
  FNAZ5.preEnd = function () {
    const y = H.y;
    if (y && y.pre) { y.pre = false; y.power = 100; }
  };

  /* ------------------------------------------------------------------ the fight: Abdulla vs the Falcon */
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const ease = (v) => { v = clamp01(v); return v * v * (3 - 2 * v); };
  const lerp = (a, b, v) => a + (b - a) * v;
  const seg = (t, a, b) => clamp01((t - a) / (b - a));
  const LEN = 21;

  let cam = null, sparks = 0;
  const stageY = 0.6, Z = -28.6;

  function bots() {
    const b = H.We.bots;
    return { F: b.sherbet, G: b.golden, spec: [b.zayed, b.bubbles, b.taffy] };
  }

  FNAZ5.startCut = function () {
    const y = H.y, X = H.X, We = H.We;
    const { F, G, spec } = bots();
    y.cut = { t: 0, hits: {} };
    y.running = true;
    y.monitor = false; y.monA = 0;
    ['hud'].forEach((id) => X[id].classList.remove('on'));
    X.camOverlay.classList.remove('on');
    X.gl.classList.remove('cctv');
    X.tablet.classList.remove('on');
    X.call.classList.remove('on');
    document.body.classList.remove('cams');
    X.cutWrap.classList.add('on');
    X.cutCap.textContent = '';
    delete H.ar.view; delete H.ar.cctv; delete H.ar.flip;
    We.setView('stage');
    We.hemi.intensity = 0.85;
    if (!cam) cam = new H.xt(42, 16 / 9, 0.1, 80);
    [F, G, ...spec].forEach((b) => { b.root.visible = true; b.root.rotation.order = 'YXZ'; b.root.scale.setScalar(1); H.Wl(b); });
    G.head.rotation.set(0, 0, 0); G.armL.rotation.z = 0; G.armR.rotation.z = 0;
    spec[0].root.position.set(0, stageY, -30.6); // the Camel, Cat and Goat watch from the back of the stage
    spec[1].root.position.set(-2.7, stageY, -30.6);
    spec[2].root.position.set(2.7, stageY, -30.6);
    spec.forEach((b) => { b.root.rotation.y = Math.atan2(-b.root.position.x * 0.4, 5); b.root.rotation.x = 0; });
    sparks = 0;
    Sound.ambient(false);
  };

  function caption(txt) { H.X.cutCap.textContent = txt; }

  function sfx(c, key, fn) { if (!c.hits[key] && c.t >= key) { c.hits[key] = true; try { fn(); } catch (e) { /* no audio */ } } }

  function pose(t) {
    const { F, G, spec } = bots();
    const S = Sound;
    const c = H.y.cut;
    const f0 = 0.1, g0 = f0 + 2.2; // where the grapple ends
    let fx, gx, fy = stageY, fRoll = 0, fTilt = 0;
    let fArmL = 0, fArmR = 0, gArmL = 0, gArmR = 0, fHead = 0, gHead = 0, fJaw = 0;
    let gYaw = -Math.PI / 2;
    // a hit: sound, sparks, shake, and the anime beat: freeze the action, flash two impact frames, punch the camera in, pop a sound word
    const hit = (key, snd, spark, shake, freeze, word, big) => sfx(c, key, () => {
      if (snd) S.bang();
      sparks = spark; c.shake = shake;
      c.freeze = c.fz = freeze; c.fe = 0; c.pe = 1; c.big = !!big;
      c.tilt = (Math.random() < 0.5 ? -1 : 1) * (big ? 0.1 : 0.06);
      c.word = word; c.wordAt = 0; c.wx = 0.2 + Math.random() * 0.5; c.wy = 0.2 + Math.random() * 0.25; c.wr = (Math.random() - 0.5) * 0.3;
      c.ang = Math.random() * 360;
    });

    if (t < 4.8) { // Abdulla walks on from the right, then they square up
      fx = -3.3;
      gx = lerp(4.8, 3.0, ease(seg(t, 0, 2.6)));
      gArmL = Math.sin(t * 5) * 0.35 * (t < 2.6 ? 1 : 0); gArmR = -gArmL;
      const stand = ease(seg(t, 2.6, 4.8));
      fTilt = 0.12 * stand; fArmR = -1.1 * stand;
      gArmL = lerp(gArmL, -0.4, stand); gArmR = lerp(gArmR, -0.4, stand);
    } else if (t < 5.5) { // the Falcon charges
      const v = seg(t, 4.8, 5.5);
      fx = lerp(-3.3, 0.9, ease(v)); gx = 3.0 - 0.3 * ease(v);
      fArmL = fArmR = -1.4 * v; gArmL = gArmR = lerp(-0.4, -1.4, v); fTilt = 0.2;
      sfx(c, 4.8, () => { S.run(); c.rush = 1; });
    } else if (t < 8.4) { // the grapple: shoving back and forth
      const g = t - 5.5, v = ease(seg(t, 5.5, 8.4));
      fx = lerp(0.9, f0, v) + Math.sin(g * 3.4) * 0.35 * (1 - v);
      gx = fx + 2.2;
      fArmL = -1.5 + Math.sin(g * 9) * 0.9; fArmR = -1.5 + Math.cos(g * 9) * 0.9;
      gArmL = -1.5 + Math.cos(g * 8) * 0.9; gArmR = -1.5 + Math.sin(g * 8) * 0.9;
      fHead = Math.sin(g * 11) * 0.22; gHead = Math.cos(g * 10) * 0.22;
      fJaw = Math.max(0, Math.sin(g * 14)) * 0.5; fTilt = 0.15;
      hit(5.5, true, 0.6, 0.5, 0.13, 'WHAM!'); hit(6.3, true, 0.4, 0.35, 0.08, 'THUD!'); hit(7.2, true, 0.4, 0.35, 0.08, 'KRAK!'); hit(7.9, true, 0.5, 0.4, 0.12, 'BAM!');
    } else if (t < 10.2) { // Abdulla winds up and hits; the Falcon is thrown across the stage
      const wind = seg(t, 8.4, 8.9), swing = ease(seg(t, 8.9, 9.2)), fly = seg(t, 9.0, 10.2);
      fx = lerp(f0, -3.4, ease(fly));
      gx = lerp(g0, g0 - 0.6, ease(seg(t, 8.9, 9.6)));
      gArmR = lerp(lerp(-1.5, -2.7, wind), 1.1, swing); gArmL = -0.6;
      fy = stageY + Math.sin(fly * Math.PI) * 1.2;
      fRoll = -ease(fly) * (Math.PI / 2) * 0.96; // knocked flat on his back
      fArmL = fArmR = lerp(-1.2, -2.2, fly); fJaw = 0.7;
      hit(9.1, true, 0.9, 0.8, 0.28, 'DOOOON!!', true);
    } else { // the Falcon twitches on the floor; Abdulla walks over and stands above him
      const flop = seg(t, 10.2, 12.6), walk = ease(seg(t, 10.4, 12.8));
      fx = -3.4; fy = stageY + 0.12;
      fRoll = -(Math.PI / 2) * 0.96 + Math.sin(t * 9) * 0.07 * (1 - flop);
      fHead = Math.sin(t * 13) * 0.25 * (1 - flop);
      fJaw = 0.5 + Math.sin(t * 16) * 0.3 * (1 - flop);
      fArmL = -2.2 + Math.sin(t * 7) * 0.5 * (1 - flop); fArmR = -2.2 + Math.cos(t * 7) * 0.5 * (1 - flop);
      if (t > 12.4) { fHead = 0.5; fJaw = 0.9; fArmL = fArmR = 0.3; }
      gx = lerp(g0 - 0.6, -1.7, walk);
      gArmL = gArmR = Math.sin(t * 6) * 0.3 * (walk < 1 ? 1 : 0);
      if (t >= 12.8) gArmR = lerp(0, -1.0, ease(seg(t, 12.8, 13.6)));
      hit(10.2, true, 0.3, 0.6, 0.15, 'CRASH!');
      sfx(c, 12.7, () => S.powerOut());
    }

    F.root.position.set(fx, fy, Z);
    G.root.position.set(gx, stageY, Z);
    F.root.rotation.set(fRoll, Math.PI / 2, 0);
    F.body.rotation.x = fTilt;
    if (t > 14.2) gYaw = lerp(-Math.PI / 2, 0.15, ease(seg(t, 14.2, 15.8)));
    G.root.rotation.set(0, gYaw, 0);
    F.armL.rotation.x = fArmL; F.armR.rotation.x = fArmR;
    G.armL.rotation.x = gArmL; G.armR.rotation.x = gArmR;
    F.head.rotation.z = fHead; G.head.rotation.z = gHead;
    F.jaw.rotation.x = fJaw;
    // the Falcon's face goes dark when he is beaten
    F.face.material.emissive.setHex(t > 12.6 ? 0x000000 : 0xff2200);
    F.face.material.emissiveIntensity = t > 12.6 ? 0 : sparks * 0.9;
    spec.forEach((b, k) => { b.head.rotation.z = Math.sin(t * 2 + k) * 0.08; b.armL.rotation.x = 0; b.armR.rotation.x = k === 2 ? -0.9 : 0; });
    return { fx, gx };
  }

  function camFor(t, fx, gx) {
    const sx = Math.sin(t * 40) * (H.y.cut.shake || 0) * 0.05, sy = Math.cos(t * 47) * (H.y.cut.shake || 0) * 0.05;
    let p, l;
    if (t < 5.5) { // wide, slowly pushing in
      const v = ease(seg(t, 0, 5.5));
      p = [0.2, lerp(2.2, 2.0, v), lerp(-22.6, -24.0, v)]; l = [0.2, 1.5, Z];
    } else if (t < 8.4) { // medium, on the grapple
      const v = seg(t, 5.5, 8.4);
      p = [lerp(1.6, -0.4, v), 1.9, -25.4]; l = [(fx + gx) / 2, 1.4, Z];
    } else if (t < 11.2) { // the hit and the throw: wide enough to follow him across the stage
      p = [-0.3, 2.2, -24.0]; l = [-1.2, 1.3, Z];
    } else if (t < 15) { // low, on Abdulla standing over the beaten Falcon
      const v = seg(t, 11.2, 15);
      p = [lerp(-0.2, -1.4, v), lerp(1.3, 1.6, v), -25.2]; l = [-2.5, 1.0, Z];
    } else { // close on Abdulla, who turns to the camera
      const v = ease(seg(t, 15, LEN));
      p = [lerp(-1.4, -0.9, v), 1.9, lerp(-25.2, -25.9, v)]; l = [gx, 1.9, Z];
    }
    const c = H.y.cut, pe = c.pe || 0;
    cam.position.set(p[0] + sx, p[1] + sy, p[2]);
    cam.lookAt(l[0], l[1], l[2]);
    const rush = t > 4.8 && t < 5.5 ? seg(t, 4.8, 5.5) * 0.35 : 0;
    cam.fov = 42 - pe * (c.big ? 16 : 11) - rush * 6;
    cam.updateProjectionMatrix();
    cam.rotateZ((c.tilt || 0) * pe + (t > 2.6 && t < 4.8 ? 0.035 : 0));
  }

  FNAZ5.cutStep = function (dt) {
    const c = H.y.cut;
    if (!c) return;
    c.pe = Math.max(0, (c.pe || 0) - dt * 2.4);
    c.wordAt = (c.wordAt || 0) + dt;
    if (c.freeze > 0) { // hit-stop: the picture holds while the impact frames play
      c.fe = c.fz - c.freeze + dt;
      c.freeze = Math.max(0, c.freeze - dt);
      return;
    }
    c.fe = 99;
    c.t += dt;
    c.shake = Math.max(0, (c.shake || 0) - dt * 2.2);
    sparks = Math.max(0, sparks - dt * 2);
    if (c.t >= LEN) FNAZ5.endCut();
  };

  FNAZ5.cutDraw = function () {
    const y = H.y, c = y.cut;
    if (!c) return;
    const We = H.We, Rt = H.Rt;
    const t = c.t;
    const tp = Math.floor(t * 12 + 1e-6) / 12; // poses are drawn "on twos" (12 per second), like hand-drawn animation
    const { fx, gx } = pose(tp);
    camFor(t, fx, gx);
    // captions
    caption(t > 0.8 && t < 2.6 ? 'Zayed the Falcon: Special delivery.' : t > 3.0 && t < 5.0 ? 'Abdulla: Your order is ready.' : t > 13.0 && t < 15.5 ? 'Abdulla: Your order is ready.' : '');
    // police lights wash over the stage in the last seconds
    const L = We.scareLight;
    if (t > 15.4) {
      L.position.set(0, 2.6, -24.5);
      L.color.setHex(Math.floor(t * 3) % 2 ? 0xff2030 : 0x2050ff);
      L.intensity = 6 * clamp01(seg(t, 15.4, 16.2));
      const S = Sound;
      if (S.siren && !c.siren) { c.siren = true; S.siren(); }
    } else if (sparks > 0.05) {
      L.position.set(fx, 1.4, -27.5);
      L.color.setHex(0xffd080);
      L.intensity = 5 * sparks;
    } else { L.position.set(0, 3.2, -23); L.color.setHex(0xfff0d8); L.intensity = 2.5; }
    // fade in at the start, to black at the end
    H.X.cutWrap.style.setProperty('--cutfade', String(Math.max(1 - clamp01(t / 0.8), clamp01((t - (LEN - 1.2)) / 1.2))));
    Rt.shadowMap.needsUpdate = true;
    Rt.render(We.scene, cam);
    // ---- the anime layers
    const X = H.X, fe = c.fe === undefined ? 99 : c.fe, inFreeze = c.freeze > 0 || fe < (c.fz || 0) + 1e-6;
    const frame = Math.floor(fe * 24 + 1e-6);
    const toon = H.ce.quality !== 'low';
    let look = toon ? 'url(#toon)' : 'contrast(1.2) saturate(1.5)';
    let lines = 0, lc = '#fff', flash = 0;
    if (inFreeze && c.fz && frame < (c.big ? 3 : 2)) { // impact frames: stark black and white, then the negative
      look = frame % 2 === 0 ? 'grayscale(1) contrast(7) brightness(1.5)' : 'grayscale(1) contrast(7) brightness(1.5) invert(1)';
      lines = 1; lc = frame % 2 === 0 ? '#fff' : '#000';
    } else if (c.pe > 0.05) { lines = 0.55 * c.pe; flash = 0.5 * c.pe; }
    if (t > 4.8 && t < 5.5) lines = Math.max(lines, 0.35 * seg(t, 4.8, 5.4)); // focus lines as he charges
    X.gl.style.filter = look;
    const LN = X.cutLines;
    LN.style.opacity = String(lines); LN.style.setProperty('--lc', lc); LN.style.setProperty('--ang', ((c.ang || 0) + frame * 7) + 'deg');
    X.cutFlash.style.opacity = String(Math.min(0.9, flash));
    // the sound word pops in, then fades
    const sw = X.cutSfx, age = c.wordAt || 0;
    if (c.word && age < 0.7) {
      const pop = age < 0.12 ? 1.5 - 0.5 * (age / 0.12) : 1;
      sw.textContent = c.word;
      sw.style.opacity = String(age < 0.5 ? 1 : 1 - (age - 0.5) / 0.2);
      sw.style.transform = 'translate(' + Math.round(c.wx * 100) + 'vw,' + Math.round(c.wy * 100) + 'vh) rotate(' + c.wr + 'rad) scale(' + pop + ')';
      sw.style.fontSize = (c.big ? 20 : 11) + 'vw';
    } else sw.style.opacity = '0';
  };

  FNAZ5.endCut = function () {
    const y = H.y, X = H.X, We = H.We;
    if (!y.cut) return;
    y.cut = null;
    y.running = false;
    const { F, G, spec } = bots();
    [F, G, ...spec].forEach((b) => { b.root.rotation.order = 'XYZ'; b.root.rotation.set(0, 0, 0); b.body.rotation.x = 0; b.root.scale.setScalar(1); H.Wl(b); b.face.material.emissive.setHex(0); b.face.material.emissiveIntensity = 0; });
    G.body.rotation.x = 0.12; // Abdulla's usual slouch
    We.scareLight.intensity = 0; We.scareLight.color.setHex(0xffffff);
    We.hemi.intensity = 0.18;
    X.cutWrap.classList.remove('on');
    X.cutCap.textContent = '';
    X.gl.style.filter = '';
    X.cutLines.style.opacity = '0'; X.cutFlash.style.opacity = '0'; X.cutSfx.style.opacity = '0';
    cam.fov = 42; cam.updateProjectionMatrix();
    delete H.ar.view;
    H.xn('win');
  };

  // test hook: draw one frame of the fight at a chosen second
  FNAZ5.debugSeek = function (t) {
    const c = H.y.cut;
    c.t = t; c.hits = {};
    FNAZ5.cutDraw();
  };
  FNAZ5.LEN = LEN;
})();
