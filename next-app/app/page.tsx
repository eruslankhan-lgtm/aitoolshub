import Link from "next/link";
import Script from "next/script";
import { Metadata, Viewport } from "next";

// ✅ SEO & Social Metadata
export const metadata: Metadata = {
  title: "AI Tools Point - Best AI Tools & Honest Reviews 2026",
  description: "Discover the best AI tools for business, writing, YouTube growth, and productivity with honest reviews and exclusive deals.",
  keywords: ["AI tools", "AI software", "YouTube AI", "business automation", "writing tools", "AI reviews"],
  openGraph: {
    title: "AI Tools Point - Best AI Tools & Honest Reviews 2026",
    description: "Discover the best AI tools for business, writing, YouTube growth, and productivity with honest reviews and exclusive deals.",
    images: [{ url: "https://aitoolspoint.site/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Point - Best AI Tools & Honest Reviews 2026",
    description: "Discover the best AI tools...",
    images: ["https://aitoolspoint.site/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ Tool Interface
interface Tool {
  id: number;
  name: string;
  slug: string;
  category: string;
  badge: string;
  description: string;
  price: string;
  tags: string[];
  affiliateLink: string;
}

// ✅ COMPLETE DATA: All 7 Tools (Hardcoded for 100% reliability)
const tools: Tool[] = [
  {
    id: 1,
    name: "Tube Magic AI",
    slug: "tube-magic",
    category: "YouTube Growth",
    badge: "Top Rated",
    description: "AI-powered assistant for YouTube creators. Generate viral titles, tags, and ideas in seconds.",
    price: "$29/mo",
    tags: ["YouTube", "SEO", "Video AI"],
    affiliateLink: "https://tubemagic.com/ds#aff=eruslankhanf027"
  },
  {
    id: 2,
    name: "SEO & Marketing Ebooks Bundle",
    slug: "seo-ebooks",
    category: "Digital Marketing",
    badge: "Best Value",
    description: "Lifetime access to 41 premium guides on SEO, Pinterest, Affiliate Marketing & more.",
    price: "~$27 (One-Time)",
    tags: ["SEO", "Marketing", "Ebooks"],
    affiliateLink: "https://41ebookset3.neoseotools.com/#aff=eruslankhanf027"
  },
  {
    id: 3,
    name: "AI Book Writer",
    slug: "ai-book-writer",
    category: "Writing Software",
    badge: "New Release",
    description: "Write complete books & textbooks using GPT-5 & local AI. Lifetime desktop license.",
    price: "€29.99 (One-Time)",
    tags: ["Writing", "AI", "Self-Publishing"],
    affiliateLink: "https://www.aibookwriter.de/en#aff=eruslankhanf027"
  },
  {
    id: 4,
    name: "Remixable",
    slug: "remixable",
    category: "Business Automation",
    badge: "All-in-One",
    description: "Build websites, create videos & develop software without coding. Founder pricing available.",
    price: "One-Time Fee",
    tags: ["No-Code", "Software", "Marketing"],
    affiliateLink: "https://www.digistore24.com/redir/467549/eruslankhanf027/"
  },
  {
    id: 5,
    name: "Writelytic",
    slug: "writelytic",
    category: "AI Business Tools",
    badge: "Whitelabel Ready",
    description: "Build, whitelabel & resell AI tools without coding. GPT-4o, DeepSeek support, custom domains.",
    price: "$29/mo",
    tags: ["No-Code", "Whitelabel", "SaaS"],
    affiliateLink: "https://writelytic.com/#aff=eruslankhanf027"
  },
  // ✅ NEW: ExpertSlides
  {
    id: 6,
    name: "ExpertSlides",
    slug: "expertslides",
    category: "Presentation Software",
    badge: "High Commission",
    description: "1000+ professional PowerPoint templates & assets with one-click customization.",
    price: "From €9.99/mo",
    tags: ["PowerPoint", "Presentations", "Design", "Business"],
    affiliateLink: "https://www.digistore24.com/redir/456090/eruslankhanf027/"
  },
  // ✅ NEW: DigiMember
  {
    id: 7,
    name: "DigiMember",
    slug: "digimember",
    category: "WordPress Membership Plugin",
    badge: "Recurring Commission",
    description: "Turn any WordPress site into a powerful membership platform with content protection & automated payments.",
    price: "From $97",
    tags: ["WordPress", "Membership", "Online Courses", "Content Protection"],
    affiliateLink: "https://www.digistore24.com/redir/256199/eruslankhanf027/"
  }
];

export default function Home() {
  // ✅ Schema.org JSON-LD
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Tools Point",
    "url": "https://aitoolspoint.site",
  };

  return (
    <>
      {/* ✅ Inject Schema */}
      <Script 
        id="website-schema" 
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(websiteSchema)}
      </Script>
      
      {/* ✅ WHITE BACKGROUND */}
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">AI Tools Point</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Honest reviews. Real results. Exclusive AI deals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Editor Tested</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Affiliate Deals</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Updated Weekly</span>
            </div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Featured AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <article key={tool.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{tool.badge}</span>
                    <span className="text-sm opacity-90">{tool.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                </div>
                
                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 leading-relaxed mb-5">{tool.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6 mt-auto">
                    <span className="text-2xl font-bold text-green-600">{tool.price}</span>
                  </div>
                  
                  {/* Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={tool.affiliateLink} 
                      target="_blank" 
                      rel="sponsored nofollow noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                    >
                      Get Deal
                    </a>
                    {/* ✅ CORRECT LINK: /reviews/ (plural) */}
                    <Link 
                      href={`/reviews/${tool.slug}`}
                      className="block w-full text-center border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
                    >
                      Read Review
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-10 px-4 mt-16">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-white text-2xl font-bold mb-4">AI Tools Point</h3>
            <div className="flex justify-center gap-6 text-sm mb-6">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/affiliate-disclosure" className="hover:text-white">Disclosure</Link>
            </div>
            <p className="text-xs text-gray-500">© 2026 AI Tools Point. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}