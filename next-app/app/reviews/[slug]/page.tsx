import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';
import toolsData from '@/data/tools.json';

// ✅ Tool Interface
interface Tool {
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
}

// ✅ Type Assertion
const tools = toolsData as Tool[];

// ✅ Static Params (SSG)
export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

// ✅ SEO Metadata (Next.js 15 Compatible)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  
  if (!tool) return { title: 'Not Found' };
  
  return {
    title: `${tool.name} Review 2026 - AI Tools Point`,
    description: tool.shortDescription,
    keywords: tool.tags.join(', '),
    authors: [{ name: tool.author }],
    openGraph: {
      title: `${tool.name} Review 2026`,
      description: tool.shortDescription,
      images: [{ url: tool.featuredImage }],
      type: 'article',
      publishedTime: tool.datePublished,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review`,
      description: tool.shortDescription,
      images: [tool.featuredImage],
    },
  };
}

// ✅ Main Component (Next.js 15 Compatible)
export default async function ReviewPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  
  if (!tool) notFound();
  
  // ✅ Schema.org JSON-LD (Numbers, not strings)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": tool.name,
      "applicationCategory": tool.category,
      "offers": {
        "@type": "Offer",
        "price": tool.price,
        "priceCurrency": tool.priceCurrency
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": parseFloat(tool.rating),
      "bestRating": 5
    },
    "author": { "@type": "Person", "name": tool.author },
    "datePublished": tool.datePublished
  };

  return (
    <>
      {/* ✅ JSON-LD in <head> via next/script */}
      <Script 
        id="schema-jsonld" 
        type="application/ld+json" 
        strategy="beforeInteractive"
      >
        {JSON.stringify(schema)}
      </Script>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Homepage
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
            {tool.badge}
          </span>
          <h1 className="text-4xl font-bold mb-2">{tool.name} Review</h1>
          <p className="text-gray-600 text-lg">{tool.shortDescription}</p>
          
          {/* ✅ next/image for performance */}
          {tool.featuredImage?.startsWith('http') && (
            <Image 
              src={tool.featuredImage} 
              alt={tool.name}
              width={800} 
              height={300}
              className="mt-4 rounded-xl shadow-lg w-full h-48 object-cover"
              priority={tool.showOnHomepage}
            />
          )}
        </header>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          
          {/* Left: Description + Pros/Cons */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tool.fullDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Pros</h3>
                <ul className="space-y-2">
                  {tool.pros.map((pro, i) => (
                    <li key={`pro-${i}`} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">•</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Cons */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Cons</h3>
                <ul className="space-y-2">
                  {tool.cons.map((con, i) => (
                    <li key={`con-${i}`} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500 mt-1">•</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Sticky Sidebar */}
          <aside className="bg-gray-50 rounded-xl p-6 h-fit sticky top-24 border">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-3xl font-bold text-gray-900">{tool.priceNote}</p>
            </div>
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="font-semibold">{tool.rating}</span>
              <span className="text-gray-500 text-sm">({tool.reviewCount} reviews)</span>
            </div>
            <a
              href={tool.affiliateLink}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition mb-3"
            >
              Visit Official Website →
            </a>
            <p className="text-xs text-gray-500 text-center">
              Affiliate Link • We may earn a commission
            </p>
          </aside>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
              #{tag}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}