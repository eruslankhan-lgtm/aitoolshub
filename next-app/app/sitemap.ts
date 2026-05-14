import { MetadataRoute } from 'next';
import tools from '../data/tools.json';

// ✅ Tool type define karein (same as [slug]/page.tsx)
type Tool = {
  id: number;
  name: string;
  slug: string;
  category: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  priceCurrency: string;
  priceNote: string;
  rating: string;
  reviewCount: string;
  author: string;
  datePublished: string;
  featuredImage: string;
  tags: string[];
  pros: string[];
  cons: string[];
  affiliateLink: string;
  showOnHomepage: boolean;
};

// ✅ FIXED: Double assertion for JSON import
const typedTools = tools as unknown as Tool[];

const baseUrl = 'https://aitoolspoint.site';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1️⃣ Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // 2️⃣ Dynamic Review Pages (Auto-generated from tools.json)
  const reviewPages: MetadataRoute.Sitemap = typedTools
    .filter((tool) => tool.showOnHomepage)
    .map((tool) => ({
      url: `${baseUrl}/reviews/${tool.slug}`,
      lastModified: new Date(tool.datePublished),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  // ✅ Combine static + dynamic pages
  return [...staticPages, ...reviewPages];
}