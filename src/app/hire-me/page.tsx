import { Metadata } from 'next';
import HireMeClient from './HireMeClient';

export const metadata: Metadata = {
  title: 'Hire Me',
  description: 'Work with Anupam Jha on full-stack web engineering, AI/ML systems, and open source development.',
};

export default function HireMePage() {
  return <HireMeClient />;
}
