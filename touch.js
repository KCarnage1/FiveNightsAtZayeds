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
    <div class="t-col t-left"><button type="button" data-door="left">Door</button><button type="button" data-light="left">Light</button></div>
    <div class="t-col t-right"><button type="button" data-door="right">Door</button><button type="button" data-light="right">Light</button></div>
    <button type="button" id="tCam">Cameras</button>`;
  hud.appendChild(ui);

  const press = (el, down, up) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); try { el.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ } down(); });
    const end = (e) => { e.stopPropagation(); if (up) up(); };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  };
  ui.querySelectorAll('[data-door]').forEach((b) => press(b, () => H() && H().er(b.dataset.door)));
  ui.querySelectorAll('[data-light]').forEach((b) => press(b, () => H() && H().Wn(b.dataset.light, true), () => H() && H().Wn(b.dataset.light, false)));
  press(document.getElementById('tCam'), () => { const h = H(); if (h) h.nr(!h.y.monitor); });
  press(document.getElementById('tPause'), () => { const h = H(); if (h) h.ec(); });
  press(document.getElementById('tChat'), () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));

  // drag the picture to look around (the finger moves the world, like a street-view)
  let last = null;
  stage.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' && !e.target.closest('button')) last = e.clientX; });
  stage.addEventListener('pointermove', (e) => {
    const h = H();
    if (e.pointerType !== 'touch' || last === null || !h || h.y.screen !== 'game' || h.y.monitor) return;
    const w = stage.getBoundingClientRect().width;
    const dx = ((e.clientX - last) / w) * 1600;
    last = e.clientX;
    h.y.mx = Math.max(0, Math.min(1600, h.y.mx - dx));
  });
  const stop = () => { last = null; };
  stage.addEventListener('pointerup', stop);
  stage.addEventListener('pointercancel', stop);

  // show which doors are shut, and the Chat button during online play
  setInterval(() => {
    const h = H();
    if (!h) return;
    ui.querySelector('[data-door=left]').classList.toggle('on', !!h.y.doorL);
    ui.querySelector('[data-door=right]').classList.toggle('on', !!h.y.doorR);
    ui.querySelector('[data-light=left]').classList.toggle('on', !!h.y.lightL);
    ui.querySelector('[data-light=right]').classList.toggle('on', !!h.y.lightR);
    ui.classList.toggle('cams', !!h.y.monitor);
    document.getElementById('tCam').classList.toggle('on', !!h.y.monitor);
    document.getElementById('tChat').hidden = !(NET && NET.role);
  }, 100);

  // leaving the app mid-night pauses it
  document.addEventListener('visibilitychange', () => {
    const h = H();
    if (document.hidden && h && h.ai() && !(NET && NET.role)) h.ec();
  });
})();
