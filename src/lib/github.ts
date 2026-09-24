export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  fork?: boolean;
  archived?: boolean;
  updated_at: string;

  created_at: string;
}


import { siteConfig } from "@/config/site";

const DEFAULT_USERNAME = siteConfig.github.username;

export async function getTopRepositories(
  username = DEFAULT_USERNAME,
  limit = 999
): Promise<GitHubRepo[]> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`,
      {
        headers,
        next: { revalidate: 3600, tags: ["github-repos"] },
      }
    );

    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();

    const activeRepos = repos.filter((repo) => !repo.fork);

    const finalRepos = activeRepos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));

    return finalRepos;
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return [];
  }
}

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  repos: GitHubRepo[];
}

export async function getGitHubStats(
  username = DEFAULT_USERNAME
): Promise<GitHubStats> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600, tags: ["github-user"] },
      }).catch(() => null),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`, {
        headers,
        next: { revalidate: 3600, tags: ["github-repos"] },
      }).catch(() => null),
    ]);

    let totalRepos = 12;
    if (userRes && userRes.ok) {
      const userData = await userRes.json();
      if (typeof userData.public_repos === "number") {
        totalRepos = userData.public_repos;
      }
    }

    let repos: GitHubRepo[] = [];
    let totalStars = 17;
    let totalForks = 0;

    if (reposRes && reposRes.ok) {
      repos = await reposRes.json();
      if (Array.isArray(repos)) {
        totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
        totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);
        if (totalRepos < repos.length) {
          totalRepos = repos.length;
        }
      }
    }

    return {
      totalRepos,
      totalStars,
      totalForks,
      repos,
    };
  } catch (err) {
    console.error("Failed to fetch full GitHub stats:", err);
    return {
      totalRepos: 12,
      totalStars: 17,
      totalForks: 0,
      repos: [],
    };
  }
}
