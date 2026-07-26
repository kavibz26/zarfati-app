// ===== נתוני רמת "דקדוק בסיסי" =====
// קובץ זה הוא חלק ממאגר הנתונים המפוצל (ראו js/data.js למאסף). אותה צורת נתונים בדיוק כמו
// שהייתה מקוננת בעבר בתוך data.js אחד - LEVELS.grammar ימשיך להצביע לאותו תוכן.

const LEVEL_GRAMMAR = {
  id: "grammar",
  name: "דקדוק בסיסי",
  icon: "📖",
  color: "#f59e0b",
  topics: [
    {
      id: "pronouns",
      name: "כינויי גוף",
      vocab: [
        { id: "grammar_pronouns_0", es: "Yo", he: "אני", ex_es: "Yo hablo español.", ex_he: "אני מדבר ספרדית." },
        { id: "grammar_pronouns_1", es: "Tú", he: "אתה / את", ex_es: "Tú eres muy amable.", ex_he: "אתה מאוד אדיב." },
        { id: "grammar_pronouns_2", es: "Él", he: "הוא", ex_es: "Él vive en Madrid.", ex_he: "הוא גר במדריד." },
        { id: "grammar_pronouns_3", es: "Ella", he: "היא", ex_es: "Ella trabaja mucho.", ex_he: "היא עובדת הרבה." },
        { id: "grammar_pronouns_4", es: "Usted", he: "אתה / את (רשמי)", ex_es: "¿Cómo está usted?", ex_he: "מה שלומך? (רשמי)" },
        { id: "grammar_pronouns_5", es: "Nosotros / Nosotras", he: "אנחנו", ex_es: "Nosotros somos amigos.", ex_he: "אנחנו חברים." },
        { id: "grammar_pronouns_6", es: "Vosotros / Vosotras", he: "אתם / אתן (בספרד)", ex_es: "Vosotros sois estudiantes.", ex_he: "אתם תלמידים." },
        { id: "grammar_pronouns_7", es: "Ellos", he: "הם", ex_es: "Ellos viven juntos.", ex_he: "הם גרים ביחד." },
        { id: "grammar_pronouns_8", es: "Ellas", he: "הן", ex_es: "Ellas estudian medicina.", ex_he: "הן לומדות רפואה." },
        { id: "grammar_pronouns_9", es: "Ustedes", he: "אתם / אתן (רשמי)", ex_es: "Ustedes son bienvenidos.", ex_he: "אתם מוזמנים בברכה." }
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
        { id: "grammar_common_verbs_0", es: "Ser", he: "להיות (זהות/תכונה)", ex_es: "Quiero ser médico.", ex_he: "אני רוצה להיות רופא." },
        { id: "grammar_common_verbs_1", es: "Estar", he: "להיות (מצב/מיקום)", ex_es: "Necesito estar tranquilo.", ex_he: "אני צריך להיות רגוע." },
        { id: "grammar_common_verbs_2", es: "Tener", he: "יש ל...", ex_es: "Voy a tener una reunión.", ex_he: "יהיה לי ישיבה." },
        { id: "grammar_common_verbs_3", es: "Hacer", he: "לעשות", ex_es: "Tengo que hacer la tarea.", ex_he: "אני צריך לעשות שיעורי בית." },
        { id: "grammar_common_verbs_4", es: "Ir", he: "ללכת", ex_es: "Vamos a ir a la playa.", ex_he: "אנחנו הולכים ללכת לחוף הים." },
        { id: "grammar_common_verbs_5", es: "Poder", he: "להיות מסוגל / יכול", ex_es: "No puedo venir mañana.", ex_he: "אני לא יכול לבוא מחר." },
        { id: "grammar_common_verbs_6", es: "Querer", he: "לרצות", ex_es: "Quiero aprender español.", ex_he: "אני רוצה ללמוד ספרדית." },
        { id: "grammar_common_verbs_7", es: "Decir", he: "לומר", ex_es: "Voy a decir la verdad.", ex_he: "אני הולך לומר את האמת." },
        { id: "grammar_common_verbs_8", es: "Ver", he: "לראות", ex_es: "Quiero ver esa película.", ex_he: "אני רוצה לראות את הסרט הזה." },
        { id: "grammar_common_verbs_9", es: "Dar", he: "לתת", ex_es: "Voy a dar un regalo.", ex_he: "אני הולך לתת מתנה." },
        { id: "grammar_common_verbs_10", es: "Saber", he: "לדעת", ex_es: "No sé la respuesta.", ex_he: "אני לא יודע את התשובה." },
        { id: "grammar_common_verbs_11", es: "Hablar", he: "לדבר", ex_es: "Me gusta hablar español.", ex_he: "אני אוהב לדבר ספרדית." }
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
        { id: "grammar_basic_conjugation_0", es: "Yo hablo", he: "אני מדבר", ex_es: "Yo hablo con mi madre.", ex_he: "אני מדבר עם אמא שלי." },
        { id: "grammar_basic_conjugation_1", es: "Tú hablas", he: "אתה מדבר", ex_es: "Tú hablas muy rápido.", ex_he: "אתה מדבר מהר מאוד." },
        { id: "grammar_basic_conjugation_2", es: "Él/Ella habla", he: "הוא/היא מדבר/ת", ex_es: "Ella habla tres idiomas.", ex_he: "היא מדברת שלוש שפות." },
        { id: "grammar_basic_conjugation_3", es: "Nosotros hablamos", he: "אנחנו מדברים", ex_es: "Nosotros hablamos todos los días.", ex_he: "אנחנו מדברים כל יום." },
        { id: "grammar_basic_conjugation_4", es: "Vosotros habláis", he: "אתם מדברים (בספרד)", ex_es: "Vosotros habláis muy bien.", ex_he: "אתם מדברים טוב מאוד." },
        { id: "grammar_basic_conjugation_5", es: "Ellos hablan", he: "הם מדברים", ex_es: "Ellos hablan por teléfono.", ex_he: "הם מדברים בטלפון." },
        { id: "grammar_basic_conjugation_6", es: "Yo como", he: "אני אוכל", ex_es: "Yo como a las dos.", ex_he: "אני אוכל בשתיים." },
        { id: "grammar_basic_conjugation_7", es: "Tú comes", he: "אתה אוכל", ex_es: "Tú comes muy poco.", ex_he: "אתה אוכל מעט מאוד." },
        { id: "grammar_basic_conjugation_8", es: "Él/Ella come", he: "הוא/היא אוכל/ת", ex_es: "Él come mucha fruta.", ex_he: "הוא אוכל הרבה פרי." },
        { id: "grammar_basic_conjugation_9", es: "Nosotros comemos", he: "אנחנו אוכלים", ex_es: "Nosotros comemos juntos.", ex_he: "אנחנו אוכלים ביחד." },
        { id: "grammar_basic_conjugation_10", es: "Vosotros coméis", he: "אתם אוכלים (בספרד)", ex_es: "Vosotros coméis tarde.", ex_he: "אתם אוכלים מאוחר." },
        { id: "grammar_basic_conjugation_11", es: "Ellos comen", he: "הם אוכלים", ex_es: "Ellos comen en el restaurante.", ex_he: "הם אוכלים במסעדה." },
        { id: "grammar_basic_conjugation_12", es: "Yo vivo", he: "אני גר", ex_es: "Yo vivo en Tel Aviv.", ex_he: "אני גר בתל אביב." },
        { id: "grammar_basic_conjugation_13", es: "Tú vives", he: "אתה גר", ex_es: "Tú vives cerca de aquí.", ex_he: "אתה גר קרוב לכאן." },
        { id: "grammar_basic_conjugation_14", es: "Él/Ella vive", he: "הוא/היא גר/ה", ex_es: "Ella vive con su familia.", ex_he: "היא גרה עם המשפחה שלה." },
        { id: "grammar_basic_conjugation_15", es: "Nosotros vivimos", he: "אנחנו גרים", ex_es: "Nosotros vivimos en el centro.", ex_he: "אנחנו גרים במרכז." },
        { id: "grammar_basic_conjugation_16", es: "Vosotros vivís", he: "אתם גרים (בספרד)", ex_es: "Vosotros vivís en las afueras.", ex_he: "אתם גרים בפרברים." },
        { id: "grammar_basic_conjugation_17", es: "Ellos viven", he: "הם גרים", ex_es: "Ellos viven en Barcelona.", ex_he: "הם גרים בברצלונה." }
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
};
