// הסקריפט המרכזי, שרץ שוב ושוב ככל שהמאגר גדל: קורא את קובצי המקור היחידים שנערכים ידנית
// (data/source/words.csv, data/source/sentences.csv, data/source/levels-meta.json) ומייצר
// מהם אוטומטית 4 קבצים - לעולם לא נערכים ידנית, תמיד נכתבים מחדש בכל הרצה:
//   data/levels.json          - שלד קל (רמות+נושאים+ספירות, בלי תוכן מילים)
//   data/words/<level>__<topic>.json - vocab+sentences מלאים, נושא אחד לקובץ
//   data/search-index.json    - {id, es, he} דחוס לכל המילים, לחיפוש
//   data/id-registry.json     - ספר-הנהלה נגזר (לא מקור אמת עצמאי) - לבדיקת תקינות/מעקב
//
// מזהים: אם שורה ב-CSV כבר יש לה id - הוא נשמר תמיד, לא משנה מה השתנה בשאר השורה (תוכן,
// נושא, רמה). רק שורה עם id ריק (מילה חדשה באמת) מקבלת מזהה חדש - וגם הוא נכתב חזרה ל-CSV
// כדי שיישאר קבוע מעכשיו והלאה.
//
// מריצים: node scripts/generate-dictionary.js

const fs = require("fs");
const path = require("path");
const { parseCsv, rowsToCsv } = require("./csv-utils");

const ROOT = path.join(__dirname, "..");
// ניתן לדריסה דרך משתני סביבה (משמש רק בסקריפטי בדיקה, על תיקיות ארגז-חול זמניות -
// כשלא מוגדרים, ההתנהגות זהה לגמרי לברירת המחדל הרגילה על data/ האמיתי).
const SOURCE_DIR = process.env.HABLA_SOURCE_DIR ? path.resolve(process.env.HABLA_SOURCE_DIR) : path.join(ROOT, "data", "source");
const OUT_DIR = process.env.HABLA_OUT_DIR ? path.resolve(process.env.HABLA_OUT_DIR) : path.join(ROOT, "data");

const WORDS_CSV = path.join(SOURCE_DIR, "words.csv");
const SENTENCES_CSV = path.join(SOURCE_DIR, "sentences.csv");
const LEVELS_META_JSON = path.join(SOURCE_DIR, "levels-meta.json");

const OUT_LEVELS_JSON = path.join(OUT_DIR, "levels.json");
const OUT_WORDS_DIR = path.join(OUT_DIR, "words");
const OUT_SEARCH_INDEX = path.join(OUT_DIR, "search-index.json");
const OUT_REGISTRY = path.join(OUT_DIR, "id-registry.json");

function nextId(prefix, usedIds) {
  let maxN = 0;
  for (const id of usedIds) {
    if (id.startsWith(prefix)) {
      const n = parseInt(id.slice(prefix.length), 10);
      if (Number.isFinite(n) && n > maxN) maxN = n;
    }
  }
  return prefix + String(maxN + 1).padStart(6, "0");
}

// מקצה id רק לשורות עם id ריק; משמר לגמרי כל id קיים. מחזיר true אם משהו נוסף (צריך לשמור CSV).
function assignMissingIds(records, prefix) {
  const usedIds = new Set(records.map(r => r.id).filter(Boolean));
  let changed = false;
  for (const r of records) {
    if (!r.id || r.id.trim() === "") {
      const id = nextId(prefix, usedIds);
      usedIds.add(id);
      r.id = id;
      changed = true;
    }
  }
  return changed;
}

function validateNoDuplicateIds(records, label) {
  const seenAt = new Map();
  records.forEach((r, i) => {
    if (seenAt.has(r.id)) {
      throw new Error(`מזהה כפול ב-${label}: "${r.id}" מופיע בשורה ${seenAt.get(r.id) + 2} וגם בשורה ${i + 2} (שורה 1 = כותרות)`);
    }
    seenAt.set(r.id, i);
  });
}

// ---------- טעינת קבצי מקור (הקבצים היחידים שנערכים ידנית) ----------
const { headers: wordHeaders, records: wordRecords } = parseCsv(fs.readFileSync(WORDS_CSV, "utf8"));
const { headers: sentenceHeaders, records: sentenceRecords } = parseCsv(fs.readFileSync(SENTENCES_CSV, "utf8"));
const levelsMeta = JSON.parse(fs.readFileSync(LEVELS_META_JSON, "utf8"));

const wordsChanged = assignMissingIds(wordRecords, "w");
const sentencesChanged = assignMissingIds(sentenceRecords, "s");
validateNoDuplicateIds(wordRecords, "words.csv");
validateNoDuplicateIds(sentenceRecords, "sentences.csv");

