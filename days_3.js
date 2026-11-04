// Specific daily entries, weeks 18-26.
window.DAYS = window.DAYS || {};
var D = (k, s, know, build, out) => (window.DAYS[k] = { s, k: know, build, out });

// ===== WEEK 18: evals =====
D("w18d1", "READ Hamel Husain 'Your AI Product Needs Evals' (hamel.dev/blog/posts/evals/) (about 25 min).",
  ["Look at real outputs first, in bulk", "Start with simple assertions (unit tests for AI)", "Then human review, then LLM-as-judge", "An eval is a repeatable test with a score"],
  "Write 10 test cases for your agent: input, what a good result must contain, why.",
  "You can start measuring quality instead of feeling it.");
D("w18d2", "No reading. Use your 10 cases.",
  ["Use real, representative inputs", "Include hard, edge and adversarial cases", "Each case: input, expected or criteria, reason", "Version the dataset; never train on it"],
  "Grow it to a 30-case golden dataset with at least 5 hard cases.",
  "You have a golden dataset.");
D("w18d3", "No reading.",
  ["Cheap deterministic checks first: valid JSON, contains, exact match", "Store each run: id, date, git commit, model, prompt version, scores", "One command runs everything"],
  "Build a runner that scores every case and writes a CSV.",
  "You can score your agent in one command.");
D("w18d4", "READ Eugene Yan's article 'Task-Specific LLM Evals that Do & Don't Work' (eugeneyan.com) (about 20 min); search the title if the link moves.",
  ["LLM-as-judge can be biased and wrong", "Check the judge against your own labels", "Pairwise comparison is steadier than absolute scores", "Use it only for fuzzy criteria"],
  "Add an LLM judge for one fuzzy criterion; compare its verdicts with your labels on 10 cases.",
  "You know when to trust an AI judge, and when not to.");
D("w18d5", "No reading.",
  ["Change one thing at a time", "Read the failing cases, not just the average", "Avoid tuning to the test set: keep some cases hidden"],
  "Change a prompt, re-run, compare scores and list cases that got worse.",
  "You can improve a system without fooling yourself.");
D("w18d6", "READ GitHub Actions 'Quickstart' and 'Understanding GitHub Actions' (docs.github.com/en/actions) (20 min).",
  ["Workflow file: on push, jobs, steps", "Secrets are stored encrypted; never print them", "Use a small case set in CI to limit cost"],
  "Run your evals on every push in GitHub Actions.",
  "Your quality check runs by itself.");

// ===== WEEK 19: statistics for evals =====
D("w19d1", "READ Think Stats 2e chapter 'Estimation' (30 min). Ask your AI: 'Explain the Wilson score interval for a pass rate with a small example.'",
  ["18 of 20 passed is not 'exactly 90%'", "Interval width shrinks with more cases (about 1 / square root of n)", "Report the interval with the rate"],
  "Compute a Wilson (or bootstrap) interval for your agent's pass rate.",
  "You can report a pass rate honestly.");
D("w19d2", "No reading.",
  ["Small differences need many cases", "Simulate: how often does a 5-point gap appear by chance with 30 cases?"],
  "Simulate how many cases you need to detect a 10-point improvement.",
  "You know how big your eval set must be.");
D("w19d3", "READ the 'Hypothesis Testing' chapter again, only the permutation test (15 min).",
  ["Same cases for both versions = paired", "Count wins, losses and ties", "A sign test or paired bootstrap works"],
  "Compare two prompts on the same cases; give a verdict with a number.",
  "You can say which version is better and how sure you are.");
D("w19d4", "No reading.",
  ["Even at temperature 0 results can vary", "Run each case several times", "Report consistency, not just pass rate"],
  "Run each case 5 times; measure the spread.",
  "You can measure randomness in your system.");
D("w19d5", "No reading.",
  ["One page: score, interval, worst 5 cases, what changed, decision"],
  "Make a one-page eval report template.",
  "You have a standard way to report results.");
