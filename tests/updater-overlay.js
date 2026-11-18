/* The in-game updater saves a new app.asar in the game's data folder, with no write access to the install folder.
 * Run: node tests/updater-overlay.js */
'use strict';
const fs = require('fs'), os = require('os'), path = require('path'), crypto = require('crypto'), assert = require('assert');
const { createUpdater } = require('../updater');
(async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fnaz-upd-'));
  const bytes = crypto.randomBytes(300000), sha = crypto.createHash('sha256').update(bytes).digest('hex');
  const rel = (tag, digest) => ({ tag_name: tag, html_url: 'https://github.com/KCarnage1/FiveNightsAtZayeds/releases/tag/' + tag, assets: [{ name: 'app.asar', browser_download_url: 'https://github.com/KCarnage1/FiveNightsAtZayeds/releases/download/' + tag + '/app.asar', size: bytes.length, digest }] });
  const mkFetch = (r, body) => async (url) => (/api\.github\.com/.test(url)
    ? { ok: true, status: 200, json: async () => r }
    : { ok: true, status: 200, headers: { get: () => String(body.length) }, body: new ReadableStream({ start(c) { for (let i = 0; i < body.length; i += 65536) c.enqueue(new Uint8Array(body.subarray(i, i + 65536))); c.close(); } }) });
  let relaunched = 0; const states = [];
  const make = (r, body) => createUpdater({ version: '1.4.3', asarPath: '/nonexistent/resources/app.asar', updatesDir: dir + '/updates', fetch: mkFetch(r, body), relaunch: () => relaunched++, onState: (s) => states.push(s.status) });

  // 1) install folder not writable (nonexistent), yet the update installs in the app
  let u = make(rel('v1.4.4', 'sha256:' + sha), bytes);
  await u.check(true);
  assert.strictEqual(u.state().status, 'available'); assert.strictEqual(u.state().canInstall, true, 'canInstall must not depend on the install folder');
  await u.install(); await new Promise((r) => setTimeout(r, 500));
  assert.strictEqual(u.state().status, 'ready'); assert.strictEqual(relaunched, 1);
  const cur = JSON.parse(fs.readFileSync(dir + '/updates/current.json', 'utf8'));
  assert.deepStrictEqual(cur, { version: '1.4.4', file: 'app-1.4.4.asar', size: bytes.length });
  assert.ok(fs.readFileSync(dir + '/updates/app-1.4.4.asar').equals(bytes), 'saved file is the download');
  assert.ok(!fs.existsSync(dir + '/updates/download.part'), 'no partial file left');

  // 2) a later update replaces and prunes the old file
  const bytes2 = crypto.randomBytes(1000);
  u = createUpdater({ version: '1.4.4', asarPath: '/x/app.asar', updatesDir: dir + '/updates', fetch: mkFetch(Object.assign(rel('v1.4.5', ''), { assets: [{ name: 'app.asar', browser_download_url: 'https://github.com/KCarnage1/FiveNightsAtZayeds/releases/download/v1.4.5/app.asar', size: bytes2.length, digest: '' }] }), bytes2), relaunch() {} });
  await u.check(true); await u.install(); await new Promise((r) => setTimeout(r, 500));
  assert.deepStrictEqual(fs.readdirSync(dir + '/updates').sort(), ['app-1.4.5.asar', 'current.json'], 'old update removed');

  // 3) a wrong checksum is refused and nothing is saved
  const dir2 = dir + '/bad';
  u = createUpdater({ version: '1.4.3', asarPath: '/x/app.asar', updatesDir: dir2, fetch: mkFetch(rel('v1.4.4', 'sha256:' + '0'.repeat(64)), bytes), relaunch() {} });
  await u.check(true); await u.install();
  assert.strictEqual(u.state().status, 'error'); assert.match(u.state().error, /checksum/);
  assert.ok(!fs.existsSync(dir2 + '/current.json'), 'no pointer after a bad download');

  // 4) already up to date
  u = createUpdater({ version: '1.4.4', asarPath: '/x/app.asar', updatesDir: dir + '/u3', fetch: mkFetch(rel('v1.4.4', ''), bytes), relaunch() {} });
  await u.check(true); assert.strictEqual(u.state().status, 'uptodate');
  // 5) a release with a different Electron: the whole build is downloaded and unpacked, and a pointer is written
  const zipBytes = crypto.randomBytes(5000), zipSha = crypto.createHash('sha256').update(zipBytes).digest('hex');
  const R = (tag) => ({ tag_name: tag, html_url: 'x', assets: [
    { name: 'app.asar', browser_download_url: 'https://github.com/KCarnage1/FiveNightsAtZayeds/releases/download/' + tag + '/app.asar', size: bytes.length, digest: 'sha256:' + sha },
    { name: 'electron.txt', browser_download_url: 'https://github.com/KCarnage1/FiveNightsAtZayeds/releases/download/' + tag + '/electron.txt', size: 7, digest: '' },
    { name: 'Game.zip', browser_download_url: 'https://github.com/KCarnage1/FiveNightsAtZayeds/releases/download/' + tag + '/Game.zip', size: zipBytes.length, digest: 'sha256:' + zipSha }] });
  const fetchE = (electron, failZip) => async (url) => {
    if (/api\.github\.com/.test(url)) return { ok: true, status: 200, json: async () => R('v2.0.0') };
    if (/electron\.txt$/.test(url)) return { ok: true, text: async () => electron + '\n' };
    const body = /Game\.zip$/.test(url) ? (failZip ? Buffer.from('bad') : zipBytes) : bytes;
    return { ok: true, status: 200, headers: { get: () => String(body.length) }, body: new ReadableStream({ start(c) { c.enqueue(new Uint8Array(body)); c.close(); } }) };
  };
  const dir5 = dir + '/eng'; let launched = null;
  const mkE = (electron, extract) => createUpdater({ version: '1.4.4', electron: '33.2.0', engineZip: 'Game.zip', engineExe: 'Game/play', extract, asarPath: '/x/app.asar', updatesDir: dir5, fetch: fetchE(electron), relaunch() { launched = 'asar'; }, launchEngine: (exe) => { launched = exe; } });
  const unzip = async (zip, dest) => { fs.mkdirSync(dest + '/Game', { recursive: true }); fs.writeFileSync(dest + '/Game/play', 'program'); };
  u = mkE('33.2.0', unzip); await u.check(true);                     // same Electron: only the game files
  assert.strictEqual(u.state().engine, false); assert.strictEqual(u.state().size, bytes.length);
  u = mkE('34.0.0', unzip); await u.check(true);                     // different Electron: the whole build
  assert.strictEqual(u.state().engine, true); assert.strictEqual(u.state().size, zipBytes.length);
  await u.install(); await new Promise((r) => setTimeout(r, 500));
  assert.strictEqual(u.state().status, 'ready'); assert.strictEqual(launched, path.join(dir5, 'engine-2.0.0', 'Game/play'));
  assert.deepStrictEqual(JSON.parse(fs.readFileSync(dir5 + '/engine.json', 'utf8')), { version: '2.0.0', electron: '34.0.0', dir: 'engine-2.0.0', exe: 'Game/play', tries: 0 });
  assert.strictEqual(fs.readFileSync(dir5 + '/engine-2.0.0/Game/play', 'utf8'), 'program');
  assert.deepStrictEqual(fs.readdirSync(dir5).sort(), ['engine-2.0.0', 'engine.json']);
  // 6) the full build cannot be unpacked: the game files still update
  const dir6 = dir + '/eng2'; launched = null;
  u = createUpdater({ version: '1.4.4', electron: '33.2.0', engineZip: 'Game.zip', engineExe: 'Game/play', extract: async () => { throw new Error('no tar'); }, asarPath: '/x/app.asar', updatesDir: dir6, fetch: fetchE('34.0.0'), relaunch() { launched = 'asar'; }, launchEngine() { launched = 'engine'; } });
  await u.check(true); await u.install(); await new Promise((r) => setTimeout(r, 500));
  assert.strictEqual(u.state().status, 'ready'); assert.strictEqual(launched, 'asar'); assert.ok(fs.existsSync(dir6 + '/current.json'));
  console.log('updater: 6 checks passed (installs without write access to the install folder, prunes old files, rejects bad checksums, replaces the whole build when Electron changes, falls back to the game files)');
})().catch((e) => { console.error('FAILED', e); process.exit(1); });
