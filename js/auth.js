// ===== גשר בין Firebase לבין app.js =====
// טעון כמודול ES (type="module"), לכן רץ בנפרד מהסקריפטים הרגילים ומדבר איתם
// דרך window.HablaAuth ואירוע "hablaAuthReady".
//
// שם המשתמש הופך לכתובת אימייל פנימית (username@habla-app.local) והקוד הסודי
// הופך לסיסמה (עם תוספת קבועה, כי Firebase דורש סיסמה בת 6 תווים לפחות).
// זו טכניקה להשתמש ב-Firebase Auth האמיתי (hashing מקצועי, אכיפת ייחודיות מובנית,
// בלי לבנות/לאחסן שום דבר בעצמנו) בלי צורך ב-Cloud Functions (שדורשים תוכנית בתשלום).
// המשתמש עצמו אף פעם לא רואה או מקליד אימייל - התרגום קורה כאן בלבד ולא יוצא מהקובץ הזה.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// ערכי הפרויקט האמיתי מ-Firebase Console -> הגדרות הפרויקט -> אפליקציית ווב.
// הערכים האלה אינם סוד (הם תמיד גלויים בכל אתר Firebase) - ההגנה האמיתית היא ב-Security Rules.
const firebaseConfig = {
  apiKey: "AIzaSyAsvnWOf65QE2MJfu9H4xrHVvcEbjnrwjE",
  authDomain: "project-ea04a538-03f1-4991-946.firebaseapp.com",
  projectId: "project-ea04a538-03f1-4991-946",
  storageBucket: "project-ea04a538-03f1-4991-946.firebasestorage.app",
  messagingSenderId: "474658120270",
  appId: "1:474658120270:web:a208f41685b061eeebd91f"
};

const EMAIL_DOMAIN = "habla-app.local";
const PASSWORD_SUFFIX = "-Hb!x9Q2";

function usernameToEmail(username) {
  return `${username.trim().toLowerCase()}@${EMAIL_DOMAIN}`;
}
function pinToPassword(pin) {
  return `${pin}${PASSWORD_SUFFIX}`;
}

let auth = null;
let db = null;
try {
  const fbApp = initializeApp(firebaseConfig);
  auth = getAuth(fbApp);
  db = getFirestore(fbApp);
} catch (e) {
  console.warn("Firebase לא אותחל (בדוק את firebaseConfig ב-js/auth.js):", e);
}

async function fetchProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// legacyData אופציונלי: { progress, learned, wordStats } שהתקבלו מנתוני localStorage ישנים,
// כדי לא לאבד התקדמות שנצברה לפני שהייתה מערכת חשבונות.
async function signUp(username, pin, gender, legacyData) {
  const email = usernameToEmail(username);
  const password = pinToPassword(pin);
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;
  const profile = {
    username: username.trim(),
    gender,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    progress: (legacyData && legacyData.progress) || {},
    learned: (legacyData && legacyData.learned) || [],
    wordStats: (legacyData && legacyData.wordStats) || {}
  };
  await setDoc(doc(db, "users", uid), profile);
  return { uid, username: profile.username, profile };
}

async function logIn(username, pin) {
  const email = usernameToEmail(username);
  const password = pinToPassword(pin);
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;
  const profile = await fetchProfile(uid);
  return { uid, username: (profile && profile.username) || username, profile };
}

async function logOut() {
  await signOut(auth);
}

// כתיבה ברקע (לא חוסמת) - אם היא נכשלת (רשת וכו') הנתון המקומי לא בסיכון, ננסה שוב בפעם הבאה
async function pushUserData(uid, partial) {
  if (!db || !uid) return;
  try {
    await setDoc(doc(db, "users", uid), { ...partial, updatedAt: serverTimestamp() }, { merge: true });
  } catch (e) {
    console.warn("סנכרון לענן נכשל (הנתון המקומי נשמר כרגיל):", e);
  }
}

if (auth) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      let profile = null;
      try { profile = await fetchProfile(user.uid); } catch (e) { console.warn("שליפת פרופיל נכשלה:", e); }
      window.dispatchEvent(new CustomEvent("hablaAuthReady", { detail: { user: { uid: user.uid }, profile } }));
    } else {
      window.dispatchEvent(new CustomEvent("hablaAuthReady", { detail: { user: null, profile: null } }));
    }
  });
} else {
  // Firebase לא הוגדר - לא משאירים את המשתמש תקוע במסך טעינה לנצח
  window.dispatchEvent(new CustomEvent("hablaAuthReady", { detail: { user: null, profile: null } }));
}

window.HablaAuth = { signUp, logIn, logOut, pushUserData };
