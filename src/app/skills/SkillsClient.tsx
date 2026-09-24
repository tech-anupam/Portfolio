'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '@/config/skills';
import { TechIcon } from '@/components/skills/TechIcon';

export default function SkillsClient() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 sm:pt-36 pb-28">
      {/* Header matching editorial reference layout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-14 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F0F3F8] font-display leading-[1.08] uppercase">
          Tech Stack <br />
          <span className="text-[#10B981]">I work with.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#8B95A5] max-w-xl font-sans mt-4 leading-relaxed">
          Specialized languages, AI agentic frameworks, distributed databases, cloud systems, and creative toolkits.
        </p>
      </motion.div>

      {/* Clean Editorial Table / Row Layout (Screenshot Style) */}
      <div className="divide-y divide-[#1E2837] border-y border-[#1E2837]">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-6 py-7 sm:py-8 items-start group"
          >
            {/* Category Title Column */}
            <div className="flex items-center gap-2.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover:shadow-[0_0_8px_#10B981] transition-shadow shrink-0" />
              <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.14em] text-[#9AA5B6] group-hover:text-[#F0F3F8] transition-colors">
                {group.title}
              </h2>
            </div>

            {/* Horizontal Items Row: Rectangular Button-like Chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] bg-[#101620] hover:bg-[#16202C] border border-[#1F2B3B] hover:border-[#10B981]/60 text-[#E2E8F0] hover:text-[#5EEAA0] transition-all text-xs font-mono font-medium shadow-sm select-none cursor-default"
                >
                  <TechIcon name={item.name} className="w-3.5 h-3.5 text-[#5EEAA0] shrink-0" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
