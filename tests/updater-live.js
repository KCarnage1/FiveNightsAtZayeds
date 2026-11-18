/* Runs the real updater against the real latest GitHub release, pretending to be an old install that cannot write to its own
 * folder. Proves the whole in-app path (look up, download, checksum, save in the data folder) works without the GitHub page.
 * Needs internet. Usage: node tests/updater-live.js [pretend-version] */
'use strict';
const fs = require('fs'), os = require('os'), path = require('path'), assert = require('assert');
const { createUpdater } = require('../updater');
(async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fnaz-live-'));
  let opened = null, relaunched = false;
  const u = createUpdater({
    version: process.argv[2] || '1.0.0', asarPath: '/nonexistent/resources/app.asar', updatesDir: dir, electron: '33.2.0',
    engineZip: 'FiveNightsAtZayeds-win32-x64.zip', engineExe: 'FiveNightsAtZayeds-win32-x64/FiveNightsAtZayeds.exe', extract: async () => { throw new Error('not exercised here'); },
    openExternal: (url) => { opened = url; }, relaunch: () => { relaunched = true; }
  });
  await u.check(true);
  const s = u.state();
  console.log('latest release:', s.latest, '| status:', s.status, '| in-app install possible:', s.canInstall, '| size:', Math.round(s.size / 1048576) + ' MB', '| engine change:', s.engine);
  assert.strictEqual(s.status, 'available', s.error || 'no update found');
  assert.strictEqual(s.canInstall, true, 'the update would send the player to the GitHub page');
  await u.install();
  await new Promise((r) => setTimeout(r, 600));
  assert.strictEqual(opened, null, 'the GitHub page was opened');
  assert.strictEqual(u.state().status, 'ready', u.state().error || 'install did not finish');
  const cur = JSON.parse(fs.readFileSync(path.join(dir, 'current.json'), 'utf8'));
  const size = fs.statSync(path.join(dir, cur.file)).size;
  assert.strictEqual(size, cur.size);
  assert.ok(relaunched, 'the game would not restart itself');
  console.log('installed in the data folder:', cur.file, Math.round(size / 1048576) + ' MB, checksum verified, restart requested, GitHub page not opened');
  console.log(dir);
})().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
