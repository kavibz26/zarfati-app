// שכבת תאימות לטעינה עצלה (Lazy Loading) של תוכן המילון מתוך data/levels.json + data/words/*.json.
// שלב זה בלבד: מודול עצמאי ותוסף - שום קוד קיים לא קורא לו עדיין. LEVELS הקיים (js/data/*.js,
// נטען עדיין דרך <script> רגילים ב-index.html) ממשיך לעבוד בדיוק כמו היום, ללא שום שינוי
// התנהגות. המטרה כאן: לספק מנגנון שמייצר, בעת הצורך, אובייקט רמה זהה במבנהו ל-LEVELS[id]
// הקיים (id/name/icon/color/topics[{id,name,vocab,sentences}]) - כדי שאפשר יהיה בעתיד לחבר
// אותו בפועל לקוד האפליקציה בהדרגה, נושא-אחר-נושא/פונקציה-אחר-פונקציה.
//
// caching: כל topic/level נטען מהרשת פעם אחת בלבד לכל טעינת עמוד - קריאות חוזרות מחזירות
// את אותו Promise/תוצאה, ולא מבצעות fetch נוסף.

(function () {
  let levelsMetaPromise = null;
  const topicCache = new Map(); // key: `${levelId}__${topicId}` -> Promise<{vocab, sentences}>
  const levelCache = new Map(); // key: levelId -> Promise<{id,name,icon,color,topics}>

  function loadLevelsMeta() {
    if (!levelsMetaPromise) {
      levelsMetaPromise = fetch("data/levels.json").then(r => r.json());
    }
    return levelsMetaPromise;
  }

  function loadTopic(levelId, topicId) {
    const key = `${levelId}__${topicId}`;
    if (!topicCache.has(key)) {
      topicCache.set(key, fetch(`data/words/${key}.json`).then(r => r.json()));
    }
    return topicCache.get(key);
  }

  async function loadLevel(levelId) {
    if (!levelCache.has(levelId)) {
      levelCache.set(levelId, (async () => {
        const meta = await loadLevelsMeta();
        const levelMeta = meta[levelId];
        if (!levelMeta) throw new Error(`רמה לא קיימת ב-data/levels.json: ${levelId}`);
        const topics = await Promise.all(levelMeta.topics.map(async (topicMeta) => {
          const topicData = await loadTopic(levelId, topicMeta.id);
          return { id: topicMeta.id, name: topicMeta.name, vocab: topicData.vocab, sentences: topicData.sentences };
        }));
        return { id: levelMeta.id, name: levelMeta.name, icon: levelMeta.icon, color: levelMeta.color, topics };
      })());
    }
    return levelCache.get(levelId);
  }

  const DictionaryLoader = { loadLevelsMeta, loadTopic, loadLevel };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = DictionaryLoader;
  } else {
    window.DictionaryLoader = DictionaryLoader;
  }
})();
