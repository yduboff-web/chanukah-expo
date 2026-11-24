/* Chanukah Expo topic games — hardened game engine.
   Keeps the supplied topic content and the existing EXPO topic/quiz data. */
const TAKEN = [1, 2, 3, 5, 6, 10, 11, 15, 17, 18];
const GAMES = [
  ["match", "Matching", "Pair each term with its meaning."],
  ["seq", "Put it in order", "Arrange the steps or events in the right order."],
  ["who", "Who am I?", "Use the clues. Guess sooner to earn more points."],
  ["tf", "True or false", "Decide, then fix the false statements."],
  ["escape", "Escape room", "Answer each question to open the next lock."],
  ["gap", "Fill the gap", "Complete every sentence using the word bank."],
  ["jeop", "Quiz board", "Pick a square, answer out loud, then reveal." ]
];

const app = document.getElementById("app");
const allTopics = window.EXPO?.topics;
const G = window.EXPO_GAMES;

function shuffle(values) {
  const a = [...values];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined && text !== null) node.textContent = String(text);
  return node;
}
function button(label, action, cls = "") {
  const b = el("button", cls, label);
  b.type = "button";
  b.addEventListener("click", action);
  return b;
}
function banner(parent, message) {
  const b = el("div", "banner", message);
  b.setAttribute("role", "status");
  parent.append(b);
  return b;
}
function shuffleTextOptions(values) {
  return shuffle([...new Set(values.filter(v => v !== undefined && v !== null && String(v).trim() !== ""))]);
}

const topics = Array.isArray(allTopics) ? allTopics.filter(t => TAKEN.includes(Number(t.n))) : [];
let state = { topic: null, game: null };

function setPage(topic, game = null) {
  state = { topic, game };
  render();
}
function nav() {
  const r = el("div", "row");
  r.append(button("← All topics", () => setPage(null)));
  if (state.topic !== null) r.append(button("← All games for this topic", () => setPage(state.topic)));
  return r;
}
function render() {
  app.replaceChildren();
  if (!Array.isArray(allTopics) || !G) {
    banner(app, "The games could not load. Check that data.js and games-data.js are loaded before games.mjs.");
    return;
  }
  const params = new URLSearchParams(location.search);
  if (state.topic === null && params.has("topic")) {
    const requested = Number(params.get("topic"));
    if (TAKEN.includes(requested)) state.topic = requested;
  }
  if (state.topic === null) return renderTopics();
  const topic = topics.find(t => Number(t.n) === Number(state.topic));
  if (!topic || !G[String(state.topic)]) {
    state = { topic: null, game: null };
    return renderTopics();
  }
  if (state.game === null) return renderGames(topic);
  if (!GAMES.some(g => g[0] === state.game)) {
    state.game = null;
    return renderGames(topic);
  }
  renderGame(topic);
}
function renderTopics() {
  const card = el("section", "card");
  card.append(el("h2", "", "Pick your topic"));
  card.append(el("p", "muted", "Choose your team's topic. All seven games use that topic's material."));
  const grid = el("div", "pick");
  topics.forEach(t => {
    const b = button("", () => setPage(Number(t.n)));
    b.classList.add("topic-button");
    const n = el("span", "tname", `Topic ${t.n}`);
    const name = el("span", "topic-name", t.name);
    name.dir = "auto";
    const about = el("span", "tsub", t.about || "");
    b.append(n, name, about);
    grid.append(b);
  });
  card.append(grid);
  app.append(card);
}
function renderGames(t) {
  const card = el("section", "card");
  card.append(nav());
  const heading = el("h2");
  heading.append(document.createTextNode(`Topic ${t.n} · `));
  const name = el("span", "", t.name); name.dir = "auto"; heading.append(name);
  card.append(heading);
  if (t.overview) card.append(el("p", "muted", t.overview));
  const grid = el("div", "pick");
  GAMES.forEach(([id, title, description]) => {
    const b = button("", () => setPage(Number(t.n), id));
    b.classList.add("game-button");
    b.append(el("span", "tname", title), el("span", "tsub", description));
    grid.append(b);
  });
  card.append(grid);
  app.append(card);
}
function renderGame(t) {
  const d = G[String(t.n)];
  const game = GAMES.find(g => g[0] === state.game);
  const card = el("section", "card");
  card.append(nav());
  const heading = el("h2");
  heading.append(document.createTextNode(`${game[1]} · Topic ${t.n} `));
  const topicName = el("span", "", t.name); topicName.dir = "auto"; heading.append(topicName);
  card.append(heading);
  const body = el("div", "game-body");
  card.append(body);
  app.append(card);
  const engines = { match: gMatch, seq: gSeq, who: gWho, tf: gTf, escape: gEscape, gap: gGap, jeop: gJeop };
  if (!d[state.game] && state.game !== "escape") {
    banner(body, "This game has no content for this topic yet.");
    return;
  }
  engines[state.game](body, t, d);
}

