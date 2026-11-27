// Desktop wrapper for Windows and Mac: opens the game in its own window. F11 toggles fullscreen.
// Discord Rich Presence needs the Discord app open on the same computer; without it the game runs normally.
const { app, BrowserWindow, ipcMain, shell, Menu, protocol, net } = require('electron');
const { pathToFileURL } = require('url');
const path = require('path');
const fs = require('fs');

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
// The game is served from app://game, not file://, so it can load its models and sounds and keeps one stable address for saved progress.
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]);
const single = app.requestSingleInstanceLock(); // a second copy just brings the first to the front
if (!single) app.quit();

function discordId() {
  const ok = (s) => (/^\d{17,20}$/.test(String(s || '').trim()) ? String(s).trim() : '');
  const fromFile = (f) => { try { return ok(JSON.parse(fs.readFileSync(f, 'utf8')).clientId); } catch (e) { return ''; } };
  return ok(process.env.FNAZ2_DISCORD_ID) || fromFile(path.join(__dirname, 'discord.json'));
}
const rpc = { client: null, ready: false, latest: null, sent: 0, timer: null, retry: null };
function rpcConnect(id) {
  let Client; try { ({ Client } = require('@xhayper/discord-rpc')); } catch (e) { return; }
  const client = new Client({ clientId: id }); rpc.client = client;
  client.on('ready', () => { rpc.ready = true; rpcFlush(); });
  client.on('disconnected', () => { rpc.ready = false; rpcRetry(id); });
  client.login().catch(() => rpcRetry(id)); // Discord is not open yet: try again later
}
function rpcRetry(id) {
  if (rpc.retry) return;
  rpc.retry = setTimeout(() => { rpc.retry = null; try { rpc.client && rpc.client.destroy(); } catch (e) { /* gone */ } rpcConnect(id); }, 20000); rpc.retry.unref();
}
// Discord allows about 5 updates per 20 seconds, so the newest status goes out at most every 5 seconds.
function rpcFlush() {
  if (!rpc.ready || !rpc.latest || rpc.timer) return;
  rpc.timer = setTimeout(() => {
    rpc.timer = null; const a = rpc.latest; rpc.latest = null; rpc.sent = Date.now();
    if (a && rpc.client && rpc.client.user) rpc.client.user.setActivity(a).catch(() => {});
  }, Math.max(0, rpc.sent + 5000 - Date.now()));
}
const text = (s, max) => String(s == null ? '' : s).slice(0, max).padEnd(2, ' '); // Discord needs 2 to 128 characters
ipcMain.on('fnaz:presence', (e, p) => {
  if (!p || typeof p !== 'object') return;
  const a = { details: text(p.details, 100), state: text(p.state, 100), largeImageKey: 'logo', largeImageText: "Five Nights at Zayed's 2", instance: false };
  if (Number.isFinite(p.since)) a.startTimestamp = Math.round(p.since);
  if (Array.isArray(p.party)) { const [size, max] = p.party.map((n) => Math.round(Number(n))); if (size >= 1 && max >= size && max <= 10) { a.partySize = size; a.partyMax = max; } }
  rpc.latest = a; rpcFlush();
});
ipcMain.on('fnaz:open', (e, url) => { if (typeof url === 'string' && /^https:\/\/[^\s]+$/i.test(url) && url.length < 400) shell.openExternal(url); });

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({ width: 1280, height: 720, backgroundColor: '#050308', autoHideMenuBar: true, title: "Five Nights at Zayed's 2", icon: path.join(__dirname, 'icon-512.png'), webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true } });
  win.loadURL('app://game/index.html');
  if (process.env.FNAZ2_SELFTEST) { // prints whether the game loaded and the status bridge works, then exits (0 = ok)
    win.webContents.on('did-finish-load', () => setTimeout(async () => {
      try { const r = await win.webContents.executeJavaScript("new Promise((ok) => { const t = setInterval(() => { if (window.FNAZ2 && window.fnaz && window.fnaz.presence) { clearInterval(t); window.fnaz.presence({ details: 'Night 1', state: 'test' }); ok('game loaded, bridge ok, saves ' + (localStorage ? 'ok' : 'off')); } }, 500); setTimeout(() => ok('timeout'), 60000); })"); console.log('SELFTEST', r); app.exit(/ok$/.test(r) ? 0 : 1); } catch (e) { console.log('SELFTEST failed', e); app.exit(1); }
    }, 1000));
  }
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https:\/\//.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('app://')) { e.preventDefault(); if (/^https:\/\//.test(url)) shell.openExternal(url); } });
  win.webContents.on('before-input-event', (e, i) => { if (i.type === 'keyDown' && i.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); } });
}
if (single) app.whenReady().then(() => {
  protocol.handle('app', (req) => {
    let rel; try { rel = decodeURIComponent(new URL(req.url).pathname).replace(/^\/+/, '') || 'index.html'; } catch (e) { return new Response('Bad request', { status: 400 }); }
    const file = path.normalize(path.join(__dirname, rel));
    if (!file.startsWith(__dirname + path.sep)) return new Response('Not found', { status: 404 }); // never leave the app folder
    return net.fetch(pathToFileURL(file).toString()).catch(() => { if (process.env.FNAZ2_SELFTEST) console.log('MISSING', rel); return new Response('Not found', { status: 404 }); });
  });
  require('electron').session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(false)); // the game asks for nothing, so nothing is allowed
  createWindow(); const id = discordId(); if (id) rpcConnect(id);
});
app.on('second-instance', () => { const w = BrowserWindow.getAllWindows()[0]; if (w) { if (w.isMinimized()) w.restore(); w.focus(); } });
app.on('window-all-closed', () => app.quit());
