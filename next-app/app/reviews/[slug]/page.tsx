import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Script from 'next/script';
import tools from '@/data/tools.json';
import Link from 'next/link';

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

export function generateStaticParams() {
  return (tools as Tool[]).map((tool) => ({
    slug: tool.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = (tools as Tool[]).find((t) => t.slug === params.slug);
  
  return {
    title: `${tool?.name} Review 2026 - AI Tools Point`,
    description: tool?.shortDescription,
    keywords: tool?.tags.join(', '),
    authors: [{ name: tool?.author || 'Arslan Khan' }],
  };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const tool = (tools as Tool[]).find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  // ✅ Schema Markup for Google Rich Snippets
  const schemaData = {
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": tool.rating,
        "reviewCount": tool.reviewCount
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": tool.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": tool.author
    },
    "datePublished": tool.datePublished
  };

  return (
    <>
      {/* ✅ JSON-LD Schema for Google */}
      <Script id="schema-review" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaData)}
      </Script>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Homepage
        </Link>

        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
            {tool.badge}
          </span>
          <h1 className="text-4xl font-bold mb-2">{tool.name} Review</h1>
          <p className="text-gray-600 text-lg">{tool.shortDescription}</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tool.fullDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Pros</h3>
                <ul className="space-y-2">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">•</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Cons</h3>
                <ul className="space-y-2">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500 mt-1">•</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

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
              // ✅ FIXED: Added sponsored + nofollow for affiliate SEO compliance
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

        <div className="flex flex-wrap gap-2 mt-8">
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