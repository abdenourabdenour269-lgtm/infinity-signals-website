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
  title: "Infinity Algo Power | إنفينيتي ألجو باور - إشارات تداول احترافية",
  description: "Infinity Algo Power - Professional trading signals, market analysis, and algorithmic trading solutions. إنفينيتي ألجو باور - إشارات تداول احترافية وحلول التداول الخوارزمي",
  keywords: ["Infinity Algo Power", "إنفينيتي ألجو باور", "Trading Signals", "إشارات تداول", "Algorithmic Trading", "التداول الخوارزمي", "Market Analysis", "تحليل السوق", "Forex", "Crypto", "Stocks"],
  authors: [{ name: "Infinity Algo Power Team" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Infinity Algo Power - Professional Trading Signals",
    description: "Professional trading signals, market analysis, and algorithmic trading solutions.",
    url: "https://infinityalgopower.com",
    siteName: "Infinity Algo Power",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Algo Power",
    description: "Professional trading signals and algorithmic trading solutions",
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
