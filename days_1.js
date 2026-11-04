// Specific daily entries, weeks 1-9. s = exactly what to read/watch and how much. k = must-know (non-negotiable).
// build = hands-on. out = what you can do after. Key = w<week>d<day>. Edit text freely; keep the keys.
window.DAYS = window.DAYS || {};
var D = (k, s, know, build, out) => (window.DAYS[k] = { s, k: know, build, out });

// ===== WEEK 1: the shell =====
D("w1d1", "READ the notes page of Missing Semester 2026 Lecture 1 (missing.csail.mit.edu/2026/course-shell/): only 'Navigating in the shell' and 'What is available in the shell?' (about 15 min). Skip the intro sections. No video needed.",
  ["Absolute vs relative paths; . and ..; cd, pwd, ls", "man and --help: look up any command yourself", "$PATH and which: how the shell finds programs", "Pipe |: output of one program becomes input of the next", "Quoting: why spaces in file names break commands"],
  "Make a practice folder with 20 files using a loop. List, search (find, grep) and delete them safely.",
  "You can move around a computer and find any file with the keyboard, and look up a command without Google.");
D("w1d2", "READ the same Lecture 1 notes: 'The shell language (bash)' (about 15 min), then do exercises 1-8 on that page.",
  ["Redirects: > overwrites, >> appends, < reads from a file", "if / [[ ]] tests and for / while loops", "$(command) puts a command's output into a variable", "Shebang line and set -euo pipefail: stop on the first error", "Exit status: 0 = success, anything else = failure"],
  "Write a backup script: copy a folder to a name with today's date; it must stop if anything fails.",
  "You can write a safe script that automates a daily chore and refuses to continue after an error.");
D("w1d3", "READ The Linux Command Line (linuxcommand.org/tlcl.php), chapters 'Permissions' and 'Processes' (about 30 min each). Skip the users/groups details on first pass.",
  ["Read rwx for owner, group, others", "Numbers: 755 (run by all), 644 (read by all), 600 (private)", "chmod and chown", "Process = a running program with a PID; ps, top, kill", "SIGTERM (polite stop) vs SIGKILL (force stop); background jobs with & and fg"],
  "Break a file's permissions on purpose and fix it. Start 'sleep 1000 &', find it with ps, stop it.",
  "You can read a 'Permission denied' error and fix it, and stop a stuck program.");
D("w1d4", "READ Missing Semester 2026 Lecture 2 notes (missing.csail.mit.edu/2026/command-line-environment/): 'The Command Line Interface' and 'Terminal Multiplexers' (about 20 min).",
  ["stdin / stdout / stderr and 2>&1", "Environment variables: export, printenv", "$? and && / || chain commands by success", "Ctrl-C sends SIGINT; jobs, fg, bg, nohup", "tmux: detach and reattach a session"],
  "Run a 10-minute task inside tmux, close the terminal, reopen it and reattach.",
  "You can run long jobs that survive a closed window or lost connection.");
D("w1d5", "READ Lecture 1 notes again: 'What is available in the shell?' (grep, sed, awk, sort, uniq, head/tail) (10 min). Then ask an AI to generate a fake 5,000-line web server log file to practise on.",
  ["grep for text; grep -E for patterns", "sort | uniq -c | sort -nr = count and rank", "awk '{print $1}' picks a column", "head, tail, wc -l", "Chain 3+ commands to answer a question"],
  "From the fake log, find the 5 most common error messages and the 5 most frequent IP addresses.",
  "You can answer 'what is going wrong in this log?' in one minute from the terminal.");
D("w1d6", "READ Lecture 2 notes: 'Customizing the Shell' (aliases, dotfiles) (10 min). For scheduling, ask your AI for a cron or launchd example and read every line before running it.",
  ["Alias = your own shortcut", "Dotfiles (.zshrc) hold your settings", "A scheduler runs a script at set times (cron/launchd)", "Never run a script you cannot explain"],
  "Mini-project: a script that writes disk space, memory and the top 5 processes to a text file every night. Push to GitHub with a README.",
  "You have your first public project and a script that runs by itself.");

