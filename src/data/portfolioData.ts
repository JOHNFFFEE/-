export type ProjectCategory = 'all' | 'cinema' | 'music_videos' | 'commercials';

export interface SceneBreakdown {
  timecode: string;
  label: string;
  cameraNote: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  englishTitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  clientOrArtist: string;
  role: string;
  year: string;
  location: string;
  cameraSpec: string;
  aspectRatioLabel: string;
  gridSpan: 'wide' | 'tall' | 'standard' | 'hero-wide';
  image: string;
  secondaryImage: string;
  metrics: string;
  synopsis: string;
  directorNote: string;
  credits: {
    producer: string;
    director: string;
    dop: string;
    productionHouse: string;
  };
  scenes: SceneBreakdown[];
}

export interface PartnerLogo {
  id: string;
  name: string;
  englishSub: string;
  type: 'artist' | 'cinema' | 'brand';
  projectCount: string;
  highlightWork: string;
  filterCategory: ProjectCategory;
}

export const HERO_IMAGE = '/src/assets/images/director_behind_scenes_1791448428968.jpg';

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'matchmaking-3',
    title: 'בחורים טובים 3',
    englishTitle: 'MATCHMAKING 3 — FEATURE FILM',
    category: 'cinema',
    categoryLabel: 'קולנוע ופיצ׳רים',
    clientOrArtist: 'קולנוע ישראלי · NYC & IL',
    role: 'הפקה וניהול סט בינלאומי',
    year: '2026',
    location: 'ניו יורק · תל אביב · ירושלים',
    cameraSpec: 'ARRI ALEXA MINI LF · COOKE ANAMORPHIC',
    aspectRatioLabel: '2.39:1 SCOPE',
    gridSpan: 'wide',
    image: '/src/assets/images/cinema_feature_set_1791448378953.jpg',
    secondaryImage: '/src/assets/images/director_behind_scenes_1791448428968.jpg',
    metrics: 'שובר קופות ארצי · צילומי חוץ בניו יורק (MM US)',
    synopsis:
      'הפרק השלישי והשאפתני ביותר בסדרת שוברי הקופות של הקולנוע הישראלי. הפקה מורכבת שחצתה יבשות עם ימי צילום אינטנסיביים בניו יורק ובישראל, ניהול עשרות שחקנים, סטים תקופתיים ועיצוב תאורה קולנועי עשיר.',
    directorNote:
      'כשעובדים על מותג קולנועי בסדר גודל כזה, כל פריים חייב להרגיש כמו מיליון דולר. בנינו אופרציה מתוקתקת מחוף לחוף בלי להתפשר על שום פרט בארט ובמצלמה.',
    credits: {
      producer: 'מתנאל גוטליב · Goatlib Entertainment',
      director: 'צוות בימוי ראשי',
      dop: 'צילום סינמטי 35mm / LF',
      productionHouse: 'Goatlib Entertainment × הפקות קולנוע',
    },
    scenes: [
      {
        timecode: '00:14:22:08',
        label: 'סצנת הסעודה המרכזית — ניו יורק',
        cameraNote: '35mm Anamorphic · T2.0 · תאורה פרקטית חמה',
        image: '/src/assets/images/cinema_feature_set_1791448378953.jpg',
      },
      {
        timecode: '00:48:10:19',
        label: 'סט צילומי חוץ — מנהטן בשקיעה',
        cameraNote: 'Steadicam Long Take · Golden Hour',
        image: '/src/assets/images/director_behind_scenes_1791448428968.jpg',
      },
    ],
  },
  {
    id: 'anna-zak-mega-clip',
    title: 'אנה זק — הפקת קליפ ענק',
    englishTitle: 'ANNA ZAK — MUSIC VIDEO PRODUCTION',
    category: 'music_videos',
    categoryLabel: 'קליפים ואמנים',
    clientOrArtist: 'אנה זק (Anna Zak)',
    role: 'מפיק ראשי, קריאייטיב ובימוי',
    year: '2026',
    location: 'האנגר 11 · אולפני תל אביב',
    cameraSpec: 'RED V-RAPTOR 8K VV · ATLAS ORION',
    aspectRatioLabel: '16:9 / 9:16 DUAL',
    gridSpan: 'standard',
    image: '/src/assets/images/music_video_pop_star_1791448392479.jpg',
    secondaryImage: '/src/assets/images/music_video_night_club_1791448416254.jpg',
    metrics: '8.4M+ צפיות אורגניות · #1 בחמים של יוטיוב ישראל',
    synopsis:
      'הפקת פופ בקנה מידה בינלאומי לאנה זק. בניית 4 סטים ייחודיים באולפן ענק, גיוס להקת רקדנים בת 24 משתתפים, תאורת במה מתוכנתת מראש וצילום רציף במצלמות קולנוע על גבי טכנו-קריין.',
    directorNote:
      'בקליפים של אנה זק הסטנדרט הוא חו״ל לכל דבר. המטרה שלנו הייתה לייצר קצב היפנוטי שלא נותן לצופה למצמץ מהשנייה הראשונה ועד הפריים האחרון.',
    credits: {
      producer: 'מתנאל גוטליב',
      director: 'מתנאל גוטליב',
      dop: 'יחידת צילום ראשית 8K',
      productionHouse: 'Goatlib Entertainment',
    },
    scenes: [
      {
        timecode: '00:00:42:11',
        label: 'כוריאוגרפיית פתיחה — סטודיו תאורה חכמה',
        cameraNote: 'Technocrane 30ft · Anamorphic Flare',
        image: '/src/assets/images/music_video_pop_star_1791448392479.jpg',
      },
      {
        timecode: '00:02:15:04',
        label: 'סט לילה אורבני — אפקטים מיוחדים',
        cameraNote: 'High-Speed 120fps · Neon Rim Light',
        image: '/src/assets/images/music_video_night_club_1791448416254.jpg',
      },
    ],
  },
  {
    id: 'megasport-adidas',
    title: 'מגה ספורט × ADIDAS EXCLUSIVE',
    englishTitle: 'MEGA SPORT × ADIDAS CAMPAIGN',
    category: 'commercials',
    categoryLabel: 'פרסומות וקמפיינים',
    clientOrArtist: 'מגה ספורט · Adidas Israel',
    role: 'הפקה ראשית ובימוי פרסומת',
    year: '2026',
    location: 'אצטדיון ולוקיישנים אורבניים',
    cameraSpec: 'ARRI ALEXA 35 · ZEISS SUPREME PRIME',
    aspectRatioLabel: '1.85:1 COMMERCIAL',
    gridSpan: 'standard',
    image: '/src/assets/images/commercial_adidas_campaign_1791448404590.jpg',
    secondaryImage: '/src/assets/images/music_video_pop_star_1791448392479.jpg',
    metrics: 'קמפיין פריים-טיים ארצי · +210% מעורבות מותג ברבעון השקה',
    synopsis:
      'קמפיין השקה בלעדי לקולקציית Adidas ברשת מגה ספורט. שילוב של דוגמניות על, ספורטאים ואסתטיקה מחוספסת של אצטדיון לילה בגשם מלאכותי ותאורת פלאד-לייט עוצמתית.',
    directorNote:
      'מותגי ספורט גדולים צריכים אנרגיה גולמית ואותנטית. ויתרנו על פילטרים מלוקקים לטובת זיעה אמיתית, גשם על העדשה וקצב עריכה חד כמו סכין.',
    credits: {
      producer: 'מתנאל גוטליב',
      director: 'מתנאל גוטליב',
      dop: 'יחידת פרסומות A-Cam',
      productionHouse: 'Goatlib Entertainment',
    },
    scenes: [
      {
        timecode: '00:00:08:20',
        label: 'שוטים אייקוניים תחת זרקורי האצטדיון',
        cameraNote: '85mm T1.5 · גשם ואפקטים מעשיים בסט',
        image: '/src/assets/images/commercial_adidas_campaign_1791448404590.jpg',
      },
    ],
  },
  {
    id: 'prime-time-mom',
    title: 'אמא פריים טיים (Prime Time Mom)',
    englishTitle: 'PRIME TIME MOM — ORIGINAL FILM',
    category: 'cinema',
    categoryLabel: 'קולנוע ופיצ׳רים',
    clientOrArtist: 'סרט מקורי · סיקור מיוחד ב״הצינור״',
    role: 'מפיק, תסריטאי ויוצר הסרט',
    year: '2025–2026',
    location: 'תל אביב · מרכז',
    cameraSpec: 'SONY VENICE 2 · LEICA R VINTAGE',
    aspectRatioLabel: '2.00:1 UNIVISIUM',
    gridSpan: 'standard',
    image: '/src/assets/images/director_behind_scenes_1791448428968.jpg',
    secondaryImage: '/src/assets/images/cinema_feature_set_1791448378953.jpg',
    metrics: 'כתבת פרופיל מרכזית ב״הצינור״ · הקרנות בכורה מלאות עד אפס מקום',
    synopsis:
      'יצירה קולנועית מקורית ומפתיעה מאת מתנאל גוטליב שעוררה הדים רחבים בתקשורת הישראלית ובפריים-טיים. שילוב נדיר של כתיבה תסריטאית חדה, הומור שחור ודרמה אנושית שמצטלמת ללא פשרות.',
    directorNote:
      'זה פרויקט שמזקק בדיוק את ה-DNA שלי: לקחת סיפור ישראלי עוצמתי, לכתוב אותו מהבטן ולהפיק אותו בסטנדרט קולנועי שגורם לכל התעשייה לדבר עליו.',
    credits: {
      producer: 'מתנאל גוטליב',
      director: 'מתנאל גוטליב',
      dop: 'צילום קולנוע עצמאי/מסחרי',
      productionHouse: 'Goatlib Entertainment',
    },
    scenes: [
      {
        timecode: '00:21:11:02',
        label: 'מאחורי הקלעים של ההפקה וההקרנה הרשמית',
        cameraNote: 'Leica R 50mm · Natural Available Light',
        image: '/src/assets/images/director_behind_scenes_1791448428968.jpg',
      },
    ],
  },
  {
    id: 'shiri-maimon-karkukli',
    title: 'שירי מימון & האחיות כרקוקלי',
    englishTitle: 'SHIRI MAIMON & KARKUKLI SISTERS',
    category: 'music_videos',
    categoryLabel: 'קליפים ואמנים',
    clientOrArtist: 'שירי מימון · האחיות כרקוקלי · עידו מלכה',
    role: 'בית הפקה ראשי ובימוי וידאו',
    year: '2025–2026',
    location: 'תל אביב · לוקיישנים תעשייתיים',
    cameraSpec: 'ARRI ALEXA MINI · KOWA ANAMORPHIC',
    aspectRatioLabel: '2.39:1 ANAMORPHIC',
    gridSpan: 'wide',
    image: '/src/assets/images/music_video_night_club_1791448416254.jpg',
    secondaryImage: '/src/assets/images/music_video_pop_star_1791448392479.jpg',
    metrics: 'עשרות מיליוני השמעות וצפיות מצטברות · שיתופי פעולה חוזרים',
    synopsis:
      'סדרת הפקות וידאו-קליפים עתירי תקציב וסטייל עבור השמות הגדולים ביותר במוזיקה הישראלית — משירי מימון ועד האחיות כרקוקלי ועידו מלכה. כל פרויקט נתפר מאפס עם שפה ויזואלית ייחודית, ארט מוקפד וצילום שמציב רף חדש.',
    directorNote:
      'אמנים גדולים לא מחפשים עוד קליפ גנרי — הם מחפשים אייקון ויזואלי שילווה את השיר שנים קדימה. אצלנו בסט נהנים מכל רגע, והאנרגיה הזו עוברת ישירות למסך.',
    credits: {
      producer: 'מתנאל גוטליב',
      director: 'מתנאל גוטליב וצוות קריאייטיב',
      dop: 'צילום אנמורפי 35 מ״מ',
      productionHouse: 'Goatlib Entertainment',
    },
    scenes: [
      {
        timecode: '00:01:33:16',
        label: 'צילומי לילה — תאורת ניאון ועשן אטמוספרי',
        cameraNote: 'Kowa Anamorphic 40mm · T2.3',
        image: '/src/assets/images/music_video_night_club_1791448416254.jpg',
      },
      {
        timecode: '00:02:50:00',
        label: 'סט במה מרכזי — כוריאוגרפיה ותנועת מצלמה',
        cameraNote: 'Steadicam Dynamic Tracking',
        image: '/src/assets/images/music_video_pop_star_1791448392479.jpg',
      },
    ],
  },
  {
    id: 'avi-nesher-new-film',
    title: 'הסרט החדש של אבי נשר & הפקות חו״ל',
    englishTitle: 'AVI NESHER FEATURE & INTERNATIONAL SETS (CZ / GE)',
    category: 'cinema',
    categoryLabel: 'קולנוע ופיצ׳רים',
    clientOrArtist: 'קולנוע ישראלי ובינלאומי · פראג (CZ) · גאורגיה (GE)',
    role: 'הפקה בפועל וניהול מערך צילומים',
    year: '2026',
    location: 'ישראל · פראג · טביליסי',
    cameraSpec: 'ARRI ALEXA LF · MASTER PRIMES',
    aspectRatioLabel: '2.39:1 CINEMA',
    gridSpan: 'hero-wide',
    image: '/src/assets/images/cinema_feature_set_1791448378953.jpg',
    secondaryImage: '/src/assets/images/commercial_adidas_campaign_1791448404590.jpg',
    metrics: 'הפקות דגל בקולנוע הישראלי + סטים בינלאומיים במזרח אירופה וארה״ב',
    synopsis:
      'מעורבות בהפקות הקולנוע היוקרתיות ביותר בישראל, כולל פרויקט הקולנוע החדש של המאסטר אבי נשר, לצד הפקות שירות וצילומים מורכבים בצ׳כיה (CZ), גאורגיה (GE) וארצות הברית (US).',
    directorNote:
      'בין אם זה סט קולנוע היסטורי עם מאות ניצבים או קמפיין מסחרי בפראג — היכולת להרים הפקה מתוקתקת, יצירתית ורווחית בכל נקודה בגלובוס היא הכוח שלנו.',
    credits: {
      producer: 'מתנאל גוטליב · צוות הפקה בכיר',
      director: 'אבי נשר / במאים מובילים',
      dop: 'צילום קולנוע רחב היקף',
      productionHouse: 'Goatlib Entertainment',
    },
    scenes: [
      {
        timecode: '01:04:18:22',
        label: 'סט דרמה תקופתית — תאורת פילם קלאסית',
        cameraNote: 'Master Prime 35mm · Chiaroscuro Grade',
        image: '/src/assets/images/cinema_feature_set_1791448378953.jpg',
      },
    ],
  },
];

