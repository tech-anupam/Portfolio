'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, FolderGit2, Cpu, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const MAIN_PAGES = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/projects', icon: FolderGit2 },
  { label: 'Skills', href: '/skills', icon: Cpu },
  { label: 'About', href: '/about', icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-6 inset-x-0 mx-auto w-fit z-50 md:hidden pointer-events-auto"
    >
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0C0F17]/96 backdrop-blur-md border border-[#232A3B] shadow-[0_12px_36px_rgba(0,0,0,0.85)]">
        {MAIN_PAGES.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              className="relative select-none block shrink-0"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={cn(
                  'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-150 relative shrink-0',
                  isActive
                    ? 'bg-[#10B981] text-black shadow-[0_0_16px_rgba(16,185,129,0.5)] font-bold'
                    : 'text-[#9AA4B2] hover:text-[#F0F3F8] hover:bg-white/5'
                )}
              >
                <Icon className={cn('w-5 h-5 shrink-0', isActive ? 'stroke-[2.5]' : 'stroke-[1.9]')} />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
