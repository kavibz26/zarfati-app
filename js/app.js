// ===== לימוד ספרדית - לוגיקת האפליקציה =====

const PROGRESS_KEY = "habla_progress_v1";
const LEARNED_KEY = "habla_learned_v1";
const NAV_KEY = "habla_nav_v1";
const WORD_STATS_KEY = "habla_word_stats_v1";
const REVIEW_SESSION_SIZE = 20;

const EXERCISE_TYPES = [
  { id: "flashcards", name: "כרטיסיות", icon: "🗂️" },
  { id: "quiz", name: "חידון", icon: "❓" },
  { id: "listening", name: "האזנה", icon: "🎧" },
  { id: "sentences", name: "בניית משפטים", icon: "✍️" }
];

// ---------- שמירת התקדמות ----------
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); }

function loadLearned() {
  try { return new Set(JSON.parse(localStorage.getItem(LEARNED_KEY)) || []); }
  catch { return new Set(); }
}
function saveLearned(set) { localStorage.setItem(LEARNED_KEY, JSON.stringify([...set])); }

function getTopicScore(levelId, topicId, type) {
  const p = loadProgress();
  return p?.[levelId]?.[topicId]?.[type] || 0;
}
function setTopicScore(levelId, topicId, type, score) {
  const p = loadProgress();
  p[levelId] = p[levelId] || {};
  p[levelId][topicId] = p[levelId][topicId] || {};
  p[levelId][topicId][type] = Math.max(p[levelId][topicId][type] || 0, Math.round(score));
  saveProgress(p);
}
function getTopicCompletion(levelId, topicId) {
  const total = EXERCISE_TYPES.reduce((sum, t) => sum + getTopicScore(levelId, topicId, t.id), 0);
  return Math.round(total / EXERCISE_TYPES.length);
}
function getLevelCompletion(levelId) {
  const level = LEVELS[levelId];
  const scores = level.topics.map(t => getTopicCompletion(levelId, t.id));
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
function markLearned(levelId, topicId, vocabIndex) {
  const s = loadLearned();
  s.add(`${levelId}:${topicId}:${vocabIndex}`);
  saveLearned(s);
}
function totalLearnedCount() { return loadLearned().size; }
function totalWordCount() {
  return Object.values(LEVELS).reduce((sum, lvl) =>
    sum + lvl.topics.reduce((s, t) => s + t.vocab.length, 0), 0);
}
function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(LEARNED_KEY);
  localStorage.removeItem(WORD_STATS_KEY);
}

// ---------- מעקב אחר מילים קשות (לצורך תרגול חוזר) ----------
function loadWordStats() {
  try { return JSON.parse(localStorage.getItem(WORD_STATS_KEY)) || {}; }
  catch { return {}; }
}
function saveWordStats(s) { localStorage.setItem(WORD_STATS_KEY, JSON.stringify(s)); }
function recordAnswer(levelId, topicId, vocabIndex, isCorrect) {
  const stats = loadWordStats();
  const key = `${levelId}:${topicId}:${vocabIndex}`;
  const entry = stats[key] || { correct: 0, incorrect: 0 };
  if (isCorrect) entry.correct += 1; else entry.incorrect += 1;
  stats[key] = entry;
  saveWordStats(stats);
}
// מילה נחשבת "קשה" כשהמשתמש טועה בה יותר משהוא מצליח בה
function getStruggleWords(limit = REVIEW_SESSION_SIZE) {
  const stats = loadWordStats();
  const candidates = [];
  for (const [key, entry] of Object.entries(stats)) {
    if (entry.incorrect <= entry.correct) continue;
    const [levelId, topicId, idxStr] = key.split(":");
    const level = LEVELS[levelId];
    const topic = level && level.topics.find(t => t.id === topicId);
    const vocab = topic && topic.vocab[parseInt(idxStr, 10)];
    if (!vocab) continue;
    candidates.push({ levelId, topicId, vocabIndex: parseInt(idxStr, 10), vocab, delta: entry.incorrect - entry.correct });
  }
  candidates.sort((a, b) => b.delta - a.delta);
  return candidates.slice(0, limit);
}
function struggleWordCount() { return getStruggleWords(Infinity).length; }

