import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-10 bg-[#090A0E] relative z-10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1E232F] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#8B95A5] text-sm">
          © {currentYear} Anupam Jha. All rights reserved.
        </p>

        <a
          href="https://github.com/tech-anupam/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8B95A5] hover:text-[#F0F3F8] transition-colors group px-3.5 py-1.5 rounded-full bg-[#111319] border border-[#1E232F] hover:border-[#10B981]/50"
        >
          <span>Love this design? Star this portfolio</span>
          <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B] group-hover:scale-125 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