D("w19d6", "No reading.",
  ["Do not claim improvement without the interval", "Keep the report next to the code"],
  "Apply the template to your agent and write the report.",
  "You have your first real eval report.");

// ===== WEEK 20: AI security =====
D("w20d1", "READ OWASP Top 10 for LLM Applications (genai.owasp.org/llm-top-10/): the first five risks (about 30 min).",
  ["Prompt injection: instructions hidden in input or content", "Sensitive information disclosure", "Supply chain: models, packages, tools you trust", "Improper output handling: model output is untrusted input", "Excessive agency: too many powers"],
  "Write each risk in one sentence with a real example.",
  "You know the main ways AI apps get attacked.");
D("w20d2", "READ the remaining risks on the same OWASP page (about 30 min).",
  ["System prompt leakage", "Weaknesses in vector stores and embeddings", "Misinformation", "Unbounded consumption (cost and denial of service)"],
  "Map every risk to your own agent: does it apply, how would it happen?",
  "You have a threat list for your agent.");
D("w20d3", "READ Simon Willison 'The lethal trifecta for AI agents' (simonwillison.net) (15 min); skim his prompt-injection series list for one more post.",
  ["Dangerous mix: private data + untrusted content + a way to send data out", "Remove one of the three", "Indirect injection comes from web pages and files", "No complete fix exists; reduce damage"],
  "Explain the trifecta with an example from your own agent.",
  "You can see the most dangerous setup before you build it.");
D("w20d4", "No reading.",
  ["Put instructions inside a web page or file your agent reads", "Try 10 different attacks", "Record what worked"],
  "Attack your own agent with 10 injection attempts; record results.",
  "You have seen your agent get fooled, and how.");
D("w20d5", "No reading.",
  ["Least privilege: only the tools and files it needs", "Read-only credentials, scoped tokens", "Run in a container or sandbox", "Approval for writes"],
  "Reduce your agent's permissions; test that it fails safely.",
  "You can limit the damage when it is fooled.");
D("w20d6", "READ OWASP 'Secrets Management' cheat sheet (skim 15 min) and GitHub's secret scanning docs (10 min).",
  ["Never commit keys; use environment variables", "If a key leaked, rotate it at once", "Removing a key from git history is not enough", "Different keys for dev and prod"],
  "Scan all your repos for keys; rotate any found; add a .env rule to .gitignore.",
  "You have clean secrets hygiene.");

// ===== WEEK 21: secure and prove it =====
D("w21d1", "No reading.", ["Every successful attack becomes a test case", "Eval set = quality + security"], "Add your injection attempts to the eval set.", "Attacks are part of your regular tests.");
D("w21d2", "No reading.", ["Check inputs and outputs", "Block, do not just warn", "Measure false alarms too"], "Add one guard (input or output check); re-run evals; compare.", "You can add a guard and prove it helped.");
D("w21d3", "No reading.", ["Who did what, when, with which arguments", "Logs must not hold secrets"], "Add an audit log so any bad action can be traced afterwards.", "You can investigate an incident.");
D("w21d4", "No reading.", ["Fresh eyes find new holes", "Give the tester 30 minutes and no hints"], "Have a friend or an AI try to break it for 30 minutes; log everything.", "You get an outside view of your weaknesses.");
D("w21d5", "No reading.", ["Fix the top 3 by impact", "Re-run all evals after fixes"], "Fix the top 3 findings; re-run.", "You close the loop: find, fix, prove.");
D("w21d6", "No reading.", ["One page: threats, defences, test results, remaining risks"], "Write a one-page security and eval report for the project.", "You can show an employer how you test AI systems.");

// ===== WEEK 22: containers and deployment =====
D("w22d1", "READ Docker 'Get started' (docs.docker.com/get-started/): the docker concepts and 'containerize an application' pages (30 min). Re-read Lecture 6 notes 'VMs & Containers' (10 min).",
  ["Image = recipe snapshot; container = a running copy", "Layers and caching", "Dockerfile: FROM, COPY, RUN, CMD", "Ports (-p) and volumes (-v)"],
  "Containerise a small app and run it.",
  "You can package an app so it runs the same everywhere.");