// ===== WEEK 2: Git, services, SSH =====
D("w2d1", "READ Lecture 5 notes (missing.csail.mit.edu/2026/version-control/): 'Git's data model', 'Staging area', 'Basics' (about 25 min). Then play the first rows of learngitbranching.js.org (20 min).",
  ["Commit = snapshot that points to its parent", "Branch = a movable label on a commit; HEAD = where you are", "Staging area: you choose what goes into the next commit", "git status, add, commit, log --all --graph --decorate, diff"],
  "Create a repo with 10 meaningful commits; draw its history with git log --graph.",
  "You can explain what a commit is and read any project's history.");
D("w2d2", "READ Lecture 5 notes: 'Branching and merging', 'Remotes', 'Undo' (about 25 min). Then Learn Git Branching: merge, rebase and remote levels (30 min).",
  ["merge vs rebase (merge keeps history, rebase rewrites it)", "Merge conflict markers and how to resolve them", "push, pull, fetch, clone, origin", "commit --amend and restore to undo", "Never rebase commits you already shared"],
  "Create and resolve a merge conflict. Push to GitHub, open a pull request on your own repo and merge it.",
  "You can work on branches and recover from a mistake without losing work.");
D("w2d3", "READ Lecture 4 notes (missing.csail.mit.edu/2026/debugging-profiling/): 'Printf Debugging and Logging', 'Timing', 'Resource Monitoring' (about 20 min).",
  ["Log levels: debug, info, warning, error", "time: real vs user vs sys", "htop shows CPU and memory per process", "lsof -i :PORT shows who owns a port", "ss / journalctl -u on Linux for sockets and service logs"],
  "Start 'python3 -m http.server 8000'. Find its process with lsof, stop it, and confirm the port is free.",
  "You can find out why a port is busy and what a slow machine is doing.");
D("w2d4", "READ Lecture 6 notes (missing.csail.mit.edu/2026/shipping-code/): 'Services & Orchestration' (10 min). On Mac ask your AI for a launchd plist example; on Linux read the systemd part. Read before running.",
  ["A service = a program the system starts and restarts for you", "systemd unit: ExecStart and Restart=always", "launchd is the Mac equivalent", "Check a service with its logs, not by guessing"],
  "Make a tiny Python web app restart automatically when you kill -9 it.",
  "You can keep a program running after crashes and reboots.");
D("w2d5", "READ Lecture 2 notes: 'Remote Machines' (ssh, keys, scp, rsync, ~/.ssh/config) (15 min). You need a VM or a spare Linux machine (VirtualBox/UTM or a free cloud VM).",
  ["Key pair: private key never leaves your machine", "ssh-keygen, ssh-copy-id, ~/.ssh/config", "scp and rsync copy files over ssh", "Turn off password login (PasswordAuthentication no)", "Keep a second session open while changing ssh settings"],
  "Log in to your VM with a key only; disable password login; test from a second terminal.",
  "You can log in to a server securely and copy files to and from it.");
D("w2d6", "READ GitHub's 'About READMEs' page (5 min). Reuse your Week 1 script as the project.",
  ["A README answers: what is this, why, how to run it, how to test it", "Small, clear commits tell a story", "A .gitignore keeps junk and secrets out"],
  "Polish the Week 1 project: README, .gitignore, tidy commits, push.",
  "A stranger can understand and run your project in 5 minutes.");

// ===== WEEK 3: how the internet works =====
D("w3d1", "READ Cloudflare 'What is DNS?' (10 min), then the howdns.works comic (10 min).",
  ["Resolver -> root -> TLD -> authoritative server", "Record types: A, AAAA, CNAME, MX, NS, TXT", "TTL = how long an answer is cached", "DNS only turns names into addresses"],
  "Run dig (or nslookup) on a domain; find its A, MX and NS records and say what each means.",
  "You can explain how a name becomes an address and debug 'site not found'.");
D("w3d2", "READ MDN 'An overview of HTTP' (15 min). Use MDN pages on request methods and status codes only as a lookup, do not read them fully.",
  ["Request = method + path + headers + body", "Response = status code + headers + body", "GET reads, POST creates, PUT replaces, DELETE removes", "2xx ok, 3xx redirect, 4xx your fault, 5xx server's fault", "Headers: Host, Content-Type, Authorization, Cache-Control"],
  "Run curl -v on a website; explain each request and response header you see.",
  "You can read an HTTP exchange and tell what went wrong from the status code.");
