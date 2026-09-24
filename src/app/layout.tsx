import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import StructuredData from '@/components/seo/StructuredData';
import SplashScreen from '@/components/splash/SplashScreen';
import FallingPetals from '@/components/effects/FallingPetals';
import PetalCursorTrail from '@/components/effects/PetalCursorTrail';
import PageTransition from '@/components/effects/PageTransition';
import { DecorativeBranches } from '@/components/decorations/DecorativeArt';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://anupambuilds.store'),
  title: {
    default: 'Anupam Jha | Software Engineer',
    template: '%s | Anupam Jha',
  },
  description: '18-year-old software engineer building scalable web platforms, Android applications, on-device AI tools, and open source systems.',
  keywords: [
    'Anupam Jha',
    'tech-anupam',
    'AnupamBuilds',
    'Software Engineer',
    'Full Stack Developer',
    'Android Developer',
    'Kotlin',
    'Next.js',
    'TypeScript',
    'LowYourTone',
    'BoardMyDelulu',
    'AI Engineer',
    'Open Source Systems',
    'New Delhi',
  ],
  authors: [{ name: 'Anupam Jha', url: 'https://github.com/tech-anupam' }],
  creator: 'Anupam Jha',
  icons: {
    icon: [
      { url: '/profile.webp', type: 'image/webp' },
      { url: '/profile.png', type: 'image/png' },
    ],
    shortcut: '/profile.webp',
    apple: '/profile.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Anupam Jha Portfolio',
    title: 'Anupam Jha | Software Engineer',
    description: 'Software engineer building performant systems, Android apps, and AI integrations.',
    images: [
      {
        url: '/profile.webp',
        width: 800,
        height: 800,
        alt: 'Anupam Jha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anupam Jha | Software Engineer',
    description: 'Software engineer building performant systems, Android apps, and AI integrations.',
    images: ['/profile.webp'],
    creator: '@AkaTriggered',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="bg-[#090A0E] font-sans text-[#F0F3F8] antialiased selection:bg-[#10B981]/25 selection:text-[#5EEAA0]">
        <StructuredData />
        <SplashScreen />
        <FallingPetals />
        <PetalCursorTrail />
        <DecorativeBranches />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-dvh pb-28 md:pb-0">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
          <MobileBottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
