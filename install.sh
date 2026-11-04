#!/bin/bash
# Makes Future Lab start by itself when you log in to your Mac, and opens it in your browser.
# Undo any time: bash install.sh remove
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
PLIST="$HOME/Library/LaunchAgents/com.futurelab.app.plist"
PY="$(command -v python3)"
if [ "$1" = "remove" ]; then
  launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null || true
  rm -f "$PLIST"; echo "Removed. Future Lab will no longer start at login."; exit 0
fi
mkdir -p "$HOME/Library/LaunchAgents"
ENVBLOCK=""; [ -n "$FUTURELAB_DATA" ] && ENVBLOCK="<key>EnvironmentVariables</key><dict><key>FUTURELAB_DATA</key><string>$FUTURELAB_DATA</string></dict>"
cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>com.futurelab.app</string>
  <key>ProgramArguments</key><array><string>$PY</string><string>$HERE/server.py</string><string>--open</string></array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><dict><key>SuccessfulExit</key><false/></dict>
  $ENVBLOCK
  <key>WorkingDirectory</key><string>$HERE</string>
  <key>StandardErrorPath</key><string>$HERE/server.log</string>
</dict></plist>
EOF
launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"
echo "Installed. Future Lab opens at login: http://127.0.0.1:8765/   (remove with: bash install.sh remove)"