/* 1. Matching */
function gMatch(body, t, d) {
  const pairs = d.match || [];
  if (!pairs.length) return banner(body, "No matching pairs are available.");
  body.append(el("p", "muted", "Choose one term and one meaning. Correct pairs stay highlighted."));
  const score = el("p", "score", "");
  const columns = el("div", "cols");
  const termsCol = el("div", "tile-list");
  const meaningsCol = el("div", "tile-list");
  columns.append(termsCol, meaningsCol); body.append(score, columns);
  let attempts = 0, matched = 0, selected = null, finished = false;
  const tiles = [];
  function update() { score.textContent = `Matched: ${matched}/${pairs.length} · Attempts: ${attempts}`; }
  function choose(item, side, b) {
    if (finished || b.disabled) return;
    if (!selected) {
      selected = { item, side, button: b };
      b.classList.add("sel");
      return;
    }
    if (selected.button === b) {
      selected.button.classList.remove("sel"); selected = null; return;
    }
    if (selected.side === side) {
      selected.button.classList.remove("sel");
      selected = { item, side, button: b }; b.classList.add("sel");
      return;
    }
    attempts++;
    const first = selected;
    selected = null;
    if (first.item.index === item.index) {
      [first.button, b].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); x.disabled = true; });
      matched++;
      if (matched === pairs.length) { finished = true; banner(body, `All ${pairs.length} pairs matched in ${attempts} attempts. Great job!`); }
    } else {
      [first.button, b].forEach(x => x.classList.add("wrongflash"));
      window.setTimeout(() => [first.button, b].forEach(x => x.classList.remove("wrongflash")), 650);
      first.button.classList.remove("sel");
    }
    update();
  }
  const left = shuffle(pairs.map((p, index) => ({ text: p[0], index })));
  const right = shuffle(pairs.map((p, index) => ({ text: p[1], index })));
  left.forEach(item => { const b = button(item.text, () => choose(item, "term", b), "tile"); b.dir = "auto"; termsCol.append(b); });
  right.forEach(item => { const b = button(item.text, () => choose(item, "meaning", b), "tile"); b.dir = "auto"; meaningsCol.append(b); });
  update();
}

/* 2. Put it in order */
function gSeq(body, t, d) {
  const source = d.seq || [];
  if (source.length < 2) return banner(body, "Not enough steps are available for this game.");
  body.append(el("p", "muted", "Move the steps with the arrows, then check your order."));
  const list = el("ol", "sequence-list");
  const score = el("p", "score", "");
  let items = shuffle(source.map((text, index) => ({ text, index })));
  let checks = 0, solved = false;
  function draw() {
    list.replaceChildren();
    items.forEach((item, position) => {
      const row = el("li", "seqitem");
      const up = button("↑", () => move(position, -1), "mv");
      const down = button("↓", () => move(position, 1), "mv");
      up.disabled = position === 0 || solved;
      down.disabled = position === items.length - 1 || solved;
      up.setAttribute("aria-label", `Move step ${position + 1} up`);
      down.setAttribute("aria-label", `Move step ${position + 1} down`);
      row.append(up, down, el("span", "txt", item.text));
      list.append(row);
    });
  }
  function move(position, delta) {
    const target = position + delta;
    if (target < 0 || target >= items.length || solved) return;
    [items[position], items[target]] = [items[target], items[position]];
    draw();
  }
  const check = button("Check the order", () => {
    if (solved) return;
    checks++;
    let correct = 0;
    [...list.children].forEach((row, position) => {
      const ok = items[position].index === position;
      row.classList.toggle("ok", ok); row.classList.toggle("no", !ok);
      if (ok) correct++;
    });
    score.textContent = `Correct positions: ${correct}/${items.length} · Checks: ${checks}`;
    if (correct === items.length) {
      solved = true; check.disabled = true; draw();
      banner(body, `Perfect order in ${checks} check${checks === 1 ? "" : "s"}!`);
    }
  }, "primary");
  draw(); body.append(list, check, score);
}