// ---------- שמירת מיקום ניווט (כדי לשרוד רענון דף) ----------
function saveNav(s) {
  // מסך תרגיל לא נשמר כמו שהוא (מצב התרגיל עצמו לא נשמר) - נשמר כמסך הנושא שמכיל אותו
  const toSave = s.screen === "exercise"
    ? { screen: "topic", levelId: s.levelId, topicId: s.topicId }
    : s;
  try { localStorage.setItem(NAV_KEY, JSON.stringify(toSave)); } catch {}
}
function loadNav() {
  try {
    const saved = JSON.parse(localStorage.getItem(NAV_KEY));
    if (!saved || !saved.screen) return null;
    if (saved.screen === "home") return saved;
    const level = LEVELS[saved.levelId];
    if (!level) return null;
    if (saved.screen === "level") return saved;
    if (saved.screen === "topic" && level.topics.some(t => t.id === saved.topicId)) return saved;
    return null;
  } catch { return null; }
}

// ---------- דיבור (Text-to-Speech) ----------
let spanishVoice = null;
function pickSpanishVoice() {
  const voices = speechSynthesis.getVoices();
  spanishVoice = voices.find(v => v.lang === "es-ES") ||
                 voices.find(v => v.lang && v.lang.startsWith("es")) || null;
}
if (typeof speechSynthesis !== "undefined") {
  pickSpanishVoice();
  speechSynthesis.onvoiceschanged = pickSpanishVoice;
}
function speak(text) {
  if (typeof speechSynthesis === "undefined") return;
  speechSynthesis.cancel();
  const clean = text.replace(/\([^)]*\)/g, "").replace(/¿|¡/g, "").trim();
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = "es-ES";
  if (spanishVoice) utter.voice = spanishVoice;
  utter.rate = 0.9;
  speechSynthesis.speak(utter);
}

// ---------- עזרי אקראיות ----------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sample(arr, n) { return shuffle(arr).slice(0, n); }

// picks up to n distinct-valued distractors from pool, excluding items equal to correctValue
function pickDistractors(pool, correctValue, valueFn, n = 3) {
  return sample(pool.filter(o => valueFn(o) !== correctValue), n).map(valueFn);
}

// ---------- state ----------
let state = loadNav() || { screen: "home" };
let ex = null; // exercise runtime state

const app = document.getElementById("app");
const breadcrumb = document.getElementById("breadcrumb");
document.getElementById("homeBtn").addEventListener("click", () => { goHome(); });

// ---------- ניווט ----------
function goHome() { state = { screen: "home" }; saveNav(state); render(); }
function gotoLevel(levelId) { state = { screen: "level", levelId }; saveNav(state); render(); }
function gotoTopic(levelId, topicId) { state = { screen: "topic", levelId, topicId }; saveNav(state); render(); }
function gotoExercise(levelId, topicId, type) {
  state = { screen: "exercise", levelId, topicId, type };
  saveNav(state);
  buildExercise(levelId, topicId, type);
  render();
}
function gotoReview() {
  state = { screen: "exercise", type: "quiz", isReview: true };
  buildReviewExercise();
  render();
}

