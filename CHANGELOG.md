# Future Lab changelog
Rule: updates ADD or FIX content. They never delete or reset your progress, notes or posts (those live in the separate data folder).
Never renumber weeks or days; new content gets new ids at the end.

## 1.1.2
- Fix: the app finds your data folder from any launcher. "Start Future Lab.command" set no FUTURELAB_DATA, so after moving the app folder it fell back to the wrong path and looked like lost progress. The path is now remembered in `data_path.local` (git-ignored, so it stays off the public repo).

## 1.1.1
- Safety: the app refuses to push if a note contains an obvious API key, token or private key (your data repo is public).

## 1.1.0
- Study room: exact links, embedded videos, must-know checklist, finish flow.
- Check my code: one prompt (your code + hidden answer key) for DeepSeek or Qwen in your browser.
- Update button (git, fast-forward only). LinkedIn drafts with picture ideas. GitHub backup of your data.
