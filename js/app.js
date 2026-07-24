// ===== לימוד ספרדית - לוגיקת האפליקציה =====

// מפתחות ה-localStorage הם פר-משתמש (מבוססי uid מ-Firebase), כדי שכמה חשבונות על אותו
// דפדפן לא ידרסו זה את הנתונים של זה. currentUid מוגדר אחרי שההתחברות מסתיימת (ראו boot למטה).
let currentUid = null;
let currentUsername = "";
let currentGender = "m"; // "m" | "f" - לשוני הפניה (בחר/בחרי וכו')
function progressKey() { return `habla_progress_v1__${currentUid}`; }
function learnedKey() { return `habla_learned_v1__${currentUid}`; }
function navKey() { return `habla_nav_v1__${currentUid}`; }
function wordStatsKey() { return `habla_word_stats_v1__${currentUid}`; }
const REVIEW_SESSION_SIZE = 20;

// ---------- לשון פנייה (זכר/נקבה) ----------
// כל מפתח מכיל שתי גרסאות; t() בוחר לפי currentGender. מחרוזות שזהות בשני המגדרים
// לא צריכות להופיע כאן כלל - פשוט נכתבות ישירות בקוד הרינדור.
const PHRASES = {
  welcome: { m: "ברוך הבא", f: "ברוכה הבאה" },
  chooseLevelIntro: { m: "בחר רמת קושי כדי להתחיל ללמוד אוצר מילים, דקדוק וביטויים", f: "בחרי רמת קושי כדי להתחיל ללמוד אוצר מילים, דקדוק וביטויים" },
  chooseTopic: { m: "בחר נושא כדי להתחיל לתרגל", f: "בחרי נושא כדי להתחיל לתרגל" },
  chooseExerciseType: { m: "בחר סוג תרגיל", f: "בחרי סוג תרגיל" },
  reviewEmptyHint: { m: "אין עדיין מילים לחזרה - תרגל קצת ונחזור לכאן!", f: "אין עדיין מילים לחזרה - תרגלי קצת ונחזור לכאן!" },
  flashcardHint: { m: "לחץ כדי לראות תרגום", f: "לחצי כדי לראות תרגום" },
  flashcardAriaShowTranslation: { m: "הצג את התרגום לעברית", f: "הציגי את התרגום לעברית" },
  flashcardAriaShowWord: { m: "הצג את המילה בספרדית", f: "הציגי את המילה בספרדית" },
  listeningInstruction: { m: "לחץ להשמעה והקשב למילה בספרדית", f: "לחצי להשמעה והקשיבי למילה בספרדית" },
  studyStageHint: { m: "לחץ להשמעה, ואז המשך הלאה", f: "לחצי להשמעה, ואז המשיכי הלאה" },
  sentenceBuildPrefix: { m: "בנה את המשפט", f: "בני את המשפט" },
  recallPlaceholder: { m: "הקלד בספרדית...", f: "הקלידי בספרדית..." },
  recallIntroInstruction: {
    m: "עכשיו תתבקש להקליד בספרדית את המילים הבאות, בלי לראות את הכתיב מראש - כדי לבדוק את הזיכרון שלך באמת.",
    f: "עכשיו תתבקשי להקליד בספרדית את המילים הבאות, בלי לראות את הכתיב מראש - כדי לבדוק את הזיכרון שלך באמת."
  },
  recallIntroCta: { m: "בוא נתחיל", f: "בואי נתחיל" },
  tryAgain: { m: "נסה שוב", f: "נסי שוב" }
};
function t(key) {
  const entry = PHRASES[key];
  return entry ? (entry[currentGender] || entry.m) : "";
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// EXERCISE_TYPES קובע את אחוז ההשלמה של נושא/רמה (ממוצע על פני המערך הזה).
// "הקלדה מהזיכרון" מוצג למשתמש ונשמר באותו מנגנון התקדמות, אך במתכוון לא נכלל כאן -
// כדי לא לשנות רטרואקטיבית אחוזי השלמה קיימים אצל מי שכבר תרגל לפני שהתרגול הזה נוסף.
const EXERCISE_TYPES = [
  { id: "flashcards", name: "כרטיסיות", icon: "🗂️" },
  { id: "quiz", name: "חידון", icon: "❓" },
  { id: "listening", name: "האזנה", icon: "🎧" },
  { id: "sentences", name: "בניית משפטים", icon: "✍️" }
];
const RECALL_TYPE = { id: "recall", name: "הקלדה מהזיכרון", icon: "⌨️" };
const DISPLAY_EXERCISE_TYPES = [...EXERCISE_TYPES, RECALL_TYPE];

// 3 רמות הקושי המוצגות ברשת דף הבית. "דקדוק בסיסי" (LEVELS.grammar) הוא אזור לימוד נפרד
// מבחינת המשתמש - יש לו כפתור משלו בדף הבית, ובכוונה לא נכלל ברשימה הזו.
const DIFFICULTY_LEVEL_IDS = ["beginner", "intermediate", "advanced"];
// תווית מוצגת עבור רמה/אזור: "רמת X" עבור 3 רמות הקושי, אבל בלי המילה "רמת" עבור הדקדוק
// (הוא לא רמת קושי מבחינת המשתמש, אלא אזור לימוד נפרד).
function levelLabel(levelId, name) {
  return DIFFICULTY_LEVEL_IDS.includes(levelId) ? `רמת ${name}` : name;
}

// ---------- סנכרון לענן (Firestore) ----------
// כתיבה מבוזרת (debounced) ברקע - לא חוסמת ולא משנה שום דבר בזרימת השמירה המקומית הקיימת.
let cloudSyncTimer = null;
function scheduleCloudSync() {
  if (!currentUid || !window.HablaAuth) return;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => {
    window.HablaAuth.pushUserData(currentUid, {
      progress: loadProgress(),
      learned: [...loadLearned()],
      wordStats: loadWordStats()
    });
  }, 1200);
}

// ---------- שמירת התקדמות ----------
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(progressKey())) || {}; }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(progressKey(), JSON.stringify(p)); scheduleCloudSync(); }