/* 3. Who am I? Three clues, maximum three points. */
function gWho(body, t, d) {
  const questions = shuffle(d.who || []);
  if (!questions.length) return banner(body, "No Who Am I questions are available.");
  let index = 0, clueCount = 0, total = 0, answered = false;
  const score = el("p", "score"); const panel = el("div", "who-panel");
  body.append(score, panel);
  function updateScore() { score.textContent = `Question ${Math.min(index + 1, questions.length)}/${questions.length} · Points: ${total}`; }
  function showQuestion() {
    panel.replaceChildren();
    if (index >= questions.length) {
      score.textContent = "";
      banner(panel, `Finished! You earned ${total} out of ${questions.length * 3} points.`);
      return;
    }
    clueCount = 0; answered = false;
    const q = questions[index];
    const clues = el("div", "clues");
    const reveal = button("Show first clue", () => revealClue(), "primary");
    const choices = el("div", "opts");
    const answers = shuffleTextOptions(questions.map(x => x.a));
    answers.forEach(answer => {
      const b = button(answer, () => {
        if (answered) return;
        if (answer === q.a) {
          answered = true;
          const points = Math.max(0, 4 - clueCount);
          total += points;
          [...choices.children].forEach(x => x.disabled = true);
          reveal.disabled = true;
          banner(panel, `Correct — ${q.a}. +${points} point${points === 1 ? "" : "s"}.`);
          panel.append(button(index === questions.length - 1 ? "See final score" : "Next question", () => { index++; showQuestion(); updateScore(); }, "primary"));
        } else {
          b.disabled = true; b.classList.add("wrong");
          total = Math.max(0, total - 1);
          updateScore();
        }
      });
      choices.append(b);
    });
    function revealClue() {
      if (answered || clueCount >= q.c.length) return;
      clues.append(el("div", "clue", q.c[clueCount]));
      clueCount++;
      reveal.textContent = clueCount < q.c.length ? "Show next clue" : "All clues shown";
      reveal.disabled = clueCount >= q.c.length;
    }
    panel.append(el("p", "muted", "Guess with as few clues as possible. Each wrong guess costs one point."), clues, reveal, choices);
    revealClue(); // First clue is shown automatically; three clues = 1 point maximum without an early guess.
    updateScore();
  }
  showQuestion();
}

/* 4. True or false, then correct the false statement. */
function gTf(body, t, d) {
  const questions = shuffle(d.tf || []);
  if (!questions.length) return banner(body, "No true-or-false questions are available.");
  let index = 0, total = 0, locked = false;
  const score = el("p", "score"); const panel = el("div"); body.append(score, panel);
  function next() {
    locked = false; panel.replaceChildren();
    if (index >= questions.length) {
      score.textContent = ""; banner(panel, `Finished! Score: ${total} points out of ${questions.length * 2}.`); return;
    }
    const q = questions[index];
    score.textContent = `Statement ${index + 1}/${questions.length} · Points: ${total}`;
    panel.append(el("p", "question", q.s));
    const options = el("div", "opts");
    const trueButton = button("True", () => answer(true));
    const falseButton = button("False", () => answer(false));
    options.append(trueButton, falseButton); panel.append(options);
    function answer(value) {
      if (locked) return;
      locked = true; trueButton.disabled = falseButton.disabled = true;
      if (value === q.t) {
        total++;
        banner(panel, q.t ? "Correct — true! +1 point." : "Correct — false! +1 point. Now choose the corrected statement.");
        if (!q.t && q.fix) {
          const fixes = el("div", "opts");
          const alternatives = shuffleTextOptions([q.fix, ...shuffle((d.tf || []).filter(x => !x.t && x.fix && x.fix !== q.fix).map(x => x.fix)).slice(0, 2)]);
          alternatives.forEach(text => {
            fixes.append(button(text, event => {
              [...fixes.children].forEach(x => x.disabled = true);
              if (text === q.fix) { event.currentTarget.classList.add("right"); total++; banner(panel, "Exactly right! +1 point."); }
              else { event.currentTarget.classList.add("wrong"); banner(panel, `Not quite. Correct version: ${q.fix}`); }
              score.textContent = `Statement ${index + 1}/${questions.length} · Points: ${total}`;
              panel.append(button("Next", () => { index++; next(); }, "primary"));
            }));
          });
          panel.append(fixes);
        } else panel.append(button("Next", () => { index++; next(); }, "primary"));
      } else {
        banner(panel, `Not quite — the statement is ${q.t ? "TRUE" : "FALSE"}.${q.fix ? ` ${q.fix}` : ""}`);
        panel.append(button("Next", () => { index++; next(); }, "primary"));
      }
      score.textContent = `Statement ${index + 1}/${questions.length} · Points: ${total}`;
    }
  }
  next();
}

