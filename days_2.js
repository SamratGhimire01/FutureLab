// Specific daily entries, weeks 10-17. Video lengths are approximate (from memory): check the player before you start.
window.DAYS = window.DAYS || {};
var D = (k, s, know, build, out) => (window.DAYS[k] = { s, k: know, build, out });

// ===== WEEK 10: probability and statistics =====
D("w10d1", "READ Seeing Theory (seeing-theory.brown.edu) chapter 'Basic Probability' and play with every widget (about 25 min).",
  ["Probability = long-run frequency", "Law of large numbers: more trials, steadier average", "Expected value = average outcome", "Sample space and events"],
  "Simulate 10,000 dice rolls and coin flips in Python; compare with the theory.",
  "You can reason about chance and check it by simulation.");
D("w10d2", "READ Seeing Theory chapter 'Compound Probability' (conditional probability, independence, Bayes' rule) (about 25 min).",
  ["P(A given B) is not P(B given A)", "Independent events", "Bayes' rule: update a belief with evidence", "Base rates: a 99% accurate test can still be wrong most of the time for a rare disease"],
  "Solve the 'rare disease, positive test' problem by hand, then in code.",
  "You can avoid the most common probability mistake.");
D("w10d3", "READ Seeing Theory chapter 'Probability Distributions' (about 20 min).",
  ["Mean, variance, standard deviation", "Normal distribution (bell curve)", "Binomial: count of successes in n tries", "Central limit theorem: averages look normal"],
  "Plot normal and binomial data; show how sample means become bell-shaped.",
  "You can describe data with a few numbers and a shape.");
D("w10d4", "WATCH on the StatQuest YouTube channel (search the exact titles): 'Confidence Intervals, Clearly Explained' and 'Bootstrapping Main Ideas' (about 10-15 min each; stop there).",
  ["Confidence interval = a range that would catch the truth in most repeats", "Bootstrapping = resample your own data to see the spread", "More data = narrower interval", "An interval is more honest than one number"],
  "Bootstrap a 95% confidence interval for the mean of a real dataset.",
  "You can say how sure you are, not just what the average is.");
D("w10d5", "READ Think Stats 2e (greenteapress.com/wp/think-stats-2e/) chapter 'Hypothesis Testing' (about 30 min). Optional: StatQuest 'p-values' video (about 10 min).",
  ["Null hypothesis = 'no real difference'", "Permutation test: shuffle labels and see how often chance matches your result", "p-value = how surprising the data is IF nothing is going on", "Effect size matters as much as p", "Many tests = false alarms"],
  "Run an A/B test with a permutation test on two groups of numbers.",
  "You can decide whether a difference is real or luck.");
D("w10d6", "DO NeetCode: Sliding Window: Best Time to Buy and Sell Stock, Longest Substring Without Repeating Characters; plus one Stack problem. 20 min first, then the video.",
  ["Sliding window keeps a moving range", "Say the time cost aloud"],
  "Solve 3 problems. Write one page: three ways p-values get misused, in your words.",
  "You can explain a p-value to a non-expert.");

// ===== WEEK 11: core ML =====
D("w11d1", "DO Kaggle Learn 'Intro to Machine Learning' (kaggle.com/learn), all lessons (about 3 h, interactive). Skim Hands-On ML ch.1 'The Machine Learning Landscape' (20 min) if you have the book.",
  ["Features (inputs) and target (what you predict)", "Always split train and validation", "Overfitting vs underfitting", "A random forest is a strong first baseline"],
  "Finish the course and its two exercises.",
  "You can train and evaluate your first model.");
D("w11d2", "DO Kaggle Learn 'Intermediate Machine Learning': Missing Values, Categorical Variables, Pipelines, Cross-Validation, Data Leakage (about 3-4 h).",
  ["Handle missing values (drop or fill) on purpose", "One-hot vs ordinal encoding", "Pipelines keep preprocessing inside validation", "Data leakage: information from the future or the test set sneaking in"],
  "Finish the lessons; build one pipeline with a preprocessor and a model.",
  "You can prepare messy data without leaking answers.");
D("w11d3", "READ Hands-On ML ch.3 'Classification': confusion matrix, precision, recall, F1, ROC (about 45 min). No book? Ask your AI to explain each metric with a spam example.",
  ["Confusion matrix: true/false positives and negatives", "Precision: of what I flagged, how much was right", "Recall: of the real ones, how many I caught", "Accuracy lies when classes are imbalanced", "Pick the metric by the cost of each mistake"],
  "Train a spam classifier; show its confusion matrix; explain which mistake costs more.",
  "You can choose a metric that matches the real cost of errors.");