export const CLIENT_PARTNERS: PartnerLogo[] = [
  {
    id: 'anna-zak',
    name: 'ANNA ZAK',
    englishSub: 'אנה זק · הפקות קליפים וקמפיינים',
    type: 'artist',
    projectCount: '6+ הפקות ענק',
    highlightWork: 'וידאו קליפים רשמיים במיליוני צפיות וכוריאוגרפיית אולפן',
    filterCategory: 'music_videos',
  },
  {
    id: 'shiri-maimon',
    name: 'SHIRI MAIMON',
    englishSub: 'שירי מימון · וידאו קליפים ומופעים',
    type: 'artist',
    projectCount: '4 הפקות',
    highlightWork: 'קליפים קולנועיים בעיצוב תאורה וארט ייחודי',
    filterCategory: 'music_videos',
  },
  {
    id: 'ido-malka',
    name: 'IDO MALKA',
    englishSub: 'עידו מלכה · קליפים וסינגלים',
    type: 'artist',
    projectCount: '5+ הפקות',
    highlightWork: 'בימוי והפקת וידאו-קליפים אורבניים ב-35mm',
    filterCategory: 'music_videos',
  },
  {
    id: 'karkukli',
    name: 'KARKUKLI',
    englishSub: 'האחיות כרקוקלי · פופ וויז׳ואל',
    type: 'artist',
    projectCount: '4 הפקות',
    highlightWork: 'הפקות פופ צבעוניות בלוקיישנים ליליים',
    filterCategory: 'music_videos',
  },
  {
    id: 'matchmaking-3',
    name: 'בחורים טובים 3',
    englishSub: 'MATCHMAKING 3 · NYC & ISRAEL',
    type: 'cinema',
    projectCount: 'פיצ׳ר קולנועי',
    highlightWork: 'שובר הקופות הגדול של הקולנוע הישראלי — צילומי ארה״ב וישראל',
    filterCategory: 'cinema',
  },
  {
    id: 'avi-nesher',
    name: 'אבי נשר',
    englishSub: 'AVI NESHER · NEW FEATURE FILM',
    type: 'cinema',
    projectCount: 'פיצ׳ר קולנועי',
    highlightWork: 'הסרט החדש של אבי נשר — הפקת קולנוע עילית',
    filterCategory: 'cinema',
  },
  {
    id: 'adidas-megasport',
    name: 'ADIDAS × מגה ספורט',
    englishSub: 'EXCLUSIVE CAMPAIGN',
    type: 'brand',
    projectCount: 'קמפיין ארצי',
    highlightWork: 'קמפיין טלוויזיה ודיגיטל בלעדי לקולקציית Adidas',
    filterCategory: 'commercials',
  },
  {
    id: 'prime-time-mom',
    name: 'PRIME TIME MOM',
    englishSub: 'אמא פריים טיים · סרט מקורי',
    type: 'cinema',
    projectCount: 'מפיק ויוצר',
    highlightWork: 'סרטו המפתיע של מתנאל גוטליב שסוקר בהרחבה ב״הצינור״',
    filterCategory: 'cinema',
  },
  {
    id: 'reshet-hatzinor',
    name: 'הצינור · רשת 13',
    englishSub: 'PRIME TIME FEATURE & BROADCAST',
    type: 'brand',
    projectCount: 'פריים טיים',
    highlightWork: 'סיקור ושיתופי פעולה טלוויזיוניים בפריים טיים',
    filterCategory: 'cinema',
  },
  {
    id: 'bsr-group',
    name: 'BSR GROUP',
    englishSub: 'קבוצת בסר · סרטי תדמית ופרסום',
    type: 'brand',
    projectCount: 'קמפיינים',
    highlightWork: 'הפקות פרסום ונדל״ן יוקרתיות בקנה מידה ארצי',
    filterCategory: 'commercials',
  },
  {
    id: 'prague-cz',
    name: 'PRAGUE SETS (CZ)',
    englishSub: 'הפקות חו״ל · צ׳כיה ואירופה',
    type: 'cinema',
    projectCount: 'הפקות חו״ל',
    highlightWork: 'ניהול והפקת ימי צילום בינלאומיים בפראג',
    filterCategory: 'commercials',
  },
  {
    id: 'georgia-sf',
    name: 'TBILISI (GE)',
    englishSub: 'SF GEORGIA · INTERNATIONAL',
    type: 'cinema',
    projectCount: 'סטים בינלאומיים',
    highlightWork: 'הפקות קולנוע ופרסומות בלוקיישנים בגאורגיה',
    filterCategory: 'cinema',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  outcomeMetric: string;
}

export const INDUSTRY_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'לפני שעבדנו עם מתנאל, ימי צילום של קליפים גדולים היו נגררים לשעות נוספות ותקציבים חורגים. מתנאל הריץ סט של 45 אנשי צוות בלו״ז צבאי אבל עם אווירה של מסיבה — והוציא פריימים שנראים כמו הפקה של לייבל אמריקאי.',
    name: 'ניהול אמנים ראשי',
    role: 'ייצוג אמני פופ ומוזיקה',
    organization: 'נבחרת האמנים המובילים בישראל',
    outcomeMetric: 'עמידה ב-100% מיעדי התקציב · +4.2M צפיות בשבוע ההשקה',
  },
  {
    id: 't2',
    quote:
      'חיפשנו בית הפקה שלא רק מבצע בריף של משרד פרסום, אלא יודע להביא שפה קולנועית מהסרטים הגדולים לתוך פרסומת של 30 שניות. התוצאה בקמפיין Adidas × מגה ספורט העלתה את כל הרף הוויזואלי של המותג.',
    name: 'סמנכ״ל קריאייטיב ושיווק',
    role: 'ניהול קמפיינים ארציים',
    organization: 'קמעונאות ספורט ואופנה',
    outcomeMetric: 'קיצור זמני הפקה ב-30% · מעורבות שיא ברשתות ובטלוויזיה',
  },
  {
    id: 't3',
    quote:
      'כשמצלמים קולנוע בין ניו יורק, פראג וישראל, צריך מפיק שיודע לפתור משברים לפני שהם קורים. מתנאל גוטליב משלב חוש תסריטאי חד עם שליטה מוחלטת בשטח — שילוב נדיר בתעשייה המקומית.',
    name: 'צוות הפקה ובימוי בכיר',
    role: 'הפקות קולנוע ופיצ׳רים',
    organization: 'קולנוע ישראלי ובינלאומי (NYC / IL)',
    outcomeMetric: 'ניהול עשרות ימי צילום מורכבים ב-4 מדינות באפס תקלות',
  },
];
