import { notFound } from 'next/navigation';
import Link from 'next/link';
import tools from '../../../data/tools.json';

// ✅ Static params generate karein (SSG ke liye - SEO friendly)
export function generateStaticParams() {
  return tools.map((tool: any) => ({
    slug: tool.slug,
  }));
}

// ✅ Main Page Component
export default function ReviewPage({ params }: { params: { slug: string } }) {
  // Tool dhoondo
  const tool = tools.find((t: any) => t.slug === params.slug);

  // Agar tool na mile toh Next.js ka built-in 404 dikhao
  if (!tool) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      
      {/* Back Link - Next.js Link component se */}
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
                {tool.pros.map((pro: string, i: number) => (
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
                {tool.cons.map((con: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">•</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Sidebar (Price + Button) */}
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
        {tool.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
            #{tag}
          </span>
        ))}
      </div>
    </main>
  );
}