D("w3d3", "READ High Performance Browser Networking, chapter 'Building Blocks of TCP' (hpbn.co), first sections: three-way handshake, flow and congestion control in plain words (about 25 min). Skip the formulas.",
  ["Handshake: SYN, SYN-ACK, ACK before any data", "Latency (delay) vs bandwidth (size of the pipe)", "TCP re-sends lost data and keeps order", "Why the first request is slower than later ones"],
  "Run ping and traceroute to a site; record round-trip times. Draw the TCP handshake from memory.",
  "You can explain why a page is slow in terms of latency, not just 'the internet'.");
D("w3d4", "READ Cloudflare 'What is HTTPS?' and 'What is TLS?' (about 15 min total).",
  ["Certificate proves the server is who it says", "Chain of trust up to a trusted authority", "TLS handshake agrees on secret keys", "HTTPS = HTTP inside TLS", "Common error: expired or mismatched certificate"],
  "Run openssl s_client -connect example.com:443 -servername example.com and name the issuer and expiry date.",
  "You can read a certificate and explain a 'not secure' warning.");
D("w3d5", "READ Wireshark User's Guide, 'Capturing live network data' (skim, 15 min). Run 'python3 -m http.server 8000' and capture on the loopback interface.",
  ["Capture filter vs display filter", "Follow TCP Stream shows a whole conversation", "Find the SYN packets and the HTTP GET", "Do not capture traffic that is not yours"],
  "Capture a request to your own local server; find the handshake, the GET and the response.",
  "You can look at real packets instead of guessing.");
D("w3d6", "No new reading. Use your notes from days 1-5.",
  ["DNS, TCP, TLS, HTTP each do a different job", "Order of events from Enter to page", "Where each step can fail"],
  "Write one page with a diagram: 'What happens when I press Enter on a URL'. No AI for the first draft; then ask an AI to find mistakes.",
  "You can explain the whole journey of a web request from memory.");

// ===== WEEK 4: deploy something real =====
D("w4d1", "READ nginx 'Beginner's Guide' (nginx.org/en/docs/beginners_guide.html) (20 min).",
  ["Server block: listen, server_name, root, location", "nginx -t checks config; reload applies it", "Where the access and error logs are", "Config mistakes cause outages: test first"],
  "Install nginx on your VM and serve a page you wrote.",
  "You can put a web page on a server.");
D("w4d2", "READ certbot.eff.org instructions for 'nginx' on your system (15 min). No domain? Ask your AI for a self-signed certificate recipe and read each flag.",
  ["Certificates expire; renewal must be automatic", "HTTPS listens on 443; redirect 80 to 443", "Self-signed is for practice only", "Never share private keys"],
  "Turn on HTTPS and redirect plain HTTP to it.",
  "You can serve a site over HTTPS and explain every part.");
D("w4d3", "READ the nginx guide section 'Setting Up a Simple Proxy Server' (10 min). Reuse your Week 2 service for the app.",
  ["Reverse proxy: nginx in front, your app behind it on localhost", "proxy_pass and forwarded headers", "Only nginx is exposed to the internet", "The app should run as a service"],
  "Run a small FastAPI or Flask 'hello' app as a service, reachable only through nginx.",
  "You can run an app the way real servers do.");
D("w4d4", "RE-READ Lecture 4 notes: 'Printf Debugging and Logging' (10 min). Look up 'logrotate' with man or your AI.",
  ["Access log vs error log", "Logs grow: rotate them", "grep a status code to find failures", "A good log line says what, when, and which request"],
  "Cause a 500 error on purpose and find it in the logs. Set up log rotation.",
  "You can find the cause of a server error from logs alone.");
D("w4d5", "RE-READ Lecture 2 notes: rsync in 'Remote Machines' (5 min). Ask your AI to explain the 3-2-1 backup rule (3 copies, 2 media, 1 offsite).",
  ["A backup you never restored is not a backup", "rsync copies only what changed", "Schedule backups; check they ran", "Keep one copy off the machine"],
  "Write an automatic backup script, schedule it, then restore it into a clean folder and compare.",
  "You can prove your data is recoverable.");
D("w4d6", "READ makeareadme.com (5 min).",
  ["A runbook says: deploy, check health, read logs, restore, who to call", "Write it for the stressed person at 2 a.m. (you)"],
  "Write a runbook README for your server. Test it by following only the README on a fresh VM if you can.",
  "Someone else could run your system from the document alone.");

