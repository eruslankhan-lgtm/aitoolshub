import Link from 'next/link';
import { Metadata, Viewport } from 'next';

// ✅ SEO Metadata (CORRECT SYNTAX)
export const metadata: Metadata = {
  title: 'Contact Us - AI Tools Point',
  description: 'Get in touch with AI Tools Point. Questions about AI tools? Want to suggest a review? Contact us today.',
};

// ✅ Viewport (CORRECT SYNTAX)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-6 transition font-medium">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact AI Tools Point</h1>
        <p className="text-sm text-gray-500 mb-8 border-b pb-4">We'd Love to Hear From You!</p>
        
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            Whether you have a question about an AI tool review, want to suggest a new tool for us to test, or are interested in collaboration opportunities — feel free to reach out. We read every message and try to respond within 24 hours.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">📧 Email Us</h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <p className="text-gray-600 mb-3">
                For general inquiries, review suggestions, or partnership requests:
              </p>
              <a 
                href="mailto:contact@aitoolspoint.site" 
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition"
              >
                📩 contact@aitoolspoint.site
              </a>
              <p className="text-sm text-gray-500 mt-3">Response Time: Usually within 24 hours</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">👨‍💻 Meet the Founder</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">arslan khan</h3>
              <p className="text-gray-600">
                Founder & Chief Editor of AI Tools Point. Based in Pakistan, passionate about AI, affiliate marketing, and helping others succeed online.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Do you accept guest posts?</h4>
                <p className="text-gray-600 mt-1">Currently, we focus on in-house reviews to maintain quality. However, if you have a unique AI tool suggestion, we'd love to hear about it!</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">Can I advertise on AI Tools Point?</h4>
                <p className="text-gray-600 mt-1">We do not accept paid placements. All reviews are editorially independent. If you believe your tool would benefit our audience, email us with details.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">How do I report an error in a review?</h4>
                <p className="text-gray-600 mt-1">If you spot a mistake or outdated information, please email us with the page URL and details. We update reviews regularly to keep them accurate.</p>
              </div>
            </div>
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