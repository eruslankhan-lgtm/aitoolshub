import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated Metadata + Google Verification
export const metadata: Metadata = {
  title: "AI Tools Point - Best AI Tools & Honest Reviews 2026",
  description: "Discover the best AI tools for business, writing, YouTube growth, and productivity with honest reviews and exclusive deals.",
  keywords: ["AI tools", "AI software", "YouTube AI", "business automation", "writing tools", "AI reviews"],
  authors: [{ name: "Arslan Khan" }],
  creator: "Arslan Khan",
  publisher: "AI Tools Point",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}