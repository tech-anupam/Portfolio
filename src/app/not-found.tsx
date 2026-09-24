import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-[#10B981]/20 mb-4 font-display">404</h1>
      <h2 className="text-2xl font-bold tracking-tight mb-4 font-display text-[#F0F3F8]">Page Not Found</h2>
      <p className="text-[#8B95A5] mb-8 font-mono text-sm">
        The requested system route does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-black font-bold rounded-xl transition-all shadow-md font-mono text-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
