#!/usr/bin/env node
// מייבא מילים חדשות ממקור CSV או JSON חיצוני לתוך js/data/<level>.js המתאים, בלי לערוך
// שום קובץ JavaScript ביד. מוסיף בלבד - לא נוגע במילים קיימות. מריץ אוטומטית בסוף את
// scripts/generate-search-index.js כדי שהאינדקס יישאר מסונכרן.
//
// שימוש:
//   node scripts/import-words.js path/to/words.json
//   node scripts/import-words.js path/to/words.csv
//   node scripts/import-words.js path/to/words.json --dry-run   (מציג מה ייכנס, לא כותב כלום)
//
// שדות בכל שורה/רשומה: level, topic, es, he (חובה) | topicName, ex_es, ex_he (אופציונלי -
// topicName נדרש רק אם topic הוא מזהה של נושא חדש שעדיין לא קיים ברמה).
// level חייב להיות אחד מ: beginner, intermediate, advanced, grammar.

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(PROJECT_ROOT, "js", "data");
const LEVEL_VAR_NAMES = {
  beginner: "LEVEL_BEGINNER",
  intermediate: "LEVEL_INTERMEDIATE",
  advanced: "LEVEL_ADVANCED",
  grammar: "LEVEL_GRAMMAR"
};
const VALID_LEVELS = Object.keys(LEVEL_VAR_NAMES);

// ---------- קלט: CSV / JSON ----------
function parseCsvLine(line) {
  const fields = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { cur += c; }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") { fields.push(cur); cur = ""; }
      else cur += c;
    }
  }
  fields.push(cur);
  return fields;
}
function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== "");
  const header = parseCsvLine(lines[0]).map(h => h.trim());
  return lines.slice(1).map(line => {
    const values = parseCsvLine(line);
    const row = {};
    header.forEach((h, i) => { row[h] = (values[i] || "").trim(); });
    return row;
  });
}
function loadRows(inputPath) {
  const raw = fs.readFileSync(inputPath, "utf8");
  if (inputPath.endsWith(".json")) return JSON.parse(raw);
  if (inputPath.endsWith(".csv")) return parseCsv(raw);
  throw new Error("קובץ קלט חייב להיות .json או .csv");
}