/* 5. Escape room — uses the existing topic quiz in data.js. */
function gEscape(body, t) {
  const questions = shuffle(Array.isArray(t.quiz) ? t.quiz : []);
  if (!questions.length) return banner(body, "The escape-room quiz is missing for this topic. Check the topic's quiz data in data.js.");
  let lock = 0, misses = 0;
  const progress = el("div", "locks"); const panel = el("div");
  body.append(progress, panel);
  function draw() {
    progress.replaceChildren();
    questions.forEach((_, i) => {
      const mark = el("span", "lock", i < lock ? "🔓" : "🔒");
      mark.setAttribute("aria-label", i < lock ? `Lock ${i + 1} open` : `Lock ${i + 1} closed`);
      progress.append(mark);
    });
    panel.replaceChildren();
    if (lock >= questions.length) {
      banner(panel, `You escaped! All ${questions.length} locks opened with ${misses} wrong ${misses === 1 ? "try" : "tries"}.`);
      return;
    }
    const q = questions[lock];
    panel.append(el("p", "muted", `Lock ${lock + 1} of ${questions.length} · ${misses} wrong ${misses === 1 ? "try" : "tries"}`));
    panel.append(el("p", "question", q.q));
    const options = el("div", "opts");
    shuffleTextOptions([q.a, ...(Array.isArray(q.w) ? q.w : [])]).forEach(answer => {
      options.append(button(answer, event => {
        if (answer === q.a) { lock++; draw(); }
        else { misses++; event.currentTarget.disabled = true; event.currentTarget.classList.add("wrong"); }
      }));
    });
    panel.append(options);
  }
  draw();
}

/* 6. Fill the gap — one unique option per answer, with distractors. */
function gGap(body, t, d) {
  const questions = d.gap || [];
  if (!questions.length) return banner(body, "No fill-in-the-gap questions are available.");
  body.append(el("p", "muted", "Choose an answer for each sentence, then check your work."));
  const otherAnswers = TAKEN.filter(n => n !== Number(t.n)).flatMap(n => (G[String(n)]?.gap || []).map(g => g.a));
  const correctAnswers = questions.map(q => q.a);
  const distractors = shuffleTextOptions(otherAnswers.filter(x => !correctAnswers.includes(x))).slice(0, Math.min(4, otherAnswers.length));
  const bank = shuffleTextOptions([...correctAnswers, ...distractors]);
  const bankBox = el("div", "clue word-bank");
  bankBox.append(el("strong", "", "Word bank: "));
  bankBox.append(document.createTextNode(bank.join(" · ")));
  body.append(bankBox);
  const rows = [];
  questions.forEach((q, index) => {
    const row = el("div", "gapline");
    row.append(document.createTextNode(`${index + 1}. ${q.b} `));
    const select = el("select", "gap-select");
    select.setAttribute("aria-label", `Answer for sentence ${index + 1}`);
    select.append(new Option("— choose —", ""));
    shuffle(bank).forEach(word => select.append(new Option(word, word)));
    row.append(select, document.createTextNode(` ${q.w}`));
    body.append(row); rows.push({ row, select, q });
  });
  const score = el("p", "score");
  const check = button("Check answers", () => {
    let correct = 0;
    rows.forEach(({ row, select, q }) => {
      const ok = select.value === q.a;
      row.classList.toggle("ok", ok); row.classList.toggle("no", !ok);
      if (ok) correct++;
    });
    score.textContent = `Correct: ${correct}/${rows.length}`;
    if (correct === rows.length) { check.disabled = true; banner(body, "Every gap is correct. Well done!"); }
  }, "primary");
  body.append(check, score);
}

