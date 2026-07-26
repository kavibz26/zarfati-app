// כלי עזר מינימליים לקידוד/פענוח CSV (RFC 4180-ish) - בלי תלות בחבילה חיצונית.
// חשוב: טקסט בעברית/ספרדית באפליקציה הזו מכיל פסיקים בתוך משפטי הדוגמה (למשל
// "Hola, ¿cómo estás?"), אז אי אפשר לפצל לפי פסיק בצורה נאיבית - כל שדה עם פסיק/מרכאות/
// שורה חדשה עוטפים במרכאות כפולות, ומרכאות פנימיות מוכפלות (הסטנדרט הרגיל).

function csvEscapeField(value) {
  const s = value === undefined || value === null ? "" : String(value);
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function rowsToCsv(headers, rows) {
  const lines = [headers.map(csvEscapeField).join(",")];
  for (const row of rows) {
    lines.push(headers.map(h => csvEscapeField(row[h])).join(","));
  }
  return lines.join("\r\n") + "\r\n";
}

// פרסר CSV פשוט אך תקין (תומך במרכאות עם פסיקים/שורות חדשות בתוכן, ובמרכאות כפולות בורחות).
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;
  const len = text.length;
  while (i < len) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"') { inQuotes = true; i++; continue; }
    if (c === ",") { row.push(field); field = ""; i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
    field += c; i++;
  }
  if (field !== "" || row.length > 0) { row.push(field); rows.push(row); }
  // מסיר שורות ריקות לגמרי (למשל שורה אחרונה ריקה בסוף קובץ)
  const nonEmpty = rows.filter(r => !(r.length === 1 && r[0] === ""));
  if (nonEmpty.length === 0) return { headers: [], records: [] };
  const headers = nonEmpty[0];
  const records = nonEmpty.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, idx) => { obj[h] = r[idx] !== undefined ? r[idx] : ""; });
    return obj;
  });
  return { headers, records };
}

module.exports = { csvEscapeField, rowsToCsv, parseCsv };
