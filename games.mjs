/* Chanukah Expo topic games: 7 reusable game engines fed by games-data.js
   plus each topic's existing quiz (data.js) for the escape room. */
const TAKEN = [1, 2, 3, 5, 6, 10, 11, 15, 16, 17, 18];
const GAMES = [
  ["match", "Matching", "Pair each term with its meaning."],
  ["seq", "Put it in order", "Arrange the steps or events in the right order."],
  ["who", "Who am I?", "Clues appear one at a time. Fewer clues, more points."],
  ["tf", "True or false", "Decide, then fix the false ones."],
  ["escape", "Escape room", "Each right answer opens the next lock."],
  ["gap", "Fill the gap", "Complete the sentences with the word bank."],
  ["jeop", "Quiz board", "Pick a square, answer, and check yourselves."]
];
const app = document.getElementById("app");
const topics = window.EXPO.topics.filter(t => TAKEN.includes(t.n));
const G = window.EXPO_GAMES;

function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function div(cls, html) { const d = document.createElement("div"); if (cls) d.className = cls; if (html != null) d.innerHTML = html; return d; }
function btn(label, fn, cls) { const b = document.createElement("button"); b.innerHTML = label; if (cls) b.className = cls; b.onclick = fn; return b; }

let state = { topic: null, game: null };

function nav(extra) {
  const r = div("row");
  r.append(btn("← All topics", () => { state = { topic: null, game: null }; render(); }));
  if (state.topic != null) r.append(btn("← All games for this topic", () => { state.game = null; render(); }));
  if (extra) r.append(extra);
  return r;
}

function render() {
  app.innerHTML = "";
  const params = new URLSearchParams(location.search);
  if (state.topic == null && params.get("topic") && TAKEN.includes(+params.get("topic"))) state.topic = +params.get("topic");
  if (state.topic == null) return renderTopics();
  if (state.game == null) return renderGames();
  renderGame();
}

function renderTopics() {
  const c = div("card");
  c.append(div(null, "<h2>Pick your topic</h2><p class='muted'>Your team's info is inside its own games.</p>"));
  const g = div("pick");
  for (const t of topics) {
    g.append(btn(`<span class="tname">Topic ${t.n}</span> <span dir="auto">${t.name}</span><span class="tsub">${t.about}</span>`,
      () => { state.topic = t.n; render(); }));
  }
  c.append(g); app.append(c);
}

function renderGames() {
  const t = topics.find(x => x.n === state.topic);
  const c = div("card");
  c.append(nav());
  c.append(div(null, `<h2>Topic ${t.n} · <span dir="auto">${t.name}</span></h2><p class="muted">${t.overview}</p>`));
  const g = div("pick");
  for (const [id, name, sub] of GAMES) {
    g.append(btn(`<span class="tname">${name}</span><span class="tsub">${sub}</span>`, () => { state.game = id; render(); }));
  }
  c.append(g); app.append(c);
}

function renderGame() {
  const t = topics.find(x => x.n === state.topic);
  const d = G[state.topic];
  const c = div("card");
  c.append(nav());
  const name = GAMES.find(g => g[0] === state.game)[1];
  c.append(div(null, `<h2>${name} · Topic ${t.n} <span dir="auto">${t.name}</span></h2>`));
  const body = div();
  c.append(body); app.append(c);
  ({ match: gMatch, seq: gSeq, who: gWho, tf: gTf, escape: gEscape, gap: gGap, jeop: gJeop })[state.game](body, t, d);
}

/* 1. Matching */
function gMatch(body, t, d) {
  body.append(div("muted", "Tap a term on the right, then its meaning on the left. Fewer tries = better."));
  const score = div("score"); const cols = div("cols");
  const left = div(), right = div(); cols.append(right, left); body.append(score, cols);
  let attempts = 0, done = 0, sel = null;
  const say = () => score.textContent = `Matches: ${done}/${d.match.length} · Tries: ${attempts}`;
  const terms = shuffle(d.match.map((p, i) => ({ txt: p[0], i })));
  const means = shuffle(d.match.map((p, i) => ({ txt: p[1], i })));
  function tile(col, item, side) {
    const b = btn(item.txt, () => {
      if (b.classList.contains("done")) return;
      if (sel && sel.side !== side) {
        attempts++;
        if (sel.item.i === item.i) {
          b.classList.add("done"); sel.el.classList.add("done");
          sel.el.classList.remove("sel"); sel = null; done++;
          if (done === d.match.length) body.prepend(div("banner", `All matched in ${attempts} tries!`));
        } else {
          b.classList.add("wrongflash"); setTimeout(() => b.classList.remove("wrongflash"), 500);
          sel.el.classList.remove("sel"); sel = null;
        }
        say();
      } else {
        if (sel) sel.el.classList.remove("sel");
        sel = { item, side, el: b }; b.classList.add("sel");
      }
    }, "tile");
    col.append(b);
  }
  terms.forEach(x => tile(right, x, "term"));
  means.forEach(x => tile(left, x, "mean"));
  say();
}

