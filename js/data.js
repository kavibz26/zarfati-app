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
          { es: "¿Y tú?", he: "ואתה/ואת?", ex_es: "Estoy bien, ¿y tú?", ex_he: "אני בסדר, ואתה?" },
          { es: "¿Qué tal?", he: "מה נשמע?", ex_es: "¿Qué tal, amigo?", ex_he: "מה נשמע, חבר?" },
          { es: "Hasta luego", he: "להתראות (בקרוב)", ex_es: "Hasta luego, nos vemos mañana.", ex_he: "להתראות, נתראה מחר." },
          { es: "Bienvenido / Bienvenida", he: "ברוך הבא / ברוכה הבאה", ex_es: "Bienvenido a mi casa.", ex_he: "ברוך הבא לביתי." },
          { es: "Perdón / Disculpe", he: "סליחה", ex_es: "Perdón, ¿dónde está el baño?", ex_he: "סליחה, איפה השירותים?" },
          { es: "Hasta mañana", he: "להתראות מחר", ex_es: "Hasta mañana, que descanses.", ex_he: "להתראות מחר, שתנוח טוב." }
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
          { es: "Media hora", he: "חצי שעה", ex_es: "Falta media hora.", ex_he: "נשארה חצי שעה." },
          { es: "Seis", he: "שש", ex_es: "Tengo seis libros.", ex_he: "יש לי שישה ספרים." },
          { es: "Siete", he: "שבע", ex_es: "Son las siete y media.", ex_he: "השעה שבע וחצי." },
          { es: "Ocho", he: "שמונה", ex_es: "Hay ocho personas aquí.", ex_he: "יש כאן שמונה אנשים." },
          { es: "Cuarenta", he: "ארבעים", ex_es: "Mi madre tiene cuarenta años.", ex_he: "אמא שלי בת ארבעים." },
          { es: "Un cuarto de hora", he: "רבע שעה", ex_es: "Llego en un cuarto de hora.", ex_he: "אני מגיע בעוד רבע שעה." }
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
          { es: "Rojo", he: "אדום", ex_es: "El coche es rojo.", ex_he: "המכונית אדומה." },
          { es: "Azul", he: "כחול", ex_es: "El cielo es azul.", ex_he: "השמיים כחולים." },
          { es: "Verde", he: "ירוק", ex_es: "La planta es verde.", ex_he: "הצמח ירוק." },
          { es: "Amarillo", he: "צהוב", ex_es: "El sol es amarillo.", ex_he: "השמש צהובה." },
          { es: "Negro", he: "שחור", ex_es: "El gato es negro.", ex_he: "החתול שחור." },
          { es: "Blanco", he: "לבן", ex_es: "La nieve es blanca.", ex_he: "השלג לבן." },
          { es: "Naranja", he: "כתום", ex_es: "La naranja es naranja.", ex_he: "התפוז הוא כתום." },
          { es: "Círculo", he: "עיגול", ex_es: "Dibuja un círculo.", ex_he: "צייר עיגול." },
          { es: "Cuadrado", he: "ריבוע", ex_es: "La caja es cuadrada.", ex_he: "הקופסה מרובעת." },
          { es: "Triángulo", he: "משולש", ex_es: "El triángulo tiene tres lados.", ex_he: "למשולש יש שלוש צלעות." },
          { es: "Rosa", he: "ורוד", ex_es: "La camisa rosa es bonita.", ex_he: "החולצה הוורודה יפה." },
          { es: "Gris", he: "אפור", ex_es: "El cielo está gris hoy.", ex_he: "השמיים אפורים היום." },
          { es: "Marrón", he: "חום", ex_es: "Tengo botas marrones.", ex_he: "יש לי מגפיים חומים." },
          { es: "Claro / Clara", he: "בהיר / בהירה (גוון)", ex_es: "Prefiero el azul claro.", ex_he: "אני מעדיף כחול בהיר." },
          { es: "Oscuro / Oscura", he: "כהה (גוון)", ex_es: "Su pelo es negro oscuro.", ex_he: "השיער שלה שחור כהה." }
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
          { es: "La familia", he: "המשפחה", ex_es: "Mi familia es grande.", ex_he: "המשפחה שלי גדולה." },
          { es: "La madre", he: "האמא", ex_es: "Mi madre cocina bien.", ex_he: "אמא שלי מבשלת טוב." },
          { es: "El padre", he: "האבא", ex_es: "Mi padre trabaja mucho.", ex_he: "אבא שלי עובד הרבה." },
          { es: "El hermano", he: "האח", ex_es: "Tengo un hermano mayor.", ex_he: "יש לי אח גדול." },
          { es: "La hermana", he: "האחות", ex_es: "Mi hermana estudia medicina.", ex_he: "אחותי לומדת רפואה." },
          { es: "El hijo", he: "הבן", ex_es: "Su hijo es pequeño.", ex_he: "הבן שלו קטן." },
          { es: "La hija", he: "הבת", ex_es: "Su hija canta muy bien.", ex_he: "הבת שלה שרה מאוד יפה." },
          { es: "El abuelo", he: "הסבא", ex_es: "Mi abuelo tiene ochenta años.", ex_he: "סבא שלי בן שמונים." },
          { es: "La abuela", he: "הסבתא", ex_es: "Mi abuela vive en Madrid.", ex_he: "סבתא שלי גרה במדריד." },
          { es: "El esposo / La esposa", he: "הבעל / האישה", ex_es: "Mi esposa es doctora.", ex_he: "אשתי היא רופאה." },
          { es: "El primo / La prima", he: "בן דוד / בת דודה", ex_es: "Mi primo vive en Chile.", ex_he: "בן דודי גר בצ'ילה." },
          { es: "El tío / La tía", he: "הדוד / הדודה", ex_es: "Mi tía es muy simpática.", ex_he: "הדודה שלי מאוד נחמדה." },
          { es: "El sobrino / La sobrina", he: "האחיין / האחיינית", ex_es: "Tengo dos sobrinas.", ex_he: "יש לי שתי אחייניות." },
          { es: "Los padres", he: "ההורים", ex_es: "Mis padres se conocieron en la universidad.", ex_he: "ההורים שלי הכירו באוניברסיטה." },
          { es: "El bebé", he: "התינוק", ex_es: "El bebé duerme mucho.", ex_he: "התינוק ישן הרבה." }
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
          { es: "Tengo sed", he: "אני צמא", ex_es: "Tengo sed, quiero agua.", ex_he: "אני צמא, אני רוצה מים." },
          { es: "El huevo", he: "ביצה", ex_es: "Como un huevo por la mañana.", ex_he: "אני אוכל ביצה בבוקר." },
          { es: "El pescado", he: "דג", ex_es: "El pescado con limón es delicioso.", ex_he: "הדג עם לימון טעים." },
          { es: "El postre", he: "קינוח", ex_es: "¿Quieres postre?", ex_he: "אתה רוצה קינוח?" },
          { es: "Delicioso / Deliciosa", he: "טעים / טעימה", ex_es: "Esta sopa está deliciosa.", ex_he: "המרק הזה טעים." },
          { es: "La cuenta", he: "החשבון (במסעדה)", ex_es: "La cuenta, por favor.", ex_he: "החשבון, בבקשה." }
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
          { es: "Yo soy", he: "אני (תכונה קבועה)", ex_es: "Yo soy alto.", ex_he: "אני גבוה." },
          { es: "Tú eres", he: "אתה/את (תכונה קבועה)", ex_es: "Tú eres inteligente.", ex_he: "אתה חכם." },
          { es: "Él/Ella es", he: "הוא/היא (תכונה קבועה)", ex_es: "Ella es doctora.", ex_he: "היא רופאה." },
          { es: "Yo estoy", he: "אני (מצב זמני)", ex_es: "Yo estoy cansado.", ex_he: "אני עייף." },
          { es: "Tú estás", he: "אתה/את (מצב זמני)", ex_es: "Tú estás feliz.", ex_he: "אתה שמח." },
          { es: "Él/Ella está", he: "הוא/היא (מצב זמני)", ex_es: "Ella está en casa.", ex_he: "היא בבית." },
          { es: "Yo tengo", he: "יש לי", ex_es: "Yo tengo un perro.", ex_he: "יש לי כלב." },
          { es: "Tú tienes", he: "יש לך", ex_es: "Tú tienes razón.", ex_he: "אתה צודק." },
          { es: "Él/Ella tiene", he: "יש לו/לה", ex_es: "Ella tiene veinte años.", ex_he: "היא בת עשרים." },
          { es: "Nosotros somos", he: "אנחנו (תכונה קבועה)", ex_es: "Nosotros somos amigos.", ex_he: "אנחנו חברים." },
          { es: "Ellos son", he: "הם (תכונה קבועה)", ex_es: "Ellos son hermanos.", ex_he: "הם אחים." },
          { es: "Nosotros estamos", he: "אנחנו (מצב זמני)", ex_es: "Nosotros estamos listos.", ex_he: "אנחנו מוכנים." },
          { es: "Ellos tienen", he: "יש להם", ex_es: "Ellos tienen mucho trabajo.", ex_he: "יש להם הרבה עבודה." },
          { es: "Hay", he: "יש (ישנם)", ex_es: "Hay un problema.", ex_he: "יש בעיה." },
          { es: "¿Cuántos años tienes?", he: "בן/בת כמה אתה/את?", ex_es: "¿Cuántos años tienes?", ex_he: "בן כמה אתה?" }
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
          { es: "El aeropuerto", he: "שדה התעופה", ex_es: "Llegamos al aeropuerto temprano.", ex_he: "הגענו לשדה התעופה מוקדם." },
          { es: "El pasaporte", he: "הדרכון", ex_es: "No olvides tu pasaporte.", ex_he: "אל תשכח את הדרכון שלך." },
          { es: "El billete / El boleto", he: "הכרטיס", ex_es: "Compré el billete de avión.", ex_he: "קניתי את כרטיס הטיסה." },
          { es: "La maleta", he: "המזוודה", ex_es: "Mi maleta es muy pesada.", ex_he: "המזוודה שלי מאוד כבדה." },
          { es: "El hotel", he: "המלון", ex_es: "Reservé una habitación en el hotel.", ex_he: "הזמנתי חדר במלון." },
          { es: "La habitación", he: "החדר", ex_es: "La habitación tiene vista al mar.", ex_he: "לחדר יש נוף לים." },
          { es: "El taxi", he: "המונית", ex_es: "Tomamos un taxi al hotel.", ex_he: "לקחנו מונית למלון." },
          { es: "El vuelo", he: "הטיסה", ex_es: "Nuestro vuelo sale a las nueve.", ex_he: "הטיסה שלנו יוצאת בתשע." },
          { es: "La playa", he: "חוף הים", ex_es: "Vamos a la playa mañana.", ex_he: "אנחנו הולכים לחוף הים מחר." },
          { es: "El mapa", he: "המפה", ex_es: "Necesito un mapa de la ciudad.", ex_he: "אני צריך מפה של העיר." },
          { es: "¿Dónde está...?", he: "איפה נמצא...?", ex_es: "¿Dónde está el hotel?", ex_he: "איפה נמצא המלון?" },
          { es: "De vacaciones", he: "בחופשה", ex_es: "Estamos de vacaciones en México.", ex_he: "אנחנו בחופשה במקסיקו." }
        ],
        sentences: [
          { es: "Llegamos al aeropuerto dos horas antes del vuelo.", he: "הגענו לשדה התעופה שעתיים לפני הטיסה." },
          { es: "¿Dónde está la parada del taxi?", he: "איפה נמצאת תחנת המוניות?" },
          { es: "Reservamos una habitación con vista al mar.", he: "הזמנו חדר עם נוף לים." },
          { es: "Perdí mi maleta en el aeropuerto.", he: "איבדתי את המזוודה שלי בשדה התעופה." },
          { es: "Estamos de vacaciones en la playa toda la semana.", he: "אנחנו בחופשה בחוף הים כל השבוע." }
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
          { es: "Correr (él corre)", he: "לרוץ (הוא רץ)", ex_es: "Él corre por la mañana.", ex_he: "הוא רץ בבוקר." },
          { es: "Entender (yo entiendo)", he: "להבין (אני מבין)", ex_es: "Yo entiendo un poco de español.", ex_he: "אני מבין קצת ספרדית." },
          { es: "Poder (yo puedo)", he: "להיות מסוגל (אני יכול)", ex_es: "Yo puedo ayudarte.", ex_he: "אני יכול לעזור לך." },
          { es: "Querer (tú quieres)", he: "לרצות (אתה רוצה)", ex_es: "¿Qué quieres comer?", ex_he: "מה אתה רוצה לאכול?" },
          { es: "Salir (yo salgo)", he: "לצאת (אני יוצא)", ex_es: "Yo salgo de casa a las ocho.", ex_he: "אני יוצא מהבית בשמונה." },
          { es: "Empezar (nosotros empezamos)", he: "להתחיל (אנחנו מתחילים)", ex_es: "Nosotros empezamos la clase a las nueve.", ex_he: "אנחנו מתחילים את השיעור בתשע." }
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
          { es: "Yo hablé", he: "אני דיברתי", ex_es: "Ayer yo hablé con ella.", ex_he: "אתמול דיברתי איתה." },
          { es: "Tú comiste", he: "אתה אכלת", ex_es: "Tú comiste pizza anoche.", ex_he: "אכלת פיצה אתמול בלילה." },
          { es: "Él vivió", he: "הוא גר (בעבר)", ex_es: "Él vivió en Francia.", ex_he: "הוא גר בצרפת." },
          { es: "Nosotros fuimos", he: "אנחנו היינו/הלכנו", ex_es: "Nosotros fuimos al cine.", ex_he: "הלכנו לקולנוע." },
          { es: "Ellos hicieron", he: "הם עשו", ex_es: "Ellos hicieron la tarea.", ex_he: "הם עשו את שיעורי הבית." },
          { es: "Yo tuve", he: "היה לי", ex_es: "Yo tuve un examen difícil.", ex_he: "היה לי מבחן קשה." },
          { es: "Ella dijo", he: "היא אמרה", ex_es: "Ella dijo la verdad.", ex_he: "היא אמרה את האמת." },
          { es: "Nosotros vimos", he: "ראינו", ex_es: "Nosotros vimos una película.", ex_he: "ראינו סרט." },
          { es: "Ayer", he: "אתמול", ex_es: "Ayer llovió mucho.", ex_he: "אתמול ירד הרבה גשם." },
          { es: "La semana pasada", he: "השבוע שעבר", ex_es: "La semana pasada viajé a Roma.", ex_he: "השבוע שעבר טסתי לרומא." },
          { es: "Yo fui", he: "הייתי / הלכתי", ex_es: "Yo fui al mercado ayer.", ex_he: "הלכתי לשוק אתמול." },
          { es: "Ella pudo", he: "היא הצליחה/יכלה", ex_es: "Ella pudo terminar el proyecto.", ex_he: "היא הצליחה לסיים את הפרויקט." },
          { es: "Nosotros llegamos", he: "הגענו", ex_es: "Nosotros llegamos tarde a la fiesta.", ex_he: "הגענו מאוחר למסיבה." },
          { es: "Ellos vinieron", he: "הם באו", ex_es: "Ellos vinieron de visita el sábado.", ex_he: "הם באו לביקור בשבת." },
          { es: "Anoche", he: "אמש", ex_es: "Anoche cenamos en un restaurante nuevo.", ex_he: "אמש אכלנו ארוחת ערב במסעדה חדשה." }
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
          { es: "Alto / Alta", he: "גבוה / גבוהה", ex_es: "Mi hermano es muy alto.", ex_he: "אחי גבוה מאוד." },
          { es: "Bajo / Baja", he: "נמוך / נמוכה", ex_es: "La mesa es baja.", ex_he: "השולחן נמוך." },
          { es: "Simpático / Simpática", he: "נחמד / נחמדה", ex_es: "Ella es muy simpática.", ex_he: "היא מאוד נחמדה." },
          { es: "Inteligente", he: "חכם/ה", ex_es: "Es un chico inteligente.", ex_he: "הוא ילד חכם." },
          { es: "Divertido / Divertida", he: "מצחיק / מצחיקה", ex_es: "La película fue divertida.", ex_he: "הסרט היה מצחיק." },
          { es: "Aburrido / Aburrida", he: "משעמם / משעממת", ex_es: "El libro es aburrido.", ex_he: "הספר משעמם." },
          { es: "Trabajador / Trabajadora", he: "חרוץ / חרוצה", ex_es: "Es una mujer trabajadora.", ex_he: "היא אישה חרוצה." },
          { es: "Perezoso / Perezosa", he: "עצלן / עצלנית", ex_es: "El gato es muy perezoso.", ex_he: "החתול מאוד עצלן." },
          { es: "Amable", he: "אדיב/ה", ex_es: "El profesor es amable.", ex_he: "המורה אדיב." },
          { es: "Generoso / Generosa", he: "נדיב / נדיבה", ex_es: "Su tío es muy generoso.", ex_he: "הדוד שלו מאוד נדיב." },
          { es: "Cariñoso / Cariñosa", he: "חם / חמה (במזג)", ex_es: "Mi abuela es muy cariñosa.", ex_he: "סבתא שלי מאוד חמה." },
          { es: "Tímido / Tímida", he: "ביישן / ביישנית", ex_es: "El niño es tímido con extraños.", ex_he: "הילד ביישן מול זרים." },
          { es: "Curioso / Curiosa", he: "סקרן / סקרנית", ex_es: "Los gatos son muy curiosos.", ex_he: "חתולים מאוד סקרנים." },
          { es: "Paciente", he: "סבלני/ת", ex_es: "El profesor es muy paciente.", ex_he: "המורה מאוד סבלני." },
          { es: "Honesto / Honesta", he: "כן / כנה, ישר / ישרה", ex_es: "Necesitamos un empleado honesto.", ex_he: "אנחנו צריכים עובד ישר." }
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
          { es: "Levantarse", he: "לקום (מהמיטה)", ex_es: "Me levanto a las siete.", ex_he: "אני קם בשבע." },
          { es: "Ducharse", he: "להתקלח", ex_es: "Me ducho por la mañana.", ex_he: "אני מתקלח בבוקר." },
          { es: "Desayunar", he: "לאכול ארוחת בוקר", ex_es: "Desayuno café y pan.", ex_he: "אני אוכל ארוחת בוקר קפה ולחם." },
          { es: "La cocina", he: "המטבח", ex_es: "Cocino en la cocina.", ex_he: "אני מבשל במטבח." },
          { es: "El dormitorio", he: "חדר השינה", ex_es: "Mi dormitorio es pequeño.", ex_he: "חדר השינה שלי קטן." },
          { es: "Limpiar", he: "לנקות", ex_es: "Limpio la casa los sábados.", ex_he: "אני מנקה את הבית בימי שבת." },
          { es: "Acostarse", he: "ללכת לישון", ex_es: "Me acuesto a las once.", ex_he: "אני הולך לישון באחת עשרה." },
          { es: "El horario", he: "לוח הזמנים", ex_es: "Mi horario es complicado.", ex_he: "לוח הזמנים שלי מסובך." },
          { es: "Todos los días", he: "כל יום", ex_es: "Hago ejercicio todos los días.", ex_he: "אני מתאמן כל יום." },
          { es: "Normalmente", he: "בדרך כלל", ex_es: "Normalmente ceno a las ocho.", ex_he: "בדרך כלל אני אוכל ארוחת ערב בשמונה." },
          { es: "Vestirse", he: "להתלבש", ex_es: "Me visto rápido por la mañana.", ex_he: "אני מתלבש מהר בבוקר." },
          { es: "El baño", he: "חדר האמבטיה", ex_es: "El baño está al final del pasillo.", ex_he: "חדר האמבטיה נמצא בסוף המסדרון." },
          { es: "Lavar los platos", he: "לשטוף כלים", ex_es: "Lavo los platos después de cenar.", ex_he: "אני שוטף כלים אחרי ארוחת הערב." },
          { es: "Salir de casa", he: "לצאת מהבית", ex_es: "Salgo de casa a las siete y media.", ex_he: "אני יוצא מהבית בשבע וחצי." },
          { es: "Descansar", he: "לנוח", ex_es: "Los domingos descanso todo el día.", ex_he: "בימי ראשון אני נח כל היום." }
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
          { es: "El trabajo", he: "העבודה", ex_es: "Me gusta mi trabajo.", ex_he: "אני אוהב את העבודה שלי." },
          { es: "La empresa", he: "החברה (עסקית)", ex_es: "Trabajo en una empresa grande.", ex_he: "אני עובד בחברה גדולה." },
          { es: "El jefe / La jefa", he: "הבוס", ex_es: "Mi jefe es muy exigente.", ex_he: "הבוס שלי מאוד דרשני." },
          { es: "El médico / La médica", he: "הרופא/ה", ex_es: "El médico revisa al paciente.", ex_he: "הרופא בודק את המטופל." },
          { es: "El abogado / La abogada", he: "עורך/ת דין", ex_es: "La abogada ganó el caso.", ex_he: "עורכת הדין ניצחה בתיק." },
          { es: "El ingeniero / La ingeniera", he: "מהנדס/ת", ex_es: "El ingeniero diseña puentes.", ex_he: "המהנדס מתכנן גשרים." },
          { es: "La reunión", he: "הישיבה", ex_es: "Tenemos una reunión mañana.", ex_he: "יש לנו ישיבה מחר." },
          { es: "El sueldo", he: "המשכורת", ex_es: "El sueldo es bueno.", ex_he: "המשכורת טובה." },
          { es: "Contratar", he: "להעסיק/לגייס", ex_es: "La empresa va a contratar más gente.", ex_he: "החברה הולכת לגייס עוד אנשים." },
          { es: "Renunciar", he: "להתפטר", ex_es: "Ella decidió renunciar al trabajo.", ex_he: "היא החליטה להתפטר מהעבודה." },
          { es: "El profesor / La profesora", he: "המורה", ex_es: "La profesora explica muy bien.", ex_he: "המורה מסבירה מאוד טוב." },
          { es: "El vendedor / La vendedora", he: "המוכר / המוכרת", ex_es: "El vendedor fue muy amable.", ex_he: "המוכר היה מאוד אדיב." },
          { es: "La entrevista", he: "הראיון (עבודה)", ex_es: "Tengo una entrevista de trabajo mañana.", ex_he: "יש לי ראיון עבודה מחר." },
          { es: "El currículum", he: "קורות החיים", ex_es: "Envié mi currículum ayer.", ex_he: "שלחתי את קורות החיים שלי אתמול." },
          { es: "Ganar dinero", he: "להרוויח כסף", ex_es: "Trabajo duro para ganar dinero.", ex_he: "אני עובד קשה כדי להרוויח כסף." }
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
          { es: "A la derecha", he: "ימינה", ex_es: "Gira a la derecha.", ex_he: "פנה ימינה." },
          { es: "A la izquierda", he: "שמאלה", ex_es: "El banco está a la izquierda.", ex_he: "הבנק נמצא משמאל." },
          { es: "Todo recto", he: "ישר", ex_es: "Sigue todo recto.", ex_he: "המשך ישר." },
          { es: "La estación", he: "התחנה", ex_es: "La estación está cerca.", ex_he: "התחנה קרובה." },
          { es: "El autobús", he: "האוטובוס", ex_es: "Tomo el autobús cada día.", ex_he: "אני נוסע באוטובוס כל יום." },
          { es: "El metro", he: "הרכבת התחתית", ex_es: "El metro es rápido.", ex_he: "הרכבת התחתית מהירה." },
          { es: "El semáforo", he: "הרמזור", ex_es: "Para en el semáforo.", ex_he: "עצור ברמזור." },
          { es: "La esquina", he: "הפינה", ex_es: "Está en la esquina.", ex_he: "זה נמצא בפינה." },
          { es: "¿Cómo llego a...?", he: "איך אני מגיע ל...?", ex_es: "¿Cómo llego al museo?", ex_he: "איך אני מגיע למוזיאון?" },
          { es: "Cerca / Lejos", he: "קרוב / רחוק", ex_es: "El hotel está lejos de aquí.", ex_he: "המלון רחוק מכאן." },
          { es: "La parada de autobús", he: "תחנת האוטובוס", ex_es: "Espero en la parada de autobús.", ex_he: "אני מחכה בתחנת האוטובוס." },
          { es: "El billete de tren", he: "כרטיס הרכבת", ex_es: "Compré el billete de tren en línea.", ex_he: "קניתי את כרטיס הרכבת באינטרנט." },
          { es: "Cruzar la calle", he: "לחצות את הרחוב", ex_es: "Cruza la calle con cuidado.", ex_he: "חצה את הרחוב בזהירות." },
          { es: "Perderse", he: "ללכת לאיבוד", ex_es: "Nos perdimos en el centro.", ex_he: "הלכנו לאיבוד במרכז העיר." },
          { es: "Al lado de", he: "ליד", ex_es: "El banco está al lado de la farmacia.", ex_he: "הבנק נמצא ליד בית המרקחת." }
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
          { es: "La reserva", he: "ההזמנה (מלון/מסעדה)", ex_es: "Hice la reserva por internet.", ex_he: "עשיתי את ההזמנה באינטרנט." },
          { es: "El vuelo con escala", he: "טיסה עם עצירת ביניים", ex_es: "Tomamos un vuelo con escala en Madrid.", ex_he: "טסנו בטיסה עם עצירת ביניים במדריד." },
          { es: "El retraso", he: "העיכוב / האיחור", ex_es: "Hubo un retraso de dos horas.", ex_he: "היה עיכוב של שעתיים." },
          { es: "La tarjeta de embarque", he: "כרטיס העלייה למטוס", ex_es: "No encuentro mi tarjeta de embarque.", ex_he: "אני לא מוצא את כרטיס העלייה שלי למטוס." },
          { es: "El equipaje", he: "המטען / הכבודה", ex_es: "Perdimos el equipaje en el aeropuerto.", ex_he: "איבדנו את הכבודה שלנו בשדה התעופה." },
          { es: "La recepción", he: "הקבלה (במלון)", ex_es: "Pregunta en la recepción del hotel.", ex_he: "שאל בקבלה של המלון." },
          { es: "Alquilar un coche", he: "לשכור רכב", ex_es: "Vamos a alquilar un coche en el aeropuerto.", ex_he: "אנחנו הולכים לשכור רכב בשדה התעופה." },
          { es: "El seguro de viaje", he: "ביטוח נסיעות", ex_es: "Compré un seguro de viaje antes del viaje.", ex_he: "קניתי ביטוח נסיעות לפני הטיול." },
          { es: "Facturar el equipaje", he: "לרשום את הכבודה", ex_es: "Tienes que facturar el equipaje antes de las ocho.", ex_he: "אתה צריך לרשום את הכבודה לפני שמונה." },
          { es: "Quejarse", he: "להתלונן", ex_es: "Quiero quejarme sobre la habitación.", ex_he: "אני רוצה להתלונן על החדר." },
          { es: "El itinerario", he: "מסלול הטיול", ex_es: "Nuestro itinerario incluye tres ciudades.", ex_he: "מסלול הטיול שלנו כולל שלוש ערים." },
          { es: "Cancelar el vuelo", he: "לבטל את הטיסה", ex_es: "Cancelaron el vuelo por el clima.", ex_he: "הם ביטלו את הטיסה בגלל מזג האוויר." }
        ],
        sentences: [
          { es: "Nuestro vuelo tuvo un retraso de tres horas.", he: "לטיסה שלנו היה עיכוב של שלוש שעות." },
          { es: "Perdimos la conexión por culpa del retraso.", he: "פספסנו את טיסת ההמשך בגלל העיכוב." },
          { es: "Voy a quejarme en la recepción del hotel.", he: "אני הולך להתלונן בקבלה של המלון." },
          { es: "Alquilamos un coche para recorrer la costa.", he: "שכרנו רכב כדי לסייר לאורך החוף." },
          { es: "Cancelaron el vuelo debido a una tormenta.", he: "הם ביטלו את הטיסה בגלל סופה." }
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
          { es: "Los accionistas", he: "בעלי המניות", ex_es: "Los accionistas votaron a favor.", ex_he: "בעלי המניות הצביעו בעד." },
          { es: "El margen de beneficio", he: "שולי הרווח", ex_es: "El margen de beneficio bajó este trimestre.", ex_he: "שולי הרווח ירדו ברבעון הזה." },
          { es: "La cadena de suministro", he: "שרשרת האספקה", ex_es: "La cadena de suministro se vio afectada.", ex_he: "שרשרת האספקה נפגעה." },
          { es: "El informe trimestral", he: "הדוח הרבעוני", ex_es: "Presentamos el informe trimestral mañana.", ex_he: "נציג את הדוח הרבעוני מחר." },
          { es: "Escalar el negocio", he: "להרחיב את העסק", ex_es: "Queremos escalar el negocio a nivel internacional.", ex_he: "אנחנו רוצים להרחיב את העסק ברמה בינלאומית." },
          { es: "El plazo de entrega", he: "מועד האספקה", ex_es: "El plazo de entrega es muy ajustado.", ex_he: "מועד האספקה מאוד צפוף." }
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
          { es: "Espero que vengas", he: "אני מקווה שתבוא", ex_es: "Espero que vengas a la fiesta.", ex_he: "אני מקווה שתבוא למסיבה." },
          { es: "Quiero que sepas", he: "אני רוצה שתדע", ex_es: "Quiero que sepas la verdad.", ex_he: "אני רוצה שתדע את האמת." },
          { es: "Es importante que estudies", he: "חשוב שתלמד", ex_es: "Es importante que estudies para el examen.", ex_he: "חשוב שתלמד למבחן." },
          { es: "Dudo que sea verdad", he: "אני מסופק שזה נכון", ex_es: "Dudo que sea verdad.", ex_he: "אני מסופק שזה נכון." },
          { es: "Ojalá que llueva", he: "הלוואי וירד גשם", ex_es: "Ojalá que llueva mañana.", ex_he: "הלוואי וירד גשם מחר." },
          { es: "No creo que pueda", he: "אני לא חושב שהוא/היא יכול/ה", ex_es: "No creo que pueda venir.", ex_he: "אני לא חושב שהוא יכול לבוא." },
          { es: "Antes de que llegues", he: "לפני שתגיע", ex_es: "Terminaré antes de que llegues.", ex_he: "אני אסיים לפני שתגיע." },
          { es: "Aunque sea difícil", he: "למרות שזה קשה", ex_es: "Aunque sea difícil, lo lograremos.", ex_he: "למרות שזה קשה, נצליח." },
          { es: "Para que entiendas", he: "כדי שתבין", ex_es: "Te lo explico para que entiendas.", ex_he: "אני מסביר לך כדי שתבין." },
          { es: "Si tuviera tiempo", he: "אם היה לי זמן", ex_es: "Si tuviera tiempo, viajaría más.", ex_he: "אם היה לי זמן, הייתי נוסע יותר." },
          { es: "Me alegra que vengas", he: "אני שמח שאתה בא", ex_es: "Me alegra que vengas a la boda.", ex_he: "אני שמח שאתה בא לחתונה." },
          { es: "Es posible que llueva", he: "ייתכן וירד גשם", ex_es: "Es posible que llueva esta tarde.", ex_he: "ייתכן וירד גשם אחר הצהריים." },
          { es: "Recomiendo que estudies más", he: "אני ממליץ שתלמד יותר", ex_es: "Te recomiendo que estudies más para el examen.", ex_he: "אני ממליץ לך שתלמד יותר למבחן." },
          { es: "No pienso que sea fácil", he: "אני לא חושב שזה קל", ex_es: "No pienso que sea fácil este trabajo.", ex_he: "אני לא חושב שהעבודה הזו קלה." },
          { es: "Hasta que termines", he: "עד שתסיים", ex_es: "No saldremos hasta que termines la tarea.", ex_he: "לא נצא עד שתסיים את המטלה." }
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
          { es: "Costar un ojo de la cara", he: "לעלות הון תועפות", ex_es: "Este coche cuesta un ojo de la cara.", ex_he: "המכונית הזו עולה הון תועפות." },
          { es: "Estar en las nubes", he: "להיות מפוזר/בעננים", ex_es: "Hoy estás en las nubes.", ex_he: "היום אתה בעננים." },
          { es: "Tomar el pelo", he: "לעבוד על מישהו/להתל", ex_es: "¿Me estás tomando el pelo?", ex_he: "אתה עובד עליי?" },
          { es: "Ser pan comido", he: "להיות קלי קלות (משימה)", ex_es: "El examen fue pan comido.", ex_he: "המבחן היה קלי קלות." },
          { es: "Meter la pata", he: "לעשות טעות מביכה", ex_es: "Metí la pata en la reunión.", ex_he: "עשיתי טעות מביכה בישיבה." },
          { es: "No tener pelos en la lengua", he: "לומר דברים כפי שהם, בלי לעטוף", ex_es: "Ella no tiene pelos en la lengua.", ex_he: "היא אומרת הכל בלי כחל וסרק." },
          { es: "Dar en el clavo", he: "לפגוע בול", ex_es: "Con esa idea diste en el clavo.", ex_he: "עם הרעיון הזה פגעת בול." },
          { es: "Estar como una cabra", he: "להיות משוגע/מוזר", ex_es: "Mi vecino está como una cabra.", ex_he: "השכן שלי משוגע." },
          { es: "Ponerse las pilas", he: "להתאמץ/להתעורר לפעולה", ex_es: "¡Ponte las pilas y trabaja!", ex_he: "תתעורר ותעבוד!" },
          { es: "A otro perro con ese hueso", he: "ספר לזה עוד סיפור (ביטוי ספקנות)", ex_es: "No te creo, a otro perro con ese hueso.", ex_he: "אני לא מאמין לך, ספר את זה למישהו אחר." },
          { es: "Echar una mano", he: "לעזור (להושיט יד)", ex_es: "¿Puedes echarme una mano con esto?", ex_he: "אתה יכול לעזור לי עם זה?" },
          { es: "Estar hasta las narices", he: "להיות נמאס לגמרי", ex_es: "Estoy hasta las narices de este proyecto.", ex_he: "נמאס לי מהפרויקט הזה." },
          { es: "Ser la gota que colma el vaso", he: "להיות הקש ששבר את גב הגמל", ex_es: "Este error fue la gota que colmó el vaso.", ex_he: "הטעות הזו הייתה הקש ששבר את גב הגמל." },
          { es: "Hablar por los codos", he: "לדבר בלי הפסקה", ex_es: "Mi vecina habla por los codos.", ex_he: "השכנה שלי מדברת בלי הפסקה." },
          { es: "Írsele el santo al cielo", he: "לשכוח משהו לגמרי", ex_es: "Se me fue el santo al cielo y olvidé la reunión.", ex_he: "שכחתי לגמרי ונשכחה לי הישיבה." }
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
          { es: "Yo era (imperfecto)", he: "הייתי (מצב מתמשך בעבר)", ex_es: "Cuando era niño, jugaba fútbol.", ex_he: "כשהייתי ילד, שיחקתי כדורגל." },
          { es: "Yo fui (indefinido)", he: "הייתי/הלכתי (פעולה חד-פעמית)", ex_es: "Ayer fui al médico.", ex_he: "אתמול הלכתי לרופא." },
          { es: "Mientras", he: "בזמן ש...", ex_es: "Mientras cocinaba, sonó el teléfono.", ex_he: "בזמן שבישלתי, הטלפון צלצל." },
          { es: "De repente", he: "לפתע", ex_es: "De repente empezó a llover.", ex_he: "לפתע התחיל לרדת גשם." },
          { es: "Siempre (con imperfecto)", he: "תמיד (הרגל בעבר)", ex_es: "Siempre visitábamos a mi abuela.", ex_he: "תמיד ביקרנו את סבתא שלי." },
          { es: "Una vez", he: "פעם אחת", ex_es: "Una vez viajé a Perú.", ex_he: "פעם אחת טסתי לפרו." },
          { es: "Cuando + imperfecto", he: "כש... (רקע)", ex_es: "Cuando vivía en Chile, aprendí español.", ex_he: "כשגרתי בצ'ילה, למדתי ספרדית." },
          { es: "Interrumpir", he: "להפריע/לקטוע", ex_es: "La llamada interrumpió la reunión.", ex_he: "השיחה קטעה את הישיבה." },
          { es: "Se rompió", he: "זה נשבר", ex_es: "El vaso se rompió.", ex_he: "הכוס נשברה." },
          { es: "Estaba lloviendo", he: "היה יורד גשם", ex_es: "Estaba lloviendo cuando salí.", ex_he: "היה יורד גשם כשיצאתי." },
          { es: "Yo había terminado", he: "כבר הייתי סיימתי", ex_es: "Cuando llegaste, yo ya había terminado.", ex_he: "כשהגעת, כבר סיימתי." },
          { es: "Solía + infinitivo", he: "נהגתי ל...", ex_es: "De niño, solía jugar en el parque.", ex_he: "כשהייתי ילד, נהגתי לשחק בפארק." },
          { es: "Acababa de llegar", he: "בדיוק הגעתי", ex_es: "Acababa de llegar cuando empezó a llover.", ex_he: "בדיוק הגעתי כשהתחיל לרדת גשם." },
          { es: "Llevaba + tiempo + gerundio", he: "כבר זמן מסוים ש...(עושה)", ex_es: "Llevaba dos horas esperando.", ex_he: "כבר חיכיתי שעתיים." },
          { es: "Nada más llegar", he: "מיד עם ההגעה", ex_es: "Nada más llegar, se puso a trabajar.", ex_he: "מיד עם ההגעה, הוא התחיל לעבוד." }
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
          { es: "Estimado/a señor/a", he: "לכבוד אדון/גברת (פתיחה רשמית)", ex_es: "Estimada señora García:", ex_he: "לכבוד גברת גרסיה:" },
          { es: "Le escribo para...", he: "אני כותב לך כדי...", ex_es: "Le escribo para solicitar información.", ex_he: "אני כותב לך כדי לבקש מידע." },
          { es: "Adjunto encontrará", he: "מצורף בזאת", ex_es: "Adjunto encontrará el informe.", ex_he: "מצורף בזאת הדוח." },
          { es: "Quedo a la espera de su respuesta", he: "אני ממתין לתשובתך", ex_es: "Quedo a la espera de su respuesta.", ex_he: "אני ממתין לתשובתך." },
          { es: "Atentamente", he: "בברכה", ex_es: "Atentamente, Juan Pérez.", ex_he: "בברכה, חואן פרס." },
          { es: "Solicitar", he: "לבקש (רשמית)", ex_es: "Quiero solicitar una reunión.", ex_he: "אני רוצה לבקש פגישה." },
          { es: "Confirmar", he: "לאשר", ex_es: "Quiero confirmar la cita.", ex_he: "אני רוצה לאשר את הפגישה." },
          { es: "Lamento informarle", he: "אני מצטער להודיע לך", ex_es: "Lamento informarle que el vuelo se canceló.", ex_he: "אני מצטער להודיע שהטיסה בוטלה." },
          { es: "En referencia a", he: "בהתייחס ל...", ex_es: "En referencia a su correo anterior...", ex_he: "בהתייחס למייל הקודם שלך..." },
          { es: "Un cordial saludo", he: "בברכה חמה", ex_es: "Un cordial saludo, el equipo.", ex_he: "בברכה חמה, הצוות." },
          { es: "Le agradezco de antemano", he: "תודה מראש", ex_es: "Le agradezco de antemano su atención.", ex_he: "תודה מראש על תשומת ליבך." },
          { es: "Sin más por el momento", he: "אין עוד מה להוסיף כרגע", ex_es: "Sin más por el momento, quedo a su disposición.", ex_he: "אין עוד מה להוסיף כרגע, אני לרשותך." },
          { es: "Rogamos disculpe las molestias", he: "אנא סלח על אי הנוחות", ex_es: "Rogamos disculpe las molestias ocasionadas.", ex_he: "אנא סלח על אי הנוחות שנגרמה." },
          { es: "Le informo que", he: "אני מודיע לך ש...", ex_es: "Le informo que la reunión se pospuso.", ex_he: "אני מודיע לך שהישיבה נדחתה." },
          { es: "Con relación a su correo", he: "בהתייחס למייל שלך", ex_es: "Con relación a su correo del día 5...", ex_he: "בהתייחס למייל שלך מהתאריך 5..." }
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
          { es: "En mi opinión", he: "לדעתי", ex_es: "En mi opinión, es una buena idea.", ex_he: "לדעתי, זה רעיון טוב." },
          { es: "Por un lado... por otro lado", he: "מצד אחד... מצד שני", ex_es: "Por un lado es caro, por otro lado es útil.", ex_he: "מצד אחד זה יקר, מצד שני זה שימושי." },
          { es: "Estoy de acuerdo", he: "אני מסכים", ex_es: "Estoy de acuerdo contigo.", ex_he: "אני מסכים איתך." },
          { es: "No estoy de acuerdo", he: "אני לא מסכים", ex_es: "No estoy de acuerdo con esa política.", ex_he: "אני לא מסכים עם המדיניות הזו." },
          { es: "El titular", he: "הכותרת (בעיתון)", ex_es: "El titular fue muy impactante.", ex_he: "הכותרת הייתה מאוד מדהימה." },
          { es: "La polémica", he: "המחלוקת", ex_es: "El tema generó mucha polémica.", ex_he: "הנושא יצר הרבה מחלוקת." },
          { es: "Según los expertos", he: "לפי המומחים", ex_es: "Según los expertos, la economía crecerá.", ex_he: "לפי המומחים, הכלכלה תצמח." },
          { es: "El punto de vista", he: "נקודת המבט", ex_es: "Respeto tu punto de vista.", ex_he: "אני מכבד את נקודת המבט שלך." },
          { es: "Debatir", he: "להתווכח/לדון", ex_es: "Vamos a debatir el tema mañana.", ex_he: "אנחנו נדון בנושא מחר." },
          { es: "Al fin y al cabo", he: "בסופו של דבר", ex_es: "Al fin y al cabo, todos ganamos.", ex_he: "בסופו של דבר, כולנו ניצחנו." },
          { es: "Desde mi punto de vista", he: "מנקודת מבטי", ex_es: "Desde mi punto de vista, la decisión fue correcta.", ex_he: "מנקודת מבטי, ההחלטה הייתה נכונה." },
          { es: "Cabe destacar que", he: "ראוי לציין ש...", ex_es: "Cabe destacar que la economía mejoró.", ex_he: "ראוי לציין שהכלכלה השתפרה." },
          { es: "Sin lugar a dudas", he: "ללא ספק", ex_es: "Sin lugar a dudas, es la mejor opción.", ex_he: "ללא ספק, זו האפשרות הטובה ביותר." },
          { es: "Está por verse", he: "עוד ייראה / טרם ידוע", ex_es: "El resultado está por verse.", ex_he: "התוצאה עוד תיראה." },
          { es: "Plantear una cuestión", he: "להעלות סוגיה", ex_es: "Quiero plantear una cuestión importante.", ex_he: "אני רוצה להעלות סוגיה חשובה." }
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
          { es: "El viaje de negocios", he: "נסיעת עסקים", ex_es: "Tengo un viaje de negocios la próxima semana.", ex_he: "יש לי נסיעת עסקים בשבוע הבא." },
          { es: "La escala", he: "עצירת ביניים (טיסה)", ex_es: "Tenemos una escala de tres horas en Lisboa.", ex_he: "יש לנו עצירת ביניים של שלוש שעות בליסבון." },
          { es: "El visado", he: "הוויזה", ex_es: "Necesito un visado para entrar al país.", ex_he: "אני צריך ויזה כדי להיכנס למדינה." },
          { es: "La aduana", he: "המכס", ex_es: "Pasamos por la aduana sin problemas.", ex_he: "עברנו את המכס בלי בעיות." },
          { es: "El alojamiento", he: "הלינה", ex_es: "La empresa paga el alojamiento durante el viaje.", ex_he: "החברה משלמת על הלינה במהלך הנסיעה." },
          { es: "Las dietas", he: "דמי אש\"ל (הוצאות נסיעה)", ex_es: "La empresa cubre las dietas de viaje.", ex_he: "החברה מכסה את דמי האש\"ל של הנסיעה." },
          { es: "El huso horario", he: "אזור הזמן", ex_es: "Todavía no me acostumbro al huso horario.", ex_he: "אני עדיין לא רגיל לאזור הזמן." },
          { es: "El jet lag", he: "עייפות מטיסה ארוכה (ג'ט לג)", ex_es: "Tengo jet lag después del vuelo largo.", ex_he: "יש לי ג'ט לג אחרי הטיסה הארוכה." },
          { es: "Reprogramar el vuelo", he: "לתזמן מחדש את הטיסה", ex_es: "Tuvimos que reprogramar el vuelo por la huelga.", ex_he: "היינו צריכים לתזמן מחדש את הטיסה בגלל השביתה." },
          { es: "La sala VIP", he: "חדר ה-VIP (בשדה תעופה)", ex_es: "Esperamos en la sala VIP del aeropuerto.", ex_he: "חיכינו בחדר ה-VIP של שדה התעופה." },
          { es: "Hacer escala en", he: "לעצור בדרך ב...", ex_es: "El vuelo hace escala en Nueva York.", ex_he: "הטיסה עוצרת בדרך בניו יורק." },
          { es: "El seguro médico de viaje", he: "ביטוח בריאות לנסיעות", ex_es: "Es obligatorio tener seguro médico de viaje.", ex_he: "חובה שיהיה ביטוח בריאות לנסיעות." }
        ],
        sentences: [
          { es: "Mi viaje de negocios incluye una escala en Lisboa.", he: "נסיעת העסקים שלי כוללת עצירת ביניים בליסבון." },
          { es: "Tuvimos que reprogramar el vuelo debido a una huelga.", he: "היינו צריכים לתזמן מחדש את הטיסה בגלל שביתה." },
          { es: "Todavía siento el jet lag después de cruzar tantos husos horarios.", he: "אני עדיין מרגיש ג'ט לג אחרי שחציתי כל כך הרבה אזורי זמן." },
          { es: "La empresa cubre el alojamiento y las dietas del viaje.", he: "החברה מכסה את הלינה ואת דמי האש\"ל של הנסיעה." },
          { es: "Necesitas un visado y seguro médico para este país.", he: "אתה צריך ויזה וביטוח בריאות למדינה הזו." }
        ]
      }
    ]
  },

  // "דקדוק בסיסי" אינו רמת קושי מבחינת המשתמש - הוא אזור לימוד נפרד (כפתור משלו בדף הבית),
  // אך נשמר באותה צורת נתונים בדיוק כדי לעבוד עם כל מנוע התרגול הקיים ללא כל שינוי בו.
  grammar: {
    id: "grammar",
    name: "דקדוק בסיסי",
    icon: "📖",
    color: "#f59e0b",
    topics: [
      {
        id: "pronouns",
        name: "כינויי גוף",
        vocab: [
          { es: "Yo", he: "אני", ex_es: "Yo hablo español.", ex_he: "אני מדבר ספרדית." },
          { es: "Tú", he: "אתה / את", ex_es: "Tú eres muy amable.", ex_he: "אתה מאוד אדיב." },
          { es: "Él", he: "הוא", ex_es: "Él vive en Madrid.", ex_he: "הוא גר במדריד." },
          { es: "Ella", he: "היא", ex_es: "Ella trabaja mucho.", ex_he: "היא עובדת הרבה." },
          { es: "Usted", he: "אתה / את (רשמי)", ex_es: "¿Cómo está usted?", ex_he: "מה שלומך? (רשמי)" },
          { es: "Nosotros / Nosotras", he: "אנחנו", ex_es: "Nosotros somos amigos.", ex_he: "אנחנו חברים." },
          { es: "Vosotros / Vosotras", he: "אתם / אתן (בספרד)", ex_es: "Vosotros sois estudiantes.", ex_he: "אתם תלמידים." },
          { es: "Ellos", he: "הם", ex_es: "Ellos viven juntos.", ex_he: "הם גרים ביחד." },
          { es: "Ellas", he: "הן", ex_es: "Ellas estudian medicina.", ex_he: "הן לומדות רפואה." },
          { es: "Ustedes", he: "אתם / אתן (רשמי)", ex_es: "Ustedes son bienvenidos.", ex_he: "אתם מוזמנים בברכה." }
        ],
        sentences: [
          { es: "Yo soy de Israel y tú eres de España.", he: "אני מישראל ואתה מספרד." },
          { es: "Nosotros vamos al cine esta noche.", he: "אנחנו הולכים לקולנוע הלילה." },
          { es: "¿Ustedes hablan inglés?", he: "אתם מדברים אנגלית?" },
          { es: "Ella y él son hermanos.", he: "היא והוא אחים." },
          { es: "Vosotros sois muy simpáticos.", he: "אתם מאוד נחמדים." }
        ]
      },
      {
        id: "common_verbs",
        name: "פעלים נפוצים",
        vocab: [
          { es: "Ser", he: "להיות (זהות/תכונה)", ex_es: "Quiero ser médico.", ex_he: "אני רוצה להיות רופא." },
          { es: "Estar", he: "להיות (מצב/מיקום)", ex_es: "Necesito estar tranquilo.", ex_he: "אני צריך להיות רגוע." },
          { es: "Tener", he: "יש ל...", ex_es: "Voy a tener una reunión.", ex_he: "יהיה לי ישיבה." },
          { es: "Hacer", he: "לעשות", ex_es: "Tengo que hacer la tarea.", ex_he: "אני צריך לעשות שיעורי בית." },
          { es: "Ir", he: "ללכת", ex_es: "Vamos a ir a la playa.", ex_he: "אנחנו הולכים ללכת לחוף הים." },
          { es: "Poder", he: "להיות מסוגל / יכול", ex_es: "No puedo venir mañana.", ex_he: "אני לא יכול לבוא מחר." },
          { es: "Querer", he: "לרצות", ex_es: "Quiero aprender español.", ex_he: "אני רוצה ללמוד ספרדית." },
          { es: "Decir", he: "לומר", ex_es: "Voy a decir la verdad.", ex_he: "אני הולך לומר את האמת." },
          { es: "Ver", he: "לראות", ex_es: "Quiero ver esa película.", ex_he: "אני רוצה לראות את הסרט הזה." },
          { es: "Dar", he: "לתת", ex_es: "Voy a dar un regalo.", ex_he: "אני הולך לתת מתנה." },
          { es: "Saber", he: "לדעת", ex_es: "No sé la respuesta.", ex_he: "אני לא יודע את התשובה." },
          { es: "Hablar", he: "לדבר", ex_es: "Me gusta hablar español.", ex_he: "אני אוהב לדבר ספרדית." }
        ],
        sentences: [
          { es: "Quiero ser profesor de español algún día.", he: "אני רוצה להיות מורה לספרדית יום אחד." },
          { es: "¿Puedes hacer esto por mí?", he: "אתה יכול לעשות את זה בשבילי?" },
          { es: "Vamos a ver una película esta noche.", he: "אנחנו הולכים לראות סרט הלילה." },
          { es: "No sé qué decir en esta situación.", he: "אני לא יודע מה לומר במצב הזה." },
          { es: "Ellos van a dar una fiesta el sábado.", he: "הם הולכים לתת מסיבה בשבת." }
        ]
      },
      {
        id: "basic_conjugation",
        name: "הטיות בסיסיות בהווה",
        vocab: [
          { es: "Yo hablo", he: "אני מדבר", ex_es: "Yo hablo con mi madre.", ex_he: "אני מדבר עם אמא שלי." },
          { es: "Tú hablas", he: "אתה מדבר", ex_es: "Tú hablas muy rápido.", ex_he: "אתה מדבר מהר מאוד." },
          { es: "Él/Ella habla", he: "הוא/היא מדבר/ת", ex_es: "Ella habla tres idiomas.", ex_he: "היא מדברת שלוש שפות." },
          { es: "Nosotros hablamos", he: "אנחנו מדברים", ex_es: "Nosotros hablamos todos los días.", ex_he: "אנחנו מדברים כל יום." },
          { es: "Vosotros habláis", he: "אתם מדברים (בספרד)", ex_es: "Vosotros habláis muy bien.", ex_he: "אתם מדברים טוב מאוד." },
          { es: "Ellos hablan", he: "הם מדברים", ex_es: "Ellos hablan por teléfono.", ex_he: "הם מדברים בטלפון." },
          { es: "Yo como", he: "אני אוכל", ex_es: "Yo como a las dos.", ex_he: "אני אוכל בשתיים." },
          { es: "Tú comes", he: "אתה אוכל", ex_es: "Tú comes muy poco.", ex_he: "אתה אוכל מעט מאוד." },
          { es: "Él/Ella come", he: "הוא/היא אוכל/ת", ex_es: "Él come mucha fruta.", ex_he: "הוא אוכל הרבה פרי." },
          { es: "Nosotros comemos", he: "אנחנו אוכלים", ex_es: "Nosotros comemos juntos.", ex_he: "אנחנו אוכלים ביחד." },
          { es: "Vosotros coméis", he: "אתם אוכלים (בספרד)", ex_es: "Vosotros coméis tarde.", ex_he: "אתם אוכלים מאוחר." },
          { es: "Ellos comen", he: "הם אוכלים", ex_es: "Ellos comen en el restaurante.", ex_he: "הם אוכלים במסעדה." },
          { es: "Yo vivo", he: "אני גר", ex_es: "Yo vivo en Tel Aviv.", ex_he: "אני גר בתל אביב." },
          { es: "Tú vives", he: "אתה גר", ex_es: "Tú vives cerca de aquí.", ex_he: "אתה גר קרוב לכאן." },
          { es: "Él/Ella vive", he: "הוא/היא גר/ה", ex_es: "Ella vive con su familia.", ex_he: "היא גרה עם המשפחה שלה." },
          { es: "Nosotros vivimos", he: "אנחנו גרים", ex_es: "Nosotros vivimos en el centro.", ex_he: "אנחנו גרים במרכז." },
          { es: "Vosotros vivís", he: "אתם גרים (בספרד)", ex_es: "Vosotros vivís en las afueras.", ex_he: "אתם גרים בפרברים." },
          { es: "Ellos viven", he: "הם גרים", ex_es: "Ellos viven en Barcelona.", ex_he: "הם גרים בברצלונה." }
        ],
        sentences: [
          { es: "Yo hablo español, como tapas y vivo en Madrid.", he: "אני מדבר ספרדית, אוכל טאפאס וגר במדריד." },
          { es: "¿Tú hablas, comes o vives aquí?", he: "אתה מדבר, אוכל או גר כאן?" },
          { es: "Nosotros hablamos, comemos y vivimos juntos.", he: "אנחנו מדברים, אוכלים וגרים ביחד." },
          { es: "Ellos hablan inglés y viven en Londres.", he: "הם מדברים אנגלית וגרים בלונדון." },
          { es: "Ella come temprano y luego habla con sus amigas.", he: "היא אוכלת מוקדם ואז מדברת עם החברות שלה." }
        ]
      }
    ]
  }
};
