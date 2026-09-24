import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, achievements, and certifications of Anupam Jha.',
};

export default function AboutPage() {
  return <AboutClient />;
}