D("w11d4", "READ scikit-learn user guide 'Cross-validation: evaluating estimator performance' up to cross_val_score (20 min).",
  ["One split can mislead; k-fold averages many", "Stratified keeps class balance", "Never tune on the test set", "Fit preprocessing inside the fold"],
  "Compare 3 models with 5-fold cross-validation; report mean and spread.",
  "You can compare models fairly.");
D("w11d5", "READ Hands-On ML ch.4 'Training Models': linear regression, gradient descent, learning rate, regularisation (about 60 min). Skip the normal-equation maths on first pass.",
  ["Gradient descent: step downhill on the error", "Learning rate too big diverges, too small crawls", "Regularisation (L1/L2) fights overfitting", "A model is parameters + a loss + an optimiser"],
  "Implement gradient descent for linear regression in plain NumPy; match scikit-learn.",
  "You can explain how a model learns, with code you wrote.");
D("w11d6", "No new reading. Use Kaggle Learn 'Feature Engineering' (about 2 h) if time.",
  ["Features often matter more than model choice", "Check for leakage before celebrating a high score"],
  "Small Kaggle tabular project; write what could be leaking or overfit.",
  "You have a modelling project with honest notes.");

// ===== WEEK 12: neural networks from scratch =====
D("w12d1", "WATCH 3Blue1Brown 'But what is a neural network?' (about 19 min) and 'Gradient descent, how neural networks learn' (about 21 min). Watch both fully at normal speed and pause to answer his questions.",
  ["Neuron = weighted sum + bias + activation", "Layers; counting parameters", "Cost function = how wrong on average", "Gradient descent = repeated small steps downhill"],
  "On paper, compute one neuron's output and its error for a made-up example.",
  "You can explain what a neural network is made of and how it learns.");
D("w12d2", "WATCH 3Blue1Brown 'Backpropagation, intuitively' (about 13 min) and 'Backpropagation calculus' (about 10 min).",
  ["Backprop = blame each weight for the error", "It is the chain rule applied layer by layer", "Mini-batches approximate the gradient", "You do not need to hand-derive big networks"],
  "Backprop a 2-input, 1-neuron network by hand for one example.",
  "You can say why backprop works.");
D("w12d3", "WATCH Andrej Karpathy 'The spelled-out intro to neural networks and backpropagation: building micrograd' (about 2.5 h; the one long video worth it because you code along). Pause often; do not just watch.",
  ["A Value object remembers how it was made", "Backward pass applies the chain rule automatically", "Autograd is the heart of PyTorch"],
  "Code micrograd along with him and make your own tests pass.",
  "You have built the core of a deep learning library.");
D("w12d4", "WATCH Karpathy 'The spelled-out intro to language modeling: building makemore' part 1 (about 2 h). Do the first hour coding along; finish the rest at another time if tired.",
  ["Language model = predict the next character", "Counting vs a tiny neural net give the same idea", "Loss = negative log likelihood", "Sampling from probabilities"],
  "Generate new names from your own bigram model.",
  "You understand next-token prediction in its simplest form.");
D("w12d5", "READ + RUN PyTorch 'Learn the Basics' (pytorch.org/tutorials/beginner/basics/intro.html): Tensors, Datasets and DataLoaders, Build the Neural Network, Autograd, Optimization (about 2 h).",
  ["Tensor = array that can live on a GPU and track gradients", "Dataset/DataLoader feed batches", "Training loop: forward, loss, backward, step", "model.eval() and no_grad for testing"],
  "Train a small image classifier and plot train vs validation loss.",
  "You can write a PyTorch training loop.");
D("w12d6", "No new reading.",
  ["Overfitting shows as training loss falling while validation loss rises", "Fixes: more data, regularisation, dropout, early stopping"],
  "Make your model overfit on purpose, then fix it; record numbers for each change.",
  "You can diagnose training from curves.");

// ===== WEEK 13: transformers and tiny GPT =====
D("w13d1", "READ 'The Illustrated Transformer' (jalammar.github.io/illustrated-transformer/) (about 25 min).",
  ["Text -> tokens -> embeddings", "Self-attention: queries, keys, values", "Multi-head attention looks at several relations at once", "Positional information tells order", "Output = probabilities for the next token"],
  "Draw self-attention on paper for a 4-word sentence.",
  "You can describe the transformer's parts in order.");
D("w13d2", "WATCH 3Blue1Brown 'Transformers, the tech behind LLMs' (about 27 min) and 'Attention in transformers, step-by-step' (about 26 min).",
  ["Attention decides which words matter to each other", "Q.K scores -> softmax -> weighted sum of V", "Why context length is expensive", "Generating text is repeated next-token prediction"],
  "Write what Q, K and V mean in your own words (no notes).",
  "You can explain attention to a friend.");
D("w13d3", "WATCH Karpathy 'Let's build GPT: from scratch, in code, spelled out' (about 2 h). Today: first half, coding along.",
  ["Start from a bigram model", "Self-attention as a weighted average with masking", "Why the mask hides the future"],
  "Code along through the self-attention part.",
  "You can build attention yourself.");
