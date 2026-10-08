import React, { useState, useEffect } from 'react';
import { ArrowUpLeft, Check, Copy, Send, Film } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface BriefBuilderSectionProps {
  selectedReferenceProject: ProjectItem | null;
  onClearReference: () => void;
}

type ProductionTrack = 'commercial' | 'music_video' | 'cinema_feature' | 'international_set';
type BudgetTier = 'boutique' | 'flagship' | 'blockbuster';

interface TrackConfig {
  id: ProductionTrack;
  label: string;
  sub: string;
  crewEstimate: string;
  cameraPackage: string;
  deliverables: string;
}

const TRACKS: TrackConfig[] = [
  {
    id: 'commercial',
    label: 'פרסומת טלוויזיה / קמפיין מותג',
    sub: 'כמו Adidas × מגה ספורט · BSR',
    crewEstimate: '25–45 אנשי צוות · ארט, תאורה וסטיילינג',
    cameraPackage: 'ARRI Alexa 35 / Mini LF · Zeiss Supreme',
    deliverables: 'TVC 30s + גזירות דיגיטל 9:16 + סטילס קמפיין',
  },
  {
    id: 'music_video',
    label: 'וידאו קליפ לאמן מוביל',
    sub: 'כמו אנה זק · שירי מימון · עידו מלכה · כרקוקלי',
    crewEstimate: '20–40 אנשי צוות · כוריאוגרפיה ובניית סטים',
    cameraPackage: 'RED V-Raptor 8K / Anamorphic Lenses',
    deliverables: 'Master 4K קולנועי + רילס טיזרים + מאחורי הקלעים',
  },
  {
    id: 'cinema_feature',
    label: 'פיצ׳ר קולנועי / סדרה / דרמה',
    sub: 'כמו בחורים טובים 3 · אבי נשר · אמא פריים טיים',
    crewEstimate: 'ניהול הפקה מלא · ליהוק, לוקיישנים ותסריט',
    cameraPackage: 'מערך קולנוע מלא · 2.39:1 Scope',
    deliverables: 'הפקה בפועל משלב פיתוח ותסריט ועד מסירה לקולנוע/גוף שידור',
  },
  {
    id: 'international_set',
    label: 'הפקת חו״ל (NYC / פראג / גאורגיה)',
    sub: 'MM (US) · CZ · SF (GE)',
    crewEstimate: 'צוות היברידי ישראל + הפקת שירות מקומית בחו״ל',
    cameraPackage: 'חבילת קולנוע בינלאומית מלאה באתר הצילום',
    deliverables: 'ניהול לוגיסטי, לוקיישנים, אישורי צילום והפקה מלאה בחו״ל',
  },
];

const BUDGET_TIERS: { id: BudgetTier; label: string; desc: string }[] = [
  {
    id: 'boutique',
    label: 'הפקה ממוקדת ומהירה',
    desc: 'יום צילום מהודק · לוקיישן נבחר · קריאייטיב חד',
  },
  {
    id: 'flagship',
    label: 'הפקת דגל (Flagship)',
    desc: '1–3 ימי צילום · בניית ארט/סטודיו · צוות קולנוע מלא',
  },
  {
    id: 'blockbuster',
    label: 'הפקת ענק / קמפיין ארצי או חו״ל',
    desc: 'מרובה לוקיישנים, ניצבים, אפקטים מיוחדים או צילומי חו״ל',
  },
];

