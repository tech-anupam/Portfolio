'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface RectButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'slate' | 'emerald' | 'crimson';
  external?: boolean;
  download?: boolean | string;
}

export function RectButton({
  href,
  onClick,
  children,
  icon,
  className,
  variant = 'slate',
  external = false,
  download,
}: RectButtonProps) {
  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2',
    'rounded-[3px] transition-all duration-150 cursor-pointer select-none',
    'text-xs font-mono font-medium tracking-wide',
    variant === 'slate' &&
      'bg-[#121820] hover:bg-[#18202A] text-[#E2E8F0] border border-[#232F3D] hover:border-[#38BDF8]/70 shadow-sm hover:shadow-[0_2px_12px_rgba(0,0,0,0.4)]',
    variant === 'emerald' &&
      'bg-[#0C1F19] hover:bg-[#102B23] text-[#E6F9F0] border border-[#10B981]/40 hover:border-[#10B981] shadow-sm',
    variant === 'crimson' &&
      'bg-[#221218] hover:bg-[#2E1820] text-[#FDE8EF] border border-[#F43F5E]/40 hover:border-[#F43F5E] shadow-sm',
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 shrink-0 text-[#94A3B8]">{icon}</span>}
    </>
  );

  if (href) {
    if (external || download || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          onClick={onClick}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          download={download}
          className={baseClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
