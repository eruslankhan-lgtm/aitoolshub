import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Optional: Block admin or private paths if you have any
      // disallow: ['/admin', '/private'],
    },
    sitemap: 'https://aitoolspoint.site/sitemap.xml',
  };
}