import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinity Signals - إشارات تداول احترافية | Professional Trading Signals",
  description: "Infinity Signals provides professional trading signals, market analysis, and trading education. إنفينيتي سيجنالز - إشارات تداول احترافية وتحليل السوق",
  keywords: ["Trading Signals", "إشارات تداول", "Market Analysis", "تحليل السوق", "Trading Academy", "أكاديمية التداول"],
  authors: [{ name: "Infinity Signals Team" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Infinity Signals - Professional Trading Signals",
    description: "Professional trading signals, market analysis, and trading education.",
    url: "https://infinitysignals.net",
    siteName: "Infinity Signals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
