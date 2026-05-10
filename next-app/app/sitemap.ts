import { MetadataRoute } from 'next';
import tools from '@/data/tools.json';

type Tool = {
  slug: string;
  showOnHomepage: boolean;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitoolspoint.site';

  // Static pages
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/affiliate-disclosure',
  ];

  // Generate static page entries
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Generate dynamic review page entries from tools.json
  const reviewPages = (tools as Tool[])
    .filter((tool) => tool.showOnHomepage)
    .map((tool) => ({
      url: `${baseUrl}/reviews/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...reviewPages];
}