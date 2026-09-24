'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  size: number;
  opacity: number;
  color: string;
  type: 'petal' | 'leaf';
  duration: number;
  delay: number;
  swayAmplitude: number;
  swayDuration: number;
  rotationInit: number;
  rotationDuration: number;
}

const COLORS = ['#5EEAA0', '#10B981', '#E2E8F0', '#CBD5E1', '#6EE7B7'];
const PARTICLE_COUNT = 16;

export default function FallingPetals() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      x: (i * (100 / PARTICLE_COUNT) + Math.random() * 5) % 100,
      size: 6 + Math.random() * 8,
      opacity: 0.18 + Math.random() * 0.22,
      color: COLORS[i % COLORS.length],
      type: i % 3 === 0 ? 'leaf' : 'petal',
      duration: 14 + Math.random() * 12,
      delay: -(Math.random() * 20),
      swayAmplitude: 14 + Math.random() * 22,
      swayDuration: 3.5 + Math.random() * 3,
      rotationInit: Math.random() * 360,
      rotationDuration: 6 + Math.random() * 8,
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden select-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0 left-0"
          initial={{ x: `${p.x}vw`, y: '-8vh' }}
          animate={{ y: ['-8vh', '108vh'] }}
          transition={{
            y: {
              duration: p.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: p.delay,
            },
          }}
        >
          <motion.div
            initial={{ rotate: p.rotationInit, opacity: p.opacity }}
            animate={{
              x: [-p.swayAmplitude, p.swayAmplitude, -p.swayAmplitude],
              rotate: [p.rotationInit, p.rotationInit + (p.id % 2 === 0 ? 360 : -360)],
            }}
            transition={{
              x: {
                duration: p.swayDuration,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              rotate: {
                duration: p.rotationDuration,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{ width: p.size, height: p.size * (p.type === 'leaf' ? 1.8 : 1.3) }}
          >
            {p.type === 'petal' ? (
              <svg viewBox="0 0 30 40" fill={p.color} className="w-full h-full filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                <path d="M15 0 C15 0, 0 12, 0 26 C0 35, 12 39, 15 39 C18 39, 30 35, 30 26 C30 12, 15 0, 15 0 Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 45" fill={p.color} className="w-full h-full filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                <path d="M10 0 C3 12, 0 24, 5 36 C7 41, 10 45, 10 45 C10 45, 13 41, 15 36 C20 24, 17 12, 10 0 Z" />
              </svg>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
