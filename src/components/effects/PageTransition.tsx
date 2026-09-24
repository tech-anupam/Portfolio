'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KatanaArtwork } from '@/components/katana/KatanaSVG';

const TRANSITION_SHARD_COUNT = 18;

interface ShardData {
  id: number;
  y: number;
  dx: number;
  dy: number;
  rot: number;
  w: number;
  h: number;
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionKey, setTransitionKey] = useState(pathname);
  const firstRender = useRef(true);

  // Shards computed deterministically
  const shards: ShardData[] = useMemo(() => {
    return Array.from({ length: TRANSITION_SHARD_COUNT }, (_, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      const angle = (i / TRANSITION_SHARD_COUNT) * Math.PI;
      const dist = 140 + (i % 5) * 45;
      return {
        id: i,
        y: 12 + (i / TRANSITION_SHARD_COUNT) * 76,
        dx: side * (dist * Math.sin(angle) + 40),
        dy: (dist * Math.cos(angle) * 0.5) + 80,
        rot: side * (180 + i * 40),
        w: 10 + (i % 3) * 6,
        h: 16 + (i % 4) * 8,
      };
    });
  }, []);

  useEffect(() => {
    // Skip on the very first mount so we don't double up with the splash loader
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (pathname !== transitionKey) {
      setTransitionKey(pathname);
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 550);

      return () => clearTimeout(timer);
    }
  }, [pathname, transitionKey]);

  return (
    <>
      {/* Cinematic Screen Tear Overlay on Route Change */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={`tear-${transitionKey}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.38 }}
            className="fixed inset-0 z-[150] pointer-events-none overflow-hidden select-none"
            aria-hidden="true"
          >
            {/* Stage Shudder */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [-10, 8, -5, 3, 0],
                y: [7, -5, 3, -1, 0],
              }}
              transition={{ duration: 0.28, ease: 'linear' }}
              className="absolute inset-0"
            >
              {/* Left Panel A - Jagged Katana Facet Edge */}
              <motion.div
                initial={{ x: 0, y: 0, rotate: 0 }}
                animate={{
                  x: ['0vw', '-2vw', '-105vw'],
                  y: ['0vh', '1vh', '35vh'],
                  rotate: [0, -1, -8],
                }}
                transition={{
                  duration: 0.48,
                  times: [0, 0.12, 1],
                  ease: [0.32, 0, 0.67, 0],
                }}
                style={{
                  clipPath:
                    'polygon(0 0, 50.8% 0, 51.4% 18%, 50.2% 34%, 51.6% 52%, 50.3% 70%, 51.3% 86%, 50.8% 100%, 0 100%)',
                }}
                className="absolute inset-0 bg-[#090A0E] border-r border-[#1E232F] z-10"
              >
                <div className="absolute inset-0 bg-radial-gradient from-[#11141C] via-[#090A0E] to-black opacity-95" />
              </motion.div>

              {/* Right Panel B - Complementary Jagged Edge */}
              <motion.div
                initial={{ x: 0, y: 0, rotate: 0 }}
                animate={{
                  x: ['0vw', '2vw', '105vw'],
                  y: ['0vh', '1vh', '42vh'],
                  rotate: [0, 1, 8],
                }}
                transition={{
                  duration: 0.48,
                  times: [0, 0.12, 1],
                  ease: [0.32, 0, 0.67, 0],
                }}
                style={{
                  clipPath:
                    'polygon(100% 0, 50% 0, 50.6% 18%, 49.4% 34%, 50.8% 52%, 49.5% 70%, 50.5% 86%, 50% 100%, 100% 100%)',
                }}
                className="absolute inset-0 bg-[#090A0E] border-l border-[#1E232F] z-10"
              >
                <div className="absolute inset-0 bg-radial-gradient from-[#11141C] via-[#090A0E] to-black opacity-95" />
              </motion.div>

              {/* Katana Strike Flash down the split seam */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{
                  opacity: [0, 1, 0.9, 0],
                  scaleY: [0, 1.2, 1, 0],
                }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="absolute top-0 left-[50.4%] -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#5EEAA0] via-white to-transparent shadow-[0_0_20px_#10B981] z-20"
              />

              {/* Dark Glass Shards Bursting Sideways */}
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
                      scale: 0.4,
                    }}
                    transition={{ duration: 0.44, ease: 'easeOut' }}
                    style={{
                      width: s.w,
                      height: s.h,
                      clipPath: 'polygon(50% 0, 100% 55%, 62% 100%, 0 72%)',
                    }}
                    className="absolute bg-gradient-to-br from-[#1E2430] via-[#121620] to-[#090A0E] border border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                  />
                ))}
              </div>

              {/* Katana Blade Motion & Strike Action Slicing Down the Seam */}
              <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
                <motion.div
                  initial={{ y: '-75vh', rotate: 135, scale: 1.25, opacity: 0 }}
                  animate={{
                    y: ['-75vh', '-8vh', '95vh', '115vh'],
                    rotate: [135, 136, 138, 138],
                    scale: [1.25, 1.32, 1.38, 1.38],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    times: [0, 0.22, 0.72, 1],
                    ease: [0.16, 0.9, 0.22, 1],
                  }}
                  className="relative w-[480px] sm:w-[580px] h-[480px] sm:h-[580px] flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
                >
                  <KatanaArtwork idSuffix={`trans-${transitionKey.replace(/[^a-zA-Z0-9]/g, '-')}`} gleam={true} className="w-full h-full" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
