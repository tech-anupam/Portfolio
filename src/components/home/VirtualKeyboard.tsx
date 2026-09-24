'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Keyboard, ArrowUpRight, Zap } from 'lucide-react';

interface KeyDef {
  code: string;
  label: string;
  subLabel?: string;
  w: number; // in units (1u = standard alpha)
  isAccent?: boolean;
  isMod?: boolean;
  hasBump?: boolean;
}

const UNIT_PX = 38;
const GAP_PX = 4;
const PADDING_X = 20;
const PADDING_Y = 20;

const KEYBOARD_ROWS: KeyDef[][] = [
  // Row 1 (15u)
  [
    { code: 'Escape', label: 'ESC', w: 1, isAccent: true },
    { code: 'Digit1', label: '1', subLabel: '!', w: 1 },
    { code: 'Digit2', label: '2', subLabel: '@', w: 1 },
    { code: 'Digit3', label: '3', subLabel: '#', w: 1 },
    { code: 'Digit4', label: '4', subLabel: '$', w: 1 },
    { code: 'Digit5', label: '5', subLabel: '%', w: 1 },
    { code: 'Digit6', label: '6', subLabel: '^', w: 1 },
    { code: 'Digit7', label: '7', subLabel: '&', w: 1 },
    { code: 'Digit8', label: '8', subLabel: '*', w: 1 },
    { code: 'Digit9', label: '9', subLabel: '(', w: 1 },
    { code: 'Digit0', label: '0', subLabel: ')', w: 1 },
    { code: 'Minus', label: '-', subLabel: '_', w: 1 },
    { code: 'Equal', label: '=', subLabel: '+', w: 1 },
    { code: 'Backspace', label: 'BACKSPACE', w: 2, isMod: true },
  ],
  // Row 2 (15u)
  [
    { code: 'Tab', label: 'TAB', w: 1.5, isMod: true },
    { code: 'KeyQ', label: 'Q', w: 1 },
    { code: 'KeyW', label: 'W', w: 1 },
    { code: 'KeyE', label: 'E', w: 1 },
    { code: 'KeyR', label: 'R', w: 1 },
    { code: 'KeyT', label: 'T', w: 1 },
    { code: 'KeyY', label: 'Y', w: 1 },
    { code: 'KeyU', label: 'U', w: 1 },
    { code: 'KeyI', label: 'I', w: 1 },
    { code: 'KeyO', label: 'O', w: 1 },
    { code: 'KeyP', label: 'P', w: 1 },
    { code: 'BracketLeft', label: '[', subLabel: '{', w: 1 },
    { code: 'BracketRight', label: ']', subLabel: '}', w: 1 },
    { code: 'Backslash', label: '\\', subLabel: '|', w: 1.5, isMod: true },
  ],
  // Row 3 (15u)
  [
    { code: 'CapsLock', label: 'CAPS', w: 1.75, isMod: true },
    { code: 'KeyA', label: 'A', w: 1 },
    { code: 'KeyS', label: 'S', w: 1 },
    { code: 'KeyD', label: 'D', w: 1 },
    { code: 'KeyF', label: 'F', w: 1, hasBump: true },
    { code: 'KeyG', label: 'G', w: 1 },
    { code: 'KeyH', label: 'H', w: 1 },
    { code: 'KeyJ', label: 'J', w: 1, hasBump: true },
    { code: 'KeyK', label: 'K', w: 1 },
    { code: 'KeyL', label: 'L', w: 1 },
    { code: 'Semicolon', label: ';', subLabel: ':', w: 1 },
    { code: 'Quote', label: "'", subLabel: '"', w: 1 },
    { code: 'Enter', label: 'ENTER', w: 2.25, isAccent: true },
  ],
  // Row 4 (15u)
  [
    { code: 'ShiftLeft', label: 'SHIFT', w: 2.25, isMod: true },
    { code: 'KeyZ', label: 'Z', w: 1 },
    { code: 'KeyX', label: 'X', w: 1 },
    { code: 'KeyC', label: 'C', w: 1 },
    { code: 'KeyV', label: 'V', w: 1 },
    { code: 'KeyB', label: 'B', w: 1 },
    { code: 'KeyN', label: 'N', w: 1 },
    { code: 'KeyM', label: 'M', w: 1 },
    { code: 'Comma', label: ',', subLabel: '<', w: 1 },
    { code: 'Period', label: '.', subLabel: '>', w: 1 },
    { code: 'Slash', label: '/', subLabel: '?', w: 1 },
    { code: 'ShiftRight', label: 'SHIFT', w: 2.75, isMod: true },
  ],
  // Row 5 (15u)
  [
    { code: 'ControlLeft', label: 'CTRL', w: 1.25, isMod: true },
    { code: 'MetaLeft', label: 'WIN', w: 1.25, isMod: true },
    { code: 'AltLeft', label: 'ALT', w: 1.25, isMod: true },
    { code: 'Space', label: 'SPACE', w: 6.25, isAccent: true },
    { code: 'AltRight', label: 'ALT', w: 1.25, isMod: true },
    { code: 'Fn', label: 'FN', w: 1.25, isMod: true },
    { code: 'ControlRight', label: 'CTRL', w: 1.5, isMod: true },
  ],
];

