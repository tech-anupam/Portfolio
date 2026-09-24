import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { StatsBento } from "@/components/home/StatsBento";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { getGitHubStats } from "@/lib/github";
import { getModrinthProjects } from "@/lib/modrinth";

function StatsSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="h-36 animate-pulse rounded-2xl bg-[#111319] border border-[#1E232F]" />
        <div className="h-36 animate-pulse rounded-2xl bg-[#111319] border border-[#1E232F]" />
      </div>
      <div className="h-64 animate-pulse rounded-2xl bg-[#111319] border border-[#1E232F]" />
    </div>
  );
}

async function StatsSection() {
  const [githubStats, modrinthData] = await Promise.all([
    getGitHubStats(),
    getModrinthProjects(),
  ]);

  return (
    <StatsBento
      githubStats={githubStats}
      modrinthStats={{
        totalDownloads: modrinthData.totalDownloads,
        totalFollowers: modrinthData.totalFollowers,
        projects: modrinthData.projects.length,
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Suspense fallback={<StatsSkeleton />}>
        <StatsSection />
      </Suspense>
      <FeaturedProjects />
    </>
  );
}
