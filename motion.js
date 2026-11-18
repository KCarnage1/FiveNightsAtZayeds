/* Small UI motion that CSS alone cannot trigger: values that change on screen (the clock, the camera name, the night label)
   give a little pop so the change is noticed. Does nothing if the player prefers reduced motion. */
(() => {
  'use strict';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const pop = (el) => {
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
})();
