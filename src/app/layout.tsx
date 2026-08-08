import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop, Preloader, ScrollProgress } from "@/components/ui";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Set NEXT_PUBLIC_SITE_URL in the deploy environment for absolute OG URLs. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Boldixer — Construction Co.";
const description =
  "Boldixer Pro costruction. We provide main source in interior, exterior, home and architect design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Boldixer",
  },
  description,
  applicationName: "Boldixer",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Boldixer",
    locale: "en_US",
    images: [
      {
        url: "/images/og/boldixer-og.png",
        width: 1200,
        height: 630,
        alt: "Boldixer Pro costruction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og/boldixer-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F3C41A",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="focus:bg-ink sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:px-6 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Preloader />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
