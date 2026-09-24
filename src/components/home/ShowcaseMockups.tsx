'use client';

import { motion } from 'framer-motion';

/**
 * Pure SVG Pixel Minecraft Diamond Sword
 */
export function MinecraftSwordSVG({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blade Tip & Edge (Cyan Diamond) */}
      <rect x="14" y="0" width="2" height="2" fill="#55FFFF" />
      <rect x="12" y="0" width="2" height="2" fill="#00AAAA" />
      <rect x="14" y="2" width="2" height="2" fill="#00AAAA" />
      
      <rect x="11" y="2" width="2" height="2" fill="#55FFFF" />
      <rect x="13" y="2" width="2" height="2" fill="#00AAAA" />
      <rect x="12" y="3" width="2" height="2" fill="#55FFFF" />

      <rect x="9" y="4" width="2" height="2" fill="#55FFFF" />
      <rect x="10" y="4" width="2" height="2" fill="#00AAAA" />
      <rect x="8" y="5" width="2" height="2" fill="#00AAAA" />
      <rect x="9" y="6" width="2" height="2" fill="#55FFFF" />

      <rect x="7" y="6" width="2" height="2" fill="#55FFFF" />
      <rect x="8" y="6" width="2" height="2" fill="#00AAAA" />
      <rect x="6" y="7" width="2" height="2" fill="#00AAAA" />
      <rect x="7" y="8" width="2" height="2" fill="#55FFFF" />

      <rect x="5" y="8" width="2" height="2" fill="#55FFFF" />
      <rect x="6" y="8" width="2" height="2" fill="#00AAAA" />
      <rect x="4" y="9" width="2" height="2" fill="#00AAAA" />

      {/* Guard (Gold & Dark Wood) */}
      <rect x="3" y="9" width="2" height="2" fill="#FFAA00" />
      <rect x="6" y="9" width="2" height="2" fill="#FFAA00" />
      <rect x="5" y="10" width="2" height="2" fill="#55FFFF" />
      <rect x="7" y="10" width="2" height="2" fill="#855325" />
      <rect x="2" y="10" width="2" height="2" fill="#855325" />
      <rect x="4" y="10" width="2" height="2" fill="#FFAA00" />

      {/* Handle (Dark Wood) */}
      <rect x="3" y="11" width="2" height="2" fill="#553315" />
      <rect x="2" y="12" width="2" height="2" fill="#855325" />
      <rect x="1" y="13" width="2" height="2" fill="#553315" />

      {/* Pommel */}
      <rect x="0" y="14" width="2" height="2" fill="#855325" />
      <rect x="0" y="15" width="2" height="2" fill="#331A05" />
      <rect x="1" y="14" width="2" height="2" fill="#FFAA00" />
    </svg>
  );
}

/**
 * Pure SVG GTA 5 "Five" Emblem
 */
export function GTA5EmblemSVG({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gtaVGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B4D2E" />
          <stop offset="50%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B4D2E" />
        </linearGradient>
      </defs>
      {/* Outer subtle shield */}
      <rect x="5" y="5" width="90" height="90" rx="18" fill="#0C1017" stroke="#1E2838" strokeWidth="3" />
      {/* Roman Numeral V */}
      <path
        d="M 22 24 L 38 24 L 50 64 L 62 24 L 78 24 L 58 80 L 42 80 Z"
        fill="url(#gtaVGrad)"
        stroke="#E6EAF0"
        strokeWidth="2.5"
      />
      {/* Five Ribbon Banner across V */}
      <rect x="14" y="46" width="72" height="15" rx="3" fill="#0B0D11" stroke="#2E7D32" strokeWidth="1.5" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#5EEAA0"
        fontSize="11"
        fontWeight="bold"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        FIVE
      </text>
    </svg>
  );
}

/**
 * Pure SVG Realistic Laptop Mockup
 */
export function LaptopMockup() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[340px] select-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
      {/* Laptop Screen Upper Shell */}
      <div className="bg-[#151922] border border-[#2A3142] rounded-t-xl pt-2.5 px-2.5 pb-1">
        {/* Camera Dot */}
        <div className="flex justify-center mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#090A0E] border border-white/20" />
        </div>
        {/* Screen Display */}
        <div className="bg-[#090B10] border border-white/5 rounded-lg p-3 font-mono text-[9px] sm:text-[10px] text-[#8B95A5] overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
              <div className="w-2 h-2 rounded-full bg-[#10B981]/80" />
            </div>
            <span className="text-[8px] text-[#586274]">anupam@engine:~$</span>
          </div>
          {/* Terminal / Code Content */}
          <div className="space-y-1">
            <p className="text-[#5EEAA0] flex items-center gap-1">
              <span>$</span>
              <span className="text-[#F0F3F8]">anupam.deploy</span>
              <span className="text-[#8B95A5]">--target=prod</span>
            </p>
            <p className="text-[#38BDF8]">✓ Kotlin Core Engine compiled</p>
            <p className="text-[#38BDF8]">✓ Modrinth API synced (109k+ dl)</p>
            <p className="text-[#5EEAA0]">● Server active: 0ms latency</p>
          </div>
        </div>
      </div>
      {/* Laptop Base / Keyboard deck */}
      <div className="relative h-3 bg-[#232836] rounded-b-lg border-t border-[#3A4358] flex justify-center">
        <div className="w-16 h-1 bg-[#151821] rounded-b-sm" />
      </div>
    </div>
  );
}

