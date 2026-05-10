import Link from 'next/link';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Tools Point',
  description: 'Privacy policy for AI Tools Point. Learn how we handle your data, cookies, and affiliate disclosures.',
};

export const viewport: Viewport = {
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
            At <strong>AI Tools Point</strong>, we respect your privacy. This policy explains how we handle your data when you visit our website.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. Information We Collect</h2>
            <p>We may collect your email address if you subscribe to our newsletter. We do not sell, trade, or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. Affiliate Disclosure</h2>
            <p>This site contains affiliate links. If you click on a link and make a purchase, we may earn a commission at <strong>no extra cost to you</strong>. We only recommend products we have personally reviewed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. Cookies & Tracking</h2>
            <p>We use cookies to improve user experience and analyze site traffic. You can disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">4. Contact Us</h2>
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