/* 2. Sequence */
function gSeq(body, t, d) {
  body.append(div("muted", "Use the arrows to put everything in the right order, then check."));
  const list = div(); const score = div("score");
  let items = shuffle(d.seq.map((txt, i) => ({ txt, i })));
  let tries = 0;
  function draw() {
    list.innerHTML = "";
    items.forEach((it, pos) => {
      const r = div("seqitem");
      const up = btn("↑", () => { if (pos > 0) { [items[pos - 1], items[pos]] = [items[pos], items[pos - 1]]; draw(); } }, "mv");
      const dn = btn("↓", () => { if (pos < items.length - 1) { [items[pos + 1], items[pos]] = [items[pos], items[pos + 1]]; draw(); } }, "mv");
      r.append(up, dn, div("txt", it.txt)); list.append(r);
    });
  }
  const check = btn("Check the order", () => {
    tries++; let ok = 0;
    [...list.children].forEach((r, pos) => {
      const good = items[pos].i === pos;
      r.classList.toggle("ok", good); r.classList.toggle("no", !good);
      if (good) ok++;
    });
    score.textContent = `Correct places: ${ok}/${items.length} · Checks: ${tries}`;
    if (ok === items.length) body.prepend(div("banner", `In order after ${tries} check${tries > 1 ? "s" : ""}!`));
  }, "primary");
  draw(); body.append(list, check, document.createTextNode(" "), score);
}

/* 3. Who am I */
function gWho(body, t, d) {
  let idx = 0, clue = 0, total = 0;
  const score = div("score"); const box = div();
  body.append(score, box);
  function item() {
    if (idx >= d.who.length) {
      box.innerHTML = ""; box.append(div("banner", `Done! Total points: ${total} out of ${d.who.length * 3}.`));
      score.textContent = ""; return;
    }
    const w = d.who[idx]; clue = 0;
    const clues = div();
    const more = btn("Show a clue", () => {
      if (clue < w.c.length) { clues.append(div("clue", w.c[clue])); clue++; if (clue === w.c.length) more.disabled = true; }
    }, "primary");
    const opts = div("opts");
    shuffle(d.who.map(x => x.a)).forEach(a => {
      opts.append(btn(a, ev => {
        const b = ev.currentTarget;
        if (a === w.a) {
          b.classList.add("right");
          const pts = 4 - clue; total += pts;
          [...opts.children].forEach(x => x.disabled = true); more.disabled = true;
          box.append(div("banner", `Right - it is ${w.a}! +${pts} points.`));
          const next = btn("Next one", () => { idx++; draw(); }, "primary"); box.append(next);
        } else {
          b.classList.add("wrong"); b.disabled = true; total = Math.max(0, total - 1);
        }
        score.textContent = `Item ${idx + 1}/${d.who.length} · Points: ${total}`;
      }));
    });
    function draw() { box.innerHTML = ""; box.append(div("muted", "Read the clues one at a time. Guess early for more points!"), clues, more, opts); }
    draw(); more.click();
    score.textContent = `Item ${idx + 1}/${d.who.length} · Points: ${total}`;
  }
  item();
}

/* 4. True or false + fix */
function gTf(body, t, d) {
  let idx = 0, total = 0;
  const score = div("score"); const box = div(); body.append(score, box);
  const fixes = d.tf.filter(x => !x.t).map(x => x.fix);
  function item() {
    if (idx >= d.tf.length) {
      box.innerHTML = ""; box.append(div("banner", `Finished! Score: ${total} points.`)); score.textContent = ""; return;
    }
    const q = d.tf[idx];
    score.textContent = `Statement ${idx + 1}/${d.tf.length} · Points: ${total}`;
    box.innerHTML = "";
    box.append(div(null, `<p style="font-size:19px">${q.s}</p>`));
    const opts = div("opts");
    opts.append(btn("True", () => answer(true)), btn("False", () => answer(false)));
    box.append(opts);
    function answer(said) {
      if (said === q.t) {
        total += 1;
        if (q.t) {
          box.append(div("banner", "True - correct! +1"));
          box.append(btn("Next", () => { idx++; item(); }, "primary"));
        } else {
          box.append(div("banner", "Right, it is false. +1. Now fix it: pick the true version for another point."));
          const fx = div("opts");
          const others = shuffle(fixes.filter(f => f !== q.fix)).slice(0, 1);
          shuffle([q.fix, q.s, ...others]).forEach(f => {
            fx.append(btn(f, ev => {
              if (f === q.fix) { ev.currentTarget.classList.add("right"); total += 1; }
              else ev.currentTarget.classList.add("wrong");
              [...fx.children].forEach(x => x.disabled = true);
              score.textContent = `Statement ${idx + 1}/${d.tf.length} · Points: ${total}`;
              box.append(btn("Next", () => { idx++; item(); }, "primary"));
            }));
          });
          box.append(fx);
        }
      } else {
        box.append(div("banner", `Not quite - the statement is ${q.t ? "TRUE" : "FALSE"}. ${q.t ? "" : "The true version: " + q.fix}`));
        box.append(btn("Next", () => { idx++; item(); }, "primary"));
      }
      [...opts.children].forEach(x => x.disabled = true);
      score.textContent = `Statement ${idx + 1}/${d.tf.length} · Points: ${total}`;
    }
  }
  item();
}

