'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Delicate Japanese-inspired hand-drawn branch spray.
 * Features organic curving twigs, bud nodes, and leaf ellipses.
 * Rendered with currentColor for theme harmony.
 */
export function BranchSpray({
  flip = false,
  sparse = false,
  className = '',
}: {
  flip?: boolean;
  sparse?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={`w-full h-auto select-none pointer-events-none transition-transform duration-700 ${flip ? '-scale-x-100' : ''} ${className}`}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Branch Twigs */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <path d="M8,212 C60,170 96,150 150,128 C200,108 244,84 306,44" />
        <path d="M70,176 C92,160 104,148 118,128" />
        <path d="M128,140 C150,128 160,116 170,98" />
        <path d="M196,108 C216,96 228,86 238,70" />
        {!sparse && <path d="M52,190 C66,184 76,178 84,168" />}
        <path d="M156,126 C168,122 176,116 182,108" />
      </g>
      {/* Delicate Leaves / Petals */}
      <g fill="currentColor" opacity="0.9">
        <ellipse cx="118" cy="124" rx="7" ry="4.4" transform="rotate(-24 118 124)" />
        <ellipse cx="124" cy="130" rx="6" ry="3.8" transform="rotate(18 124 130)" />
        <ellipse cx="172" cy="94" rx="7" ry="4.4" transform="rotate(-20 172 94)" />
        <ellipse cx="178" cy="100" rx="6" ry="3.8" transform="rotate(22 178 100)" />
        <ellipse cx="240" cy="66" rx="7" ry="4.4" transform="rotate(-24 240 66)" />
        <ellipse cx="246" cy="72" rx="6" ry="3.8" transform="rotate(18 246 72)" />
        {!sparse && <ellipse cx="84" cy="164" rx="6.4" ry="4" transform="rotate(-22 84 164)" />}
        {!sparse && <ellipse cx="90" cy="170" rx="5.4" ry="3.4" transform="rotate(20 90 170)" />}
        <ellipse cx="272" cy="48" rx="6.4" ry="4" transform="rotate(-20 272 48)" />
        <circle cx="112" cy="134" r="2.4" />
        <circle cx="184" cy="104" r="2.4" />
        <circle cx="252" cy="76" r="2.4" />
        {!sparse && <circle cx="96" cy="174" r="2.2" />}
      </g>
    </svg>
  );
}

/**
 * Global Decorative Branches framing the corners of the viewport.
 * Fixed in background at z-[2], very low opacity for matte elegance.
 */
export function DecorativeBranches() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden text-[#10B981]/20">
      {/* Top Left Branch */}
      <div className="absolute -top-6 -left-8 w-[220px] sm:w-[280px] lg:w-[320px] opacity-75">
        <BranchSpray />
      </div>

      {/* Top Right Branch */}
      <div className="absolute -top-6 -right-8 w-[200px] sm:w-[260px] lg:w-[300px] opacity-60 hidden sm:block">
        <BranchSpray flip sparse />
      </div>

      {/* Bottom Left Branch */}
      <div className="absolute top-[65%] -left-12 w-[180px] sm:w-[240px] opacity-40 hidden md:block">
        <BranchSpray flip />
      </div>

      {/* Bottom Right Branch */}
      <div className="absolute top-[58%] -right-12 w-[180px] sm:w-[240px] opacity-50">
        <BranchSpray />
      </div>
    </div>
  );
}



/**
 * Cute Japanese Origami Crane SVG Decoration.
 * Minimalist geometric folded paper crane that floats gently.
 */
export function OrigamiCraneSVG({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body & Wings Fold Lines */}
      <path d="M 50 15 L 75 45 L 50 85 L 25 45 Z" fill="#131922" stroke="#10B981" strokeWidth="2" />
      {/* Left Wing Spread */}
      <path d="M 25 45 L 5 30 L 35 60 Z" fill="#1A222F" stroke="#5EEAA0" strokeWidth="1.8" />
      {/* Right Wing Spread */}
      <path d="M 75 45 L 95 30 L 65 60 Z" fill="#1A222F" stroke="#5EEAA0" strokeWidth="1.8" />
      {/* Head & Neck */}
      <path d="M 50 15 L 45 5 L 40 10 L 48 18 Z" fill="#5EEAA0" />
      {/* Tail Feather Tip */}
      <path d="M 50 85 L 50 95 L 47 88 Z" fill="#10B981" />
      {/* Inner Creases */}
      <line x1="50" y1="15" x2="50" y2="85" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  );
}

/**
 * Cute Ninja Star (Shuriken) Vector Icon.
 */
export function ShurikenSVG({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 50 5 L 58 36 L 95 50 L 58 64 L 50 95 L 42 64 L 5 50 L 42 36 Z"
        fill="#12161F"
        stroke="#5EEAA0"
        strokeWidth="2.5"
      />
      {/* Center Void */}
      <circle cx="50" cy="50" r="10" fill="#090A0E" stroke="#10B981" strokeWidth="2" />
    </svg>
  );
}
