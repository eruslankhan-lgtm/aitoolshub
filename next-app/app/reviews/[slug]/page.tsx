import { notFound } from 'next/navigation';
import Link from 'next/link';
// ✅ Relative path (sab se safe option)
import toolsData from '../../../data/tools.json';

// ✅ Force dynamic rendering (Cache bypass karega - 404 fix)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// ✅ Tool Interface (Type Safety ke liye)
interface Tool {
  slug: string;
  name: string;
  description?: string;
  shortDescription?: string;
  price?: string;
  priceNote?: string;
  category?: string;
  rating?: string;
  affiliateLink?: string;
  [key: string]: any; // Baaki fields ke liye flexible
}

// ✅ Safe Data Load
const tools = Array.isArray(toolsData) ? (toolsData as Tool[]) : [];

// ✅ Next.js 15+ Compatible: params ko await karna zaroori hai
export default async function ReviewPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  const tool = tools.find((t) => t.slug === slug);

  // ✅ Agar tool na mile toh 404 dikhao aur return karo
  if (!tool) {
    notFound();
    return null; 
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Homepage
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{tool.name} Review</h1>
      
      <p className="text-gray-600 mb-6 text-lg">
        {tool.description || tool.shortDescription || 'No description available.'}
      </p>
      
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-semibold text-lg">{tool.priceNote || tool.price || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-semibold">{tool.category || 'General'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-semibold text-yellow-600">⭐ {tool.rating || 'N/A'}</p>
          </div>
        </div>
      </div>

      <a
        href={tool.affiliateLink || '#'}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="inline-block w-full md:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
      >
        Visit Official Website →
      </a>
    </main>
  );
}