import Link from 'next/link';
import { Metadata, Viewport } from 'next';

// ✅ SEO Metadata (CORRECT SYNTAX)
export const metadata: Metadata = {
  title: 'Affiliate Disclosure - AI Tools Point',
  description: 'Learn how AI Tools Point earns commissions through affiliate links. Full transparency about our review process and partnerships.',
};

// ✅ Viewport (CORRECT SYNTAX)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-6 transition font-medium">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-500 mb-8 border-b pb-4">Last updated: May 2026</p>
        
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            At <strong>AI Tools Point</strong>, transparency is core to everything we do. This disclosure explains how we operate our affiliate marketing program and how we maintain editorial independence.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">🔗 How We Earn Commissions</h2>
            <p>
              AI Tools Point participates in various affiliate marketing programs. This means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. When you click on an affiliate link and make a purchase, we receive a small percentage of the sale at <strong>no extra cost to you</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">✅ Our Commitment to Honesty</h2>
            <p>
              We only recommend products and services that we have personally researched, tested, or genuinely believe will provide value to our readers. Our editorial team makes all review decisions independently. Affiliate commissions <strong>never influence</strong> our ratings, recommendations, or the content of our reviews.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">💡 Why Your Support Matters</h2>
            <p>
              Running a professional review site requires time, hosting, research, and continuous testing. Your support through affiliate purchases helps us keep AI Tools Point free to use and allows us to continue providing in-depth, unbiased reviews of the latest AI tools.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2">📧 Questions About This Policy?</h3>
            <p className="text-gray-600">
              If you have any questions about our affiliate partnerships, review process, or this disclosure, please reach out to us:
            </p>
            <a href="mailto:contact@aitoolspoint.site" className="inline-block mt-3 text-blue-600 font-semibold hover:underline">
              contact@aitoolspoint.site
            </a>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline font-medium">Back to Home</Link>
          <p className="mt-2">© 2026 AI Tools Point. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}