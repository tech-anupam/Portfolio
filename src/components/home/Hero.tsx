'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HeroBackground } from './HeroBackground';


const ROTATING_TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Android Builder",
  "AI Systems Architect",
  "Problem Solver",
  "Open Source Contributor",
];

const RevealText = ({
  text,
  delay,
  finalColorHex,
  className,
}: {
  text: string;
  delay: number;
  finalColorHex: string;
  className?: string;
}) => {
  return (
    <span className={`inline-block ${className || ''}`}>
      {text.split('').map((char, i) => {
        if (char === ' ') {
          return <span key={i} className="inline-block" style={{ width: '0.3em' }}> </span>;
        }
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, color: '#10B981' }}
            animate={{ opacity: 1, color: finalColorHex }}
            transition={{
              opacity: { duration: 0.01, delay: delay + i * 0.035 },
              color: { duration: 0.6, delay: delay + i * 0.035 + 0.12, ease: 'easeOut' },
            }}
            className="inline-block"
            style={{ whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTitles = useCallback(() => {
    setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let intervalId: ReturnType<typeof setInterval>;
    const startDelay = setTimeout(() => {
      intervalId = setInterval(cycleTitles, 2800);
    }, 3500);
    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [mounted, cycleTitles]);

  if (!mounted) return <section className="min-h-[85vh]" />;

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-16 sm:pt-20 pb-12 overflow-hidden">
      <HeroBackground />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="relative group shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-br from-[#10B981]/40 via-[#1E232F] to-[#090A0E] shadow-[0_0_24px_rgba(16,185,129,0.15)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111319] relative">
                {!imgError ? (
                  <picture>
                    <source srcSet="/profile.webp" type="image/webp" />
                    <img
                      src="/profile.png"
                      alt="Anupam Jha"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </picture>
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-lg text-[#5EEAA0] bg-[#12151D]">
                    AJ
                  </div>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#090A0E] flex items-center justify-center border-2 border-[#090A0E]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            </div>
          </div>
        </motion.div>

        <div className="mb-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F0F3F8] font-display leading-[1.08] break-words">
            <RevealText text="Anupam Jha" delay={0.25} finalColorHex="#F0F3F8" />
          </h1>
        </div>

        <div className="min-h-[2.5rem] sm:min-h-[3.25rem] mt-2 mb-5 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#10B981] font-display leading-tight"
            >
              {ROTATING_TITLES[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-base sm:text-lg text-[#9AA4B2] max-w-2xl mb-8 leading-relaxed font-sans"
        >
          I am a software engineer focused on building performant and scalable systems. My experience spans backend architecture, frontend interfaces, and machine learning integrations. Based in New Delhi, I build modern web platforms, Minecraft mods, Android applications, and developer tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#F0F3F8] hover:bg-[#10B981] text-[#090A0E] hover:text-black font-semibold rounded-full px-7 py-3.5 transition-all shadow-md text-sm font-sans"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2.5 bg-[#0D1017] hover:bg-[#10B981]/15 border border-[#10B981]/40 hover:border-[#10B981] text-[#F0F3F8] hover:text-[#5EEAA0] font-medium rounded-full px-7 py-3.5 transition-all text-sm font-sans shadow-sm hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
            <span>Hire Me</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 2.0, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2.0 },
        }}
      >
        <ChevronDown className="w-4 h-4 text-[#586274]" />
      </motion.div>
    </section>
  );
}