// ---------- בניית תרגיל ----------
function buildExercise(levelId, topicId, type) {
  const level = LEVELS[levelId];
  const topic = level.topics.find(t => t.id === topicId);
  const allVocabInLevel = level.topics.flatMap(t => t.vocab);

  if (type === "flashcards") {
    ex = { type, index: 0, flipped: false, items: topic.vocab, finished: false };
  } else if (type === "quiz") {
    const questions = shuffle(topic.vocab.map((v, i) => {
      const direction = Math.random() < 0.5 ? "es2he" : "he2es";
      const correctText = direction === "es2he" ? v.he : v.es;
      const valueFn = o => direction === "es2he" ? o.he : o.es;
      const options = shuffle([correctText, ...pickDistractors(allVocabInLevel, correctText, valueFn)]);
      return {
        vocabIndex: i,
        levelId,
        topicId,
        direction,
        prompt: direction === "es2he" ? v.es : v.he,
        correct: correctText,
        options
      };
    }));
    ex = { type, index: 0, score: 0, questions, answered: false, selected: null, finished: false };
  } else if (type === "listening") {
    const questions = shuffle(topic.vocab.map((v, i) => {
      const options = shuffle([v.he, ...pickDistractors(allVocabInLevel, v.he, o => o.he)]);
      return { vocabIndex: i, levelId, topicId, es: v.es, correct: v.he, options };
    }));
    ex = { type, index: 0, score: 0, questions, answered: false, selected: null, finished: false };
  } else if (type === "sentences") {
    const items = topic.sentences.map(s => {
      const words = s.es.split(" ");
      return { es: s.es, he: s.he, bank: shuffle(words), answer: [], usedIdx: new Set() };
    });
    ex = { type, index: 0, score: 0, items, checked: false, correctFlag: null, finished: false };
  }
}

// תרגיל חזרה על מילים קשות: אותה צורת נתונים בדיוק כמו חידון רגיל (ex.type === "quiz"),
// רק שהשאלות נאספות מכמה נושאים/רמות שונות במקום נושא בודד
function buildReviewExercise() {
  const words = getStruggleWords(REVIEW_SESSION_SIZE);
  const questions = shuffle(words.map(w => {
    const allVocabInLevel = LEVELS[w.levelId].topics.flatMap(t => t.vocab);
    const direction = Math.random() < 0.5 ? "es2he" : "he2es";
    const correctText = direction === "es2he" ? w.vocab.he : w.vocab.es;
    const valueFn = o => direction === "es2he" ? o.he : o.es;
    const options = shuffle([correctText, ...pickDistractors(allVocabInLevel, correctText, valueFn)]);
    return {
      vocabIndex: w.vocabIndex,
      levelId: w.levelId,
      topicId: w.topicId,
      direction,
      prompt: direction === "es2he" ? w.vocab.es : w.vocab.he,
      correct: correctText,
      options
    };
  }));
  ex = { type: "quiz", index: 0, score: 0, questions, answered: false, selected: null, finished: false, isReview: true };
}

// ---------- רינדור ראשי ----------
function render() {
  if (state.screen === "home") return renderHome();
  if (state.screen === "level") return renderLevel();
  if (state.screen === "topic") return renderTopic();
  if (state.screen === "exercise") return renderExercise();
}

function renderHome() {
  breadcrumb.textContent = "";
  const learned = totalLearnedCount();
  const total = totalWordCount();
  const reviewCount = struggleWordCount();
  app.innerHTML = `
    <div class="hero">
      <h1>¡Habla! 🇪🇸 לימוד ספרדית</h1>
      <p>בחר רמת קושי כדי להתחיל ללמוד אוצר מילים, דקדוק וביטויים</p>
    </div>
    <div class="stats-strip">
      <div class="stat-box"><div class="num">${learned}/${total}</div><div class="lbl">מילים נלמדו</div></div>
      <div class="stat-box"><div class="num">${getLevelCompletion("beginner")}%</div><div class="lbl">מתחיל</div></div>
      <div class="stat-box"><div class="num">${getLevelCompletion("intermediate")}%</div><div class="lbl">מתקדם</div></div>
      <div class="stat-box"><div class="num">${getLevelCompletion("advanced")}%</div><div class="lbl">מקצועי</div></div>
    </div>
    <div class="level-grid">
      ${Object.values(LEVELS).map(level => {
        const pct = getLevelCompletion(level.id);
        return `
        <button class="level-card" style="border-color:${level.color}22" data-action="goto-level" data-level="${level.id}">
          <div class="lc-icon" aria-hidden="true">${level.icon}</div>
          <div class="lc-name">${level.name}</div>
          <div class="lc-desc">${level.topics.length} נושאים · ${level.topics.reduce((s, t) => s + t.vocab.length, 0)} מילים</div>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%; background:${level.color}"></div></div>
          <div class="progress-label"><span>התקדמות</span><span>${pct}%</span></div>
        </button>`;
      }).join("")}
    </div>
    <div style="text-align:center; margin-top:24px;">
      <button class="ctrl-btn" data-action="goto-review" ${reviewCount === 0 ? "disabled" : ""}>
        📝 תרגול מילים קשות${reviewCount > 0 ? ` (${reviewCount})` : ""}
      </button>
      ${reviewCount === 0 ? `<div class="section-sub" style="margin-top:8px;">אין עדיין מילים לחזרה - תרגלו קצת ונחזור לכאן!</div>` : ""}
    </div>
    <div style="text-align:center; margin-top:16px;">
      <button class="back-btn" data-action="reset-progress">איפוס התקדמות</button>
    </div>
  `;
  bindDelegatedEvents();
}

