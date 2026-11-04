#!/bin/bash
# One-time: makes your Future Lab DATA folder (progress, notes, LinkedIn drafts) back up to a PRIVATE GitHub repo.
#   bash setup_github.sh                 creates a private repo "FutureLab-data" with the GitHub CLI (asks first)
#   bash setup_github.sh <repo-url>      uses an EMPTY private repo you already made on github.com (creates nothing)
# Git uses your own GitHub login; this app never sees a password.
set -e
APP="$(cd "$(dirname "$0")" && pwd)"
DATA="${FUTURELAB_DATA:-$APP/../../FutureLab_data}"
mkdir -p "$DATA"; DATA="$(cd "$DATA" && pwd)"
URL="$1"
echo "Data folder: $DATA"
if [ -n "$URL" ]; then echo "Will connect it to your existing repo: $URL"; else echo "Will create a PRIVATE GitHub repo named 'FutureLab-data' on your account."; fi
read -r -p "Continue? [y/N] " a
[ "$a" = "y" ] || { echo "Cancelled. Nothing was created."; exit 0; }
cd "$DATA"
[ -d .git ] || git init -b main
[ -f .gitignore ] || printf '*.tmp\n*.bak\n' > .gitignore
[ -f README.md ] || printf '# Future Lab data\nMy learning progress, notes and LinkedIn drafts. Saved automatically.\n' > README.md
git add -A
git commit -m "Initial Future Lab data" || true
if [ -n "$URL" ]; then
  git remote get-url origin >/dev/null 2>&1 && git remote set-url origin "$URL" || git remote add origin "$URL"
  git push -u origin HEAD
else
  command -v gh >/dev/null || { echo "Install the GitHub CLI first: brew install gh   (or pass the URL of a repo you made: bash setup_github.sh <url>)"; exit 1; }
  gh auth status >/dev/null 2>&1 || gh auth login
  gh repo create FutureLab-data --private --source=. --remote=origin --push
fi
echo "Done. From now on the app pushes your changes about 20 seconds after you save."
