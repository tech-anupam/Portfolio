'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DogState = 'trot' | 'pause';
type DogDirection = 1 | -1;

const BARK_PHRASES = ['woof! ♥', 'bork! ♥', 'ruff! ♥', 'wag~ ♥'];

export function NavbarDog() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [posX, setPosX] = useState(80);
  const [targetX, setTargetX] = useState(80);
  const [direction, setDirection] = useState<DogDirection>(1);
  const [state, setState] = useState<DogState>('trot');
  const [bark, setBark] = useState<string | null>(null);

  const dirRef = useRef<DogDirection>(1);
  const posRef = useRef(80);
  const isInteracting = useRef(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    let timer: ReturnType<typeof setTimeout>;

    const patrol = () => {
      if (isInteracting.current) {
        timer = setTimeout(patrol, 2000);
        return;
      }

      const roll = Math.random();

      if (roll < 0.65) {
        setState('trot');
        const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const minX = 160;
        const maxX = Math.max(minX + 80, Math.min(width - 280, 520));
        const step = (60 + Math.random() * 90) * dirRef.current;
        let nextX = posRef.current + step;

        if (nextX >= maxX) {
          nextX = maxX;
          dirRef.current = -1;
        } else if (nextX <= minX) {
          nextX = minX;
          dirRef.current = 1;
        }

        if (nextX !== posRef.current) {
          setDirection(nextX > posRef.current ? 1 : -1);
        }

        posRef.current = nextX;
        setTargetX(nextX);
        timer = setTimeout(patrol, 3000 + Math.random() * 800);
      } else {
        setState('pause');
        timer = setTimeout(() => {
          if (Math.random() < 0.5) {
            const newDir: DogDirection = dirRef.current === 1 ? -1 : 1;
            dirRef.current = newDir;
            setDirection(newDir);
          }
          patrol();
        }, 2200 + Math.random() * 1000);
      }
    };

    timer = setTimeout(patrol, 1200);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleDogClick = () => {
    isInteracting.current = true;
    const phrase = BARK_PHRASES[Math.floor(Math.random() * BARK_PHRASES.length)];
    setBark(phrase);

    setTimeout(() => {
      setBark(null);
      isInteracting.current = false;
    }, 2200);
  };

  if (!mounted || isMobile) return null;

  return (
    <div
      className="nav-dog-container hidden md:block z-[5]"
      style={{
        left: `${targetX}px`,
        transition: state === 'trot' ? 'left 3s linear' : 'left 0.4s ease-out',
      }}
      onClick={handleDogClick}
    >
      <AnimatePresence>
        {bark && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.6 }}
            animate={{ opacity: 1, y: -26, scale: 1 }}
            exit={{ opacity: 0, y: -34, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#11141C] border border-[#10B981]/50 shadow-xl text-[10px] font-mono text-[#5EEAA0] whitespace-nowrap flex items-center gap-1 z-50 pointer-events-none select-none"
          >
            <span>{bark}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="dog-sprite"
        style={{
          transform: `scaleX(${direction === 1 ? -1 : 1})`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <picture>
          <source srcSet="/anime-dog.webp" type="image/webp" />
          <img
            src="/anime-dog.gif"
            alt="Companion Dog"
            width={52}
            height={41}
            className="w-[50px] h-auto select-none pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
}
