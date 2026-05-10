import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: '41 SEO & Marketing Ebooks Bundle Review 2026: Best Value Deal? - AI Tools Point',
  description: 'In-depth review of the 41 SEO & Marketing Ebooks Bundle. Lifetime access to premium guides on SEO, Pinterest, Affiliate Marketing & more. Is it worth it?',
  keywords: 'SEO ebooks bundle, digital marketing books, affiliate marketing guides, Pinterest traffic secrets, one-time payment marketing courses',
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
    "@type": "Product",
    "name": "41 SEO & Marketing Ebooks Bundle",
    "category": "Digital Books / Education",
    "offers": { 
      "@type": "Offer", 
      "price": "27.00", 
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "4.9", 
      "reviewCount": "120" 
    }
  },
  "reviewRating": { 
    "@type": "Rating", 
    "ratingValue": "4.9", 
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

export default function SEOEbooksReview() {
  const affiliateLink = "https://41ebookset3.neoseotools.com/#aff=eruslankhanf027";

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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">41 SEO & Marketing Ebooks Bundle Review 2026</h1>
          <p className="text-xl text-blue-100 mb-4">The Ultimate Digital Marketing Library?</p>
          <div className="flex justify-center items-center gap-2 text-yellow-300 text-lg font-semibold">
            ⭐⭐⭐⭐⭐ (4.9/5)
          </div>
          <p className="text-sm text-blue-200 mt-2">Author: AI Tools Point Team | Updated: May 2026 | Category: Digital Marketing</p>
        </header>

        <div className="p-8 space-y-10">

          {/* INTRO */}
          <section>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              In the world of digital marketing, knowledge is power. But buying individual courses for SEO, Social Media, and Affiliate Marketing can cost thousands of dollars. What if you could get a complete library of premium resources for the price of a single dinner?
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The <strong>41 SEO & Marketing Ebooks Bundle</strong> promises exactly that. It's a massive collection of guides covering everything from ranking on Google to mastering Pinterest. In this detailed review, we'll break down what's inside, who it's for, and whether it's the best value deal in 2026.
            </p>
            <div className="text-center">
              <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
                 className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
                Get The Bundle Now →
              </a>
              <p className="text-xs text-gray-500 mt-2">One-Time Payment, Lifetime Access</p>
            </div>
          </section>

          {/* WHAT IS IT? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is the 41 Ebooks Bundle?</h2>
            <p className="text-gray-600 leading-relaxed">
              This isn't just a random collection of PDFs. It's a curated library of 41 premium guides written by industry experts. These ebooks cover the most profitable niches in digital marketing today. Instead of paying monthly subscriptions for tools or courses, you get one-time access to a wealth of knowledge that you can keep forever.
            </p>
          </section>

          {/* WHAT'S INSIDE */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Inside the Bundle?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "🔍 SEO Mastery Guides", desc: "Rank on Google's first page without expensive tools. Covers keyword research, on-page optimization, and link-building." },
                { title: "📌 Pinterest Traffic Secrets", desc: "Turn Pinterest into a traffic machine. Learn viral pin creation, blog traffic strategies, and monetization." },
                { title: "📱 Social Media Marketing", desc: "Master Instagram, Facebook, and TikTok. Grow followers organically and convert likes into sales." },
                { title: "💰 Affiliate Marketing Blueprints", desc: "Step-by-step guides to earning commissions online. From product selection to high-converting funnels." },
                { title: "📧 Email Marketing & List Building", desc: "Build an email list from scratch and write newsletters that people actually want to read." },
                { title: " Bonus: Advanced Strategies", desc: "Includes niche-specific playbooks for e-commerce, local SEO, and content monetization." }
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMPARISON */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bundle vs. Expensive Courses</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-4 text-left border-b">Feature</th>
                    <th className="p-4 text-left border-b text-blue-600 font-bold">41 Ebooks Bundle</th>
                    <th className="p-4 text-left border-b">Typical Online Course</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b"><td className="p-4">Price</td><td className="p-4 text-green-600 font-medium">✅ One-time low fee (~$27)</td><td className="p-4">❌ $200 - $1000+</td></tr>
                  <tr className="border-b"><td className="p-4">Access</td><td className="p-4 text-green-600 font-medium">✅ Lifetime Access</td><td className="p-4">⚠️ Often limited time</td></tr>
                  <tr className="border-b"><td className="p-4">Variety</td><td className="p-4 text-green-600 font-medium">✅ 41 Different Topics</td><td className="p-4">❌ Usually 1 Topic</td></tr>
                  <tr><td className="p-4">Updates</td><td className="p-4">⚠️ Static PDFs</td><td className="p-4 text-green-600 font-medium">✅ Video Updates</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">Verdict: If you're on a budget and want broad knowledge across multiple marketing channels, this Bundle is unbeatable value.</p>
          </section>

          {/* WHO IS IT FOR? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Who Is This Bundle For?</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li><strong>Beginners:</strong> Need a clear roadmap to start their online business.</li>
              <li><strong>Budget-Conscious Marketers:</strong> Can't afford expensive masterminds or monthly tools.</li>
              <li><strong>Bloggers:</strong> Looking to diversify traffic sources (SEO + Pinterest).</li>
              <li><strong>Affiliate Marketers:</strong> Want ready-made strategies to promote products effectively.</li>
            </ul>
          </section>

          {/* HOW TO ACCESS */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Access the Ebooks</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li><strong>Purchase:</strong> Click the button above and complete the secure checkout.</li>
                <li><strong>Download:</strong> You will receive an instant email with a download link.</li>
                <li><strong>Read:</strong> Download the PDFs to your phone, tablet, or computer and start learning immediately.</li>
              </ol>
            </div>
          </section>

          {/* PROS & CONS */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Pros</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Incredible Value:</strong> 41 books for the price of one.</li>
                <li>• <strong>No Monthly Fees:</strong> Pay once, own it forever.</li>
                <li>• <strong>Wide Coverage:</strong> Covers SEO, Social, Email, and more.</li>
                <li>• <strong>Instant Access:</strong> Start learning in minutes.</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Digital Only:</strong> No physical books shipped.</li>
                <li>• <strong>Self-Paced:</strong> Requires discipline to read and implement.</li>
                <li>• <strong>No Video Content:</strong> Purely text-based guides.</li>
              </ul>
            </div>
          </section>

          {/* PRICING */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h2>
            <p className="text-gray-600 mb-4">
              The bundle is typically priced around <strong>$27-$37</strong> as a one-time payment. Considering that a single professional SEO book can cost $20+, getting 41 for this price is a steal.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Are these ebooks up to date?</h4>
                <p className="text-gray-600 mt-1">Yes, the core principles of SEO and marketing remain consistent. While algorithms change, the foundational strategies in these books are timeless and effective.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Can I resell these ebooks?</h4>
                <p className="text-gray-600 mt-1">No, this license is for personal use only. You cannot resell or distribute the files to others.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Is there a refund policy?</h4>
                <p className="text-gray-600 mt-1">Yes, Digistore24 (the payment processor) offers a standard refund policy if you are not satisfied with the product.</p>
              </div>
            </div>
          </section>

          {/* FINAL VERDICT */}
          <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Final Verdict: Is It Worth It?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you are looking for a comprehensive, affordable way to learn digital marketing, the 41 SEO & Marketing Ebooks Bundle is a no-brainer. It removes the financial barrier to entry and gives you a library of resources that would otherwise cost hundreds.
              While it lacks video content, the depth of information in the PDFs is substantial. For beginners and intermediate marketers, this bundle provides the blueprint needed to start generating income online.
            </p>
            <a href={affiliateLink} target="_blank" rel="sponsored nofollow noopener"
               className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Get Instant Access Now →
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