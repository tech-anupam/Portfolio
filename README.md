# Anupam Jha | Software Engineer Portfolio

[![Stars](https://img.shields.io/github/stars/tech-anupam/Portfolio?style=flat-square&color=38BDF8)](https://github.com/tech-anupam/Portfolio/stargazers)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://anupambuilds.store)
[![License](https://img.shields.io/badge/License-MIT-10B981?style=flat-square)](LICENSE)

Personal engineering portfolio and product showcase for **Anupam Jha**. Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. Features live GitHub & Modrinth synchronization, HTML5 canvas petal trail, smooth horizontal showcase slider, mobile bottom dock navigation, and direct Web3Forms inbox delivery.

Live site: [anupambuilds.store](https://anupambuilds.store)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftech-anupam%2FPortfolio&project-name=anupam-portfolio&repository-name=Portfolio)

---

## Support & Donations

If you like this design or want to support ongoing open-source development:

| Method | Address / Target | Details |
|:---|:---|:---|
| **UPI (India)** | `anupambuilds@fam` | Instant direct UPI transfer |
| **Bitcoin (BTC)** | `bc1q9f5l4ryr08pqufh3p3xv57lwnsz9z9gupd8yzs` | Native SegWit network |
| **GitHub Star** | [Star tech-anupam/Portfolio](https://github.com/tech-anupam/Portfolio) | Free support for the repository |

---

## Highlights

| Feature | Description | Stack / Provider |
|:---|:---|:---|
| **Live Telemetry** | Real-time GitHub stars & Modrinth download statistics with ISR caching | GitHub REST API, Modrinth v2 |
| **Product Slider** | Hardware-accelerated horizontal scroll slider with responsive controls | CSS Scroll Snap, Touch Native |
| **Canvas Cursor Trail** | Interactive floating petal particle physics with zero idle CPU overhead | HTML5 2D Canvas Engine |
| **Mobile Architecture** | Floating bottom navigation dock, responsive header, and instant scroll-to-top | Mobile-First Tailwind v4 |
| **Direct Contact** | Serverless form submissions delivering directly to inbox with active badge | Web3Forms REST API |
| **SEO & GEO Engine** | IndexNow verification, OpenGraph cards, JSON-LD schemas, and meta tags | Schema.org, Bing IndexNow |

---

## Tech Stack

| Technology | Badge | Purpose |
|:---|:---:|:---|
| **Next.js 15** | ![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white) | React framework & server components |
| **React 19** | ![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI component library |
| **TypeScript** | ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white) | Static type safety |
| **Tailwind CSS v4** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first design system |
| **Framer Motion** | ![Framer](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white) | Motion & layout transitions |
| **pnpm** | ![pnpm](https://img.shields.io/badge/pnpm-9-F69220?style=flat-square&logo=pnpm&logoColor=white) | Fast, disk-efficient package manager |
| **Web3Forms** | ![Web3Forms](https://img.shields.io/badge/Web3Forms-API-10B981?style=flat-square) | Client-side form delivery |
| **Vercel** | ![Vercel](https://img.shields.io/badge/Vercel-Platform-000000?style=flat-square&logo=vercel&logoColor=white) | Edge network deployment |

---

## Quick Setup

### 1. Clone & Install

```bash
git clone https://github.com/tech-anupam/Portfolio.git
cd Portfolio
pnpm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://anupambuilds.store
GITHUB_USERNAME=your-username
MODRINTH_USERNAME=your-username
# Optional: Higher GitHub API rate limits
GITHUB_TOKEN=
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
pnpm build
```

---

## 1-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftech-anupam%2FPortfolio&project-name=anupam-portfolio&repository-name=Portfolio)

1. Click **Deploy with Vercel** above.
2. In Project Settings, configure environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain
   - `GITHUB_USERNAME`: Your GitHub username
   - `MODRINTH_USERNAME`: Your Modrinth username
3. Click **Deploy**.

---

## Contributing

1. Fork the repository
2. Create your branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

Distributed under the [MIT License](LICENSE). Free for personal and commercial adaptation.
