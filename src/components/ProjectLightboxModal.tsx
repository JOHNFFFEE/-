import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowUpLeft, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { CinemaImage } from './CinemaImage';

interface ProjectLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onBookSimilar: (project: ProjectItem) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  onClose,
  onBookSimilar,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlayingReel, setIsPlayingReel] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    if (!project) return;
    setActiveSceneIndex(0);
    setIsPlayingReel(true);
    setProgress(18);
  }, [project]);

  useEffect(() => {
    if (!project || !isPlayingReel) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSceneIndex((idx) => (idx + 1) % project.scenes.length);
          return 0;
        }
        return prev + 1.5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [project, isPlayingReel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentScene = project.scenes[activeSceneIndex] || {
    timecode: '00:01:12:04',
    label: project.title,
    cameraNote: project.cameraSpec,
    image: project.image,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-[#0B0B0D] border border-[#27272A] rounded-2xl overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Screening Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222226] bg-[#08080A]">
          <div className="flex items-center gap-3 text-xs text-[#A1A1AA] font-mono-tabular">
            <span className="text-[#E8FF00] font-semibold">GOATLIB SCREENING ROOM</span>
            <span aria-hidden="true">·</span>
            <span>{project.aspectRatioLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="hidden sm:inline">{project.cameraSpec}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#F4F4F0] bg-[#18181B] hover:bg-[#E8FF00] hover:text-[#050505] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            aria-label="סגור חלון תצוגה"
          >
            <span>סגור (ESC)</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Cinema Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left/Main Media Player Column */}
          <div className="lg:col-span-8 relative bg-black flex flex-col justify-between">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <CinemaImage
                src={currentScene.image}
                alt={currentScene.label}
                className="w-full h-full"
                isHovered={isPlayingReel}
              />

              {/* Cinema Vignette & Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

              {/* Top Overlay Metadata */}
              <div className="absolute top-4 right-4 left-4 flex items-center justify-between text-xs font-mono-tabular text-[#F4F4F0]/90 pointer-events-none">
                <span>REC ● {currentScene.timecode}</span>
                <span>{project.englishTitle}</span>
              </div>

              {/* Bottom Scene Caption & Controls */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-3">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#E8FF00] font-mono-tabular mb-1">
                      {currentScene.cameraNote}
                    </p>
                    <h4 className="text-base md:text-lg font-semibold text-white">
                      {currentScene.label}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlayingReel((p) => !p)}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#E8FF00] text-[#050505] hover:bg-white transition-colors cursor-pointer"
                      aria-label={isPlayingReel ? 'השהה תצוגת ריל' : 'נגן תצוגת ריל'}
                    >
                      {isPlayingReel ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMuted((m) => !m)}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label={isMuted ? 'בטל השתקה' : 'השתק'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Interactive Timeline Scrubber */}
                <div
                  className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickPos = Math.max(0, Math.min(1, (rect.right - e.clientX) / rect.width));
                    setProgress(Math.round(clickPos * 100));
                  }}
                >
                  <div
                    className="h-full bg-[#E8FF00] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Scene Selector Strip */}
            <div className="p-4 bg-[#09090B] border-t border-[#222226] flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2 overflow-x-auto">
                {project.scenes.map((scene, idx) => (
                  <button
                    key={scene.timecode}
                    type="button"
                    onClick={() => {
                      setActiveSceneIndex(idx);
                      setProgress(15);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      activeSceneIndex === idx
                        ? 'bg-[#E8FF00] text-[#050505] font-semibold'
                        : 'bg-[#141417] text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    סצנה 0{idx + 1} · {scene.timecode.slice(0, 5)}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#A1A1AA]">
                <span>אימפקט: </span>
                <span className="text-[#F4F4F0] font-medium">{project.metrics}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Brief & Production Credits */}
          <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-[#0B0B0D] border-t lg:border-t-0 lg:border-r border-[#222226]">
            <div className="space-y-6">
              <div>
                <div className="text-xs text-[#A1A1AA] mb-2">
                  <span>{project.categoryLabel}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{project.year}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{project.location}</span>
                </div>
                <h3
                  id="lightbox-project-title"
                  className="text-2xl font-extrabold text-white tracking-tight"
                >
                  {project.title}
                </h3>
                <p className="text-xs font-mono-tabular text-[#E8FF00] mt-1">
                  {project.clientOrArtist}
                </p>
              </div>

              <p className="text-sm text-[#D4D4D8] leading-relaxed">{project.synopsis}</p>

              {/* Director's Vision Quote */}
              <div className="p-4 rounded-xl bg-[#121215] border border-[#222226]">
                <p className="text-xs text-[#A1A1AA] mb-1.5">זווית המפיק / במאי — מתנאל גוטליב:</p>
                <p className="text-sm text-[#F4F4F0] italic leading-relaxed">
                  ״{project.directorNote}״
                </p>
              </div>

              {/* Clean Tabular Credits List */}
              <div className="space-y-2.5 pt-2 border-t border-[#222226] text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-[#71717A]">הפקה ראשית</span>
                  <span className="text-[#F4F4F0] font-medium">{project.credits.producer}</span>
                </div>
                <div className="flex justify-between py-1 border-t border-[#18181B]">
                  <span className="text-[#71717A]">בימוי וקריאייטיב</span>
                  <span className="text-[#F4F4F0] font-medium">{project.credits.director}</span>
                </div>
                <div className="flex justify-between py-1 border-t border-[#18181B]">
                  <span className="text-[#71717A]">מערך מצלמה</span>
                  <span className="text-[#F4F4F0] font-mono-tabular">{project.credits.dop}</span>
                </div>
                <div className="flex justify-between py-1 border-t border-[#18181B]">
                  <span className="text-[#71717A]">בית הפקה</span>
                  <span className="text-[#E8FF00] font-medium">
                    {project.credits.productionHouse}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#222226] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onBookSimilar(project)}
                className="w-full py-3 px-4 rounded-xl bg-[#E8FF00] text-[#050505] font-bold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>הזמן הפקה ברמה הזו</span>
                <ArrowUpLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#A1A1AA]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8FF00]" />
                <span>מענה ישיר מול מתנאל גוטליב תוך 24 שעות</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
