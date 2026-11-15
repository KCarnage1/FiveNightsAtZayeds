// Desktop wrapper: opens the game fullscreen. F11 toggles fullscreen.
// Self-test: set FNZ_SELFTEST=1 to load the game hidden, check that every sound and
// video file decodes from inside the packaged app, print the result and exit (0 = ok).
const { app, BrowserWindow, ipcMain, screen } = require('electron');
const fs = require('fs');
const path = require('path');

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
