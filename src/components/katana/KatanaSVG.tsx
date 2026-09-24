'use client';

import React from 'react';

export function KatanaArtwork({
  idSuffix = 'main',
  gleam = false,
  className = '',
}: {
  idSuffix?: string;
  gleam?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 640 640"
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Tamahagane Polished Folded Steel */}
        <linearGradient id={`katana-steel-${idSuffix}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F1F4F9" />
          <stop offset="55%" stopColor="#CFD7E3" />
          <stop offset="85%" stopColor="#8A96A8" />
          <stop offset="100%" stopColor="#4F5866" />
        </linearGradient>

        {/* Habaki (Blade Collar) - Gunmetal & Brass Accent */}
        <linearGradient id={`katana-habaki-${idSuffix}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="40%" stopColor="#E6C875" />
          <stop offset="100%" stopColor="#8C6D23" />
        </linearGradient>

        {/* Tsuka Wrapped Handle Core */}
        <linearGradient id={`katana-tsuka-${idSuffix}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B0D11" />
          <stop offset="50%" stopColor="#171A22" />
          <stop offset="100%" stopColor="#060709" />
        </linearGradient>

        {/* Gleam Glow Filter */}
        <filter id={`katana-glow-${idSuffix}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Internal artwork is laid out horizontally and pre-rotated -45 degrees */}
      <g transform="rotate(-45 320 320)">
        {/* Sageo Cord - subtle charcoal cord with emerald flecks */}
        <path
          d="M 178 344 C 166 370, 144 382, 126 386"
          fill="none"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Blade Spine Shadow (Back of blade) */}
        <polygon
          points="204,310 496,310 530,320 496,311 204,311"
          fill="#3B424D"
        />

        {/* Main Polished Blade Body */}
        <polygon
          points="204,311 496,311 530,320 496,329 204,329"
          fill={`url(#katana-steel-${idSuffix})`}
          stroke="#F8FAFC"
          strokeWidth="1.2"
        />

        {/* Shinogi Ridge Line (Divides the blade facets) */}
        <line
          x1="205"
          y1="320"
          x2="500"
          y2="320"
          stroke="#748092"
          strokeWidth="1"
          opacity="0.85"
        />

        {/* Hamon (Wavy Differential Temper Line) */}
        <path
          d="M 210 325 C 245 322, 270 326, 305 323 S 380 322, 430 325 S 475 322, 510 320"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          opacity="0.9"
        />
        <path
          d="M 215 326 C 255 324, 280 327, 320 324 S 400 324, 450 326 S 485 323, 512 320"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* Cutting Edge Gleam Reflection */}
        {gleam ? (
          <line
            x1="204"
            y1="329"
            x2="528"
            y2="321"
            stroke="#5EEAA0"
            strokeWidth="3"
            strokeLinecap="round"
            filter={`url(#katana-glow-${idSuffix})`}
          />
        ) : (
          <line
            x1="204"
            y1="329"
            x2="528"
            y2="321"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />
        )}

        {/* Habaki Collar (Solid Brass / Gold) */}
        <rect
          x="192"
          y="308"
          width="13"
          height="24"
          rx="1.5"
          fill={`url(#katana-habaki-${idSuffix})`}
          stroke="#8C6D23"
          strokeWidth="1"
        />
        <line x1="198" y1="308" x2="198" y2="332" stroke="#FAF089" strokeWidth="0.8" opacity="0.6" />

        {/* Seppa Washers */}
        <rect x="189" y="306" width="3" height="28" rx="1" fill="#C59B27" />

        {/* Tsuba (Iron Guard) with traditional silhouette */}
        <ellipse
          cx="179"
          cy="320"
          rx="10"
          ry="28"
          fill="#12151B"
          stroke="#384152"
          strokeWidth="2.2"
        />
        <ellipse
          cx="179"
          cy="320"
          rx="4"
          ry="13"
          fill="none"
          stroke="#525F75"
          strokeWidth="1.2"
        />
        {/* Tsuba Gold Inlay Dots */}
        <circle cx="179" cy="302" r="1.5" fill="#D4AF37" />
        <circle cx="179" cy="338" r="1.5" fill="#D4AF37" />

        {/* Tsuka (Handle Core) */}
        <rect
          x="94"
          y="309"
          width="76"
          height="22"
          rx="4"
          fill={`url(#katana-tsuka-${idSuffix})`}
          stroke="#090A0D"
          strokeWidth="1.2"
        />

        {/* Samegawa (White Rayskin Underlay Texture) */}
        <g fill="#D8DEE8" opacity="0.5">
          <circle cx="106" cy="320" r="1" />
          <circle cx="122" cy="320" r="1" />
          <circle cx="138" cy="320" r="1" />
          <circle cx="154" cy="320" r="1" />
        </g>

        {/* Tsukamaki Diamond Braid Ito (Crisp geometric handle wraps) */}
        <g stroke="#10B981" strokeWidth="2.2" opacity="0.95" strokeLinecap="round">
          <line x1="102" y1="309" x2="116" y2="331" />
          <line x1="118" y1="309" x2="132" y2="331" />
          <line x1="134" y1="309" x2="148" y2="331" />
          <line x1="150" y1="309" x2="164" y2="331" />

          <line x1="160" y1="309" x2="148" y2="331" />
          <line x1="144" y1="309" x2="132" y2="331" />
          <line x1="128" y1="309" x2="116" y2="331" />
          <line x1="112" y1="309" x2="102" y2="331" />
        </g>

        {/* Kashira (Handle Endcap) & Ring */}
        <rect
          x="85"
          y="308"
          width="10"
          height="24"
          rx="3"
          fill="#12151B"
          stroke="#384152"
          strokeWidth="1.2"
        />
        <circle cx="82" cy="320" r="3.2" fill="#D4AF37" stroke="#12151B" strokeWidth="1" />
      </g>
    </svg>
  );
}

