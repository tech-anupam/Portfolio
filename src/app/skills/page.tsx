import { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills, programming languages, AI/ML engineering, and capabilities of Anupam Jha.',
};

export default function SkillsPage() {
  return <SkillsClient />;
}
