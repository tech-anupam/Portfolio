"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import { bio } from "@/config/about";
import { siteConfig } from "@/config/site";
import { RectButton } from "@/components/ui/RectButton";
import { PaymentSupportCard } from "@/components/ui/PaymentBadges";




const ROTATING_TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Android Builder",
  "AI Systems Architect",
  "Problem Solver",
  "Open Source Contributor",
];

const milestones = [
  "Adxmedia MNC Technical Screening Cleared",
  "Founded & Hosted AnupamStudios",
  "Top 1% Fastest Typist in India",
  "Delhi Top 10 BCA College Enrollment",
];

export default function AboutClient() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 sm:pt-36 pb-24">
      {/* Profile Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        {/* Header with Small Circular Avatar & Name */}
        <div className="flex items-center gap-5 sm:gap-6 mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-br from-[#10B981]/40 via-[#1E232F] to-[#090A0E] shadow-[0_0_20px_rgba(16,185,129,0.2)] shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111319]">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.png"
                  alt="Anupam Jha"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F0F3F8] font-display leading-[1.08]">
              Anupam Jha
            </h1>
          </div>
        </div>

        {/* Auto-Rotating Title in Crisp Green */}
        <div className="h-10 sm:h-12 mb-6 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-4xl font-bold tracking-tight text-[#10B981] font-display"
            >
              {ROTATING_TITLES[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="text-base sm:text-lg text-[#9AA4B2] leading-relaxed mb-8 max-w-3xl font-sans">
          {bio.summary}
        </p>

        {/* Location & Status Chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#111319] border border-[#1E232F] rounded-full text-xs sm:text-sm text-[#F0F3F8] shadow-sm">
            <MapPin className="w-4 h-4 text-[#10B981]" />
            <span>{bio.location}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#111319] border border-[#1E232F] rounded-full text-xs sm:text-sm text-[#F0F3F8] shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#5EEAA0]" />
            <span>BCA · Delhi Top 10 (Pursuing)</span>
          </div>
        </div>

        {/* Aliases & Handles */}
        <div className="bg-[#111319] border border-[#1E232F] rounded-2xl p-6 shadow-sm">
          <span className="text-xs font-mono uppercase tracking-wider text-[#8B95A5] block mb-3 font-semibold">
            Known Aliases &amp; Network Handles
          </span>
          <div className="flex flex-wrap gap-2">
            {bio.handles.map((handle) => (
              <span
                key={handle}
                className="px-3.5 py-1.5 rounded-full bg-[#171A24] border border-[#1E232F] text-xs font-mono text-[#5EEAA0] font-semibold"
              >
                {handle}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Professional Experience & Technical Milestones */}
      <section className="mb-16">
        <div className="flex items-center gap-2.5 mb-2">
          <Briefcase className="w-5 h-5 text-[#10B981]" />
          <h2 className="text-2xl font-bold tracking-tight text-[#F0F3F8] font-display">
            Milestones
          </h2>
        </div>

        <div className="relative pl-8 mt-6">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#1E232F]" />
          
          {milestones.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="relative flex items-center gap-4 py-4"
            >
              <div className="absolute left-[-25px] w-4 h-4 rounded-full bg-[#10B981] border-4 border-[#090A0E] z-10" />
              <span className="text-base sm:text-lg font-bold text-[#F0F3F8] font-display">{text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-16 pt-8 border-t border-[#1E232F]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#10B981]" />
            <h2 className="text-2xl font-bold tracking-tight text-[#F0F3F8] font-display">
              Resume
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <RectButton
              href={siteConfig.contact.resumeUrl}
              download="Anupam_Jha_Resume.pdf"
              icon={<Download className="w-3.5 h-3.5 text-[#38BDF8]" />}
            >
              Download PDF
            </RectButton>
            <RectButton
              href={siteConfig.contact.resumeUrl}
              external={true}
              variant="emerald"
              icon={<ExternalLink className="w-3.5 h-3.5 text-[#5EEAA0]" />}
            >
              Fullscreen
            </RectButton>
          </div>
        </div>

        {/* Clean Resume Preview Document Card */}
        <div className="rounded-2xl border border-[#1E232F] overflow-hidden bg-[#111319] shadow-2xl">
          <div className="w-full bg-[#161922] px-4 py-3 border-b border-[#1E232F] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              <span className="text-xs font-mono text-[#8B95A5] ml-2">resume.pdf</span>
            </div>
            <span className="text-[11px] font-mono text-[#586274] hidden sm:inline">
              Anupam Jha · Software Developer
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6 text-sm text-[#C4CDD8]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#1E232F] pb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Anupam Jha</h3>
                <p className="text-xs text-[#10B981] font-mono">Software Developer · New Delhi, India</p>
              </div>
              <span className="text-xs font-mono text-[#8B95A5]">{siteConfig.contact.email}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-2 font-bold">
                  Summary
                </h4>
                <p className="text-xs sm:text-sm text-[#9AA4B2] leading-relaxed">
                  Software engineer focused on building performant and scalable systems. My experience spans backend architecture, frontend interfaces, and machine learning integrations. Based in New Delhi, I build modern web platforms, Minecraft mods, Android applications, and developer tools.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-2 font-bold">
                  Core Skills &amp; Benchmarks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'React',
                    'Next.js',
                    'Kotlin',
                    'Android',
                    'TypeScript',
                    'Python',
                    'Fastest 1% Typist (120+ WPM)',
                    'Node.js / APIs',
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded bg-[#161D27] border border-[#222E3E] text-xs font-mono text-[#5EEAA0]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <RectButton
                href={siteConfig.contact.resumeUrl}
                download="Anupam_Jha_Resume.pdf"
                icon={<Download className="w-3.5 h-3.5 text-[#38BDF8]" />}
              >
                Download Complete PDF
              </RectButton>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Support & Direct Payments (UPI & Bitcoin) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <PaymentSupportCard />
      </motion.section>
    </div>
  );
}


