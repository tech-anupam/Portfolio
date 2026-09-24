'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Star, ArrowUpRight, ArrowRight, Github, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredProjects } from '@/config/projects';

export function FeaturedProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#1E232F] pb-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F0F3F8] font-display tracking-tight leading-[1.08]">
            I ship new projects <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
              every single week.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#9AA4B2] font-sans mt-4 leading-relaxed">
            I love building new software, experimenting with systems, and solving real-world problems.
            Here is a curated selection of my active creations.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-[#11151F] border border-[#1C2333] hover:border-[#38BDF8]/50 text-[#8B95A5] hover:text-[#F0F3F8] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#11151F] border border-[#1C2333] hover:border-[#38BDF8]/50 text-[#8B95A5] hover:text-[#F0F3F8] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#11151F] hover:bg-[#161D2B] border border-[#1C2333] hover:border-[#38BDF8]/50 text-xs font-mono font-semibold text-[#F0F3F8] hover:text-[#38BDF8] transition-all duration-200 shrink-0 shadow-sm"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-6 pt-1 select-none"
      >
        {featuredProjects.map((project) => (
          <div
            key={project.slug}
            className="min-w-[280px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] snap-start flex-shrink-0 rounded-2xl bg-[#11151F] border border-[#1C2333] hover:border-[#2C384F] overflow-hidden flex flex-col group transition-all duration-200 shadow-md hover:shadow-xl"
          >
            <div className="h-44 sm:h-48 w-full relative overflow-hidden bg-gradient-to-br from-[#172030] via-[#0F1622] to-[#090D14] flex items-center justify-center select-none">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  <span className="text-base sm:text-lg font-bold font-display tracking-wider text-[#F0F3F8] uppercase relative z-10 group-hover:scale-105 group-hover:text-[#38BDF8] transition-all line-clamp-2 px-2">
                    {project.title}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.25em] text-[#38BDF8] uppercase mt-1.5 opacity-80 relative z-10">
                    ANUPAM BUILDS
                  </span>
                </div>
              )}

              <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#0284C7]/20 text-[#38BDF8] border border-[#0284C7]/30 backdrop-blur-md z-20 flex items-center gap-1">
                <Star className="w-2.5 h-2.5 fill-[#38BDF8]" />
                <span>Featured</span>
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg font-bold text-[#F0F3F8] group-hover:text-white line-clamp-1 mb-1.5 font-display">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8B95A5] line-clamp-2 leading-relaxed flex-1 font-sans mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#161F2C] mt-auto">
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  {project.githubUrl ? (
                    <>
                      <Github className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span className="text-xs font-mono text-[#8B95A5] truncate">
                        tech-anupam/{project.slug}
                      </span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span className="text-xs font-mono text-[#8B95A5] truncate">
                        {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : 'builtbybit.com'}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.buyUrl && (
                    <a
                      href={project.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#16202C] hover:bg-[#1E2B3C] text-[#38BDF8] border border-[#223042] text-[11px] font-mono transition-all"
                      aria-label="View on BuiltByBit"
                    >
                      <span>Store</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.liveUrl || project.githubUrl || project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0284C7]/20 hover:bg-[#0284C7]/35 text-[#38BDF8] hover:text-white border border-[#0284C7]/40 text-[11px] font-mono font-medium transition-all shrink-0"
                    aria-label={`Explore ${project.title}`}
                  >
                    <span>{project.liveUrl ? 'Live Demo' : 'Explore'}</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