export const BriefBuilderSection: React.FC<BriefBuilderSectionProps> = ({
  selectedReferenceProject,
  onClearReference,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<ProductionTrack>('commercial');
  const [selectedTier, setSelectedTier] = useState<BudgetTier>('flagship');
  const [clientName, setClientName] = useState('');
  const [companyOrArtist, setCompanyOrArtist] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (!selectedReferenceProject) return;
    if (selectedReferenceProject.category === 'cinema') {
      setSelectedTrack('cinema_feature');
    } else if (selectedReferenceProject.category === 'music_videos') {
      setSelectedTrack('music_video');
    } else {
      setSelectedTrack('commercial');
    }
  }, [selectedReferenceProject]);

  const activeTrackObj = TRACKS.find((t) => t.id === selectedTrack) || TRACKS[0];
  const activeTierObj = BUDGET_TIERS.find((b) => b.id === selectedTier) || BUDGET_TIERS[1];

  const generatedBriefSummary = [
    `סוג הפקה: ${activeTrackObj.label}`,
    `היקף: ${activeTierObj.label}`,
    selectedReferenceProject ? `רפרנס נבחר: ${selectedReferenceProject.title}` : null,
    clientName ? `שם פונה: ${clientName}` : null,
    companyOrArtist ? `מותג / אמן / גוף משדר: ${companyOrArtist}` : null,
    phoneOrEmail ? `פרטי קשר: ${phoneOrEmail}` : null,
    projectNotes ? `דגשים: ${projectNotes}` : null,
  ]
    .filter(Boolean)
    .join(' | ');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phoneOrEmail.trim()) return;
    setIsSubmitted(true);
  };

  const handleCopyBrief = () => {
    navigator.clipboard?.writeText(generatedBriefSummary);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <section
      id="contact-brief"
      className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#1F1F23]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Right Column (in RTL): Editorial Pitch & Direct Executive Access */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <p className="text-xs font-mono-tabular text-[#E8FF00] tracking-wider mb-3">
              04. EXECUTIVE PRODUCTION DESK · תיאום הפקה
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">
              לא עובדים עם אינסטגרם?{' '}
              <span className="font-serif-italic font-normal text-[#E8FF00]">
                בואו נדבר תכל׳ס.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
              אנחנו עושים הפקות שנהנים מהן — ומצטלמות ברמה שמשאירה אבק לכל השאר. הגדירו את כיוון
              הפרויקט שלכם בלוח הבריף המהיר, ומתנאל גוטליב יחזור אליכם ישירות עם מתווה הפקה מדויק.
            </p>
          </div>

          {/* Live Technical Specification Preview Box */}
          <div className="p-6 rounded-2xl bg-[#0D0D10] border border-[#222226] space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E1E22] pb-3">
              <span className="text-xs font-mono-tabular text-[#E8FF00]">
                LIVE SPEC PREVIEW · מפרט מומלץ
              </span>
              <Film className="w-4 h-4 text-[#A1A1AA]" />
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-[#71717A] block">מסלול נבחר</span>
                <span className="font-bold text-white">{activeTrackObj.label}</span>
              </div>
              <div>
                <span className="text-xs text-[#71717A] block">מערך צוות וסט</span>
                <span className="text-[#D4D4D8]">{activeTrackObj.crewEstimate}</span>
              </div>
              <div>
                <span className="text-xs text-[#71717A] block">סטנדרט מצלמה ועדשות</span>
                <span className="font-mono-tabular text-xs text-[#E8FF00]">
                  {activeTrackObj.cameraPackage}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#71717A] block">תוצרים צפויים</span>
                <span className="text-[#D4D4D8]">{activeTrackObj.deliverables}</span>
              </div>
            </div>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-2 text-sm text-[#A1A1AA] pt-2">
            <p className="text-xs text-[#71717A]">קו ישיר להפקות סרטים, קליפים ופרסומות:</p>
            <p className="font-mono-tabular text-white text-base">
              goatlib.entertainment@gmail.com
            </p>
            <p className="text-xs text-[#A1A1AA]">
              תל אביב · ניו יורק (MM US) · פראג (CZ) · טביליסי (GE)
            </p>
          </div>
        </div>

        {/* Left Column (in RTL): Interactive Brief Configurator Form */}
        <div className="lg:col-span-7 bg-[#0B0B0E] border border-[#222226] rounded-2xl p-6 md:p-10">
          {selectedReferenceProject && (
            <div className="mb-6 p-4 rounded-xl bg-[#141418] border border-[#E8FF00]/40 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#E8FF00] font-mono-tabular block">
                  רפרנס וידאו שנבחר מהתיק:
                </span>
                <strong className="text-sm text-white">
                  {selectedReferenceProject.title} ({selectedReferenceProject.clientOrArtist})
                </strong>
              </div>
              <button
                type="button"
                onClick={onClearReference}
                className="text-xs text-[#A1A1AA] hover:text-white underline cursor-pointer whitespace-nowrap"
              >
                הסר רפרנס
              </button>
            </div>
          )}

          {isSubmitted ? (
            <div className="py-8 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#E8FF00] text-[#050505] flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  הבריף נקלט בשולחן ההפקה של מתנאל גוטליב
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  תודה, {clientName}. פנייתך עבור <strong className="text-white">{activeTrackObj.label}</strong> נשמרה במערכת. ניתן גם להעתיק את תקציר הבריף או לפתוח פנייה ישירה במייל בלחיצה אחת:
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121216] border border-[#27272A] text-xs font-mono-tabular text-[#D4D4D8] leading-relaxed">
                {generatedBriefSummary}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="px-4 py-2.5 rounded-xl bg-[#E8FF00] text-[#050505] font-bold text-xs flex items-center gap-2 hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedBrief ? 'הבריף הועתק ללוח!' : 'העתק תקציר בריף'}</span>
                </button>

                <a
                  href={`mailto:goatlib.entertainment@gmail.com?subject=${encodeURIComponent(
                    `פנייה להפקה חדשה — ${companyOrArtist || clientName}`
                  )}&body=${encodeURIComponent(generatedBriefSummary)}`}
                  className="px-4 py-2.5 rounded-xl bg-[#18181C] text-white border border-[#27272A] hover:border-[#E8FF00] text-xs font-medium flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span>שלח ישירות ב-Email</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 text-xs text-[#A1A1AA] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  ערוך פרטי פנייה
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Track Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-mono-tabular text-[#A1A1AA]">
                  01. בחר קטגוריית הפקה
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TRACKS.map((track) => {
                    const active = selectedTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setSelectedTrack(track.id)}
                        className={`p-4 rounded-xl text-right border transition-all cursor-pointer ${
                          active
                            ? 'bg-[#16161A] border-[#E8FF00] text-white'
                            : 'bg-[#0E0E12] border-[#222226] text-[#A1A1AA] hover:border-[#3F3F46]'
                        }`}
                      >
                        <div className="font-bold text-sm text-white mb-1">{track.label}</div>
                        <div className="text-xs text-[#71717A]">{track.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Production Scale */}
              <div className="space-y-3">
                <label className="block text-xs font-mono-tabular text-[#A1A1AA]">
                  02. סדר גודל והיקף צילומים
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {BUDGET_TIERS.map((tier) => {
                    const active = selectedTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier.id)}
                        className={`p-3.5 rounded-xl text-right border transition-all cursor-pointer ${
                          active
                            ? 'bg-[#16161A] border-[#E8FF00] text-white'
                            : 'bg-[#0E0E12] border-[#222226] text-[#A1A1AA] hover:border-[#3F3F46]'
                        }`}
                      >
                        <div className="font-bold text-xs text-white mb-1">{tier.label}</div>
                        <div className="text-[11px] text-[#71717A] leading-snug">{tier.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Executive Contact Inputs */}
              <div className="space-y-4">
                <label className="block text-xs font-mono-tabular text-[#A1A1AA]">
                  03. פרטי התקשרות ותקציר הפרויקט
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs text-[#A1A1AA] mb-1.5">
                      שם מלא *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="לדוגמה: דניאל כהן"
                      className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company-artist"
                      className="block text-xs text-[#A1A1AA] mb-1.5"
                    >
                      מותג / משרד פרסום / אמן / הפקה
                    </label>
                    <input
                      id="company-artist"
                      type="text"
                      value={companyOrArtist}
                      onChange={(e) => setCompanyOrArtist(e.target.value)}
                      placeholder="שם המותג, האמן או חברת ההפקה"
                      className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone-email" className="block text-xs text-[#A1A1AA] mb-1.5">
                    טלפון נייד או אימייל לחזרה מהירה *
                  </label>
                  <input
                    id="phone-email"
                    type="text"
                    required
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="050-0000000 / name@company.co.il"
                    className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00]"
                  />
                </div>

                <div>
                  <label htmlFor="project-notes" className="block text-xs text-[#A1A1AA] mb-1.5">
                    כמה מילים על החזון, הלו״ז או היעד (אופציונלי)
                  </label>
                  <textarea
                    id="project-notes"
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="ספרו לנו בקצרה: מה מצלמים, מתי מתוכנן לעלות לאוויר, והאם יש רפרנס שאתם אוהבים..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121216] border border-[#27272A] text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#E8FF00] resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#E8FF00] text-[#050505] font-extrabold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                <span>שלח בריף ישירות למתנאל גוטליב</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
