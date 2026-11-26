#!/usr/bin/env bash
# Runs every check. Needs: a static server on :8766 serving this folder, and the matchmaking server on :9000 (npm run peer).
cd "$(dirname "$0")/.."; export NODE_PATH=$(npm root -g); fail=0
run() { echo "== $1"; shift; "$@" 2>&1 | tail -${LINES_KEPT:-6}; [ "${PIPESTATUS[0]}" = 0 ] || { echo "FAILED"; fail=1; }; }
run lint npx eslint src
run ai-tests npm test --silent
run debug-page node tests/debug.cjs "?peer=localhost:9000"
run full-flow node tests/flow.cjs /tmp/f
run co-op node tests/coop.cjs
[ -n "$FNAZ_ADMIN_WORD" ] && run shop-admin node tests/shop-admin.cjs
run live-faces node tests/faces.cjs
run lore-case-file node tests/lore.cjs
run phone-audit node tests/audit.cjs
echo; [ $fail = 0 ] && echo "ALL CHECKS PASSED" || echo "SOME CHECKS FAILED"; exit $fail
