# Prompt for Claude Code
Open an EMPTY folder named `FutureLab` in Claude Code (for example `/Volumes/WD_BLACK_1TB/Document/FutureLab`), then paste everything between the two `---` lines.

---

You are my engineer for **Future Lab**, my personal learning app. It is for one person (me), runs only on my Mac at http://localhost:8765, and teaches me AI engineering over 26 weeks. This empty folder will become the app's own git repo.

## Facts
- **Source to copy from (read-only; do not change the SG_MIND_MATRIX repo):** `/Volumes/WD_BLACK_1TB/Document/SG_MIND_MATRIX/12_future_lab`
- **App repo (this folder):** https://github.com/SamratGhimire01/FutureLab.git
- **Data repo:** https://github.com/SamratGhimire01/FutureLab-data.git
- **My data folder:** `/Volumes/WD_BLACK_1TB/Document/FutureLab_data`. It already exists (my progress, notes, LinkedIn drafts). It is NOT a git repo yet. Never move, reset or delete it.
- The GitHub CLI `gh` is already logged in as SamratGhimire01. Use my existing login only. Never ask me for tokens or passwords and never print them.
- **What the app is:** a Python 3 standard-library server (`server.py`), one page (`index.html`), and data files (`curriculum.js`, `days_*.js`, `links.js`, `answers.json`). No dependencies.

## Do these in order. Stop and ask me before anything that publishes, installs, changes my GitHub account, or deletes.

0. **Both repos stay PUBLIC. That is my decision** (so my GitHub contribution streak shows). Do NOT make them private. Run `gh repo view SamratGhimire01/FutureLab --json visibility,isEmpty` and the same for `FutureLab-data`, and tell me in plain words what public means here: anyone can read my notes and `answers.json`, and every commit shows its author email. Because of that, before the FIRST push of each repo run a secret scan over everything that would be pushed (look for `sk-`, `ghp_`, `github_pat_`, `AKIA`, `xox`, `BEGIN PRIVATE KEY`, and any `.env`) and show me the result. Push nothing if anything is found.
1. **Copy the app.** Copy every file from the source folder into this folder EXCEPT `Future Lab.app`, `progress.json*`, `__pycache__`, `*.local.json`, `server.log`. Keep `.gitignore`.
2. **Commit identity, then commit and connect.** GitHub only counts commits for my streak when the author email belongs to my GitHub account, and public repos show that email to everyone. So in BOTH repos (this folder and `/Volumes/WD_BLACK_1TB/Document/FutureLab_data`) set the LOCAL git identity: `git config user.name "SamratGhimire01"` and `git config user.email "<id>+SamratGhimire01@users.noreply.github.com"`, where `<id>` comes from `gh api user --jq .id`. Never use my personal email. Then `git init -b main` and commit as "Future Lab 1.1.1". Show me `git ls-files` and confirm no private file is tracked. Add the remote `https://github.com/SamratGhimire01/FutureLab.git`, show me the push command, and push only after I say yes.
3. **Connect my data.** First show me what is in `/Volumes/WD_BLACK_1TB/Document/FutureLab_data` and confirm it contains no secrets. Then, after I say yes, run from this folder:
   `FUTURELAB_DATA=/Volumes/WD_BLACK_1TB/Document/FutureLab_data bash setup_github.sh https://github.com/SamratGhimire01/FutureLab-data.git`
   (it asks y/N, makes a git repo in the data folder, and pushes to my data repo). Set the commit identity from step 2 in the data folder BEFORE running it, and run the secret scan first.
4. **Stop the old copy before starting the new one.** An old copy of the app may be running on port 8765 from the SG_MIND_MATRIX folder. Ask me, then stop it (`kill $(lsof -t -i:8765)`), otherwise the new copy cannot start. Do NOT delete the old folder.
5. **Build the Mac app and the login start**, always with my data folder set:
   `export FUTURELAB_DATA=/Volumes/WD_BLACK_1TB/Document/FutureLab_data`, then `bash make_app.sh` (makes `Future Lab.app`) and, only after I say yes, `bash install.sh` (starts at login). Explain what each one changes on my Mac.
6. **Verify, and tell me honestly what you could not verify:**
   - the server starts from THIS folder, the page loads, and Settings shows the data folder above;
   - my existing progress is unchanged;
   - the **Update** button: make a harmless commit from a second clone, see "1 update ready", press Update, confirm my progress is unchanged;
   - saving a note pushes to FutureLab-data about 20 seconds later (check with `git log` in the data folder), and the commit shows on my GitHub contribution graph (it can take a few minutes; commits must be on `main`);
   - the app refuses to push when a note contains a fake token like `ghp_` + 36 letters (then remove it and confirm the push works again);
   - the "Check my code" buttons copy a prompt and open DeepSeek and Qwen in pop-out windows.

## Hard rules, now and in every future change
- **Update button = `git pull --ff-only` in the app folder.** It must never touch the data folder. Updates ADD or fix content. They never reset my progress, notes, posts, streak or level.
- Progress ids look like `w3d2` (week 3, day 2). **Never renumber or reorder weeks or days.** New content gets new ids at the end. After any change, confirm an old `progress.json` still loads.
- Every release: bump `VERSION`, add a `CHANGELOG.md` entry, and tell me what changed.
- No secrets, API keys, tokens or telemetry in either repo.
- `answers.json` stays server-side: the server must never serve it to the page. The repos are public by my choice, so the answer key is readable on GitHub: that is accepted. Never put secrets, tokens or personal details in either repo.
- LinkedIn: the app only DRAFTS posts from my own notes. No auto-posting. Pictures must be real screenshots of my real work.
- No pirated books and no links to pirated copies. Legal links only.
- Test in a browser before saying "done".

When you finish, give me a short plain-English summary: what is installed, where my data is, how to update, how to undo.

---

## How the two repos work
- **FutureLab (public) = the app.** Lessons, links, answers, code. Changes are made here and pushed; the app's **Update** button pulls them. Your progress is not in this repo.
- **FutureLab-data (public) = your progress and notes.** The app commits and pushes it about 20 seconds after each save. Each push is a commit, so your GitHub contribution graph shows your study days, as long as the commit email is your GitHub noreply address.
