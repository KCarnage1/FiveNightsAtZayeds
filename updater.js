/* In-game updater.
 *
 * Every release publishes app.asar (the whole game, without Electron) next to the zips. The game asks GitHub for the
 * latest release, and if it is newer than the running version it can download that app.asar, check its SHA-256,
 * swap it in and restart, so a player never has to download and unzip the full 150 MB again.
 *
 * The new app.asar is saved in the game's own data folder (opt.updatesDir, which is always writable) and the game loads it
 * from there at the next start (see electron-main.js), so an update never needs admin rights or a write to the install folder.
 * Electron itself is not updated this way (it only changes when the game's Electron version does).
 * When a release ships a different Electron (a small electron.txt next to the zips says which), the whole build is
 * downloaded as well, unpacked into <updatesDir>/engine-<version> and started from there, and electron-main.js keeps starting
 * it from the old shortcut. So even an engine change never needs the GitHub page.
 * Without opt.updatesDir the file is swapped into the install folder instead; if that is not possible, or a release has no
 * app.asar, the "update" opens the download page.
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
  const updatesDir = opt.updatesDir || '';
  let asset = null; // { url, size, sha256 } of the release's app.asar
  let engine = null; // { url, size, sha256, electron } of the full build, when the release has a different Electron
  let busy = false;
  const st = { status: 'idle', current: opt.version, latest: null, size: 0, progress: 0, page: '', canInstall: false, engine: false, error: null };

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

  // The full build for this computer, if the release uses a different Electron from the one running now.
  async function findEngine(rel) {
    try {
      if (!updatesDir || !opt.engineZip || !opt.extract || !opt.electron) return null;
      const list = rel.assets || [];
      const zip = list.find((a) => a.name === opt.engineZip), mark = list.find((a) => a.name === 'electron.txt');
      if (!zip || !mark) return null;
      const res = await doFetch(mark.browser_download_url, { headers: { 'User-Agent': 'FiveNightsAtZayeds-updater' } });
      if (!res.ok) return null;
      const electron = String(await res.text()).trim();
      if (!/^\d+\.\d+\.\d+/.test(electron) || electron === opt.electron) return null;
      return { url: zip.browser_download_url, size: zip.size || 0, sha256: /^sha256:([0-9a-f]{64})$/i.test(zip.digest || '') ? zip.digest.slice(7).toLowerCase() : '', electron };
    } catch (e) { return null; }
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
      if (!isNewer(rel.tag_name, opt.version)) { asset = null; engine = null; return set({ status: 'uptodate', latest: String(rel.tag_name || '').replace(/^v/, '') }); }
      engine = await findEngine(rel);
      asset = found ? { url: found.browser_download_url, size: found.size || 0, sha256: /^sha256:([0-9a-f]{64})$/i.test(found.digest || '') ? found.digest.slice(7).toLowerCase() : '' } : null;
      set({ status: 'available', latest: String(rel.tag_name).replace(/^v/, ''), size: engine ? engine.size : asset ? asset.size : 0, engine: !!engine, page: rel.html_url || `https://github.com/${REPO}/releases/latest`, canInstall: (!!asset || !!engine) && (updatesDir ? true : writable()) });
    } catch (e) {
      asset = null; engine = null;
      // a quiet check on launch stays silent (offline is normal); a manual one reports the problem
      set(manual ? { status: 'error', error: e.message } : { status: 'idle' });
    }
  }

  // downloads the release's app.asar to `part`, checks its size and checksum
  async function download(a, part) {
    const res = await doFetch(a.url, { headers: { 'User-Agent': 'FiveNightsAtZayeds-updater' } });
    if (!res.ok || !res.body) throw new Error('Download failed (' + res.status + ')');
    const total = Number(res.headers.get('content-length')) || a.size || 0;
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
    if ((a.size && got !== a.size) || (total && got !== total)) throw new Error('The download was incomplete');
    if (a.sha256 && hash.digest('hex') !== a.sha256) throw new Error('The download did not match its checksum');
    return got;
  }

  // the whole build: download, unpack next to nothing else, check it has its program, then point at it
  async function installEngine() {
    const name = 'engine-' + st.latest, zipPart = path.join(updatesDir, name + '.zip.part'), zip = path.join(updatesDir, name + '.zip');
    const fresh = path.join(updatesDir, name + '.new'), final = path.join(updatesDir, name);
    fs.mkdirSync(updatesDir, { recursive: true });
    try {
      await download(engine, zipPart);
      fs.renameSync(zipPart, zip);
      fs.rmSync(fresh, { recursive: true, force: true });
      fs.mkdirSync(fresh, { recursive: true });
      await opt.extract(zip, fresh);
      if (!fs.existsSync(path.join(fresh, opt.engineExe))) throw new Error('The downloaded build has no program in it');
      fs.rmSync(final, { recursive: true, force: true });
      fs.renameSync(fresh, final);
    } finally {
      try { fs.unlinkSync(zipPart); } catch (e) { /* none */ }
      try { fs.unlinkSync(zip); } catch (e) { /* none */ }
      try { fs.rmSync(fresh, { recursive: true, force: true }); } catch (e) { /* none */ }
    }
    const pointer = path.join(updatesDir, 'engine.json');
    fs.writeFileSync(pointer + '.tmp', JSON.stringify({ version: st.latest, electron: engine.electron, dir: name, exe: opt.engineExe, tries: 0 }));
    fs.renameSync(pointer + '.tmp', pointer);
    for (const f of fs.readdirSync(updatesDir)) {
      if ((/^engine-/.test(f) && f !== name && !/\.json$/.test(f)) || /^app-.*\.asar$/.test(f) || f === 'current.json') { try { fs.rmSync(path.join(updatesDir, f), { recursive: true, force: true }); } catch (e) { /* in use: next time */ } }
    }
    set({ status: 'ready', progress: 100 });
    setTimeout(() => opt.launchEngine && opt.launchEngine(path.join(final, opt.engineExe)), 300);
  }

  async function install() {
    if (busy || st.status !== 'available') return;
    if (!st.canInstall || (!asset && !engine)) { if (opt.openExternal) opt.openExternal(st.page); return; }
    if ((engine && !engine.url.startsWith(allowPrefix)) || (asset && !asset.url.startsWith(allowPrefix))) return set({ status: 'error', error: 'Unexpected download address' });
    busy = true;
    if (engine) {
      try { set({ status: 'downloading', progress: 0, error: null }); await installEngine(); return; } catch (e) {
        if (!asset) { busy = false; return set({ status: 'error', error: e.message }); }
        engine = null; // could not use the full build: the game files alone still update
      }
    }
    const part = (updatesDir ? path.join(updatesDir, 'download') : opt.asarPath) + '.part';
    try {
      set({ status: 'downloading', progress: 0, error: null });
      if (updatesDir) fs.mkdirSync(updatesDir, { recursive: true });
      const size = await download(asset, part);
      if (updatesDir) {
        // keep the new file next to a small pointer; the game loads it at the next start and deletes older ones
        const name = 'app-' + st.latest + '.asar';
        fs.renameSync(part, path.join(updatesDir, name));
        const pointer = path.join(updatesDir, 'current.json');
        fs.writeFileSync(pointer + '.tmp', JSON.stringify({ version: st.latest, file: name, size }));
        fs.renameSync(pointer + '.tmp', pointer);
        for (const f of fs.readdirSync(updatesDir)) if (/^app-.*\.asar$/.test(f) && f !== name) { try { fs.unlinkSync(path.join(updatesDir, f)); } catch (e) { /* in use: next time */ } }
        set({ status: 'ready', progress: 100 });
        setTimeout(() => opt.relaunch && opt.relaunch(), 300);
        return;
      }
      const ready = opt.asarPath + '.new';
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
