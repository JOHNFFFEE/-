import React, { useState } from 'react';
import {
  Clapperboard,
  Sparkles,
  Check,
  ArrowUpLeft,
  Flame,
  Camera,
  Plane,
  Music,
  ShieldCheck,
  Copy,
} from 'lucide-react';
import { CinemaImage } from './CinemaImage';

interface VibePreset {
  id: string;
  title: string;
  englishTag: string;
  inspiredBy: string;
  description: string;
  image: string;
  cameraLook: string;
  setVibe: string;
}

const VIBE_PRESETS: VibePreset[] = [
  {
    id: 'stadium-pop',
    title: 'אימפריית פופ ואולפן ענק',
    englishTag: 'MTV / LA ARENA POP',
    inspiredBy: 'בוייב של אנה זק · כוריאוגרפיה וסטים מתחלפים',
    description:
      'האנגר ענק, להקת רקדנים, מצלמת רחף (Technocrane), תאורת מופע חכמה ופריימים שנראים כמו הפקה של לייבל בלוס אנג׳לס.',
    image: '/src/assets/images/music_video_pop_star_1791448392479.jpg',
    cameraLook: 'RED V-RAPTOR 8K + ATLAS ANAMORPHIC',
    setVibe: 'אנרגיה שיא, דיג׳יי על הסט, 4 לוקיישנים ביום צילום אחד',
  },
  {
    id: 'neon-cinema',
    title: 'פילם לילה, ניאון ודרמה קולנועית',
    englishTag: '35MM AFTER-HOURS CINEMA',
    inspiredBy: 'בוייב של שירי מימון · עידו מלכה · כרקוקלי',
    description:
      'צילומי לילה בלוקיישנים סודיים, מכוניות אספנות, גשם מלאכותי על העדשה, עשן אטמוספרי וצבעוניות של סרט קולנוע.',
    image: '/src/assets/images/music_video_night_club_1791448416254.jpg',
    cameraLook: 'ARRI ALEXA MINI LF + KOWA ANAMORPHIC',
    setVibe: 'לוק מחוספס, יוקרתי וממגנט שלא מפסיקים לשתף בסטורי',
  },
  {
    id: 'global-jetset',
    title: 'לטוס לצלם בחו״ל (NYC / פראג / גאורגיה)',
    englishTag: 'INTERNATIONAL JET-SET SHOOT',
    inspiredBy: 'בוייב של בחורים טובים 3 בניו יורק · סטים באירופה',
    description:
      'עולים על מטוס עם הצוות המנצח ומצלמים ברחובות מנהטן, ארמונות בפראג או נופים מטורפים בגאורגיה — בתקציב חכם שמשאיר את כולם בהלם.',
    image: '/src/assets/images/director_behind_scenes_1791448428968.jpg',
    cameraLook: 'SONY VENICE 2 + LEICA VINTAGE PRIMES',
    setVibe: 'חוויה של פעם בחיים, הפקת שירות VIP מלאה משדה התעופה ועד הפריים האחרון',
  },
  {
    id: 'fashion-drop',
    title: 'קמפיין מותג אישי / שיתוף פעולה מסחרי',
    englishTag: 'HIGH-FASHION BRAND DROP',
    inspiredBy: 'בוייב של Adidas × מגה ספורט · השקות טאלנטים',
    description:
      'משיקים מותג אישי, קולקציה או קמפיין גדול? אנחנו בונים סרטון השקה ויראלי וסטילס קמפיין שגורמים למותג להיראות מיליון דולר.',
    image: '/src/assets/images/commercial_adidas_campaign_1791448404590.jpg',
    cameraLook: 'ARRI ALEXA 35 + ZEISS SUPREME PRIME',
    setVibe: 'סטודיו אופנה עילית, בימוי חד, וגזירות מוכנות לכל הרשתות',
  },
];

interface VipPerk {
  id: string;
  label: string;
  sub: string;
}

