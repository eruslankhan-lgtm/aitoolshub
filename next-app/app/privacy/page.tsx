import Link from 'next/link';
import { Metadata } from 'next';

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: 'Privacy Policy - AI Tools Point',
  description: 'Privacy policy for AI Tools Point. Learn how we handle your data, cookies, and affiliate disclosures.',
};

// ✅ Mobile Viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-6 transition font-medium">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8 border-b pb-4">Last updated: May 2026</p>
        
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            At <strong>AI Tools Point</strong>, we respect your privacy. This policy explains how we handle your data when you visit our website. By using our site, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. Information We Collect</h2>
            <p>
              We may collect your email address if you subscribe to our newsletter or use our contact form. We do not sell, trade, or rent your personal identification information to third parties. All data is stored securely and used only to improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. Affiliate Disclosure</h2>
            <p>
              This site contains affiliate links. If you click on a link and make a purchase, we may earn a commission at <strong>no extra cost to you</strong>. We only recommend products and services that we have personally reviewed and believe will add value to our readers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. Cookies & Tracking</h2>
            <p>
              We use cookies to improve user experience, analyze site traffic, and personalize content. You can choose to disable cookies through your browser settings, though this may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">4. Third-Party Links</h2>
            <p>
              Our site may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 font-medium text-blue-800 mt-2">
              📧 Email: contact@aitoolspoint.site
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