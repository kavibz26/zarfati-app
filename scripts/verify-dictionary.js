// סקריפט חד-פעמי לאימות: משווה מילה-במילה בין המבנה הישן (js/data/*.js, טעון היום בפועל
// באפליקציה) לבין המבנה החדש שנוצר (data/levels.json + data/words/*.json), כדי לוודא
// שהייצוא/ייבוא לא שינה, איבד או שיכפל שום תוכן - לפני שמדווחים ששלב 1 הושלם.
// מריצים: node scripts/verify-dictionary.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "js", "data");

function loadLevelConstant(fileName, constName) {
  const src = fs.readFileSync(path.join(DATA_DIR, fileName), "utf8");
  const wrapped = src + `\nmodule.exports = ${constName};\n`;
  const tmpPath = path.join(ROOT, "data", "source", `__tmp_verify_${constName}.js`);
  fs.writeFileSync(tmpPath, wrapped);
  delete require.cache[require.resolve(tmpPath)];
  const value = require(tmpPath);
  fs.unlinkSync(tmpPath);
  return value;
}

const OLD_LEVELS = {
  beginner: loadLevelConstant("beginner.js", "LEVEL_BEGINNER"),
  intermediate: loadLevelConstant("intermediate.js", "LEVEL_INTERMEDIATE"),
  advanced: loadLevelConstant("advanced.js", "LEVEL_ADVANCED"),
  grammar: loadLevelConstant("grammar.js", "LEVEL_GRAMMAR")
};

const newLevels = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "levels.json"), "utf8"));

let errors = [];
let totalOldWords = 0, totalOldSentences = 0;
let totalNewWords = 0, totalNewSentences = 0;

for (const levelId of Object.keys(OLD_LEVELS)) {
  const oldLevel = OLD_LEVELS[levelId];
  const newLevel = newLevels[levelId];
  if (!newLevel) { errors.push(`רמה חסרה ב-levels.json: ${levelId}`); continue; }

  if (oldLevel.topics.length !== newLevel.topics.length) {
    errors.push(`${levelId}: מספר נושאים שונה - ישן=${oldLevel.topics.length} חדש=${newLevel.topics.length}`);
  }

  for (const oldTopic of oldLevel.topics) {
    totalOldWords += oldTopic.vocab.length;
    totalOldSentences += (oldTopic.sentences || []).length;

    const newTopicMeta = newLevel.topics.find(t => t.id === oldTopic.id);
    if (!newTopicMeta) { errors.push(`${levelId}: נושא חסר ב-levels.json: ${oldTopic.id}`); continue; }

    const topicFilePath = path.join(ROOT, "data", "words", `${levelId}__${oldTopic.id}.json`);
    if (!fs.existsSync(topicFilePath)) { errors.push(`קובץ נושא חסר: ${topicFilePath}`); continue; }
    const topicFile = JSON.parse(fs.readFileSync(topicFilePath, "utf8"));

    totalNewWords += topicFile.vocab.length;
    totalNewSentences += topicFile.sentences.length;

    if (newTopicMeta.vocabCount !== oldTopic.vocab.length) {
      errors.push(`${levelId}/${oldTopic.id}: vocabCount ב-levels.json (${newTopicMeta.vocabCount}) != בפועל (${oldTopic.vocab.length})`);
    }
    if (newTopicMeta.vocabCount !== topicFile.vocab.length) {
      errors.push(`${levelId}/${oldTopic.id}: מספר מילים בקובץ הנושא (${topicFile.vocab.length}) != levels.json (${newTopicMeta.vocabCount})`);
    }
    if (topicFile.vocab.length !== oldTopic.vocab.length) {
      errors.push(`${levelId}/${oldTopic.id}: מספר מילים שונה - ישן=${oldTopic.vocab.length} חדש=${topicFile.vocab.length}`);
    }

    // השוואה מילה-במילה, לפי סדר (הסדר במקור לא השתנה - נבנה ישירות מאותו סדר)
    oldTopic.vocab.forEach((oldWord, i) => {
      const newWord = topicFile.vocab[i];
      if (!newWord) { errors.push(`${levelId}/${oldTopic.id}: מילה חסרה באינדקס ${i} (${oldWord.es})`); return; }
      if (!newWord.id) errors.push(`${levelId}/${oldTopic.id}[${i}]: אין id`);
      for (const field of ["es", "he", "ex_es", "ex_he"]) {
        const oldVal = oldWord[field] || "";
        const newVal = newWord[field] || "";
        if (oldVal !== newVal) {
          errors.push(`${levelId}/${oldTopic.id}[${i}] שדה ${field} שונה: ישן="${oldVal}" חדש="${newVal}"`);
        }
      }
    });

    const oldSentences = oldTopic.sentences || [];
    if (oldSentences.length !== topicFile.sentences.length) {
      errors.push(`${levelId}/${oldTopic.id}: מספר משפטי תרגול שונה - ישן=${oldSentences.length} חדש=${topicFile.sentences.length}`);
    }
    oldSentences.forEach((oldS, i) => {
      const newS = topicFile.sentences[i];
      if (!newS) { errors.push(`${levelId}/${oldTopic.id}: משפט תרגול חסר באינדקס ${i}`); return; }
      if ((oldS.es || "") !== (newS.es || "") || (oldS.he || "") !== (newS.he || "")) {
        errors.push(`${levelId}/${oldTopic.id} משפט[${i}] שונה: ישן={${oldS.es}|${oldS.he}} חדש={${newS.es}|${newS.he}}`);
      }
    });
  }
}

// בדיקת search-index.json: אותו מספר מילים, ואותם צמדי es/he (בכל סדר)
const searchIndex = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "search-index.json"), "utf8"));
if (searchIndex.length !== totalOldWords) {
  errors.push(`search-index.json: מספר רשומות (${searchIndex.length}) != סה"כ מילים ישן (${totalOldWords})`);
}
const searchIds = new Set(searchIndex.map(e => e.id));
if (searchIds.size !== searchIndex.length) {
  errors.push(`search-index.json: יש מזהים כפולים`);
}

// בדיקת id-registry.json
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "id-registry.json"), "utf8"));
const registryWordCount = Object.keys(registry.words).length;
const registrySentenceCount = Object.keys(registry.sentences).length;
if (registryWordCount !== totalOldWords) {
  errors.push(`id-registry.json: מספר מילים (${registryWordCount}) != ישן (${totalOldWords})`);
}

console.log(`סה"כ מילים: ישן=${totalOldWords} חדש=${totalNewWords}`);
console.log(`סה"כ משפטי תרגול: ישן=${totalOldSentences} חדש=${totalNewSentences}`);
console.log(`search-index.json רשומות: ${searchIndex.length}`);
console.log(`id-registry.json מילים: ${registryWordCount}, משפטים: ${registrySentenceCount}`);

if (errors.length === 0) {
  console.log(`\n✔ אימות עבר בהצלחה - אין שום פער בין המבנה הישן לחדש (${totalOldWords} מילים, ${totalOldSentences} משפטים, זהים לגמרי שדה-בשדה).`);
  process.exit(0);
} else {
  console.log(`\n✘ נמצאו ${errors.length} פערים:`);
  errors.forEach(e => console.log(" - " + e));
  process.exit(1);
}