/**
 * Dedicated Vertical Katana SVG — engineered specifically for the hanging navbar sword.
 * Clean, razor-sharp vector drawing with no orientation hacks.
 */
function VerticalHangingSword() {
  return (
    <svg
      viewBox="0 0 36 150"
      className="w-full h-full select-none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vBladeSteel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#E2E8F0" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="vHabaki" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6D23" />
        </linearGradient>
      </defs>

      {/* Suspension Rope */}
      <line x1="18" y1="0" x2="18" y2="16" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 1.5" opacity="0.9" />
      
      {/* Gold Ring Knot */}
      <circle cx="18" cy="16" r="3" fill="#D4AF37" stroke="#8C6D23" strokeWidth="1" />

      {/* Tsuka (Handle) - Top */}
      <rect x="14" y="20" width="8" height="38" rx="2" fill="#0E1117" stroke="#1E232F" strokeWidth="1" />
      {/* Kashira Cap */}
      <rect x="13" y="19" width="10" height="4" rx="1.5" fill="#D4AF37" />
      {/* Tsukamaki Diamond Wrapping Lines */}
      <g stroke="#10B981" strokeWidth="1.4" opacity="0.95">
        <line x1="14" y1="24" x2="22" y2="30" />
        <line x1="14" y1="32" x2="22" y2="38" />
        <line x1="14" y1="40" x2="22" y2="46" />
        <line x1="14" y1="48" x2="22" y2="54" />
        <line x1="22" y1="24" x2="14" y2="30" />
        <line x1="22" y1="32" x2="14" y2="38" />
        <line x1="22" y1="40" x2="14" y2="46" />
        <line x1="22" y1="48" x2="14" y2="54" />
      </g>

      {/* Tsuba (Iron Guard) */}
      <ellipse cx="18" cy="59" rx="13" ry="3.5" fill="#12151B" stroke="#4B5563" strokeWidth="1.5" />
      <circle cx="18" cy="59" r="1.5" fill="#D4AF37" />

      {/* Habaki (Collar) */}
      <rect x="15" y="62" width="6" height="6" rx="0.5" fill="url(#vHabaki)" stroke="#8C6D23" strokeWidth="0.8" />

      {/* Polished Tamahagane Blade Body */}
      <path
        d="M 15.5 68 L 20.5 68 L 20.5 138 Q 20.5 145, 17.5 148 Q 16.5 145, 15.5 138 Z"
        fill="url(#vBladeSteel)"
        stroke="#E2E8F0"
        strokeWidth="0.8"
      />

      {/* Shinogi Ridge Center Line */}
      <line x1="18" y1="68" x2="18" y2="142" stroke="#64748B" strokeWidth="0.7" opacity="0.75" />

      {/* Hamon Temper Wave along Cutting Edge */}
      <path
        d="M 16 72 Q 17 76, 16 80 Q 17 84, 16 88 Q 17 92, 16 96 Q 17 100, 16 104 Q 17 108, 16 112 Q 17 116, 16 120 Q 17 124, 16 128 Q 17 132, 16 136 L 17.5 146"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        opacity="0.9"
      />

      {/* Edge Gleam Highlight */}
      <line x1="15.8" y1="70" x2="15.8" y2="138" stroke="#5EEAA0" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export function NavKatana() {
  return (
    <div
      className="nav-katana group cursor-pointer pointer-events-auto"
      aria-hidden="true"
    >
      <div className="nav-katana-swing">
        <div className="w-[32px] h-[135px] -ml-[16px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform">
          <VerticalHangingSword />
        </div>
      </div>
    </div>
  );
}
