'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 10 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40 p-2.5 rounded-full bg-[#0E131C]/92 backdrop-blur-md border border-[#1E2738] text-[#9AA4B2] hover:text-[#5EEAA0] hover:border-[#10B981]/50 shadow-[0_8px_24px_rgba(0,0,0,0.65)] hover:shadow-[0_0_16px_rgba(16,185,129,0.35)] transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.2]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
