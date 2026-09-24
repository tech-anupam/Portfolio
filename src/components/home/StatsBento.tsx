'use client';

import { motion } from 'framer-motion';
import { Github, Package, ArrowUpRight, Star, GitFork, BookOpen } from 'lucide-react';
import type { GitHubStats } from '@/lib/github';
import { siteConfig } from '@/config/site';

interface StatsBentoProps {
  githubStats: GitHubStats;
  modrinthStats: {
    totalDownloads: number;
    totalFollowers: number;
    projects: number;
  };
}

export function StatsBento({ githubStats, modrinthStats }: StatsBentoProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.a
          href={siteConfig.github.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#08202D]/90 via-[#0A1722]/90 to-[#060E16] border border-[#06B6D4]/35 hover:border-[#00E5FF] shadow-[0_4px_24px_rgba(0,229,255,0.07)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.25)] transition-all group cursor-pointer gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#092534] border border-[#06B6D4]/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_16px_rgba(0,229,255,0.3)] transition-all shrink-0">
              <Github className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-base font-bold text-[#22D3EE] font-display tracking-tight">
                  GitHub
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#22D3EE] bg-[#06B6D4]/15 px-2.5 py-0.5 rounded-full border border-[#06B6D4]/35 font-semibold truncate">
                  @{siteConfig.github.username}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <BookOpen className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                  <strong className="text-[#F0F3F8]">{githubStats.totalRepos}</strong> repos
                </span>
                <span className="text-[#4B5563]">·</span>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <strong className="text-[#38BDF8]">{githubStats.totalStars}</strong> stars
                </span>
                <span className="text-[#4B5563]">·</span>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <GitFork className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                  <strong className="text-[#F0F3F8]">{githubStats.totalForks}</strong> forks
                </span>
              </div>
            </div>
          </div>

          <div className="w-9 h-9 rounded-xl bg-[#092534] border border-[#06B6D4]/40 flex items-center justify-center text-[#22D3EE] group-hover:text-[#00E5FF] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_12px_rgba(0,229,255,0.25)] transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.a>

        <motion.a
          href={siteConfig.modrinth.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#09271B]/90 via-[#0A1A14]/90 to-[#06100D] border border-[#00FF9D]/35 hover:border-[#00FF9D] shadow-[0_4px_24px_rgba(0,255,157,0.07)] hover:shadow-[0_8px_32px_rgba(0,255,157,0.25)] transition-all group cursor-pointer gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0B3122] border border-[#00FF9D]/40 flex items-center justify-center text-[#00FF9D] group-hover:scale-105 group-hover:border-[#00FF9D] group-hover:shadow-[0_0_16px_rgba(0,255,157,0.3)] transition-all shrink-0">
              <Package className="w-5 h-5 text-[#00FF9D]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-base font-bold text-[#00FF9D] font-display tracking-tight">
                  Modrinth
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#00FF9D] bg-[#00FF9D]/15 px-2.5 py-0.5 rounded-full border border-[#00FF9D]/35 font-semibold truncate">
                  @{siteConfig.modrinth.username}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#94A3B8]">
                <span className="whitespace-nowrap">
                  <strong className="text-[#00FF9D]">{new Intl.NumberFormat('en-US').format(modrinthStats.totalDownloads)}</strong> downloads
                </span>
                <span className="text-[#4B5563]">·</span>
                <span className="whitespace-nowrap">
                  <strong className="text-[#F0F3F8]">{modrinthStats.projects}</strong> mods & tools
                </span>
              </div>
            </div>
          </div>

          <div className="w-9 h-9 rounded-xl bg-[#0B3122] border border-[#00FF9D]/40 flex items-center justify-center text-[#00FF9D] group-hover:text-white group-hover:border-[#00FF9D] group-hover:shadow-[0_0_12px_rgba(0,255,157,0.25)] transition-all shrink-0">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