// ===== WEEK 5: SQL =====
D("w5d1", "DO SQLBolt (sqlbolt.com) lessons: SELECT queries, queries with constraints (pt 1 and 2), filtering and sorting, SELECT review (about 40 min, interactive).",
  ["SELECT columns FROM table WHERE condition", "AND / OR / IN / LIKE", "ORDER BY and LIMIT / OFFSET", "NULL is not 0 and not empty"],
  "Finish all exercises, then write 5 queries on your own sample table.",
  "You can pull any slice of data out of a table.");
D("w5d2", "DO SQLBolt: multi-table JOINs, OUTER JOINs, queries with aggregates (pt 1 and 2), order of execution (about 50 min).",
  ["INNER JOIN keeps matches only; LEFT JOIN keeps all left rows", "GROUP BY with COUNT, SUM, AVG; HAVING filters groups", "Order SQL runs: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY"],
  "Finish the exercises; write a query that shows the number of study sessions per user.",
  "You can combine tables and summarise data.");
D("w5d3", "Install Postgres (Postgres.app on Mac). READ PostgreSQL tutorial (postgresql.org/docs/current/tutorial.html), chapters 'The SQL Language' and 'Advanced Features' (about 40 min).",
  ["Primary key, foreign key, NOT NULL, UNIQUE", "Choose types carefully (integer, text, timestamptz)", "Views and foreign keys keep data consistent", "psql basics: \\dt, \\d table"],
  "Create tables users, courses, sessions with keys and constraints.",
  "You can design a small relational database properly.");
D("w5d4", "READ Use The Index, Luke (use-the-index-luke.com): 'Anatomy of an SQL Index' and 'The Where Clause: Equality Operators' (about 40 min).",
  ["An index is a sorted lookup structure (B-tree)", "Seq Scan (reads everything) vs Index Scan", "Indexes speed WHERE, JOIN, ORDER BY but slow writes", "Read EXPLAIN ANALYZE: cost, rows, time"],
  "Insert 100k rows, EXPLAIN ANALYZE a slow query, add an index, compare before and after.",
  "You can find why a query is slow and fix it with evidence.");
D("w5d5", "READ PostgreSQL tutorial section 'Transactions' (10 min) and skim 'Concurrency Control: Introduction' (10 min).",
  ["Atomicity: all or nothing", "Consistency, Isolation, Durability in one sentence each", "BEGIN / COMMIT / ROLLBACK", "Why money transfers need transactions"],
  "Write a two-step update in a transaction; make the second step fail; prove the first was rolled back.",
  "You can protect data from half-finished changes.");
D("w5d6", "DO NeetCode (neetcode.io/roadmap): Arrays & Hashing: Contains Duplicate, Valid Anagram, Two Sum. Rule: try 20 minutes first; only then watch NeetCode's video for that one problem (about 10 min).",
  ["Hash map = O(1) lookup, trade space for time", "Big-O: O(n) vs O(n^2) in plain words", "Explain your solution aloud before coding"],
  "Solve 3 problems. Write your SQL cheat sheet from memory, then compare with notes.",
  "You can solve basic interview problems and explain the cost of your solution.");

// ===== WEEK 6: backend =====
D("w6d1", "READ + FOLLOW FastAPI tutorial (fastapi.tiangolo.com/tutorial/): First Steps, Path Parameters, Query Parameters, Request Body (about 75 min, type every example).",
  ["A path operation = URL + method + function", "Type hints give automatic validation", "Pydantic model describes the request body", "Open /docs for free interactive documentation"],
  "Build 5 endpoints for your Study Tracker (list, get, create, update, delete one thing).",
  "You can build a working API.");
D("w6d2", "READ FastAPI tutorial: Response Model, Handling Errors, 'Dependencies - First Steps', then the 'SQL Databases' tutorial (about 90 min).",
  ["response_model hides fields you must not leak", "HTTPException returns a clean error", "Dependency injection gives each request a database session", "Keep database models separate from API schemas"],
  "Full create/read/update/delete for courses and sessions on Postgres.",
  "You can connect an API to a real database.");
D("w6d3", "READ the Alembic tutorial (alembic.sqlalchemy.org/en/latest/tutorial.html): environment, first and second migrations (30 min).",
  ["A migration is a versioned change to the schema", "upgrade and downgrade", "Never edit a production table by hand", "Commit migrations with the code"],
  "Create 2 migrations and roll one back.",
  "You can change a database safely over time.");
