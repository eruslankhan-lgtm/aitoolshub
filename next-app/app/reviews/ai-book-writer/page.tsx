import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: 'AI Book Writer Review 2026: Write Books with GPT-5? - AI Tools Point',
  description: 'In-depth review of AI Book Writer. Desktop software for writing books instantly using GPT-5, local AI models, and auto cover design. Lifetime access.',
  keywords: 'AI book writer software, write books with AI, GPT-5 book generator, local AI writing tool, desktop software for authors, self-publishing AI',
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
    "name": "AI Book Writer",
    "applicationCategory": "WritingSoftware",
    "operatingSystem": "Windows, macOS",
    "offers": { 
      "@type": "Offer", 
      "price": "29.99", 
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "4.7", 
      "reviewCount": "85" 
    }
  },
  "reviewRating": { 
    "@type": "Rating", 
    "ratingValue": "4.7", 
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

export default function AIBookWriterReview() {
  const affiliateLink = "https://www.aibookwriter.de/en#aff=eruslankhanf027";

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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Book Writer Review 2026</h1>
          <p className="text-xl text-blue-100 mb-4">Write Books with GPT-5 & Local AI?</p>
          <div className="flex justify-center items-center gap-2 text-yellow-300 text-lg font-semibold">
            ⭐⭐⭐⭐⭐ (4.7/5)
          </div>
          <p className="text-sm text-blue-200 mt-2">Author: AI Tools Point Team | Updated: May 2026 | Category: Writing Software</p>
        </header>

        <div className="p-8 space-y-10">

          {/* INTRO */}
          <section>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Writing a book used to take months or even years of struggle. But what if you could generate a complete manuscript, structure, and even a cover design in just minutes?
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              <strong>AI Book Writer</strong> is a desktop application that claims to do exactly that. Leveraging the power of GPT-5, local AI models like Ollama, and advanced image generators, it promises to turn your ideas into professional books and textbooks instantly. In this detailed review, we'll explore its features, pricing, and whether it's the right tool for aspiring authors in 2026.
            </p>
            <div className="text-center">
              <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
                 className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
                Try AI Book Writer Risk-Free →
              </a>
              <p className="text-xs text-gray-500 mt-2">One-Time Payment, Lifetime Access</p>
            </div>
          </section>

          {/* WHAT IS IT? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is AI Book Writer?</h2>
            <p className="text-gray-600 leading-relaxed">
              AI Book Writer is a standalone desktop software designed for authors, educators, and content creators. Unlike online tools that charge monthly subscriptions, this is a one-time purchase app that runs on your computer. It supports multiple AI providers (OpenAI, Claude, Gemini, DeepSeek) and even allows you to use free local models via Ollama, giving you complete control over your writing process and costs.
            </p>
          </section>

          {/* KEY FEATURES */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "🧠 GPT-5 & Multi-Model Support", desc: "Integrates with the latest AI models including GPT-5 for high-quality reasoning and narrative flow. Switch between providers like Groq or DeepSeek." },
                { title: "📖 Complete Book Generation", desc: "Generate a full 5-act structure, character arcs, and entire manuscripts in minutes. Supports fiction, non-fiction, and educational textbooks." },
                { title: "🎨 Automated Cover Design", desc: "Uses DALL-E 3 and Ideogram 3.0 to generate stunning, print-ready cover designs based on your book's content. No need for expensive designers." },
                { title: " Local AI Support (Privacy & Cost)", desc: "Supports local AI models like Ollama and LM Studio. Write books offline without paying per-token fees to cloud providers." },
                { title: "📄 Professional Export", desc: "Export as professionally formatted DOCX files ready for Amazon KDP. Includes customizable fonts, layouts, and academic formatting." }
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
                <li>• <strong>One-Time Payment:</strong> No monthly subscription fees.</li>
                <li>• <strong>Fast Generation:</strong> Create full books in 10-30 minutes.</li>
                <li>• <strong>Flexible AI Models:</strong> Use GPT-5, Claude, or free local models.</li>
                <li>• <strong>All-in-One:</strong> Writing, structuring, and cover design in one app.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Desktop Only:</strong> Requires Windows or macOS installation.</li>
                <li>• <strong>API Keys Needed:</strong> For cloud models, you need your own API keys.</li>
                <li>• <strong>Learning Curve:</strong> Configuring local AI might be technical for some.</li>
              </ul>
            </div>
          </section>

          {/* WHO IS IT FOR? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Who Is AI Book Writer For?</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li><strong>Indie Authors:</strong> Who want to publish multiple books quickly on Amazon KDP.</li>
              <li><strong>Educators:</strong> Looking to create custom textbooks and learning materials.</li>
              <li><strong>Content Marketers:</strong> Who need long-form guides and eBooks for lead generation.</li>
              <li><strong>Privacy-Conscious Users:</strong> Who prefer running AI locally on their own hardware.</li>
            </ul>
          </section>

          {/* PRICING */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h2>
            <p className="text-gray-600 mb-4">
              Unlike most AI tools that charge $20-$50/month, AI Book Writer offers a <strong>lifetime license</strong> for a one-time fee.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-4 text-left border-b">Plan</th>
                    <th className="p-4 text-left border-b">Price</th>
                    <th className="p-4 text-left border-b">Features</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr><td className="p-4 font-medium">Complete Creator Package</td><td className="p-4">€29.99 (One-Time)</td><td className="p-4">Lifetime updates, unlimited books, all genres, textbook support, local AI support.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">Note: Using cloud AI models like GPT-5 requires your own API key (usage costs apply). Local models are free.</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Do I need an internet connection?</h4>
                <p className="text-gray-600 mt-1">Yes, if you use cloud models like GPT-5. However, if you use local models like Ollama, you can write completely offline.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Can I sell the books I create?</h4>
                <p className="text-gray-600 mt-1">Yes! You own 100% of the rights to any content generated by AI Book Writer. You can publish and sell them on Amazon, Barnes & Noble, or your own website.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Is there a refund policy?</h4>
                <p className="text-gray-600 mt-1">Yes, the vendor offers a 30-day money-back guarantee if you are not satisfied with the software.</p>
              </div>
            </div>
          </section>

          {/* FINAL VERDICT */}
          <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Final Verdict: Is AI Book Writer Worth It?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you are looking to speed up your writing process without breaking the bank, AI Book Writer is an exceptional value. The ability to use free local AI models makes it unique in a market dominated by expensive subscriptions.
              While it requires a bit of setup for local models, the payoff is huge: unlimited book creation with zero recurring costs. For indie authors and educators, this tool is a game-changer in 2026.
            </p>
            <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
               className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Get Instant Access to AI Book Writer →
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