function loadLearned() {
  try { return new Set(JSON.parse(localStorage.getItem(learnedKey())) || []); }
  catch { return new Set(); }
}
function saveLearned(set) { localStorage.setItem(learnedKey(), JSON.stringify([...set])); scheduleCloudSync(); }

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
function overallCompletion() {
  const scores = Object.keys(LEVELS).map(id => getLevelCompletion(id));
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
function getAllTopicsWithCompletion() {
  const rows = [];
  for (const level of Object.values(LEVELS)) {
    for (const topic of level.topics) {
      rows.push({
        levelId: level.id,
        levelName: level.name,
        levelColor: level.color,
        topicId: topic.id,
        topicName: topic.name,
        completion: getTopicCompletion(level.id, topic.id)
      });
    }
  }
  return rows;
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
  localStorage.removeItem(progressKey());
  localStorage.removeItem(learnedKey());
  localStorage.removeItem(wordStatsKey());
  scheduleCloudSync();
}

// ---------- מעקב אחר מילים קשות (לצורך תרגול חוזר) ----------
function loadWordStats() {
  try { return JSON.parse(localStorage.getItem(wordStatsKey())) || {}; }
  catch { return {}; }
}
function saveWordStats(s) { localStorage.setItem(wordStatsKey(), JSON.stringify(s)); scheduleCloudSync(); }
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
  try { localStorage.setItem(navKey(), JSON.stringify(toSave)); } catch {}
}
function loadNav() {
  try {
    const saved = JSON.parse(localStorage.getItem(navKey()));
    if (!saved || !saved.screen) return null;
    if (saved.screen === "home") return saved;
    const level = LEVELS[saved.levelId];
    if (!level) return null;
    if (saved.screen === "level") return saved;
    if (saved.screen === "topic" && level.topics.some(t => t.id === saved.topicId)) return saved;
    return null;
  } catch { return null; }
}

// ---------- History API (כדי שכפתור החזרה של הדפדפן/אנדרואיד יתנהג טבעי) ----------
// כל ניווט "קדימה" דוחף רשומת history חדשה; כפתורי ה"חזרה" הפנימיים קוראים ל-history.back()
// בדיוק כמו כפתור החזרה של הדפדפן/מכשיר - שניהם מטופלים באותו מאזין popstate יחיד.
function pushHistory() {
  try { history.pushState(state, ""); } catch {}
}
// בטעינת הדף, loadNav() עשוי להחזיר ישר מסך "topic" או "level" (משיחה קודמת) - בלי בניית
// המחסנית המלאה שמובילה לשם, כפתור "חזרה" (בין אם פנימי או של הדפדפן) היה קופץ ישר החוצה
// מהאפליקציה במקום לעבור דרך ההיררכיה הטבעית. הפונקציה הזו בונה את המחסנית הנכונה מראש.
function seedHistory(s) {
  try {
    if (s.screen === "level") {
      history.replaceState({ screen: "home" }, "");
      history.pushState(s, "");
    } else if (s.screen === "topic") {
      history.replaceState({ screen: "home" }, "");
      history.pushState({ screen: "level", levelId: s.levelId }, "");
      history.pushState(s, "");
    } else {
      history.replaceState(s, "");
    }
  } catch {}
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

// ---------- בדיקת תשובה בתרגול "הקלדה מהזיכרון" (הקלדה חופשית) ----------
function normalizeAnswer(s) {
  return s
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // הסרת ניקוד (accents)
    .toLowerCase()
    .replace(/[¿?¡!.,;:]/g, "")
    .trim()
    .replace(/\s+/g, " ");
}
// מרחיב טוקן בודד שמכיל "/" מוטמע בלי רווחים סביבו (למשל "Él/Ella" או "Estimado/a") לשתי חלופות.
// אם החלק שאחרי ה-"/" קצר מאוד (כמו "a" ב-"Estimado/a") מתייחסים אליו כסיומת מגדר שמוחלפת
// בסוף המילה הראשונה; אחרת מתייחסים לשני הצדדים כמילים שלמות ועצמאיות (כמו "Él" ו-"Ella").
function expandSlashToken(token) {
  const parts = token.split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return [token];
  const [a, b] = parts;
  if (b.length <= 2 && a.length > b.length) {
    const stem = /[aeo]$/i.test(a) ? a.slice(0, -1) : a;
    return [a, stem + b];
  }
  return [a, b];
}
// מרחיב ביטוי שלם לכל צירופי החלופות האפשריים, כשלכל מילה בביטוי שמכילה "/" מוטמע
// יש להחליף באחת מהחלופות שלה, בעוד שאר הביטוי נשאר משותף (למשל "Él/Ella es" -> "Él es" / "Ella es")
function expandPhrase(phrase) {
  const words = phrase.split(" ");
  let variants = [words];
  words.forEach((word, i) => {
    if (!word.includes("/")) return;
    const alts = expandSlashToken(word);
    const next = [];
    for (const variant of variants) {
      for (const alt of alts) {
        const copy = [...variant];
        copy[i] = alt;
        next.push(copy);
      }
    }
    variants = next;
  });
  return variants.map(v => v.join(" "));
}
// בונה את קבוצת התשובות הקבילות מתוך ערך ה-es הגולמי:
// מסיר הבהרות בסוגריים ("(yo hablo)"), מפצל ל"/" מרווח לחלופות ברמת הביטוי השלם (כמו "El jefe / La jefa"),
// מרחיב "/" מוטמע ברמת המילה הבודדת (כמו "Él/Ella es"), ומקבל כל חלופה גם בלי מילת יחס בהתחלה
function acceptableAnswers(es) {
  const cleaned = es.replace(/\([^)]*\)/g, "").trim();
  const answers = new Set();
  for (const phrase of cleaned.split(/\s+\/\s+/)) {
    for (const expanded of expandPhrase(phrase.trim())) {
      const norm = normalizeAnswer(expanded);
      if (!norm) continue;
      answers.add(norm);
      const noArticle = norm.replace(/^(el|la|los|las)\s+/, "");
      if (noArticle) answers.add(noArticle);
    }
  }
  return answers;
}
function isRecallCorrect(userInput, es) {
  return acceptableAnswers(es).has(normalizeAnswer(userInput));
}

// ---------- state ----------
// מתחילים במסך טעינה - עוד לא ידוע אם המשתמש מחובר, ממתינים לאירוע hablaAuthReady מ-js/auth.js.
let state = { screen: "loading" };
let ex = null; // exercise runtime state

const app = document.getElementById("app");
const breadcrumb = document.getElementById("breadcrumb");
document.getElementById("homeBtn").addEventListener("click", () => { if (currentUid) goHome(); });

// כפתור החזרה של הדפדפן/אנדרואיד (וגם history.back() שקוראים לו כפתורי ה"חזרה" הפנימיים)
// מגיעים לכאן דרך אירוע popstate אחד ויחיד - בדיוק אותה לוגיקה לשני המקורות.
window.addEventListener("popstate", (e) => {
  state = e.state || (currentUid ? { screen: "home" } : { screen: "auth", authMode: "login" });
  if (state.screen === "exercise" && currentUid) {
    if (state.isReview) buildReviewExercise();
    else buildExercise(state.levelId, state.topicId, state.type);
  }
  if (currentUid) saveNav(state);
  render();
});