function renderLevel() {
  const level = LEVELS[state.levelId];
  breadcrumb.textContent = `${level.name}`;
  app.innerHTML = `
    <button class="back-btn" data-action="back-home">→ חזרה לרמות</button>
    <div class="section-title">${level.icon} רמת ${level.name}</div>
    <div class="section-sub">בחר נושא כדי להתחיל לתרגל</div>
    <div class="topic-list">
      ${level.topics.map(topic => {
        const pct = getTopicCompletion(level.id, topic.id);
        return `
        <button class="topic-row" data-action="goto-topic" data-level="${level.id}" data-topic="${topic.id}">
          <div class="tr-info">
            <div class="tr-name">${topic.name}</div>
            <div class="tr-count">${topic.vocab.length} מילים · ${topic.sentences.length} משפטים</div>
            <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%; background:${level.color}"></div></div>
          </div>
          <div style="font-weight:700;color:${level.color}">${pct}%</div>
        </button>`;
      }).join("")}
    </div>
  `;
  bindDelegatedEvents();
}

function renderTopic() {
  const level = LEVELS[state.levelId];
  const topic = level.topics.find(t => t.id === state.topicId);
  breadcrumb.textContent = `${level.name} › ${topic.name}`;
  app.innerHTML = `
    <button class="back-btn" data-action="back-level" data-level="${level.id}">→ חזרה לנושאים</button>
    <div class="section-title">${topic.name}</div>
    <div class="section-sub">רמת ${level.name} · בחר סוג תרגיל</div>
    <div class="exercise-grid">
      ${EXERCISE_TYPES.map(et => {
        const score = getTopicScore(level.id, topic.id, et.id);
        return `
        <button class="exercise-card" data-action="goto-exercise" data-level="${level.id}" data-topic="${topic.id}" data-type="${et.id}">
          <div class="ec-icon" aria-hidden="true">${et.icon}</div>
          <div class="ec-name">${et.name}</div>
          <div class="ec-score">${score > 0 ? `הישג: ${score}%` : "טרם נוסה"}</div>
        </button>`;
      }).join("")}
    </div>
  `;
  bindDelegatedEvents();
}

function renderExercise() {
  if (state.isReview) {
    breadcrumb.textContent = "תרגול מילים קשות";
    app.innerHTML = `
      <button class="back-btn" data-action="back-home">→ חזרה לדף הבית</button>
      <div class="runner">${renderQuiz()}</div>
    `;
    bindDelegatedEvents();
    return;
  }

  const level = LEVELS[state.levelId];
  const topic = level.topics.find(t => t.id === state.topicId);
  const etMeta = EXERCISE_TYPES.find(e => e.id === state.type);
  breadcrumb.textContent = `${level.name} › ${topic.name} › ${etMeta.name}`;

  let body = "";
  if (ex.type === "flashcards") body = renderFlashcards();
  else if (ex.type === "quiz") body = renderQuiz();
  else if (ex.type === "listening") body = renderListening();
  else if (ex.type === "sentences") body = renderSentenceBuilder();

  app.innerHTML = `
    <button class="back-btn" data-action="back-topic" data-level="${level.id}" data-topic="${topic.id}">→ חזרה לתרגילים</button>
    <div class="runner">${body}</div>
  `;
  bindDelegatedEvents();
}

