import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import toolsData from '../../../data/tools.json';

// ✅ Force dynamic rendering (bypasses static cache — fixes 404)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// ✅ Tool Interface (Type Safety)
interface Tool {
  slug: string;
  name: string;
  description?: string;
  shortDescription?: string;
  fullDescription?: string;
  price?: string;
  priceNote?: string;
  priceCurrency?: string;
  category?: string;
  rating?: string;
  reviewCount?: string;
  author?: string;
  affiliateLink?: string;
  featuredImage?: string;
  pros?: string[];
  cons?: string[];
  tags?: string[];
  badge?: string;
  [key: string]: any;
}

// ✅ Safe Data Load
const tools = Array.isArray(toolsData) ? (toolsData as Tool[]) : [];

// ✅ Main Review Page Component (Next.js 15+ Compatible)
export default async function ReviewPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  // ✅ 404 Handling
  if (!tool) {
    notFound();
    return null;
  }

  return (
    // ✅ WHITE BACKGROUND — Full Page
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition"
        >
          ← Back to Homepage
        </Link>

        {/* Header Section */}
        <header className="mb-10">
          {tool.badge && (
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              {tool.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            {tool.name} Review
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            {tool.shortDescription || tool.description || 'Detailed review and analysis.'}
          </p>
          
          {/* Featured Image */}
          {tool.featuredImage && tool.featuredImage.startsWith('http') && (
            <div className="mt-6 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src={tool.featuredImage} 
                alt={`${tool.name} featured image`}
                width={800} 
                height={400}
                className="w-full h-64 md:h-80 object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Quick Stats Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-1 font-medium">💰 Price</p>
              <p className="text-xl font-bold text-gray-900">
                {tool.priceNote || tool.price || 'Contact for pricing'}
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-1 font-medium">📂 Category</p>
              <p className="text-lg font-semibold text-gray-900">
                {tool.category || 'General'}
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-1 font-medium">⭐ Rating</p>
              <p className="text-lg font-semibold text-yellow-600">
                {tool.rating ? `⭐ ${tool.rating}/5` : 'N/A'}
                {tool.reviewCount && (
                  <span className="text-gray-600 text-sm ml-1">
                    ({tool.reviewCount} reviews)
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        {tool.affiliateLink && (
          <div className="mb-12 text-center">
            <a
              href={tool.affiliateLink}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Visit Official Website →
            </a>
            <p className="text-xs text-gray-500 mt-3">
              🔗 Affiliate Link • We may earn a commission at no extra cost to you
            </p>
          </div>
        )}

        {/* Full Review Content */}
        {(tool.fullDescription || tool.description) && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-3">
              Overview
            </h2>
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg">{tool.fullDescription || tool.description}</p>
            </div>
          </section>
        )}

        {/* Pros & Cons Section */}
        {(tool.pros?.length || tool.cons?.length) && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-3">
              Pros & Cons
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pros */}
              {tool.pros && tool.pros.length > 0 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    ✅ What We Like
                  </h3>
                  <ul className="space-y-3">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Cons */}
              {tool.cons && tool.cons.length > 0 && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    ❌ What Could Be Better
                  </h3>
                  <ul className="space-y-3">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-red-500 mt-1 text-lg">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Tags Section */}
        {tool.tags && tool.tags.length > 0 && (
          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Author / Review Info */}
        {(tool.author || tool.datePublished) && (
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {tool.author && (
                <p>
                  <strong>Reviewed by:</strong> {tool.author}
                </p>
              )}
              {tool.datePublished && (
                <p>
                  <strong>Published:</strong> {new Date(tool.datePublished).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}