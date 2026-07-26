// ===== נתוני רמת "בינוניים" =====
// קובץ זה הוא חלק ממאגר הנתונים המפוצל (ראו js/data.js למאסף). אותה צורת נתונים בדיוק כמו
// שהייתה מקוננת בעבר בתוך data.js אחד - LEVELS.intermediate ימשיך להצביע לאותו תוכן.

const LEVEL_INTERMEDIATE = {
  id: "intermediate",
  name: "בינוניים",
  icon: "🚀",
  color: "#3b82f6",
  topics: [
    {
      id: "present_regular",
      name: "פעלים רגילים בהווה (AR/ER/IR)",
      vocab: [
        { id: "intermediate_present_regular_0", es: "Hablar (yo hablo)", he: "לדבר (אני מדבר)", ex_es: "Yo hablo español.", ex_he: "אני מדבר ספרדית." },
        { id: "intermediate_present_regular_1", es: "Comer (yo como)", he: "לאכול (אני אוכל)", ex_es: "Yo como a las dos.", ex_he: "אני אוכל בשתיים." },
        { id: "intermediate_present_regular_2", es: "Vivir (yo vivo)", he: "לגור (אני גר)", ex_es: "Yo vivo en Madrid.", ex_he: "אני גר במדריד." },
        { id: "intermediate_present_regular_3", es: "Trabajar (tú trabajas)", he: "לעבוד (אתה עובד)", ex_es: "Tú trabajas mucho.", ex_he: "אתה עובד הרבה." },
        { id: "intermediate_present_regular_4", es: "Estudiar (ella estudia)", he: "ללמוד (היא לומדת)", ex_es: "Ella estudia inglés.", ex_he: "היא לומדת אנגלית." },
        { id: "intermediate_present_regular_5", es: "Leer (nosotros leemos)", he: "לקרוא (אנחנו קוראים)", ex_es: "Nosotros leemos un libro.", ex_he: "אנחנו קוראים ספר." },
        { id: "intermediate_present_regular_6", es: "Escribir (ellos escriben)", he: "לכתוב (הם כותבים)", ex_es: "Ellos escriben cartas.", ex_he: "הם כותבים מכתבים." },
        { id: "intermediate_present_regular_7", es: "Abrir (yo abro)", he: "לפתוח (אני פותח)", ex_es: "Yo abro la puerta.", ex_he: "אני פותח את הדלת." },
        { id: "intermediate_present_regular_8", es: "Beber (tú bebes)", he: "לשתות (אתה שותה)", ex_es: "Tú bebes agua.", ex_he: "אתה שותה מים." },
        { id: "intermediate_present_regular_9", es: "Correr (él corre)", he: "לרוץ (הוא רץ)", ex_es: "Él corre por la mañana.", ex_he: "הוא רץ בבוקר." },
        { id: "intermediate_present_regular_10", es: "Entender (yo entiendo)", he: "להבין (אני מבין)", ex_es: "Yo entiendo un poco de español.", ex_he: "אני מבין קצת ספרדית." },
        { id: "intermediate_present_regular_11", es: "Poder (yo puedo)", he: "להיות מסוגל (אני יכול)", ex_es: "Yo puedo ayudarte.", ex_he: "אני יכול לעזור לך." },
        { id: "intermediate_present_regular_12", es: "Querer (tú quieres)", he: "לרצות (אתה רוצה)", ex_es: "¿Qué quieres comer?", ex_he: "מה אתה רוצה לאכול?" },
        { id: "intermediate_present_regular_13", es: "Salir (yo salgo)", he: "לצאת (אני יוצא)", ex_es: "Yo salgo de casa a las ocho.", ex_he: "אני יוצא מהבית בשמונה." },
        { id: "intermediate_present_regular_14", es: "Empezar (nosotros empezamos)", he: "להתחיל (אנחנו מתחילים)", ex_es: "Nosotros empezamos la clase a las nueve.", ex_he: "אנחנו מתחילים את השיעור בתשע." }
      ],
      sentences: [
        { es: "Yo hablo español todos los días.", he: "אני מדבר ספרדית כל יום." },
        { es: "Ella vive cerca de la playa.", he: "היא גרה קרוב לחוף הים." },
        { es: "Nosotros comemos juntos los viernes.", he: "אנחנו אוכלים ביחד בימי שישי." },
        { es: "Ellos escriben un correo electrónico.", he: "הם כותבים אימייל." },
        { es: "Tú trabajas en una oficina grande.", he: "אתה עובד במשרד גדול." },
        { es: "¿Puedes ayudarme con esta tarea?", he: "אתה יכול לעזור לי עם המטלה הזו?" },
        { es: "Ella no entiende la pregunta.", he: "היא לא מבינה את השאלה." },
        { es: "Empezamos a trabajar temprano los lunes.", he: "אנחנו מתחילים לעבוד מוקדם בימי שני." }
      ]
    },
    {
      id: "preterito",
      name: "עבר פשוט - Pretérito Indefinido",
      vocab: [
        { id: "intermediate_preterito_0", es: "Yo hablé", he: "אני דיברתי", ex_es: "Ayer yo hablé con ella.", ex_he: "אתמול דיברתי איתה." },
        { id: "intermediate_preterito_1", es: "Tú comiste", he: "אתה אכלת", ex_es: "Tú comiste pizza anoche.", ex_he: "אכלת פיצה אתמול בלילה." },
        { id: "intermediate_preterito_2", es: "Él vivió", he: "הוא גר (בעבר)", ex_es: "Él vivió en Francia.", ex_he: "הוא גר בצרפת." },
        { id: "intermediate_preterito_3", es: "Nosotros fuimos", he: "אנחנו היינו/הלכנו", ex_es: "Nosotros fuimos al cine.", ex_he: "הלכנו לקולנוע." },
        { id: "intermediate_preterito_4", es: "Ellos hicieron", he: "הם עשו", ex_es: "Ellos hicieron la tarea.", ex_he: "הם עשו את שיעורי הבית." },
        { id: "intermediate_preterito_5", es: "Yo tuve", he: "היה לי", ex_es: "Yo tuve un examen difícil.", ex_he: "היה לי מבחן קשה." },
        { id: "intermediate_preterito_6", es: "Ella dijo", he: "היא אמרה", ex_es: "Ella dijo la verdad.", ex_he: "היא אמרה את האמת." },
        { id: "intermediate_preterito_7", es: "Nosotros vimos", he: "ראינו", ex_es: "Nosotros vimos una película.", ex_he: "ראינו סרט." },
        { id: "intermediate_preterito_8", es: "Ayer", he: "אתמול", ex_es: "Ayer llovió mucho.", ex_he: "אתמול ירד הרבה גשם." },
        { id: "intermediate_preterito_9", es: "La semana pasada", he: "השבוע שעבר", ex_es: "La semana pasada viajé a Roma.", ex_he: "השבוע שעבר טסתי לרומא." },
        { id: "intermediate_preterito_10", es: "Yo fui", he: "הייתי / הלכתי", ex_es: "Yo fui al mercado ayer.", ex_he: "הלכתי לשוק אתמול." },
        { id: "intermediate_preterito_11", es: "Ella pudo", he: "היא הצליחה/יכלה", ex_es: "Ella pudo terminar el proyecto.", ex_he: "היא הצליחה לסיים את הפרויקט." },
        { id: "intermediate_preterito_12", es: "Nosotros llegamos", he: "הגענו", ex_es: "Nosotros llegamos tarde a la fiesta.", ex_he: "הגענו מאוחר למסיבה." },
        { id: "intermediate_preterito_13", es: "Ellos vinieron", he: "הם באו", ex_es: "Ellos vinieron de visita el sábado.", ex_he: "הם באו לביקור בשבת." },
        { id: "intermediate_preterito_14", es: "Anoche", he: "אמש", ex_es: "Anoche cenamos en un restaurante nuevo.", ex_he: "אמש אכלנו ארוחת ערב במסעדה חדשה." }
      ],
      sentences: [
        { es: "Ayer hablé con mi jefe.", he: "אתמול דיברתי עם הבוס שלי." },
        { es: "Ellos hicieron un viaje increíble.", he: "הם עשו טיול מדהים." },
        { es: "Nosotros fuimos al concierto anoche.", he: "הלכנו להופעה אתמול בלילה." },
        { es: "Ella dijo que llegó tarde.", he: "היא אמרה שהיא הגיעה מאוחר." },
        { es: "La semana pasada tuve mucho trabajo.", he: "השבוע שעבר היה לי הרבה עבודה." },
        { es: "Anoche vimos una película muy interesante.", he: "אמש ראינו סרט מאוד מעניין." },
        { es: "Ellos vinieron a visitarnos la semana pasada.", he: "הם באו לבקר אותנו בשבוע שעבר." },
        { es: "¿A qué hora llegaste a casa?", he: "באיזו שעה הגעת הביתה?" }
      ]
    },
    {
      id: "adjectives",
      name: "תארים ותיאור אנשים",
      vocab: [
        { id: "intermediate_adjectives_0", es: "Alto / Alta", he: "גבוה / גבוהה", ex_es: "Mi hermano es muy alto.", ex_he: "אחי גבוה מאוד." },
        { id: "intermediate_adjectives_1", es: "Bajo / Baja", he: "נמוך / נמוכה", ex_es: "La mesa es baja.", ex_he: "השולחן נמוך." },
        { id: "intermediate_adjectives_2", es: "Simpático / Simpática", he: "נחמד / נחמדה", ex_es: "Ella es muy simpática.", ex_he: "היא מאוד נחמדה." },
        { id: "intermediate_adjectives_3", es: "Inteligente", he: "חכם/ה", ex_es: "Es un chico inteligente.", ex_he: "הוא ילד חכם." },
        { id: "intermediate_adjectives_4", es: "Divertido / Divertida", he: "מצחיק / מצחיקה", ex_es: "La película fue divertida.", ex_he: "הסרט היה מצחיק." },
        { id: "intermediate_adjectives_5", es: "Aburrido / Aburrida", he: "משעמם / משעממת", ex_es: "El libro es aburrido.", ex_he: "הספר משעמם." },
        { id: "intermediate_adjectives_6", es: "Trabajador / Trabajadora", he: "חרוץ / חרוצה", ex_es: "Es una mujer trabajadora.", ex_he: "היא אישה חרוצה." },
        { id: "intermediate_adjectives_7", es: "Perezoso / Perezosa", he: "עצלן / עצלנית", ex_es: "El gato es muy perezoso.", ex_he: "החתול מאוד עצלן." },
        { id: "intermediate_adjectives_8", es: "Amable", he: "אדיב/ה", ex_es: "El profesor es amable.", ex_he: "המורה אדיב." },
        { id: "intermediate_adjectives_9", es: "Generoso / Generosa", he: "נדיב / נדיבה", ex_es: "Su tío es muy generoso.", ex_he: "הדוד שלו מאוד נדיב." },
        { id: "intermediate_adjectives_10", es: "Cariñoso / Cariñosa", he: "חם / חמה (במזג)", ex_es: "Mi abuela es muy cariñosa.", ex_he: "סבתא שלי מאוד חמה." },
        { id: "intermediate_adjectives_11", es: "Tímido / Tímida", he: "ביישן / ביישנית", ex_es: "El niño es tímido con extraños.", ex_he: "הילד ביישן מול זרים." },
        { id: "intermediate_adjectives_12", es: "Curioso / Curiosa", he: "סקרן / סקרנית", ex_es: "Los gatos son muy curiosos.", ex_he: "חתולים מאוד סקרנים." },
        { id: "intermediate_adjectives_13", es: "Paciente", he: "סבלני/ת", ex_es: "El profesor es muy paciente.", ex_he: "המורה מאוד סבלני." },
        { id: "intermediate_adjectives_14", es: "Honesto / Honesta", he: "כן / כנה, ישר / ישרה", ex_es: "Necesitamos un empleado honesto.", ex_he: "אנחנו צריכים עובד ישר." }
      ],
      sentences: [
        { es: "Mi amiga es alta e inteligente.", he: "החברה שלי גבוהה וחכמה." },
        { es: "El nuevo empleado parece muy trabajador.", he: "העובד החדש נראה חרוץ מאוד." },
        { es: "Este programa de televisión es aburrido.", he: "התוכנית טלוויזיה הזו משעממת." },
        { es: "Mis padres son muy generosos.", he: "ההורים שלי מאוד נדיבים." },
        { es: "El perro es divertido y simpático.", he: "הכלב מצחיק ונחמד." },
        { es: "Mi hermana es tímida pero muy curiosa.", he: "אחותי ביישנית אבל מאוד סקרנית." },
        { es: "Necesitamos ser pacientes con los nuevos estudiantes.", he: "אנחנו צריכים להיות סבלניים עם התלמידים החדשים." },
        { es: "Es una persona honesta y cariñosa.", he: "היא אדם ישר וחם." }
      ]
    },
    {
      id: "home_routine",
      name: "הבית והיומיום",
      vocab: [
        { id: "intermediate_home_routine_0", es: "Levantarse", he: "לקום (מהמיטה)", ex_es: "Me levanto a las siete.", ex_he: "אני קם בשבע." },
        { id: "intermediate_home_routine_1", es: "Ducharse", he: "להתקלח", ex_es: "Me ducho por la mañana.", ex_he: "אני מתקלח בבוקר." },
        { id: "intermediate_home_routine_2", es: "Desayunar", he: "לאכול ארוחת בוקר", ex_es: "Desayuno café y pan.", ex_he: "אני אוכל ארוחת בוקר קפה ולחם." },
        { id: "intermediate_home_routine_3", es: "La cocina", he: "המטבח", ex_es: "Cocino en la cocina.", ex_he: "אני מבשל במטבח." },
        { id: "intermediate_home_routine_4", es: "El dormitorio", he: "חדר השינה", ex_es: "Mi dormitorio es pequeño.", ex_he: "חדר השינה שלי קטן." },
        { id: "intermediate_home_routine_5", es: "Limpiar", he: "לנקות", ex_es: "Limpio la casa los sábados.", ex_he: "אני מנקה את הבית בימי שבת." },
        { id: "intermediate_home_routine_6", es: "Acostarse", he: "ללכת לישון", ex_es: "Me acuesto a las once.", ex_he: "אני הולך לישון באחת עשרה." },
        { id: "intermediate_home_routine_7", es: "El horario", he: "לוח הזמנים", ex_es: "Mi horario es complicado.", ex_he: "לוח הזמנים שלי מסובך." },
        { id: "intermediate_home_routine_8", es: "Todos los días", he: "כל יום", ex_es: "Hago ejercicio todos los días.", ex_he: "אני מתאמן כל יום." },
        { id: "intermediate_home_routine_9", es: "Normalmente", he: "בדרך כלל", ex_es: "Normalmente ceno a las ocho.", ex_he: "בדרך כלל אני אוכל ארוחת ערב בשמונה." },
        { id: "intermediate_home_routine_10", es: "Vestirse", he: "להתלבש", ex_es: "Me visto rápido por la mañana.", ex_he: "אני מתלבש מהר בבוקר." },
        { id: "intermediate_home_routine_11", es: "El baño", he: "חדר האמבטיה", ex_es: "El baño está al final del pasillo.", ex_he: "חדר האמבטיה נמצא בסוף המסדרון." },
        { id: "intermediate_home_routine_12", es: "Lavar los platos", he: "לשטוף כלים", ex_es: "Lavo los platos después de cenar.", ex_he: "אני שוטף כלים אחרי ארוחת הערב." },
        { id: "intermediate_home_routine_13", es: "Salir de casa", he: "לצאת מהבית", ex_es: "Salgo de casa a las siete y media.", ex_he: "אני יוצא מהבית בשבע וחצי." },
        { id: "intermediate_home_routine_14", es: "Descansar", he: "לנוח", ex_es: "Los domingos descanso todo el día.", ex_he: "בימי ראשון אני נח כל היום." }
      ],
      sentences: [
        { es: "Normalmente me levanto a las seis y media.", he: "בדרך כלל אני קם בשש וחצי." },
        { es: "Después de desayunar, voy al trabajo.", he: "אחרי ארוחת הבוקר, אני הולך לעבודה." },
        { es: "Limpio la cocina todos los días.", he: "אני מנקה את המטבח כל יום." },
        { es: "Me acuesto tarde los fines de semana.", he: "אני הולך לישון מאוחר בסופי שבוע." },
        { es: "Mi horario de trabajo es muy flexible.", he: "לוח הזמנים שלי בעבודה מאוד גמיש." },
        { es: "Me visto y desayuno antes de salir de casa.", he: "אני מתלבש ואוכל ארוחת בוקר לפני שאני יוצא מהבית." },
        { es: "¿Quién lava los platos hoy?", he: "מי שוטף כלים היום?" },
        { es: "Los fines de semana me gusta descansar en casa.", he: "בסופי השבוע אני אוהב לנוח בבית." }
      ]
    },
    {
      id: "work_professions",
      name: "עבודה ומקצועות",
      vocab: [
        { id: "intermediate_work_professions_0", es: "El trabajo", he: "העבודה", ex_es: "Me gusta mi trabajo.", ex_he: "אני אוהב את העבודה שלי." },
        { id: "intermediate_work_professions_1", es: "La empresa", he: "החברה (עסקית)", ex_es: "Trabajo en una empresa grande.", ex_he: "אני עובד בחברה גדולה." },
        { id: "intermediate_work_professions_2", es: "El jefe / La jefa", he: "הבוס", ex_es: "Mi jefe es muy exigente.", ex_he: "הבוס שלי מאוד דרשני." },
        { id: "intermediate_work_professions_3", es: "El médico / La médica", he: "הרופא/ה", ex_es: "El médico revisa al paciente.", ex_he: "הרופא בודק את המטופל." },
        { id: "intermediate_work_professions_4", es: "El abogado / La abogada", he: "עורך/ת דין", ex_es: "La abogada ganó el caso.", ex_he: "עורכת הדין ניצחה בתיק." },
        { id: "intermediate_work_professions_5", es: "El ingeniero / La ingeniera", he: "מהנדס/ת", ex_es: "El ingeniero diseña puentes.", ex_he: "המהנדס מתכנן גשרים." },
        { id: "intermediate_work_professions_6", es: "La reunión", he: "הישיבה", ex_es: "Tenemos una reunión mañana.", ex_he: "יש לנו ישיבה מחר." },
        { id: "intermediate_work_professions_7", es: "El sueldo", he: "המשכורת", ex_es: "El sueldo es bueno.", ex_he: "המשכורת טובה." },
        { id: "intermediate_work_professions_8", es: "Contratar", he: "להעסיק/לגייס", ex_es: "La empresa va a contratar más gente.", ex_he: "החברה הולכת לגייס עוד אנשים." },
        { id: "intermediate_work_professions_9", es: "Renunciar", he: "להתפטר", ex_es: "Ella decidió renunciar al trabajo.", ex_he: "היא החליטה להתפטר מהעבודה." },
        { id: "intermediate_work_professions_10", es: "El profesor / La profesora", he: "המורה", ex_es: "La profesora explica muy bien.", ex_he: "המורה מסבירה מאוד טוב." },
        { id: "intermediate_work_professions_11", es: "El vendedor / La vendedora", he: "המוכר / המוכרת", ex_es: "El vendedor fue muy amable.", ex_he: "המוכר היה מאוד אדיב." },
        { id: "intermediate_work_professions_12", es: "La entrevista", he: "הראיון (עבודה)", ex_es: "Tengo una entrevista de trabajo mañana.", ex_he: "יש לי ראיון עבודה מחר." },
        { id: "intermediate_work_professions_13", es: "El currículum", he: "קורות החיים", ex_es: "Envié mi currículum ayer.", ex_he: "שלחתי את קורות החיים שלי אתמול." },
        { id: "intermediate_work_professions_14", es: "Ganar dinero", he: "להרוויח כסף", ex_es: "Trabajo duro para ganar dinero.", ex_he: "אני עובד קשה כדי להרוויח כסף." }
      ],
      sentences: [
        { es: "Mi jefe convocó una reunión urgente.", he: "הבוס שלי כינס ישיבה דחופה." },
        { es: "La empresa quiere contratar dos ingenieros.", he: "החברה רוצה לגייס שני מהנדסים." },
        { es: "El médico trabaja doce horas al día.", he: "הרופא עובד שתים עשרה שעות ביום." },
        { es: "Ella renunció porque encontró otro trabajo.", he: "היא התפטרה כי מצאה עבודה אחרת." },
        { es: "El sueldo no es suficiente para vivir aquí.", he: "המשכורת לא מספיקה כדי לחיות כאן." },
        { es: "Tengo una entrevista de trabajo el lunes.", he: "יש לי ראיון עבודה ביום שני." },
        { es: "El vendedor me ayudó a elegir el regalo.", he: "המוכר עזר לי לבחור את המתנה." },
        { es: "Envié mi currículum a varias empresas.", he: "שלחתי את קורות החיים שלי לכמה חברות." }
      ]
    },
    {
      id: "directions",
      name: "כיוונים ותחבורה",
      vocab: [
        { id: "intermediate_directions_0", es: "A la derecha", he: "ימינה", ex_es: "Gira a la derecha.", ex_he: "פנה ימינה." },
        { id: "intermediate_directions_1", es: "A la izquierda", he: "שמאלה", ex_es: "El banco está a la izquierda.", ex_he: "הבנק נמצא משמאל." },
        { id: "intermediate_directions_2", es: "Todo recto", he: "ישר", ex_es: "Sigue todo recto.", ex_he: "המשך ישר." },
        { id: "intermediate_directions_3", es: "La estación", he: "התחנה", ex_es: "La estación está cerca.", ex_he: "התחנה קרובה." },
        { id: "intermediate_directions_4", es: "El autobús", he: "האוטובוס", ex_es: "Tomo el autobús cada día.", ex_he: "אני נוסע באוטובוס כל יום." },
        { id: "intermediate_directions_5", es: "El metro", he: "הרכבת התחתית", ex_es: "El metro es rápido.", ex_he: "הרכבת התחתית מהירה." },
        { id: "intermediate_directions_6", es: "El semáforo", he: "הרמזור", ex_es: "Para en el semáforo.", ex_he: "עצור ברמזור." },
        { id: "intermediate_directions_7", es: "La esquina", he: "הפינה", ex_es: "Está en la esquina.", ex_he: "זה נמצא בפינה." },
        { id: "intermediate_directions_8", es: "¿Cómo llego a...?", he: "איך אני מגיע ל...?", ex_es: "¿Cómo llego al museo?", ex_he: "איך אני מגיע למוזיאון?" },
        { id: "intermediate_directions_9", es: "Cerca / Lejos", he: "קרוב / רחוק", ex_es: "El hotel está lejos de aquí.", ex_he: "המלון רחוק מכאן." },
        { id: "intermediate_directions_10", es: "La parada de autobús", he: "תחנת האוטובוס", ex_es: "Espero en la parada de autobús.", ex_he: "אני מחכה בתחנת האוטובוס." },
        { id: "intermediate_directions_11", es: "El billete de tren", he: "כרטיס הרכבת", ex_es: "Compré el billete de tren en línea.", ex_he: "קניתי את כרטיס הרכבת באינטרנט." },
        { id: "intermediate_directions_12", es: "Cruzar la calle", he: "לחצות את הרחוב", ex_es: "Cruza la calle con cuidado.", ex_he: "חצה את הרחוב בזהירות." },
        { id: "intermediate_directions_13", es: "Perderse", he: "ללכת לאיבוד", ex_es: "Nos perdimos en el centro.", ex_he: "הלכנו לאיבוד במרכז העיר." },
        { id: "intermediate_directions_14", es: "Al lado de", he: "ליד", ex_es: "El banco está al lado de la farmacia.", ex_he: "הבנק נמצא ליד בית המרקחת." }
      ],
      sentences: [
        { es: "Gira a la izquierda en la esquina.", he: "פנה שמאלה בפינה." },
        { es: "¿Cómo llego a la estación de tren?", he: "איך אני מגיע לתחנת הרכבת?" },
        { es: "Sigue todo recto y verás el semáforo.", he: "המשך ישר ותראה את הרמזור." },
        { es: "El metro está muy cerca de mi casa.", he: "הרכבת התחתית מאוד קרובה לבית שלי." },
        { es: "Tomamos el autobús para ir al centro.", he: "אנחנו נוסעים באוטובוס למרכז העיר." },
        { es: "Nos perdimos buscando la estación de tren.", he: "הלכנו לאיבוד בחיפוש אחר תחנת הרכבת." },
        { es: "El museo está al lado del parque.", he: "המוזיאון נמצא ליד הפארק." },
        { es: "Compré el billete de tren con antelación.", he: "קניתי את כרטיס הרכבת מראש." }
      ]
    },
    {
      id: "travel",
      name: "נסיעות",
      vocab: [
        { id: "intermediate_travel_0", es: "La reserva", he: "ההזמנה (מלון/מסעדה)", ex_es: "Hice la reserva por internet.", ex_he: "עשיתי את ההזמנה באינטרנט." },
        { id: "intermediate_travel_1", es: "El vuelo con escala", he: "טיסה עם עצירת ביניים", ex_es: "Tomamos un vuelo con escala en Madrid.", ex_he: "טסנו בטיסה עם עצירת ביניים במדריד." },
        { id: "intermediate_travel_2", es: "El retraso", he: "העיכוב / האיחור", ex_es: "Hubo un retraso de dos horas.", ex_he: "היה עיכוב של שעתיים." },
        { id: "intermediate_travel_3", es: "La tarjeta de embarque", he: "כרטיס העלייה למטוס", ex_es: "No encuentro mi tarjeta de embarque.", ex_he: "אני לא מוצא את כרטיס העלייה שלי למטוס." },
        { id: "intermediate_travel_4", es: "El equipaje", he: "המטען / הכבודה", ex_es: "Perdimos el equipaje en el aeropuerto.", ex_he: "איבדנו את הכבודה שלנו בשדה התעופה." },
        { id: "intermediate_travel_5", es: "La recepción", he: "הקבלה (במלון)", ex_es: "Pregunta en la recepción del hotel.", ex_he: "שאל בקבלה של המלון." },
        { id: "intermediate_travel_6", es: "Alquilar un coche", he: "לשכור רכב", ex_es: "Vamos a alquilar un coche en el aeropuerto.", ex_he: "אנחנו הולכים לשכור רכב בשדה התעופה." },
        { id: "intermediate_travel_7", es: "El seguro de viaje", he: "ביטוח נסיעות", ex_es: "Compré un seguro de viaje antes del viaje.", ex_he: "קניתי ביטוח נסיעות לפני הטיול." },
        { id: "intermediate_travel_8", es: "Facturar el equipaje", he: "לרשום את הכבודה", ex_es: "Tienes que facturar el equipaje antes de las ocho.", ex_he: "אתה צריך לרשום את הכבודה לפני שמונה." },
        { id: "intermediate_travel_9", es: "Quejarse", he: "להתלונן", ex_es: "Quiero quejarme sobre la habitación.", ex_he: "אני רוצה להתלונן על החדר." },
        { id: "intermediate_travel_10", es: "El itinerario", he: "מסלול הטיול", ex_es: "Nuestro itinerario incluye tres ciudades.", ex_he: "מסלול הטיול שלנו כולל שלוש ערים." },
        { id: "intermediate_travel_11", es: "Cancelar el vuelo", he: "לבטל את הטיסה", ex_es: "Cancelaron el vuelo por el clima.", ex_he: "הם ביטלו את הטיסה בגלל מזג האוויר." }
      ],
      sentences: [
        { es: "Nuestro vuelo tuvo un retraso de tres horas.", he: "לטיסה שלנו היה עיכוב של שלוש שעות." },
        { es: "Perdimos la conexión por culpa del retraso.", he: "פספסנו את טיסת ההמשך בגלל העיכוב." },
        { es: "Voy a quejarme en la recepción del hotel.", he: "אני הולך להתלונן בקבלה של המלון." },
        { es: "Alquilamos un coche para recorrer la costa.", he: "שכרנו רכב כדי לסייר לאורך החוף." },
        { es: "Cancelaron el vuelo debido a una tormenta.", he: "הם ביטלו את הטיסה בגלל סופה." }
      ]
    },
    {
      id: "emotions",
      name: "רגשות",
      vocab: [
        { id: "intermediate_emotions_0", es: "Feliz", he: "שמח", ex_es: "Estoy muy feliz hoy.", ex_he: "אני מאוד שמח היום." },
        { id: "intermediate_emotions_1", es: "Triste", he: "עצוב", ex_es: "Se siente triste porque perdió el partido.", ex_he: "הוא מרגיש עצוב כי הוא הפסיד במשחק." },
        { id: "intermediate_emotions_2", es: "Enojado / Enfadado", he: "כועס", ex_es: "Está enojado con su hermano.", ex_he: "הוא כועס על אחיו." },
        { id: "intermediate_emotions_3", es: "Cansado", he: "עייף", ex_es: "Estoy muy cansado después del trabajo.", ex_he: "אני מאוד עייף אחרי העבודה." },
        { id: "intermediate_emotions_4", es: "Emocionado", he: "נרגש", ex_es: "Estamos emocionados por el viaje.", ex_he: "אנחנו נרגשים לקראת הטיול." },
        { id: "intermediate_emotions_5", es: "Preocupado", he: "מודאג", ex_es: "Mi madre está preocupada por mí.", ex_he: "אמא שלי מודאגת ממני." },
        { id: "intermediate_emotions_6", es: "Asustado", he: "מפוחד", ex_es: "El niño está asustado de la oscuridad.", ex_he: "הילד מפוחד מהחושך." },
        { id: "intermediate_emotions_7", es: "Sorprendido", he: "מופתע", ex_es: "Me quedé sorprendido con la noticia.", ex_he: "נשארתי מופתע מהחדשות." },
        { id: "intermediate_emotions_8", es: "Enamorado", he: "מאוהב", ex_es: "Está enamorado de ella desde hace un año.", ex_he: "הוא מאוהב בה כבר שנה." },
        { id: "intermediate_emotions_9", es: "Aburrido", he: "משועמם", ex_es: "Los niños están aburridos en casa.", ex_he: "הילדים משועממים בבית." },
        { id: "intermediate_emotions_10", es: "Nervioso", he: "עצבני / לחוץ", ex_es: "Estoy nervioso antes del examen.", ex_he: "אני לחוץ לפני המבחן." },
        { id: "intermediate_emotions_11", es: "Orgulloso", he: "גאה", ex_es: "Estoy orgulloso de mi hija.", ex_he: "אני גאה בבת שלי." },
        { id: "intermediate_emotions_12", es: "Decepcionado", he: "מאוכזב", ex_es: "Quedé decepcionado con el resultado.", ex_he: "נשארתי מאוכזב מהתוצאה." },
        { id: "intermediate_emotions_13", es: "Tranquilo / Relajado", he: "רגוע", ex_es: "Después de las vacaciones me siento tranquilo.", ex_he: "אחרי החופשה אני מרגיש רגוע." },
        { id: "intermediate_emotions_14", es: "¿Cómo te sientes?", he: "איך אתה מרגיש?", ex_es: "¿Cómo te sientes hoy?", ex_he: "איך אתה מרגיש היום?" },
        { id: "intermediate_emotions_15", es: "Me siento...", he: "אני מרגיש...", ex_es: "Me siento muy bien hoy.", ex_he: "אני מרגיש מאוד טוב היום." },
        { id: "intermediate_emotions_16", es: "Tener miedo de", he: "לפחד מ...", ex_es: "Tengo miedo de las alturas.", ex_he: "אני מפחד מגבהים." },
        { id: "intermediate_emotions_17", es: "Estar de buen/mal humor", he: "להיות במצב רוח טוב/רע", ex_es: "Hoy estoy de muy buen humor.", ex_he: "היום אני במצב רוח מאוד טוב." }
      ],
      sentences: [
        { es: "Me siento muy feliz cuando estoy con mi familia.", he: "אני מרגיש מאוד שמח כשאני עם המשפחה שלי." },
        { es: "Ella está triste porque su amigo se fue.", he: "היא עצובה כי החבר שלה עזב." },
        { es: "¿Por qué estás tan nervioso hoy?", he: "למה אתה כל כך לחוץ היום?" },
        { es: "Estamos emocionados por empezar el nuevo trabajo.", he: "אנחנו נרגשים להתחיל בעבודה החדשה." },
        { es: "Mi padre está muy orgulloso de mis notas.", he: "אבא שלי מאוד גאה בציונים שלי." },
        { es: "No tengas miedo, todo va a salir bien.", he: "אל תפחד, הכל יסתדר." },
        { es: "Después de dormir bien, me siento tranquilo.", he: "אחרי שינה טובה, אני מרגיש רגוע." }
      ]
    },
    {
      id: "daily_conversations",
      name: "שיחות יומיומיות",
      vocab: [
        { id: "intermediate_daily_conversations_0", es: "No entiendo", he: "אני לא מבין", ex_es: "Perdón, no entiendo lo que dices.", ex_he: "סליחה, אני לא מבין מה שאתה אומר." },
        { id: "intermediate_daily_conversations_1", es: "¿Puedes repetir, por favor?", he: "אתה יכול לחזור, בבקשה?", ex_es: "¿Puedes repetir la pregunta, por favor?", ex_he: "אתה יכול לחזור על השאלה, בבקשה?" },
        { id: "intermediate_daily_conversations_2", es: "¿Cómo se dice...?", he: "איך אומרים...?", ex_es: "¿Cómo se dice 'gato' en inglés?", ex_he: "איך אומרים 'חתול' באנגלית?" },
        { id: "intermediate_daily_conversations_3", es: "Estoy de acuerdo", he: "אני מסכים", ex_es: "Estoy de acuerdo contigo.", ex_he: "אני מסכים איתך." },
        { id: "intermediate_daily_conversations_4", es: "No estoy de acuerdo", he: "אני לא מסכים", ex_es: "No estoy de acuerdo con esa idea.", ex_he: "אני לא מסכים עם הרעיון הזה." },
        { id: "intermediate_daily_conversations_5", es: "Vamos", he: "בוא נלך / קדימה", ex_es: "Vamos, se hace tarde.", ex_he: "בוא נלך, נהיה מאוחר." },
        { id: "intermediate_daily_conversations_6", es: "Espera un momento", he: "חכה רגע", ex_es: "Espera un momento, ya vuelvo.", ex_he: "חכה רגע, אני כבר חוזר." },
        { id: "intermediate_daily_conversations_7", es: "No hay problema", he: "אין בעיה", ex_es: "No hay problema, puedo ayudarte.", ex_he: "אין בעיה, אני יכול לעזור לך." },
        { id: "intermediate_daily_conversations_8", es: "Claro que sí", he: "בטח שכן / כמובן", ex_es: "¿Puedes venir? Claro que sí.", ex_he: "אתה יכול לבוא? בטח שכן." },
        { id: "intermediate_daily_conversations_9", es: "Creo que...", he: "אני חושב ש...", ex_es: "Creo que va a llover hoy.", ex_he: "אני חושב שירד גשם היום." },
        { id: "intermediate_daily_conversations_10", es: "En mi opinión", he: "לדעתי", ex_es: "En mi opinión, es una buena idea.", ex_he: "לדעתי, זה רעיון טוב." },
        { id: "intermediate_daily_conversations_11", es: "¿Me puedes ayudar?", he: "אתה יכול לעזור לי?", ex_es: "¿Me puedes ayudar con esto?", ex_he: "אתה יכול לעזור לי עם זה?" },
        { id: "intermediate_daily_conversations_12", es: "Tienes razón", he: "אתה צודק", ex_es: "Tienes razón, fue mi error.", ex_he: "אתה צודק, זו הייתה הטעות שלי." },
        { id: "intermediate_daily_conversations_13", es: "No pasa nada", he: "זה בסדר / לא קרה כלום", ex_es: "No pasa nada, no te preocupes.", ex_he: "זה בסדר, אל תדאג." },
        { id: "intermediate_daily_conversations_14", es: "¡Qué bien!", he: "כמה נחמד! / איזה כיף!", ex_es: "¡Qué bien que viniste!", ex_he: "איזה כיף שבאת!" },
        { id: "intermediate_daily_conversations_15", es: "¡Qué lástima!", he: "איזה חבל!", ex_es: "¡Qué lástima que no puedas venir!", ex_he: "איזה חבל שאתה לא יכול לבוא!" },
        { id: "intermediate_daily_conversations_16", es: "Depende", he: "זה תלוי", ex_es: "¿Vienes mañana? Depende del clima.", ex_he: "אתה בא מחר? זה תלוי במזג האוויר." },
        { id: "intermediate_daily_conversations_17", es: "Por cierto", he: "דרך אגב", ex_es: "Por cierto, ¿cómo está tu hermana?", ex_he: "דרך אגב, מה שלום אחותך?" }
      ],
      sentences: [
        { es: "Perdón, ¿puedes repetir la pregunta?", he: "סליחה, אתה יכול לחזור על השאלה?" },
        { es: "Estoy de acuerdo contigo, es una buena idea.", he: "אני מסכים איתך, זה רעיון טוב." },
        { es: "No hay problema, podemos hacerlo mañana.", he: "אין בעיה, נוכל לעשות את זה מחר." },
        { es: "En mi opinión, deberíamos esperar un poco más.", he: "לדעתי, כדאי שנחכה עוד קצת." },
        { es: "¿Me puedes ayudar a entender esto?", he: "אתה יכול לעזור לי להבין את זה?" },
        { es: "Tienes razón, no pensé en eso.", he: "אתה צודק, לא חשבתי על זה." },
        { es: "Por cierto, ¿sabes cómo se dice esto en español?", he: "דרך אגב, אתה יודע איך אומרים את זה בספרדית?" }
      ]
    },
    {
      id: "common_verbs_2",
      name: "פעלים נפוצים יותר",
      vocab: [
        { id: "intermediate_common_verbs_2_0", es: "Querer", he: "לרצות", ex_es: "Quiero aprender español.", ex_he: "אני רוצה ללמוד ספרדית." },
        { id: "intermediate_common_verbs_2_1", es: "Poder", he: "להיות מסוגל / יכול", ex_es: "No puedo venir hoy.", ex_he: "אני לא יכול לבוא היום." },
        { id: "intermediate_common_verbs_2_2", es: "Saber", he: "לדעת", ex_es: "No sé la respuesta.", ex_he: "אני לא יודע את התשובה." },
        { id: "intermediate_common_verbs_2_3", es: "Conocer", he: "להכיר", ex_es: "Conozco a tu hermana.", ex_he: "אני מכיר את אחותך." },
        { id: "intermediate_common_verbs_2_4", es: "Pensar", he: "לחשוב", ex_es: "Pienso que tienes razón.", ex_he: "אני חושב שאתה צודק." },
        { id: "intermediate_common_verbs_2_5", es: "Sentir", he: "להרגיש", ex_es: "Siento mucho dolor en la pierna.", ex_he: "אני מרגיש הרבה כאב ברגל." },
        { id: "intermediate_common_verbs_2_6", es: "Buscar", he: "לחפש", ex_es: "Estoy buscando mis llaves.", ex_he: "אני מחפש את המפתחות שלי." },
        { id: "intermediate_common_verbs_2_7", es: "Encontrar", he: "למצוא", ex_es: "Encontré mi teléfono en el sofá.", ex_he: "מצאתי את הטלפון שלי בספה." },
        { id: "intermediate_common_verbs_2_8", es: "Llevar", he: "לשאת / ללבוש", ex_es: "Llevo una chaqueta roja.", ex_he: "אני לובש ז'קט אדום." },
        { id: "intermediate_common_verbs_2_9", es: "Dejar", he: "להשאיר / לעזוב", ex_es: "Dejé mis libros en la escuela.", ex_he: "השארתי את הספרים שלי בבית ספר." },
        { id: "intermediate_common_verbs_2_10", es: "Preguntar", he: "לשאול", ex_es: "Voy a preguntar al profesor.", ex_he: "אני הולך לשאול את המורה." },
        { id: "intermediate_common_verbs_2_11", es: "Responder / Contestar", he: "לענות", ex_es: "No respondió a mi mensaje.", ex_he: "הוא לא ענה להודעה שלי." },
        { id: "intermediate_common_verbs_2_12", es: "Necesitar", he: "להזדקק / לצטרך", ex_es: "Necesito más tiempo.", ex_he: "אני צריך יותר זמן." },
        { id: "intermediate_common_verbs_2_13", es: "Dar", he: "לתת", ex_es: "Voy a dar un regalo a mi madre.", ex_he: "אני הולך לתת מתנה לאמא שלי." },
        { id: "intermediate_common_verbs_2_14", es: "Tomar", he: "לקחת / לשתות", ex_es: "Voy a tomar un café.", ex_he: "אני הולך לשתות קפה." },
        { id: "intermediate_common_verbs_2_15", es: "Ayudar", he: "לעזור", ex_es: "¿Puedes ayudarme con la tarea?", ex_he: "אתה יכול לעזור לי עם שיעורי הבית?" },
        { id: "intermediate_common_verbs_2_16", es: "Empezar", he: "להתחיל", ex_es: "La clase empieza a las nueve.", ex_he: "השיעור מתחיל בתשע." },
        { id: "intermediate_common_verbs_2_17", es: "Terminar", he: "לסיים", ex_es: "Terminé mi trabajo temprano.", ex_he: "סיימתי את העבודה שלי מוקדם." }
      ],
      sentences: [
        { es: "Quiero aprender a cocinar comida española.", he: "אני רוצה ללמוד לבשל אוכל ספרדי." },
        { es: "No puedo encontrar mis llaves esta mañana.", he: "אני לא יכול למצוא את המפתחות שלי הבוקר." },
        { es: "¿Conoces un buen restaurante cerca de aquí?", he: "אתה מכיר מסעדה טובה קרוב לכאן?" },
        { es: "Necesito ayuda para terminar este proyecto.", he: "אני צריך עזרה כדי לסיים את הפרויקט הזה." },
        { es: "Ella siempre pregunta muchas cosas en clase.", he: "היא תמיד שואלת הרבה דברים בשיעור." },
        { es: "Vamos a empezar la reunión a las diez.", he: "אנחנו הולכים להתחיל את הפגישה בעשר." },
        { es: "¿Me puedes dar tu número de teléfono?", he: "אתה יכול לתת לי את מספר הטלפון שלך?" }
      ]
    }
  ]
};
