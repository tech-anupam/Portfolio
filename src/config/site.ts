export const siteConfig = {
  name: "Anupam Jha",
  handle: "AnupamBuilds",
  title: "Anupam Jha | Software Engineer",
  description:
    "18-year-old developer from New Delhi building web platforms, AI systems, Minecraft mods, and community tools.",
  url: "https://anupambuilds.com",
  location: "New Delhi, India",
  github: {
    username: "tech-anupam",
    url: "https://github.com/tech-anupam",
  },
  modrinth: {
    username: "tech.anupam",
    url: "https://modrinth.com/user/tech.anupam",
  },
  contact: {
    email: "techwithanupam@gmail.com",
    web3FormsAccessKey: "678b868e-405c-4d61-bca5-4aeb4b81808b",
    discord: "https://discord.com/users/anupambuilds",
    discordServer: "https://discord.gg/CSmrA5fbx9",
    telegram: "https://t.me/anupambuilds",
    hireMeUrl: "mailto:techwithanupam@gmail.com?subject=Project%20Inquiry%20-%20Hire%20Anupam%20Jha",
    resumeUrl: "/resume.pdf",
  },
  payments: {
    upi: "anupambuilds@fam",
    btc: "bc1q9f5l4ryr08pqufh3p3xv57lwnsz9z9gupd8yzs",
  },
  links: {
    github: "https://github.com/tech-anupam",
    linkedin: "https://linkedin.com/in/tech-anupam-jha",
    twitter: "https://x.com/anupambuilds",
    discordServer: "https://discord.gg/CSmrA5fbx9",
  },
  socials: [
    { platform: "GitHub", url: "https://github.com/tech-anupam", label: "GitHub" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/tech-anupam-jha", label: "LinkedIn" },
    { platform: "Discord", url: "https://discord.gg/CSmrA5fbx9", label: "AnupamStudios Discord" },
    { platform: "YouTube", url: "https://youtube.com/@AnupamBuilds", label: "YouTube" },
    { platform: "Instagram", url: "https://instagram.com/tech.anupam", label: "Instagram" },
    { platform: "X", url: "https://x.com/anupambuilds", label: "X" },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
  ],
  availability: {
    status: "available" as const,
    message: "Open for opportunities",
  },
  timezone: "Asia/Kolkata",
} as const;

