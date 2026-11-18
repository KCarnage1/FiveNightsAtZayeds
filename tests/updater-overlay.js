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
  console.log('updater: 4 checks passed (installs without write access to the install folder, prunes old files, rejects bad checksums)');
})().catch((e) => { console.error('FAILED', e); process.exit(1); });