if (wordsChanged) fs.writeFileSync(WORDS_CSV, rowsToCsv(wordHeaders, wordRecords), "utf8");
if (sentencesChanged) fs.writeFileSync(SENTENCES_CSV, rowsToCsv(sentenceHeaders, sentenceRecords), "utf8");

// ---------- קיבוץ לפי (levelId, topicId) ----------
const topicsMap = new Map();
function topicKey(levelId, topicId) { return `${levelId}::${topicId}`; }
function ensureTopic(levelId, topicId, topicName) {
  const key = topicKey(levelId, topicId);
  if (!topicsMap.has(key)) {
    topicsMap.set(key, { levelId, topicId, topicName: topicName || topicId, vocab: [], sentences: [] });
  }
  const t = topicsMap.get(key);
  if (topicName && !t.topicName) t.topicName = topicName;
  return t;
}

for (const r of wordRecords) {
  const t = ensureTopic(r.levelId, r.topicId, r.topicName);
  t.vocab.push({ id: r.id, es: r.es, he: r.he, ex_es: r.ex_es, ex_he: r.ex_he });
}
for (const r of sentenceRecords) {
  const t = ensureTopic(r.levelId, r.topicId, null);
  t.sentences.push({ id: r.id, es: r.es, he: r.he });
}

// ---------- כתיבת קבצי הנושאים (מוחק ומייצר מחדש - תמיד תואם למקור בדיוק) ----------
fs.mkdirSync(OUT_WORDS_DIR, { recursive: true });
for (const oldFile of fs.readdirSync(OUT_WORDS_DIR)) {
  if (oldFile.endsWith(".json")) fs.unlinkSync(path.join(OUT_WORDS_DIR, oldFile));
}
for (const t of topicsMap.values()) {
  const fileName = `${t.levelId}__${t.topicId}.json`;
  const content = { levelId: t.levelId, topicId: t.topicId, vocab: t.vocab, sentences: t.sentences };
  fs.writeFileSync(path.join(OUT_WORDS_DIR, fileName), JSON.stringify(content, null, 2), "utf8");
}

// ---------- levels.json: שלד קל, בלי תוכן מילים ----------
const levelsOut = {};
for (const levelId of Object.keys(levelsMeta)) {
  levelsOut[levelId] = { ...levelsMeta[levelId], topics: [] };
}
for (const t of topicsMap.values()) {
  if (!levelsOut[t.levelId]) continue;
  levelsOut[t.levelId].topics.push({
    id: t.topicId,
    name: t.topicName,
    vocabCount: t.vocab.length,
    sentenceCount: t.sentences.length
  });
}
fs.writeFileSync(OUT_LEVELS_JSON, JSON.stringify(levelsOut, null, 2), "utf8");

// ---------- search-index.json: רק מילים (לא משפטי תרגול), דחוס ----------
const searchIndex = wordRecords.map(r => ({ id: r.id, es: r.es, he: r.he, levelId: r.levelId, topicId: r.topicId }));
fs.writeFileSync(OUT_SEARCH_INDEX, JSON.stringify(searchIndex), "utf8");

// ---------- id-registry.json: נבנה מחדש מה-CSV בכל הרצה - ספר-הנהלה, לא מקור אמת עצמאי ----------
const registry = { words: {}, sentences: {} };
for (const r of wordRecords) registry.words[r.id] = { es: r.es, he: r.he, levelId: r.levelId, topicId: r.topicId };
for (const r of sentenceRecords) registry.sentences[r.id] = { es: r.es, levelId: r.levelId, topicId: r.topicId };
fs.writeFileSync(OUT_REGISTRY, JSON.stringify(registry, null, 2), "utf8");

console.log(`✔ ${wordRecords.length} מילים, ${sentenceRecords.length} משפטי תרגול, ${topicsMap.size} נושאים`);
console.log(`✔ נכתבו קבצי נושא ל-${path.relative(ROOT, OUT_WORDS_DIR)}`);
console.log(`✔ נכתב ${path.relative(ROOT, OUT_LEVELS_JSON)}`);
console.log(`✔ נכתב ${path.relative(ROOT, OUT_SEARCH_INDEX)} (${searchIndex.length} רשומות)`);
console.log(`✔ נכתב ${path.relative(ROOT, OUT_REGISTRY)}`);
if (wordsChanged) console.log(`⚠ הוקצו מזהים חדשים למילים חדשות ב-words.csv - הקובץ עודכן במקום.`);
if (sentencesChanged) console.log(`⚠ הוקצו מזהים חדשים למשפטים חדשים ב-sentences.csv - הקובץ עודכן במקום.`);