D("w13d4", "Finish the Karpathy GPT video (second half), then train on a small text file.",
  ["Residual connections and layer norm stabilise training", "Blocks stacked make a GPT", "Training loss vs validation loss"],
  "Train your tiny GPT on a small text and read the samples critically.",
  "You have a working language model you built.");
D("w13d5", "READ Hugging Face LLM Course, tokenizers chapter: 'Byte-Pair Encoding tokenization' (about 20 min).",
  ["Tokens are pieces of words, not words", "BPE merges frequent pairs", "Tokenization explains odd model behaviour (spelling, numbers)", "Cost is counted in tokens"],
  "Build a tiny BPE tokenizer on a small text.",
  "You can explain why models see tokens, not letters.");
D("w13d6", "No new reading. Use all week's notes.",
  ["Tokens -> embeddings -> attention -> probabilities -> sampling", "Loss can lie: low loss does not mean true facts", "Models predict plausible text, not verified truth"],
  "Write 'How a language model predicts the next word' without AI; include a diagram.",
  "You can explain LLMs honestly, including their limits.");

// ===== WEEK 14: using LLM APIs =====
D("w14d1", "READ Anthropic API docs (docs.anthropic.com): 'Messages API' quickstart (20 min). Use your own API key; never paste it in code or screenshots.",
  ["Messages have roles: user and assistant", "The API is stateless: you resend the history", "max_tokens and stop_reason", "Handle rate limits (429) and server errors with backoff", "Keys live in environment variables"],
  "Call a model from Python; handle an error on purpose.",
  "You can call a model from code safely.");
D("w14d2", "READ the docs page on getting structured (JSON) output (15 min). Use Pydantic to validate.",
  ["Ask for a fixed JSON shape", "Validate; never trust model output", "On bad JSON: retry once with the error message", "Log failures"],
  "Get JSON back and validate it; test with deliberately broken output.",
  "You can make model output reliable enough for code.");
D("w14d3", "READ the docs 'Tool use' overview (30 min).",
  ["You describe tools with a JSON schema", "The model asks to use a tool; YOUR code runs it", "You send the tool_result back", "Loop until the model gives a final answer", "Tool arguments can be wrong: validate"],
  "Add one tool (a calculator) and run the call-and-result loop.",
  "You can give a model abilities and control them.");
D("w14d4", "READ Anthropic 'Building effective agents' (anthropic.com/engineering/building-effective-agents) (20 min).",
  ["Workflow = code decides the steps; agent = the model decides", "Patterns: chaining, routing, parallelising, orchestrator-workers, evaluator-optimizer", "Start with the simplest thing that works", "Agents cost more and fail more"],
  "For 3 real tasks, decide: single prompt, workflow or agent? Write why.",
  "You can pick the right level of complexity.");
D("w14d5", "READ the docs on token counting and the pricing page (15 min).",
  ["Input and output tokens cost different amounts", "Context window limits", "Count tokens before sending big inputs", "A budget cap prevents surprise bills"],
  "Count tokens and cost per call; add a hard budget that stops the program.",
  "You can predict and cap AI costs.");
D("w14d6", "No new reading.",
  ["Test bad inputs: empty, huge, malformed", "Tests on the parser protect you from model surprises"],
  "Write tests for your tool-call parser, including garbage model output.",
  "You can test the part of an AI app that fails most.");

// ===== WEEK 15: agent loop =====
D("w15d1", "RE-READ the 'Agents' section of 'Building effective agents' (5 min).",
  ["Loop: call model, if it asks for a tool run it, add the result, repeat", "Stop on: final answer, max steps, budget", "Never loop forever"],
  "Build the loop with a maximum of N steps.",
  "You can write an agent loop with no framework.");
D("w15d2", "READ the docs page on context windows (10 min).",
  ["Messages grow every step", "Trim or summarise old messages", "Keep the system prompt and the task", "Truncate huge tool results"],
  "Add message trimming; show it still works on a long task.",
  "You can keep long runs inside the context limit.");
D("w15d3", "RE-SKIM the AWS retries/jitter article (5 min) and your Week 7 code.",
  ["Timeout every call", "Retry only safe operations", "Inject failures to test: make a tool fail randomly"],
  "Add timeouts and retries; test with a flaky tool.",
  "You can make an agent survive tool failures.");
D("w15d4", "READ modelcontextprotocol.io: Introduction and a Quickstart (30 min).",
  ["MCP = a standard way to plug tools and data into AI apps", "Server exposes tools; client uses them", "Untrusted servers are a risk", "Start with read-only tools"],
  "Connect one MCP server and call one of its tools from your agent.",
  "You know what MCP is and its risks.");