// ---------- אימות (Firebase, דרך js/auth.js) ----------
// js/auth.js הוא מודול ES שנטען בנפרד ושולח את האירוע הזה פעם אחת בטעינת הדף (ואז שוב בכל
// login/logout). לעולם לא מכיל אימייל - רק uid ונתוני הפרופיל (username, gender, progress...).
window.addEventListener("hablaAuthReady", (e) => {
  const { user, profile } = e.detail || {};
  if (user) {
    bootLoggedIn(user.uid, profile);
  } else {
    currentUid = null;
    currentUsername = "";
    currentGender = "m";
    state = { screen: "auth", authMode: "login" };
    history.replaceState(state, "");
    render();
  }
});

// שומר עותק מקומי קטן של username/gender (לא רגיש) לפי uid, כדי שאם Firestore לא זמין
// זמנית בהתחברות הבאה עדיין אפשר להציג את שם המשתמש הנכון ולא להשאיר מסך ריק/שגוי.
function profileCacheKey(uid) { return `habla_profile_cache_v1__${uid}`; }
function cacheProfileLocally(uid, username, gender) {
  try { localStorage.setItem(profileCacheKey(uid), JSON.stringify({ username, gender })); } catch {}
}
function readCachedProfile(uid) {
  try { return JSON.parse(localStorage.getItem(profileCacheKey(uid))) || null; }
  catch { return null; }
}

function bootLoggedIn(uid, profile) {
  currentUid = uid;
  if (profile) {
    currentUsername = profile.username || "";
    currentGender = profile.gender === "f" ? "f" : "m";
    saveProgress(profile.progress || {});
    saveLearned(new Set(profile.learned || []));
    saveWordStats(profile.wordStats || {});
    cacheProfileLocally(uid, currentUsername, currentGender);
  } else {
    // Firestore לא הצליח להיטען (למשל בעיית רשת) - נופלים חזרה לעותק מקומי אם קיים,
    // ומשתמשים במה שכבר נשמר ב-localStorage מהפעם הקודמת במקום לאבס הכל.
    const cached = readCachedProfile(uid);
    currentUsername = cached ? cached.username : "";
    currentGender = cached ? cached.gender : "m";
  }
  state = loadNav() || { screen: "home" };
  seedHistory(state);
  render();
}

// ---------- ניווט ----------
function goHome() { state = { screen: "home" }; saveNav(state); pushHistory(); render(); }
function gotoLevel(levelId) { state = { screen: "level", levelId }; saveNav(state); pushHistory(); render(); }
function gotoTopic(levelId, topicId) { state = { screen: "topic", levelId, topicId }; saveNav(state); pushHistory(); render(); }
function gotoExercise(levelId, topicId, type) {
  state = { screen: "exercise", levelId, topicId, type };
  saveNav(state);
  pushHistory();
  buildExercise(levelId, topicId, type);
  render();
}
function gotoReview() {
  state = { screen: "exercise", type: "quiz", isReview: true };
  pushHistory();
  buildReviewExercise();
  render();
}
function gotoStats() { state = { screen: "stats" }; pushHistory(); render(); }

// בונה שאלת חידון בודדת (כיוון אקראי + מסיחים) עבור מילה אחת. משמש גם לחידון רגיל וגם לתרגול חזרה,
// שהיו זהים במלואם קודם לכן, כל אחד עם ההעתק שלו.
function buildQuizQuestion(vocabItem, levelId, topicId, vocabIndex, allVocabInLevel) {
  const direction = Math.random() < 0.5 ? "es2he" : "he2es";
  const correctText = direction === "es2he" ? vocabItem.he : vocabItem.es;
  const valueFn = o => direction === "es2he" ? o.he : o.es;
  const options = shuffle([correctText, ...pickDistractors(allVocabInLevel, correctText, valueFn)]);
  return {
    vocabIndex,
    levelId,
    topicId,
    direction,
    prompt: direction === "es2he" ? vocabItem.es : vocabItem.he,
    correct: correctText,
    options
  };
}

// ---------- בניית תרגיל ----------
function buildExercise(levelId, topicId, type) {
  const level = LEVELS[levelId];
  const topic = level.topics.find(t => t.id === topicId);

  if (type === "flashcards") {
    // stage "cards" = מעבר על הכרטיסיות; אחרי הכרטיסיה האחרונה עוברים לשלב "quiz" (ראו
    // startVocabQuiz) - ורק בסיום השלב הזה שומרים ציון ומסמנים את התרגיל כהושלם.
    ex = { type, stage: "cards", index: 0, flipped: false, items: topic.vocab, finished: false };
  } else if (type === "quiz" || type === "listening") {
    // stage "study" = מעבר על המילים עם השמעה ותרגום, בלי בדיקה; אחרי המילה האחרונה עוברים
    // לשלב "quiz" (ראו startQuizFromStudy/startListeningQuiz) על אותן מילים בדיוק - ורק בסיום
    // השלב הזה שומרים ציון ומסמנים את התרגיל כהושלם. quiz ו-listening חולקים בדיוק אותו שלב
    // למידה (renderStudyStage/handleStudyNext) כדי לא לשכפל שתי גרסאות כמעט זהות של אותו מסך.
    ex = { type, stage: "study", index: 0, items: topic.vocab, finished: false };
  } else if (type === "sentences") {
    // stage "study" = מעבר על המשפטים המלאים (עם תרגום והשמעה) לפני חידת הגרירה; אותו רעיון
    // בדיוק כמו quiz/listening למעלה, על topic.sentences במקום topic.vocab.
    ex = { type, stage: "study", index: 0, items: topic.sentences, finished: false };
  } else if (type === "recall") {
    // stage "intro" = מסך הכנה בלבד: מציג אילו מילים (בעברית בלבד, בלי הספרדית) עומדות
    // להיבדק, בלי לחשוף את התשובות - כדי לא להחליש את בדיקת הזיכרון. הבדיקה עצמה (stage
    // "quiz", ראו startRecallTest) נשארת זהה לגמרי למה שהייתה קודם.
    ex = { type, stage: "intro", index: 0, items: topic.vocab, finished: false };
  }
}