D("w22d2", "READ Docker 'Building best practices' (20 min).",
  ["Small base image", "Run as non-root", "Order layers so caching helps", "Use .dockerignore", "Multi-stage builds keep images small"],
  "Improve your Dockerfile: non-root user, smaller image, better caching.",
  "You can write a production-quality Dockerfile.");
D("w22d3", "READ Docker Compose 'Overview' and 'Quickstart' (30 min).",
  ["Compose describes several containers together", "Networks and named volumes", "healthcheck and depends_on", "env_file for configuration"],
  "Run app + database with one docker compose up.",
  "You can start a whole system with one command.");
D("w22d4", "RE-READ Lecture 6 notes 'Configuration' (10 min).",
  ["Config via environment variables", "Secrets never in images or git", "Same image, different config per environment"],
  "Move all settings and secrets out of the code and image.",
  "You can configure without rebuilding.");
D("w22d5", "READ GitHub Actions 'Building and testing Python' (15 min).",
  ["Build and test on every push", "Cache dependencies", "Fail the build when tests fail"],
  "Add a workflow that builds the image and runs tests.",
  "Your code is checked automatically before it ships.");
D("w22d6", "No reading.", ["Document the one command", "Test on a clean machine", "Know how to roll back"], "From a clean machine deploy with one documented command; roll back once.", "You can deploy and undo it.");

// ===== WEEK 23: observability and cost =====
D("w23d1", "READ OpenTelemetry docs 'Concepts: Signals' (traces, metrics, logs) (20 min) and the Python getting-started (20 min).",
  ["Trace = the path of one request through steps", "Span = one step with timing", "Metrics = numbers over time", "Logs = events"],
  "Add traces to one request path in your project.",
  "You can see where time goes inside a request.");
D("w23d2", "RE-READ the Four Golden Signals (sre.google/sre-book/monitoring-distributed-systems/) (10 min).",
  ["Pick 3 numbers that say 'healthy'", "Alert on what a user would feel", "Too many alerts = ignored alerts"],
  "Choose 3 health metrics for your system and show them.",
  "You know what to watch.");
D("w23d3", "No reading.", ["Cost per task = tokens x price", "Latency per step"], "Build a simple dashboard or CSV chart of cost per task and latency.", "You can see what each task costs.");
D("w23d4", "No reading.", ["One alert that matters", "Test the alert fires"], "Alert on error rate or budget; trigger it on purpose.", "You find out about problems before users do.");
D("w23d5", "No reading.", ["Measure, change one thing, measure again"], "Find your slowest step and speed it up with before/after numbers.", "You can optimise with evidence.");
D("w23d6", "No reading.", ["Write the budget down: cost and time per task"], "Write the cost and latency budget for your project and check it in tests.", "You have limits and a check for them.");

// ===== WEEK 24: incidents and Kubernetes literacy =====
D("w24d1", "READ Google SRE book 'Postmortem Culture: Learning from Failure' (sre.google/sre-book/postmortem-culture/) (20 min).",
  ["Blameless: fix the system, not the person", "Timeline, impact, cause, fix, prevention", "Action items with owners"],
  "Write a post-mortem of your worst bug so far.",
  "You can learn from failures in writing.");
D("w24d2", "No reading.", ["Choose what to break", "Write what you expect to see"], "Plan a practice outage: what you break, what you should see, how you will recover.", "You have a safe drill.");
D("w24d3", "No reading.", ["Use only logs and traces", "Time yourself"], "Run the outage; fix it using only your logs, traces and dashboard.", "You can recover from a real failure calmly.");
D("w24d4", "READ kubernetes.io 'What is Kubernetes?' (15 min) and 'Kubernetes Basics' modules 1-3 (concepts only, 30 min).",
  ["Pod, Deployment, Service", "You declare the wanted state; Kubernetes keeps it", "Worth it for many services, autoscaling, big teams", "Not needed for one small app"],
  "Write 5 sentences: when you would and would not use Kubernetes.",
  "You can discuss Kubernetes without pretending to be an expert.");