D("w6d4", "READ pytest 'Get started' (15 min) and the FastAPI 'Testing' page (15 min).",
  ["Arrange, act, assert", "Test the failing paths, not only the happy path", "Fixtures set up and clean up", "TestClient calls your API without a server"],
  "Write 10 tests including 3 failure cases; run with coverage.",
  "You can prove your code works and notice when it breaks.");
D("w6d5", "READ OWASP Cheat Sheets 'Password Storage' and 'Authentication' (skim the key rules, 20 min).",
  ["Never store plain passwords; use a slow salted hash (Argon2id or bcrypt)", "Do not invent your own crypto", "Rate-limit login attempts", "Same error for wrong user or wrong password", "Tokens must expire"],
  "Add register and login with hashed passwords and expiring tokens.",
  "You can add login without the classic mistakes.");
D("w6d6", "READ Google's 'Code Review Developer Guide: What to look for in a code review' (google.github.io/eng-practices/review/reviewer/looking-for.html) (15 min).",
  ["Review design, behaviour, complexity, tests, names, comments", "Reading code is now more valuable than typing it", "Find bugs BEFORE running the tests"],
  "Review your own week's code line by line; list 5 problems and fix them.",
  "You can review code like a reviewer, not like the author.");

// ===== WEEK 7: async, retries, idempotency =====
D("w7d1", "READ Python docs 'Coroutines and Tasks' (docs.python.org/3/library/asyncio-task.html) (25 min).",
  ["async def and await", "Event loop runs many waiting tasks on one thread", "Concurrent is not parallel", "Async helps with waiting (network), not heavy computing", "asyncio.gather runs tasks together"],
  "Fetch 20 URLs sequentially, then concurrently; compare times.",
  "You can make waiting-heavy code fast.");
D("w7d2", "READ PostgreSQL docs 'Transaction Isolation' (postgresql.org/docs/current/transaction-iso.html): introduction and Read Committed (20 min).",
  ["Dirty read, non-repeatable read, lost update", "Default level is Read Committed", "SELECT ... FOR UPDATE locks rows", "Two users at once is the normal case"],
  "With two psql sessions, create a lost-update race, then fix it with a lock.",
  "You can spot and reproduce a concurrency bug.");
D("w7d3", "READ Stripe 'Idempotent requests' (docs.stripe.com/api/idempotent_requests) (10 min).",
  ["Idempotent = doing it twice has the same effect as once", "Same key returns the saved result", "Store the key with a unique constraint", "Safe retries need idempotency"],
  "Add an idempotency key to 'create session' so a double-click makes one record.",
  "You can make an API safe to retry.");
D("w7d4", "READ RQ docs 'Getting started' (python-rq.org) (20 min). Redis needed (install with Homebrew).",
  ["Producer puts a job on a queue; a worker runs it", "Slow work belongs in a worker, not in the request", "Jobs must be safe to repeat", "Failed jobs need retries and a place to look"],
  "Add a background job that builds a daily summary.",
  "You can move slow work out of the request path.");
D("w7d5", "READ AWS Builders' Library 'Timeouts, retries and backoff with jitter' (aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) (25 min).",
  ["Every outside call needs a timeout", "Retry only things that are safe to repeat", "Exponential backoff plus random jitter", "Retry storms can bring a service down"],
  "Add timeouts and retries with jitter to one outside call.",
  "You can make calls to flaky services behave well.");
D("w7d6", "No new reading. Use days 2-5.",
  ["Evidence beats confidence", "Kill the worker mid-job on purpose", "Check no duplicates and no lost data"],
  "Kill the job half-way, restart, and prove: no duplicate rows, no lost rows. Write what you found.",
  "You have proof your system survives crashes.");

// ===== WEEK 8: front end and web security =====
D("w8d1", "DO javascript.info: 'Variables', 'Data types', 'Functions', 'Objects' (about 90 min; do the tasks, skip the rare edge cases).",
  ["let/const, strings, numbers, booleans, null/undefined", "Functions and arrow functions", "Objects as key-value data", "Console and browser developer tools"],
  "Finish the tasks in those chapters.",
  "You can read and write basic JavaScript.");
