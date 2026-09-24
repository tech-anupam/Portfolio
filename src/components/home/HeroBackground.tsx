'use client';

/* Clean, matte dark ambient background without artificial shape clutter */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Very subtle radial depth at the top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.06) 0%, rgba(30, 35, 47, 0.15) 50%, transparent 80%)',
        }}
      />
      {/* Subtle bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090A0E]/50 to-[#090A0E]" />
    </div>
  );
}