D("w24d5", "No reading. Optional: follow the interactive tutorial online (30 min).", ["Look, do not master"], "Run one deployment in a local cluster (minikube or kind) for a short look.", "You have seen it work.");
D("w24d6", "No reading.", ["Same structure as before", "Prevention items you actually do"], "Write a second post-mortem for the practice outage.", "Your post-mortems are real writing samples.");

// ===== WEEK 25: system design =====
D("w25d1", "READ System Design Primer (github.com/donnemartin/system-design-primer), the 'Study guide' basics: performance vs scalability, latency vs throughput, availability vs consistency (CAP), load balancer, cache, database (about 45 min).",
  ["Scale up vs scale out", "CAP: you cannot have everything in a partition", "Cache: speed up reads, risk stale data", "Load balancer spreads requests", "Database: replicas, sharding in one sentence each"],
  "Summarise the building blocks in your own words on one page.",
  "You know the parts every design uses.");
D("w25d2", "READ the System Design Primer solution 'Design Pastebin.com (or Bit.ly)' (30 min).",
  ["Estimate: requests per second and storage", "Read-heavy vs write-heavy", "Where it breaks first"],
  "Design a URL shortener on paper; list 3 failure modes and rough numbers.",
  "You can design a simple system with numbers.");
D("w25d3", "READ Chip Huyen 'Building A Generative AI Platform' (huyenchip.com/2024/07/25/genai-platform.html) (30 min).",
  ["Components: context, guardrails, router, cache, orchestration, observability", "Add them only when you need them"],
  "Design a 'chat with my documents' system: data flow, evals, cost, security.",
  "You can design an AI product end to end.");
D("w25d4", "READ one more case study from huyenchip.com/blog (30 min).", ["Find trade-offs the author made", "Say what you would change"], "Write a critique: what is good, what is risky, what you would change.", "You can criticise a design politely and specifically.");
D("w25d5", "READ the System Design Primer solution 'Design the Twitter timeline and search' (30 min).", ["Fan-out on write vs read", "Hot users problem"], "Design a notification system; defend your trade-offs aloud (record yourself).", "You can defend choices out loud.");
D("w25d6", "No reading.", ["Design doc: goals, non-goals, design, risks, alternatives"], "Write a design document for your own best project.", "You have a design document to show.");

// ===== WEEK 26: job-ready =====
D("w26d1", "No reading. Browse 3 good open-source READMEs for ideas (15 min).", ["3 pinned projects", "Each with a README, a diagram, run steps, results"], "Clean your GitHub profile: pin 3 projects with strong READMEs.", "Your GitHub tells a clear story.");
D("w26d2", "No reading.", ["One real problem, what you tried, what worked, numbers", "Plain English, short sentences"], "Write one public write-up about a real problem you solved. Publish it.", "You have public proof of thinking.");
D("w26d3", "No reading.", ["One page; projects first; results with numbers; links"], "Write a one-page CV; ask an experienced person for feedback.", "You have a CV that shows proof, not buzzwords.");
D("w26d4", "No reading. Use the AI examiner prompt in 'Learn with AI'.", ["Think aloud", "Say what you do not know", "Ask clarifying questions"], "Do 2 mock technical interviews: one DSA, one design question.", "You have practised under pressure.");
D("w26d5", "No reading.", ["Pick the weakest block", "No AI, no notes"], "Redo the gate of your weakest block without AI.", "You close your biggest gap.");
D("w26d6", "No reading.", ["What you can build and prove now", "Weak areas", "Next 6 months"], "Final reflection and your next 6-month plan.", "You have a plan for the next stage.");
