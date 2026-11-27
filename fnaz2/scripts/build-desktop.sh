#!/usr/bin/env bash
# Makes the folder the desktop app is packaged from: the web build plus the Electron wrapper and its one dependency.
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="${1:?output folder}"
VERSION=$(node -p "require('./package.json').version")
./scripts/build-web.sh "$OUT" "$VERSION"
cp desktop/main.js desktop/preload.js desktop/discord.json icon-512.png "$OUT/"
rm -f "$OUT/sw.js" "$OUT/debug.html" "$OUT/debug.bundle.js" "$OUT/precache.json"
node -e "require('fs').writeFileSync(process.argv[1]+'/package.json', JSON.stringify({name:'fnaz2',productName:'Five Nights at Zayeds 2',version:process.argv[2],main:'main.js',dependencies:{'@xhayper/discord-rpc':'1.5.1'}},null,1))" "$OUT" "$VERSION"
( cd "$OUT" && npm install --omit=dev --silent )
echo "desktop app folder ready: $OUT"
