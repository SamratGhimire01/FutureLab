# Future Lab: your 26-week learning system

OPEN IT
  Double-click  "Future Lab.app"  (drag it to your Dock)   or   "Start Future Lab.command"   or go to http://localhost:8765
  (First time only, if macOS asks: right-click the app > Open.)  Remake the app any time: bash make_app.sh
  Open automatically at login:  bash install.sh        (undo: bash install.sh remove)

USE IT
  Dashboard > Start today > Study room: click a link or video and it opens right there. Tick the must-know items, build, write a note, Finish.
  Pages that refuse to be shown inside another app open in a new tab (the room tells you).

BACK UP TO GITHUB (once; asks before creating a PUBLIC repo "FutureLab-data"; needs: brew install gh)
  PUBLIC is deliberate: each push is a commit, so your study days show on your contribution graph. Anyone can also read your notes.
  bash setup_github.sh
  Data lives in its own git repo, set by FUTURELAB_DATA (or the git-ignored data_path.local file): progress.json, notes.md, linkedin/ drafts. Pushed ~20 s after each save.

CHANGE THE PLAN
  curriculum.js and days_*.js hold the text. links.js holds the verified links (generated; ask Claude to refresh it).
  Progress is keyed by week/day, so edits never erase it.

NEW IN 1.1
  Check my code (study room > Build): write and run your code, paste it, press "Make prompt" (copies one prompt with the hidden answer key),
  open DeepSeek or Qwen (free, in your browser, pop-out window), paste, then tell the app what the AI said.
  Update button (bottom of the left menu): pulls new lessons from your FutureLab repo; never touches your progress or notes.
  Setup for Claude Code: see CLAUDE_PROMPT.md (paste it into Claude Code in your empty FutureLab folder).
  Back up data to a repo you made: bash setup_github.sh <repo-url>
