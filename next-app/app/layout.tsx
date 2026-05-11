import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // ✅ Link import kiya hai header ke liye
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ✅ Meta Data & Google Verification
export const metadata: Metadata = {
  title: "AI Tools Point - Best AI Tools & Honest Reviews 2026",
  description: "Discover the best AI tools for business, writing, YouTube growth, and productivity.",
  keywords: ["AI tools", "AI software", "YouTube AI", "business automation"],
  authors: [{ name: "Arslan Khan" }],
  other: {
    "google-site-verification": "3rt76u9vV7nDwQVIMQByyl972CcyBIHm1LpmyaBZcYQ"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3rt76u9vV7nDwQVIMQByyl972CcyBIHm1LpmyaBZcYQ" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        
        {/* 🚀 GLOBAL HEADER (Har page par dikhega) */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 group">
              {/* Logo image 'public' folder mein hona chahiye */}
              <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
              <span className="font-bold text-xl text-gray-900 hidden sm:block group-hover:text-blue-600 transition">
                AI Tools Point
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </header>
        {/* 🚀 END HEADER */}

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}