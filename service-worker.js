// Service Worker לתמיכה אופליין.
// אסטרטגיה: cache-first לכל קבצי האפליקציה (HTML/CSS/JS/אייקונים) - כמו קודם, מתעדכן
// כשמעלים CACHE_NAME. אבל data/** (מאגר המילים - levels.json, search-index.json,
// id-registry.json, words/*.json) הוא network-first עם fallback ל-cache: תמיד מנסים רשת
// קודם כדי לקבל תוכן מילון עדכני מיד (בלי לחכות ל-bump ידני של CACHE_NAME בכל הוספת
// נושא/מילה), ורק אם אין רשת (אופליין) נופלים חזרה לעותק האחרון שהצליח להיטען. כל בקשת
// data/** שמצליחה מעדכנת את ה-cache, כך שהעותק האופליין תמיד הוא הגרסה העדכנית ביותר
// שנטענה בהצלחה - לא צריך למנות כל קובץ נושא ב-PRECACHE_URLS מראש; ה-cache נבנה בהדרגה
// תוך כדי גלישה בפועל.
// לא נוגע ב-localStorage או במנגנון ההתקדמות של האפליקציה בשום צורה.

const CACHE_NAME = "habla-cache-v25";
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/dictionary-loader.js",
  "./js/app.js",
  "./js/auth.js",
  "./manifest.json",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

function isDictionaryDataRequest(request) {
  return new URL(request.url).pathname.includes("/data/");
}

// network-first: תמיד מנסים רשת קודם (תוכן עדכני), מעדכנים cache בכל הצלחה, ורק בכשל
// (אופליין) נופלים חזרה לעותק האחרון שהצליח להיטען.
function networkFirst(event) {
  return fetch(event.request)
    .then((response) => {
      if (response && response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
      }
      return response;
    })
    .catch(() => caches.match(event.request));
}

// cache-first: כמו קודם - למשאבי האפליקציה (HTML/CSS/JS/אייקונים), שמתעדכנים דרך bump
// ל-CACHE_NAME ולא צריכים בדיקת רשת בכל טעינה.
function cacheFirst(event) {
  return caches.match(event.request).then((cached) => {
    if (cached) return cached;
    return fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => cached);
  });
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(isDictionaryDataRequest(event.request) ? networkFirst(event) : cacheFirst(event));
});