// ---------- כרטיסיות ----------
function renderFlashcards() {
  if (ex.index >= ex.items.length) {
    return renderSummary({ correct: ex.items.length, total: ex.items.length, label: "סיימת לעבור על כל הכרטיסיות!" });
  }
  const item = ex.items[ex.index];
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.items.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.items.length) * 100}%"></div></div>
      <span>כרטיסיות</span>
    </div>
    <div class="flashcard ${ex.flipped ? "flipped" : ""}" data-action="flip-card" role="button" tabindex="0"
         aria-label="${ex.flipped ? "הצג את המילה בספרדית" : "הצג את התרגום לעברית"}">
      <div class="fc-front">
        <div class="fc-word" lang="es">${item.es}</div>
        <div class="fc-hint">לחץ כדי לראות תרגום</div>
      </div>
      <div class="fc-back">
        <div class="fc-translation">${item.he}</div>
        <div class="fc-example" lang="es">${item.ex_es}</div>
        <div class="fc-example-he">${item.ex_he}</div>
      </div>
    </div>
    <div class="runner-controls">
      <button class="speak-btn" data-action="fc-speak" aria-label="השמע הגייה בספרדית">🔊</button>
      <button class="ctrl-btn secondary" data-action="fc-prev" ${ex.index === 0 ? "disabled" : ""}>הקודם</button>
      <button class="ctrl-btn" data-action="fc-next">${ex.index === ex.items.length - 1 ? "סיום" : "הבא"}</button>
    </div>
  `;
}

// ---------- אפשרויות בחירה משותפות לחידון ולהאזנה ----------
function renderChoiceOptions(q, action, optionsAreHebrew) {
  return `
    <div class="quiz-options">
      ${q.options.map((opt, i) => {
        let cls = "quiz-option" + (optionsAreHebrew ? " opt-he" : "");
        if (ex.answered) {
          if (opt === q.correct) cls += " correct";
          else if (opt === ex.selected) cls += " incorrect";
        }
        const langAttr = optionsAreHebrew ? "" : ` lang="es"`;
        return `<button class="${cls}"${langAttr} data-action="${action}" data-index="${i}" ${ex.answered ? "disabled" : ""}>${opt}</button>`;
      }).join("")}
    </div>
  `;
}

// ---------- חידון ----------
function renderQuiz() {
  if (ex.index >= ex.questions.length) {
    const label = ex.isReview ? "סיכום תרגול המילים הקשות" : "סיכום החידון";
    return renderSummary({ correct: ex.score, total: ex.questions.length, label });
  }
  const q = ex.questions[ex.index];
  const dirLabel = q.direction === "es2he" ? "מה התרגום לעברית?" : "מה התרגום לספרדית?";
  const promptIsHebrew = q.direction === "he2es";
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.questions.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.questions.length) * 100}%"></div></div>
      <span>ניקוד: ${ex.score}</span>
    </div>
    <div class="section-sub" style="text-align:center">${dirLabel}</div>
    <div class="quiz-question"><span class="qq-word ${promptIsHebrew ? "qq-he" : ""}" ${promptIsHebrew ? "" : `lang="es"`}>${q.prompt}</span></div>
    ${renderChoiceOptions(q, "quiz-option", q.direction === "es2he")}
    ${ex.answered ? `<div class="runner-controls"><button class="ctrl-btn" data-action="quiz-next">המשך</button></div>` : ""}
  `;
}

