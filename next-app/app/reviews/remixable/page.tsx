import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: 'Remixable Review 2026: Build Websites & Software Without Coding? - AI Tools Point',
  description: 'In-depth Remixable review. Build websites, create videos, and develop software without coding. All-in-one business builder with Founder pricing.',
  keywords: 'Remixable review, no-code website builder, create software without coding, AI video creator, all-in-one business tools, affiliate marketing software',
};

// ✅ Mobile Viewport
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
    "name": "Remixable",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": { 
      "@type": "Offer", 
      "price": "67.00", 
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "4.6", 
      "reviewCount": "95" 
    }
  },
  "reviewRating": { 
    "@type": "Rating", 
    "ratingValue": "4.6", 
    "bestRating": "5" 
  },
  "author": { 
    "@type": "Organization", 
    "name": "AI Tools Point Team" 
  },
  "publisher": { 
    "@type": "Organization", 
    "name": "AI Tools Point" 
  }
};

export default function RemixableReview() {
  const affiliateLink = "https://www.digistore24.com/redir/467549/eruslankhanf027/";

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      
      {/* ✅ Schema Script */}
      <Script id="schema-review" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
          <Link href="/" className="inline-block text-sm text-blue-100 hover:text-white mb-4 transition">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Remixable Review 2026</h1>
          <p className="text-xl text-blue-100 mb-4">Build Websites & Software Without Coding?</p>
          <div className="flex justify-center items-center gap-2 text-yellow-300 text-lg font-semibold">
            ⭐⭐⭐⭐½ (4.6/5)
          </div>
          <p className="text-sm text-blue-200 mt-2">Author: AI Tools Point Team | Updated: May 2026 | Category: Business Automation</p>
        </header>

        <div className="p-8 space-y-10">

          {/* INTRO */}
          <section>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Building an online business usually requires multiple tools: a website builder, a video creator, a software developer, and a traffic source. This can cost hundreds of dollars per month and require technical skills you might not have.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Enter <strong>Remixable</strong>. This cloud-based platform claims to automate every aspect of building an online business—from creating websites to developing software and generating videos—all without coding. In this detailed review, we’ll break down its features, pricing, and whether it’s worth your investment in 2026.
            </p>
            <div className="text-center">
              <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
                 className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
                Try Remixable Risk-Free →
              </a>
              <p className="text-xs text-gray-500 mt-2">Check for Founder Pricing & Bonuses</p>
            </div>
          </section>

          {/* WHAT IS IT? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Remixable?</h2>
            <p className="text-gray-600 leading-relaxed">
              Remixable is an all-in-one digital business suite designed for entrepreneurs who want to launch products quickly. It combines a Website Builder, Video Creator, and Software Generator into a single dashboard. The core idea is "Remixing"—taking proven templates, content, and designs, and customizing them with a single click to create unique assets for your brand.
            </p>
          </section>

          {/* KEY FEATURES */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "🌐 Remixable Website Builder", desc: "Unlike traditional builders, Remixable lets you 'remix' proven website blocks. Change colors, fonts, and copy with a few clicks. Includes 50+ niche packs." },
                { title: "🎬 Automated Video Creator", desc: "Create HD sales videos (VSLs) easily. Paste a script, choose an AI voice, and the system generates a video with synced stock footage automatically." },
                { title: "💻 Software Generator (No-Code)", desc: "Build simple cloud-based software tools (like calculators or trackers) without code. Host them securely and sell them for 100% profit." },
                { title: " Brand & Product Engine", desc: "Create logos, eCovers, and brand identities instantly. Includes 50+ resell-right software products you can rebrand and sell immediately." }
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROS & CONS */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Pros</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>All-in-One:</strong> Replaces multiple subscriptions (hosting, video tools).</li>
                <li>• <strong>No Coding Required:</strong> Perfect for non-techies and beginners.</li>
                <li>• <strong>Fast Launch:</strong> Build sites and products in minutes, not weeks.</li>
                <li>• <strong>Resell Rights:</strong> Sell existing tools or create new ones for profit.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Learning Curve:</strong> So many features can be overwhelming at first.</li>
                <li>• <strong>Template-Based:</strong> While customizable, you start from templates.</li>
                <li>• <strong>Internet Dependent:</strong> Being cloud-based, you need a stable connection.</li>
              </ul>
            </div>
          </section>

          {/* WHO IS IT FOR? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Who Is Remixable For?</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li><strong>Digital Marketers:</strong> Who need quick landing pages and VSLs for campaigns.</li>
              <li><strong>Entrepreneurs:</strong> Looking to launch their first software product without hiring developers.</li>
              <li><strong>Affiliate Marketers:</strong> Who want to create unique review videos and bonus packages easily.</li>
              <li><strong>Agencies:</strong> Offering web design or software creation services to clients.</li>
            </ul>
          </section>

          {/* PRICING */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Remixable Pricing</h2>
            <p className="text-gray-600 mb-4">
              Remixable typically offers a Founder’s Edition pricing model, which is a one-time fee rather than a monthly subscription. This makes it highly attractive compared to paying for separate tools.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-4 text-left border-b">Feature</th>
                    <th className="p-4 text-left border-b">Details</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b"><td className="p-4 font-medium">Price</td><td className="p-4">One-Time Fee (Founder's Deal)</td></tr>
                  <tr className="border-b"><td className="p-4 font-medium">Websites</td><td className="p-4">Unlimited Pages & Domains</td></tr>
                  <tr className="border-b"><td className="p-4 font-medium">Software</td><td className="p-4">Build & Sell Unlimited Tools</td></tr>
                  <tr className="border-b"><td className="p-4 font-medium">Videos</td><td className="p-4">Unlimited HD Video Creation</td></tr>
                  <tr><td className="p-4 font-medium">Support</td><td className="p-4">Live Chat & Training Included</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Do I need coding skills to use Remixable?</h4>
                <p className="text-gray-600 mt-1">No. Remixable is designed specifically for non-coders. The drag-and-drop interface and "remix" buttons handle all the technical aspects.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Can I really sell the software I create?</h4>
                <p className="text-gray-600 mt-1">Yes. Any software you build using the Software Generator is yours to keep and sell. You earn 100% of the profits.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Is there a monthly fee?</h4>
                <p className="text-gray-600 mt-1">The Founder’s Edition is typically a one-time payment. However, always check the official sales page for current offers, as pricing may change after the launch period.</p>
              </div>
            </div>
          </section>

          {/* FINAL VERDICT */}
          <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Final Verdict: Is Remixable Worth It?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you are tired of juggling multiple subscriptions and struggling with technical setups, Remixable is a powerful alternative. It consolidates website building, video creation, and software development into one affordable platform.
              While it may not replace high-end enterprise tools for massive corporations, for individual entrepreneurs and small businesses, it offers incredible value and speed. The ability to create and sell your own software without coding is a game-changer in 2026.
            </p>
            <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
               className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Get Instant Access to Remixable →
            </a>
          </section>

          {/* FOOTER */}
          <footer className="text-center text-xs text-gray-400 pt-8 border-t">
            <p className="mb-2">© 2026 AI Tools Point. All rights reserved.</p>
            <p className="mb-4">Disclosure: We may earn a commission if you purchase through this link at no extra cost to you.</p>
            <div className="space-x-4">
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