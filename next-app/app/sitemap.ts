import { MetadataRoute } from 'next';
import tools from '@/data/tools.json';

// Strict type for JSON data to prevent TS errors
type Tool = {
  slug: string;
  showOnHomepage: boolean;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitoolspoint.site';

  // 1️⃣ Static Pages (Explicitly typed for zero errors)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  // 2️⃣ Dynamic Review Pages (Auto-generated from tools.json)
  const reviewPages: MetadataRoute.Sitemap = (tools as Tool[])
    .filter((tool) => tool.showOnHomepage)
    .map((tool) => ({
      url: `${baseUrl}/reviews/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  // 3️⃣ Combine & Return
  return [...staticPages, ...reviewPages];
}