/* 7. Quiz board — only one active clue; no duplicate scoring. */
function gJeop(body, t, d) {
  const categories = d.jeop || [];
  if (!categories.length || categories.some(c => !Array.isArray(c.qa) || c.qa.length === 0)) return banner(body, "The quiz board data is incomplete for this topic.");
  let total = 0, activePanel = null, completed = 0;
  const score = el("p", "score", "Points: 0");
  const board = el("div", "board");
  const headers = el("div", "board-head");
  categories.forEach(category => headers.append(el("div", "cat", category.cat)));
  board.append(headers);
  const rows = Math.max(...categories.map(c => c.qa.length));
  for (let row = 0; row < rows; row++) {
    categories.forEach((category, col) => {
      const qa = category.qa[row];
      const cell = button(qa ? `${qa[2]} pts` : "—", () => {
        if (!qa || cell.disabled || activePanel) return;
        cell.disabled = true; cell.classList.add("used");
        const panel = el("section", "question-panel"); activePanel = panel;
        panel.append(el("p", "question", qa[0]));
        const reveal = button("Show answer", () => {
          reveal.disabled = true;
          panel.append(el("div", "clue", qa[1]));
          const controls = el("div", "row");
          controls.append(button("We got it", () => {
            total += Number(qa[2]) || 0; completed++;
            score.textContent = `Points: ${total} · Squares completed: ${completed}`;
            panel.remove(); activePanel = null;
          }, "primary"));
          controls.append(button("We missed it", () => {
            completed++; score.textContent = `Points: ${total} · Squares completed: ${completed}`;
            panel.remove(); activePanel = null;
          }));
          panel.append(controls);
        }, "primary");
        panel.append(reveal); body.append(panel);
        panel.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
      }, "cell");
      cell.disabled = !qa;
      cell.setAttribute("aria-label", qa ? `${category.cat}, ${qa[2]} points` : "No question");
      cell.dataset.row = String(row); cell.dataset.col = String(col);
      board.append(cell);
    });
  }
  body.append(el("p", "muted", "Play in teams: choose a square, answer out loud, then reveal the answer and award points."), score, board);
}

/* Access gate: the teacher gives out the games code, so students only open
   the games when the class is ready. The code is stored as a hash, not in
   plain text; it keeps casual visitors out, the way the group codes do. */
const GATE_FLAG = "expo:games-ok";
const CODE_HASH = 441260483; // the games code, hashed
function hashCode(s) {
  let h = 5381;
  for (const c of s) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0;
  return h;
}
function normCode(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, "");
}
function renderGate(message) {
  app.replaceChildren();
  const card = el("section", "card");
  card.append(el("h2", null, "Enter the games code"));
  card.append(el("p", "muted", "Your teacher has the code. Type it to open the games."));
  const form = el("form", "row");
  const input = el("input", "gate-input");
  input.type = "text";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "Games code";
  input.setAttribute("aria-label", "Games code");
  const go = button("Open the games", () => {}, "primary");
  go.type = "submit";
  form.append(input, go);
  card.append(form);
  const err = el("p", "gate-error");
  err.setAttribute("role", "alert");
  if (message) err.textContent = message;
  card.append(err);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (hashCode(normCode(input.value)) === CODE_HASH) {
      try { localStorage.setItem(GATE_FLAG, "1"); } catch (_) {}
      render();
    } else {
      err.textContent = "That's not the code. Check with your teacher and try again.";
      input.select();
    }
  });
  app.append(card);
  input.focus();
}
let gateOk = false;
try { gateOk = localStorage.getItem(GATE_FLAG) === "1"; } catch (_) {}
if (gateOk) render();
else renderGate("");
