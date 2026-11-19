/* Achievements: ten of them, saved in this browser/app (localStorage), with a screen on the title menu and a pop-up when one unlocks.
   game.bundle.js reports into window.FNAZ_ACH: win() when a night is survived, event() for golden / foxy / secret. */
(() => {
  'use strict';
  const KEY = 'fnaz_ach_v1';
  const LIST = [
    { id: 'first', name: 'First Shift', desc: 'Survive Night 1.' },
    { id: 'five', name: 'Five Nights', desc: 'Survive Night 5.' },
    { id: 'golden', name: 'Do Not Look', desc: 'Raise the tablet when the gold camel shows up.' },
    { id: 'knock', name: 'Knock Knock', desc: "Shut the west door in the Falcon's face." },
    { id: 'fumes', name: 'On Fumes', desc: 'Survive a night with 5% power or less.' },
    { id: 'xkr', name: 'xkr', desc: 'Survive a night without ever raising the tablet.' },
    { id: '420', name: '4/20', desc: 'Beat 4/20 mode.' },
    { id: 'meta', name: 'Meta Night', desc: 'Beat Custom night with every Zayed at level 20.' },
    { id: 'nightmare', name: 'Nightmare Shamshamumu', desc: 'Survive all five Nightmare Shamshamumu nights.' },
    { id: 'garlic', name: 'Extra Garlic', desc: 'Say the secret word.', secret: true },
  ];
  let have = {};
  try { have = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { have = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(have)); } catch (e) { /* private mode */ } };

  const stage = document.getElementById('stage');
  const toast = document.createElement('div');
  toast.id = 'achToast';
  toast.hidden = true;
  stage.appendChild(toast);
  const queue = [];
  let showing = false;
  function pump() {
    if (showing || !queue.length) return;
    showing = true;
    const a = queue.shift();
    toast.innerHTML = '<b>Achievement unlocked</b><span></span>';
    toast.querySelector('span').textContent = a.name;
    toast.hidden = false;
    try { if (window.Sound && Sound.achieve) Sound.achieve(); } catch (e) { /* no audio */ }
    setTimeout(() => { toast.hidden = true; showing = false; pump(); }, 3800);
  }
  function unlock(id) {
    if (have[id]) return;
    have[id] = Date.now();
    save();
    queue.push(LIST.find((a) => a.id === id));
    pump();
    try { if (window.FNAZMOD && FNAZMOD.earn) FNAZMOD.earn(25, 'achievement'); } catch (e) { /* the coins are a bonus */ }
    if (document.getElementById('achievements').classList.contains('active')) render();
  }

  window.FNAZ_ACH = {
    list: LIST,
    has: (id) => !!have[id],
    event(name) {
      if (name === 'golden') unlock('golden');
      else if (name === 'foxy') unlock('knock');
      else if (name === 'secret') unlock('garlic');
    },
    win(info) {
      const net = window.FNAZNET;
      if (net && net.role && net.mode === 'versus') return; // the animatronic player is not surviving anything
      const n = info.night;
      if (n === 1) unlock('first');
      if (n === 5) unlock('five');
      if (n === 6) unlock('420');
      if (n === 7 && (info.lv || []).length === 4 && info.lv.every((v) => v >= 20)) unlock('meta');
      if (n === 12) unlock('nightmare');
      if (!info.usedCams) unlock('xkr');
      if (info.power > 0 && info.power <= 5) unlock('fumes');
    },
  };

  /* ----- screen ----- */
  const sec = document.createElement('section');
  sec.id = 'achievements';
  sec.className = 'screen';
  sec.setAttribute('aria-labelledby', 'achH');
  sec.innerHTML = '<h2 id="achH">Achievements</h2><p id="achCount" class="lead"></p><div id="achGrid" class="ach-grid"></div><button type="button" class="back" data-act="title">Back</button>';
  stage.appendChild(sec);
  function render() {
    const done = LIST.filter((a) => have[a.id]).length;
    document.getElementById('achCount').textContent = done + ' of ' + LIST.length + ' unlocked';
    document.getElementById('achGrid').innerHTML = LIST.map((a) => {
      const got = !!have[a.id];
      const desc = got || !a.secret ? a.desc : 'A secret.';
      return '<div class="ach' + (got ? ' got' : '') + '"><div class="ach-mark" aria-hidden="true">' + (got ? '★' : '☆') + '</div><div><h3></h3><p></p></div></div>';
    }).join('');
    document.querySelectorAll('#achGrid .ach').forEach((el, i) => {
      const a = LIST[i], got = !!have[a.id];
      el.querySelector('h3').textContent = got || !a.secret ? a.name : '???';
      el.querySelector('p').textContent = got || !a.secret ? a.desc : 'A secret.';
    });
  }
  const menu = document.querySelector('#title .menu');
  if (menu) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = 'Achievements';
    b.addEventListener('click', () => {
      const n = window.FNAZNET;
      render();
      if (n && n.h && n.h.xn) n.h.xn('achievements');
    });
    menu.insertBefore(b, menu.querySelector('[data-act=settings]'));
  }
})();
