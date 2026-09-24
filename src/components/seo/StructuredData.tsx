import { siteConfig } from '@/config/site';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        mainEntity: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: 'Anupam Jha',
        jobTitle: 'Software Engineer',
        image: `${siteConfig.url}/profile.webp`,
        url: siteConfig.url,
        sameAs: siteConfig.socials.map((s) => s.url),
      },

      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: 'Anupam Jha Portfolio',
        publisher: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
