export interface FeaturedProject {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  repoUrl?: string;
  buyUrl?: string;
  image?: string;
  featured: true;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "radhe-roop-shringar-ecommerce",
    title: "Radhe Roop Shringar",
    description:
      "High-performance, modern full-stack e-commerce template featuring fluid product catalogs, responsive shopping cart, order workflows, and conversion-optimized storefront design.",
    longDescription:
      "Production-ready, highly aesthetic e-commerce storefront crafted for premium brands, retail boutiques, and digital sellers. Built with blazing fast rendering, mobile-first UX, dynamic cart management, and seamless checkout integrations.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "E-Commerce", "Vercel"],
    liveUrl: "https://radheroopshringar.vercel.app",
    buyUrl: "https://builtbybit.com/resources/premium-e-commerce-store-template.126357/?ref=discover",
    image: "/projects/radheroopshringar.jpg",
    featured: true,
  },
  {
    slug: "incogniq-automated-portfolio",
    title: "Incogniq - Automated Developer Portfolio",
    description:
      "AI-powered automated portfolio builder engineered for developers. Syncs dynamic projects, GitHub activity, terminal aesthetics, and automated client workflows.",
    longDescription:
      "Next-generation developer showcase platform combining AI-assisted project curation, live repository tracking, bespoke terminal interactions, and lightning-fast edge performance. Published as a turnkey digital product on BuiltByBit.",
    stack: ["Next.js", "AI Systems", "TypeScript", "Tailwind CSS", "Developer Tool", "BuiltByBit"],
    liveUrl: "https://incogniq.space",
    buyUrl: "https://builtbybit.com/resources/incogniq-automated-developer-portfolio.126314/",
    image: "/projects/incogniq.png",
    featured: true,
  },
  {
    slug: "LowYourTone",
    title: "LowYourTone",
    description:
      "Open-source, 100% offline, privacy-first Android application that triggers custom device emergency actions and automations using on-device voice wake words for women safety.",
    longDescription:
      "Built for Indian women safety in emergency situations with zero internet dependence. Utilizes lightweight on-device speech processing models to recognize custom trigger phrases and silently activate SOS beacons, location sharing, and hardware alerts.",
    stack: ["Kotlin", "Android", "On-Device AI", "Voice Recognition", "Background Service"],
    githubUrl: "https://github.com/tech-anupam/LowYourTone",
    repoUrl: "https://github.com/tech-anupam/LowYourTone",
    featured: true,
  },
  {
    slug: "BoardMyDelulu-PC",
    title: "BoardMyDelulu",
    description:
      "The only viral meme soundboard software you need on PC & Android. Instant meme pads, global hotkeys, favorites deck shuffle, and zero ads.",
    longDescription:
      "Ultra-low latency audio soundboard engine built for gamers, streamers, and discord callers. Features global hotkey capture, audio device rerouting, custom sound packs, and instant responsive meme pads.",
    stack: ["TypeScript", "Electron", "React", "Node.js", "Global Audio Hooks"],
    githubUrl: "https://github.com/tech-anupam/BoardMyDelulu-PC",
    liveUrl: "https://github.com/tech-anupam/BoardMyDelulu",
    repoUrl: "https://github.com/tech-anupam/BoardMyDelulu-PC",
    featured: true,
  },
  {
    slug: "QuickQR",
    title: "QuickQR",
    description:
      "Canva-style creative QR code design studio natively built for Android. Total creative control over visual shapes, colors, badges, and layout while ensuring 100% functional scannability.",
    longDescription:
      "Reinvents QR code generation from rigid black-and-white grids into expressive graphic designs. Includes custom error-correction math, SVG/Canvas rendering, badge placement, and vector export.",
    stack: ["Kotlin", "Android", "Jetpack Compose", "Canvas API", "Graphics Engine"],
    githubUrl: "https://github.com/tech-anupam/QuickQR",
    repoUrl: "https://github.com/tech-anupam/QuickQR",
    featured: true,
  },
  {
    slug: "RupeeTrail",
    title: "RupeeTrail",
    description:
      "Full-featured financial management platform with 100+ features for personal finance, freelancing, hosting businesses, and tech companies.",
    longDescription:
      "An end-to-end financial operating platform featuring double-entry bookkeeping, automated client invoices, revenue projections, subscription tracking, and Indian tax compliance calculations.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Financial Analytics"],
    githubUrl: "https://github.com/tech-anupam/RupeeTrail",
    repoUrl: "https://github.com/tech-anupam/RupeeTrail",
    featured: true,
  },
  {
    slug: "AndroTrackKit",
    title: "AndroTrackKit",
    description:
      "Educational surveillance and device administration tool controlling Android devices through a secure Telegram Bot interface with live telemetry and remote commands.",
    longDescription:
      "Lightweight telemetry daemon for Android systems enabling remote diagnostics, location tracking, camera snapshots, notification mirroring, and hardware controls securely dispatched via encrypted Telegram Bot API.",
    stack: ["Python", "Telegram Bot API", "Android", "Shell Automation"],
    githubUrl: "https://github.com/tech-anupam/AndroTrackKit",
    repoUrl: "https://github.com/tech-anupam/AndroTrackKit",
    featured: true,
  },
  {
    slug: "hackfolio",
    title: "hackfolio",
    description:
      "A curated collection of creative project, startup, and business ideas with technical architectures, not an AI sloped project idea repository!",
    longDescription:
      "Hand-researched catalog of real market gaps, niche problem spaces, and executable MVP concepts for indie hackers, student developers, and founders looking for meaningful projects.",
    stack: ["Next.js", "TypeScript", "React", "Markdown CMS"],
    githubUrl: "https://github.com/tech-anupam/hackfolio",
    repoUrl: "https://github.com/tech-anupam/hackfolio",
    featured: true,
  },
  {
    slug: "G1axBluetoothJammer",
    title: "G1axBluetoothJammer",
    description:
      "Educational auto-scan and auto-flood Bluetooth jammer for Termux (Android). Scans nearby classic & BLE devices and conducts l2ping stress testing for perimeter wireless security.",
    longDescription:
      "Designed for property security audits and RF stress testing. Discovers surrounding BLE/BR/EDR devices, measures signal RSSI, and tests device stability under targeted l2ping socket floods.",
    stack: ["Shell", "Bash", "Linux", "Termux", "L2PING Bluetooth"],
    githubUrl: "https://github.com/tech-anupam/G1axBluetoothJammer",
    repoUrl: "https://github.com/tech-anupam/G1axBluetoothJammer",
    featured: true,
  },
  {
    slug: "MariaReminds-ext",
    title: "MariaReminds",
    description:
      "Browser companion for daily wellness that reminds you for hydration, gym workouts, sleep cycles, posture adjustments, and nutrition.",
    longDescription:
      "A lightweight, aesthetic Chrome extension featuring an animated avatar companion named Maria who tracks work intervals, reminds you to drink water, fix neck/back posture, and take healthy pauses.",
    stack: ["JavaScript", "Chrome Extensions", "Web Animations", "Notification API"],
    githubUrl: "https://github.com/tech-anupam/MariaReminds-ext",
    repoUrl: "https://github.com/tech-anupam/MariaReminds-ext",
    featured: true,
  },
];
