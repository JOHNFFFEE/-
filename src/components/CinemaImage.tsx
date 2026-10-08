import React, { useState } from 'react';
import { Film } from 'lucide-react';

interface CinemaImageProps {
  src: string;
  secondarySrc?: string;
  alt: string;
  className?: string;
  enableSplitCurtain?: boolean;
  isHovered?: boolean;
}

export const CinemaImage: React.FC<CinemaImageProps> = ({
  src,
  secondarySrc,
  alt,
  className = '',
  enableSplitCurtain = false,
  isHovered = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#111113] text-[#F4F4F0]/60 p-6 overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#18181B] via-[#09090B] to-[#050505]" />
        <Film className="relative z-10 w-8 h-8 text-[#E8FF00] mb-2 opacity-80" />
        <span className="relative z-10 text-xs font-mono-tabular tracking-wider text-center">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#0E0E10] ${className}`}>
      {/* Primary Frame */}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered ? 'scale-[1.04]' : 'scale-100'
        }`}
      />

      {/* Interactive Split-Curtain Reveal (Inspired by Director Showreel Reference) */}
      {enableSplitCurtain && secondarySrc && !secondaryError && (
        <div
          className={`
            absolute inset-0 overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isHovered ? 'translate-y-[44%]' : 'translate-y-full'}
          `}
        >
          <div className="w-full h-full relative border-t border-[#E8FF00]/40">
            <img
              src={secondarySrc}
              alt={`${alt} - alternate take`}
              referrerPolicy="no-referrer"
              onError={() => setSecondaryError(true)}
              className="w-full h-full object-cover scale-105 brightness-110 contrast-105"
            />
            <div className="absolute top-2 left-3 text-[11px] font-mono-tabular text-[#E8FF00] drop-shadow">
              TAKE 02 · B-ROLL
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