// ---------- טעינת/סריאליזציה של קובץ רמה (אותו מבנה כמו scripts/generate-search-index.js) ----------
function loadLevel(levelId) {
  const filePath = path.join(DATA_DIR, `${levelId}.js`);
  const src = fs.readFileSync(filePath, "utf8") + `\nmodule.exports = ${LEVEL_VAR_NAMES[levelId]};\n`;
  const tmpPath = path.join(require("os").tmpdir(), `import_load_${levelId}.js`);
  fs.writeFileSync(tmpPath, src);
  try {
    delete require.cache[require.resolve(tmpPath)];
    return require(tmpPath);
  } finally {
    fs.unlinkSync(tmpPath);
  }
}
function esc(s) { return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"'); }
function q(s) { return `"${esc(s)}"`; }
function serializeVocabEntry(v, indent) {
  const parts = [`id: ${q(v.id)}`, `es: ${q(v.es)}`, `he: ${q(v.he)}`];
  if (v.ex_es) parts.push(`ex_es: ${q(v.ex_es)}`);
  if (v.ex_he) parts.push(`ex_he: ${q(v.ex_he)}`);
  return `${indent}{ ${parts.join(", ")} }`;
}
function serializeSentenceEntry(s, indent) {
  return `${indent}{ es: ${q(s.es)}, he: ${q(s.he)} }`;
}
function serializeTopic(topic, levelId, indent) {
  const i2 = indent + "  ";
  const i3 = i2 + "  ";
  let out = `${indent}{\n${i2}id: ${q(topic.id)},\n${i2}name: ${q(topic.name)},\n${i2}vocab: [\n`;
  out += topic.vocab.map((v, idx) =>
    serializeVocabEntry(Object.assign({}, v, { id: `${levelId}_${topic.id}_${idx}` }), i3)
  ).join(",\n");
  out += `\n${i2}]`;
  if (topic.sentences && topic.sentences.length) {
    out += `,\n${i2}sentences: [\n` + topic.sentences.map(s => serializeSentenceEntry(s, i3)).join(",\n") + `\n${i2}]`;
  }
  out += `\n${indent}}`;
  return out;
}
function serializeLevel(level, varName) {
  const i1 = "  ";
  let out = `const ${varName} = {\n${i1}id: ${q(level.id)},\n${i1}name: ${q(level.name)},\n${i1}icon: ${q(level.icon)},\n${i1}color: ${q(level.color)},\n${i1}topics: [\n`;
  out += level.topics.map(t => serializeTopic(t, level.id, i1 + "  ")).join(",\n");
  out += `\n${i1}]\n};\n`;
  return out;
}
function writeLevel(levelId, level) {
  const header = `// ===== נתוני רמת "${level.name}" =====\n// קובץ זה הוא חלק ממאגר הנתונים המפוצל (ראו js/data.js למאסף). אותה צורת נתונים בדיוק כמו\n// שהייתה מקוננת בעבר בתוך data.js אחד - LEVELS.${levelId} ימשיך להצביע לאותו תוכן.\n\n`;
  fs.writeFileSync(path.join(DATA_DIR, `${levelId}.js`), header + serializeLevel(level, LEVEL_VAR_NAMES[levelId]));
}

// ---------- ולידציה + ייבוא ----------
function main() {
  const args = process.argv.slice(2);
  const inputPath = args.find(a => !a.startsWith("--"));
  const dryRun = args.includes("--dry-run");
  if (!inputPath) {
    console.error("שימוש: node scripts/import-words.js <path/to/words.json|csv> [--dry-run]");
    process.exit(1);
  }

  const rows = loadRows(inputPath);
  const errors = [];
  rows.forEach((r, i) => {
    if (!VALID_LEVELS.includes(r.level)) errors.push(`שורה ${i + 1}: level "${r.level}" לא תקין (חייב להיות אחד מ-${VALID_LEVELS.join("/")})`);
    if (!r.topic) errors.push(`שורה ${i + 1}: חסר topic`);
    if (!r.es) errors.push(`שורה ${i + 1}: חסר es`);
    if (!r.he) errors.push(`שורה ${i + 1}: חסר he`);
  });
  if (errors.length) {
    console.error(`נמצאו ${errors.length} שגיאות בקובץ הקלט - הייבוא לא בוצע:`);
    errors.forEach(e => console.error(" -", e));
    process.exit(1);
  }

  const byLevel = {};
  rows.forEach(r => { (byLevel[r.level] = byLevel[r.level] || []).push(r); });

  let totalAdded = 0, totalSkipped = 0, newTopics = 0;
  const summary = [];

  for (const [levelId, levelRows] of Object.entries(byLevel)) {
    const level = loadLevel(levelId);
    for (const r of levelRows) {
      let topic = level.topics.find(t => t.id === r.topic);
      if (!topic) {
        if (!r.topicName) {
          errors.push(`נושא חדש "${r.topic}" ברמה "${levelId}" דורש שדה topicName - דולג`);
          totalSkipped++;
          continue;
        }
        topic = { id: r.topic, name: r.topicName, vocab: [], sentences: [] };
        level.topics.push(topic);
        newTopics++;
      }
      const isDuplicate = topic.vocab.some(v => v.es.trim().toLowerCase() === r.es.trim().toLowerCase());
      if (isDuplicate) {
        totalSkipped++;
        summary.push(`  ⚠ דולג (כבר קיים): ${levelId}/${topic.id} - "${r.es}"`);
        continue;
      }
      topic.vocab.push({ es: r.es, he: r.he, ex_es: r.ex_es || "", ex_he: r.ex_he || "" });
      totalAdded++;
      summary.push(`  + ${levelId}/${topic.id}: "${r.es}" → "${r.he}"`);
    }
    if (!dryRun) writeLevel(levelId, level);
  }

  console.log(summary.join("\n"));
  console.log(`\n${dryRun ? "[DRY RUN - לא נכתב כלום] " : ""}נוספו ${totalAdded} מילים, דולגו ${totalSkipped} (כפילויות/שגיאות), ${newTopics} נושאים חדשים נוצרו.`);

  if (!dryRun && totalAdded > 0) {
    console.log("\nמריץ מחדש את בניית אינדקס החיפוש...");
    require("./generate-search-index.js");
  }
}

main();
