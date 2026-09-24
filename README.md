# Anupam Jha - Software Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-orange?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Personal developer portfolio and interactive showcase built for Anupam Jha, an 18-year-old software engineer based in New Delhi, India. The application features live integrations with GitHub and Modrinth REST APIs, fluid canvas animations, mobile-first responsive navigation, and performance-tuned Core Web Vitals.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftech-anupam%2FPortfolio&project-name=anupam-portfolio&repository-name=Portfolio)

Source repository: [github.com/tech-anupam/Portfolio](https://github.com/tech-anupam/Portfolio)

---

## Features

- Real-Time API Synchronization: Automated fetching and caching for GitHub repositories and published Modrinth Minecraft modifications with download metrics and star tracking.
- Interactive Physics and Canvas Effects: Custom HTML5 Canvas cursor trail particle engine with organic leaf/petal flutter physics and zero CPU overhead when idle.
- Mobile-First Architecture: Centered floating bottom dock, responsive header navigation with integrated social pills, and instant scroll-to-top interaction for mobile devices.
- Modular Design System: Dark theme palette with electric cyan, emerald, and pink/purple accents, custom vector SVG components (Japanese Katana and companion trotting sprite), and typography powered by Space Grotesk and JetBrains Mono.
- Search Engine and GEO Optimization: Native Next.js 15 App Router Metadata, OpenGraph cards, JSON-LD structured data schemas (Person, WebSite, ProfilePage), and canonical URL resolution.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 15 (App Router, React 19, Server Components) |
| Package Manager | pnpm |
| Language | TypeScript 5.8 (Strict Mode) |
| Styling | Tailwind CSS v4, PostCSS |
| Animation | Framer Motion 12, HTML5 Canvas 2D Context |
| Smooth Scrolling | Lenis Smooth Scroll |
| Icons | Lucide React |
| Deployment | Vercel Serverless Edge Platform |

---

## Project Structure

```
AnupamBuilds/
├── public/                  # Static assets (images, icons, sprites)
├── src/
│   ├── app/                 # Next.js App Router pages and metadata
│   │   ├── about/           # About page, bio, and resume credentials
│   │   ├── contact/         # Contact line with direct Web3Forms handling
│   │   ├── hire-me/         # Project inquiry form with Web3Forms & payment options
│   │   ├── projects/        # Dynamic projects catalogue with Modrinth filter
│   │   ├── skills/          # Engineering capabilities and technology matrix
│   │   ├── layout.tsx       # Root layout, analytics, SEO, and shell
│   │   └── page.tsx         # Home landing page with live bentos and hero
│   ├── components/
│   │   ├── effects/         # Canvas cursor trail, background falling petals
│   │   ├── home/            # Hero, StatsBento, and FeaturedProjects
│   │   ├── katana/          # Vector SVG Japanese Katana artwork
│   │   ├── layout/          # Navbar, MobileBottomNav, Footer, NavbarDog
│   │   ├── projects/        # Filterable project grid with category tabs
│   │   ├── seo/             # Structured data JSON-LD components
│   │   ├── splash/          # Splash screen preloader
│   │   └── ui/              # Reusable buttons, badges, and controls
│   ├── config/              # Central site configuration and verified handles
│   └── lib/                 # GitHub and Modrinth REST API client utilities
├── package.json             # Project dependencies and run scripts
└── tsconfig.json            # Strict TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18.18 or higher (Node 20+ recommended)
- pnpm (recommended: `npm install -g pnpm`)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tech-anupam/Portfolio.git
cd Portfolio
```

2. Install dependencies with pnpm:
```bash
pnpm install
```

3. Configure Environment Variables:
Copy the example environment file or create `.env.local`:
```bash
cp .env.example .env.local
```

Required and optional configuration variables:
```env
NEXT_PUBLIC_SITE_URL=https://anupambuilds.com
GITHUB_USERNAME=tech-anupam
MODRINTH_USERNAME=tech.anupam
# Optional: Higher rate limits for GitHub API queries
GITHUB_TOKEN=
```

4. Start the local development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

5. Build for production:
```bash
pnpm build
```

---

## Deploy to Vercel

The easiest way to deploy this portfolio is directly through Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftech-anupam%2FPortfolio&project-name=anupam-portfolio&repository-name=Portfolio)

### Manual Vercel Setup

1. Push your repository to GitHub.
2. Visit [vercel.com/new](https://vercel.com/new) and import your `Portfolio` repository.
3. Vercel automatically detects Next.js and pnpm. Leave build settings as default:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
4. Add environment variables under Project Settings:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain
   - `GITHUB_USERNAME`: `tech-anupam`
   - `MODRINTH_USERNAME`: `tech.anupam`
5. Click Deploy. Your site is live on the global Edge network with automatic preview branches on every pull request.

---

## Donations and Support

If you love this design and want to support the project or future open-source developments:

| Method | Details |
|---|---|
| UPI (India) | `anupambuilds@fam` |
| Bitcoin (BTC) | `bc1q9f5l4ryr08pqufh3p3xv57lwnsz9z9gupd8yzs` |

---

## Star and Support

If you find this codebase or design inspiring, consider starring the repository:

[Star on GitHub: tech-anupam/Portfolio](https://github.com/tech-anupam/Portfolio)

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
