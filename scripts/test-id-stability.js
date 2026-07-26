// בדיקת עמידות מזהים (id) - מריצה את scripts/generate-dictionary.js האמיתי (לא שכפול
// לוגיקה) על עותקי-ארגז-חול זמניים של קובצי המקור, כדי לאמת בפועל, מקצה לקצה:
//   1. כל id ייחודי לחלוטין.
//   2. id נשאר זהה גם אם משנים את סדר השורות ב-CSV.
//   3. id נשאר זהה גם אם משנים תרגום/משפט דוגמה/נושא/רמה של אותה מילה.
//   4. רק שורה חדשה עם id ריק מקבלת מזהה חדש; כל שאר המזהים הקיימים לא זזים.
//
// עובד אך ורק על עותקים בתיקיית ארגז-חול זמנית - לא נוגע בשום קובץ אמיתי תחת data/.
// מריצים: node scripts/test-id-stability.js

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");
const { parseCsv, rowsToCsv } = require("./csv-utils");

const ROOT = path.join(__dirname, "..");
const REAL_SOURCE_DIR = path.join(ROOT, "data", "source");
const GENERATOR = path.join(__dirname, "generate-dictionary.js");

const SANDBOX_ROOT = fs.mkdtempSync(path.join(os.tmpdir(), "habla-id-stability-"));
let failures = [];

function assert(cond, label) {
  if (!cond) failures.push(label);
  console.log((cond ? "  ✔ " : "  ✘ ") + label);
}

function makeSandbox(name) {
  const sourceDir = path.join(SANDBOX_ROOT, name, "source");
  const outDir = path.join(SANDBOX_ROOT, name, "out");
  fs.mkdirSync(sourceDir, { recursive: true });
  fs.mkdirSync(outDir, { recursive: true });
  for (const f of ["words.csv", "sentences.csv", "levels-meta.json"]) {
    fs.copyFileSync(path.join(REAL_SOURCE_DIR, f), path.join(sourceDir, f));
  }
  return { sourceDir, outDir };
}

function runGenerator(sourceDir, outDir) {
  return execFileSync("node", [GENERATOR], {
    cwd: ROOT,
    env: { ...process.env, HABLA_SOURCE_DIR: sourceDir, HABLA_OUT_DIR: outDir },
    encoding: "utf8"
  });
}

function readCsv(sourceDir, name) {
  return parseCsv(fs.readFileSync(path.join(sourceDir, name), "utf8"));
}
function writeCsv(sourceDir, name, headers, records) {
  fs.writeFileSync(path.join(sourceDir, name), rowsToCsv(headers, records), "utf8");
}

function loadSearchIndexMap(outDir) {
  const idx = JSON.parse(fs.readFileSync(path.join(outDir, "search-index.json"), "utf8"));
  const map = new Map();
  for (const e of idx) map.set(e.id, { es: e.es, he: e.he, levelId: e.levelId, topicId: e.topicId });
  return map;
}
function mapsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const [k, v] of a) {
    const v2 = b.get(k);
    if (!v2) return false;
    if (JSON.stringify(v) !== JSON.stringify(v2)) return false;
  }
  return true;
}

console.log("ארגז חול זמני: " + SANDBOX_ROOT + "\n");

// ===== בדיקה 1: ייחודיות מוחלטת (על הנתונים האמיתיים כפי שהם היום) =====
console.log("בדיקה 1: ייחודיות מלאה של כל ה-id-ים");
{
  const { records: words } = readCsv(REAL_SOURCE_DIR, "words.csv");
  const { records: sentences } = readCsv(REAL_SOURCE_DIR, "sentences.csv");
  const wordIds = words.map(r => r.id);
  const sentenceIds = sentences.map(r => r.id);
  assert(new Set(wordIds).size === wordIds.length, `כל ${wordIds.length} מזהי המילים ב-words.csv ייחודיים`);
  assert(new Set(sentenceIds).size === sentenceIds.length, `כל ${sentenceIds.length} מזהי המשפטים ב-sentences.csv ייחודיים`);
  assert(wordIds.every(id => /^w\d{6}$/.test(id)), "כל מזהי המילים בפורמט wNNNNNN");
  assert(sentenceIds.every(id => /^s\d{6}$/.test(id)), "כל מזהי המשפטים בפורמט sNNNNNN");
}

