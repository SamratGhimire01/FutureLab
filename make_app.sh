#!/bin/bash
# Makes "Future Lab.app" here: double-click it (or drag it to your Dock / Desktop) to start and open Future Lab.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
PY="$(command -v python3)"
rm -rf "$HERE/Future Lab.app"
osacompile -o "$HERE/Future Lab.app" -e "do shell script \"cd '$HERE' && FUTURELAB_DATA='${FUTURELAB_DATA:-}' nohup '$PY' server.py --open >/dev/null 2>&1 &\""
echo "Created: $HERE/Future Lab.app   (drag it to the Dock; if it will not open: right-click > Open once)"
