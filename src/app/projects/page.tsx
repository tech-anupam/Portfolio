import { Metadata } from 'next';
import { getTopRepositories } from '@/lib/github';
import { getModrinthProjects } from '@/lib/modrinth';
import { featuredProjects } from '@/config/projects';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects | Anupam Jha - Software Engineer',
  description:
    'Explore web applications, Android tools, AI systems, open-source repositories, and Minecraft mods built by Anupam Jha.',
  keywords: [
    'Anupam Jha projects',
    'AnupamBuilds',
    'tech-anupam',
    'Open Source Projects',
    'Minecraft Mods',
    'Web Applications',
    'Android Developer',
    'Full Stack Systems',
  ],
  openGraph: {
    title: 'Projects by Anupam Jha',
    description: 'Web apps, Android software, Minecraft mods, and open source systems.',
    url: 'https://anupambuilds.store/projects',
    images: ['/profile.png'],
  },
};

export default async function ProjectsPage() {
  const [githubRepos, modrinthData] = await Promise.all([
    getTopRepositories(),
    getModrinthProjects(),
  ]);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 sm:pt-36 pb-24">
      {/* Centered Section Header matching user screenshot */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0F3F8] font-display mb-3">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-[#9AA4B2] font-sans">
          Web apps, Minecraft mods, and open source work
        </p>
      </div>

      <ProjectGrid
        githubRepos={githubRepos}
        modrinthProjects={modrinthData.projects}
        featuredProjects={featuredProjects}
      />
    </div>
  );
}