// תרגיל חזרה על מילים קשות: אותה צורת נתונים בדיוק כמו חידון רגיל (ex.type === "quiz"),
// רק שהשאלות נאספות מכמה נושאים/רמות שונות במקום נושא בודד
function buildReviewExercise() {
  const words = getStruggleWords(REVIEW_SESSION_SIZE);
  const questions = shuffle(words.map(w => {
    const allVocabInLevel = LEVELS[w.levelId].topics.flatMap(t => t.vocab);
    return buildQuizQuestion(w.vocab, w.levelId, w.topicId, w.vocabIndex, allVocabInLevel);
  }));
  ex = { type: "quiz", index: 0, score: 0, questions, answered: false, selected: null, finished: false, isReview: true };
}

// לאחר שהמשתמש עבר על כל הפריטים בשלב הלמידה (כרטיסיות, או שלב "study" המשותף של
// quiz/listening): הופך את ex לבוחן על בדיוק אותן מילים (ex.items), באותה צורת נתונים כמו
// חידון רגיל (buildQuizQuestion, דו-כיווני). ex.type לא משתנה בכוונה - כך שהציון הסופי (מ-
// handleChoiceNext/finishExerciseIfDone הקיימים, בלי לשנות אותם) יישמר תחת סוג התרגיל שכבר
// היה (flashcards/quiz), ולא ידרוס ציון של תרגיל אחר באותו נושא. פונקציה גנרית אחת, כדי
// לא לשכפל אותה עבור flashcards ועבור quiz בנפרד.
function startVocabQuiz() {
  const allVocabInLevel = LEVELS[state.levelId].topics.flatMap(t => t.vocab);
  const questions = shuffle(ex.items.map((v, i) =>
    buildQuizQuestion(v, state.levelId, state.topicId, i, allVocabInLevel)));
  ex.stage = "quiz";
  ex.questions = questions;
  ex.index = 0;
  ex.score = 0;
  ex.answered = false;
  ex.selected = null;
}

// לאחר שהמשתמש עבר על כל מילות ההאזנה בשלב הלמידה: הופך את ex לבוחן על בדיוק אותן מילים
// (ex.items), בצורת השאלה הייחודית להאזנה (מילה בספרדית + 4 אפשרויות תרגום בעברית) - שונה
// מ-startVocabQuiz כי שאלת האזנה היא חד-כיוונית (תמיד es->he) ולא דו-כיוונית כמו quiz.
// ex.type נשאר "listening" בכוונה, כדי שהציון הסופי יישמר תחת אותו סוג תרגיל כמו קודם.
function startListeningQuiz() {
  const allVocabInLevel = LEVELS[state.levelId].topics.flatMap(t => t.vocab);
  const questions = shuffle(ex.items.map((v, i) => {
    const options = shuffle([v.he, ...pickDistractors(allVocabInLevel, v.he, o => o.he)]);
    return { vocabIndex: i, levelId: state.levelId, topicId: state.topicId, es: v.es, correct: v.he, options };
  }));
  ex.stage = "quiz";
  ex.questions = questions;
  ex.index = 0;
  ex.score = 0;
  ex.answered = false;
  ex.selected = null;
}

// לאחר שהמשתמש עבר על כל המשפטים בשלב הלמידה: הופך את ex.items מזוגות es/he גולמיים לצורת
// חידת הגרירה הקיימת (bank/answer/usedIdx) - בדיוק מה ש-buildExercise בנה מיד בעבר, רק
// שעכשיו זה קורה רק אחרי שלב הלמידה. renderSentenceBuilder/handleSb* נשארים ללא שינוי.
function startSentenceQuiz() {
  const items = ex.items.map(s => {
    const words = s.es.split(" ");
    return { es: s.es, he: s.he, bank: shuffle(words), answer: [], usedIdx: new Set() };
  });
  ex.stage = "quiz";
  ex.items = items;
  ex.index = 0;
  ex.score = 0;
  ex.checked = false;
  ex.correctFlag = null;
}

// לאחר שהמשתמש אישר במסך ההכנה (stage "intro", בלי חשיפת תשובות) שהוא מוכן: בונה את פריטי
// ההקלדה בדיוק כפי ש-buildExercise בנה אותם מיד בעבר. renderRecall/handleRecall* נשארים
// ללא שינוי.
function startRecallTest() {
  const items = shuffle(ex.items.map((v, i) => ({
    vocabIndex: i, levelId: state.levelId, topicId: state.topicId, prompt: v.he, answer: v.es
  })));
  ex.stage = "quiz";
  ex.items = items;
  ex.index = 0;
  ex.score = 0;
  ex.userAnswer = "";
  ex.checked = false;
  ex.correctFlag = null;
}

// ---------- רינדור ראשי ----------
function render() {
  if (state.screen === "loading") return renderLoading();
  if (state.screen === "auth") return renderAuth();
  if (state.screen === "about") return renderAbout();
  if (state.screen === "home") return renderHome();
  if (state.screen === "level") return renderLevel();
  if (state.screen === "topic") return renderTopic();
  if (state.screen === "exercise") return renderExercise();
  if (state.screen === "stats") return renderStats();
}

// ---------- טעינה ----------
function renderLoading() {
  breadcrumb.textContent = "";
  app.innerHTML = `<div class="loading-box"><div class="spinner" aria-hidden="true"></div><div>טוען...</div></div>`;
}

// ---------- אודות ----------
function renderAbout() {
  breadcrumb.textContent = "אודות";
  app.innerHTML = `
    <button class="back-btn" data-action="back-home">→ חזרה</button>
    <div class="section-title">אודות Zarfati App</div>
    <div class="section-sub">נוצר על ידי Lavi Zarfati</div>
  `;
  bindDelegatedEvents();
}
function gotoAbout() { state = { screen: "about" }; pushHistory(); render(); }