/**
 * Pure SVG Realistic Smartphone / Android Mockup
 */
export function PhoneMockup() {
  return (
    <div className="relative w-[130px] sm:w-[150px] select-none filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)]">
      {/* Phone Body */}
      <div className="bg-[#12151D] border-2 border-[#2A3142] rounded-[24px] p-2 relative shadow-inner">
        {/* Dynamic Island / Punch Hole */}
        <div className="flex justify-center mb-1.5">
          <div className="w-8 h-2.5 rounded-full bg-[#090A0E] flex items-center justify-end pr-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1E293B]" />
          </div>
        </div>
        {/* OLED Screen */}
        <div className="bg-[#090B0F] border border-white/5 rounded-[18px] p-2.5 font-mono text-[8px] sm:text-[9px] text-[#9AA4B2] space-y-2">
          {/* Status bar */}
          <div className="flex justify-between items-center text-[7px] text-[#586274]">
            <span>12:00</span>
            <span className="text-[#5EEAA0]">5G ● 100%</span>
          </div>
          {/* Native App Card */}
          <div className="bg-[#171B26] border border-[#2A3142] rounded-xl p-2 space-y-1">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="font-bold text-[#F0F3F8] text-[8px]">Kotlin Native</span>
            </div>
            <p className="text-[7.5px] text-[#8B95A5]">Android Systems App</p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#10B981] w-[88%]" />
            </div>
          </div>
          {/* Game Badge */}
          <div className="bg-[#171B26] border border-[#2A3142] rounded-xl p-1.5 flex items-center gap-1.5">
            <MinecraftSwordSVG className="w-4 h-4 shrink-0" />
            <div className="overflow-hidden">
              <p className="text-[7.5px] font-bold text-[#5EEAA0] truncate">Minecraft Mod</p>
              <p className="text-[6.5px] text-[#586274]">Active Engine</p>
            </div>
          </div>
        </div>
        {/* Bottom Gesture Bar */}
        <div className="flex justify-center mt-2">
          <div className="w-10 h-0.5 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

/**
 * Combined Showcase Mockups Component:
 * Features Small Square Profile Icon Frame + Laptop & Phone Mockups + Game SVGs
 */
export function ShowcaseHeroDeck() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Devices & Avatar Container */}
      <div className="relative flex items-center justify-center w-full max-w-[440px]">
        {/* Laptop Mockup (Centered Base) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-10"
        >
          <LaptopMockup />
        </motion.div>

        {/* Smartphone Mockup (Overlapping right) */}
        <motion.div
          initial={{ opacity: 0, x: 25, y: 15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute -right-4 -bottom-4 sm:-right-8 sm:-bottom-6 z-20"
        >
          <PhoneMockup />
        </motion.div>

        {/* Small Square Icon Frame (Floating top left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute -top-6 -left-3 sm:-top-8 sm:-left-6 z-30"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#111319] border-2 border-[#1E232F] shadow-2xl p-1.5 relative group hover:border-[#10B981]/50 transition-colors">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://github.com/AnupamBuilds.png"
                alt="Anupam Jha"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/profile.jpg";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Online Status Beacon */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#090A0E] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Floating Game Badges */}
        {/* Minecraft Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
          className="absolute -top-7 right-4 sm:right-8 z-30 px-3 py-1.5 rounded-xl bg-[#111319]/90 border border-[#1E232F] backdrop-blur-md flex items-center gap-2 shadow-xl"
        >
          <MinecraftSwordSVG className="w-4 h-4" />
          <span className="text-[10px] font-mono font-bold text-[#5EEAA0]">Minecraft</span>
        </motion.div>

        {/* GTA 5 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 0.4 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
          }}
          className="absolute -bottom-8 left-4 sm:left-6 z-30 px-3 py-1.5 rounded-xl bg-[#111319]/90 border border-[#1E232F] backdrop-blur-md flex items-center gap-2 shadow-xl"
        >
          <GTA5EmblemSVG className="w-4 h-4" />
          <span className="text-[10px] font-mono font-bold text-[#E6EAF0]">GTA 5</span>
        </motion.div>
      </div>
    </div>
  );
}
