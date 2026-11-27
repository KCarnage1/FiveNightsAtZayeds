#!/usr/bin/env bash
# Builds the playable web version into a folder: fnaz2/scripts/build-web.sh <out dir> <version>   (run from the fnaz2 folder or anywhere)
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="${1:?output folder}"; VER="${2:-dev}"
[ -d node_modules ] || npm ci
npm run build --silent
rm -rf "$OUT"; mkdir -p "$OUT"
cp index.html debug.html styles.css game.bundle.js debug.bundle.js manifest.webmanifest sw.js icon.svg icon-192.png icon-512.png "$OUT/"
mkdir -p "$OUT/assets"; cp -r assets/faces assets/models assets/voice "$OUT/assets/"
touch "$OUT/.nojekyll"
VERSION=$(node -p "require('./package.json').version")
sed -i "s/__BUILD__/$VER/g" "$OUT/game.bundle.js"
# version.json: what the in-game updater compares against, plus the latest release notes from the changelog
node -e "
const fs=require('fs'); const log=fs.readFileSync('CHANGELOG.md','utf8').split(/^## /m)[1]||''; const lines=log.split('\n'); const notes=lines.slice(1).filter(l=>l.startsWith('- ')).map(l=>l.slice(2));
fs.writeFileSync(process.argv[1]+'/version.json', JSON.stringify({version:process.argv[2],build:process.argv[3],built:new Date().toISOString(),notes}, null, 1));" "$OUT" "$VERSION" "$VER"
sed -i "s/__VERSION__/$VER/" "$OUT/sw.js"
( cd "$OUT" && { echo '"./"'; find . -type f ! -name sw.js ! -name precache.json ! -name .nojekyll ! -name 'debug*' | sort | sed 's/.*/"&"/'; } | paste -sd, | sed 's/^/[/; s/$/]/' > precache.json )
echo "built $OUT (version $VER): $(du -sh "$OUT" | cut -f1) total"
