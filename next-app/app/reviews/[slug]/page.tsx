import { notFound } from 'next/navigation';
import Link from 'next/link';
import tools from '../../../data/tools.json';

// ✅ Simple type for TypeScript
type Tool = {
  slug: string;
  name: string;
  [key: string]: any;
};

const typedTools = tools as Tool[];

// ✅ Generate static pages for all tools
export function generateStaticParams() {
  return typedTools.map((tool) => ({
    slug: tool.slug,
  }));
}

// ✅ Main Page Component
export default function ReviewPage({ params }: { params: { slug: string } }) {
  const tool = typedTools.find((t) => t.slug === params.slug);

  // ✅ Agar tool na mile toh 404
  if (!tool) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Homepage
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{tool.name} Review</h1>
      <p className="text-gray-600 mb-6">{tool.description || tool.shortDescription}</p>
      
      <div className="bg-gray-50 p-6 rounded-xl">
        <p><strong>Price:</strong> {tool.priceNote || tool.price}</p>
        <p><strong>Category:</strong> {tool.category}</p>
        <p><strong>Rating:</strong> ⭐ {tool.rating}</p>
      </div>
      
      <a
        href={tool.affiliateLink}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Visit Official Website →
      </a>
    </main>
  );
}