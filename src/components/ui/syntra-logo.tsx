import React from 'react';

interface SyntraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export function SyntraLogo({ className = '', size = 'md', showSubtitle = true }: SyntraLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Símbolo Vetorial SVG de Alta Performance */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_16px_rgba(16,185,129,0.35)]"
        >
          <defs>
            <linearGradient id="syntraGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="syntraGradient2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Faceta Superior do 'S' Tecnológico */}
          <path
            d="M 30 18 L 75 18 C 84 18 88 26 82 34 L 56 60 C 50 66 42 66 38 60 L 22 44 C 18 40 22 32 30 32 L 62 32"
            stroke="url(#syntraGradient1)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Faceta Inferior do 'S' Tecnológico */}
          <path
            d="M 70 82 L 25 82 C 16 82 12 74 18 66 L 44 40 C 50 34 58 34 62 40 L 78 56 C 82 60 78 68 70 68 L 38 68"
            stroke="url(#syntraGradient2)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Núcleo Central de Síntese */}
          <circle cx="50" cy="50" r="4.5" fill="#34D399" className="animate-pulse" />
        </svg>
      </div>

      {/* Tipografia */}
      <div className="flex flex-col leading-none select-none">
        <div className={`font-black tracking-tight text-white ${textSizes[size]} flex items-center`}>
          <span>SYNTRA</span>
          <span className="text-emerald-400 ml-1.5 font-light tracking-widest text-[0.85em]">LABS</span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 mt-0.5">
            Software & Technology Studio
          </span>
        )}
      </div>
    </div>
  );
}
