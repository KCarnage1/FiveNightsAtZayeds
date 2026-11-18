/* Small UI motion that CSS alone cannot trigger: values that change on screen (the clock, the camera name, the night label)
   give a little pop so the change is noticed. Does nothing if the player prefers reduced motion. */
(() => {
  'use strict';
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pop = (el) => {
    if (still) return;
    if (!el) return;
    el.classList.remove('tick');
    void el.offsetWidth; // restart the animation
    el.classList.add('tick');
  };
  ['clock', 'nightLbl', 'camName', 'camId', 'overNight', 'overTime', 'overCause'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    let last = el.textContent;
    new MutationObserver(() => { if (el.textContent !== last) { last = el.textContent; pop(el); } })
      .observe(el, { childList: true, characterData: true, subtree: true });
  });

  /* Title screen: static noise, and now and then a robot's face flickers into view and out again, as on the original menu. */
  const title = document.getElementById('title');
  const face = title && title.querySelector('.fn-face');
  const snow = title && title.querySelector('.fn-static');
  if (!title || !face || !snow) return;
  const ctx = snow.getContext('2d');
  const img = ctx.createImageData(snow.width, snow.height);
  const FACES = ['zayed', 'bubbles', 'taffy', 'sherbet', 'zayed', 'bubbles', 'taffy', 'sherbet', 'golden'];
  FACES.forEach((f) => { const i = new Image(); i.src = 'assets/faces/' + f + '.png'; }); // ready before the first flicker
  let burst = 0, gap = 8, spike = 0, last = '';
  const calm = () => document.body.classList.contains('calm');
  function noise(level) {
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255 * level; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
    ctx.putImageData(img, 0, 0);
  }
  function tick() {
    if (!title.classList.contains('active') || document.hidden) return;
    if (still || calm()) { noise(0.5); snow.style.opacity = '0.1'; face.style.opacity = '0.28'; if (!face.src) face.src = 'assets/faces/zayed.png'; return; }
    if (burst > 0) {
      burst--; spike = 0.35 + Math.random() * 0.4;
      face.style.opacity = String(Math.random() < 0.25 ? 0.2 : 0.55 + Math.random() * 0.45);
      if (!burst) { face.style.opacity = '0'; spike = 0.6; gap = 6 + Math.floor(Math.random() * 30); }
    } else if (--gap <= 0) {
      let f; do { f = FACES[Math.floor(Math.random() * FACES.length)]; } while (f === last && FACES.length > 1);
      last = f; face.src = 'assets/faces/' + f + '.png';
      burst = 3 + Math.floor(Math.random() * 7);
    } else spike = Math.random() < 0.06 ? 0.45 : spike * 0.5;
    noise(0.55);
    snow.style.opacity = String(0.13 + spike);
  }
  setInterval(tick, 85);
})();
