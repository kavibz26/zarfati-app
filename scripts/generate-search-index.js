#!/usr/bin/env node
// בונה את js/data/search-index.js אוטומטית מתוך קבצי הנתונים לפי רמה (js/data/*.js) -
// לעולם לא נערך ביד, ולעולם לא מכיל מידע כפול למקור: רק שדות מינימליים למיון/חיפוש/ניווט
// (id, es, he, levelId, topicId, vocabIndex) - לא משפטי דוגמה, כדי שהאינדקס יישאר קטן וקל
// לטעינה גם כשמאגר המילים המלא יגדל לאלפי-עשרות אלפי מילים.
//
// הרצה: node scripts/generate-search-index.js
// יש להריץ מחדש בכל פעם שמתווספות/משתנות מילים ב-js/data/*.js (למשל אחרי ייבוא עם
// scripts/import-words.js, שכבר קורא לזה אוטומטית בסוף).

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(PROJECT_ROOT, "js", "data");
const LEVEL_FILES = ["beginner.js", "intermediate.js", "advanced.js", "grammar.js"];
const OUT_PATH = path.join(DATA_DIR, "search-index.js");

function loadLevels() {
  const combined = LEVEL_FILES
    .map(f => fs.readFileSync(path.join(DATA_DIR, f), "utf8"))
    .join("\n");
  const src = combined + `
LEVELS_FOR_INDEX_BUILD = {
  beginner: LEVEL_BEGINNER,
  intermediate: LEVEL_INTERMEDIATE,
  advanced: LEVEL_ADVANCED,
  grammar: LEVEL_GRAMMAR
};
module.exports = LEVELS_FOR_INDEX_BUILD;
`;
  const tmpPath = path.join(require("os").tmpdir(), "search_index_load.js");
  fs.writeFileSync(tmpPath, src);
  try {
    delete require.cache[require.resolve(tmpPath)];
    return require(tmpPath);
  } finally {
    fs.unlinkSync(tmpPath);
  }
}

function buildIndex(LEVELS) {
  const index = [];
  for (const level of Object.values(LEVELS)) {
    for (const topic of level.topics) {
      topic.vocab.forEach((v, vocabIndex) => {
        index.push({
          id: v.id || `${level.id}_${topic.id}_${vocabIndex}`,
          es: v.es,
          he: v.he,
          levelId: level.id,
          topicId: topic.id,
          vocabIndex
        });
      });
    }
  }
  return index;
}

function serializeEntry(e) {
  const esc = s => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `  { id: "${esc(e.id)}", es: "${esc(e.es)}", he: "${esc(e.he)}", levelId: "${esc(e.levelId)}", topicId: "${esc(e.topicId)}", vocabIndex: ${e.vocabIndex} }`;
}

function main() {
  const LEVELS = loadLevels();
  const index = buildIndex(LEVELS);
  const header = `// ===== אינדקס חיפוש - נוצר אוטומטית, אין לערוך ביד =====
// נבנה על ידי scripts/generate-search-index.js מתוך js/data/*.js - להריץ מחדש את הסקריפט
// הזה בכל פעם שהמאגר משתנה (ייבוא/עריכה), כדי שהאינדקס יישאר מסונכרן עם המקור. שדות
// מינימליים בלבד (בלי משפטי דוגמה) כדי שהאינדקס יישאר קטן וטעינתו תהיה מהירה גם במאגר גדול.
// לא נטען כרגע ב-index.html - עדיין אין תכונת חיפוש שצורכת אותו; קובץ מוכן לשימוש עתידי.
`;
  const body = `const SEARCH_INDEX = [\n${index.map(serializeEntry).join(",\n")}\n];\n`;
  fs.writeFileSync(OUT_PATH, header + body);
  console.log(`Wrote ${OUT_PATH} (${index.length} entries)`);
}

main();