D("w15d5", "RE-READ Lecture 4 notes 'Printf Debugging and Logging' (10 min).",
  ["Log every step: step number, tool, arguments (redact secrets), result summary, tokens, time", "JSON lines can be replayed", "A bad run you cannot replay is a bad run you cannot fix"],
  "Write a trace file per run; replay one run from it.",
  "You can debug an agent after it misbehaves.");
D("w15d6", "No new reading.",
  ["Pick a job with a clear 'done' and low risk", "Budget and stop rules first"],
  "Make the agent do one useful job (for example, summarise your notes folder) with a budget.",
  "You have an agent that does real work safely.");

// ===== WEEK 16: coding agents and context =====
D("w16d1", "READ Missing Semester 2026 Lecture 7 notes 'Agentic Coding' (missing.csail.mit.edu/2026/agentic-coding/) (about 20 min), plus your coding agent's docs page on instruction files (CLAUDE.md / AGENTS.md).",
  ["An instruction file tells the agent your commands and rules", "Keep it short and specific", "Include: how to run tests, what never to touch, style rules", "Update it when the agent repeats a mistake"],
  "Write an instruction file for one of your projects.",
  "You can steer an agent with durable instructions.");
D("w16d2", "RE-READ Lecture 7 notes (10 min).",
  ["A good task: goal, inputs, outputs, acceptance criteria, out of scope", "Small tasks beat big ones", "Review the diff line by line; ask the agent to explain"],
  "Write a spec with acceptance criteria, give it to an agent, review the diff, list the problems you found.",
  "You can direct an agent and catch its mistakes.");
D("w16d3", "RE-READ Lecture 5 notes 'Advanced Git' (worktree) (10 min) and Lecture 7 (5 min).",
  ["Worktree = second checkout of the same repo", "One agent per worktree and branch", "Merge one at a time; run tests after each"],
  "Run 2 agents on 2 separate tasks in separate worktrees; merge both.",
  "You can run agents in parallel without collisions.");
D("w16d4", "READ Lecture 9 notes 'Code Quality' (missing.csail.mit.edu/2026/code-quality/) (about 20 min).",
  ["Agents may change tests to make them pass", "You own the tests; review test changes first", "CI is the referee", "Static checks and linters catch cheap mistakes"],
  "Find or plant a 'tests changed to pass' diff; add a rule against it to your instruction file.",
  "You can spot fake success.");
D("w16d5", "READ LangGraph docs: Overview and 'Graph API' concepts: state, nodes, edges (langchain-ai.github.io/langgraph/) (30 min).",
  ["State = what the agent knows now", "Node = a step; edge = what runs next", "Conditional edges = decisions", "A framework is your loop drawn as a graph"],
  "Redraw one LangGraph example as a state diagram on paper.",
  "You can read a framework without being scared of it.");
D("w16d6", "No new reading.",
  ["Compare: your loop vs an SDK", "Keep what made code shorter and clearer"],
  "Refactor your loop onto one SDK; write what got easier and what got harder.",
  "You can decide when a framework is worth it.");

// ===== WEEK 17: agent reliability =====
D("w17d1", "RE-READ the appendix on tool design in 'Building effective agents' (10 min) and browse anthropic.com/engineering for a post on writing tools (20 min).",
  ["Clear tool names and descriptions", "Few, well-chosen arguments", "Return short, useful results", "Error messages that tell the model what to do next"],
  "Improve one tool's description and arguments; measure whether results get better.",
  "You can design tools models use well.");
D("w17d2", "No reading. Ask your AI to list failure modes of agents, then pick your own 5.",
  ["Infinite loop (same call repeated)", "Wrong tool or bad arguments", "Empty or huge result", "Model says 'done' but is not"],
  "Make each failure happen on purpose and handle it.",
  "You have a known list of how your agent fails.");
D("w17d3", "No reading.",
  ["Classify actions: read-only or changes something", "Ask a human before irreversible actions", "Dry-run mode shows what would happen", "Keep an audit log"],
  "Add an approval step for risky actions.",
  "You can stop an agent from doing damage.");
D("w17d4", "No reading.",
  ["Measure, do not guess: run 20 times", "Set a cost and time budget per task"],
  "Measure cost and latency over 20 runs; set a per-task budget.",
  "You know what a task really costs.");
D("w17d5", "No reading.",
  ["Same tasks, several models, several runs", "Record pass rate, cost, latency in a table", "Cheaper is fine if it passes"],
  "Compare 2 models on the same 10 tasks; write results in a table.",
  "You can choose a model with evidence.");
D("w17d6", "No reading.",
  ["A gate test is automatic and repeatable", "It fails when the agent loops or overspends"],
  "Write the gate test: a failing tool is survived; the budget stops a runaway run.",
  "Your agent has a safety test.");