// ---------- האזנה ----------
function renderListening() {
  if (ex.index >= ex.questions.length) {
    return renderSummary({ correct: ex.score, total: ex.questions.length, label: "סיכום תרגיל ההאזנה" });
  }
  const q = ex.questions[ex.index];
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.questions.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.questions.length) * 100}%"></div></div>
      <span>ניקוד: ${ex.score}</span>
    </div>
    <div class="listen-box">
      <div class="section-sub">לחץ להשמעה והקשב למילה או המשפט בספרדית</div>
      <button class="listen-play" data-action="listen-play" aria-label="השמע הגייה בספרדית">🔊</button>
    </div>
    ${renderChoiceOptions(q, "listen-option", true)}
    ${ex.answered ? `<div class="runner-controls"><button class="ctrl-btn" data-action="listen-next">המשך</button></div>` : ""}
  `;
}

// ---------- בניית משפטים ----------
function renderSentenceBuilder() {
  if (ex.index >= ex.items.length) {
    return renderSummary({ correct: ex.score, total: ex.items.length, label: "סיכום בניית המשפטים" });
  }
  const item = ex.items[ex.index];
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.items.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.items.length) * 100}%"></div></div>
      <span>ניקוד: ${ex.score}</span>
    </div>
    <div class="sb-target-he">בנה את המשפט: "${item.he}"</div>
    <div class="sb-answer">
      ${item.answer.map((w, i) => `<button type="button" class="sb-chip" lang="es" data-action="sb-remove" data-index="${i}">${w}</button>`).join("")}
    </div>
    <div class="sb-bank">
      ${item.bank.map((w, i) => {
        const used = item.usedIdx.has(i);
        return `<button type="button" class="sb-chip ${used ? "used" : ""}" lang="es" data-action="sb-add" data-index="${i}" ${used ? `tabindex="-1" aria-disabled="true"` : ""}>${w}</button>`;
      }).join("")}
    </div>
    ${ex.checked ? `
      <div class="section-sub" style="text-align:center;margin-top:14px;color:${ex.correctFlag ? "var(--success)" : "var(--danger)"}">
        ${ex.correctFlag ? "נכון מאוד! 🎉" : `לא מדויק. התשובה הנכונה: "${item.es}"`}
      </div>
      <div class="runner-controls"><button class="ctrl-btn" data-action="sb-next">המשך</button></div>
    ` : `
      <div class="runner-controls">
        <button class="speak-btn" data-action="sb-speak" aria-label="השמע הגייה בספרדית">🔊</button>
        <button class="ctrl-btn secondary" data-action="sb-clear">נקה</button>
        <button class="ctrl-btn" data-action="sb-check" ${item.answer.length === 0 ? "disabled" : ""}>בדוק</button>
      </div>
    `}
  `;
}

// ---------- סיכום ----------
function renderSummary({ correct, total, label }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 100;
  const continueBtn = state.isReview
    ? `<button class="ctrl-btn" data-action="back-home">סיום</button>`
    : `<button class="ctrl-btn" data-action="back-topic" data-level="${state.levelId}" data-topic="${state.topicId}">חזרה לתרגילים</button>`;
  return `
    <div class="summary">
      <div class="section-sub">${label}</div>
      <div class="score-num">${pct}%</div>
      <div class="score-lbl">${correct} מתוך ${total} נכונים</div>
      <div class="runner-controls">
        <button class="ctrl-btn secondary" data-action="retry-exercise">נסה שוב</button>
        ${continueBtn}
      </div>
    </div>
  `;
}