export function VirtualKeyboard() {
  const [activeCode, setActiveCode] = useState<string | null>(null);

  // Lightweight physical keyboard event listener with zero timer overhead
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setActiveCode(e.code);
    setTimeout(() => {
      setActiveCode((prev) => (prev === e.code ? null : prev));
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleKeyClick = (code: string) => {
    setActiveCode(code);
    setTimeout(() => {
      setActiveCode((prev) => (prev === code ? null : prev));
    }, 180);
  };

  // Pre-calculate SVG coordinates for all keys
  const layout = useMemo(() => {
    const coords: Array<{
      key: KeyDef;
      x: number;
      y: number;
      w: number;
      h: number;
    }> = [];

    const keyHeight = 36;
    let currentY = PADDING_Y;

    KEYBOARD_ROWS.forEach((row) => {
      let currentX = PADDING_X;
      row.forEach((key) => {
        const keyWidth = key.w * UNIT_PX + (key.w - 1) * GAP_PX;
        coords.push({
          key,
          x: currentX,
          y: currentY,
          w: keyWidth,
          h: keyHeight,
        });
        currentX += keyWidth + GAP_PX;
      });
      currentY += keyHeight + GAP_PX + 2;
    });

    return coords;
  }, []);

  const totalWidth = 15 * UNIT_PX + 14 * GAP_PX + PADDING_X * 2;
  const totalHeight = 5 * 36 + 4 * (GAP_PX + 2) + PADDING_Y * 2;

  return (
    <div className="bg-[var(--color-surface)] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl hover:border-[#ff8f6b]/30 transition-all">
      {/* Benchmark Header with Monkeytype Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ff8f6b]/10 border border-[#ff8f6b]/20 flex items-center justify-center text-[#ff8f6b] shrink-0">
            <Keyboard className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#ff9e7d] via-[#ffaa85] to-[#f9735b] bg-clip-text text-transparent animate-pulse font-display tracking-tight">
                Top 1% Fastest Typist in India
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5 font-mono">
              Interactive Mechanical Switches · Click any key or type on physical keyboard to test
            </p>
          </div>
        </div>

        {/* Clean Monkeytype Profile Direct Link */}
        <a
          href="https://monkeytype.com/profile/Anupam_Jha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff8f6b]/40 text-xs font-mono text-zinc-300 hover:text-[#ff8f6b] transition-all self-start sm:self-center hover:bg-[#ff8f6b]/10 group shadow-sm"
        >
          <span>Monkeytype Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#ff8f6b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Realistic Custom Mechanical Keyboard SVG */}
      <div className="relative w-full overflow-hidden rounded-xl bg-[#06080b] border border-white/10 p-2 sm:p-4 shadow-inner flex items-center justify-center">
        <svg
          viewBox={`0 0 ${totalWidth} ${totalHeight}`}
          className="w-full h-auto max-w-3xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] select-none"
          style={{ maxHeight: '340px' }}
        >
          <defs>
            {/* Peach switch underglow glow filter */}
            <filter id="switchGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Aluminum chassis gradient */}
            <linearGradient id="kbChassis" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#141820" />
              <stop offset="50%" stopColor="#0c0f14" />
              <stop offset="100%" stopColor="#07090c" />
            </linearGradient>

            {/* Brass plate gradient */}
            <linearGradient id="kbPlate" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e2530" />
              <stop offset="100%" stopColor="#11161f" />
            </linearGradient>

            {/* Alpha keycap gradient */}
            <linearGradient id="alphaCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#242b36" />
              <stop offset="100%" stopColor="#161a22" />
            </linearGradient>

            {/* Modifier keycap gradient */}
            <linearGradient id="modCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c222c" />
              <stop offset="100%" stopColor="#10141a" />
            </linearGradient>

            {/* Accent keycap gradient (Peach) */}
            <linearGradient id="accentCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d1e16" />
              <stop offset="100%" stopColor="#24100b" />
            </linearGradient>

            {/* Active pressed keycap gradient */}
            <linearGradient id="activeCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffa585" />
              <stop offset="100%" stopColor="#ff8f6b" />
            </linearGradient>
          </defs>

          {/* CNC Keyboard Case */}
          <rect
            x="3"
            y="3"
            width={totalWidth - 6}
            height={totalHeight - 6}
            rx="14"
            fill="url(#kbChassis)"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.5"
          />

          {/* Switch mounting plate */}
          <rect
            x={PADDING_X - 6}
            y={PADDING_Y - 6}
            width={totalWidth - (PADDING_X - 6) * 2}
            height={totalHeight - (PADDING_Y - 6) * 2}
            rx="8"
            fill="url(#kbPlate)"
            stroke="rgba(0, 0, 0, 0.5)"
            strokeWidth="1.5"
          />

          {/* Corner mounting screws */}
          {[
            { cx: 12, cy: 12 },
            { cx: totalWidth - 12, cy: 12 },
            { cx: 12, cy: totalHeight - 12 },
            { cx: totalWidth - 12, cy: totalHeight - 12 },
          ].map((screw, i) => (
            <g key={i}>
              <circle cx={screw.cx} cy={screw.cy} r="2.8" fill="#2d3748" stroke="#1a202c" strokeWidth="0.8" />
              <line x1={screw.cx - 1.5} y1={screw.cy} x2={screw.cx + 1.5} y2={screw.cy} stroke="#718096" strokeWidth="0.6" />
            </g>
          ))}

          {/* Mechanical Keycaps */}
          {layout.map(({ key, x, y, w, h }) => {
            const isPressed = activeCode === key.code;
            const pressOffsetY = isPressed ? 2.5 : 0;
            const topHeight = h - 5;

            return (
              <g
                key={key.code}
                onClick={() => handleKeyClick(key.code)}
                style={{ cursor: 'pointer' }}
              >
                {/* Switch underglow glow when pressed */}
                {isPressed && (
                  <rect
                    x={x - 2}
                    y={y - 2}
                    width={w + 4}
                    height={h + 4}
                    rx="6"
                    fill="rgba(255, 143, 107, 0.6)"
                    filter="url(#switchGlow)"
                  />
                )}

                {/* Base stem shadow */}
                <rect
                  x={x}
                  y={y + 3}
                  width={w}
                  height={h - 3}
                  rx="4"
                  fill={isPressed ? '#4a1d12' : '#080a0f'}
                />

                {/* Front skirt bevel */}
                <rect
                  x={x}
                  y={y + pressOffsetY + (topHeight - 3)}
                  width={w}
                  height={h - topHeight + 2}
                  rx="3"
                  fill={
                    isPressed
                      ? '#e06d48'
                      : key.isAccent
                      ? '#2b140e'
                      : key.isMod
                      ? '#0b0f14'
                      : '#10141a'
                  }
                />

                {/* Keycap top surface */}
                <rect
                  x={x + 1}
                  y={y + pressOffsetY}
                  width={w - 2}
                  height={topHeight}
                  rx="3"
                  fill={
                    isPressed
                      ? 'url(#activeCap)'
                      : key.isAccent
                      ? 'url(#accentCap)'
                      : key.isMod
                      ? 'url(#modCap)'
                      : 'url(#alphaCap)'
                  }
                  stroke={
                    isPressed
                      ? '#fed7aa'
                      : key.isAccent
                      ? 'rgba(255, 143, 107, 0.4)'
                      : 'rgba(255, 255, 255, 0.08)'
                  }
                  strokeWidth="0.8"
                />

                {/* Homing bump for touch typing (F and J) */}
                {key.hasBump && (
                  <line
                    x1={x + w / 2 - 3.5}
                    y1={y + pressOffsetY + topHeight - 4}
                    x2={x + w / 2 + 3.5}
                    y2={y + pressOffsetY + topHeight - 4}
                    stroke={isPressed ? '#2d1007' : '#ff8f6b'}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                )}

                {/* Sub-label */}
                {key.subLabel && (
                  <text
                    x={x + 5}
                    y={y + pressOffsetY + 10}
                    fontSize="7"
                    fontFamily="var(--font-mono)"
                    fontWeight="600"
                    fill={isPressed ? '#2d1007' : '#718096'}
                  >
                    {key.subLabel}
                  </text>
                )}

                {/* Primary Legend */}
                <text
                  x={key.w > 4 ? x + w / 2 : key.subLabel ? x + 5 : x + w / 2}
                  y={
                    key.subLabel
                      ? y + pressOffsetY + topHeight - 5
                      : y + pressOffsetY + topHeight / 2 + 3.5
                  }
                  textAnchor={key.subLabel ? 'start' : 'middle'}
                  fontSize={key.w > 4 ? '7.5' : key.label.length > 2 ? '6.8' : '9.5'}
                  fontFamily="var(--font-mono)"
                  fontWeight={isPressed ? '800' : '600'}
                  letterSpacing={key.w > 4 ? '0.12em' : 'normal'}
                  fill={
                    isPressed
                      ? '#1c0803'
                      : key.isAccent
                      ? '#ffa585'
                      : '#cbd5e1'
                  }
                >
                  {key.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tactile indicator footer */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)]">
        <div className="flex items-center gap-1.5 text-[#ff8f6b]">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Mechanical Switches</span>
        </div>
        <span>Click any key or type on physical keyboard to test</span>
      </div>
    </div>
  );
}