D("w8d2", "DO javascript.info 'Array methods' (map, filter, reduce), 'Promises, async/await', and 'Fetch' (about 90 min). READ TypeScript handbook 'The Basics' and 'Everyday Types' (20 min).",
  ["map/filter/reduce replace most loops", "async/await for network calls", "fetch returns a promise; check response.ok", "TypeScript = JavaScript plus types that catch mistakes early"],
  "Fetch data from your API and print it; convert one small JS file to TypeScript.",
  "You can talk to your API from a browser program.");
D("w8d3", "READ react.dev/learn: 'Quick Start' and 'Thinking in React' (about 75 min).",
  ["Components are functions that return UI", "Props flow down; state lives in one place", "Break a UI into components first", "Do not copy data around"],
  "Build a page that lists your study sessions from the API.",
  "You can build a simple interface that shows real data.");
D("w8d4", "READ react.dev 'Adding Interactivity': responding to events, state as a snapshot, reacting to input with state (about 60 min).",
  ["Event handlers", "Controlled form inputs", "Show loading and error states", "Validate on both the client and the server"],
  "Build a form that adds a study session with validation and visible error messages.",
  "You can build a form that handles failure politely.");
D("w8d5", "READ MDN 'Cross-Origin Resource Sharing (CORS)' (15 min) and the OWASP 'XSS Prevention' cheat sheet (skim 15 min).",
  ["Same-origin policy and what CORS relaxes", "The SERVER sends CORS headers; never use * with credentials", "XSS = attacker's script runs on your page", "Escape output; avoid innerHTML with user text; Content-Security-Policy"],
  "Cause a CORS error and fix it with an allowlist; try an XSS input and confirm it is blocked.",
  "You can fix CORS the right way and block basic XSS.");
D("w8d6", "RE-READ your Week 4 runbook.",
  ["Build the front end, serve the files from nginx", "API behind nginx on /api", "HTTPS on"],
  "Deploy the API and the front end on your Block 1 server.",
  "You have a full-stack app on the internet.");

// ===== WEEK 9: reliability, DSA, Block 2 gate =====
D("w9d1", "READ PostgreSQL docs 'Backup and Restore', section 'SQL Dump' (15 min).",
  ["pg_dump and restoring with psql", "Logical vs physical backup", "Practise the restore", "RPO = how much data you can lose; RTO = how long you can be down"],
  "pg_dump the database, restore it into a fresh database, compare row counts.",
  "You can recover a database from a backup file.");
D("w9d2", "READ Google SRE book 'Monitoring Distributed Systems', 'The Four Golden Signals' (sre.google/sre-book/monitoring-distributed-systems/) (15 min). Re-read Lecture 4 'Printf Debugging and Logging' (10 min).",
  ["Latency, traffic, errors, saturation", "A health endpoint answers 'are you OK?'", "Structured (JSON) logs are searchable", "Never log passwords or tokens"],
  "Add a /health endpoint and JSON logs with request id and timing.",
  "You can tell if your service is healthy from its own signals.");
D("w9d3", "DO NeetCode: Two Pointers: Valid Palindrome, Two Sum II, 3Sum; Arrays & Hashing: Group Anagrams, Top K Frequent Elements. Try 20 min each, then watch only that problem's NeetCode video (about 10 min).",
  ["Two pointers move toward each other", "Counting with a hash map", "State time and space cost aloud"],
  "Solve 4 problems and explain each aloud.",
  "You can solve medium array problems under time pressure.");
D("w9d4", "DO NeetCode: Stack: Valid Parentheses, Min Stack; Binary Search: Binary Search, Search a 2D Matrix; Linked List: Reverse Linked List. Same rule: 20 min, then the video.",
  ["Stack = last in, first out", "Binary search needs sorted data: O(log n)", "Linked list pointer thinking"],
  "Solve 4 problems and explain each aloud.",
  "You have the core interview patterns.");
D("w9d5", "READ Martin Fowler 'CircuitBreaker' (martinfowler.com/bliki/CircuitBreaker.html) (10 min).",
  ["Fail fast instead of waiting for a broken service", "Circuit states: closed, open, half-open", "Return a clean error, not a hang"],
  "Chaos test: stop the database mid-request; make the API return a clean error and recover when it returns.",
  "You can make your system fail gracefully.");
D("w9d6", "No new reading.",
  ["Architecture diagram: browser, nginx, API, database, worker", "All tests green", "README tells how to run, test, restore"],
  "Finish the project README with an architecture diagram; run all tests; push to GitHub.",
  "Block 2 is a project you can show anyone.");
