/* Secret entry for devices without a keyboard: tap the version number on the title screen five times,
   type the secret word, and press OK. (On a computer you can also just type the word on any menu.) */
(() => {
  'use strict';
  const ver = document.querySelector('#title .ver');
  if (!ver) return;
  ver.style.cursor = 'default';
  ver.style.userSelect = 'none';

  const box = document.createElement('div');
  box.id = 'secretBox';
  box.hidden = true;
  box.innerHTML = '<form><label for="secretIn">Enter the secret</label><input id="secretIn" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="done"><p id="secretMsg" aria-live="polite"></p><div><button type="submit" class="primary">OK</button> <button type="button" id="secretNo">Cancel</button></div></form>';
  document.getElementById('stage').appendChild(box);
  const input = box.querySelector('#secretIn'), msg = box.querySelector('#secretMsg');

  const close = () => { box.hidden = true; input.value = ''; msg.textContent = ''; input.blur(); };
  box.querySelector('#secretNo').addEventListener('click', close);
  box.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const word = input.value.trim().toLowerCase();
    if (word === 'shawarma' && window.FNAZ_unlock) { close(); window.FNAZ_unlock(); }
    else if (word === 'lebidoof' && window.FNAZMOD) { close(); window.FNAZMOD.toggle(true); }
    else { msg.textContent = 'Nothing happens.'; input.select(); }
  });
  input.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') close(); });

  let taps = 0, timer = 0;
  ver.addEventListener('click', () => {
    clearTimeout(timer);
    timer = setTimeout(() => { taps = 0; }, 3000);
    if (++taps < 5) return;
    taps = 0;
    box.hidden = false;
    input.focus();
  });
})();