// ---------- אימות: הרשמה / התחברות ----------
// חשוב: המסך הזה, כמו כל שאר האפליקציה, אף פעם לא מציג/מזכיר אימייל - רק שם משתמש.
// כתובת המייל הפנימית (username@habla-app.local) קיימת רק בתוך js/auth.js ולא חוצה את הגבול הזה.
function renderAuth() {
  breadcrumb.textContent = "";
  const mode = state.authMode === "signup" ? "signup" : "login";
  const err = state.authError || "";
  const busy = !!state.authBusy;
  const genderChoice = state.genderChoice || null;

  const signupExtra = mode === "signup" ? `
    <label class="auth-label">אימות קוד סודי
      <input type="password" inputmode="numeric" pattern="[0-9]*" name="pinConfirm" maxlength="6" autocomplete="off" required>
    </label>
    <div class="gender-choice">
      <span class="gender-choice-label">איך לפנות אליך באפליקציה?</span>
      <div class="gender-btns">
        <button type="button" class="gender-btn ${genderChoice === "m" ? "selected" : ""}" data-action="pick-gender" data-gender="m">זכר</button>
        <button type="button" class="gender-btn ${genderChoice === "f" ? "selected" : ""}" data-action="pick-gender" data-gender="f">נקבה</button>
      </div>
    </div>
  ` : "";

  app.innerHTML = `
    <div class="hero">
      <h1>Zarfati App 🇪🇸 לימוד ספרדית</h1>
      <p>${mode === "signup" ? "יצירת חשבון חדש" : "התחברות לחשבון"}</p>
    </div>
    <form class="auth-form" data-auth-mode="${mode}">
      <label class="auth-label">שם משתמש
        <input type="text" name="username" maxlength="20" autocomplete="off" autocapitalize="off" spellcheck="false" dir="ltr" required>
      </label>
      <label class="auth-label">קוד סודי (4-6 ספרות)
        <input type="password" inputmode="numeric" pattern="[0-9]*" name="pin" maxlength="6" autocomplete="off" required>
      </label>
      ${signupExtra}
      ${err ? `<div class="auth-error">${escapeHtml(err)}</div>` : ""}
      <button type="submit" class="ctrl-btn" ${busy ? "disabled" : ""}>
        ${busy ? (mode === "signup" ? "יוצר חשבון..." : "מתחבר...") : (mode === "signup" ? "צור חשבון והתחל" : "התחבר")}
      </button>
    </form>
    <div class="auth-switch">
      ${mode === "signup"
        ? `יש לך כבר חשבון? <button type="button" data-action="auth-switch-mode" data-mode="login">התחבר</button>`
        : `אין לך חשבון? <button type="button" data-action="auth-switch-mode" data-mode="signup">צור חשבון</button>`}
    </div>
  `;
  bindDelegatedEvents();
}

function validateUsername(username) {
  if (!username) return "יש להזין שם משתמש";
  if (username.length < 3 || username.length > 20) return "שם משתמש צריך להיות בין 3 ל-20 תווים";
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return "שם משתמש יכול להכיל רק אותיות באנגלית, ספרות וקו תחתון";
  return null;
}
function validatePin(pin) {
  if (!/^\d{4,6}$/.test(pin)) return "הקוד הסודי חייב להכיל 4 עד 6 ספרות";
  return null;
}
// ממיר קוד שגיאה של Firebase להודעה בעברית שאף פעם לא מזכירה "אימייל" - רק שם משתמש/קוד סודי,
// כדי לשמור על ההבטחה שכתובת המייל הפנימית לעולם לא נחשפת למשתמש.
function translateAuthError(e) {
  const code = e && e.code;
  switch (code) {
    case "auth/email-already-in-use": return "שם המשתמש הזה כבר תפוס. נסה שם משתמש אחר.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found": return "שם משתמש או קוד סודי שגויים.";
    case "auth/too-many-requests": return "יותר מדי ניסיונות. נסה שוב בעוד כמה דקות.";
    case "auth/network-request-failed": return "בעיית חיבור לרשת. בדוק את החיבור ונסה שוב.";
    case "auth/weak-password": return "הקוד הסודי קצר מדי.";
    default: return "משהו השתבש. נסה שוב.";
  }
}

// שולף נתונים ישנים שנשמרו לפני שהייתה מערכת חשבונות (מפתחות ללא uid), כדי שהרשמה ראשונה
// תוכל להעביר אותם לחשבון החדש במקום לאבד אותם. לא נוגע בהם עד שההרשמה מצליחה בפועל.
function collectLegacyLocalData() {
  try {
    const progress = JSON.parse(localStorage.getItem("habla_progress_v1"));
    const learned = JSON.parse(localStorage.getItem("habla_learned_v1"));
    const wordStats = JSON.parse(localStorage.getItem("habla_word_stats_v1"));
    if (progress || learned || wordStats) {
      return { progress: progress || {}, learned: learned || [], wordStats: wordStats || {} };
    }
  } catch {}
  return null;
}
function clearLegacyLocalData() {
  localStorage.removeItem("habla_progress_v1");
  localStorage.removeItem("habla_learned_v1");
  localStorage.removeItem("habla_word_stats_v1");
  localStorage.removeItem("habla_nav_v1");
}

async function handleAuthSubmit(formEl) {
  if (!window.HablaAuth) {
    state.authError = "החיבור לשרת לא זמין כרגע. נסה שוב מאוחר יותר.";
    render();
    return;
  }
  const mode = formEl.dataset.authMode;
  const username = formEl.username.value.trim();
  const pin = formEl.pin.value.trim();

  const usernameErr = validateUsername(username);
  if (usernameErr) { state.authError = usernameErr; render(); return; }
  const pinErr = validatePin(pin);
  if (pinErr) { state.authError = pinErr; render(); return; }

  if (mode === "signup") {
    const pinConfirm = formEl.pinConfirm.value.trim();
    if (pin !== pinConfirm) { state.authError = "הקודים הסודיים לא תואמים."; render(); return; }
    if (!state.genderChoice) { state.authError = "יש לבחור פנייה בלשון זכר או נקבה."; render(); return; }
    state.authBusy = true; state.authError = ""; render();
    try {
      const legacy = collectLegacyLocalData();
      const result = await window.HablaAuth.signUp(username, pin, state.genderChoice, legacy);
      if (legacy) clearLegacyLocalData();
      bootLoggedIn(result.uid, result.profile || { username: result.username, gender: state.genderChoice });
    } catch (e) {
      state.authBusy = false;
      state.authError = translateAuthError(e);
      render();
    }
  } else {
    state.authBusy = true; state.authError = ""; render();
    try {
      const result = await window.HablaAuth.logIn(username, pin);
      bootLoggedIn(result.uid, result.profile || { username: result.username });
    } catch (e) {
      state.authBusy = false;
      state.authError = translateAuthError(e);
      render();
    }
  }
}

