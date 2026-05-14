import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import tools from '../../../data/tools.json';

// ✅ Tool type define karein (TypeScript ke liye)
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

// ✅ Tools array ko properly type karein
const typedTools = tools as Tool[];

// ✅ Static params generate karein (SSG ke liye - SEO friendly)
export function generateStaticParams() {
  return typedTools.map((tool) => ({
    slug: tool.slug,
  }));
}

// ✅ SEO Metadata (Dynamic - Google ke liye)
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = typedTools.find((t) => t.slug === params.slug);
  
  if (!tool) {
    return {
      title: 'Not Found',
      description: 'The requested tool review could not be found.',
    };
  }
  
  return {
    title: `${tool.name} Review 2026 - AI Tools Point`,
    description: tool.shortDescription,
    keywords: tool.tags.join(', '),
    authors: [{ name: tool.author }],
    openGraph: {
      title: `${tool.name} Review - AI Tools Point`,
      description: tool.shortDescription,
      images: tool.featuredImage ? [{ url: tool.featuredImage }] : undefined,
    },
  };
}

// ✅ Main Page Component
export default function ReviewPage({ params }: { params: { slug: string } }) {
  // ✅ Tool dhoondo with proper type
  const tool = typedTools.find((t) => t.slug === params.slug);

  // ✅ Agar tool na mile toh 404 dikhao
  if (!tool) {
    notFound();
  }

  // ✅ Schema.org JSON-LD for Google Rich Snippets
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
      {/* ✅ JSON-LD Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Back Link */}
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Homepage
        </Link>

        {/* Header Section */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
            {tool.badge}
          </span>
          <h1 className="text-4xl font-bold mb-2">{tool.name} Review</h1>
          <p className="text-gray-600 text-lg">{tool.shortDescription}</p>
          
          {/* Featured Image (Optional - agar URL valid hai) */}
          {tool.featuredImage && tool.featuredImage.startsWith('http') && (
            <img 
              src={tool.featuredImage} 
              alt={tool.name}
              className="mt-4 rounded-xl shadow-lg w-full h-48 object-cover"
              loading="lazy"
            />
          )}
        </header>

        {/* Content Grid: Main + Sidebar */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          
          {/* Left Column: Description + Pros/Cons */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Overview */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tool.fullDescription}</p>
            </div>

            {/* Pros & Cons Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Pros */}
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
              
              {/* Cons */}
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

          {/* Right Column: Sticky Sidebar (Price + CTA) */}
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
            
            {/* Affiliate Link - SEO Compliant */}
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

        {/* Tags Section */}
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