import Link from 'next/link';
import { Metadata, Viewport } from 'next';

// ✅ SEO Metadata (CORRECT SYNTAX)
export const metadata: Metadata = {
  title: 'About Us - AI Tools Point',
  description: 'Learn about AI Tools Point, our mission to provide honest AI tool reviews, and our founder Arslan khan.',
};

// ✅ Viewport (CORRECT SYNTAX)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-6 transition font-medium">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About AI Tools Point</h1>
        <p className="text-sm text-gray-500 mb-8 border-b pb-4">Your Trusted Source for AI Tool Reviews</p>
        
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            Welcome to <strong>AI Tools Point</strong> — your central hub for discovering the best Artificial Intelligence tools in 2026. We are dedicated to helping creators, marketers, and entrepreneurs save time and boost productivity by reviewing top-tier AI software.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">🎯 Our Mission</h2>
            <p>
              To provide <strong>honest, unbiased, and detailed reviews</strong> of AI tools like Tube Magic, Grammarly, Notion AI, and more. We test each tool thoroughly to ensure it delivers real value before recommending it to our community.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">👨‍💻 Meet the Founder</h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">Arslan khan</h3>
              <p className="text-gray-600">
                Founder & Chief Editor of AI Tools Point. Passionate about exploring how AI can transform digital workspaces and helping others succeed online.
              </p>
              <p className="text-gray-600 mt-3">
                <strong>Role:</strong> Founder & Chief Editor<br />
                <strong>Location:</strong> Pakistan<br />
                <strong>Focus:</strong> AI Tools, Affiliate Marketing, SEO
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">🔍 How We Review Tools</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li><strong>Hands-On Testing:</strong> We use each tool for at least 7 days before writing a review.</li>
              <li><strong>Real-World Scenarios:</strong> We test tools in actual workflows, not just demo mode.</li>
              <li><strong>Transparent Pricing:</strong> We clearly state costs, free trials, and hidden fees.</li>
              <li><strong>Affiliate Disclosure:</strong> If we earn a commission, we always disclose it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">📧 Contact Us</h2>
            <p>Have questions, suggestions, or want to collaborate? Reach out to us:</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-medium text-gray-800 mt-2">
              📧 Email: <a href="mailto:contact@aitoolspoint.site" className="text-blue-600 hover:underline">contact@aitoolspoint.site</a>
            </div>
            <p className="text-sm text-gray-500 mt-2">Response Time: Usually within 24 hours</p>
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