function renderHome() {
  breadcrumb.textContent = "";
  const learned = totalLearnedCount();
  const total = totalWordCount();
  const reviewCount = struggleWordCount();
  app.innerHTML = `
    <div class="hero">
      <h1>Zarfati App 🇪🇸 לימוד ספרדית</h1>
      <p class="hero-greeting">${t("welcome")}, ${escapeHtml(currentUsername)}!</p>
      <p>${t("chooseLevelIntro")}</p>
    </div>
    <div class="stats-strip">
      <div class="stat-box"><div class="num">${learned}/${total}</div><div class="lbl">מילים נלמדו</div></div>
      <div class="stat-box"><div class="num">${getLevelCompletion("beginner")}%</div><div class="lbl">מתחיל</div></div>
      <div class="stat-box"><div class="num">${getLevelCompletion("intermediate")}%</div><div class="lbl">מתקדם</div></div>
      <div class="stat-box"><div class="num">${getLevelCompletion("advanced")}%</div><div class="lbl">מקצועי</div></div>
    </div>
    <div class="level-grid">
      ${DIFFICULTY_LEVEL_IDS.map(id => LEVELS[id]).map(level => {
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
    <div style="text-align:center; margin-top:20px;">
      <button class="ctrl-btn" style="background:${LEVELS.grammar.color}" data-action="goto-level" data-level="grammar">
        <span aria-hidden="true">${LEVELS.grammar.icon}</span> ${LEVELS.grammar.name}
      </button>
    </div>
    <div style="text-align:center; margin-top:16px;">
      <button class="ctrl-btn secondary" data-action="goto-stats"><span aria-hidden="true">📊</span> סטטיסטיקות והתקדמות</button>
    </div>
    <div style="text-align:center; margin-top:16px;">
      <button class="ctrl-btn" data-action="goto-review" ${reviewCount === 0 ? "disabled" : ""}>
        <span aria-hidden="true">📝</span> תרגול מילים קשות${reviewCount > 0 ? ` (${reviewCount})` : ""}
      </button>
      ${reviewCount === 0 ? `<div class="section-sub" style="margin-top:8px;">${t("reviewEmptyHint")}</div>` : ""}
    </div>
    <div style="text-align:center; margin-top:16px;">
      <a class="ctrl-btn secondary" href="${feedbackWhatsappUrl()}" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">💬</span> שלח משוב
      </a>
    </div>
    <div style="text-align:center; margin-top:24px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
      <button class="back-btn" data-action="reset-progress">איפוס התקדמות</button>
      <button class="back-btn" data-action="logout">🚪 התנתק</button>
    </div>
  `;
  bindDelegatedEvents();
}
function feedbackWhatsappUrl() {
  const msg = "היי! יש לי משוב על אפליקציית Zarfati App ללימוד ספרדית: ";
  return `https://api.whatsapp.com/send?phone=972559651785&text=${encodeURIComponent(msg)}`;
}

// ---------- סטטיסטיקות והתקדמות ----------
function renderTopicStatRows(rows) {
  return rows.map(t => `
    <div class="topic-row">
      <div class="tr-info">
        <div class="tr-name">${t.topicName}</div>
        <div class="tr-count">${levelLabel(t.levelId, t.levelName)}</div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${t.completion}%; background:${t.levelColor}"></div></div>
      </div>
      <div style="font-weight:700;color:${t.levelColor}">${t.completion}%</div>
    </div>`).join("");
}
// שורת "אחוז השלמה" עבור רמה/אזור שלם (משמש גם ל-3 רמות הקושי וגם לדקדוק במסך הסטטיסטיקות)
function renderLevelProgressRow(level) {
  const pct = getLevelCompletion(level.id);
  return `
    <div class="topic-row">
      <div class="tr-info">
        <div class="tr-name">${level.icon} ${level.name}</div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%; background:${level.color}"></div></div>
      </div>
      <div style="font-weight:700;color:${level.color}">${pct}%</div>
    </div>`;
}

function renderStats() {
  breadcrumb.textContent = "סטטיסטיקות והתקדמות";
  const learned = totalLearnedCount();
  const total = totalWordCount();
  const overallPct = overallCompletion();
  const reviewCount = struggleWordCount();

  const attempted = getAllTopicsWithCompletion().filter(t => t.completion > 0);
  let topicsSection;
  if (attempted.length === 0) {
    topicsSection = `
      <div class="section-title">נושאים חזקים וחלשים</div>
      <div class="section-sub">עדיין אין מספיק נתונים להצגה. תרגל/י נושא אחד לפחות כדי לראות כאן ניתוח של הנושאים החזקים והחלשים שלך.</div>
    `;
  } else if (attempted.length >= 6) {
    const sorted = [...attempted].sort((a, b) => b.completion - a.completion);
    const strong = sorted.slice(0, 3);
    const weak = sorted.slice(-3).reverse();
    topicsSection = `
      <div class="section-title">נושאים חזקים</div>
      <div class="topic-list">${renderTopicStatRows(strong)}</div>
      <div class="section-title" style="margin-top:24px;">נושאים לחיזוק</div>
      <div class="topic-list">${renderTopicStatRows(weak)}</div>
    `;
  } else {
    const sorted = [...attempted].sort((a, b) => b.completion - a.completion);
    topicsSection = `
      <div class="section-title">נושאים שתורגלו</div>
      <div class="section-sub">כשתתרגלו יותר נושאים, כאן תופיע הפרדה בין נושאים חזקים לנושאים לחיזוק.</div>
      <div class="topic-list">${renderTopicStatRows(sorted)}</div>
    `;
  }

  app.innerHTML = `
    <button class="back-btn" data-action="back-home">→ חזרה לדף הבית</button>
    <div class="section-title">סטטיסטיקות והתקדמות</div>
    <div class="section-sub">סיכום ההתקדמות שלך בלימוד הספרדית</div>
    <div class="stats-strip">
      <div class="stat-box"><div class="num">${learned}/${total}</div><div class="lbl">מילים נלמדו</div></div>
      <div class="stat-box"><div class="num">${overallPct}%</div><div class="lbl">התקדמות כוללת</div></div>
      <div class="stat-box"><div class="num">${reviewCount}</div><div class="lbl">מילים קשות</div></div>
    </div>
    <div class="section-title" style="margin-top:28px;">התקדמות לפי רמת קושי</div>
    <div class="topic-list">
      ${DIFFICULTY_LEVEL_IDS.map(id => renderLevelProgressRow(LEVELS[id])).join("")}
    </div>
    <div class="section-title" style="margin-top:28px;">${LEVELS.grammar.name}</div>
    <div class="topic-list">
      ${renderLevelProgressRow(LEVELS.grammar)}
    </div>
    <div style="margin-top:28px;">
      ${topicsSection}
    </div>
  `;
  bindDelegatedEvents();
}