/* 5. Escape room (uses the topic's existing quiz from data.js) */
function gEscape(body, t, d) {
  const qs = shuffle(t.quiz || []);
  let lock = 0, misses = 0;
  const locks = div("locks"); const box = div(); body.append(locks, box);
  const drawLocks = () => locks.innerHTML =
    qs.map((_, i) => `<span class="lock">${i < lock ? "🔓" : "🔒"}</span>`).join("");
  function step() {
    drawLocks();
    if (lock >= qs.length) {
      box.innerHTML = "";
      box.append(div("banner", `You escaped! All ${qs.length} locks open${misses ? `, with ${misses} wrong ${misses === 1 ? "try" : "tries"}` : ", no wrong tries"}.`));
      return;
    }
    const q = qs[lock];
    box.innerHTML = "";
    box.append(div("muted", `Lock ${lock + 1} of ${qs.length} · stuck? Check your topic's reading page`));
    box.append(div(null, `<p style="font-size:19px">${q.q}</p>`));
    const opts = div("opts");
    shuffle([q.a, ...q.w]).forEach(o => {
      opts.append(btn(o, ev => {
        if (o === q.a) { lock++; step(); }
        else { misses++; ev.currentTarget.classList.add("wrong"); ev.currentTarget.disabled = true; }
      }));
    });
    box.append(opts);
  }
  step();
}

/* 6. Fill the gap */
function gGap(body, t, d) {
  body.append(div("muted", "Pick the right word from the bank for each gap, then check."));
  const others = TAKEN.filter(n => n !== t.n).flatMap(n => (G[n] ? G[n].gap.map(g => g.a) : []));
  const bank = shuffle(d.gap.map(g => g.a).concat(shuffle(others).slice(0, 4)));
  body.append(div("clue", "Word bank: " + bank.join(" · ")));
  const rows = d.gap.map(g => {
    const r = div("gapline");
    const sel = document.createElement("select");
    sel.append(new Option("— choose —", ""));
    shuffle(bank).forEach(w => sel.append(new Option(w, w)));
    r.append(document.createTextNode(g.b + " "), sel, document.createTextNode(" " + g.w));
    body.append(r);
    return { r, sel, g };
  });
  const score = div("score");
  body.append(btn("Check", () => {
    let ok = 0;
    rows.forEach(({ r, sel, g }) => {
      const good = sel.value === g.a;
      r.classList.toggle("ok", good); r.classList.toggle("no", !good);
      if (good) ok++;
    });
    score.textContent = `Correct: ${ok}/${rows.length}`;
    if (ok === rows.length) body.append(div("banner", "Every gap filled - well done!"));
  }, "primary"), document.createTextNode(" "), score);
}

/* 7. Quiz board (Jeopardy-style) */
function gJeop(body, t, d) {
  let total = 0;
  const score = div("score"); score.textContent = "Points: 0";
  const board = div("board");
  d.jeop.forEach(cat => board.append(div("cat", cat.cat)));
  for (let row = 0; row < 3; row++)
    d.jeop.forEach(cat => {
      const [clue, ans, pts] = cat.qa[row];
      const cell = btn(pts, () => {
        cell.classList.add("used");
        const panel = div("card");
        panel.append(div(null, `<p style="font-size:19px">${clue}</p>`));
        const show = btn("Show answer", () => {
          show.remove();
          panel.append(div("clue", ans));
          panel.append(btn("We got it", () => { total += pts; score.textContent = `Points: ${total}`; panel.remove(); }, "primary"),
            document.createTextNode(" "),
            btn("We missed it", () => { panel.remove(); }));
        }, "primary");
        panel.append(show);
        body.append(panel); panel.scrollIntoView({ behavior: "smooth" });
      }, "cell");
      board.append(cell);
    });
  body.append(div("muted", "Play in teams: pick a square, answer out loud, then check and keep score."), score, board);
}

render();
