// Service Worker לתמיכה אופליין - אסטרטגיית cache-first עם fallback לרשת.
// לא נוגע ב-localStorage או במנגנון ההתקדמות של האפליקציה בשום צורה.

const CACHE_NAME = "habla-cache-v22";
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/dictionary-loader.js",
  "./js/app.js",
  "./js/auth.js",
  "./manifest.json",
  "./data/levels.json",
  "./data/words/beginner__greetings.json",
  "./data/words/beginner__numbers.json",
  "./data/words/beginner__colors.json",
  "./data/words/beginner__family.json",
  "./data/words/beginner__food.json",
  "./data/words/beginner__basic_verbs.json",
  "./data/words/beginner__travel.json",
  "./data/words/beginner__home.json",
  "./data/words/beginner__days_time.json",
  "./data/words/intermediate__present_regular.json",
  "./data/words/intermediate__preterito.json",
  "./data/words/intermediate__adjectives.json",
  "./data/words/intermediate__home_routine.json",
  "./data/words/intermediate__work_professions.json",
  "./data/words/intermediate__directions.json",
  "./data/words/intermediate__travel.json",
  "./data/words/intermediate__emotions.json",
  "./data/words/intermediate__daily_conversations.json",
  "./data/words/intermediate__common_verbs_2.json",
  "./data/words/advanced__business_vocab.json",
  "./data/words/advanced__subjuntivo.json",
  "./data/words/advanced__idioms.json",
  "./data/words/advanced__past_tenses.json",
  "./data/words/advanced__formal_writing.json",
  "./data/words/advanced__news_opinions.json",
  "./data/words/advanced__travel.json",
  "./data/words/advanced__advanced_vocab.json",
  "./data/words/advanced__natural_expressions.json",
  "./data/words/grammar__pronouns.json",
  "./data/words/grammar__common_verbs.json",
  "./data/words/grammar__basic_conjugation.json",
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

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
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
    })
  );
});
