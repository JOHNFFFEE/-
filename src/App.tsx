/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Play, ArrowUpLeft, Film, Clapperboard, Sparkles, Globe2, Flame } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  CLIENT_PARTNERS,
  INDUSTRY_TESTIMONIALS,
  HERO_IMAGE,
  ProjectCategory,
  ProjectItem,
  PartnerLogo,
} from './data/portfolioData';
import { CinemaImage } from './components/CinemaImage';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';
import { CelebrityVipStudio } from './components/CelebrityVipStudio';
import { BriefBuilderSection } from './components/BriefBuilderSection';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedLightboxProject, setSelectedLightboxProject] = useState<ProjectItem | null>(null);
  const [selectedBriefReference, setSelectedBriefReference] = useState<ProjectItem | null>(null);
  const [activePartner, setActivePartner] = useState<PartnerLogo>(CLIENT_PARTNERS[0]);
  const [splitCurtainMode, setSplitCurtainMode] = useState<boolean>(true);
  const [heroHovered, setHeroHovered] = useState<boolean>(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleBookSimilar = (project: ProjectItem) => {
    setSelectedBriefReference(project);
    setSelectedLightboxProject(null);
    const el = document.getElementById('contact-brief');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerSelect = (partner: PartnerLogo) => {
    setActivePartner(partner);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F4F0] film-grain">
      {/* 1. Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 bg-[#050505]/90 backdrop-blur-md border-b border-[#1A1A1E]">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-lg md:text-xl font-extrabold tracking-tight text-white hover:text-[#E8FF00] transition-colors whitespace-nowrap"
        >
          MATANEL GOTLIB
        </a>

        {/* Zone 2: 5 clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]">
          <a
            href="#selected-works"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            תיק עבודות
          </a>
          <a
            href="#vip-star-lounge"
            className="text-[#E8FF00] hover:text-white transition-colors whitespace-nowrap"
          >
            טרקלין VIP לטאלנטים
          </a>
          <a
            href="#talent-wall"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            נבחרת האמנים
          </a>
          <a
            href="#capabilities"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            אימפקט
          </a>
          <a
            href="#contact-brief"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            שולחן הפקה
          </a>
        </nav>

        {/* Zone 3: 2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedLightboxProject(PORTFOLIO_PROJECTS[0])}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#F4F4F0] bg-[#141418] hover:bg-[#1F1F26] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 text-[#E8FF00]" />
            <span>שואוריל 2026</span>
          </button>
          <a
            href="#vip-star-lounge"
            className="px-4 py-2 text-xs font-extrabold text-[#050505] bg-[#E8FF00] hover:bg-white rounded-lg transition-colors whitespace-nowrap"
          >
            הזמנת הפקת VIP
          </a>
        </div>
      </header>

      {/* 2. Centered Signature Header + Split Hero Showcase */}
      <main>
        <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          {/* Editorial Centerpiece Lockup (Inspired by Reference Image 1) */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="font-serif-italic text-5xl sm:text-6xl md:text-7xl text-[#E8FF00] tracking-tight leading-none mb-3">
              matanel gotlib
            </p>
            <p className="text-sm md:text-base text-[#D4D4F0] tracking-wide">
              <span>מפיק, תסריטאי ובמאי</span>
              <span aria-hidden="true"> · </span>
              <span>בעלים Goatlib Entertainment</span>
              <span aria-hidden="true"> · </span>
              <span>הסט שכל הכוכבים בישראל רוצים לצלם בו</span>
            </p>
          </div>

          {/* Hero Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Right side in RTL: Bold Typographic Statement & Quantitative Proof */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono-tabular text-[#A1A1AA]">
                <span>GOATLIB ENTERTAINMENT</span>
                <span aria-hidden="true"> · </span>
                <span>TEL AVIV / NYC / PRAGUE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance">
                אני עושה הפקות שנהנים מהן.{' '}
                <span className="text-[#E8FF00]">ומה שמצטלם יפה.</span>
              </h1>

              <p className="text-base text-[#A1A1AA] leading-relaxed">
                מאחורי הקליפים והקמפיינים של <strong className="text-white">אנה זק, שירי מימון, עידו מלכה והאחיות כרקוקלי</strong>, שוברי הקופות <strong className="text-white">בחורים טובים 3, החדש של אבי נשר ואמא פריים טיים</strong>, וקמפיינים ארציים ל-Adidas ומגה ספורט. סט באווירה של מסיבה עם תוצאה שנראית כמו לוס אנג׳לס.
              </p>

              {/* Unboxed Quantitative Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1E1E22]">
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white font-mono-tabular">
                    50M+
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">צפיות בקליפים וקמפיינים</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#E8FF00] font-mono-tabular">
                    4 מדינות
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">IL · US · CZ · GE</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white font-mono-tabular">
                    #1
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-1">בחמים של יוטיוב ופריים-טיים</div>
                </div>
              </div>

              {/* Hero Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#vip-star-lounge"
                  className="px-6 py-3.5 rounded-xl bg-[#E8FF00] text-[#050505] font-black text-sm hover:bg-white transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Flame className="w-4 h-4 fill-current" />
                  <span>כניסת VIP לאמנים וטאלנטים</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedLightboxProject(PORTFOLIO_PROJECTS[0])}
                  className="px-5 py-3.5 rounded-xl bg-[#121216] text-white border border-[#27272A] hover:border-[#E8FF00] font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Play className="w-4 h-4 text-[#E8FF00] fill-current" />
                  <span>נגן שואוריל 2026</span>
                </button>
              </div>
            </div>

            {/* Left side in RTL: Large Interactive Showreel Frame */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setSelectedLightboxProject(PORTFOLIO_PROJECTS[0])}
                onMouseEnter={() => setHeroHovered(true)}
                onMouseLeave={() => setHeroHovered(false)}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-[#222226] bg-[#0B0B0D] cursor-pointer"
              >
                <CinemaImage
                  src={HERO_IMAGE}
                  secondarySrc={PORTFOLIO_PROJECTS[1].image}
                  alt="מתנאל גוטליב על סט הצילומים — Goatlib Entertainment"
                  className="w-full h-full"
                  enableSplitCurtain={true}
                  isHovered={heroHovered}
                />

                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none" />

                {/* Top Frame Timecode & Camera HUD */}
                <div className="absolute top-4 inset-x-5 flex items-center justify-between text-xs font-mono-tabular text-[#F4F4F0]/90">
                  <span>SHOWREEL 2026 · ARRI ALEXA LF</span>
                  <span className="text-[#E8FF00]">● REC 00:01:48:12</span>
                </div>

                {/* Center Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#E8FF00] text-[#050505] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>

                {/* Bottom Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs text-[#E8FF00] font-mono-tabular mb-1">
                      EXECUTIVE PRODUCER · SCREENWRITER · DIRECTOR
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white">
                      מתנאל גוטליב — מאחורי הקלעים של הקולנוע והקליפים הגדולים בישראל
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-mono-tabular text-[#D4D4D8] underline whitespace-nowrap">
                    לחץ לפתיחת חדר הקרנה
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Kinetic Editorial Marquee Divider */}
        <div
          className="border-y border-[#1A1A1E] bg-[#08080A] py-3.5 overflow-hidden select-none"
          dir="ltr"
        >
          <div className="animate-marquee-rtl flex items-center gap-10 text-xs font-mono-tabular text-[#A1A1AA] tracking-widest">
            {[1, 2].map((loopIndex) => (
              <div key={loopIndex} className="flex items-center gap-10 shrink-0">
                <span className="text-[#E8FF00] font-semibold">MATANEL GOTLIB</span>
                <span>·</span>
                <span>בחורים טובים 3 (NYC / IL)</span>
                <span>·</span>
                <span>ANNA ZAK</span>
                <span>·</span>
                <span>הסרט החדש של אבי נשר</span>
                <span>·</span>
                <span>SHIRI MAIMON</span>
                <span>·</span>
                <span>PRIME TIME MOM (אמא פריים טיים)</span>
                <span>·</span>
                <span>ADIDAS × MEGA SPORT</span>
                <span>·</span>
                <span>IDO MALKA</span>
                <span>·</span>
                <span>KARKUKLI SISTERS</span>
                <span>·</span>
                <span>PRAGUE (CZ) & TBILISI (GE) PRODUCTIONS</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Asymmetrical Bento Showreel Grid (Direct Reference to 12123.png Layout) */}
        <section
          id="selected-works"
          className="py-20 md:py-28 px-6 md:px-12 max-w-[1400px] mx-auto"
        >
          {/* Section Header + Interactive Category Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono-tabular text-[#E8FF00] tracking-wider mb-2">
                01. SELECTED PRODUCTIONS · עבודות נבחרות
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                סרטים, קליפים ופרסומות שמדברים בעד עצמם
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Interactive Split-Curtain Effect Toggle */}
              <button
                type="button"
                onClick={() => setSplitCurtainMode((prev) => !prev)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                  splitCurtainMode
                    ? 'bg-[#141418] border-[#E8FF00]/60 text-[#E8FF00]'
                    : 'bg-[#0C0C0F] border-[#222226] text-[#A1A1AA]'
                }`}
              >
                {splitCurtainMode ? 'אפקט חשיפת B-Roll: פעיל' : 'אפקט חשיפת B-Roll: כבוי'}
              </button>

              {/* Functional Segmented Filter Bar */}
              <div className="flex items-center gap-1 p-1 bg-[#111114] border border-[#222226] rounded-xl overflow-x-auto">
                {[
                  { id: 'all', label: 'כל ההפקות (6)' },
                  { id: 'cinema', label: 'קולנוע ופיצ׳רים' },
                  { id: 'music_videos', label: 'קליפים ואמנים' },
                  { id: 'commercials', label: 'פרסומות' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeCategory === tab.id
                        ? 'bg-[#E8FF00] text-[#050505]'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Asymmetrical Bento Grid (Matching the exact rhythm of 12123.png) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredProjectId === project.id;

              let colSpanClass = 'md:col-span-4';
              let heightClass = 'h-[300px] md:h-[340px]';

              if (activeCategory === 'all') {
                if (index === 0) {
                  colSpanClass = 'md:col-span-8';
                  heightClass = 'h-[340px] md:h-[460px]';
                } else if (index === 1) {
                  colSpanClass = 'md:col-span-4';
                  heightClass = 'h-[340px] md:h-[460px]';
                } else if (index === 2 || index === 3) {
                  colSpanClass = 'md:col-span-6';
                  heightClass = 'h-[320px] md:h-[380px]';
                } else if (index === 4) {
                  colSpanClass = 'md:col-span-7';
                  heightClass = 'h-[320px] md:h-[400px]';
                } else {
                  colSpanClass = 'md:col-span-5';
                  heightClass = 'h-[320px] md:h-[400px]';
                }
              } else {
                colSpanClass = index === 0 ? 'md:col-span-7' : 'md:col-span-5';
                heightClass = 'h-[340px] md:h-[400px]';
              }

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedLightboxProject(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className={`${colSpanClass} ${heightClass} group relative rounded-2xl overflow-hidden bg-[#0E0E11] border border-[#1F1F24] hover:border-[#E8FF00]/70 transition-colors cursor-pointer`}
                >
                  <CinemaImage
                    src={project.image}
                    secondarySrc={project.secondaryImage}
                    alt={project.title}
                    className="w-full h-full"
                    enableSplitCurtain={splitCurtainMode}
                    isHovered={isHovered}
                  />

                  {/* Contrast Scrim for WCAG AA Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/25 pointer-events-none" />

                  {/* Top Row: Clean Unboxed Metadata + Aspect Ratio */}
                  <div className="absolute top-4 inset-x-5 flex items-center justify-between text-xs text-[#E4E4E7]/90">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#E8FF00]">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                    <span className="font-mono-tabular text-[11px] text-[#A1A1AA]">
                      {project.aspectRatioLabel}
                    </span>
                  </div>

                  {/* Bottom Row: Project Title, Client & Play Action */}
                  <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex items-end justify-between gap-4">
                    <div className="space-y-1 max-w-xl">
                      <div className="text-xs font-mono-tabular text-[#D4D4D8]">
                        {project.clientOrArtist} · {project.role}
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] line-clamp-1">{project.metrics}</p>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-[#E8FF00] text-white group-hover:text-[#050505] flex items-center justify-center shrink-0 transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 5. NEW: Celebrity & Artist VIP Backstage Studio (Vibe Picker, VIP Rider & Digital Clapperboard) */}
        <CelebrityVipStudio />

        {/* 6. A-List Artists, Films & Mega-Brands Wall (Inspired by Reference Image 1 Bottom Grid) */}
        <section
          id="talent-wall"
          className="py-20 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#1A1A1E]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono-tabular text-[#E8FF00] tracking-wider mb-2">
                02. INDUSTRY ROSTER · אמנים, סרטים ומותגים
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-balance">
                הנבחרת שכבר מצלמת אצלנו קבוע
              </h2>
            </div>
            <p className="text-sm text-[#A1A1AA] max-w-md">
              לחצו על כל אמן, סרט או מותג כדי לראות את היקף שיתוף הפעולה ולסנן את תיק העבודות בהתאם:
            </p>
          </div>

          {/* 12-Item High-Contrast Typography & Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {CLIENT_PARTNERS.map((partner) => {
              const isSelected = activePartner.id === partner.id;
              return (
                <button
                  key={partner.id}
                  type="button"
                  onClick={() => handlePartnerSelect(partner)}
                  className={`p-5 rounded-xl text-right border transition-all cursor-pointer flex flex-col justify-between min-h-[112px] ${
                    isSelected
                      ? 'bg-[#141418] border-[#E8FF00] text-white'
                      : 'bg-[#0A0A0D] border-[#1E1E24] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full gap-2">
                    <span className="font-display text-lg md:text-xl font-extrabold tracking-tight text-white">
                      {partner.name}
                    </span>
                    <span className="text-[11px] font-mono-tabular text-[#E8FF00] whitespace-nowrap">
                      {partner.projectCount}
                    </span>
                  </div>
                  <div className="text-xs text-[#71717A] mt-3">{partner.englishSub}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Partner Spotlight Strip */}
          <div className="mt-6 p-6 rounded-2xl bg-[#0D0D11] border border-[#222226] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-mono-tabular text-[#E8FF00]">
                SPOTLIGHT · {activePartner.name} ({activePartner.projectCount})
              </div>
              <h3 className="text-lg font-bold text-white">{activePartner.highlightWork}</h3>
              <p className="text-xs text-[#A1A1AA]">{activePartner.englishSub}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory(activePartner.filterCategory);
                  document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-xl bg-[#1A1A20] hover:bg-[#E8FF00] text-white hover:text-[#050505] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                הצג הפקות בקטגוריה זו
              </button>
              <a
                href="#vip-star-lounge"
                className="px-4 py-2.5 rounded-xl bg-[#E8FF00] text-[#050505] hover:bg-white text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                אני רוצה ווייב כזה
              </a>
            </div>
          </div>
        </section>

        {/* 7. Capabilities & Attributable Proof Testimonials (Claim-to-Proof Adjacency) */}
        <section
          id="capabilities"
          className="py-20 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-[#1A1A1E]"
        >
          <div className="mb-14">
            <p className="text-xs font-mono-tabular text-[#E8FF00] tracking-wider mb-2">
              03. WHY GOATLIB ENTERTAINMENT · למה עובדים איתנו
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-balance">
              שילוב של מוח תסריטאי, עין של במאי ויד ברזל של מפיק
            </h2>
          </div>

          {/* 4 Pillar Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#0B0B0E] border border-[#1F1F24] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#E8FF00]">
                <span>01. CINEMA & FEATURES</span>
                <Film className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">קולנוע, דרמה ופיצ׳רים</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                ניסיון מוכח בהפקות הקולנוע הגדולות בישראל — מ״בחורים טובים 3״ והחדש של אבי נשר ועד
                יצירה מקורית כמו ״אמא פריים טיים״.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0B0E] border border-[#1F1F24] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#E8FF00]">
                <span>02. A-LIST MUSIC VIDEOS</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">קליפים לאמני השורה הראשונה</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                בית ההפקה המועדף על אנה זק, שירי מימון, עידו מלכה, האחיות כרקוקלי ועשרות כוכבים.
                קריאייטיב, ארט ובימוי שמייצרים מיליוני צפיות.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0B0E] border border-[#1F1F24] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#E8FF00]">
                <span>03. COMMERCIALS & BRANDS</span>
                <Clapperboard className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">פרסומות וקמפיינים ארציים</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                הפקת פרסומות טלוויזיה ודיגיטל למותגי על (Adidas × מגה ספורט, BSR ועוד) ברמת גימור
                קולנועית שמבליטה את המותג מעל כל הברייק.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0B0E] border border-[#1F1F24] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#E8FF00]">
                <span>04. GLOBAL SETS (US / EU)</span>
                <Globe2 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">צילומים והפקות בחו״ל</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                מערך הפקה משומן בניו יורק (MM US), פראג (CZ) וגאורגיה (SF GE) — לוקיישנים עוצרי
                נשימה, צוותים מקומיים וחיסכון דרמטי בעלויות.
              </p>
            </div>
          </div>

          {/* Attributable Proof & Industry Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {INDUSTRY_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#09090C] border border-[#1E1E24] flex flex-col justify-between space-y-6"
              >
                <p className="text-sm text-[#D4D4D8] leading-relaxed">״{item.quote}״</p>
                <div className="pt-4 border-t border-[#18181D] space-y-1">
                  <div className="text-xs font-mono-tabular text-[#E8FF00]">
                    {item.outcomeMetric}
                  </div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-[#71717A]">
                    {item.role} · {item.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Interactive Production Brief & Lead Generator for Agencies / Brands */}
        <BriefBuilderSection
          selectedReferenceProject={selectedBriefReference}
          onClearReference={() => setSelectedBriefReference(null)}
        />
      </main>

      {/* 9. Clean Executive Footer (Matching Reference Image 1 Footer Structure) */}
      <footer className="border-t border-[#1A1A1E] bg-[#050505] py-14 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-2 text-xs text-[#A1A1AA]">
              <div className="font-bold text-white tracking-wider uppercase mb-3">CONTACT</div>
              <p className="font-mono-tabular text-sm text-white">
                goatlib.entertainment@gmail.com
              </p>
              <p>מתנאל גוטליב — מפיק, תסריטאי ובמאי</p>
              <p>תל אביב · ניו יורק · פראג · טביליסי</p>
            </div>

            <div className="space-y-2 text-xs text-[#A1A1AA]">
              <div className="font-bold text-white tracking-wider uppercase mb-3">PROJECTS</div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('cinema');
                    document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#E8FF00] transition-colors cursor-pointer"
                >
                  קולנוע ופיצ׳רים (בחורים טובים 3, אבי נשר, אמא פריים טיים)
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('music_videos');
                    document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#E8FF00] transition-colors cursor-pointer"
                >
                  וידאו קליפים (אנה זק, שירי מימון, עידו מלכה, כרקוקלי)
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('commercials');
                    document.getElementById('selected-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#E8FF00] transition-colors cursor-pointer"
                >
                  פרסומות וקמפיינים (Adidas × מגה ספורט, BSR)
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto justify-between">
            <div className="text-xs text-[#71717A]">
              © {new Date().getFullYear()} GOATLIB ENTERTAINMENT LTD · כל הזכויות שמורות למתנאל
              גוטליב
            </div>
            <a
              href="#vip-star-lounge"
              className="px-5 py-2.5 rounded-lg bg-[#E8FF00] text-[#050505] font-extrabold text-xs hover:bg-white transition-colors whitespace-nowrap"
            >
              טרקלין VIP לטאלנטים
            </a>
          </div>
        </div>
      </footer>

      {/* Fullscreen Screening Room Lightbox Modal */}
      <ProjectLightboxModal
        project={selectedLightboxProject}
        onClose={() => setSelectedLightboxProject(null)}
        onBookSimilar={handleBookSimilar}
      />
    </div>
  );
}
