#!/usr/bin/env bash
# Builds the web (phone) version into a folder: scripts/build-web.sh <out dir> <version>
set -euo pipefail
OUT="${1:?output folder}"; VER="${2:-dev}"
rm -rf "$OUT"; mkdir -p "$OUT"
cp index.html styles.css audio.js net.js touch.js motion.js ai.js fnaz-ai.wasm.js ai-wasm.js secret.js achievements.js night5.js pwa.js update.js peerjs.min.js game.bundle.js manifest.webmanifest sw.js "$OUT/"
cp -r assets "$OUT/assets"
touch "$OUT/.nojekyll"
sed -i "s/__VERSION__/$VER/" "$OUT/sw.js"
# everything except the videos and the worker itself is cached when the page first loads
( cd "$OUT" && { echo '"./"'; find . -type f ! -name '*.mp4' ! -name sw.js ! -name precache.json ! -name .nojekyll | sort | sed 's/.*/"&"/'; } | paste -sd, | sed 's/^/[/; s/$/]/' > precache.json )
echo "built $OUT (version $VER): $(du -sh "$OUT" | cut -f1) total, $(python3 -c "import json;print(len(json.load(open('$OUT/precache.json'))))") files cached up front"