// ---------- טיפול באירועים (event delegation) ----------
function handleAction(el) {
  const action = el.dataset.action;
  const level = el.dataset.level;
  const topic = el.dataset.topic;
  const type = el.dataset.type;
  const index = el.dataset.index !== undefined ? parseInt(el.dataset.index, 10) : null;

  switch (action) {
    case "goto-level": gotoLevel(level); break;
    case "goto-topic": gotoTopic(level, topic); break;
    case "goto-exercise": gotoExercise(level, topic, type); break;
    case "back-home": goHome(); break;
    case "reset-progress": {
      if (confirm("לאפס את כל ההתקדמות שנשמרה? פעולה זו לא ניתנת לביטול.")) {
        resetProgress();
        render();
      }
      break;
    }
    case "back-level": gotoLevel(level); break;
    case "back-topic": gotoTopic(level, topic); break;
    case "goto-review": gotoReview(); break;
    case "retry-exercise": {
      if (state.isReview) buildReviewExercise();
      else buildExercise(state.levelId, state.topicId, state.type);
      render();
      break;
    }

    // Flashcards
    case "flip-card": ex.flipped = !ex.flipped; render(); break;
    case "fc-speak": speak(ex.items[ex.index].es); break;
    case "fc-prev": ex.index = Math.max(0, ex.index - 1); ex.flipped = false; render(); break;
    case "fc-next": {
      ex.index += 1;
      ex.flipped = false;
      if (ex.index >= ex.items.length && !ex.finished) {
        ex.finished = true;
        setTopicScore(state.levelId, state.topicId, "flashcards", 100);
      }
      render();
      break;
    }

    // Quiz & Listening share the same runtime shape ({questions, index, score, answered, selected})
    case "quiz-option":
    case "listen-option": {
      if (ex.answered) break;
      const q = ex.questions[ex.index];
      ex.selected = q.options[index];
      ex.answered = true;
      const isCorrect = ex.selected === q.correct;
      recordAnswer(q.levelId, q.topicId, q.vocabIndex, isCorrect);
      if (isCorrect) {
        ex.score += 1;
        markLearned(q.levelId, q.topicId, q.vocabIndex);
      }
      render();
      break;
    }
    case "quiz-next":
    case "listen-next": {
      ex.index += 1;
      ex.answered = false;
      ex.selected = null;
      if (ex.index >= ex.questions.length && !ex.finished) {
        ex.finished = true;
        if (!ex.isReview) {
          setTopicScore(state.levelId, state.topicId, ex.type, Math.round((ex.score / ex.questions.length) * 100));
        }
      }
      render();
      break;
    }
    case "listen-play": speak(ex.questions[ex.index].es); break;

    // Sentence builder
    case "sb-add": {
      const item = ex.items[ex.index];
      if (ex.checked || item.usedIdx.has(index)) break;
      item.usedIdx.add(index);
      item.answer.push(item.bank[index]);
      render();
      break;
    }
    case "sb-remove": {
      const item = ex.items[ex.index];
      if (ex.checked) break;
      const word = item.answer[index];
      item.answer.splice(index, 1);
      for (const bi of item.usedIdx) {
        if (item.bank[bi] === word) { item.usedIdx.delete(bi); break; }
      }
      render();
      break;
    }
    case "sb-clear": {
      const item = ex.items[ex.index];
      item.answer = [];
      item.usedIdx = new Set();
      render();
      break;
    }
    case "sb-speak": speak(ex.items[ex.index].es); break;
    case "sb-check": {
      const item = ex.items[ex.index];
      const built = item.answer.join(" ");
      ex.correctFlag = built.toLowerCase() === item.es.toLowerCase();
      if (ex.correctFlag) ex.score += 1;
      ex.checked = true;
      render();
      break;
    }
    case "sb-next": {
      ex.index += 1;
      ex.checked = false;
      ex.correctFlag = null;
      if (ex.index >= ex.items.length && !ex.finished) {
        ex.finished = true;
        setTopicScore(state.levelId, state.topicId, "sentences", Math.round((ex.score / ex.items.length) * 100));
      }
      render();
      break;
    }
  }
}

function bindDelegatedEvents() {
  app.onclick = (e) => {
    const el = e.target.closest("[data-action]");
    if (!el || el.disabled) return;
    handleAction(el);
  };
  // תמיכה בהפעלה מהמקלדת (Enter / Space) עבור אלמנטים שאינם <button>, כמו כרטיסיית ההיפוך
  app.onkeydown = (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const el = e.target.closest("[data-action]");
    if (!el || el.disabled || el.tagName === "BUTTON") return; // כפתורים כבר מטפלים בזה באופן טבעי
    e.preventDefault();
    handleAction(el);
  };
}

render();