const VIP_PERKS: VipPerk[] = [
  {
    id: 'reels-pack',
    label: 'מעטפת 15 רילס וטיקטוקים ויראליים מהסט',
    sub: 'צוות ייעודי שמצלם ועורך לך תוכן רותח להשקה בזמן אמת',
  },
  {
    id: 'vip-trailer',
    label: 'קרוואן VIP, גרין-רום פרטי ואירוח שף על הסט',
    sub: 'כי כשנהנים על הסט — רואים את זה בכל שנייה על המסך',
  },
  {
    id: 'custom-script',
    label: 'פיתוח קונספט ותסריט מקורי עם מתנאל גוטליב',
    sub: 'פיצוח קריאייטיבי שיתפור לך סיפור שאף אמן אחר עוד לא עשה',
  },
  {
    id: 'nda-secret',
    label: 'סט סגור תחת סודיות מוחלטת (NDA)',
    sub: 'אפס הדלפות עד רגע הפרמיירה הרשמית שלך',
  },
];

export const CelebrityVipStudio: React.FC = () => {
  const [selectedVibe, setSelectedVibe] = useState<VibePreset>(VIBE_PRESETS[0]);
  const [selectedPerks, setSelectedPerks] = useState<string[]>([
    'reels-pack',
    'vip-trailer',
    'custom-script',
  ]);
  const [starName, setStarName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [contactDirect, setContactDirect] = useState('');
  const [shootTiming, setShootTiming] = useState('החודש הקרוב — דחוף להשקה');
  const [clapperSnap, setClapperSnap] = useState(false);
  const [passGenerated, setPassGenerated] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const togglePerk = (id: string) => {
    setSelectedPerks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClapperTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!starName.trim() || !contactDirect.trim()) return;
    setClapperSnap(true);
    setTimeout(() => {
      setClapperSnap(false);
      setPassGenerated(true);
    }, 350);
  };

  const selectedPerkLabels = VIP_PERKS.filter((p) => selectedPerks.includes(p.id)).map(
    (p) => p.label
  );

  const vipSummaryText = [
    `★ הזמנת הפקת VIP — GOATLIB ENTERTAINMENT ★`,
    `טאלנט / אמן / מותג: ${starName}`,
    projectTitle ? `שם הסינגל / הפרויקט: "${projectTitle}"` : null,
    `ווייב נבחר: ${selectedVibe.title} (${selectedVibe.englishTag})`,
    `חבילת VIP בסט: ${selectedPerkLabels.join(' + ')}`,
    `טיימינג צילום: ${shootTiming}`,
    `קשר ישיר (אמן / ניהול אישי): ${contactDirect}`,
  ]
    .filter(Boolean)
    .join('\n');

  const handleCopyVipPass = () => {
    navigator.clipboard?.writeText(vipSummaryText);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2500);
  };

  return (
    <section
      id="vip-star-lounge"
      className="py-20 md:py-28 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#1E1E24]"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#E8FF00]">
            <Flame className="w-4 h-4" />
            <span>VIP BACKSTAGE LOUNGE · טרקלין הזמנות לאמנים, כוכבים וטאלנטים</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.08] text-balance">
            רוצים קליפ או קמפיין שכל המדינה תדבר עליו?{' '}
            <span className="font-serif-italic font-normal text-[#E8FF00]">
              תבנו את הסט שלכם כאן.
            </span>
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            אנה זק, שירי מימון, עידו מלכה והאחיות כרקוקלי כבר יודעים איך מרגיש יום צילום אצל מתנאל
            גוטליב: אווירה של מסיבה, תנאי VIP, ופריימים שנראים כמו הוליווד. בחרו את הווייב של השיר או
            ההשקה הבאה שלכם ושריינו תאריך צילום.
          </p>
        </div>

        <div className="text-xs font-mono-tabular text-[#A1A1AA] border-r-2 border-[#E8FF00] pr-4 py-1">
          <div className="text-white font-bold">DIRECT GREEN-ROOM LINE</div>
          <div>דיסקרטיות מלאה מול האמן או המנהל האישי</div>
        </div>
      </div>

      {/* Main Interactive Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Right Column in RTL (7 cols): Vibe Picker + VIP Rider */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Choose Vibe */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-tabular text-[#E8FF00]">
                STEP 01 · בחרו את הווייב הוויזואלי שלכם
              </span>
              <span className="text-xs text-[#71717A]">לחצו להחלפת תצוגת סט</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VIBE_PRESETS.map((vibe) => {
                const isSelected = selectedVibe.id === vibe.id;
                return (
                  <button
                    key={vibe.id}
                    type="button"
                    onClick={() => setSelectedVibe(vibe)}
                    className={`group relative rounded-2xl overflow-hidden text-right border transition-all cursor-pointer flex flex-col justify-between p-5 min-h-[175px] ${
                      isSelected
                        ? 'border-[#E8FF00] bg-[#141419]'
                        : 'border-[#222228] bg-[#0B0B0E] hover:border-[#3F3F46]'
                    }`}
                  >
                    {/* Background Image with Dark Scrim */}
                    <div className="absolute inset-0 opacity-35 group-hover:opacity-50 transition-opacity">
                      <CinemaImage
                        src={vibe.image}
                        alt={vibe.title}
                        className="w-full h-full"
                        isHovered={isSelected}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/50" />
                    </div>

                    <div className="relative z-10 flex items-center justify-between w-full gap-2">
                      <span className="text-[11px] font-mono-tabular text-[#E8FF00]">
                        {vibe.englishTag}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isSelected
                            ? 'bg-[#E8FF00] border-[#E8FF00] text-[#050505]'
                            : 'border-white/30 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 space-y-1">
                      <h3 className="text-lg font-extrabold text-white">{vibe.title}</h3>
                      <p className="text-xs text-[#D4D4D8]">{vibe.inspiredBy}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Vibe Details Strip */}
            <div className="p-5 rounded-2xl bg-[#0D0D11] border border-[#222228] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono-tabular text-[#E8FF00]">
                  {selectedVibe.cameraLook}
                </div>
                <p className="text-sm text-[#F4F4F0] leading-relaxed">{selectedVibe.description}</p>
              </div>
            </div>
          </div>

          {/* Step 2: Celebrity Rider & Set Perks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-tabular text-[#E8FF00]">
                STEP 02 · סמנו מה חשוב לכם על הסט (VIP RIDER)
              </span>
              <span className="text-xs text-[#71717A]">מותאם אישית לטאלנט</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VIP_PERKS.map((perk) => {
                const active = selectedPerks.includes(perk.id);
                return (
                  <button
                    key={perk.id}
                    type="button"
                    onClick={() => togglePerk(perk.id)}
                    className={`p-4 rounded-xl text-right border transition-all cursor-pointer flex items-start gap-3 ${
                      active
                        ? 'bg-[#141419] border-[#E8FF00] text-white'
                        : 'bg-[#0A0A0D] border-[#1F1F24] text-[#A1A1AA] hover:border-[#3F3F46]'
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md shrink-0 flex items-center justify-center border ${
                        active
                          ? 'bg-[#E8FF00] border-[#E8FF00] text-[#050505]'
                          : 'border-[#3F3F46] text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{perk.label}</div>
                      <div className="text-[11px] text-[#71717A] mt-1 leading-snug">{perk.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left Column in RTL (5 cols): Interactive Live Digital Clapperboard & VIP Booking Pass */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#0B0B0E] border border-[#27272D] overflow-hidden shadow-2xl">
            {/* Digital Clapperboard Top Slate Bar */}
            <div
              className={`bg-[#141418] border-b border-[#27272D] transition-transform duration-300 origin-right ${
                clapperSnap ? '-rotate-3 bg-[#E8FF00]/20' : 'rotate-0'
              }`}
            >
              {/* Diagonal Cinema Clapper Stripes */}
              <div className="h-4 w-full flex overflow-hidden">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 h-full -skew-x-25 ${
                      idx % 2 === 0 ? 'bg-[#E8FF00]' : 'bg-[#050505]'
                    }`}
                  />
                ))}
              </div>

              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#E8FF00]" />
                  <span className="font-mono-tabular text-xs font-bold text-white tracking-wider">
                    GOATLIB VIP CALL-SHEET
                  </span>
                </div>
                <span className="font-mono-tabular text-xs text-[#E8FF00]">
                  SCENE 01 · TAKE 01
                </span>
              </div>
            </div>

            {/* Live Clapperboard Readout + Form */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Live Preview Slate Box */}
              <div className="p-4 rounded-xl bg-[#070709] border border-[#1E1E24] space-y-3 font-mono-tabular">
                <div className="flex items-center justify-between text-[11px] text-[#71717A] border-b border-[#18181D] pb-2">
                  <span>DIRECTOR: MATANEL GOTLIB</span>
                  <span className="text-[#E8FF00]">STATUS: PRIORITY VIP</span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-1">
                  <div>
                    <span className="text-[10px] text-[#71717A] block">STAR / ARTIST</span>
                    <span className="text-sm font-bold text-white truncate block">
                      {starName || 'השם שלך על הקלאפר...'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#71717A] block">PROJECT / SINGLE</span>
                    <span className="text-sm font-bold text-[#E8FF00] truncate block">
                      {projectTitle || selectedVibe.title}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-[#A1A1AA] pt-2 border-t border-[#18181D] flex items-center justify-between">
                  <span>CAM: {selectedVibe.cameraLook.split('+')[0]}</span>
                  <span>RIDER: {selectedPerks.length} VIP EXTRAS</span>
                </div>
              </div>

              {passGenerated ? (
                <div className="space-y-5 py-2">
                  <div className="p-4 rounded-xl bg-[#12160A] border border-[#E8FF00]/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#E8FF00]">
                      <Sparkles className="w-4 h-4" />
                      <span>הקלאפר נסגר! כרטיס ה-VIP של {starName} מוכן</span>
                    </div>
                    <p className="text-xs text-[#D4D4D8] leading-relaxed">
                      מתנאל גוטליב מקבל פניות VIP של אמנים וטאלנטים בעדיפות עליונה. שלחו עכשיו את
                      כרטיס הצילום בוואטסאפ או העתיקו אותו לשיחה ישירה:
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(vipSummaryText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-xl bg-[#E8FF00] text-[#050505] font-extrabold text-xs hover:bg-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>שלח כרטיס VIP בוואטסאפ לתיאום מיידי</span>
                      <ArrowUpLeft className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyVipPass}
                      className="w-full py-3 px-4 rounded-xl bg-[#16161B] text-white border border-[#27272E] hover:border-[#E8FF00] text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#E8FF00]" />
                      <span>
                        {copiedPass ? 'כרטיס ה-VIP הועתק!' : 'העתק מפרט VIP לשליחה באינסטגרם / מייל'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPassGenerated(false)}
                      className="text-xs text-[#71717A] hover:text-white pt-1 cursor-pointer"
                    >
                      עריכת פרטי הקלאפר
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleClapperTrigger} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5">
                      שם האמן / הטאלנט / המנהל האישי *
                    </label>
                    <input
                      type="text"
                      required
                      value={starName}
                      onChange={(e) => setStarName(e.target.value)}
                      placeholder="לדוגמה: נועה / עומר / ניהול אישי"
                      className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5">
                      שם הסינגל / הקמפיין / הפרויקט (אופציונלי)
                    </label>
                    <input
                      type="text"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      placeholder="סינגל קיץ / קמפיין השקה / קליפ חדש"
                      className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5">
                      מתי עולים לצלם?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'החודש הקרוב — דחוף להשקה',
                        'חודש-חודשיים הקרובים',
                        'בדיקת זמינות ופיצוח קונספט',
                        'הפקת חו״ל קרובה',
                      ].map((timing) => (
                        <button
                          key={timing}
                          type="button"
                          onClick={() => setShootTiming(timing)}
                          className={`px-3 py-2 rounded-lg text-[11px] font-medium text-right border transition-colors cursor-pointer truncate ${
                            shootTiming === timing
                              ? 'bg-[#18181F] border-[#E8FF00] text-[#E8FF00]'
                              : 'bg-[#101014] border-[#222228] text-[#A1A1AA] hover:text-white'
                          }`}
                        >
                          {timing}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5">
                      נייד ישיר לוואטסאפ סודי מול מתנאל *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactDirect}
                      onChange={(e) => setContactDirect(e.target.value)}
                      placeholder="050-0000000"
                      className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#E8FF00] text-[#050505] font-black text-sm hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-lg"
                  >
                    <Clapperboard className="w-4 h-4" />
                    <span>סגור קלאפר ושריין הפקת VIP</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#71717A]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E8FF00]" />
                    <span>הפנייה מגיעה ישירות למתנאל גוטליב ללא מתווכים</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
