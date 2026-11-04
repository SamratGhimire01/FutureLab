# Future Lab: rules for Claude Code in this repo
Personal learning app (one user, macOS, http://localhost:8765). Python 3 stdlib server + one HTML page + data files. See CLAUDE_PROMPT.md for the setup steps and README.md for use.

- The **Update** button runs `git pull --ff-only` here. Updates must never touch the data folder (FUTURELAB_DATA; default `../../FutureLab_data`). They add or fix content; they never reset progress, notes, posts, streak or level.
- Progress ids are `w<week>d<day>`. Never renumber or reorder weeks/days; add new ones at the end. Check an old `progress.json` still loads after any change.
- Every release: bump `VERSION`, add a `CHANGELOG.md` entry.
- `answers.json` (hidden answer key) is never served to the page. The repos are public by the owner's choice (for his GitHub streak): never commit secrets or personal details; commit with the GitHub noreply email so the streak counts.
- Private files are git-ignored (`progress.json*`, `*.local.json`, `Future Lab.app/`, `server.log`). Do not commit them. No secrets or telemetry.
- LinkedIn: drafts only, from the user's own notes, real screenshots only. No auto-posting.
- No pirated books or links to them. Legal sources only.
- `links.js` is generated and link-checked; do not hand-edit URLs without re-checking them.
- Test in a browser before saying done; say what you could not verify.
