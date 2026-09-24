'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KatanaArtwork } from '@/components/katana/KatanaSVG';

const SHARD_COUNT = 24;

interface Shard {
  id: number;
  y: number;
  dx: number;
  dy: number;
  rot: number;
  w: number;
  h: number;
}

export default function SplashScreen() {
  const [stage, setStage] = useState<'idle' | 'loading' | 'chamber' | 'strike' | 'split' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  const skipIntro = useCallback(() => {
    setStage('done');
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('anupam_intro_played', 'true');
    }
  }, []);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') skipIntro();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [skipIntro]);

  // Orchestrate sequence
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('done');
      return;
    }

    if (sessionStorage.getItem('anupam_intro_played') === 'true') {
      setStage('done');
      return;
    }

    setStage('loading');

    // 1. Progress count up smoothly to 88%
    let start = 0;
    const countDuration = 1800;
    let animId: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(Math.floor((elapsed / countDuration) * 88), 88);
      setProgress(pct);
      if (elapsed < countDuration) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);

    // 2. Chamber katana wind-up
    const tChamber = setTimeout(() => {
      setStage('chamber');
      setProgress(94);
    }, 1900);

    // 3. Fast vertical chop down
    const tStrike = setTimeout(() => {
      setStage('strike');
      setProgress(100);
    }, 2450);

    // 4. Split screen into halves & shatter
    const tSplit = setTimeout(() => {
      setStage('split');
    }, 2650);

    // 5. Done and unmount
    const tDone = setTimeout(() => {
      setStage('done');
      sessionStorage.setItem('anupam_intro_played', 'true');
    }, 3800);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(tChamber);
      clearTimeout(tStrike);
      clearTimeout(tSplit);
      clearTimeout(tDone);
    };
  }, [skipIntro]);

  // Deterministic glass shards bursting sideways
  const shards: Shard[] = useMemo(() => {
    return Array.from({ length: SHARD_COUNT }, (_, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      const angle = (i / SHARD_COUNT) * Math.PI;
      const dist = 160 + (i % 6) * 55;
      return {
        id: i,
        y: 10 + (i / SHARD_COUNT) * 80,
        dx: side * (dist * Math.sin(angle) + 50),
        dy: (dist * Math.cos(angle) * 0.4) + 100,
        rot: side * (200 + i * 35),
        w: 10 + (i % 4) * 8,
        h: 18 + (i % 3) * 12,
      };
    });
  }, []);

  if (stage === 'idle' || stage === 'done') return null;

  return (
    <div
      onClick={skipIntro}
      className="fixed inset-0 z-[9999] overflow-hidden select-none bg-transparent cursor-pointer"
      aria-label="Click or press Escape to skip intro"
    >
      {/* Background Seal: Hides the clip hairline pre-cut, dies immediately on cut frame */}
      <motion.div
        animate={stage === 'split' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.12 }}
        className="absolute inset-0 bg-[#090A0E] z-0"
      />

      {/* Skip Button */}
      <div className="absolute top-5 right-5 z-50 pointer-events-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            skipIntro();
          }}
          className="px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 text-[11px] font-mono text-[#9AA4B2] hover:text-[#5EEAA0] hover:border-[#10B981]/50 transition-colors backdrop-blur-md"
        >
          SKIP [ESC]
        </button>
      </div>

      {/* Stage Container with Screen Shake / Shudder on cut */}
      <motion.div
        animate={
          stage === 'strike' || stage === 'split'
            ? {
                x: [-12, 9, -6, 3, 0],
                y: [8, -6, 4, -2, 0],
              }
            : { x: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: 'linear' }}
        className="absolute inset-0 z-10"
      >
        {/* Left Panel A - Jagged Katana Facet Edge */}
        <motion.div
          animate={
            stage === 'split'
              ? {
                  x: ['0vw', '-2vw', '-110vw'],
                  y: ['0vh', '1vh', '48vh'],
                  rotate: [0, -1, -10],
                }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{
            duration: 0.82,
            times: [0, 0.08, 1],
            ease: [0.32, 0, 0.67, 0],
          }}
          style={{
            clipPath:
              'polygon(0 0, 50.8% 0, 51.4% 18%, 50.2% 34%, 51.6% 52%, 50.3% 70%, 51.3% 86%, 50.8% 100%, 0 100%)',
          }}
          className="absolute inset-0 bg-[#0B0D12] border-r border-[#1E232F] z-10 flex flex-col justify-between"
        >
          <SplashPanelContent progress={progress} />
        </motion.div>

        {/* Right Panel B - Complementary Jagged Edge */}
        <motion.div
          animate={
            stage === 'split'
              ? {
                  x: ['0vw', '2vw', '110vw'],
                  y: ['0vh', '1vh', '54vh'],
                  rotate: [0, 1, 10],
                }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{
            duration: 0.82,
            times: [0, 0.08, 1],
            ease: [0.32, 0, 0.67, 0],
          }}
          style={{
            clipPath:
              'polygon(100% 0, 50% 0, 50.6% 18%, 49.4% 34%, 50.8% 52%, 49.5% 70%, 50.5% 86%, 50% 100%, 100% 100%)',
          }}
          className="absolute inset-0 bg-[#0B0D12] border-l border-[#1E232F] z-10 flex flex-col justify-between"
        >
          <SplashPanelContent progress={progress} />
        </motion.div>

        {/* Glass Shards Bursting on Split */}
        {stage === 'split' && (
          <div className="absolute inset-0 z-30 pointer-events-none">
            {shards.map((s) => (
              <motion.div
                key={s.id}
                initial={{
                  left: '50.4%',
                  top: `${s.y}%`,
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                animate={{
                  x: s.dx,
                  y: s.dy,
                  rotate: s.rot,
                  opacity: [1, 0.9, 0],
                  scale: 0.35,
                }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                style={{
                  width: s.w,
                  height: s.h,
                  clipPath: 'polygon(50% 0, 100% 55%, 62% 100%, 0 72%)',
                }}
                className="absolute bg-gradient-to-br from-[#1E2430] via-[#121620] to-[#090A0E] border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.85)]"
              />
            ))}
          </div>
        )}

        {/* Katana Blade Motion & Strike Action */}
        <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
          {/* Strike Flash Line */}
          {stage === 'strike' && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 0.8, 0], scaleY: [0, 1.3, 1.1, 0] }}
              transition={{ duration: 0.24 }}
              className="absolute left-[50.4%] -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#5EEAA0] via-white to-transparent shadow-[0_0_24px_#10B981]"
            />
          )}

          {/* Katana Blade Motion */}
          <motion.div
            initial={{ y: '-75vh', rotate: 135, scale: 1.25, opacity: 0 }}
            animate={
              stage === 'loading'
                ? { y: '-10vh', rotate: 135, scale: 1.25, opacity: 1 }
                : stage === 'chamber'
                ? { y: '-18vh', rotate: 136, scale: 1.32, opacity: 1 }
                : stage === 'strike'
                ? { y: '90vh', rotate: 138, scale: 1.38, opacity: 1 }
                : { y: '115vh', opacity: 0 }
            }
            transition={
              stage === 'loading'
                ? { duration: 0.65, ease: [0.16, 0.9, 0.22, 1] }
                : stage === 'chamber'
                ? { duration: 0.45, ease: 'easeOut' }
                : stage === 'strike'
                ? { duration: 0.2, ease: 'easeIn' }
                : { duration: 0.28 }
            }
            className="relative w-[480px] sm:w-[580px] h-[480px] sm:h-[580px] flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            <KatanaArtwork idSuffix="splash" gleam={stage === 'chamber' || stage === 'strike'} className="w-full h-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* Elegant matte dark splash content */
function SplashPanelContent({ progress }: { progress: number }) {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center relative overflow-hidden select-none p-6">
      {/* Background vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Monogram / Top Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#5EEAA0] font-semibold">
            SYSTEM INITIALIZATION
          </span>
        </div>

        {/* Big Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F0F3F8] font-display leading-[0.95] mb-4">
          ANUPAM JHA
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#9AA4B2] font-sans tracking-wide mb-8">
          Software Engineer
          <span className="block text-xs font-mono text-[#586274] mt-1">New Delhi, India</span>
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-48 sm:w-64">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#5EEAA0] transition-all duration-150 shadow-[0_0_10px_#10B981]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-[#586274]">
            <span className="text-[#9AA4B2]">Loading modules</span>
            <span className="text-[#5EEAA0] font-bold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom corner mark */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-[#586274]">
        <span>AJ // 2026</span>
        <span>KATANA READY //</span>
      </div>
    </div>
  );
}
