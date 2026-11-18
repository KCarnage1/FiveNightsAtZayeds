/* Touch controls for phones and tablets: on-screen buttons, drag to look around, a pause button.
   Shown only on touch devices, and only during a night. Uses the game's own functions via FNAZNET.h. */
(() => {
  'use strict';
  const touch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  if (!touch) return;
  document.body.classList.add('touch');
  const hud = document.getElementById('hud');
  const stage = document.getElementById('stage');
  const NET = window.FNAZNET;
  const H = () => NET && NET.h;

  const ui = document.createElement('div');
  ui.id = 'touch';
  ui.innerHTML = `
    <button type="button" id="tPause" aria-label="Pause">II</button>
    <button type="button" id="tChat" aria-label="Chat" hidden>Chat</button>
    <button type="button" id="tCam">Cameras</button>`;
  hud.appendChild(ui);

  const press = (el, down, up) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); try { el.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ } down(); });
    const end = (e) => { e.stopPropagation(); if (up) up(); };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  };
  press(document.getElementById('tCam'), () => { const h = H(); if (h) h.nr(!h.y.monitor); });
  press(document.getElementById('tPause'), () => { const h = H(); if (h) h.ec(); });
  press(document.getElementById('tChat'), () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));

  // drag the picture to look around (the finger moves the world, like a street-view)
  const LOOK_SPEED = 1.8; // bigger = a short swipe turns further
  let last = null;
  let swipe = null; // on the cameras, a horizontal swipe switches camera
  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    if (!e.target.closest('#touch')) swipe = e.clientX; // may start on the camera map: a swipe is not a tap
    if (!e.target.closest('button')) last = e.clientX;
  });
  stage.addEventListener('pointermove', (e) => {
    const h = H();
    if (e.pointerType !== 'touch' || last === null || !h || h.y.screen !== 'game' || h.y.monitor) return;
    const w = stage.getBoundingClientRect().width;
    const dx = ((e.clientX - last) / w) * 1600;
    last = e.clientX;
    h.y.mx = Math.max(0, Math.min(1600, h.y.mx - dx * LOOK_SPEED));
  });
  const stop = (e) => {
    const h = H();
    if (e && e.type === 'pointerup' && swipe !== null && h && h.y.monitor && h.cs && Math.abs(e.clientX - swipe) > stage.getBoundingClientRect().width * 0.12) h.cs(e.clientX < swipe ? 1 : -1);
    last = null; swipe = null;
  };
  stage.addEventListener('pointerup', stop);
  stage.addEventListener('pointercancel', stop);

  // show which doors are shut, and the Chat button during online play
  setInterval(() => {
    const h = H();
    if (!h) return;
    document.getElementById('tCam').classList.toggle('on', !!h.y.monitor);
    document.getElementById('tChat').hidden = !(NET && NET.role);
  }, 100);

  /* Full screen: the first touch takes the whole screen (and locks the phone to landscape), so the address bar and
     buttons stop eating the picture. iPhones only allow this for the installed app (Add to Home Screen), which is already full screen. */
  const root = document.documentElement;
  const fsOn = () => document.fullscreenElement || document.webkitFullscreenElement;
  const installed = () => matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches || navigator.standalone;
  let fsTried = 0;
  function goFull() {
    if (fsOn() || installed() || Date.now() - fsTried < 1500) return;
    const req = root.requestFullscreen || root.webkitRequestFullscreen;
    if (!req) return;
    fsTried = Date.now();
    try {
      const r = req.call(root, { navigationUI: 'hide' });
      const lock = () => { try { if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* not allowed here */ } };
      if (r && r.then) r.then(lock).catch(() => {}); else lock();
    } catch (e) { /* refused: the game still works in the browser */ }
  }
  document.addEventListener('pointerup', (e) => { if (e.pointerType === 'touch') goFull(); }, true);
  // the picture re-fits whenever the visible area changes (address bar hides, fullscreen, rotation)
  const refit = () => window.dispatchEvent(new Event('resize'));
  document.addEventListener('fullscreenchange', refit);
  document.addEventListener('webkitfullscreenchange', refit);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', refit);
  window.addEventListener('orientationchange', () => setTimeout(refit, 250));

  // leaving the app mid-night pauses it
  document.addEventListener('visibilitychange', () => {
    const h = H();
    if (document.hidden && h && h.ai() && !(NET && NET.role)) h.ec();
  });
})();
