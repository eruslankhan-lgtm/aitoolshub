import Link from "next/link";

// ============================================
// SEO METADATA
// ============================================
export const meta Metadata = {
  title: "AI Tools Hub - Best AI Tools & Honest Reviews 2026",
  description: "Discover the best AI tools for business, writing, YouTube growth, and productivity with honest reviews and exclusive deals.",
  keywords: ["AI tools", "AI software", "YouTube AI", "business automation", "writing tools", "AI reviews", "best AI tools 2026"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ============================================
// AI TOOLS DATA (Tube Magic Added ✅)
// ============================================
const tools = [
  {
    id: 1,
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "Content Writing",
    badge: "Editor's Choice",
    description: "AI-powered content creation for marketing teams. Create blogs, ads, and social posts in seconds.",
    price: "From $49/mo",
    tags: ["Writing", "Marketing", "SEO"],
    affiliateLink: "https://your-affiliate-link.com/jasper",
  },
  {
    id: 2,
    name: "Copy.ai",
    slug: "copy-ai",
    category: "Copywriting",
    badge: "Best Free Plan",
    description: "Generate high-converting copy for ads, emails, and product descriptions with AI.",
    price: "Free + Paid",
    tags: ["Copywriting", "Sales", "Emails"],
    affiliateLink: "https://your-affiliate-link.com/copyai",
  },
  {
    id: 3,
    name: "Midjourney",
    slug: "midjourney",
    category: "Image Generation",
    badge: "Most Popular",
    description: "Create stunning AI-generated artwork and images. Perfect for designers and creators.",
    price: "$10/mo",
    tags: ["Images", "Design", "Art"],
    affiliateLink: "https://your-affiliate-link.com/midjourney",
  },
  {
    id: 4,
    name: "ChatGPT Plus",
    slug: "chatgpt-plus",
    category: "AI Assistant",
    badge: "Must Have",
    description: "Advanced AI chatbot for answering questions, writing help, coding, and productivity.",
    price: "$20/mo",
    tags: ["Chatbot", "Productivity", "Learning"],
    affiliateLink: "https://your-affiliate-link.com/chatgpt",
  },
  {
    id: 5,
    name: "Grammarly",
    slug: "grammarly",
    category: "Writing Assistant",
    badge: "Free Available",
    description: "AI-powered writing assistant that helps you write clear, mistake-free content.",
    price: "Free + Premium",
    tags: ["Writing", "Grammar", "Editing"],
    affiliateLink: "https://your-affiliate-link.com/grammarly",
  },
  {
    id: 6,
    name: "Notion AI",
    slug: "notion-ai",
    category: "Productivity",
    badge: "All-in-One",
    description: "AI assistant built into Notion. Write, brainstorm, edit, and summarize effortlessly.",
    price: "$10/mo",
    tags: ["Notes", "Productivity", "Organization"],
    affiliateLink: "https://your-affiliate-link.com/notion",
  },
  {
    id: 7,
    name: "Tube Magic AI",
    slug: "tube-magic", // ✅ Review page se match karta hai
    category: "YouTube Growth",
    badge: "New Review",
    description: "AI-powered assistant for YouTube creators. Generate viral titles, tags, and ideas in seconds.",
    price: "$29/mo",
    tags: ["YouTube", "SEO", "Video AI"],
    affiliateLink: "https://tubemagic.com/ds#aff=eruslankhanf027",
  },
];

// ============================================
// MAIN HOMEPAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">AI Tools Hub</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover powerful AI tools for creators, marketers, and entrepreneurs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Honest Reviews</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">AI Deals</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Updated Weekly</span>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured AI Tools</h2>
          <Link href="/tools" className="text-blue-600 font-medium hover:underline">View All →</Link>
        </div>

        {/* TOOLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <article
              key={tool.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* CARD HEADER */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{tool.badge}</span>
                  <span className="text-sm opacity-90">{tool.category}</span>
                </div>
                <h3 className="text-2xl font-bold">{tool.name}</h3>
              </div>

              {/* CARD BODY */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 leading-relaxed mb-5">{tool.description}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tool.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PRICE */}
                <div className="mb-6 mt-auto">
                  <span className="text-2xl font-bold text-green-600">{tool.price}</span>
                </div>

                {/* BUTTONS */}
                <div className="space-y-3">
                  <a
                    href={tool.affiliateLink}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    Get Deal
                  </a>
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

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-white text-2xl font-bold mb-4">AI Tools Hub</h3>
          <p className="max-w-2xl mx-auto mb-6">
            Honest AI software reviews, comparison guides, and exclusive deals for creators and businesses.
          </p>
          <div className="flex justify-center gap-6 text-sm mb-6">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/disclosure" className="hover:text-white">Disclosure</Link>
          </div>
          <p className="text-xs text-gray-500">© 2026 AI Tools Hub. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}