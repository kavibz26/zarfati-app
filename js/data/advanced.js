// ===== נתוני רמת "מתקדמים" =====
// קובץ זה הוא חלק ממאגר הנתונים המפוצל (ראו js/data.js למאסף). אותה צורת נתונים בדיוק כמו
// שהייתה מקוננת בעבר בתוך data.js אחד - LEVELS.advanced ימשיך להצביע לאותו תוכן.

const LEVEL_ADVANCED = {
  id: "advanced",
  name: "מתקדמים",
  icon: "🏆",
  color: "#a855f7",
  topics: [
    {
      id: "business_vocab",
      name: "אוצר מילים עסקי",
      vocab: [
        { id: "advanced_business_vocab_0", es: "La negociación", he: "המשא ומתן", ex_es: "La negociación duró horas.", ex_he: "המשא ומתן נמשך שעות." },
        { id: "advanced_business_vocab_1", es: "El presupuesto", he: "התקציב", ex_es: "El presupuesto es limitado.", ex_he: "התקציב מוגבל." },
        { id: "advanced_business_vocab_2", es: "La inversión", he: "ההשקעה", ex_es: "Hicieron una gran inversión.", ex_he: "הם ביצעו השקעה גדולה." },
        { id: "advanced_business_vocab_3", es: "Los beneficios", he: "הרווחים", ex_es: "Los beneficios aumentaron este año.", ex_he: "הרווחים גדלו השנה." },
        { id: "advanced_business_vocab_4", es: "La junta directiva", he: "דירקטוריון", ex_es: "La junta directiva se reunió ayer.", ex_he: "הדירקטוריון התכנס אתמול." },
        { id: "advanced_business_vocab_5", es: "El contrato", he: "החוזה", ex_es: "Firmamos el contrato hoy.", ex_he: "חתמנו על החוזה היום." },
        { id: "advanced_business_vocab_6", es: "La estrategia", he: "האסטרטגיה", ex_es: "Necesitamos una nueva estrategia.", ex_he: "אנחנו צריכים אסטרטגיה חדשה." },
        { id: "advanced_business_vocab_7", es: "El competidor", he: "המתחרה", ex_es: "Nuestro competidor bajó los precios.", ex_he: "המתחרה שלנו הוריד מחירים." },
        { id: "advanced_business_vocab_8", es: "La fusión", he: "המיזוג", ex_es: "La fusión de empresas fue exitosa.", ex_he: "מיזוג החברות הצליח." },
        { id: "advanced_business_vocab_9", es: "Los accionistas", he: "בעלי המניות", ex_es: "Los accionistas votaron a favor.", ex_he: "בעלי המניות הצביעו בעד." },
        { id: "advanced_business_vocab_10", es: "El margen de beneficio", he: "שולי הרווח", ex_es: "El margen de beneficio bajó este trimestre.", ex_he: "שולי הרווח ירדו ברבעון הזה." },
        { id: "advanced_business_vocab_11", es: "La cadena de suministro", he: "שרשרת האספקה", ex_es: "La cadena de suministro se vio afectada.", ex_he: "שרשרת האספקה נפגעה." },
        { id: "advanced_business_vocab_12", es: "El informe trimestral", he: "הדוח הרבעוני", ex_es: "Presentamos el informe trimestral mañana.", ex_he: "נציג את הדוח הרבעוני מחר." },
        { id: "advanced_business_vocab_13", es: "Escalar el negocio", he: "להרחיב את העסק", ex_es: "Queremos escalar el negocio a nivel internacional.", ex_he: "אנחנו רוצים להרחיב את העסק ברמה בינלאומית." },
        { id: "advanced_business_vocab_14", es: "El plazo de entrega", he: "מועד האספקה", ex_es: "El plazo de entrega es muy ajustado.", ex_he: "מועד האספקה מאוד צפוף." }
      ],
      sentences: [
        { es: "La junta directiva aprobó el nuevo presupuesto.", he: "הדירקטוריון אישר את התקציב החדש." },
        { es: "Firmamos el contrato después de una larga negociación.", he: "חתמנו על החוזה אחרי משא ומתן ארוך." },
        { es: "Los accionistas exigen mayores beneficios.", he: "בעלי המניות דורשים רווחים גדולים יותר." },
        { es: "Nuestra estrategia debe considerar al competidor.", he: "האסטרטגיה שלנו חייבת להתחשב במתחרה." },
        { es: "La fusión creará la empresa más grande del sector.", he: "המיזוג ייצור את החברה הגדולה ביותר בענף." },
        { es: "El margen de beneficio mejoró gracias a la nueva estrategia.", he: "שולי הרווח השתפרו הודות לאסטרטגיה החדשה." },
        { es: "La cadena de suministro global sigue afectada por la crisis.", he: "שרשרת האספקה הגלובלית עדיין מושפעת מהמשבר." },
        { es: "Necesitamos cumplir con el plazo de entrega.", he: "אנחנו צריכים לעמוד במועד האספקה." }
      ]
    },
    {
      id: "subjuntivo",
      name: "Subjuntivo - מצב רוח תלוי",
      vocab: [
        { id: "advanced_subjuntivo_0", es: "Espero que vengas", he: "אני מקווה שתבוא", ex_es: "Espero que vengas a la fiesta.", ex_he: "אני מקווה שתבוא למסיבה." },
        { id: "advanced_subjuntivo_1", es: "Quiero que sepas", he: "אני רוצה שתדע", ex_es: "Quiero que sepas la verdad.", ex_he: "אני רוצה שתדע את האמת." },
        { id: "advanced_subjuntivo_2", es: "Es importante que estudies", he: "חשוב שתלמד", ex_es: "Es importante que estudies para el examen.", ex_he: "חשוב שתלמד למבחן." },
        { id: "advanced_subjuntivo_3", es: "Dudo que sea verdad", he: "אני מסופק שזה נכון", ex_es: "Dudo que sea verdad.", ex_he: "אני מסופק שזה נכון." },
        { id: "advanced_subjuntivo_4", es: "Ojalá que llueva", he: "הלוואי וירד גשם", ex_es: "Ojalá que llueva mañana.", ex_he: "הלוואי וירד גשם מחר." },
        { id: "advanced_subjuntivo_5", es: "No creo que pueda", he: "אני לא חושב שהוא/היא יכול/ה", ex_es: "No creo que pueda venir.", ex_he: "אני לא חושב שהוא יכול לבוא." },
        { id: "advanced_subjuntivo_6", es: "Antes de que llegues", he: "לפני שתגיע", ex_es: "Terminaré antes de que llegues.", ex_he: "אני אסיים לפני שתגיע." },
        { id: "advanced_subjuntivo_7", es: "Aunque sea difícil", he: "למרות שזה קשה", ex_es: "Aunque sea difícil, lo lograremos.", ex_he: "למרות שזה קשה, נצליח." },
        { id: "advanced_subjuntivo_8", es: "Para que entiendas", he: "כדי שתבין", ex_es: "Te lo explico para que entiendas.", ex_he: "אני מסביר לך כדי שתבין." },
        { id: "advanced_subjuntivo_9", es: "Si tuviera tiempo", he: "אם היה לי זמן", ex_es: "Si tuviera tiempo, viajaría más.", ex_he: "אם היה לי זמן, הייתי נוסע יותר." },
        { id: "advanced_subjuntivo_10", es: "Me alegra que vengas", he: "אני שמח שאתה בא", ex_es: "Me alegra que vengas a la boda.", ex_he: "אני שמח שאתה בא לחתונה." },
        { id: "advanced_subjuntivo_11", es: "Es posible que llueva", he: "ייתכן וירד גשם", ex_es: "Es posible que llueva esta tarde.", ex_he: "ייתכן וירד גשם אחר הצהריים." },
        { id: "advanced_subjuntivo_12", es: "Recomiendo que estudies más", he: "אני ממליץ שתלמד יותר", ex_es: "Te recomiendo que estudies más para el examen.", ex_he: "אני ממליץ לך שתלמד יותר למבחן." },
        { id: "advanced_subjuntivo_13", es: "No pienso que sea fácil", he: "אני לא חושב שזה קל", ex_es: "No pienso que sea fácil este trabajo.", ex_he: "אני לא חושב שהעבודה הזו קלה." },
        { id: "advanced_subjuntivo_14", es: "Hasta que termines", he: "עד שתסיים", ex_es: "No saldremos hasta que termines la tarea.", ex_he: "לא נצא עד שתסיים את המטלה." }
      ],
      sentences: [
        { es: "Espero que tengas un buen día.", he: "אני מקווה שיהיה לך יום טוב." },
        { es: "Es importante que lleguemos a tiempo.", he: "חשוב שנגיע בזמן." },
        { es: "Dudo que el proyecto termine este mes.", he: "אני מסופק שהפרויקט יסתיים החודש." },
        { es: "Aunque sea complicado, vamos a intentarlo.", he: "למרות שזה מסובך, אנחנו הולכים לנסות." },
        { es: "Si tuviera más dinero, compraría una casa.", he: "אם היה לי יותר כסף, הייתי קונה בית." },
        { es: "Me alegra que hayas venido a la reunión.", he: "אני שמח שבאת לישיבה." },
        { es: "Es posible que el vuelo se retrase.", he: "ייתכן והטיסה תתעכב." },
        { es: "No saldremos hasta que termines de estudiar.", he: "לא נצא עד שתסיים ללמוד." }
      ]
    },
    {
      id: "idioms",
      name: "ניבים וביטויים (Modismos)",
      vocab: [
        { id: "advanced_idioms_0", es: "Costar un ojo de la cara", he: "לעלות הון תועפות", ex_es: "Este coche cuesta un ojo de la cara.", ex_he: "המכונית הזו עולה הון תועפות." },
        { id: "advanced_idioms_1", es: "Estar en las nubes", he: "להיות מפוזר/בעננים", ex_es: "Hoy estás en las nubes.", ex_he: "היום אתה בעננים." },
        { id: "advanced_idioms_2", es: "Tomar el pelo", he: "לעבוד על מישהו/להתל", ex_es: "¿Me estás tomando el pelo?", ex_he: "אתה עובד עליי?" },
        { id: "advanced_idioms_3", es: "Ser pan comido", he: "להיות קלי קלות (משימה)", ex_es: "El examen fue pan comido.", ex_he: "המבחן היה קלי קלות." },
        { id: "advanced_idioms_4", es: "Meter la pata", he: "לעשות טעות מביכה", ex_es: "Metí la pata en la reunión.", ex_he: "עשיתי טעות מביכה בישיבה." },
        { id: "advanced_idioms_5", es: "No tener pelos en la lengua", he: "לומר דברים כפי שהם, בלי לעטוף", ex_es: "Ella no tiene pelos en la lengua.", ex_he: "היא אומרת הכל בלי כחל וסרק." },
        { id: "advanced_idioms_6", es: "Dar en el clavo", he: "לפגוע בול", ex_es: "Con esa idea diste en el clavo.", ex_he: "עם הרעיון הזה פגעת בול." },
        { id: "advanced_idioms_7", es: "Estar como una cabra", he: "להיות משוגע/מוזר", ex_es: "Mi vecino está como una cabra.", ex_he: "השכן שלי משוגע." },
        { id: "advanced_idioms_8", es: "Ponerse las pilas", he: "להתאמץ/להתעורר לפעולה", ex_es: "¡Ponte las pilas y trabaja!", ex_he: "תתעורר ותעבוד!" },
        { id: "advanced_idioms_9", es: "A otro perro con ese hueso", he: "ספר לזה עוד סיפור (ביטוי ספקנות)", ex_es: "No te creo, a otro perro con ese hueso.", ex_he: "אני לא מאמין לך, ספר את זה למישהו אחר." },
        { id: "advanced_idioms_10", es: "Echar una mano", he: "לעזור (להושיט יד)", ex_es: "¿Puedes echarme una mano con esto?", ex_he: "אתה יכול לעזור לי עם זה?" },
        { id: "advanced_idioms_11", es: "Estar hasta las narices", he: "להיות נמאס לגמרי", ex_es: "Estoy hasta las narices de este proyecto.", ex_he: "נמאס לי מהפרויקט הזה." },
        { id: "advanced_idioms_12", es: "Ser la gota que colma el vaso", he: "להיות הקש ששבר את גב הגמל", ex_es: "Este error fue la gota que colmó el vaso.", ex_he: "הטעות הזו הייתה הקש ששבר את גב הגמל." },
        { id: "advanced_idioms_13", es: "Hablar por los codos", he: "לדבר בלי הפסקה", ex_es: "Mi vecina habla por los codos.", ex_he: "השכנה שלי מדברת בלי הפסקה." },
        { id: "advanced_idioms_14", es: "Írsele el santo al cielo", he: "לשכוח משהו לגמרי", ex_es: "Se me fue el santo al cielo y olvidé la reunión.", ex_he: "שכחתי לגמרי ונשכחה לי הישיבה." }
      ],
      sentences: [
        { es: "El nuevo teléfono cuesta un ojo de la cara.", he: "הטלפון החדש עולה הון תועפות." },
        { es: "Metí la pata cuando llamé al cliente por otro nombre.", he: "עשיתי טעות מביכה כשקראתי ללקוח בשם אחר." },
        { es: "Tienes que ponerte las pilas antes del examen.", he: "אתה צריך להתעורר לפעולה לפני המבחן." },
        { es: "Para ella, el proyecto fue pan comido.", he: "בשבילה, הפרויקט היה קלי קלות." },
        { es: "Con su comentario, dio en el clavo.", he: "עם ההערה שלו, הוא פגע בול." },
        { es: "¿Puedes echarme una mano con las maletas?", he: "אתה יכול לעזור לי עם המזוודות?" },
        { es: "Estoy hasta las narices de tantas reuniones.", he: "נמאס לי מכל כך הרבה ישיבות." },
        { es: "Se me fue el santo al cielo y no llamé al cliente.", he: "שכחתי לגמרי ולא התקשרתי ללקוח." }
      ]
    },
    {
      id: "past_tenses",
      name: "עבר מורכב: Imperfecto מול Indefinido",
      vocab: [
        { id: "advanced_past_tenses_0", es: "Yo era (imperfecto)", he: "הייתי (מצב מתמשך בעבר)", ex_es: "Cuando era niño, jugaba fútbol.", ex_he: "כשהייתי ילד, שיחקתי כדורגל." },
        { id: "advanced_past_tenses_1", es: "Yo fui (indefinido)", he: "הייתי/הלכתי (פעולה חד-פעמית)", ex_es: "Ayer fui al médico.", ex_he: "אתמול הלכתי לרופא." },
        { id: "advanced_past_tenses_2", es: "Mientras", he: "בזמן ש...", ex_es: "Mientras cocinaba, sonó el teléfono.", ex_he: "בזמן שבישלתי, הטלפון צלצל." },
        { id: "advanced_past_tenses_3", es: "De repente", he: "לפתע", ex_es: "De repente empezó a llover.", ex_he: "לפתע התחיל לרדת גשם." },
        { id: "advanced_past_tenses_4", es: "Siempre (con imperfecto)", he: "תמיד (הרגל בעבר)", ex_es: "Siempre visitábamos a mi abuela.", ex_he: "תמיד ביקרנו את סבתא שלי." },
        { id: "advanced_past_tenses_5", es: "Una vez", he: "פעם אחת", ex_es: "Una vez viajé a Perú.", ex_he: "פעם אחת טסתי לפרו." },
        { id: "advanced_past_tenses_6", es: "Cuando + imperfecto", he: "כש... (רקע)", ex_es: "Cuando vivía en Chile, aprendí español.", ex_he: "כשגרתי בצ'ילה, למדתי ספרדית." },
        { id: "advanced_past_tenses_7", es: "Interrumpir", he: "להפריע/לקטוע", ex_es: "La llamada interrumpió la reunión.", ex_he: "השיחה קטעה את הישיבה." },
        { id: "advanced_past_tenses_8", es: "Se rompió", he: "זה נשבר", ex_es: "El vaso se rompió.", ex_he: "הכוס נשברה." },
        { id: "advanced_past_tenses_9", es: "Estaba lloviendo", he: "היה יורד גשם", ex_es: "Estaba lloviendo cuando salí.", ex_he: "היה יורד גשם כשיצאתי." },
        { id: "advanced_past_tenses_10", es: "Yo había terminado", he: "כבר הייתי סיימתי", ex_es: "Cuando llegaste, yo ya había terminado.", ex_he: "כשהגעת, כבר סיימתי." },
        { id: "advanced_past_tenses_11", es: "Solía + infinitivo", he: "נהגתי ל...", ex_es: "De niño, solía jugar en el parque.", ex_he: "כשהייתי ילד, נהגתי לשחק בפארק." },
        { id: "advanced_past_tenses_12", es: "Acababa de llegar", he: "בדיוק הגעתי", ex_es: "Acababa de llegar cuando empezó a llover.", ex_he: "בדיוק הגעתי כשהתחיל לרדת גשם." },
        { id: "advanced_past_tenses_13", es: "Llevaba + tiempo + gerundio", he: "כבר זמן מסוים ש...(עושה)", ex_es: "Llevaba dos horas esperando.", ex_he: "כבר חיכיתי שעתיים." },
        { id: "advanced_past_tenses_14", es: "Nada más llegar", he: "מיד עם ההגעה", ex_es: "Nada más llegar, se puso a trabajar.", ex_he: "מיד עם ההגעה, הוא התחיל לעבוד." }
      ],
      sentences: [
        { es: "Cuando era joven, viajaba mucho por Europa.", he: "כשהייתי צעיר, נסעתי הרבה באירופה." },
        { es: "Estaba durmiendo cuando sonó el teléfono.", he: "ישנתי כשהטלפון צלצל." },
        { es: "De repente, todos empezaron a aplaudir.", he: "לפתע, כולם התחילו למחוא כפיים." },
        { es: "Mientras trabajaba, recibí una llamada importante.", he: "בזמן שעבדתי, קיבלתי שיחה חשובה." },
        { es: "Una vez conocí a un actor famoso.", he: "פעם אחת פגשתי שחקן מפורסם." },
        { es: "Cuando llegamos al cine, la película ya había empezado.", he: "כשהגענו לקולנוע, הסרט כבר התחיל." },
        { es: "De pequeño, solía pasar los veranos con mis abuelos.", he: "כשהייתי קטן, נהגתי לבלות את הקיץ עם הסבים שלי." },
        { es: "Llevaba media hora esperando el autobús.", he: "כבר חיכיתי חצי שעה לאוטובוס." }
      ]
    },
    {
      id: "formal_writing",
      name: "כתיבה רשמית ומיילים",
      vocab: [
        { id: "advanced_formal_writing_0", es: "Estimado/a señor/a", he: "לכבוד אדון/גברת (פתיחה רשמית)", ex_es: "Estimada señora García:", ex_he: "לכבוד גברת גרסיה:" },
        { id: "advanced_formal_writing_1", es: "Le escribo para...", he: "אני כותב לך כדי...", ex_es: "Le escribo para solicitar información.", ex_he: "אני כותב לך כדי לבקש מידע." },
        { id: "advanced_formal_writing_2", es: "Adjunto encontrará", he: "מצורף בזאת", ex_es: "Adjunto encontrará el informe.", ex_he: "מצורף בזאת הדוח." },
        { id: "advanced_formal_writing_3", es: "Quedo a la espera de su respuesta", he: "אני ממתין לתשובתך", ex_es: "Quedo a la espera de su respuesta.", ex_he: "אני ממתין לתשובתך." },
        { id: "advanced_formal_writing_4", es: "Atentamente", he: "בברכה", ex_es: "Atentamente, Juan Pérez.", ex_he: "בברכה, חואן פרס." },
        { id: "advanced_formal_writing_5", es: "Solicitar", he: "לבקש (רשמית)", ex_es: "Quiero solicitar una reunión.", ex_he: "אני רוצה לבקש פגישה." },
        { id: "advanced_formal_writing_6", es: "Confirmar", he: "לאשר", ex_es: "Quiero confirmar la cita.", ex_he: "אני רוצה לאשר את הפגישה." },
        { id: "advanced_formal_writing_7", es: "Lamento informarle", he: "אני מצטער להודיע לך", ex_es: "Lamento informarle que el vuelo se canceló.", ex_he: "אני מצטער להודיע שהטיסה בוטלה." },
        { id: "advanced_formal_writing_8", es: "En referencia a", he: "בהתייחס ל...", ex_es: "En referencia a su correo anterior...", ex_he: "בהתייחס למייל הקודם שלך..." },
        { id: "advanced_formal_writing_9", es: "Un cordial saludo", he: "בברכה חמה", ex_es: "Un cordial saludo, el equipo.", ex_he: "בברכה חמה, הצוות." },
        { id: "advanced_formal_writing_10", es: "Le agradezco de antemano", he: "תודה מראש", ex_es: "Le agradezco de antemano su atención.", ex_he: "תודה מראש על תשומת ליבך." },
        { id: "advanced_formal_writing_11", es: "Sin más por el momento", he: "אין עוד מה להוסיף כרגע", ex_es: "Sin más por el momento, quedo a su disposición.", ex_he: "אין עוד מה להוסיף כרגע, אני לרשותך." },
        { id: "advanced_formal_writing_12", es: "Rogamos disculpe las molestias", he: "אנא סלח על אי הנוחות", ex_es: "Rogamos disculpe las molestias ocasionadas.", ex_he: "אנא סלח על אי הנוחות שנגרמה." },
        { id: "advanced_formal_writing_13", es: "Le informo que", he: "אני מודיע לך ש...", ex_es: "Le informo que la reunión se pospuso.", ex_he: "אני מודיע לך שהישיבה נדחתה." },
        { id: "advanced_formal_writing_14", es: "Con relación a su correo", he: "בהתייחס למייל שלך", ex_es: "Con relación a su correo del día 5...", ex_he: "בהתייחס למייל שלך מהתאריך 5..." }
      ],
      sentences: [
        { es: "Estimado señor López, le escribo para confirmar la reunión.", he: "לכבוד מר לופז, אני כותב כדי לאשר את הפגישה." },
        { es: "Adjunto encontrará el contrato firmado.", he: "מצורף בזאת החוזה החתום." },
        { es: "Lamento informarle que el proyecto se retrasó.", he: "אני מצטער להודיע שהפרויקט התעכב." },
        { es: "Quedo a la espera de su respuesta. Atentamente.", he: "אני ממתין לתשובתך. בברכה." },
        { es: "En referencia a su solicitud, adjunto el informe.", he: "בהתייחס לבקשתך, מצורף הדוח." },
        { es: "Le agradezco de antemano su pronta respuesta.", he: "תודה מראש על תשובתך המהירה." },
        { es: "Rogamos disculpe las molestias que esto pueda causar.", he: "אנא סלח על אי הנוחות שזה עלול לגרום." },
        { es: "Le informo que el pedido llegará la próxima semana.", he: "אני מודיע לך שההזמנה תגיע בשבוע הבא." }
      ]
    },
    {
      id: "news_opinions",
      name: "חדשות, דעות ודיונים",
      vocab: [
        { id: "advanced_news_opinions_0", es: "En mi opinión", he: "לדעתי", ex_es: "En mi opinión, es una buena idea.", ex_he: "לדעתי, זה רעיון טוב." },
        { id: "advanced_news_opinions_1", es: "Por un lado... por otro lado", he: "מצד אחד... מצד שני", ex_es: "Por un lado es caro, por otro lado es útil.", ex_he: "מצד אחד זה יקר, מצד שני זה שימושי." },
        { id: "advanced_news_opinions_2", es: "Estoy de acuerdo", he: "אני מסכים", ex_es: "Estoy de acuerdo contigo.", ex_he: "אני מסכים איתך." },
        { id: "advanced_news_opinions_3", es: "No estoy de acuerdo", he: "אני לא מסכים", ex_es: "No estoy de acuerdo con esa política.", ex_he: "אני לא מסכים עם המדיניות הזו." },
        { id: "advanced_news_opinions_4", es: "El titular", he: "הכותרת (בעיתון)", ex_es: "El titular fue muy impactante.", ex_he: "הכותרת הייתה מאוד מדהימה." },
        { id: "advanced_news_opinions_5", es: "La polémica", he: "המחלוקת", ex_es: "El tema generó mucha polémica.", ex_he: "הנושא יצר הרבה מחלוקת." },
        { id: "advanced_news_opinions_6", es: "Según los expertos", he: "לפי המומחים", ex_es: "Según los expertos, la economía crecerá.", ex_he: "לפי המומחים, הכלכלה תצמח." },
        { id: "advanced_news_opinions_7", es: "El punto de vista", he: "נקודת המבט", ex_es: "Respeto tu punto de vista.", ex_he: "אני מכבד את נקודת המבט שלך." },
        { id: "advanced_news_opinions_8", es: "Debatir", he: "להתווכח/לדון", ex_es: "Vamos a debatir el tema mañana.", ex_he: "אנחנו נדון בנושא מחר." },
        { id: "advanced_news_opinions_9", es: "Al fin y al cabo", he: "בסופו של דבר", ex_es: "Al fin y al cabo, todos ganamos.", ex_he: "בסופו של דבר, כולנו ניצחנו." },
        { id: "advanced_news_opinions_10", es: "Desde mi punto de vista", he: "מנקודת מבטי", ex_es: "Desde mi punto de vista, la decisión fue correcta.", ex_he: "מנקודת מבטי, ההחלטה הייתה נכונה." },
        { id: "advanced_news_opinions_11", es: "Cabe destacar que", he: "ראוי לציין ש...", ex_es: "Cabe destacar que la economía mejoró.", ex_he: "ראוי לציין שהכלכלה השתפרה." },
        { id: "advanced_news_opinions_12", es: "Sin lugar a dudas", he: "ללא ספק", ex_es: "Sin lugar a dudas, es la mejor opción.", ex_he: "ללא ספק, זו האפשרות הטובה ביותר." },
        { id: "advanced_news_opinions_13", es: "Está por verse", he: "עוד ייראה / טרם ידוע", ex_es: "El resultado está por verse.", ex_he: "התוצאה עוד תיראה." },
        { id: "advanced_news_opinions_14", es: "Plantear una cuestión", he: "להעלות סוגיה", ex_es: "Quiero plantear una cuestión importante.", ex_he: "אני רוצה להעלות סוגיה חשובה." }
      ],
      sentences: [
        { es: "En mi opinión, deberíamos cambiar la estrategia.", he: "לדעתי, כדאי שנשנה את האסטרטגיה." },
        { es: "Según los expertos, la situación va a mejorar.", he: "לפי המומחים, המצב הולך להשתפר." },
        { es: "Por un lado quiero viajar, por otro lado necesito ahorrar.", he: "מצד אחד אני רוצה לטייל, מצד שני אני צריך לחסוך." },
        { es: "El titular de la noticia generó mucha polémica.", he: "כותרת החדשות יצרה הרבה מחלוקת." },
        { es: "Al fin y al cabo, decidimos no debatir más.", he: "בסופו של דבר, החלטנו לא להתווכח יותר." },
        { es: "Desde mi punto de vista, deberíamos esperar más información.", he: "מנקודת מבטי, כדאי שנחכה למידע נוסף." },
        { es: "Cabe destacar que las cifras mejoraron este año.", he: "ראוי לציין שהנתונים השתפרו השנה." },
        { es: "Sin lugar a dudas, este cambio afectará a todos.", he: "ללא ספק, השינוי הזה ישפיע על כולם." }
      ]
    },
    {
      id: "travel",
      name: "נסיעות",
      vocab: [
        { id: "advanced_travel_0", es: "El viaje de negocios", he: "נסיעת עסקים", ex_es: "Tengo un viaje de negocios la próxima semana.", ex_he: "יש לי נסיעת עסקים בשבוע הבא." },
        { id: "advanced_travel_1", es: "La escala", he: "עצירת ביניים (טיסה)", ex_es: "Tenemos una escala de tres horas en Lisboa.", ex_he: "יש לנו עצירת ביניים של שלוש שעות בליסבון." },
        { id: "advanced_travel_2", es: "El visado", he: "הוויזה", ex_es: "Necesito un visado para entrar al país.", ex_he: "אני צריך ויזה כדי להיכנס למדינה." },
        { id: "advanced_travel_3", es: "La aduana", he: "המכס", ex_es: "Pasamos por la aduana sin problemas.", ex_he: "עברנו את המכס בלי בעיות." },
        { id: "advanced_travel_4", es: "El alojamiento", he: "הלינה", ex_es: "La empresa paga el alojamiento durante el viaje.", ex_he: "החברה משלמת על הלינה במהלך הנסיעה." },
        { id: "advanced_travel_5", es: "Las dietas", he: "דמי אש\"ל (הוצאות נסיעה)", ex_es: "La empresa cubre las dietas de viaje.", ex_he: "החברה מכסה את דמי האש\"ל של הנסיעה." },
        { id: "advanced_travel_6", es: "El huso horario", he: "אזור הזמן", ex_es: "Todavía no me acostumbro al huso horario.", ex_he: "אני עדיין לא רגיל לאזור הזמן." },
        { id: "advanced_travel_7", es: "El jet lag", he: "עייפות מטיסה ארוכה (ג'ט לג)", ex_es: "Tengo jet lag después del vuelo largo.", ex_he: "יש לי ג'ט לג אחרי הטיסה הארוכה." },
        { id: "advanced_travel_8", es: "Reprogramar el vuelo", he: "לתזמן מחדש את הטיסה", ex_es: "Tuvimos que reprogramar el vuelo por la huelga.", ex_he: "היינו צריכים לתזמן מחדש את הטיסה בגלל השביתה." },
        { id: "advanced_travel_9", es: "La sala VIP", he: "חדר ה-VIP (בשדה תעופה)", ex_es: "Esperamos en la sala VIP del aeropuerto.", ex_he: "חיכינו בחדר ה-VIP של שדה התעופה." },
        { id: "advanced_travel_10", es: "Hacer escala en", he: "לעצור בדרך ב...", ex_es: "El vuelo hace escala en Nueva York.", ex_he: "הטיסה עוצרת בדרך בניו יורק." },
        { id: "advanced_travel_11", es: "El seguro médico de viaje", he: "ביטוח בריאות לנסיעות", ex_es: "Es obligatorio tener seguro médico de viaje.", ex_he: "חובה שיהיה ביטוח בריאות לנסיעות." }
      ],
      sentences: [
        { es: "Mi viaje de negocios incluye una escala en Lisboa.", he: "נסיעת העסקים שלי כוללת עצירת ביניים בליסבון." },
        { es: "Tuvimos que reprogramar el vuelo debido a una huelga.", he: "היינו צריכים לתזמן מחדש את הטיסה בגלל שביתה." },
        { es: "Todavía siento el jet lag después de cruzar tantos husos horarios.", he: "אני עדיין מרגיש ג'ט לג אחרי שחציתי כל כך הרבה אזורי זמן." },
        { es: "La empresa cubre el alojamiento y las dietas del viaje.", he: "החברה מכסה את הלינה ואת דמי האש\"ל של הנסיעה." },
        { es: "Necesitas un visado y seguro médico para este país.", he: "אתה צריך ויזה וביטוח בריאות למדינה הזו." }
      ]
    },
    {
      id: "advanced_vocab",
      name: "אוצר מילים מתקדם ומופשט",
      vocab: [
        { id: "advanced_advanced_vocab_0", es: "La libertad", he: "החירות", ex_es: "La libertad es un derecho fundamental.", ex_he: "החירות היא זכות יסודית." },
        { id: "advanced_advanced_vocab_1", es: "La justicia", he: "הצדק", ex_es: "Luchan por la justicia social.", ex_he: "הם נלחמים למען הצדק החברתי." },
        { id: "advanced_advanced_vocab_2", es: "La oportunidad", he: "ההזדמנות", ex_es: "Esta es una gran oportunidad para ti.", ex_he: "זו הזדמנות גדולה בשבילך." },
        { id: "advanced_advanced_vocab_3", es: "El desafío", he: "האתגר", ex_es: "Superar este desafío no será fácil.", ex_he: "להתגבר על האתגר הזה לא יהיה קל." },
        { id: "advanced_advanced_vocab_4", es: "El logro", he: "ההישג", ex_es: "Graduarse fue su mayor logro.", ex_he: "סיום התואר היה ההישג הגדול ביותר שלו." },
        { id: "advanced_advanced_vocab_5", es: "La conciencia", he: "המודעות", ex_es: "Necesitamos más conciencia ambiental.", ex_he: "אנחנו צריכים יותר מודעות סביבתית." },
        { id: "advanced_advanced_vocab_6", es: "La responsabilidad", he: "האחריות", ex_es: "Asumir la responsabilidad no es fácil.", ex_he: "לקחת אחריות זה לא קל." },
        { id: "advanced_advanced_vocab_7", es: "La perspectiva", he: "נקודת המבט", ex_es: "Cambió mi perspectiva sobre la vida.", ex_he: "זה שינה את נקודת המבט שלי על החיים." },
        { id: "advanced_advanced_vocab_8", es: "La incertidumbre", he: "חוסר הוודאות", ex_es: "Vivimos en una época de incertidumbre.", ex_he: "אנחנו חיים בתקופה של חוסר וודאות." },
        { id: "advanced_advanced_vocab_9", es: "La ambición", he: "השאיפה / השאפתנות", ex_es: "Tiene mucha ambición profesional.", ex_he: "יש לו הרבה שאפתנות מקצועית." },
        { id: "advanced_advanced_vocab_10", es: "La empatía", he: "האמפתיה", ex_es: "La empatía es esencial en este trabajo.", ex_he: "האמפתיה חיונית בעבודה הזו." },
        { id: "advanced_advanced_vocab_11", es: "La integridad", he: "היושרה", ex_es: "Es conocido por su integridad.", ex_he: "הוא ידוע ביושרה שלו." },
        { id: "advanced_advanced_vocab_12", es: "La sostenibilidad", he: "הקיימות", ex_es: "La sostenibilidad es clave para el futuro.", ex_he: "הקיימות היא מפתח לעתיד." },
        { id: "advanced_advanced_vocab_13", es: "La identidad", he: "הזהות", ex_es: "Buscaba su identidad desde joven.", ex_he: "הוא חיפש את זהותו מגיל צעיר." },
        { id: "advanced_advanced_vocab_14", es: "La influencia", he: "ההשפעה", ex_es: "Tiene mucha influencia en la empresa.", ex_he: "יש לו הרבה השפעה בחברה." },
        { id: "advanced_advanced_vocab_15", es: "La sabiduría", he: "החוכמה", ex_es: "La sabiduría viene con la experiencia.", ex_he: "החוכמה מגיעה עם הניסיון." },
        { id: "advanced_advanced_vocab_16", es: "El compromiso", he: "המחויבות", ex_es: "Su compromiso con el proyecto es total.", ex_he: "המחויבות שלו לפרויקט מלאה." },
        { id: "advanced_advanced_vocab_17", es: "La resiliencia", he: "החוסן / העמידות הנפשית", ex_es: "Mostró mucha resiliencia durante la crisis.", ex_he: "הוא הראה הרבה חוסן במהלך המשבר." }
      ],
      sentences: [
        { es: "La libertad y la justicia son valores fundamentales.", he: "החירות והצדק הם ערכים יסודיים." },
        { es: "Esta oportunidad representa un gran desafío para nosotros.", he: "ההזדמנות הזו מייצגת אתגר גדול בשבילנו." },
        { es: "Su mayor logro fue superar la incertidumbre del momento.", he: "ההישג הגדול ביותר שלו היה להתגבר על אי הוודאות של הרגע." },
        { es: "La empatía y la responsabilidad son clave en el liderazgo.", he: "האמפתיה והאחריות הן מפתח במנהיגות." },
        { es: "Cambiar de perspectiva ayuda a entender mejor la situación.", he: "שינוי נקודת מבט עוזר להבין טוב יותר את המצב." },
        { es: "La sostenibilidad se ha convertido en una prioridad global.", he: "הקיימות הפכה לעדיפות עולמית." },
        { es: "Su integridad y sabiduría lo hacen un gran líder.", he: "היושרה והחוכמה שלו הופכים אותו למנהיג גדול." }
      ]
    },
    {
      id: "natural_expressions",
      name: "ביטויים טבעיים של דוברי ספרדית",
      vocab: [
        { id: "advanced_natural_expressions_0", es: "Ni hablar", he: "בשום אופן / אין מצב", ex_es: "¿Ir sin ti? ¡Ni hablar!", ex_he: "ללכת בלעדיך? אין מצב!" },
        { id: "advanced_natural_expressions_1", es: "Qué va", he: "ממש לא / בכלל לא", ex_es: "¿Estás enojado? ¡Qué va!", ex_he: "אתה כועס? ממש לא!" },
        { id: "advanced_natural_expressions_2", es: "Está chupado", he: "זה קלי קלות", ex_es: "El examen está chupado.", ex_he: "המבחן קלי קלות." },
        { id: "advanced_natural_expressions_3", es: "Estar sin blanca", he: "להיות בלי פרוטה", ex_es: "Este mes estoy sin blanca.", ex_he: "החודש אני בלי פרוטה." },
        { id: "advanced_natural_expressions_4", es: "Así así", he: "ככה ככה", ex_es: "¿Cómo estás? Así así.", ex_he: "מה שלומך? ככה ככה." },
        { id: "advanced_natural_expressions_5", es: "No es para tanto", he: "זה לא כזה נורא", ex_es: "Tranquilo, no es para tanto.", ex_he: "תירגע, זה לא כזה נורא." },
        { id: "advanced_natural_expressions_6", es: "Al fin y al cabo", he: "בסופו של דבר", ex_es: "Al fin y al cabo, todo salió bien.", ex_he: "בסופו של דבר, הכל יצא טוב." },
        { id: "advanced_natural_expressions_7", es: "Ponerse las pilas", he: "להתאמץ / לזוז", ex_es: "Tienes que ponerte las pilas con el trabajo.", ex_he: "אתה צריך להתאמץ עם העבודה." },
        { id: "advanced_natural_expressions_8", es: "Meter la pata", he: "לעשות טעות מביכה", ex_es: "Metí la pata en la reunión.", ex_he: "עשיתי טעות מביכה בפגישה." },
        { id: "advanced_natural_expressions_9", es: "Costar un ojo de la cara", he: "לעלות הון", ex_es: "Ese coche cuesta un ojo de la cara.", ex_he: "הרכב הזה עולה הון." },
        { id: "advanced_natural_expressions_10", es: "Dar en el clavo", he: "לפגוע בול / לצדוק לגמרי", ex_es: "Diste en el clavo con esa idea.", ex_he: "פגעת בול עם הרעיון הזה." },
        { id: "advanced_natural_expressions_11", es: "Tomar el pelo", he: "לעבוד על מישהו", ex_es: "¿Me estás tomando el pelo?", ex_he: "אתה עובד עליי?" },
        { id: "advanced_natural_expressions_12", es: "Estar en las nubes", he: "להיות מרוחק בראש", ex_es: "Perdón, estaba en las nubes.", ex_he: "סליחה, הייתי מרוחק בראש." },
        { id: "advanced_natural_expressions_13", es: "Echar una mano", he: "לתת יד / לעזור", ex_es: "¿Me echas una mano con esto?", ex_he: "אתה יכול לתת לי יד עם זה?" },
        { id: "advanced_natural_expressions_14", es: "Ser pan comido", he: "להיות עניין של מה בכך", ex_es: "Este trabajo es pan comido.", ex_he: "העבודה הזו היא עניין של מה בכך." },
        { id: "advanced_natural_expressions_15", es: "Hacerse el tonto", he: "להעמיד פני טיפש", ex_es: "No te hagas el tonto, sabes la respuesta.", ex_he: "אל תעמיד פני טיפש, אתה יודע את התשובה." }
      ],
      sentences: [
        { es: "Al fin y al cabo, decidimos ponernos las pilas y terminar el proyecto.", he: "בסופו של דבר, החלטנו להתאמץ ולסיים את הפרויקט." },
        { es: "No te hagas el tonto, sé que metiste la pata.", he: "אל תעמיד פני טיפש, אני יודע שעשית טעות מביכה." },
        { es: "Este examen está chupado, va a ser pan comido.", he: "המבחן הזה קלי קלות, זה יהיה עניין של מה בכך." },
        { es: "¿Me puedes echar una mano? Estoy sin blanca este mes.", he: "אתה יכול לתת לי יד? אני בלי פרוטה החודש." },
        { es: "Diste en el clavo, esa es exactamente la solución.", he: "פגעת בול, זה בדיוק הפתרון." },
        { es: "Perdón, estaba en las nubes, ¿qué decías?", he: "סליחה, הייתי מרוחק בראש, מה אמרת?" }
      ]
    }
  ]
};
