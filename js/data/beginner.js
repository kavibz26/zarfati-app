// ===== נתוני רמת "מתחילים" =====
// קובץ זה הוא חלק ממאגר הנתונים המפוצל (ראו js/data.js למאסף). אותה צורת נתונים בדיוק כמו
// שהייתה מקוננת בעבר בתוך data.js אחד - LEVELS.beginner ימשיך להצביע לאותו תוכן.

const LEVEL_BEGINNER = {
  id: "beginner",
  name: "מתחילים",
  icon: "🌱",
  color: "#4caf7d",
  topics: [
    {
      id: "greetings",
      name: "ברכות והיכרות",
      vocab: [
        { id: "beginner_greetings_0", es: "Hola", he: "שלום", ex_es: "Hola, ¿cómo estás?", ex_he: "שלום, מה שלומך?" },
        { id: "beginner_greetings_1", es: "Buenos días", he: "בוקר טוב", ex_es: "Buenos días, profesor.", ex_he: "בוקר טוב, מורה." },
        { id: "beginner_greetings_2", es: "Buenas tardes", he: "צהריים טובים", ex_es: "Buenas tardes a todos.", ex_he: "צהריים טובים לכולם." },
        { id: "beginner_greetings_3", es: "Buenas noches", he: "לילה טוב", ex_es: "Buenas noches, hasta mañana.", ex_he: "לילה טוב, עד מחר." },
        { id: "beginner_greetings_4", es: "Adiós", he: "להתראות", ex_es: "Adiós, nos vemos pronto.", ex_he: "להתראות, נתראה בקרוב." },
        { id: "beginner_greetings_5", es: "Por favor", he: "בבקשה", ex_es: "Ayúdame, por favor.", ex_he: "עזור לי, בבקשה." },
        { id: "beginner_greetings_6", es: "Gracias", he: "תודה", ex_es: "Muchas gracias por todo.", ex_he: "תודה רבה על הכל." },
        { id: "beginner_greetings_7", es: "De nada", he: "על לא דבר", ex_es: "De nada, fue un placer.", ex_he: "על לא דבר, זה היה תענוג." },
        { id: "beginner_greetings_8", es: "¿Cómo te llamas?", he: "איך קוראים לך?", ex_es: "¿Cómo te llamas, chico?", ex_he: "איך קוראים לך, ילד?" },
        { id: "beginner_greetings_9", es: "Me llamo...", he: "קוראים לי...", ex_es: "Me llamo Ana.", ex_he: "קוראים לי אנה." },
        { id: "beginner_greetings_10", es: "Mucho gusto", he: "נעים מאוד", ex_es: "Mucho gusto en conocerte.", ex_he: "נעים מאוד להכיר אותך." },
        { id: "beginner_greetings_11", es: "¿Y tú?", he: "ואתה/ואת?", ex_es: "Estoy bien, ¿y tú?", ex_he: "אני בסדר, ואתה?" },
        { id: "beginner_greetings_12", es: "¿Qué tal?", he: "מה נשמע?", ex_es: "¿Qué tal, amigo?", ex_he: "מה נשמע, חבר?" },
        { id: "beginner_greetings_13", es: "Hasta luego", he: "להתראות (בקרוב)", ex_es: "Hasta luego, nos vemos mañana.", ex_he: "להתראות, נתראה מחר." },
        { id: "beginner_greetings_14", es: "Bienvenido / Bienvenida", he: "ברוך הבא / ברוכה הבאה", ex_es: "Bienvenido a mi casa.", ex_he: "ברוך הבא לביתי." },
        { id: "beginner_greetings_15", es: "Perdón / Disculpe", he: "סליחה", ex_es: "Perdón, ¿dónde está el baño?", ex_he: "סליחה, איפה השירותים?" },
        { id: "beginner_greetings_16", es: "Hasta mañana", he: "להתראות מחר", ex_es: "Hasta mañana, que descanses.", ex_he: "להתראות מחר, שתנוח טוב." }
      ],
      sentences: [
        { es: "Hola, me llamo Pedro.", he: "שלום, קוראים לי פדרו." },
        { es: "¿Cómo estás hoy?", he: "מה שלומך היום?" },
        { es: "Mucho gusto en conocerte.", he: "נעים מאוד להכיר אותך." },
        { es: "Buenos días, ¿cómo te llamas?", he: "בוקר טוב, איך קוראים לך?" },
        { es: "Adiós, hasta luego.", he: "להתראות, נתראה אחר כך." },
        { es: "¿Qué tal estás hoy?", he: "מה שלומך היום?" },
        { es: "Perdón, no entendí tu nombre.", he: "סליחה, לא הבנתי את השם שלך." },
        { es: "Bienvenida a la clase de español.", he: "ברוכה הבאה לשיעור הספרדית." }
      ]
    },
    {
      id: "numbers",
      name: "מספרים ושעה",
      vocab: [
        { id: "beginner_numbers_0", es: "Cero", he: "אפס", ex_es: "Empezamos desde cero.", ex_he: "אנחנו מתחילים מאפס." },
        { id: "beginner_numbers_1", es: "Uno", he: "אחת", ex_es: "Tengo un hermano.", ex_he: "יש לי אח אחד." },
        { id: "beginner_numbers_2", es: "Dos", he: "שתיים", ex_es: "Dos cafés, por favor.", ex_he: "שני קפה, בבקשה." },
        { id: "beginner_numbers_3", es: "Cinco", he: "חמש", ex_es: "Son las cinco.", ex_he: "השעה חמש." },
        { id: "beginner_numbers_4", es: "Diez", he: "עשר", ex_es: "Tengo diez años.", ex_he: "אני בן עשר." },
        { id: "beginner_numbers_5", es: "Veinte", he: "עשרים", ex_es: "Veinte estudiantes.", ex_he: "עשרים תלמידים." },
        { id: "beginner_numbers_6", es: "Treinta", he: "שלושים", ex_es: "Treinta minutos.", ex_he: "שלושים דקות." },
        { id: "beginner_numbers_7", es: "Cien", he: "מאה", ex_es: "Cuesta cien euros.", ex_he: "זה עולה מאה יורו." },
        { id: "beginner_numbers_8", es: "¿Qué hora es?", he: "מה השעה?", ex_es: "¿Qué hora es ahora?", ex_he: "מה השעה עכשיו?" },
        { id: "beginner_numbers_9", es: "La hora", he: "השעה", ex_es: "Llegó a la hora.", ex_he: "הוא הגיע בזמן." },
        { id: "beginner_numbers_10", es: "El minuto", he: "הדקה", ex_es: "Espera un minuto.", ex_he: "חכה דקה." },
        { id: "beginner_numbers_11", es: "Media hora", he: "חצי שעה", ex_es: "Falta media hora.", ex_he: "נשארה חצי שעה." },
        { id: "beginner_numbers_12", es: "Seis", he: "שש", ex_es: "Tengo seis libros.", ex_he: "יש לי שישה ספרים." },
        { id: "beginner_numbers_13", es: "Siete", he: "שבע", ex_es: "Son las siete y media.", ex_he: "השעה שבע וחצי." },
        { id: "beginner_numbers_14", es: "Ocho", he: "שמונה", ex_es: "Hay ocho personas aquí.", ex_he: "יש כאן שמונה אנשים." },
        { id: "beginner_numbers_15", es: "Cuarenta", he: "ארבעים", ex_es: "Mi madre tiene cuarenta años.", ex_he: "אמא שלי בת ארבעים." },
        { id: "beginner_numbers_16", es: "Un cuarto de hora", he: "רבע שעה", ex_es: "Llego en un cuarto de hora.", ex_he: "אני מגיע בעוד רבע שעה." }
      ],
      sentences: [
        { es: "Son las diez de la mañana.", he: "השעה עשר בבוקר." },
        { es: "Tengo veinte años.", he: "אני בת עשרים." },
        { es: "Espera cinco minutos, por favor.", he: "חכה חמש דקות, בבקשה." },
        { es: "¿Qué hora es ahora?", he: "מה השעה עכשיו?" },
        { es: "Cuesta treinta euros.", he: "זה עולה שלושים יורו." },
        { es: "Tengo cuarenta euros en el bolsillo.", he: "יש לי ארבעים יורו בכיס." },
        { es: "La reunión empieza en un cuarto de hora.", he: "הישיבה מתחילה בעוד רבע שעה." },
        { es: "Son las ocho y cinco.", he: "השעה שמונה וחמש." }
      ]
    },
    {
      id: "colors",
      name: "צבעים וצורות",
      vocab: [
        { id: "beginner_colors_0", es: "Rojo", he: "אדום", ex_es: "El coche es rojo.", ex_he: "המכונית אדומה." },
        { id: "beginner_colors_1", es: "Azul", he: "כחול", ex_es: "El cielo es azul.", ex_he: "השמיים כחולים." },
        { id: "beginner_colors_2", es: "Verde", he: "ירוק", ex_es: "La planta es verde.", ex_he: "הצמח ירוק." },
        { id: "beginner_colors_3", es: "Amarillo", he: "צהוב", ex_es: "El sol es amarillo.", ex_he: "השמש צהובה." },
        { id: "beginner_colors_4", es: "Negro", he: "שחור", ex_es: "El gato es negro.", ex_he: "החתול שחור." },
        { id: "beginner_colors_5", es: "Blanco", he: "לבן", ex_es: "La nieve es blanca.", ex_he: "השלג לבן." },
        { id: "beginner_colors_6", es: "Naranja", he: "כתום", ex_es: "La naranja es naranja.", ex_he: "התפוז הוא כתום." },
        { id: "beginner_colors_7", es: "Círculo", he: "עיגול", ex_es: "Dibuja un círculo.", ex_he: "צייר עיגול." },
        { id: "beginner_colors_8", es: "Cuadrado", he: "ריבוע", ex_es: "La caja es cuadrada.", ex_he: "הקופסה מרובעת." },
        { id: "beginner_colors_9", es: "Triángulo", he: "משולש", ex_es: "El triángulo tiene tres lados.", ex_he: "למשולש יש שלוש צלעות." },
        { id: "beginner_colors_10", es: "Rosa", he: "ורוד", ex_es: "La camisa rosa es bonita.", ex_he: "החולצה הוורודה יפה." },
        { id: "beginner_colors_11", es: "Gris", he: "אפור", ex_es: "El cielo está gris hoy.", ex_he: "השמיים אפורים היום." },
        { id: "beginner_colors_12", es: "Marrón", he: "חום", ex_es: "Tengo botas marrones.", ex_he: "יש לי מגפיים חומים." },
        { id: "beginner_colors_13", es: "Claro / Clara", he: "בהיר / בהירה (גוון)", ex_es: "Prefiero el azul claro.", ex_he: "אני מעדיף כחול בהיר." },
        { id: "beginner_colors_14", es: "Oscuro / Oscura", he: "כהה (גוון)", ex_es: "Su pelo es negro oscuro.", ex_he: "השיער שלה שחור כהה." }
      ],
      sentences: [
        { es: "Me gusta el color azul.", he: "אני אוהב את הצבע כחול." },
        { es: "El coche rojo es rápido.", he: "המכונית האדומה מהירה." },
        { es: "La flor amarilla es bonita.", he: "הפרח הצהוב יפה." },
        { es: "Dibuja un cuadrado verde.", he: "צייר ריבוע ירוק." },
        { es: "El cielo está azul hoy.", he: "השמיים כחולים היום." },
        { es: "Me gusta más el azul oscuro que el claro.", he: "אני אוהב יותר את הכחול הכהה מהבהיר." },
        { es: "Ella lleva una falda rosa.", he: "היא לובשת חצאית ורודה." },
        { es: "El perro tiene manchas marrones y blancas.", he: "לכלב יש כתמים חומים ולבנים." }
      ]
    },
    {
      id: "family",
      name: "משפחה",
      vocab: [
        { id: "beginner_family_0", es: "La familia", he: "המשפחה", ex_es: "Mi familia es grande.", ex_he: "המשפחה שלי גדולה." },
        { id: "beginner_family_1", es: "La madre", he: "האמא", ex_es: "Mi madre cocina bien.", ex_he: "אמא שלי מבשלת טוב." },
        { id: "beginner_family_2", es: "El padre", he: "האבא", ex_es: "Mi padre trabaja mucho.", ex_he: "אבא שלי עובד הרבה." },
        { id: "beginner_family_3", es: "El hermano", he: "האח", ex_es: "Tengo un hermano mayor.", ex_he: "יש לי אח גדול." },
        { id: "beginner_family_4", es: "La hermana", he: "האחות", ex_es: "Mi hermana estudia medicina.", ex_he: "אחותי לומדת רפואה." },
        { id: "beginner_family_5", es: "El hijo", he: "הבן", ex_es: "Su hijo es pequeño.", ex_he: "הבן שלו קטן." },
        { id: "beginner_family_6", es: "La hija", he: "הבת", ex_es: "Su hija canta muy bien.", ex_he: "הבת שלה שרה מאוד יפה." },
        { id: "beginner_family_7", es: "El abuelo", he: "הסבא", ex_es: "Mi abuelo tiene ochenta años.", ex_he: "סבא שלי בן שמונים." },
        { id: "beginner_family_8", es: "La abuela", he: "הסבתא", ex_es: "Mi abuela vive en Madrid.", ex_he: "סבתא שלי גרה במדריד." },
        { id: "beginner_family_9", es: "El esposo / La esposa", he: "הבעל / האישה", ex_es: "Mi esposa es doctora.", ex_he: "אשתי היא רופאה." },
        { id: "beginner_family_10", es: "El primo / La prima", he: "בן דוד / בת דודה", ex_es: "Mi primo vive en Chile.", ex_he: "בן דודי גר בצ'ילה." },
        { id: "beginner_family_11", es: "El tío / La tía", he: "הדוד / הדודה", ex_es: "Mi tía es muy simpática.", ex_he: "הדודה שלי מאוד נחמדה." },
        { id: "beginner_family_12", es: "El sobrino / La sobrina", he: "האחיין / האחיינית", ex_es: "Tengo dos sobrinas.", ex_he: "יש לי שתי אחייניות." },
        { id: "beginner_family_13", es: "Los padres", he: "ההורים", ex_es: "Mis padres se conocieron en la universidad.", ex_he: "ההורים שלי הכירו באוניברסיטה." },
        { id: "beginner_family_14", es: "El bebé", he: "התינוק", ex_es: "El bebé duerme mucho.", ex_he: "התינוק ישן הרבה." }
      ],
      sentences: [
        { es: "Tengo dos hermanos y una hermana.", he: "יש לי שני אחים ואחות אחת." },
        { es: "Mi madre y mi padre viven en Barcelona.", he: "אמא שלי ואבא שלי גרים בברצלונה." },
        { es: "Mi abuela cocina para toda la familia.", he: "סבתא שלי מבשלת לכל המשפחה." },
        { es: "Su hijo estudia en la universidad.", he: "הבן שלו לומד באוניברסיטה." },
        { es: "Toda mi familia se reúne los domingos.", he: "כל המשפחה שלי נפגשת בימי ראשון." },
        { es: "Mi tío y mi tía vienen a cenar hoy.", he: "הדוד והדודה שלי באים לארוחת ערב היום." },
        { es: "El bebé de mi prima es muy lindo.", he: "התינוק של בת דודתי מאוד חמוד." },
        { es: "Mis padres celebran su aniversario mañana.", he: "ההורים שלי חוגגים את יום הנישואין שלהם מחר." }
      ]
    },
    {
      id: "food",
      name: "אוכל ומשקאות",
      vocab: [
        { id: "beginner_food_0", es: "El agua", he: "מים", ex_es: "Bebo mucha agua.", ex_he: "אני שותה הרבה מים." },
        { id: "beginner_food_1", es: "El pan", he: "לחם", ex_es: "Me gusta el pan caliente.", ex_he: "אני אוהב לחם חם." },
        { id: "beginner_food_2", es: "La leche", he: "חלב", ex_es: "Bebo leche por la mañana.", ex_he: "אני שותה חלב בבוקר." },
        { id: "beginner_food_3", es: "El café", he: "קפה", ex_es: "Quiero un café, por favor.", ex_he: "אני רוצה קפה, בבקשה." },
        { id: "beginner_food_4", es: "La fruta", he: "פרי", ex_es: "Como fruta todos los días.", ex_he: "אני אוכל פרי כל יום." },
        { id: "beginner_food_5", es: "La manzana", he: "תפוח", ex_es: "La manzana es roja.", ex_he: "התפוח אדום." },
        { id: "beginner_food_6", es: "El arroz", he: "אורז", ex_es: "El arroz con pollo es rico.", ex_he: "האורז עם עוף טעים." },
        { id: "beginner_food_7", es: "La carne", he: "בשר", ex_es: "No como carne.", ex_he: "אני לא אוכל בשר." },
        { id: "beginner_food_8", es: "La verdura", he: "ירק", ex_es: "Las verduras son saludables.", ex_he: "הירקות בריאים." },
        { id: "beginner_food_9", es: "El restaurante", he: "מסעדה", ex_es: "Cenamos en un restaurante.", ex_he: "אכלנו ארוחת ערב במסעדה." },
        { id: "beginner_food_10", es: "Tengo hambre", he: "אני רעב", ex_es: "Tengo hambre, ¿comemos?", ex_he: "אני רעב, נאכל?" },
        { id: "beginner_food_11", es: "Tengo sed", he: "אני צמא", ex_es: "Tengo sed, quiero agua.", ex_he: "אני צמא, אני רוצה מים." },
        { id: "beginner_food_12", es: "El huevo", he: "ביצה", ex_es: "Como un huevo por la mañana.", ex_he: "אני אוכל ביצה בבוקר." },
        { id: "beginner_food_13", es: "El pescado", he: "דג", ex_es: "El pescado con limón es delicioso.", ex_he: "הדג עם לימון טעים." },
        { id: "beginner_food_14", es: "El postre", he: "קינוח", ex_es: "¿Quieres postre?", ex_he: "אתה רוצה קינוח?" },
        { id: "beginner_food_15", es: "Delicioso / Deliciosa", he: "טעים / טעימה", ex_es: "Esta sopa está deliciosa.", ex_he: "המרק הזה טעים." },
        { id: "beginner_food_16", es: "La cuenta", he: "החשבון (במסעדה)", ex_es: "La cuenta, por favor.", ex_he: "החשבון, בבקשה." }
      ],
      sentences: [
        { es: "Quiero un café con leche, por favor.", he: "אני רוצה קפה עם חלב, בבקשה." },
        { es: "Como fruta y verdura todos los días.", he: "אני אוכל פרי וירק כל יום." },
        { es: "Tengo hambre, vamos al restaurante.", he: "אני רעב, בוא נלך למסעדה." },
        { es: "El pan con queso es delicioso.", he: "הלחם עם גבינה טעים." },
        { es: "¿Quieres agua o café?", he: "אתה רוצה מים או קפה?" },
        { es: "El pescado con arroz estaba delicioso.", he: "הדג עם אורז היה טעים." },
        { es: "¿Nos trae la cuenta, por favor?", he: "תביא לנו את החשבון, בבקשה?" },
        { es: "De postre quiero un helado de chocolate.", he: "לקינוח אני רוצה גלידת שוקולד." }
      ]
    },
    {
      id: "basic_verbs",
      name: "פעלים בסיסיים: Ser, Estar, Tener",
      vocab: [
        { id: "beginner_basic_verbs_0", es: "Yo soy", he: "אני (תכונה קבועה)", ex_es: "Yo soy alto.", ex_he: "אני גבוה." },
        { id: "beginner_basic_verbs_1", es: "Tú eres", he: "אתה/את (תכונה קבועה)", ex_es: "Tú eres inteligente.", ex_he: "אתה חכם." },
        { id: "beginner_basic_verbs_2", es: "Él/Ella es", he: "הוא/היא (תכונה קבועה)", ex_es: "Ella es doctora.", ex_he: "היא רופאה." },
        { id: "beginner_basic_verbs_3", es: "Yo estoy", he: "אני (מצב זמני)", ex_es: "Yo estoy cansado.", ex_he: "אני עייף." },
        { id: "beginner_basic_verbs_4", es: "Tú estás", he: "אתה/את (מצב זמני)", ex_es: "Tú estás feliz.", ex_he: "אתה שמח." },
        { id: "beginner_basic_verbs_5", es: "Él/Ella está", he: "הוא/היא (מצב זמני)", ex_es: "Ella está en casa.", ex_he: "היא בבית." },
        { id: "beginner_basic_verbs_6", es: "Yo tengo", he: "יש לי", ex_es: "Yo tengo un perro.", ex_he: "יש לי כלב." },
        { id: "beginner_basic_verbs_7", es: "Tú tienes", he: "יש לך", ex_es: "Tú tienes razón.", ex_he: "אתה צודק." },
        { id: "beginner_basic_verbs_8", es: "Él/Ella tiene", he: "יש לו/לה", ex_es: "Ella tiene veinte años.", ex_he: "היא בת עשרים." },
        { id: "beginner_basic_verbs_9", es: "Nosotros somos", he: "אנחנו (תכונה קבועה)", ex_es: "Nosotros somos amigos.", ex_he: "אנחנו חברים." },
        { id: "beginner_basic_verbs_10", es: "Ellos son", he: "הם (תכונה קבועה)", ex_es: "Ellos son hermanos.", ex_he: "הם אחים." },
        { id: "beginner_basic_verbs_11", es: "Nosotros estamos", he: "אנחנו (מצב זמני)", ex_es: "Nosotros estamos listos.", ex_he: "אנחנו מוכנים." },
        { id: "beginner_basic_verbs_12", es: "Ellos tienen", he: "יש להם", ex_es: "Ellos tienen mucho trabajo.", ex_he: "יש להם הרבה עבודה." },
        { id: "beginner_basic_verbs_13", es: "Hay", he: "יש (ישנם)", ex_es: "Hay un problema.", ex_he: "יש בעיה." },
        { id: "beginner_basic_verbs_14", es: "¿Cuántos años tienes?", he: "בן/בת כמה אתה/את?", ex_es: "¿Cuántos años tienes?", ex_he: "בן כמה אתה?" }
      ],
      sentences: [
        { es: "Yo soy de España.", he: "אני מספרד." },
        { es: "Ella está muy cansada hoy.", he: "היא מאוד עייפה היום." },
        { es: "Tengo veinte años y soy estudiante.", he: "אני בת עשרים ואני סטודנטית." },
        { es: "¿Dónde estás ahora?", he: "איפה אתה עכשיו?" },
        { es: "Nosotros tenemos una casa grande.", he: "יש לנו בית גדול." },
        { es: "Hay muchas personas en la fiesta.", he: "יש הרבה אנשים במסיבה." },
        { es: "¿Cuántos años tienes, Marta?", he: "בת כמה את, מרתה?" },
        { es: "Ellos son de Argentina, pero viven en España.", he: "הם מארגנטינה, אבל גרים בספרד." }
      ]
    },
    {
      id: "travel",
      name: "נסיעות",
      vocab: [
        { id: "beginner_travel_0", es: "El aeropuerto", he: "שדה התעופה", ex_es: "Llegamos al aeropuerto temprano.", ex_he: "הגענו לשדה התעופה מוקדם." },
        { id: "beginner_travel_1", es: "El pasaporte", he: "הדרכון", ex_es: "No olvides tu pasaporte.", ex_he: "אל תשכח את הדרכון שלך." },
        { id: "beginner_travel_2", es: "El billete / El boleto", he: "הכרטיס", ex_es: "Compré el billete de avión.", ex_he: "קניתי את כרטיס הטיסה." },
        { id: "beginner_travel_3", es: "La maleta", he: "המזוודה", ex_es: "Mi maleta es muy pesada.", ex_he: "המזוודה שלי מאוד כבדה." },
        { id: "beginner_travel_4", es: "El hotel", he: "המלון", ex_es: "Reservé una habitación en el hotel.", ex_he: "הזמנתי חדר במלון." },
        { id: "beginner_travel_5", es: "La habitación", he: "החדר", ex_es: "La habitación tiene vista al mar.", ex_he: "לחדר יש נוף לים." },
        { id: "beginner_travel_6", es: "El taxi", he: "המונית", ex_es: "Tomamos un taxi al hotel.", ex_he: "לקחנו מונית למלון." },
        { id: "beginner_travel_7", es: "El vuelo", he: "הטיסה", ex_es: "Nuestro vuelo sale a las nueve.", ex_he: "הטיסה שלנו יוצאת בתשע." },
        { id: "beginner_travel_8", es: "La playa", he: "חוף הים", ex_es: "Vamos a la playa mañana.", ex_he: "אנחנו הולכים לחוף הים מחר." },
        { id: "beginner_travel_9", es: "El mapa", he: "המפה", ex_es: "Necesito un mapa de la ciudad.", ex_he: "אני צריך מפה של העיר." },
        { id: "beginner_travel_10", es: "¿Dónde está...?", he: "איפה נמצא...?", ex_es: "¿Dónde está el hotel?", ex_he: "איפה נמצא המלון?" },
        { id: "beginner_travel_11", es: "De vacaciones", he: "בחופשה", ex_es: "Estamos de vacaciones en México.", ex_he: "אנחנו בחופשה במקסיקו." }
      ],
      sentences: [
        { es: "Llegamos al aeropuerto dos horas antes del vuelo.", he: "הגענו לשדה התעופה שעתיים לפני הטיסה." },
        { es: "¿Dónde está la parada del taxi?", he: "איפה נמצאת תחנת המוניות?" },
        { es: "Reservamos una habitación con vista al mar.", he: "הזמנו חדר עם נוף לים." },
        { es: "Perdí mi maleta en el aeropuerto.", he: "איבדתי את המזוודה שלי בשדה התעופה." },
        { es: "Estamos de vacaciones en la playa toda la semana.", he: "אנחנו בחופשה בחוף הים כל השבוע." }
      ]
    },
    {
      id: "home",
      name: "בית",
      vocab: [
        { id: "beginner_home_0", es: "La casa", he: "הבית", ex_es: "Vivo en una casa grande.", ex_he: "אני גר בבית גדול." },
        { id: "beginner_home_1", es: "El apartamento", he: "הדירה", ex_es: "Mi apartamento está en el tercer piso.", ex_he: "הדירה שלי בקומה השלישית." },
        { id: "beginner_home_2", es: "La habitación / El cuarto", he: "החדר", ex_es: "Mi habitación es pequeña pero cómoda.", ex_he: "החדר שלי קטן אבל נוח." },
        { id: "beginner_home_3", es: "La cocina", he: "המטבח", ex_es: "Cocino todos los días en la cocina.", ex_he: "אני מבשל כל יום במטבח." },
        { id: "beginner_home_4", es: "El baño", he: "חדר האמבטיה", ex_es: "¿Dónde está el baño?", ex_he: "איפה חדר האמבטיה?" },
        { id: "beginner_home_5", es: "El dormitorio", he: "חדר השינה", ex_es: "Mi dormitorio tiene una cama grande.", ex_he: "בחדר השינה שלי יש מיטה גדולה." },
        { id: "beginner_home_6", es: "La sala / El salón", he: "הסלון", ex_es: "Vemos la televisión en la sala.", ex_he: "אנחנו צופים בטלוויזיה בסלון." },
        { id: "beginner_home_7", es: "La puerta", he: "הדלת", ex_es: "Cierra la puerta, por favor.", ex_he: "תסגור את הדלת, בבקשה." },
        { id: "beginner_home_8", es: "La ventana", he: "החלון", ex_es: "Abre la ventana, hace calor.", ex_he: "תפתח את החלון, חם." },
        { id: "beginner_home_9", es: "La mesa", he: "השולחן", ex_es: "La comida está en la mesa.", ex_he: "האוכל על השולחן." },
        { id: "beginner_home_10", es: "La silla", he: "הכיסא", ex_es: "Siéntate en esta silla.", ex_he: "שב על הכיסא הזה." },
        { id: "beginner_home_11", es: "La cama", he: "המיטה", ex_es: "Voy a dormir en mi cama.", ex_he: "אני הולך לישון במיטה שלי." },
        { id: "beginner_home_12", es: "La llave", he: "המפתח", ex_es: "No encuentro la llave de la casa.", ex_he: "אני לא מוצא את המפתח של הבית." },
        { id: "beginner_home_13", es: "El jardín", he: "הגינה", ex_es: "Los niños juegan en el jardín.", ex_he: "הילדים משחקים בגינה." },
        { id: "beginner_home_14", es: "La pared", he: "הקיר", ex_es: "Hay un cuadro en la pared.", ex_he: "יש תמונה על הקיר." },
        { id: "beginner_home_15", es: "El piso / El suelo", he: "הרצפה", ex_es: "El piso está muy limpio.", ex_he: "הרצפה מאוד נקייה." },
        { id: "beginner_home_16", es: "El techo", he: "התקרה / הגג", ex_es: "El techo de la casa es rojo.", ex_he: "הגג של הבית אדום." },
        { id: "beginner_home_17", es: "Vivir en...", he: "לגור ב...", ex_es: "¿Dónde vives?", ex_he: "איפה אתה גר?" }
      ],
      sentences: [
        { es: "Mi casa tiene tres habitaciones y una cocina grande.", he: "בבית שלי יש שלושה חדרים ומטבח גדול." },
        { es: "La cocina está al lado de la sala.", he: "המטבח נמצא ליד הסלון." },
        { es: "¿Dónde está la llave de la puerta?", he: "איפה המפתח של הדלת?" },
        { es: "Los niños duermen en el mismo dormitorio.", he: "הילדים ישנים באותו חדר שינה." },
        { es: "Hay flores bonitas en el jardín.", he: "יש פרחים יפים בגינה." },
        { es: "Por favor, cierra la ventana antes de salir.", he: "בבקשה, תסגור את החלון לפני שאתה יוצא." },
        { es: "Vivimos en un apartamento pequeño en el centro.", he: "אנחנו גרים בדירה קטנה במרכז." }
      ]
    },
    {
      id: "days_time",
      name: "ימים ושעות",
      vocab: [
        { id: "beginner_days_time_0", es: "Lunes", he: "יום שני", ex_es: "El lunes empiezo a trabajar.", ex_he: "ביום שני אני מתחיל לעבוד." },
        { id: "beginner_days_time_1", es: "Martes", he: "יום שלישי", ex_es: "Tengo clase de español los martes.", ex_he: "יש לי שיעור ספרדית בימי שלישי." },
        { id: "beginner_days_time_2", es: "Miércoles", he: "יום רביעי", ex_es: "Nos vemos el miércoles.", ex_he: "נתראה ביום רביעי." },
        { id: "beginner_days_time_3", es: "Jueves", he: "יום חמישי", ex_es: "El jueves es mi día libre.", ex_he: "יום חמישי הוא היום החופשי שלי." },
        { id: "beginner_days_time_4", es: "Viernes", he: "יום שישי", ex_es: "Los viernes salimos con amigos.", ex_he: "בימי שישי אנחנו יוצאים עם חברים." },
        { id: "beginner_days_time_5", es: "Sábado", he: "שבת", ex_es: "El sábado no trabajamos.", ex_he: "בשבת אנחנו לא עובדים." },
        { id: "beginner_days_time_6", es: "Domingo", he: "יום ראשון", ex_es: "El domingo vamos a la playa.", ex_he: "ביום ראשון אנחנו הולכים לחוף הים." },
        { id: "beginner_days_time_7", es: "Hoy", he: "היום", ex_es: "Hoy es un buen día.", ex_he: "היום זה יום טוב." },
        { id: "beginner_days_time_8", es: "Mañana", he: "מחר", ex_es: "Mañana tengo un examen.", ex_he: "מחר יש לי מבחן." },
        { id: "beginner_days_time_9", es: "Ayer", he: "אתמול", ex_es: "Ayer llovió mucho.", ex_he: "אתמול ירד גשם חזק." },
        { id: "beginner_days_time_10", es: "La semana", he: "השבוע", ex_es: "Esta semana estoy muy ocupado.", ex_he: "השבוע אני מאוד עסוק." },
        { id: "beginner_days_time_11", es: "El mes", he: "החודש", ex_es: "El próximo mes viajo a España.", ex_he: "בחודש הבא אני נוסע לספרד." },
        { id: "beginner_days_time_12", es: "El año", he: "השנה", ex_es: "Este año voy a aprender español.", ex_he: "השנה אני הולך ללמוד ספרדית." },
        { id: "beginner_days_time_13", es: "La mañana", he: "הבוקר", ex_es: "Me levanto temprano por la mañana.", ex_he: "אני קם מוקדם בבוקר." },
        { id: "beginner_days_time_14", es: "La tarde", he: "אחר הצהריים", ex_es: "Nos vemos por la tarde.", ex_he: "נתראה אחר הצהריים." },
        { id: "beginner_days_time_15", es: "La noche", he: "הלילה", ex_es: "Trabajo por la noche.", ex_he: "אני עובד בלילה." },
        { id: "beginner_days_time_16", es: "¿Qué día es hoy?", he: "איזה יום היום?", ex_es: "¿Qué día es hoy, lunes o martes?", ex_he: "איזה יום היום, שני או שלישי?" },
        { id: "beginner_days_time_17", es: "Todos los días", he: "כל יום", ex_es: "Estudio español todos los días.", ex_he: "אני לומד ספרדית כל יום." }
      ],
      sentences: [
        { es: "Hoy es lunes y mañana es martes.", he: "היום יום שני ומחר יום שלישי." },
        { es: "Los sábados y domingos no trabajo.", he: "בשבתות ובימי ראשון אני לא עובד." },
        { es: "Nos vemos el viernes por la tarde.", he: "נתראה ביום שישי אחר הצהריים." },
        { es: "Ayer fue un día muy largo.", he: "אתמול היה יום מאוד ארוך." },
        { es: "Estudio español todos los días por la mañana.", he: "אני לומד ספרדית כל יום בבוקר." },
        { es: "El próximo mes empieza un nuevo año.", he: "בחודש הבא מתחילה שנה חדשה." },
        { es: "¿Qué día es hoy?", he: "איזה יום היום?" }
      ]
    }
  ]
};
