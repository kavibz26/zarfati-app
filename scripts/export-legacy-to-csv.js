// סקריפט חד-פעמי (Bootstrap): קורא את מאגר הנתונים הקיים (js/data/*.js), ומייצר ממנו את
// data/source/words.csv - קובץ המקור היחיד להולך קדימה. מקצה לכל מילה קיימת מזהה יציב חדש
// ואטום (w000001, w000002...) - לא נשען על ה-id-ים הקיימים היום בקבצים (הם עדיין נגזרים
// מ-levelId+topicId+מיקום, לא באמת יציבים לפי הדרישה החדשה).
// מריצים פעם אחת בלבד: node scripts/export-legacy-to-csv.js

const fs = require("fs");
const path = require("path");
const { rowsToCsv } = require("./csv-utils");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "js", "data");
const OUT_CSV = path.join(ROOT, "data", "source", "words.csv");
// topic.sentences (משפטי תרגול ל"בניית משפטים") אינם קשורים למילה בודדת - קובץ מקור נפרד,
// עם מזהים יציבים משלהם באותו מנגנון בדיוק (בשביל עקביות, גם אם עוד לא נדרש היום).
const OUT_SENTENCES_CSV = path.join(ROOT, "data", "source", "sentences.csv");

function loadLevelConstant(fileName, constName) {
  const src = fs.readFileSync(path.join(DATA_DIR, fileName), "utf8");
  const wrapped = src + `\nmodule.exports = ${constName};\n`;
  const tmpPath = path.join(ROOT, "data", "source", `__tmp_${constName}.js`);
  fs.writeFileSync(tmpPath, wrapped);
  delete require.cache[require.resolve(tmpPath)];
  const value = require(tmpPath);
  fs.unlinkSync(tmpPath);
  return value;
}

const LEVEL_BEGINNER = loadLevelConstant("beginner.js", "LEVEL_BEGINNER");
const LEVEL_INTERMEDIATE = loadLevelConstant("intermediate.js", "LEVEL_INTERMEDIATE");
const LEVEL_ADVANCED = loadLevelConstant("advanced.js", "LEVEL_ADVANCED");
const LEVEL_GRAMMAR = loadLevelConstant("grammar.js", "LEVEL_GRAMMAR");

const LEVELS = {
  beginner: LEVEL_BEGINNER,
  intermediate: LEVEL_INTERMEDIATE,
  advanced: LEVEL_ADVANCED,
  grammar: LEVEL_GRAMMAR
};

const HEADERS = ["id", "es", "he", "ex_es", "ex_he", "levelId", "topicId", "topicName"];
const SENTENCE_HEADERS = ["id", "es", "he", "levelId", "topicId"];
const rows = [];
const sentenceRows = [];
let wordCounter = 1;
let sentenceCounter = 1;

for (const levelId of Object.keys(LEVELS)) {
  const level = LEVELS[levelId];
  for (const topic of level.topics) {
    for (const word of topic.vocab) {
      const id = "w" + String(wordCounter).padStart(6, "0");
      wordCounter++;
      rows.push({
        id,
        es: word.es,
        he: word.he,
        ex_es: word.ex_es,
        ex_he: word.ex_he,
        levelId,
        topicId: topic.id,
        topicName: topic.name
      });
    }
    for (const sentence of (topic.sentences || [])) {
      const id = "s" + String(sentenceCounter).padStart(6, "0");
      sentenceCounter++;
      sentenceRows.push({ id, es: sentence.es, he: sentence.he, levelId, topicId: topic.id });
    }
  }
}

fs.mkdirSync(path.dirname(OUT_CSV), { recursive: true });
fs.writeFileSync(OUT_CSV, rowsToCsv(HEADERS, rows), "utf8");
fs.writeFileSync(OUT_SENTENCES_CSV, rowsToCsv(SENTENCE_HEADERS, sentenceRows), "utf8");

console.log(`נכתבו ${rows.length} מילים אל ${path.relative(ROOT, OUT_CSV)}`);
console.log(`נכתבו ${sentenceRows.length} משפטי תרגול אל ${path.relative(ROOT, OUT_SENTENCES_CSV)}`);
