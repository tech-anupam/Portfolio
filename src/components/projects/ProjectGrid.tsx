'use client';

import { useState, useTransition, useMemo, useEffect } from 'react';
import { Search, Star, Github, Package, Download, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryFilter = 'all' | 'modrinth' | 'minecraft' | 'web' | 'opensource';

interface UnifiedProject {
  id: string;
  title: string;
  description: string;
  source: 'featured' | 'github' | 'modrinth';
  category: 'web' | 'minecraft' | 'opensource';
  stars?: number;
  downloads?: number;
  language?: string;
  url: string;
  repoUrl?: string;
  buyUrl?: string;
  liveUrl?: string;
  stack?: string[];
  image?: string;
}

interface ProjectGridProps {
  githubRepos: any[];
  modrinthProjects: any[];
  featuredProjects: any[];
}

const ITEMS_PER_PAGE = 9;

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'minecraft', label: 'Minecraft' },
  { id: 'opensource', label: 'Open Source' },
];

const LANGUAGE_TABS = [
  'All',
  'Python',
  'JavaScript',
  'TypeScript',
  'Kotlin',
  'Java',
  'PowerShell',
  'CSS',
  'HTML',
];

export default function ProjectGrid({
  githubRepos,
  modrinthProjects,
  featuredProjects,
}: ProjectGridProps) {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<UnifiedProject | null>(null);
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const allProjects = useMemo(() => {
    const list: UnifiedProject[] = [];

    featuredProjects.forEach((p, idx) => {
      const slugKey = p.slug || p.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const isMinecraft = p.title.toLowerCase().includes('minecraft') || p.title.toLowerCase().includes('purgemc');
      const isWeb = p.stack?.some((s: string) => ['next.js', 'react', 'web', 'typescript', 'tailwind'].includes(s.toLowerCase()));

      list.push({
        id: `featured-${slugKey}-${idx}`,
        title: p.title,
        description: p.description,
        source: 'featured',
        category: isMinecraft ? 'minecraft' : isWeb ? 'web' : 'opensource',
        stack: p.stack,
        url: p.liveUrl || p.buyUrl || p.githubUrl || p.repoUrl || '#',
        repoUrl: p.githubUrl || p.repoUrl,
        buyUrl: p.buyUrl,
        liveUrl: p.liveUrl,
        image: p.image,
        language: p.stack?.[0],
      });
    });

    githubRepos.forEach((r, idx) => {
      if (!list.some((item) => item.title.toLowerCase() === r.name.toLowerCase())) {
        const isMinecraft = r.name.toLowerCase().includes('minecraft') || r.description?.toLowerCase().includes('minecraft');
        const isWeb = ['javascript', 'typescript', 'html', 'css'].includes((r.language || '').toLowerCase()) ||
          r.topics?.some((t: string) => ['react', 'nextjs', 'web', 'website', 'frontend'].includes(t.toLowerCase()));

        list.push({
          id: `gh-${r.id || r.name || idx}`,
          title: r.name,
          description: r.description || 'Active engineering repository and open-source software.',
          source: 'github',
          category: isMinecraft ? 'minecraft' : isWeb ? 'web' : 'opensource',
          stars: r.stargazers_count,
          language: r.language,
          url: r.html_url,
          repoUrl: r.html_url,
          stack: r.topics || (r.language ? [r.language] : []),
        });
      }
    });

    modrinthProjects.forEach((m, idx) => {
      const modKey = m.id || m.slug || `mod-item-${idx}`;
      list.push({
        id: `mod-${modKey}`,
        title: m.title,
        description: m.description,
        source: 'modrinth',
        category: 'minecraft',
        downloads: m.downloads,
        image: m.icon_url || m.raw_icon_url || undefined,
        url: `https://modrinth.com/mod/${m.slug || modKey}`,
        stack: m.categories || ['Minecraft', 'Java', 'Mod'],
        language: 'Java',
      });
    });

    return list;
  }, [featuredProjects, githubRepos, modrinthProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        categoryFilter === 'all' ||
        (categoryFilter === 'modrinth'
          ? project.source === 'modrinth'
          : categoryFilter === 'minecraft'
          ? project.category === 'minecraft' || project.source === 'modrinth'
          : project.category === categoryFilter);

      const matchesLanguage =
        languageFilter === 'All' ||
        (project.language && project.language.toLowerCase() === languageFilter.toLowerCase()) ||
        project.stack?.some((s) => s.toLowerCase() === languageFilter.toLowerCase());

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLanguage && matchesSearch;
    });
  }, [allProjects, categoryFilter, languageFilter, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, languageFilter, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== 'undefined') {
      const gridElem = document.getElementById('project-grid-section');
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, 'ellipsis', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
  };

  return (
    <div id="project-grid-section" className="space-y-8">
      <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#586274]" />
          <input
            type="text"
            placeholder="Search projects..."
            defaultValue={searchQuery}
            onChange={(e) => {
              const val = e.target.value;
              startTransition(() => setSearchQuery(val));
            }}
            className="w-full bg-[#121620] border border-[#1E2638] rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#38BDF8] text-[#F0F3F8] placeholder-[#586274] transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {CATEGORY_TABS.map((tab) => {
            const isActive = categoryFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id)}
                className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all select-none',
                  isActive
                    ? 'bg-[#0284C7] text-white shadow-md shadow-[#0284C7]/20 font-semibold'
                    : 'bg-[#111722] text-[#8B95A5] hover:text-[#F0F3F8] hover:bg-[#172030] border border-[#1C2636]'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
          {LANGUAGE_TABS.map((lang) => {
            const isActive = languageFilter.toLowerCase() === lang.toLowerCase();
            return (
              <button
                key={lang}
                onClick={() => setLanguageFilter(lang)}
                className={cn(
                  'px-3 py-1 rounded-full text-[11px] font-mono transition-all select-none',
                  isActive
                    ? 'bg-[#0284C7] text-white font-semibold'
                    : 'bg-[#0F141D] text-[#717E92] hover:text-[#E2E8F0] hover:bg-[#161E2C] border border-[#192330]'
                )}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-[#717E92]">
        <span>{filteredProjects.length} projects</span>
        <span>Page {currentPage} of {totalPages}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.length > 0 ? (
          paginatedProjects.map((project, index) => {
            const categoryBadge =
              project.source === 'modrinth'
                ? 'Modrinth'
                : project.category === 'web'
                ? 'Web'
                : project.category === 'minecraft'
                ? 'Minecraft'
                : 'Open Source';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl bg-[#11151F] border border-[#1C2333] hover:border-[#2C384F] overflow-hidden flex flex-col group cursor-pointer transition-all duration-200"
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

                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#0284C7]/20 text-[#38BDF8] border border-[#0284C7]/30 backdrop-blur-md z-20">
                    {categoryBadge}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#F0F3F8] group-hover:text-white line-clamp-1 mb-1 font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8B95A5] line-clamp-2 leading-relaxed flex-1 font-sans">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="col-span-full py-16 text-center text-[#717E92] font-mono text-sm">
            No matching projects found.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-8 pb-12 select-none">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-lg bg-[#0E131A] border border-[#1A2332] text-[#8B95A5] hover:text-[#F0F3F8] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {getPageNumbers().map((item, idx) => {
            if (item === 'ellipsis') {
              return (
                <span key={`ellipsis-${idx}`} className="w-6 text-center text-xs font-mono text-[#586274]">
                  ...
                </span>
              );
            }
            const pageNum = item as number;
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={cn(
                  'w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-all',
                  isActive
                    ? 'bg-[#0284C7] text-white shadow-md shadow-[#0284C7]/30'
                    : 'bg-[#0E131A] border border-[#1A2332] text-[#8B95A5] hover:text-[#F0F3F8] hover:bg-[#161F2C]'
                )}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-lg bg-[#0E131A] border border-[#1A2332] text-[#8B95A5] hover:text-[#F0F3F8] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Project Detail Modal - Fixed Overlapping (z-[100], max-h-[85vh], scrollable) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#10151E] border border-[#1E2837] rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-[#717E92] hover:text-[#F0F3F8] rounded-lg transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-[#0284C7]/20 text-[#38BDF8] border border-[#0284C7]/30">
                  {selectedProject.category}
                </span>
                {selectedProject.language && (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#16202C] border border-[#1E2A38] text-[#8B95A5]">
                    {selectedProject.language}
                  </span>
                )}
              </div>

              {/* Title with pr-10 so it never collides with X button */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#F0F3F8] font-display pr-10">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#8B95A5] leading-relaxed mb-6 font-sans">
                {selectedProject.description}
              </p>

              {selectedProject.stack && selectedProject.stack.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#717E92] mb-2 font-bold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#16202C] border border-[#1E2A38] text-xs font-mono text-[#9AA4B2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-6 py-3 border-y border-[#1A2332] mb-6 text-xs font-mono text-[#8B95A5]">
                {selectedProject.stars !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{selectedProject.stars} Stars</span>
                  </div>
                )}
                {selectedProject.downloads !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-[#00FF9D]" />
                    <span>{new Intl.NumberFormat('en-US').format(selectedProject.downloads)} Downloads</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.liveUrl || selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-medium rounded-lg transition text-xs font-mono uppercase tracking-wider shadow-sm"
                >
                  <span>{selectedProject.liveUrl ? 'Live Demo' : 'Open Project'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {selectedProject.buyUrl && (
                  <a
                    href={selectedProject.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#D946EF]/20 hover:bg-[#D946EF]/30 text-[#F472B6] border border-[#D946EF]/40 font-medium rounded-lg transition text-xs font-mono uppercase tracking-wider shadow-sm"
                  >
                    <span>BuiltByBit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.repoUrl && selectedProject.repoUrl !== selectedProject.url && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#16202C] border border-[#1E2A38] hover:border-[#38BDF8]/50 text-[#F0F3F8] rounded-lg transition"
                    aria-label="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