function renderLevel() {
  const level = LEVELS[state.levelId];
  breadcrumb.textContent = `${level.name}`;
  app.innerHTML = `
    <button class="back-btn" data-action="back-home">→ חזרה לרמות</button>
    <div class="section-title">${level.icon} ${levelLabel(level.id, level.name)}</div>
    <div class="section-sub">${t("chooseTopic")}</div>
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
    <div class="section-sub" style="margin-bottom:4px;">${levelLabel(level.id, level.name)} · ${t("chooseExerciseType")}</div>
    <div class="section-sub">💡 מומלץ להתחיל מ"כרטיסיות" ולהתקדם לפי הסדר</div>
    <div class="exercise-grid">
      ${DISPLAY_EXERCISE_TYPES.map(et => {
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
  const etMeta = DISPLAY_EXERCISE_TYPES.find(e => e.id === state.type);
  breadcrumb.textContent = `${level.name} › ${topic.name} › ${etMeta.name}`;

  let body = "";
  if (ex.type === "flashcards") body = ex.stage === "quiz" ? renderQuiz() : renderFlashcards();
  else if (ex.type === "quiz") body = ex.stage === "quiz" ? renderQuiz() : renderStudyStage();
  else if (ex.type === "listening") body = ex.stage === "quiz" ? renderListening() : renderStudyStage();
  else if (ex.type === "sentences") body = ex.stage === "quiz" ? renderSentenceBuilder() : renderStudyStage();
  else if (ex.type === "recall") body = ex.stage === "quiz" ? renderRecall() : renderRecallIntro();

  app.innerHTML = `
    <button class="back-btn" data-action="back-topic" data-level="${level.id}" data-topic="${topic.id}">→ חזרה לתרגילים</button>
    <div class="runner">${body}</div>
  `;
  bindDelegatedEvents();
}

// ---------- כרטיסיות ----------
function renderFlashcards() {
  const item = ex.items[ex.index];
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.items.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.items.length) * 100}%"></div></div>
      <span>כרטיסיות</span>
    </div>
    <div class="flashcard ${ex.flipped ? "flipped" : ""}" data-action="flip-card" role="button" tabindex="0"
         aria-label="${ex.flipped ? t("flashcardAriaShowWord") : t("flashcardAriaShowTranslation")}">
      <div class="fc-front">
        <div class="fc-word" lang="es">${item.es}</div>
        <div class="fc-hint">${t("flashcardHint")}</div>
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

// ---------- שלב למידה משותף (Quiz / Listening / Sentences), לפני הבוחן ----------
const STUDY_STAGE_LABELS = { quiz: "חידון - למידה", listening: "האזנה - למידה", sentences: "משפטים - למידה" };
function renderStudyStage() {
  const item = ex.items[ex.index];
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.items.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.items.length) * 100}%"></div></div>
      <span>${STUDY_STAGE_LABELS[ex.type]}</span>
    </div>
    <div class="listen-box">
      <div class="section-sub">${t("studyStageHint")}</div>
      <button class="listen-play" data-action="study-play" aria-label="השמע הגייה בספרדית">🔊</button>
      <div class="fc-word" lang="es" style="margin-top:14px;">${item.es}</div>
      <div class="fc-translation">${item.he}</div>
    </div>
    <div class="runner-controls">
      <button class="ctrl-btn secondary" data-action="study-prev" ${ex.index === 0 ? "disabled" : ""}>הקודם</button>
      <button class="ctrl-btn" data-action="study-next">${ex.index === ex.items.length - 1 ? "לבוחן" : "הבא"}</button>
    </div>
  `;
}

// ---------- האזנה: שלב הבוחן ----------
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
      <div class="section-sub">${t("listeningInstruction")}</div>
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
    <div class="sb-target-he">${t("sentenceBuildPrefix")}: "${item.he}"</div>
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

// ---------- הקלדה מהזיכרון: מסך הכנה (stage "intro", בלי חשיפת תשובות) ----------
function renderRecallIntro() {
  return `
    <div class="section-title" style="text-align:center;">הקלדה מהזיכרון</div>
    <div class="section-sub" style="text-align:center;">${t("recallIntroInstruction")}</div>
    <div class="topic-list">
      ${ex.items.map(v => `<div class="topic-row"><div class="tr-info"><div class="tr-name">${v.he}</div></div></div>`).join("")}
    </div>
    <div class="runner-controls">
      <button class="ctrl-btn" data-action="recall-start">${t("recallIntroCta")}</button>
    </div>
  `;
}

// ---------- הקלדה מהזיכרון (הקלדה חופשית מעברית לספרדית) ----------
function renderRecall() {
  if (ex.index >= ex.items.length) {
    return renderSummary({ correct: ex.score, total: ex.items.length, label: "סיכום הקלדה מהזיכרון" });
  }
  const item = ex.items[ex.index];
  return `
    <div class="runner-top">
      <span>${ex.index + 1} / ${ex.items.length}</span>
      <div class="runner-progress"><div class="runner-progress-fill" style="width:${(ex.index / ex.items.length) * 100}%"></div></div>
      <span>ניקוד: ${ex.score}</span>
    </div>
    <div class="section-sub" style="text-align:center">איך אומרים את זה בספרדית?</div>
    <div class="quiz-question">${item.prompt}</div>
    <form class="recall-form">
      <input type="text" class="recall-input ${ex.checked ? (ex.correctFlag ? "correct" : "incorrect") : ""}"
             dir="ltr" lang="es" autocomplete="off" autocapitalize="off" spellcheck="false"
             value="${ex.checked ? (ex.userAnswer || "") : ""}" ${ex.checked ? "disabled" : ""}
             placeholder="${t("recallPlaceholder")}" data-role="recall-input">
      ${!ex.checked ? `<button type="submit" class="ctrl-btn">בדוק</button>` : ""}
    </form>
    ${ex.checked ? `
      <div class="section-sub" style="text-align:center;margin-top:14px;color:${ex.correctFlag ? "var(--success)" : "var(--danger)"}">
        ${ex.correctFlag ? "נכון מאוד! 🎉" : `לא מדויק. התשובה: <span lang="es">${item.answer}</span>`}
      </div>
      <div class="runner-controls">
        <button class="speak-btn" data-action="recall-speak" aria-label="השמע הגייה בספרדית">🔊</button>
        <button class="ctrl-btn" data-action="recall-next">המשך</button>
      </div>
    ` : ""}
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
        <button class="ctrl-btn secondary" data-action="retry-exercise">${t("tryAgain")}</button>
        ${continueBtn}
      </div>
    </div>
  `;
}

// אם הגענו לסוף התרגיל ועדיין לא שמרנו עבורו ציון - שומר פעם אחת בדיוק.
// סשן חזרה (isReview) אינו שייך לנושא אחד ולכן אינו כותב ציון נושא כלל.
function finishExerciseIfDone(length, scoreType, percent) {
  if (ex.index < length || ex.finished) return;
  ex.finished = true;
  if (!ex.isReview) setTopicScore(state.levelId, state.topicId, scoreType, percent);
}

