'use client';

import { useEffect, useRef } from 'react';

interface TrailPetal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  vAngle: number;
  color: string;
  alpha: number;
  decay: number;
  swayPhase: number;
  swaySpeed: number;
}

const PETAL_COLORS = [
  'rgba(16, 185, 129, ',  // Emerald
  'rgba(94, 234, 160, ',  // Mint
  'rgba(244, 114, 182, ', // Sakura Pink
  'rgba(217, 70, 239, ',  // Lavender
  'rgba(241, 245, 249, ', // Pearl
];

export default function PetalCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<TrailPetal[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const spawnPetal = (x: number, y: number) => {
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const size = 5 + Math.random() * 6;
      petalsRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.8,
        vy: 0.8 + Math.random() * 1.5,
        size,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.08,
        color,
        alpha: 0.75 + Math.random() * 0.25,
        decay: 0.015 + Math.random() * 0.012,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.04 + Math.random() * 0.04,
      });

      if (petalsRef.current.length > 40) {
        petalsRef.current.shift();
      }

      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX: number;
      let clientY: number;

      if ('touches' in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (lastPosRef.current) {
        const dx = clientX - lastPosRef.current.x;
        const dy = clientY - lastPosRef.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 18) {
          spawnPetal(clientX, clientY);
          lastPosRef.current = { x: clientX, y: clientY };
        }
      } else {
        lastPosRef.current = { x: clientX, y: clientY };
        spawnPetal(clientX, clientY);
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const remaining: TrailPetal[] = [];

      for (let i = 0; i < petalsRef.current.length; i++) {
        const p = petalsRef.current[i];
        p.swayPhase += p.swaySpeed;
        p.x += p.vx + Math.sin(p.swayPhase) * 0.7;
        p.y += p.vy;
        p.angle += p.vAngle;
        p.alpha -= p.decay;

        if (p.alpha > 0.02 && p.y < canvas.height + 20) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;

          // Realistic Organic Curved Petal Path
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(
            p.size * 0.75,
            -p.size * 0.5,
            p.size * 0.75,
            p.size * 0.6,
            0,
            p.size
          );
          ctx.bezierCurveTo(
            -p.size * 0.75,
            p.size * 0.6,
            -p.size * 0.75,
            -p.size * 0.5,
            0,
            -p.size
          );
          ctx.closePath();
          ctx.fill();

          ctx.restore();
          remaining.push(p);
        }
      }

      petalsRef.current = remaining;

      if (remaining.length > 0) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        animFrameRef.current = null;
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[40] select-none"
      aria-hidden="true"
    />
  );
}
