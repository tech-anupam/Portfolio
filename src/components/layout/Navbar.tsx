'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { NavKatana } from '@/components/katana/KatanaSVG';
import { NavbarDog } from './NavbarDog';
import { RectButton } from '@/components/ui/RectButton';

const SOCIAL_ITEMS = [
  {
    name: 'GitHub',
    url: siteConfig.github.url,
    brandColor: '#2A303C',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: siteConfig.links.linkedin,
    brandColor: '#0A66C2',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: siteConfig.links.twitter,
    brandColor: '#2A303C',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@AnupamBuilds',
    brandColor: '#CC0000',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/tech.anupam',
    brandColor: '#C13584',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    url: siteConfig.contact.discordServer,
    brandColor: '#5865F2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-200',
        scrolled
          ? 'bg-[#090A0E]/95 backdrop-blur-xl border-[#1E232F] shadow-lg shadow-black/40'
          : 'bg-[#090A0E]/85 backdrop-blur-md border-[#1E232F]/60'
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-[60px] sm:h-[68px] relative gap-2 sm:gap-4">
        <div className="hidden md:flex items-center gap-2 shrink-0 relative z-20">
          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill relative overflow-hidden w-[30px] h-[30px] rounded-full border border-white/10 flex items-center justify-center text-[#9AA4B2] transition-all duration-200 hover:text-[#F0F3F8] hover:-translate-y-0.5"
              style={{ '--brand': item.brandColor } as React.CSSProperties}
              aria-label={item.name}
            >
              <span className="relative z-[3]">{item.svg}</span>
            </a>
          ))}
        </div>

        <Link href="/" className="md:hidden flex items-center gap-2 select-none shrink-0 group relative z-20">
          <div className="w-8 h-8 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-br from-[#10B981]/50 to-[#1E232F] shadow-sm shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111319]">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img src="/profile.png" alt="Anupam Jha" className="w-full h-full object-cover object-center" />
              </picture>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#F0F3F8] text-[13px] tracking-tight font-display leading-tight whitespace-nowrap">
              Anupam Jha
            </span>
            <span className="text-[9px] font-mono text-[#5EEAA0] leading-none whitespace-nowrap">
              Software Engineer
            </span>
          </div>
        </Link>

        <div className="flex md:hidden items-center gap-1 sm:gap-1.5 shrink min-w-0 overflow-x-auto no-scrollbar relative z-20 px-0.5">
          {SOCIAL_ITEMS.map((item) => (
            <a
              key={`m-${item.name}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill relative overflow-hidden w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] rounded-full border border-white/10 flex items-center justify-center text-[#9AA4B2] transition-all duration-200 hover:text-[#F0F3F8] shrink-0"
              style={{ '--brand': item.brandColor } as React.CSSProperties}
              aria-label={item.name}
            >
              <span className="relative z-[3]">{item.svg}</span>
            </a>
          ))}
        </div>

        <nav className="hidden md:flex items-center gap-7 relative z-20">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link-underline relative text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 py-1.5',
                  isActive
                    ? 'text-[#5EEAA0] font-semibold'
                    : 'text-[#8B95A5] hover:text-[#F0F3F8]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <NavbarDog />
        </div>

        <div className="hidden md:block">
          <NavKatana />
        </div>

        <div className="flex items-center gap-2 shrink-0 relative z-20">
          <div className="hidden sm:block">
            <RectButton
              href="/hire-me"
              icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />}
            >
              Hire Me
            </RectButton>
          </div>

          <div className="sm:hidden">
            <RectButton
              href="/hire-me"
              className="px-2.5 py-1 text-[10px] font-mono"
              icon={<ArrowUpRight className="w-2.5 h-2.5 text-[#38BDF8]" />}
            >
              Hire
            </RectButton>
          </div>
        </div>
      </div>
    </header>
  );
}