// ---------- כרטיסיות ----------
function handleFcNext() {
  ex.index += 1;
  ex.flipped = false;
  if (ex.index >= ex.items.length) startVocabQuiz();
  render();
}

// ---------- שלב הלמידה המשותף (Quiz / Listening / Sentences) ----------
// שלושת התרגילים האלה מתחילים ב-stage:"study" על ex.items בצורת {es, he} (מילים או משפטים
// מלאים), ונע"רים ל-render/handler משותפים במקום שלוש גרסאות כמעט זהות. ex.type קובע איזו
// פונקציית start*Quiz/start*Test מתאימה לקרוא בסיום המעבר.
function handleStudyNext() {
  ex.index += 1;
  if (ex.index >= ex.items.length) {
    if (ex.type === "quiz") startVocabQuiz();
    else if (ex.type === "listening") startListeningQuiz();
    else if (ex.type === "sentences") startSentenceQuiz();
  }
  render();
}
function handleStudyPrev() {
  ex.index = Math.max(0, ex.index - 1);
  render();
}

// ---------- חידון והאזנה (אותה צורת נתונים בדיוק) ----------
function handleChoiceOption(index) {
  if (ex.answered) return;
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
}
function handleChoiceNext() {
  ex.index += 1;
  ex.answered = false;
  ex.selected = null;
  finishExerciseIfDone(ex.questions.length, ex.type, Math.round((ex.score / ex.questions.length) * 100));
  render();
}

// ---------- בניית משפטים ----------
function handleSbAdd(index) {
  const item = ex.items[ex.index];
  if (ex.checked || item.usedIdx.has(index)) return;
  item.usedIdx.add(index);
  item.answer.push(item.bank[index]);
  render();
}
function handleSbRemove(index) {
  const item = ex.items[ex.index];
  if (ex.checked) return;
  const word = item.answer[index];
  item.answer.splice(index, 1);
  for (const bi of item.usedIdx) {
    if (item.bank[bi] === word) { item.usedIdx.delete(bi); break; }
  }
  render();
}
function handleSbClear() {
  const item = ex.items[ex.index];
  item.answer = [];
  item.usedIdx = new Set();
  render();
}
function handleSbCheck() {
  const item = ex.items[ex.index];
  const built = item.answer.join(" ");
  ex.correctFlag = built.toLowerCase() === item.es.toLowerCase();
  if (ex.correctFlag) ex.score += 1;
  ex.checked = true;
  render();
}
function handleSbNext() {
  ex.index += 1;
  ex.checked = false;
  ex.correctFlag = null;
  finishExerciseIfDone(ex.items.length, "sentences", Math.round((ex.score / ex.items.length) * 100));
  render();
}

// ---------- הקלדה מהזיכרון ----------
function handleRecallCheck() {
  if (ex.checked) return;
  const item = ex.items[ex.index];
  const inputEl = app.querySelector('[data-role="recall-input"]');
  const typed = inputEl ? inputEl.value : "";
  const isCorrect = isRecallCorrect(typed, item.answer);
  ex.userAnswer = typed;
  ex.correctFlag = isCorrect;
  ex.checked = true;
  recordAnswer(item.levelId, item.topicId, item.vocabIndex, isCorrect);
  if (isCorrect) {
    ex.score += 1;
    markLearned(item.levelId, item.topicId, item.vocabIndex);
  }
  render();
}
function handleRecallNext() {
  ex.index += 1;
  ex.checked = false;
  ex.correctFlag = null;
  ex.userAnswer = "";
  finishExerciseIfDone(ex.items.length, "recall", Math.round((ex.score / ex.items.length) * 100));
  render();
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
    case "reset-progress": {
      if (confirm("לאפס את כל ההתקדמות שנשמרה? פעולה זו לא ניתנת לביטול.")) {
        resetProgress();
        render();
      }
      break;
    }
    // "חזרה" הפנימי מתנהג בדיוק כמו כפתור החזרה של הדפדפן/אנדרואיד - שניהם עוברים
    // דרך history.back() ומטופלים על ידי אותו מאזין popstate.
    case "back-home":
    case "back-level":
    case "back-topic":
      history.back();
      break;
    case "goto-review": gotoReview(); break;
    case "goto-stats": gotoStats(); break;
    case "goto-about": gotoAbout(); break;
    case "pick-gender": state.genderChoice = el.dataset.gender; state.authError = ""; render(); break;
    case "auth-switch-mode": state = { screen: "auth", authMode: el.dataset.mode }; history.replaceState(state, ""); render(); break;
    case "logout": {
      if (window.HablaAuth) window.HablaAuth.logOut();
      break;
    }
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
    case "fc-next": handleFcNext(); break;

    // Quiz & Listening share the same runtime shape ({questions, index, score, answered, selected})
    case "quiz-option":
    case "listen-option": handleChoiceOption(index); break;
    case "quiz-next":
    case "listen-next": handleChoiceNext(); break;
    case "listen-play": speak(ex.questions[ex.index].es); break;

    // שלב הלמידה המשותף (Quiz / Listening / Sentences), לפני הבוחן
    case "study-play": speak(ex.items[ex.index].es); break;
    case "study-prev": handleStudyPrev(); break;
    case "study-next": handleStudyNext(); break;

    // Sentence builder
    case "sb-add": handleSbAdd(index); break;
    case "sb-remove": handleSbRemove(index); break;
    case "sb-clear": handleSbClear(); break;
    case "sb-speak": speak(ex.items[ex.index].es); break;
    case "sb-check": handleSbCheck(); break;
    case "sb-next": handleSbNext(); break;

    // הקלדה מהזיכרון
    case "recall-start": startRecallTest(); render(); break;
    case "recall-check": handleRecallCheck(); break;
    case "recall-speak": speak(ex.items[ex.index].answer); break;
    case "recall-next": handleRecallNext(); break;
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
  // בתרגול "הקלדה מהזיכרון", לחיצת Enter בתוך שדה הטקסט שולחת את הטופס באופן טבעי - נתפוס את זה כאן
  app.onsubmit = (e) => {
    if (e.target.closest(".recall-form")) {
      e.preventDefault();
      handleAction({ dataset: { action: "recall-check" } });
      return;
    }
    const authForm = e.target.closest(".auth-form");
    if (authForm) {
      e.preventDefault();
      handleAuthSubmit(authForm);
    }
  };
}

render();
