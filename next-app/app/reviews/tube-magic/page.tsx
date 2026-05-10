import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: 'Tube Magic AI Review 2026: Best AI for YouTube Growth? - AI Tools Point',
  description: 'In-depth Tube Magic AI review. Features, pricing, pros/cons, and comparison with VidIQ & TubeBuddy.',
  keywords: 'Tube Magic AI review, YouTube AI tool, AI title generator, YouTube SEO, VidIQ alternative',
};

// ✅ Viewport for Mobile
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// ✅ Schema.org JSON-LD for Rich Snippets
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "SoftwareApplication",
    "name": "Tube Magic AI",
    "applicationCategory": "VideoProductionApplication",
    "offers": { 
      "@type": "Offer", 
      "price": "29.00", 
      "priceCurrency": "USD" 
    },
    "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "4.8", 
      "reviewCount": "150" 
    }
  },
  "reviewRating": { 
    "@type": "Rating", 
    "ratingValue": "4.8", 
    "bestRating": "5" 
  },
  "author": { 
    "@type": "Person", 
    "name": "Eruslan Khan" 
  },
  "publisher": { 
    "@type": "Organization", 
    "name": "AI Tools Point" 
  }
};

export default function TubeMagicReview() {
  const affiliateLink = "https://tubemagic.com/ds#aff=eruslankhanf027";

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      
      {/* ✅ Schema Script */}
      <Script id="schema-review" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
          <Link href="/" className="inline-block text-sm text-blue-100 hover:text-white mb-4 transition">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tube Magic AI Review 2026</h1>
          <p className="text-xl text-blue-100 mb-4">The Secret Weapon for YouTubers</p>
          <div className="flex justify-center items-center gap-2 text-yellow-300 text-lg font-semibold">
            ⭐⭐⭐⭐⭐ (4.8/5)
          </div>
          <p className="text-sm text-blue-200 mt-2">Author: Eruslan Khan | Updated: May 2026</p>
        </header>

        <div className="p-8 space-y-10">

          {/* Intro & CTA */}
          <section>
            <p className="text-gray-700 leading-relaxed text-lg">
              Creating consistent content on YouTube is hard. What if an AI could do it for you in seconds? 
              Enter <strong>Tube Magic AI</strong>. This tool automates YouTube SEO and ideation. 
              In this review, we explore its features, pricing, and compare it with VidIQ & TubeBuddy.
            </p>
            <div className="mt-6 text-center">
              <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
                 className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
                Try Tube Magic AI Risk-Free →
              </a>
              <p className="text-xs text-gray-500 mt-2">Includes Free Trial Option</p>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "AI Title Generator", desc: "Generates catchy, high-CTR title options based on trending data." },
                { title: "Smart Tag Optimizer", desc: "Suggests relevant, high-ranking tags to boost discoverability." },
                { title: "Viral Idea Brainstorming", desc: "Provides endless video concepts based on trending niches." },
                { title: "Description Writer", desc: "Auto-drafts SEO-friendly descriptions with keywords & CTAs." }
              ].map((feat, i) => (
                <div key={i} className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2">{feat.title}</h3>
                  <p className="text-gray-600 text-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tube Magic AI vs. Competitors</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-4 text-left border-b">Feature</th>
                    <th className="p-4 text-left border-b text-blue-600 font-bold">Tube Magic AI</th>
                    <th className="p-4 text-left border-b">VidIQ / TubeBuddy</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b"><td className="p-4">AI Generation</td><td className="p-4 text-green-600 font-medium">✅ Advanced AI</td><td className="p-4">⚠️ Basic AI</td></tr>
                  <tr className="border-b"><td className="p-4">Ease of Use</td><td className="p-4 text-green-600 font-medium">✅ Very Easy</td><td className="p-4">⚠️ Steeper curve</td></tr>
                  <tr className="border-b"><td className="p-4">Price</td><td className="p-4 text-green-600 font-medium">✅ Affordable ($29/mo)</td><td className="p-4">❌ Can be expensive</td></tr>
                  <tr><td className="p-4">Analytics</td><td className="p-4">⚠️ Basic</td><td className="p-4 text-green-600 font-medium">✅ Deep Analytics</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">Verdict: Choose VidIQ for deep analytics. Choose Tube Magic for fast content creation & idea generation.</p>
          </section>

          {/* Pros & Cons */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Pros</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Time-Saver:</strong> Cuts metadata work from hours to minutes.</li>
                <li>• <strong>SEO Boost:</strong> Optimized tags/titles help rank higher.</li>
                <li>• <strong>User-Friendly:</strong> Clean interface, great for beginners.</li>
                <li>• <strong>Idea Generation:</strong> Beats creator's block.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Internet Required:</strong> Needs stable connection for AI.</li>
                <li>• <strong>Limited Analytics:</strong> Not as deep as dedicated tools.</li>
              </ul>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tube Magic AI Pricing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-4 text-left border-b">Plan</th>
                    <th className="p-4 text-left border-b">Price</th>
                    <th className="p-4 text-left border-b">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b"><td className="p-4 font-medium">Free Trial</td><td className="p-4">$0</td><td className="p-4">Beginners testing the tool</td></tr>
                  <tr className="border-b"><td className="p-4 font-medium">Pro Plan</td><td className="p-4">$29/mo</td><td className="p-4">Serious Creators (Unlimited)</td></tr>
                  <tr><td className="p-4 font-medium">Agency Plan</td><td className="p-4">$99/mo</td><td className="p-4">Teams & Bulk Generation</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Does it work for small channels?</h4>
                <p className="text-gray-600 mt-1">Yes! Small channels benefit most as proper SEO helps new audiences discover you.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Can I use it for TikTok/Instagram?</h4>
                <p className="text-gray-600 mt-1">While built for YouTube, title & idea generation works great for short-form content too.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Is there a free version?</h4>
                <p className="text-gray-600 mt-1">Yes, they typically offer a free trial or limited tier to test capabilities.</p>
              </div>
            </div>
          </section>

          {/* Final Verdict & CTA */}
          <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Final Verdict: Is It Worth It?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you're serious about YouTube growth, Tube Magic AI is a worthy investment. It saves time, improves metadata quality, 
              and gives you a competitive edge. For $29/month, the ROI in time saved and potential growth is substantial.
            </p>
            <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
               className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Get Started with Tube Magic AI →
            </a>
          </section>

          {/* Disclosure */}
          <footer className="text-center text-xs text-gray-400 pt-8 border-t">
            <p className="mb-2">© 2026 AI Tools Point. All rights reserved.</p>
            <p>Disclosure: We may earn a commission if you purchase through this link at no extra cost to you.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}