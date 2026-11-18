// Desktop wrapper: opens the game fullscreen. F11 toggles fullscreen.
// Self-test: set FNZ_SELFTEST=1 to load the game hidden, check that every sound and
// video file decodes from inside the packaged app, print the result and exit (0 = ok).
const { app, BrowserWindow, ipcMain, screen, shell } = require('electron');
const { createUpdater, isNewer } = require('./updater');
const fs = require('fs');
const path = require('path');

/* ---------- a newer build in the game's data folder (engine updates) ----------
   When an update brings a different Electron, the updater unpacks the whole new build into <user data>/updates and writes
   engine.json. From then on this (older) program just starts that build and quits, so the old shortcut keeps working.
   If the new build never gets as far as opening a window twice in a row, the pointer is put aside and the game runs from here. */
const UPDATES = path.join(app.getPath('userData'), 'updates');
function engineExe() {
  if (!app.isPackaged || process.env.FNZ_NO_OVERLAY || process.env.FNAZ_ENGINE_CHILD) return null;
  const ofs = require('original-fs');
  const pointer = path.join(UPDATES, 'engine.json');
  try {
    const cur = JSON.parse(ofs.readFileSync(pointer, 'utf8'));
    const exe = path.join(UPDATES, path.basename(String(cur.dir)), String(cur.exe));
    if (!isNewer(cur.version, app.getVersion()) || cur.electron === process.versions.electron || !ofs.existsSync(exe)) return null;
    let ok = false;
    try { ok = String(ofs.readFileSync(path.join(UPDATES, 'engine.ok'), 'utf8')).trim() === String(cur.version); } catch (e) { /* not started yet */ }
    if (!ok && (cur.tries || 0) >= 2) { ofs.renameSync(pointer, path.join(UPDATES, 'engine.bad.json')); return null; }
    if (!ok) ofs.writeFileSync(pointer, JSON.stringify(Object.assign(cur, { tries: (cur.tries || 0) + 1 })));
    return exe;
  } catch (e) { return null; }
}
function launchEngine(exe) {
  const child = require('child_process').spawn(exe, process.argv.slice(1), { detached: true, stdio: 'ignore', env: Object.assign({}, process.env, { FNAZ_ENGINE_CHILD: '1' }) });
  child.on('error', () => {});
  child.unref();
}
const engine = engineExe();
if (engine) {
  try { launchEngine(engine); app.exit(0); return; } catch (e) { /* could not start it: carry on from here */ }
}
if (process.env.FNAZ_ENGINE_CHILD) { // this is the unpacked newer build: tell the old program it started
  app.whenReady().then(() => { try { require('original-fs').writeFileSync(path.join(UPDATES, 'engine.ok'), app.getVersion()); } catch (e) { /* not important */ } });
}
// unpacking the downloaded build: tar ships with Windows 10 and later, ditto with macOS
function extractZip(zip, dest) {
  const { execFile } = require('child_process');
  const run = (cmd, args) => new Promise((resolve, reject) => execFile(cmd, args, { windowsHide: true }, (err) => (err ? reject(err) : resolve())));
  if (process.platform === 'win32') {
    const sys = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32');
    return run(path.join(sys, 'tar.exe'), ['-xf', zip, '-C', dest]).catch(() => run(path.join(sys, 'WindowsPowerShell', 'v1.0', 'powershell.exe'), ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${zip.replace(/'/g, "''")}' -DestinationPath '${dest.replace(/'/g, "''")}' -Force`]));
  }
  if (process.platform === 'darwin') return run('ditto', ['-x', '-k', zip, dest]);
  return run('unzip', ['-q', zip, '-d', dest]);
}
const ENGINE_ZIP = process.platform === 'win32' ? 'FiveNightsAtZayeds-win32-x64.zip' : process.platform === 'darwin' ? `FiveNightsAtZayeds-mac-${process.arch === 'arm64' ? 'arm64' : 'x64'}.zip` : '';
const ENGINE_EXE = process.platform === 'win32' ? 'FiveNightsAtZayeds-win32-x64/FiveNightsAtZayeds.exe'
  : process.platform === 'darwin' ? 'FiveNightsAtZayeds.app/Contents/MacOS/FiveNightsAtZayeds' : 'FiveNightsAtZayeds';

/* ---------- updates are loaded from the game's data folder ----------
   The in-game updater saves a newer app.asar in <user data>/updates (always writable, no admin rights needed) and points
   current.json at it. If that file is newer than the installed one, this file hands over to the copy inside it. If it
   fails to start, the pointer is put aside and the installed version runs on the next launch. */
function updateOverlay() {
  if (!app.isPackaged || process.env.FNZ_NO_OVERLAY || global.__fnazOverlay) return null;
  try {
    const ofs = require('original-fs');
    const dir = UPDATES;
    const cur = JSON.parse(ofs.readFileSync(path.join(dir, 'current.json'), 'utf8'));
    const file = path.join(dir, path.basename(String(cur.file)));
    if (!/\.asar$/.test(file) || !isNewer(cur.version, app.getVersion()) || !ofs.existsSync(file) || ofs.statSync(file).size !== cur.size) return null;
    return { dir, file, version: String(cur.version) };
  } catch (e) { return null; }
}
const overlay = updateOverlay();
if (overlay) {
  global.__fnazOverlay = overlay;
  try {
    require(path.join(overlay.file, 'electron-main.js'));
    return; // the updated copy runs the game from here on
  } catch (e) {
    console.error('The update could not start; going back to the installed version.', e);
    try { const ofs = require('original-fs'); ofs.renameSync(path.join(overlay.dir, 'current.json'), path.join(overlay.dir, 'current.bad.json')); } catch (x) { /* nothing to put aside */ }
    app.relaunch(); app.exit(0);
    return;
  }
}
const VERSION = global.__fnazOverlay ? global.__fnazOverlay.version : app.getVersion();

const SELFTEST = !!process.env.FNZ_SELFTEST;
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

/* ---------- frame rate ----------
   By default Chromium locks drawing to the monitor's refresh rate (VSync). A custom limit
   chosen in Settings is saved to launch.json and, at the next launch, VSync is switched off
   so the game can go past the monitor (for example 280 FPS). The game then limits itself. */
const LAUNCH_FILE = path.join(app.getPath('userData'), 'launch.json');
const readLaunch = () => {
  if (process.env.FNZ_FPS) return { fps: process.env.FNZ_FPS === 'auto' ? 'auto' : Number(process.env.FNZ_FPS) }; // test override
  try { return JSON.parse(fs.readFileSync(LAUNCH_FILE, 'utf8')); } catch (e) { return {}; }
};
const uncapped = !!readLaunch().fps && readLaunch().fps !== 'auto';
if (uncapped) {
  app.commandLine.appendSwitch('disable-frame-rate-limit');
  app.commandLine.appendSwitch('disable-gpu-vsync');
}

/* ---------- Discord Rich Presence ----------
   Needs a Discord application ID (discord.com/developers/applications). Looked up in this order:
   the FNZ_DISCORD_ID environment variable, a discord.json next to the .exe, the discord.json inside the app.
   With no ID the game runs normally and shows nothing on Discord. */
function discordId() {
  const ok = (s) => (/^\d{17,20}$/.test(String(s || '').trim()) ? String(s).trim() : '');
  const fromFile = (f) => { try { return ok(JSON.parse(fs.readFileSync(f, 'utf8')).clientId); } catch (e) { return ''; } };
  return ok(process.env.FNZ_DISCORD_ID) || fromFile(path.join(path.dirname(process.execPath), 'discord.json')) || fromFile(path.join(__dirname, 'discord.json'));
}

const rpc = { client: null, ready: false, status: 'off', latest: null, sent: 0, timer: null, retry: null };

function rpcConnect(id) {
  const { Client } = require('@xhayper/discord-rpc');
  const client = new Client({ clientId: id });
  rpc.client = client;
  client.on('ready', () => { rpc.ready = true; rpc.status = 'connected'; rpcFlush(); });
  client.on('disconnected', () => { rpc.ready = false; rpc.status = 'waiting for Discord'; rpcRetry(id); });
  client.login().catch(() => { rpc.status = 'waiting for Discord'; rpcRetry(id); }); // Discord is not open yet
}
function rpcRetry(id) {
  if (rpc.retry) return;
  rpc.retry = setTimeout(() => { rpc.retry = null; try { rpc.client && rpc.client.destroy(); } catch (e) {} rpcConnect(id); }, 20000);
  rpc.retry.unref();
}
// Discord allows about 5 updates per 20 seconds, so send the newest status at most every 5 seconds.
function rpcFlush() {
  if (!rpc.ready || !rpc.latest || rpc.timer) return;
  const wait = Math.max(0, rpc.sent + 5000 - Date.now());
  rpc.timer = setTimeout(() => {
    rpc.timer = null;
    const a = rpc.latest; rpc.latest = null; rpc.sent = Date.now();
    if (a && rpc.client && rpc.client.user) rpc.client.user.setActivity(a).catch(() => {});
  }, wait);
}
const text = (s, max) => String(s == null ? '' : s).slice(0, max).padEnd(2, ' '); // Discord needs 2 to 128 characters

ipcMain.on('fnaz:presence', (e, p) => {
  if (!p || typeof p !== 'object' || rpc.status === 'off') return;
  const a = { details: text(p.details, 100), state: text(p.state, 100), largeImageKey: 'logo', largeImageText: "Five Nights at Zayed's", instance: false };
  if (Number.isFinite(p.since)) a.startTimestamp = Math.round(p.since);
  if (Array.isArray(p.party)) { // online play: shows "(1 of 2)" on the Discord card
    const [size, max] = p.party.map((n) => Math.round(Number(n)));
    if (size >= 1 && max >= size && max <= 10) { a.partySize = size; a.partyMax = max; }
  }
  rpc.latest = a;
  rpcFlush();
});
ipcMain.handle('fnaz:info', () => ({ uncapped, refresh: screen.getPrimaryDisplay().displayFrequency || 60, discord: rpc.status }));
ipcMain.on('fnaz:fps', (e, v) => {
  const fps = v === 'auto' ? 'auto' : Math.round(Number(v));
  if (fps !== 'auto' && !(fps >= 15 && fps <= 1000)) return;
  try { fs.mkdirSync(path.dirname(LAUNCH_FILE), { recursive: true }); fs.writeFileSync(LAUNCH_FILE, JSON.stringify({ fps })); } catch (err) {}
});
ipcMain.on('fnaz:relaunch', () => { app.relaunch(); app.exit(0); });
// the admin's publishing key lives in a file only this computer's user account can decrypt (Electron safeStorage)
const KEY_FILE = path.join(app.getPath('userData'), 'admin.key');
ipcMain.handle('fnaz:secret-save', (e, t) => {
  const { safeStorage } = require('electron');
  try {
    if (!t) { fs.rmSync(KEY_FILE, { force: true }); return true; }
    if (typeof t !== 'string' || t.length > 400 || !safeStorage.isEncryptionAvailable()) return false;
    fs.writeFileSync(KEY_FILE, safeStorage.encryptString(t)); return true;
  } catch (err) { return false; }
});
ipcMain.handle('fnaz:secret-load', () => {
  const { safeStorage } = require('electron');
  try { return safeStorage.isEncryptionAvailable() && fs.existsSync(KEY_FILE) ? safeStorage.decryptString(fs.readFileSync(KEY_FILE)) : ''; } catch (err) { return ''; }
});
ipcMain.on('fnaz:open', (e, url) => { if (typeof url === 'string' && /^https:\/\/[^\s]+$/i.test(url) && url.length < 400) shell.openExternal(url); });

/* ---------- updates ----------
   Checks GitHub for a newer release a few seconds after launch (set FNZ_NO_UPDATE=1 to turn that off).
   The renderer shows the banner; see updater.js for how the swap works. Only packaged builds update themselves. */
let updater = null;
function startUpdater(win) {
  const enabled = app.isPackaged && !process.env.FNZ_NO_UPDATE;
  updater = createUpdater({
    enabled,
    fs: require('original-fs'), // plain fs: the patched one treats app.asar as read-only
    version: VERSION,
    updatesDir: UPDATES,
    electron: process.versions.electron,
    engineZip: process.env.FNZ_ENGINE_ZIP || ENGINE_ZIP,
    engineExe: process.env.FNZ_ENGINE_EXE || ENGINE_EXE,
    extract: extractZip,
    launchEngine: (exe) => { launchEngine(exe); app.exit(0); },
    asarPath: path.join(process.resourcesPath || '', 'app.asar'),
    platform: process.platform,
    execPath: process.execPath,
    relaunch: () => { app.relaunch(); app.exit(0); },
    quit: () => app.exit(0),
    openExternal: (u) => { if (/^https:\/\/github\.com\//.test(u)) shell.openExternal(u); },
    onState: (s) => { if (!win.isDestroyed()) win.webContents.send('fnaz:update', s); }
  });
  if (enabled) setTimeout(() => updater.check(false), 4000);
}
ipcMain.handle('fnaz:update-state', () => (updater ? updater.state() : null));
ipcMain.on('fnaz:update-check', () => { if (updater) updater.check(true); });
ipcMain.on('fnaz:update-install', () => { if (updater) updater.install(); });

app.whenReady().then(() => {
  const id = SELFTEST ? '' : discordId();
  if (id) { rpc.status = 'waiting for Discord'; rpcConnect(id); }
  console.log('DISCORD ' + (id ? 'application id found' : 'no application id (presence off)'));

  const win = new BrowserWindow({
    width: 1600, height: 900, fullscreen: !SELFTEST, show: !SELFTEST || !!process.env.FNZ_FPSTEST, // the frame-rate test needs a visible window backgroundColor: '#120d10',
    autoHideMenuBar: true, title: "Five Nights at Zayed's",
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, backgroundThrottling: false }
  });
  win.removeMenu();
  win.loadFile(path.join(__dirname, 'index.html'));
  if (!SELFTEST) startUpdater(win);
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') win.setFullScreen(!win.isFullScreen());
  });
  if (!SELFTEST) return;
  if (process.env.FNZ_FPSTEST) { // measures real frames per second: FNZ_FPS=280 FNZ_FPSTEST=280 (VSync off, cap 280)
    win.webContents.on('did-finish-load', async () => {
      const cap = process.env.FNZ_FPSTEST === 'auto' ? "'auto'" : Number(process.env.FNZ_FPSTEST);
      const r = await win.webContents.executeJavaScript(`new Promise(async (res) => {
        while (!(window.FNZ && FNZ.ready)) await new Promise(r => setTimeout(r, 100));
        FNZ.beginOffice(1, true); Object.values(FNZ.G.ai).forEach(a => a.ai = 0); FNZ.save.fps = ${cap};
        await new Promise(r => setTimeout(r, 1500));
        const t0 = FNZ.G.time, f0 = FNZ.frames, p0 = performance.now();
        await new Promise(r => setTimeout(r, 4000));
        const sec = (performance.now() - p0) / 1000;
        res({ cap: ${cap}, fps: Math.round((FNZ.frames - f0) / sec), gameSecPerRealSec: +((FNZ.G.time - t0) / sec).toFixed(2), visible: document.visibilityState });
      })`);
      console.log('FPSTEST ' + JSON.stringify(r));
      app.exit(0);
    });
    return;
  }
  win.webContents.on('did-finish-load', async () => {
    let code = 1;
    try {
      const r = await win.webContents.executeJavaScript(`new Promise((res, rej) => {
        const t0 = Date.now();
        (function wait() {
          if (window.FNZ && FNZ.ready) return FNZ.selftest().then(res, rej);
          if (Date.now() - t0 > 30000) return rej(new Error('game did not finish loading: ' + document.getElementById('bootMsg')?.textContent));
          setTimeout(wait, 200);
        })();
      })`);
      const bridge = await win.webContents.executeJavaScript('window.fnaz ? fnaz.info() : null');
      console.log('SELFTEST ' + JSON.stringify(Object.assign(r, { bridge })));
      code = r.failed.length || !r.world || !r.font || !bridge ? 1 : 0;
    } catch (e) { console.log('SELFTEST ERROR ' + e.message); }
    app.exit(code);
  });
});

app.on('before-quit', () => { try { rpc.client && rpc.client.destroy(); } catch (e) {} });
app.on('window-all-closed', () => app.quit());
