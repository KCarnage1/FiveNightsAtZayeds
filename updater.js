/* In-game updater.
 *
 * Every release publishes app.asar (the whole game, without Electron) next to the zips. The game asks GitHub for the
 * latest release, and if it is newer than the running version it can download that app.asar, check its SHA-256,
 * swap it in and restart, so a player never has to download and unzip the full 150 MB again.
 *
 * Electron itself is not updated this way (it only changes when the game's Electron version does).
 * If the install folder is not writable, or a release has no app.asar, the "update" opens the download page instead.
 * Nothing here touches Electron, so it can be tested in plain Node (see createUpdater's options). */
'use strict';
const nodeFs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawn } = require('child_process');

const REPO = 'KCarnage1/FiveNightsAtZayeds';

function parseVersion(v) {
  const m = /^v?(\d+)\.(\d+)\.(\d+)/.exec(String(v || ''));
  return m ? [+m[1], +m[2], +m[3]] : null;
}
function isNewer(a, b) {
  const x = parseVersion(a), y = parseVersion(b);
  if (!x || !y) return false;
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
}

function createUpdater(opt) {
  // Inside Electron the normal fs treats app.asar as a read-only folder, so the app passes in 'original-fs'.
  const fs = opt.fs || nodeFs;
  const apiUrl = opt.apiUrl || `https://api.github.com/repos/${REPO}/releases/latest`;
  const allowPrefix = opt.allowUrlPrefix || `https://github.com/${REPO}/releases/download/`;
  const webBase = opt.webBase || 'https://github.com';
  const doFetch = opt.fetch || globalThis.fetch;
  let asset = null; // { url, size, sha256 } of the release's app.asar
  let busy = false;
  const st = { status: 'idle', current: opt.version, latest: null, size: 0, progress: 0, page: '', canInstall: false, error: null };

  function set(patch) {
    Object.assign(st, patch);
    if (opt.onState) opt.onState(Object.assign({}, st));
  }

  function writable() {
    try {
      if (!opt.asarPath || !opt.asarPath.endsWith('.asar') || !fs.existsSync(opt.asarPath)) return false;
      fs.accessSync(path.dirname(opt.asarPath), fs.constants.W_OK);
      fs.accessSync(opt.asarPath, fs.constants.W_OK);
      return true;
    } catch (e) { return false; }
  }

  // The same facts without the API: /releases/latest redirects to the newest tag, and the file's address never changes.
  async function viaWebsite() {
    const r = await doFetch(`${webBase}/${REPO}/releases/latest`, { redirect: 'manual', headers: { 'User-Agent': 'FiveNightsAtZayeds-updater' } });
    const m = /\/releases\/tag\/(v?\d+\.\d+\.\d+)/.exec(r.headers.get('location') || '');
    if (!m) throw new Error('Could not read the latest release');
    const url = `${webBase}/${REPO}/releases/download/${m[1]}/app.asar`;
    const head = await doFetch(url, { method: 'HEAD', headers: { 'User-Agent': 'FiveNightsAtZayeds-updater' } });
    const assets = head.ok ? [{ name: 'app.asar', browser_download_url: url, size: Number(head.headers.get('content-length')) || 0, digest: '' }] : [];
    return { tag_name: m[1], html_url: `${webBase}/${REPO}/releases/tag/${m[1]}`, assets };
  }

  async function check(manual) {
    if (opt.enabled === false || busy) return;
    set({ status: 'checking', error: null });
    try {
      let rel;
      const res = await doFetch(apiUrl, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'FiveNightsAtZayeds-updater' } });
      if (res.ok) rel = await res.json();
      else if (res.status === 403 || res.status === 429) rel = await viaWebsite(); // anonymous API limit (shared network): use the release page instead
      else throw new Error('GitHub answered ' + res.status);
      const found = (rel.assets || []).find((a) => a.name === 'app.asar');
      if (!isNewer(rel.tag_name, opt.version)) { asset = null; return set({ status: 'uptodate', latest: String(rel.tag_name || '').replace(/^v/, '') }); }
      asset = found ? { url: found.browser_download_url, size: found.size || 0, sha256: /^sha256:([0-9a-f]{64})$/i.test(found.digest || '') ? found.digest.slice(7).toLowerCase() : '' } : null;
      set({ status: 'available', latest: String(rel.tag_name).replace(/^v/, ''), size: asset ? asset.size : 0, page: rel.html_url || `https://github.com/${REPO}/releases/latest`, canInstall: !!asset && writable() });
    } catch (e) {
      asset = null;
      // a quiet check on launch stays silent (offline is normal); a manual one reports the problem
      set(manual ? { status: 'error', error: e.message } : { status: 'idle' });
    }
  }

  async function install() {
    if (busy || st.status !== 'available') return;
    if (!st.canInstall || !asset) { if (opt.openExternal) opt.openExternal(st.page); return; }
    if (!asset.url.startsWith(allowPrefix)) return set({ status: 'error', error: 'Unexpected download address' });
    busy = true;
    const part = opt.asarPath + '.part', ready = opt.asarPath + '.new';
    try {
      set({ status: 'downloading', progress: 0, error: null });
      const res = await doFetch(asset.url, { headers: { 'User-Agent': 'FiveNightsAtZayeds-updater' } });
      if (!res.ok || !res.body) throw new Error('Download failed (' + res.status + ')');
      const total = Number(res.headers.get('content-length')) || asset.size || 0;
      const hash = crypto.createHash('sha256');
      const out = fs.createWriteStream(part);
      let got = 0, lastPct = -1;
      const reader = res.body.getReader();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        hash.update(value);
        if (!out.write(value)) await new Promise((r) => out.once('drain', r));
        got += value.length;
        const pct = total ? Math.floor((got / total) * 100) : 0;
        if (pct !== lastPct) { lastPct = pct; set({ progress: pct }); }
      }
      await new Promise((resolve, reject) => { out.end((err) => (err ? reject(err) : resolve())); });
      if ((asset.size && got !== asset.size) || (total && got !== total)) throw new Error('The download was incomplete');
      if (asset.sha256 && hash.digest('hex') !== asset.sha256) throw new Error('The download did not match its checksum');
      fs.renameSync(part, ready);
      set({ status: 'ready', progress: 100 });
      apply(ready);
    } catch (e) {
      try { fs.unlinkSync(part); } catch (x) { /* nothing to clean */ }
      busy = false;
      set({ status: 'error', error: e.message });
    }
  }

  function apply(ready) {
    if (opt.platform === 'win32') {
      // Windows will not replace a file that is in use, so a tiny detached script swaps it once the game has quit.
      const q = (p) => '"' + p.replace(/"/g, '') + '"';
      const script = `ping 127.0.0.1 -n 4 >nul & move /y ${q(ready)} ${q(opt.asarPath)} >nul & start "" ${q(opt.execPath)}`;
      spawn('cmd.exe', ['/d', '/s', '/c', '"' + script + '"'], { detached: true, stdio: 'ignore', windowsHide: true, windowsVerbatimArguments: true }).unref();
      setTimeout(() => opt.quit && opt.quit(), 300);
    } else {
      fs.renameSync(ready, opt.asarPath); // fine on macOS and Linux even while the old file is open
      setTimeout(() => opt.relaunch && opt.relaunch(), 300);
    }
  }

  return { check, install, state: () => Object.assign({}, st), isNewer };
}

module.exports = { createUpdater, isNewer, parseVersion };
