/* Runs the animatronics' brain (ai.js) from the Rust build (fnaz-ai.wasm, source in rust/fnaz-ai) when it can.
 *
 * Both give the same results for the same random seed, so the game can switch between them at any moment. If the
 * module cannot load, or does not agree with ai.js on a quick self-test, the game keeps using ai.js and nothing changes.
 * FNAZAI.engine says which one is running ('js' or 'rust'). Add ?js to the address to force ai.js. */
(() => {
  'use strict';
  const API = window.FNAZAI;
  if (!API || typeof WebAssembly === 'undefined' || /[?&]js\b/.test(location.search)) return;
  const JS = { step: API.step, monitorDown: API.monitorDown, cameraChanged: API.cameraChanged };
  API.js = JS;
  API.engine = 'js';
  // the fields of the game state the brain reads and writes (the bots live in state.ai)
  const KEYS = ['night', 'time', 'hour', 'power', 'pre', 'blackout', 'bT', 'pvid', 'dead', 'won', 'who', 'calmT', 'zPrev', 'heatL', 'heatR',
    'coolL', 'coolR', 'wbubbles', 'wtaffy', 'doorL', 'doorR', 'lightL', 'lightR', 'monitor', 'monA', 'cam', 'goldenArmed', 'goldenIn',
    'goldenT', 'goldenOdds', 'poster', 'shake', 'halluc', 'clatterT', 'zFlash', 'rng'];
  const BOTS = ['zayed', 'bubbles', 'taffy', 'sherbet'];
  const enc = new TextEncoder(), dec = new TextDecoder();
  let wasm = null;

  function call(request) {
    const bytes = enc.encode(JSON.stringify(request));
    const ptr = wasm.fnaz_alloc(bytes.length);
    new Uint8Array(wasm.memory.buffer, ptr, bytes.length).set(bytes);
    const len = wasm.fnaz_call(ptr, bytes.length);
    wasm.fnaz_free(ptr, bytes.length);
    const out = JSON.parse(dec.decode(new Uint8Array(wasm.memory.buffer, wasm.fnaz_result(), len)));
    if (out.error) throw new Error(out.error);
    return out;
  }
  function viaRust(op, y, extra, env) {
    const state = { ai: y.ai };
    for (const k of KEYS) if (y[k] !== undefined) state[k] = y[k];
    const out = call(Object.assign({ op, state, env: env || {} }, extra));
    for (const k of KEYS) y[k] = out.state[k];
    for (const b of BOTS) Object.assign(y.ai[b], out.state.ai[b]);
    return out.events;
  }
  const RUST = {
    step: (y, dt, env) => viaRust('step', y, { dt }, env),
    monitorDown: (y, env) => viaRust('monitorDown', y, {}, env),
    cameraChanged: (y, env) => viaRust('cameraChanged', y, {}, env)
  };
  // if anything throws, drop back to ai.js for good (the state is only changed after a successful call)
  function safe(name) {
    return (...a) => {
      try { return RUST[name](...a); } catch (e) {
        console.warn('Rust engine failed, using ai.js:', e && e.message);
        Object.assign(API, JS); API.engine = 'js';
        return JS[name](...a);
      }
    };
  }

  // a quick agreement check on a short scripted night before trusting the module
  function selfTest() {
    const mk = () => ({
      night: 4, time: 0, hour: 0, power: 100, pre: false, blackout: false, bT: 0, pvid: false, dead: false, won: false, who: null, calmT: 0, zPrev: 0,
      heatL: 0, heatR: 0, coolL: 0, coolR: 0, wbubbles: 0, wtaffy: 0, doorL: false, doorR: false, lightL: false, lightR: false, monitor: false, monA: 0,
      cam: 'stage', goldenArmed: false, goldenIn: false, goldenT: 0, goldenOdds: 30, poster: false, shake: 0, halluc: 0, clatterT: 0, zFlash: false, rng: 20241118,
      ai: {
        zayed: { ai: 18, t: 0, office: false, officeT: 0, room: 'stage', human: false, dw: 0, iv: 0, pending: 0, pendMax: 0, armed: false },
        bubbles: { ai: 18, t: 0, office: false, officeT: 0, room: 'stage', human: false, dw: 0, iv: 4.97, pending: 0, pendMax: 0, armed: false },
        taffy: { ai: 18, t: 0, office: false, officeT: 0, room: 'stage', human: false, dw: 0, iv: 4.98, pending: 0, pendMax: 0, armed: false },
        sherbet: { stage: 0, ai: 18, t: 0, cd: 0, wait: 0, running: false, runT: 0, hits: 0, human: false }
      }
    });
    const a = mk(), b = mk(), env = { online: false, guest: false, reduced: false };
    for (let i = 0; i < 1500; i++) {
      if (i === 400) { a.monitor = b.monitor = true; a.cam = b.cam = 'westCor'; }
      if (i === 900) { a.monitor = b.monitor = false; }
      const ea = JSON.stringify(JS.step(a, 1 / 30, env)), eb = JSON.stringify(RUST.step(b, 1 / 30, env));
      if (ea !== eb) return false;
    }
    return JSON.stringify(a) === JSON.stringify(b);
  }

  Promise.resolve().then(() => {
    if (!window.FNAZ_AI_WASM) throw new Error('fnaz-ai.wasm.js is missing');
    const raw = atob(window.FNAZ_AI_WASM), buf = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) buf[i] = raw.charCodeAt(i);
    return WebAssembly.instantiate(buf, {});
  }).then(({ instance }) => {
    wasm = instance.exports;
    if (!selfTest()) throw new Error('the Rust module and ai.js disagree');
    API.step = safe('step'); API.monitorDown = safe('monitorDown'); API.cameraChanged = safe('cameraChanged');
    API.engine = 'rust';
  }).catch((e) => { console.warn('Rust engine not used:', e && e.message); });
})();
