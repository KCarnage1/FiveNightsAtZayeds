/* Update banner (title screen) and the Version row in Settings. Does nothing outside the desktop app. */
(() => {
  'use strict';
  const api = window.fnaz && window.fnaz.update;
  if (!api) return;
  const $ = (s) => document.querySelector(s);

  const banner = document.createElement('div');
  banner.id = 'upBanner';
  banner.hidden = true;
  banner.innerHTML = '<span id="upText"></span> <button type="button" id="upGo" class="primary">Update now</button> <button type="button" id="upLater">Later</button>';
  $('#title').appendChild(banner);

  const row = document.createElement('div');
  row.className = 'set-row';
  row.innerHTML = '<span>Version <span id="upVer"></span></span><div class="up-row"><button type="button" id="upCheck">Check for updates</button> <span id="upMsg" aria-live="polite"></span></div>';
  const settings = $('#settings .settings');
  if (settings) settings.insertBefore(row, settings.firstChild);

  let dismissed = false;
  const mb = (n) => (n / 1048576).toFixed(0) + ' MB';

  function render(s) {
    if (!s) return;
    $('#upVer').textContent = s.current || '';
    const ver = $('#title .ver');
    if (ver && s.current) ver.textContent = 'Version ' + s.current + '. Produced by Qerh Cooperations.';
    const msg = $('#upMsg'), text = $('#upText'), go = $('#upGo'), later = $('#upLater');
    let show = false;
    msg.textContent = '';
    if (s.status === 'checking') msg.textContent = 'Checking…';
    else if (s.status === 'uptodate') msg.textContent = 'You have the latest version.';
    else if (s.status === 'error') msg.textContent = 'Could not update: ' + s.error;
    else if (s.status === 'available') {
      msg.textContent = 'Version ' + s.latest + ' is available.';
      text.textContent = 'Version ' + s.latest + ' is available' + (s.canInstall && s.size ? ' (' + mb(s.size) + ')' : '') + '.';
      go.textContent = s.canInstall ? 'Update now' : 'Open download page';
      go.hidden = later.hidden = false;
      show = !dismissed;
    } else if (s.status === 'downloading') {
      text.textContent = 'Downloading ' + (s.latest || 'update') + '… ' + (s.progress || 0) + '%';
      msg.textContent = text.textContent;
      go.hidden = later.hidden = true;
      show = true;
    } else if (s.status === 'ready') {
      text.textContent = 'Update downloaded. Restarting…';
      msg.textContent = text.textContent;
      go.hidden = later.hidden = true;
      show = true;
    }
    banner.hidden = !show;
    $('#upCheck').disabled = s.status === 'checking' || s.status === 'downloading' || s.status === 'ready';
  }

  $('#upGo').addEventListener('click', () => api.install());
  $('#upLater').addEventListener('click', () => { dismissed = true; banner.hidden = true; });
  $('#upCheck').addEventListener('click', () => { dismissed = false; api.check(); });
  api.onState(render);
  api.state().then(render).catch(() => {});
})();
