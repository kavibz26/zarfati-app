// נתוני התוכן של האפליקציה: 3 רמות, כל רמה מכילה נושאים (topics),
// כל נושא מכיל אוצר מילים (vocab) ומשפטים לתרגול (sentences).

const LEVELS = {
  beginner: {
    id: "beginner",
    name: "מתחיל",
    icon: "🌱",
    color: "#4caf7d",
    topics: [
      {
        id: "greetings",
        name: "ברכות והיכרות",
        vocab: [
          { es: "Hola", he: "שלום", ex_es: "Hola, ¿cómo estás?", ex_he: "שלום, מה שלומך?" },
          { es: "Buenos días", he: "בוקר טוב", ex_es: "Buenos días, profesor.", ex_he: "בוקר טוב, מורה." },
          { es: "Buenas tardes", he: "צהריים טובים", ex_es: "Buenas tardes a todos.", ex_he: "צהריים טובים לכולם." },
          { es: "Buenas noches", he: "לילה טוב", ex_es: "Buenas noches, hasta mañana.", ex_he: "לילה טוב, עד מחר." },
          { es: "Adiós", he: "להתראות", ex_es: "Adiós, nos vemos pronto.", ex_he: "להתראות, נתראה בקרוב." },
          { es: "Por favor", he: "בבקשה", ex_es: "Ayúdame, por favor.", ex_he: "עזור לי, בבקשה." },
          { es: "Gracias", he: "תודה", ex_es: "Muchas gracias por todo.", ex_he: "תודה רבה על הכל." },
          { es: "De nada", he: "על לא דבר", ex_es: "De nada, fue un placer.", ex_he: "על לא דבר, זה היה תענוג." },
          { es: "¿Cómo te llamas?", he: "איך קוראים לך?", ex_es: "¿Cómo te llamas, chico?", ex_he: "איך קוראים לך, ילד?" },
          { es: "Me llamo...", he: "קוראים לי...", ex_es: "Me llamo Ana.", ex_he: "קוראים לי אנה." },
          { es: "Mucho gusto", he: "נעים מאוד", ex_es: "Mucho gusto en conocerte.", ex_he: "נעים מאוד להכיר אותך." },
          { es: "¿Y tú?", he: "ואתה/ואת?", ex_es: "Estoy bien, ¿y tú?", ex_he: "אני בסדר, ואתה?" }
        ],
        sentences: [
          { es: "Hola, me llamo Pedro.", he: "שלום, קוראים לי פדרו." },
          { es: "¿Cómo estás hoy?", he: "מה שלומך היום?" },
          { es: "Mucho gusto en conocerte.", he: "נעים מאוד להכיר אותך." },
          { es: "Buenos días, ¿cómo te llamas?", he: "בוקר טוב, איך קוראים לך?" },
          { es: "Adiós, hasta luego.", he: "להתראות, נתראה אחר כך." }
        ]
      },
      {
        id: "numbers",
        name: "מספרים ושעה",
        vocab: [
          { es: "Cero", he: "אפס", ex_es: "Empezamos desde cero.", ex_he: "אנחנו מתחילים מאפס." },
          { es: "Uno", he: "אחת", ex_es: "Tengo un hermano.", ex_he: "יש לי אח אחד." },
          { es: "Dos", he: "שתיים", ex_es: "Dos cafés, por favor.", ex_he: "שני קפה, בבקשה." },
          { es: "Cinco", he: "חמש", ex_es: "Son las cinco.", ex_he: "השעה חמש." },
          { es: "Diez", he: "עשר", ex_es: "Tengo diez años.", ex_he: "אני בן עשר." },
          { es: "Veinte", he: "עשרים", ex_es: "Veinte estudiantes.", ex_he: "עשרים תלמידים." },
          { es: "Treinta", he: "שלושים", ex_es: "Treinta minutos.", ex_he: "שלושים דקות." },
          { es: "Cien", he: "מאה", ex_es: "Cuesta cien euros.", ex_he: "זה עולה מאה יורו." },
          { es: "¿Qué hora es?", he: "מה השעה?", ex_es: "¿Qué hora es ahora?", ex_he: "מה השעה עכשיו?" },
          { es: "La hora", he: "השעה", ex_es: "Llegó a la hora.", ex_he: "הוא הגיע בזמן." },
          { es: "El minuto", he: "הדקה", ex_es: "Espera un minuto.", ex_he: "חכה דקה." },
          { es: "Media hora", he: "חצי שעה", ex_es: "Falta media hora.", ex_he: "נשארה חצי שעה." }
        ],
        sentences: [
          { es: "Son las diez de la mañana.", he: "השעה עשר בבוקר." },
          { es: "Tengo veinte años.", he: "אני בת עשרים." },
          { es: "Espera cinco minutos, por favor.", he: "חכה חמש דקות, בבקשה." },
          { es: "¿Qué hora es ahora?", he: "מה השעה עכשיו?" },
          { es: "Cuesta treinta euros.", he: "זה עולה שלושים יורו." }
        ]
      },
      {
        id: "colors",
        name: "צבעים וצורות",
        vocab: [
          { es: "Rojo", he: "אדום", ex_es: "El coche es rojo.", ex_he: "המכונית אדומה." },
          { es: "Azul", he: "כחול", ex_es: "El cielo es azul.", ex_he: "השמיים כחולים." },
          { es: "Verde", he: "ירוק", ex_es: "La planta es verde.", ex_he: "הצמח ירוק." },
          { es: "Amarillo", he: "צהוב", ex_es: "El sol es amarillo.", ex_he: "השמש צהובה." },
          { es: "Negro", he: "שחור", ex_es: "El gato es negro.", ex_he: "החתול שחור." },
          { es: "Blanco", he: "לבן", ex_es: "La nieve es blanca.", ex_he: "השלג לבן." },
          { es: "Naranja", he: "כתום", ex_es: "La naranja es naranja.", ex_he: "התפוז הוא כתום." },
          { es: "Círculo", he: "עיגול", ex_es: "Dibuja un círculo.", ex_he: "צייר עיגול." },
          { es: "Cuadrado", he: "ריבוע", ex_es: "La caja es cuadrada.", ex_he: "הקופסה מרובעת." },
          { es: "Triángulo", he: "משולש", ex_es: "El triángulo tiene tres lados.", ex_he: "למשולש יש שלוש צלעות." }
        ],
        sentences: [
          { es: "Me gusta el color azul.", he: "אני אוהב את הצבע כחול." },
          { es: "El coche rojo es rápido.", he: "המכונית האדומה מהירה." },
          { es: "La flor amarilla es bonita.", he: "הפרח הצהוב יפה." },
          { es: "Dibuja un cuadrado verde.", he: "צייר ריבוע ירוק." },
          { es: "El cielo está azul hoy.", he: "השמיים כחולים היום." }
        ]
      },
      {
        id: "family",
        name: "משפחה",
        vocab: [
          { es: "La familia", he: "המשפחה", ex_es: "Mi familia es grande.", ex_he: "המשפחה שלי גדולה." },
          { es: "La madre", he: "האמא", ex_es: "Mi madre cocina bien.", ex_he: "אמא שלי מבשלת טוב." },
          { es: "El padre", he: "האבא", ex_es: "Mi padre trabaja mucho.", ex_he: "אבא שלי עובד הרבה." },
          { es: "El hermano", he: "האח", ex_es: "Tengo un hermano mayor.", ex_he: "יש לי אח גדול." },
          { es: "La hermana", he: "האחות", ex_es: "Mi hermana estudia medicina.", ex_he: "אחותי לומדת רפואה." },
          { es: "El hijo", he: "הבן", ex_es: "Su hijo es pequeño.", ex_he: "הבן שלו קטן." },
          { es: "La hija", he: "הבת", ex_es: "Su hija canta muy bien.", ex_he: "הבת שלה שרה מאוד יפה." },
          { es: "El abuelo", he: "הסבא", ex_es: "Mi abuelo tiene ochenta años.", ex_he: "סבא שלי בן שמונים." },
          { es: "La abuela", he: "הסבתא", ex_es: "Mi abuela vive en Madrid.", ex_he: "סבתא שלי גרה במדריד." },
          { es: "El esposo / La esposa", he: "הבעל / האישה", ex_es: "Mi esposa es doctora.", ex_he: "אשתי היא רופאה." }
        ],
        sentences: [
          { es: "Tengo dos hermanos y una hermana.", he: "יש לי שני אחים ואחות אחת." },
          { es: "Mi madre y mi padre viven en Barcelona.", he: "אמא שלי ואבא שלי גרים בברצלונה." },
          { es: "Mi abuela cocina para toda la familia.", he: "סבתא שלי מבשלת לכל המשפחה." },
          { es: "Su hijo estudia en la universidad.", he: "הבן שלו לומד באוניברסיטה." },
          { es: "Toda mi familia se reúne los domingos.", he: "כל המשפחה שלי נפגשת בימי ראשון." }
        ]
      },
      {
        id: "food",
        name: "אוכל ומשקאות",
        vocab: [
          { es: "El agua", he: "מים", ex_es: "Bebo mucha agua.", ex_he: "אני שותה הרבה מים." },
          { es: "El pan", he: "לחם", ex_es: "Me gusta el pan caliente.", ex_he: "אני אוהב לחם חם." },
          { es: "La leche", he: "חלב", ex_es: "Bebo leche por la mañana.", ex_he: "אני שותה חלב בבוקר." },
          { es: "El café", he: "קפה", ex_es: "Quiero un café, por favor.", ex_he: "אני רוצה קפה, בבקשה." },
          { es: "La fruta", he: "פרי", ex_es: "Como fruta todos los días.", ex_he: "אני אוכל פרי כל יום." },
          { es: "La manzana", he: "תפוח", ex_es: "La manzana es roja.", ex_he: "התפוח אדום." },
          { es: "El arroz", he: "אורז", ex_es: "El arroz con pollo es rico.", ex_he: "האורז עם עוף טעים." },
          { es: "La carne", he: "בשר", ex_es: "No como carne.", ex_he: "אני לא אוכל בשר." },
          { es: "La verdura", he: "ירק", ex_es: "Las verduras son saludables.", ex_he: "הירקות בריאים." },
          { es: "El restaurante", he: "מסעדה", ex_es: "Cenamos en un restaurante.", ex_he: "אכלנו ארוחת ערב במסעדה." },
          { es: "Tengo hambre", he: "אני רעב", ex_es: "Tengo hambre, ¿comemos?", ex_he: "אני רעב, נאכל?" },
          { es: "Tengo sed", he: "אני צמא", ex_es: "Tengo sed, quiero agua.", ex_he: "אני צמא, אני רוצה מים." }
        ],
        sentences: [
          { es: "Quiero un café con leche, por favor.", he: "אני רוצה קפה עם חלב, בבקשה." },
          { es: "Como fruta y verdura todos los días.", he: "אני אוכל פרי וירק כל יום." },
          { es: "Tengo hambre, vamos al restaurante.", he: "אני רעב, בוא נלך למסעדה." },
          { es: "El pan con queso es delicioso.", he: "הלחם עם גבינה טעים." },
          { es: "¿Quieres agua o café?", he: "אתה רוצה מים או קפה?" }
        ]
      },
      {
        id: "basic_verbs",
        name: "פעלים בסיסיים: Ser, Estar, Tener",
        vocab: [
          { es: "Yo soy", he: "אני (תכונה קבועה)", ex_es: "Yo soy alto.", ex_he: "אני גבוה." },
          { es: "Tú eres", he: "אתה/את (תכונה קבועה)", ex_es: "Tú eres inteligente.", ex_he: "אתה חכם." },
          { es: "Él/Ella es", he: "הוא/היא (תכונה קבועה)", ex_es: "Ella es doctora.", ex_he: "היא רופאה." },
          { es: "Yo estoy", he: "אני (מצב זמני)", ex_es: "Yo estoy cansado.", ex_he: "אני עייף." },
          { es: "Tú estás", he: "אתה/את (מצב זמני)", ex_es: "Tú estás feliz.", ex_he: "אתה שמח." },
          { es: "Él/Ella está", he: "הוא/היא (מצב זמני)", ex_es: "Ella está en casa.", ex_he: "היא בבית." },
          { es: "Yo tengo", he: "יש לי", ex_es: "Yo tengo un perro.", ex_he: "יש לי כלב." },
          { es: "Tú tienes", he: "יש לך", ex_es: "Tú tienes razón.", ex_he: "אתה צודק." },
          { es: "Él/Ella tiene", he: "יש לו/לה", ex_es: "Ella tiene veinte años.", ex_he: "היא בת עשרים." },
          { es: "Nosotros somos", he: "אנחנו (תכונה קבועה)", ex_es: "Nosotros somos amigos.", ex_he: "אנחנו חברים." }
        ],
        sentences: [
          { es: "Yo soy de España.", he: "אני מספרד." },
          { es: "Ella está muy cansada hoy.", he: "היא מאוד עייפה היום." },
          { es: "Tengo veinte años y soy estudiante.", he: "אני בת עשרים ואני סטודנטית." },
          { es: "¿Dónde estás ahora?", he: "איפה אתה עכשיו?" },
          { es: "Nosotros tenemos una casa grande.", he: "יש לנו בית גדול." }
        ]
      }
    ]
  },

  intermediate: {
    id: "intermediate",
    name: "מתקדם",
    icon: "🚀",
    color: "#3b82f6",
    topics: [
      {
        id: "present_regular",
        name: "פעלים רגילים בהווה (AR/ER/IR)",
        vocab: [
          { es: "Hablar (yo hablo)", he: "לדבר (אני מדבר)", ex_es: "Yo hablo español.", ex_he: "אני מדבר ספרדית." },
          { es: "Comer (yo como)", he: "לאכול (אני אוכל)", ex_es: "Yo como a las dos.", ex_he: "אני אוכל בשתיים." },
          { es: "Vivir (yo vivo)", he: "לגור (אני גר)", ex_es: "Yo vivo en Madrid.", ex_he: "אני גר במדריד." },
          { es: "Trabajar (tú trabajas)", he: "לעבוד (אתה עובד)", ex_es: "Tú trabajas mucho.", ex_he: "אתה עובד הרבה." },
          { es: "Estudiar (ella estudia)", he: "ללמוד (היא לומדת)", ex_es: "Ella estudia inglés.", ex_he: "היא לומדת אנגלית." },
          { es: "Leer (nosotros leemos)", he: "לקרוא (אנחנו קוראים)", ex_es: "Nosotros leemos un libro.", ex_he: "אנחנו קוראים ספר." },
          { es: "Escribir (ellos escriben)", he: "לכתוב (הם כותבים)", ex_es: "Ellos escriben cartas.", ex_he: "הם כותבים מכתבים." },
          { es: "Abrir (yo abro)", he: "לפתוח (אני פותח)", ex_es: "Yo abro la puerta.", ex_he: "אני פותח את הדלת." },
          { es: "Beber (tú bebes)", he: "לשתות (אתה שותה)", ex_es: "Tú bebes agua.", ex_he: "אתה שותה מים." },
          { es: "Correr (él corre)", he: "לרוץ (הוא רץ)", ex_es: "Él corre por la mañana.", ex_he: "הוא רץ בבוקר." }
        ],
        sentences: [
          { es: "Yo hablo español todos los días.", he: "אני מדבר ספרדית כל יום." },
          { es: "Ella vive cerca de la playa.", he: "היא גרה קרוב לחוף הים." },
          { es: "Nosotros comemos juntos los viernes.", he: "אנחנו אוכלים ביחד בימי שישי." },
          { es: "Ellos escriben un correo electrónico.", he: "הם כותבים אימייל." },
          { es: "Tú trabajas en una oficina grande.", he: "אתה עובד במשרד גדול." }
        ]
      },
      {
        id: "preterito",
        name: "עבר פשוט - Pretérito Indefinido",
        vocab: [
          { es: "Yo hablé", he: "אני דיברתי", ex_es: "Ayer yo hablé con ella.", ex_he: "אתמול דיברתי איתה." },
          { es: "Tú comiste", he: "אתה אכלת", ex_es: "Tú comiste pizza anoche.", ex_he: "אכלת פיצה אתמול בלילה." },
          { es: "Él vivió", he: "הוא גר (בעבר)", ex_es: "Él vivió en Francia.", ex_he: "הוא גר בצרפת." },
          { es: "Nosotros fuimos", he: "אנחנו היינו/הלכנו", ex_es: "Nosotros fuimos al cine.", ex_he: "הלכנו לקולנוע." },
          { es: "Ellos hicieron", he: "הם עשו", ex_es: "Ellos hicieron la tarea.", ex_he: "הם עשו את שיעורי הבית." },
          { es: "Yo tuve", he: "היה לי", ex_es: "Yo tuve un examen difícil.", ex_he: "היה לי מבחן קשה." },
          { es: "Ella dijo", he: "היא אמרה", ex_es: "Ella dijo la verdad.", ex_he: "היא אמרה את האמת." },
          { es: "Nosotros vimos", he: "ראינו", ex_es: "Nosotros vimos una película.", ex_he: "ראינו סרט." },
          { es: "Ayer", he: "אתמול", ex_es: "Ayer llovió mucho.", ex_he: "אתמול ירד הרבה גשם." },
          { es: "La semana pasada", he: "השבוע שעבר", ex_es: "La semana pasada viajé a Roma.", ex_he: "השבוע שעבר טסתי לרומא." }
        ],
        sentences: [
          { es: "Ayer hablé con mi jefe.", he: "אתמול דיברתי עם הבוס שלי." },
          { es: "Ellos hicieron un viaje increíble.", he: "הם עשו טיול מדהים." },
          { es: "Nosotros fuimos al concierto anoche.", he: "הלכנו להופעה אתמול בלילה." },
          { es: "Ella dijo que llegó tarde.", he: "היא אמרה שהיא הגיעה מאוחר." },
          { es: "La semana pasada tuve mucho trabajo.", he: "השבוע שעבר היה לי הרבה עבודה." }
        ]
      },
      {
        id: "adjectives",
        name: "תארים ותיאור אנשים",
        vocab: [
          { es: "Alto / Alta", he: "גבוה / גבוהה", ex_es: "Mi hermano es muy alto.", ex_he: "אחי גבוה מאוד." },
          { es: "Bajo / Baja", he: "נמוך / נמוכה", ex_es: "La mesa es baja.", ex_he: "השולחן נמוך." },
          { es: "Simpático / Simpática", he: "נחמד / נחמדה", ex_es: "Ella es muy simpática.", ex_he: "היא מאוד נחמדה." },
          { es: "Inteligente", he: "חכם/ה", ex_es: "Es un chico inteligente.", ex_he: "הוא ילד חכם." },
          { es: "Divertido / Divertida", he: "מצחיק / מצחיקה", ex_es: "La película fue divertida.", ex_he: "הסרט היה מצחיק." },
          { es: "Aburrido / Aburrida", he: "משעמם / משעממת", ex_es: "El libro es aburrido.", ex_he: "הספר משעמם." },
          { es: "Trabajador / Trabajadora", he: "חרוץ / חרוצה", ex_es: "Es una mujer trabajadora.", ex_he: "היא אישה חרוצה." },
          { es: "Perezoso / Perezosa", he: "עצלן / עצלנית", ex_es: "El gato es muy perezoso.", ex_he: "החתול מאוד עצלן." },
          { es: "Amable", he: "אדיב/ה", ex_es: "El profesor es amable.", ex_he: "המורה אדיב." },
          { es: "Generoso / Generosa", he: "נדיב / נדיבה", ex_es: "Su tío es muy generoso.", ex_he: "הדוד שלו מאוד נדיב." }
        ],
        sentences: [
          { es: "Mi amiga es alta e inteligente.", he: "החברה שלי גבוהה וחכמה." },
          { es: "El nuevo empleado parece muy trabajador.", he: "העובד החדש נראה חרוץ מאוד." },
          { es: "Este programa de televisión es aburrido.", he: "התוכנית טלוויזיה הזו משעממת." },
          { es: "Mis padres son muy generosos.", he: "ההורים שלי מאוד נדיבים." },
          { es: "El perro es divertido y simpático.", he: "הכלב מצחיק ונחמד." }
        ]
      },
      {
        id: "home_routine",
        name: "הבית והיומיום",
        vocab: [
          { es: "Levantarse", he: "לקום (מהמיטה)", ex_es: "Me levanto a las siete.", ex_he: "אני קם בשבע." },
          { es: "Ducharse", he: "להתקלח", ex_es: "Me ducho por la mañana.", ex_he: "אני מתקלח בבוקר." },
          { es: "Desayunar", he: "לאכול ארוחת בוקר", ex_es: "Desayuno café y pan.", ex_he: "אני אוכל ארוחת בוקר קפה ולחם." },
          { es: "La cocina", he: "המטבח", ex_es: "Cocino en la cocina.", ex_he: "אני מבשל במטבח." },
          { es: "El dormitorio", he: "חדר השינה", ex_es: "Mi dormitorio es pequeño.", ex_he: "חדר השינה שלי קטן." },
          { es: "Limpiar", he: "לנקות", ex_es: "Limpio la casa los sábados.", ex_he: "אני מנקה את הבית בימי שבת." },
          { es: "Acostarse", he: "ללכת לישון", ex_es: "Me acuesto a las once.", ex_he: "אני הולך לישון באחת עשרה." },
          { es: "El horario", he: "לוח הזמנים", ex_es: "Mi horario es complicado.", ex_he: "לוח הזמנים שלי מסובך." },
          { es: "Todos los días", he: "כל יום", ex_es: "Hago ejercicio todos los días.", ex_he: "אני מתאמן כל יום." },
          { es: "Normalmente", he: "בדרך כלל", ex_es: "Normalmente ceno a las ocho.", ex_he: "בדרך כלל אני אוכל ארוחת ערב בשמונה." }
        ],
        sentences: [
          { es: "Normalmente me levanto a las seis y media.", he: "בדרך כלל אני קם בשש וחצי." },
          { es: "Después de desayunar, voy al trabajo.", he: "אחרי ארוחת הבוקר, אני הולך לעבודה." },
          { es: "Limpio la cocina todos los días.", he: "אני מנקה את המטבח כל יום." },
          { es: "Me acuesto tarde los fines de semana.", he: "אני הולך לישון מאוחר בסופי שבוע." },
          { es: "Mi horario de trabajo es muy flexible.", he: "לוח הזמנים שלי בעבודה מאוד גמיש." }
        ]
      },
      {
        id: "work_professions",
        name: "עבודה ומקצועות",
        vocab: [
          { es: "El trabajo", he: "העבודה", ex_es: "Me gusta mi trabajo.", ex_he: "אני אוהב את העבודה שלי." },
          { es: "La empresa", he: "החברה (עסקית)", ex_es: "Trabajo en una empresa grande.", ex_he: "אני עובד בחברה גדולה." },
          { es: "El jefe / La jefa", he: "הבוס", ex_es: "Mi jefe es muy exigente.", ex_he: "הבוס שלי מאוד דרשני." },
          { es: "El médico / La médica", he: "הרופא/ה", ex_es: "El médico revisa al paciente.", ex_he: "הרופא בודק את המטופל." },
          { es: "El abogado / La abogada", he: "עורך/ת דין", ex_es: "La abogada ganó el caso.", ex_he: "עורכת הדין ניצחה בתיק." },
          { es: "El ingeniero / La ingeniera", he: "מהנדס/ת", ex_es: "El ingeniero diseña puentes.", ex_he: "המהנדס מתכנן גשרים." },
          { es: "La reunión", he: "הישיבה", ex_es: "Tenemos una reunión mañana.", ex_he: "יש לנו ישיבה מחר." },
          { es: "El sueldo", he: "המשכורת", ex_es: "El sueldo es bueno.", ex_he: "המשכורת טובה." },
          { es: "Contratar", he: "להעסיק/לגייס", ex_es: "La empresa va a contratar más gente.", ex_he: "החברה הולכת לגייס עוד אנשים." },
          { es: "Renunciar", he: "להתפטר", ex_es: "Ella decidió renunciar al trabajo.", ex_he: "היא החליטה להתפטר מהעבודה." }
        ],
        sentences: [
          { es: "Mi jefe convocó una reunión urgente.", he: "הבוס שלי כינס ישיבה דחופה." },
          { es: "La empresa quiere contratar dos ingenieros.", he: "החברה רוצה לגייס שני מהנדסים." },
          { es: "El médico trabaja doce horas al día.", he: "הרופא עובד שתים עשרה שעות ביום." },
          { es: "Ella renunció porque encontró otro trabajo.", he: "היא התפטרה כי מצאה עבודה אחרת." },
          { es: "El sueldo no es suficiente para vivir aquí.", he: "המשכורת לא מספיקה כדי לחיות כאן." }
        ]
      },
      {
        id: "directions",
        name: "כיוונים ותחבורה",
        vocab: [
          { es: "A la derecha", he: "ימינה", ex_es: "Gira a la derecha.", ex_he: "פנה ימינה." },
          { es: "A la izquierda", he: "שמאלה", ex_es: "El banco está a la izquierda.", ex_he: "הבנק נמצא משמאל." },
          { es: "Todo recto", he: "ישר", ex_es: "Sigue todo recto.", ex_he: "המשך ישר." },
          { es: "La estación", he: "התחנה", ex_es: "La estación está cerca.", ex_he: "התחנה קרובה." },
          { es: "El autobús", he: "האוטובוס", ex_es: "Tomo el autobús cada día.", ex_he: "אני נוסע באוטובוס כל יום." },
          { es: "El metro", he: "הרכבת התחתית", ex_es: "El metro es rápido.", ex_he: "הרכבת התחתית מהירה." },
          { es: "El semáforo", he: "הרמזור", ex_es: "Para en el semáforo.", ex_he: "עצור ברמזור." },
          { es: "La esquina", he: "הפינה", ex_es: "Está en la esquina.", ex_he: "זה נמצא בפינה." },
          { es: "¿Cómo llego a...?", he: "איך אני מגיע ל...?", ex_es: "¿Cómo llego al museo?", ex_he: "איך אני מגיע למוזיאון?" },
          { es: "Cerca / Lejos", he: "קרוב / רחוק", ex_es: "El hotel está lejos de aquí.", ex_he: "המלון רחוק מכאן." }
        ],
        sentences: [
          { es: "Gira a la izquierda en la esquina.", he: "פנה שמאלה בפינה." },
          { es: "¿Cómo llego a la estación de tren?", he: "איך אני מגיע לתחנת הרכבת?" },
          { es: "Sigue todo recto y verás el semáforo.", he: "המשך ישר ותראה את הרמזור." },
          { es: "El metro está muy cerca de mi casa.", he: "הרכבת התחתית מאוד קרובה לבית שלי." },
          { es: "Tomamos el autobús para ir al centro.", he: "אנחנו נוסעים באוטובוס למרכז העיר." }
        ]
      }
    ]
  },

  advanced: {
    id: "advanced",
    name: "מקצועי",
    icon: "🏆",
    color: "#a855f7",
    topics: [
      {
        id: "business_vocab",
        name: "אוצר מילים עסקי",
        vocab: [
          { es: "La negociación", he: "המשא ומתן", ex_es: "La negociación duró horas.", ex_he: "המשא ומתן נמשך שעות." },
          { es: "El presupuesto", he: "התקציב", ex_es: "El presupuesto es limitado.", ex_he: "התקציב מוגבל." },
          { es: "La inversión", he: "ההשקעה", ex_es: "Hicieron una gran inversión.", ex_he: "הם ביצעו השקעה גדולה." },
          { es: "Los beneficios", he: "הרווחים", ex_es: "Los beneficios aumentaron este año.", ex_he: "הרווחים גדלו השנה." },
          { es: "La junta directiva", he: "דירקטוריון", ex_es: "La junta directiva se reunió ayer.", ex_he: "הדירקטוריון התכנס אתמול." },
          { es: "El contrato", he: "החוזה", ex_es: "Firmamos el contrato hoy.", ex_he: "חתמנו על החוזה היום." },
          { es: "La estrategia", he: "האסטרטגיה", ex_es: "Necesitamos una nueva estrategia.", ex_he: "אנחנו צריכים אסטרטגיה חדשה." },
          { es: "El competidor", he: "המתחרה", ex_es: "Nuestro competidor bajó los precios.", ex_he: "המתחרה שלנו הוריד מחירים." },
          { es: "La fusión", he: "המיזוג", ex_es: "La fusión de empresas fue exitosa.", ex_he: "מיזוג החברות הצליח." },
          { es: "Los accionistas", he: "בעלי המניות", ex_es: "Los accionistas votaron a favor.", ex_he: "בעלי המניות הצביעו בעד." }
        ],
        sentences: [
          { es: "La junta directiva aprobó el nuevo presupuesto.", he: "הדירקטוריון אישר את התקציב החדש." },
          { es: "Firmamos el contrato después de una larga negociación.", he: "חתמנו על החוזה אחרי משא ומתן ארוך." },
          { es: "Los accionistas exigen mayores beneficios.", he: "בעלי המניות דורשים רווחים גדולים יותר." },
          { es: "Nuestra estrategia debe considerar al competidor.", he: "האסטרטגיה שלנו חייבת להתחשב במתחרה." },
          { es: "La fusión creará la empresa más grande del sector.", he: "המיזוג ייצור את החברה הגדולה ביותר בענף." }
        ]
      },
      {
        id: "subjuntivo",
        name: "Subjuntivo - מצב רוח תלוי",
        vocab: [
          { es: "Espero que vengas", he: "אני מקווה שתבוא", ex_es: "Espero que vengas a la fiesta.", ex_he: "אני מקווה שתבוא למסיבה." },
          { es: "Quiero que sepas", he: "אני רוצה שתדע", ex_es: "Quiero que sepas la verdad.", ex_he: "אני רוצה שתדע את האמת." },
          { es: "Es importante que estudies", he: "חשוב שתלמד", ex_es: "Es importante que estudies para el examen.", ex_he: "חשוב שתלמד למבחן." },
          { es: "Dudo que sea verdad", he: "אני מסופק שזה נכון", ex_es: "Dudo que sea verdad.", ex_he: "אני מסופק שזה נכון." },
          { es: "Ojalá que llueva", he: "הלוואי וירד גשם", ex_es: "Ojalá que llueva mañana.", ex_he: "הלוואי וירד גשם מחר." },
          { es: "No creo que pueda", he: "אני לא חושב שהוא/היא יכול/ה", ex_es: "No creo que pueda venir.", ex_he: "אני לא חושב שהוא יכול לבוא." },
          { es: "Antes de que llegues", he: "לפני שתגיע", ex_es: "Terminaré antes de que llegues.", ex_he: "אני אסיים לפני שתגיע." },
          { es: "Aunque sea difícil", he: "למרות שזה קשה", ex_es: "Aunque sea difícil, lo lograremos.", ex_he: "למרות שזה קשה, נצליח." },
          { es: "Para que entiendas", he: "כדי שתבין", ex_es: "Te lo explico para que entiendas.", ex_he: "אני מסביר לך כדי שתבין." },
          { es: "Si tuviera tiempo", he: "אם היה לי זמן", ex_es: "Si tuviera tiempo, viajaría más.", ex_he: "אם היה לי זמן, הייתי נוסע יותר." }
        ],
        sentences: [
          { es: "Espero que tengas un buen día.", he: "אני מקווה שיהיה לך יום טוב." },
          { es: "Es importante que lleguemos a tiempo.", he: "חשוב שנגיע בזמן." },
          { es: "Dudo que el proyecto termine este mes.", he: "אני מסופק שהפרויקט יסתיים החודש." },
          { es: "Aunque sea complicado, vamos a intentarlo.", he: "למרות שזה מסובך, אנחנו הולכים לנסות." },
          { es: "Si tuviera más dinero, compraría una casa.", he: "אם היה לי יותר כסף, הייתי קונה בית." }
        ]
      },
      {
        id: "idioms",
        name: "ניבים וביטויים (Modismos)",
        vocab: [
          { es: "Costar un ojo de la cara", he: "לעלות הון תועפות", ex_es: "Este coche cuesta un ojo de la cara.", ex_he: "המכונית הזו עולה הון תועפות." },
          { es: "Estar en las nubes", he: "להיות מפוזר/בעננים", ex_es: "Hoy estás en las nubes.", ex_he: "היום אתה בעננים." },
          { es: "Tomar el pelo", he: "לעבוד על מישהו/להתל", ex_es: "¿Me estás tomando el pelo?", ex_he: "אתה עובד עליי?" },
          { es: "Ser pan comido", he: "להיות קלי קלות (משימה)", ex_es: "El examen fue pan comido.", ex_he: "המבחן היה קלי קלות." },
          { es: "Meter la pata", he: "לעשות טעות מביכה", ex_es: "Metí la pata en la reunión.", ex_he: "עשיתי טעות מביכה בישיבה." },
          { es: "No tener pelos en la lengua", he: "לומר דברים כפי שהם, בלי לעטוף", ex_es: "Ella no tiene pelos en la lengua.", ex_he: "היא אומרת הכל בלי כחל וסרק." },
          { es: "Dar en el clavo", he: "לפגוע בול", ex_es: "Con esa idea diste en el clavo.", ex_he: "עם הרעיון הזה פגעת בול." },
          { es: "Estar como una cabra", he: "להיות משוגע/מוזר", ex_es: "Mi vecino está como una cabra.", ex_he: "השכן שלי משוגע." },
          { es: "Ponerse las pilas", he: "להתאמץ/להתעורר לפעולה", ex_es: "¡Ponte las pilas y trabaja!", ex_he: "תתעורר ותעבוד!" },
          { es: "A otro perro con ese hueso", he: "ספר לזה עוד סיפור (ביטוי ספקנות)", ex_es: "No te creo, a otro perro con ese hueso.", ex_he: "אני לא מאמין לך, ספר את זה למישהו אחר." }
        ],
        sentences: [
          { es: "El nuevo teléfono cuesta un ojo de la cara.", he: "הטלפון החדש עולה הון תועפות." },
          { es: "Metí la pata cuando llamé al cliente por otro nombre.", he: "עשיתי טעות מביכה כשקראתי ללקוח בשם אחר." },
          { es: "Tienes que ponerte las pilas antes del examen.", he: "אתה צריך להתעורר לפעולה לפני המבחן." },
          { es: "Para ella, el proyecto fue pan comido.", he: "בשבילה, הפרויקט היה קלי קלות." },
          { es: "Con su comentario, dio en el clavo.", he: "עם ההערה שלו, הוא פגע בול." }
        ]
      },
      {
        id: "past_tenses",
        name: "עבר מורכב: Imperfecto מול Indefinido",
        vocab: [
          { es: "Yo era (imperfecto)", he: "הייתי (מצב מתמשך בעבר)", ex_es: "Cuando era niño, jugaba fútbol.", ex_he: "כשהייתי ילד, שיחקתי כדורגל." },
          { es: "Yo fui (indefinido)", he: "הייתי/הלכתי (פעולה חד-פעמית)", ex_es: "Ayer fui al médico.", ex_he: "אתמול הלכתי לרופא." },
          { es: "Mientras", he: "בזמן ש...", ex_es: "Mientras cocinaba, sonó el teléfono.", ex_he: "בזמן שבישלתי, הטלפון צלצל." },
          { es: "De repente", he: "לפתע", ex_es: "De repente empezó a llover.", ex_he: "לפתע התחיל לרדת גשם." },
          { es: "Siempre (con imperfecto)", he: "תמיד (הרגל בעבר)", ex_es: "Siempre visitábamos a mi abuela.", ex_he: "תמיד ביקרנו את סבתא שלי." },
          { es: "Una vez", he: "פעם אחת", ex_es: "Una vez viajé a Perú.", ex_he: "פעם אחת טסתי לפרו." },
          { es: "Cuando + imperfecto", he: "כש... (רקע)", ex_es: "Cuando vivía en Chile, aprendí español.", ex_he: "כשגרתי בצ'ילה, למדתי ספרדית." },
          { es: "Interrumpir", he: "להפריע/לקטוע", ex_es: "La llamada interrumpió la reunión.", ex_he: "השיחה קטעה את הישיבה." },
          { es: "Se rompió", he: "זה נשבר", ex_es: "El vaso se rompió.", ex_he: "הכוס נשברה." },
          { es: "Estaba lloviendo", he: "היה יורד גשם", ex_es: "Estaba lloviendo cuando salí.", ex_he: "היה יורד גשם כשיצאתי." }
        ],
        sentences: [
          { es: "Cuando era joven, viajaba mucho por Europa.", he: "כשהייתי צעיר, נסעתי הרבה באירופה." },
          { es: "Estaba durmiendo cuando sonó el teléfono.", he: "ישנתי כשהטלפון צלצל." },
          { es: "De repente, todos empezaron a aplaudir.", he: "לפתע, כולם התחילו למחוא כפיים." },
          { es: "Mientras trabajaba, recibí una llamada importante.", he: "בזמן שעבדתי, קיבלתי שיחה חשובה." },
          { es: "Una vez conocí a un actor famoso.", he: "פעם אחת פגשתי שחקן מפורסם." }
        ]
      },
      {
        id: "formal_writing",
        name: "כתיבה רשמית ומיילים",
        vocab: [
          { es: "Estimado/a señor/a", he: "לכבוד אדון/גברת (פתיחה רשמית)", ex_es: "Estimada señora García:", ex_he: "לכבוד גברת גרסיה:" },
          { es: "Le escribo para...", he: "אני כותב לך כדי...", ex_es: "Le escribo para solicitar información.", ex_he: "אני כותב לך כדי לבקש מידע." },
          { es: "Adjunto encontrará", he: "מצורף בזאת", ex_es: "Adjunto encontrará el informe.", ex_he: "מצורף בזאת הדוח." },
          { es: "Quedo a la espera de su respuesta", he: "אני ממתין לתשובתך", ex_es: "Quedo a la espera de su respuesta.", ex_he: "אני ממתין לתשובתך." },
          { es: "Atentamente", he: "בברכה", ex_es: "Atentamente, Juan Pérez.", ex_he: "בברכה, חואן פרס." },
          { es: "Solicitar", he: "לבקש (רשמית)", ex_es: "Quiero solicitar una reunión.", ex_he: "אני רוצה לבקש פגישה." },
          { es: "Confirmar", he: "לאשר", ex_es: "Quiero confirmar la cita.", ex_he: "אני רוצה לאשר את הפגישה." },
          { es: "Lamento informarle", he: "אני מצטער להודיע לך", ex_es: "Lamento informarle que el vuelo se canceló.", ex_he: "אני מצטער להודיע שהטיסה בוטלה." },
          { es: "En referencia a", he: "בהתייחס ל...", ex_es: "En referencia a su correo anterior...", ex_he: "בהתייחס למייל הקודם שלך..." },
          { es: "Un cordial saludo", he: "בברכה חמה", ex_es: "Un cordial saludo, el equipo.", ex_he: "בברכה חמה, הצוות." }
        ],
        sentences: [
          { es: "Estimado señor López, le escribo para confirmar la reunión.", he: "לכבוד מר לופז, אני כותב כדי לאשר את הפגישה." },
          { es: "Adjunto encontrará el contrato firmado.", he: "מצורף בזאת החוזה החתום." },
          { es: "Lamento informarle que el proyecto se retrasó.", he: "אני מצטער להודיע שהפרויקט התעכב." },
          { es: "Quedo a la espera de su respuesta. Atentamente.", he: "אני ממתין לתשובתך. בברכה." },
          { es: "En referencia a su solicitud, adjunto el informe.", he: "בהתייחס לבקשתך, מצורף הדוח." }
        ]
      },
      {
        id: "news_opinions",
        name: "חדשות, דעות ודיונים",
        vocab: [
          { es: "En mi opinión", he: "לדעתי", ex_es: "En mi opinión, es una buena idea.", ex_he: "לדעתי, זה רעיון טוב." },
          { es: "Por un lado... por otro lado", he: "מצד אחד... מצד שני", ex_es: "Por un lado es caro, por otro lado es útil.", ex_he: "מצד אחד זה יקר, מצד שני זה שימושי." },
          { es: "Estoy de acuerdo", he: "אני מסכים", ex_es: "Estoy de acuerdo contigo.", ex_he: "אני מסכים איתך." },
          { es: "No estoy de acuerdo", he: "אני לא מסכים", ex_es: "No estoy de acuerdo con esa política.", ex_he: "אני לא מסכים עם המדיניות הזו." },
          { es: "El titular", he: "הכותרת (בעיתון)", ex_es: "El titular fue muy impactante.", ex_he: "הכותרת הייתה מאוד מדהימה." },
          { es: "La polémica", he: "המחלוקת", ex_es: "El tema generó mucha polémica.", ex_he: "הנושא יצר הרבה מחלוקת." },
          { es: "Según los expertos", he: "לפי המומחים", ex_es: "Según los expertos, la economía crecerá.", ex_he: "לפי המומחים, הכלכלה תצמח." },
          { es: "El punto de vista", he: "נקודת המבט", ex_es: "Respeto tu punto de vista.", ex_he: "אני מכבד את נקודת המבט שלך." },
          { es: "Debatir", he: "להתווכח/לדון", ex_es: "Vamos a debatir el tema mañana.", ex_he: "אנחנו נדון בנושא מחר." },
          { es: "Al fin y al cabo", he: "בסופו של דבר", ex_es: "Al fin y al cabo, todos ganamos.", ex_he: "בסופו של דבר, כולנו ניצחנו." }
        ],
        sentences: [
          { es: "En mi opinión, deberíamos cambiar la estrategia.", he: "לדעתי, כדאי שנשנה את האסטרטגיה." },
          { es: "Según los expertos, la situación va a mejorar.", he: "לפי המומחים, המצב הולך להשתפר." },
          { es: "Por un lado quiero viajar, por otro lado necesito ahorrar.", he: "מצד אחד אני רוצה לטייל, מצד שני אני צריך לחסוך." },
          { es: "El titular de la noticia generó mucha polémica.", he: "כותרת החדשות יצרה הרבה מחלוקת." },
          { es: "Al fin y al cabo, decidimos no debatir más.", he: "בסופו של דבר, החלטנו לא להתווכח יותר." }
        ]
      }
    ]
  }
};