// ===== בדיקה 2: שינוי סדר השורות ב-CSV לא משנה שום id =====
console.log("\nבדיקה 2: שינוי סדר שורות ה-CSV לא משנה id-ים או תוכן");
{
  const baseline = makeSandbox("reorder-baseline");
  const shuffled = makeSandbox("reorder-shuffled");

  // מערבב את סדר שורות ה-CSV (Fisher-Yates, seed קבוע לשחזוריות)
  function shuffle(arr, seed) {
    const a = arr.slice();
    let s = seed;
    const rand = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const { headers: wH, records: wRecs } = readCsv(shuffled.sourceDir, "words.csv");
  writeCsv(shuffled.sourceDir, "words.csv", wH, shuffle(wRecs, 42));
  const { headers: sH, records: sRecs } = readCsv(shuffled.sourceDir, "sentences.csv");
  writeCsv(shuffled.sourceDir, "sentences.csv", sH, shuffle(sRecs, 99));

  runGenerator(baseline.sourceDir, baseline.outDir);
  runGenerator(shuffled.sourceDir, shuffled.outDir);

  const mapBaseline = loadSearchIndexMap(baseline.outDir);
  const mapShuffled = loadSearchIndexMap(shuffled.outDir);
  assert(mapsEqual(mapBaseline, mapShuffled), `כל ${mapBaseline.size} ה-id-ים ותוכנם זהים לגמרי גם אחרי ערבוב סדר השורות ב-CSV`);

  const regBaseline = JSON.parse(fs.readFileSync(path.join(baseline.outDir, "id-registry.json"), "utf8"));
  const regShuffled = JSON.parse(fs.readFileSync(path.join(shuffled.outDir, "id-registry.json"), "utf8"));
  assert(JSON.stringify(regBaseline.words, Object.keys(regBaseline.words).sort()) ===
         JSON.stringify(regShuffled.words, Object.keys(regShuffled.words).sort()),
         "id-registry.json (מילים) זהה בין הריצה הבסיסית לזו עם הסדר המעורבב");
}

// ===== בדיקה 3: שינוי תרגום/משפט/נושא/רמה של מילה קיימת לא יוצר id חדש =====
console.log("\nבדיקה 3: עריכת תוכן מילה קיימת (תרגום, משפט דוגמה, נושא) שומרת על אותו id");
{
  const sb = makeSandbox("content-edit");
  const { headers, records } = readCsv(sb.sourceDir, "words.csv");

  const idsBefore = new Set(records.map(r => r.id));
  const target = records[0];
  const originalId = target.id;
  const originalTopicId = target.topicId;
  const sameLevel = records.find(r => r.levelId === target.levelId && r.topicId !== target.topicId);
  const newTopicId = sameLevel ? sameLevel.topicId : target.topicId;

  target.he = target.he + " (בדיקה-עריכה)";
  target.ex_es = target.ex_es + " (edited)";
  target.topicId = newTopicId;
  writeCsv(sb.sourceDir, "words.csv", headers, records);

  runGenerator(sb.sourceDir, sb.outDir);

  const { records: after } = readCsv(sb.sourceDir, "words.csv");
  const idsAfter = new Set(after.map(r => r.id));
  assert(idsAfter.size === idsBefore.size && [...idsBefore].every(id => idsAfter.has(id)),
    "כל המזהים הקיימים (כולל זה שנערך) נותרו בדיוק כשהיו - לא נוצר id חדש בעקבות עריכת תוכן");

  const searchMap = loadSearchIndexMap(sb.outDir);
  const entry = searchMap.get(originalId);
  assert(!!entry, `ה-id המקורי (${originalId}) עדיין קיים ב-search-index.json אחרי העריכה`);
  assert(entry && entry.he.endsWith("(בדיקה-עריכה)"), "התרגום המעודכן (he) מופיע תחת אותו id");
  assert(entry && entry.topicId === newTopicId && newTopicId !== originalTopicId,
    `המילה עברה לנושא אחר (${originalTopicId} -> ${newTopicId}) ועדיין תחת אותו id`);
}

// ===== בדיקה 4: רק שורה חדשה עם id ריק מקבלת מזהה חדש; שאר המזהים לא זזים =====
console.log("\nבדיקה 4: רק שורה חדשה (id ריק) מקבלת מזהה חדש; כל שאר המזהים משתמרים בדיוק");
{
  const sb = makeSandbox("new-row");
  const { headers, records } = readCsv(sb.sourceDir, "words.csv");
  const idsBefore = new Set(records.map(r => r.id));
  const anyRow = records[0];

  records.push({
    id: "",
    es: "PruebaNueva",
    he: "מילת-בדיקה-חדשה",
    ex_es: "Esto es una prueba.",
    ex_he: "זה מבחן.",
    levelId: anyRow.levelId,
    topicId: anyRow.topicId,
    topicName: anyRow.topicName
  });
  writeCsv(sb.sourceDir, "words.csv", headers, records);

  runGenerator(sb.sourceDir, sb.outDir);

  const { records: after } = readCsv(sb.sourceDir, "words.csv");
  const idsAfter = after.map(r => r.id);
  assert(idsAfter.length === idsBefore.size + 1, "נוספה בדיוק שורה אחת חדשה ל-CSV");
  assert([...idsBefore].every(id => idsAfter.includes(id)), "כל המזהים הקודמים נשארו בדיוק כפי שהיו (לא הוקצו מחדש)");

  const newIds = idsAfter.filter(id => !idsBefore.has(id));
  assert(newIds.length === 1, "בדיוק id חדש אחד נוצר עבור השורה החדשה");
  assert(newIds[0] && /^w\d{6}$/.test(newIds[0]) && !idsBefore.has(newIds[0]),
    `ה-id החדש (${newIds[0]}) בפורמט תקין ולא מתנגש עם מזהה קיים`);

  // הרצה שנייה על אותו ארגז-חול (עכשיו כבר אין שורות ריקות) - מוודאת יציבות/אידמפוטנטיות
  const idsAfterFirstRun = idsAfter.slice();
  runGenerator(sb.sourceDir, sb.outDir);
  const { records: afterSecondRun } = readCsv(sb.sourceDir, "words.csv");
  const idsAfterSecondRun = afterSecondRun.map(r => r.id);
  assert(JSON.stringify(idsAfterFirstRun) === JSON.stringify(idsAfterSecondRun),
    "הרצה חוזרת של הסקריפט (אחרי שכל השורות כבר קיבלו id) לא משנה אף מזהה");
}

// ===== ניקוי ארגז החול =====
fs.rmSync(SANDBOX_ROOT, { recursive: true, force: true });

console.log("\n" + (failures.length === 0
  ? `✔ כל בדיקות עמידות ה-id עברו בהצלחה (ייחודיות, עמידות לסדר, עמידות לעריכת תוכן, הקצאה נכונה לשורות חדשות בלבד).`
  : `✘ נכשלו ${failures.length} בדיקות:\n` + failures.map(f => " - " + f).join("\n")));
process.exit(failures.length === 0 ? 0 : 1);
