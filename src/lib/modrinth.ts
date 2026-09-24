export interface ModrinthProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  categories: string[];
  downloads: number;
  followers: number;
  icon_url: string | null;
  project_type: string;
  date_published: string;
  date_modified: string;
}

export interface ModrinthStats {
  projects: ModrinthProject[];
  totalDownloads: number;
  totalFollowers: number;
}

import { siteConfig } from "@/config/site";

const DEFAULT_USERNAME = siteConfig.modrinth.username;

export async function getModrinthProjects(
  username = DEFAULT_USERNAME
): Promise<ModrinthStats> {
  try {
    const res = await fetch(
      `https://api.modrinth.com/v2/user/${username}/projects`,
      {
        headers: {
          "User-Agent":
            process.env.MODRINTH_USER_AGENT ||
            "AnupamBuilds-Portfolio/1.0",
          Accept: "application/json",
        },
        next: { revalidate: 3600, tags: ["modrinth-projects"] },
      }
    );

    if (!res.ok) return { projects: [], totalDownloads: 0, totalFollowers: 0 };

    const projects: ModrinthProject[] = await res.json();
    projects.sort((a, b) => b.downloads - a.downloads);

    return {
      projects,
      totalDownloads: projects.reduce((sum, p) => sum + p.downloads, 0),
      totalFollowers: projects.reduce((sum, p) => sum + p.followers, 0),
    };
  } catch (error) {
    console.error("Modrinth fetch failed:", error);
    return { projects: [], totalDownloads: 0, totalFollowers: 0 };
  }
}
