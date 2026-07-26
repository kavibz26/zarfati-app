// בדיקת אמת ל-js/dictionary-loader.js: מדמה fetch() בעזרת קריאת קבצי data/ מקומיים, טוען
// את המודול האמיתי (לא שכפול לוגיקה), ומשווה מילה-במילה בין מה שהוא מרכיב לבין LEVELS
// הקיים כפי שהוא נבנה היום בפועל מ-js/data/*.js. שום קוד באפליקציה לא קורא ל-loader הזה
// עדיין - הבדיקה הזו רק מוודאת שהמנגנון עצמו, במידה ונחבר אותו בעתיד, יפיק תוצאה זהה.
// מריצים: node scripts/test-lazy-loader.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

// fetch מדומה: "data/levels.json" / "data/words/x.json" -> קורא מהדיסק המקומי במקום מהרשת.
global.fetch = (url) => {
  const localPath = path.join(ROOT, url);
  return Promise.resolve({ json: () => Promise.resolve(JSON.parse(fs.readFileSync(localPath, "utf8"))) });
};

delete require.cache[require.resolve(path.join(ROOT, "js", "dictionary-loader.js"))];
const DictionaryLoader = require(path.join(ROOT, "js", "dictionary-loader.js"));

function loadLevelConstant(fileName, constName) {
  const src = fs.readFileSync(path.join(ROOT, "js", "data", fileName), "utf8");
  const wrapped = src + `\nmodule.exports = ${constName};\n`;
  const tmpPath = path.join(ROOT, "data", "source", `__tmp_loadertest_${constName}.js`);
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

let failures = [];
function assert(cond, label) {
  if (!cond) failures.push(label);
  console.log((cond ? "  ✔ " : "  ✘ ") + label);
}

async function main() {
  for (const levelId of Object.keys(OLD_LEVELS)) {
    console.log(`\nרמה: ${levelId}`);
    const oldLevel = OLD_LEVELS[levelId];
    const newLevel = await DictionaryLoader.loadLevel(levelId);

    assert(newLevel.id === oldLevel.id, "id הרמה תואם");
    assert(newLevel.name === oldLevel.name, "name הרמה תואם");
    assert(newLevel.icon === oldLevel.icon, "icon הרמה תואם");
    assert(newLevel.color === oldLevel.color, "color הרמה תואם");
    assert(newLevel.topics.length === oldLevel.topics.length,
      `מספר נושאים תואם (${oldLevel.topics.length})`);

    for (const oldTopic of oldLevel.topics) {
      const newTopic = newLevel.topics.find(t => t.id === oldTopic.id);
      if (!newTopic) { assert(false, `נושא חסר: ${oldTopic.id}`); continue; }
      assert(newTopic.name === oldTopic.name, `נושא ${oldTopic.id}: name תואם`);
      assert(newTopic.vocab.length === oldTopic.vocab.length,
        `נושא ${oldTopic.id}: מספר מילים תואם (${oldTopic.vocab.length})`);

      let vocabMismatch = false;
      oldTopic.vocab.forEach((oldWord, i) => {
        const newWord = newTopic.vocab[i];
        if (!newWord) { vocabMismatch = true; return; }
        for (const field of ["es", "he", "ex_es", "ex_he"]) {
          if ((oldWord[field] || "") !== (newWord[field] || "")) vocabMismatch = true;
        }
        if (!newWord.id) vocabMismatch = true;
      });
      assert(!vocabMismatch, `נושא ${oldTopic.id}: תוכן כל המילים (es/he/ex_es/ex_he) זהה, ולכולן יש id`);

      const oldSentences = oldTopic.sentences || [];
      assert((newTopic.sentences || []).length === oldSentences.length,
        `נושא ${oldTopic.id}: מספר משפטי תרגול תואם (${oldSentences.length})`);
      let sentenceMismatch = false;
      oldSentences.forEach((oldS, i) => {
        const newS = newTopic.sentences[i];
        if (!newS || (oldS.es || "") !== (newS.es || "") || (oldS.he || "") !== (newS.he || "")) sentenceMismatch = true;
      });
      assert(!sentenceMismatch, `נושא ${oldTopic.id}: תוכן כל משפטי התרגול (es/he) זהה`);
    }
  }

  // בדיקת caching: קריאה שנייה ל-loadLevel לא צריכה לגרום ל-fetch נוסף (אותו Promise/אובייקט מוחזר)
  let fetchCount = 0;
  const originalFetch = global.fetch;
  global.fetch = (...args) => { fetchCount++; return originalFetch(...args); };
  const first = await DictionaryLoader.loadLevel("beginner");
  const countAfterFirst = fetchCount; // אמור להיות 0 - כבר בקאש מהריצה למעלה
  const second = await DictionaryLoader.loadLevel("beginner");
  assert(fetchCount === countAfterFirst, "טעינה חוזרת של רמה שכבר נטענה לא מבצעת fetch נוסף (caching)");
  assert(first === second, "טעינה חוזרת מחזירה בדיוק את אותו אובייקט מהקאש");

  console.log("\n" + (failures.length === 0
    ? "✔ dictionary-loader.js מפיק תוצאה זהה לחלוטין ל-LEVELS הקיים, עבור כל 4 הרמות."
    : `✘ נכשלו ${failures.length} בדיקות:\n` + failures.map(f => " - " + f).join("\n")));
  process.exit(failures.length === 0 ? 0 : 1);
}

main();
