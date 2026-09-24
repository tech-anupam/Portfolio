"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { House, FolderGit2, Cpu, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", icon: House, label: "Home" },
  { href: "/projects", icon: FolderGit2, label: "Projects" },
  { href: "/skills", icon: Cpu, label: "Skills" },
  { href: "/about", icon: User, label: "About" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center gap-1 p-2 rounded-full bg-zinc-900/90 backdrop-blur-lg border border-white/10 shadow-xl">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="relative flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full transition-colors group px-4 py-2"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-active"
                  className="absolute inset-0 bg-white/5 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon 
                className={cn(
                  "w-5 h-5 relative z-10 transition-transform duration-200 group-hover:scale-110",
                  isActive ? "text-[#ff8f6b] scale-110" : "text-zinc-400"
                )} 
              />
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}
