import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop, Preloader, ScrollProgress } from "@/components/ui";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Tabela Robusta — Construction & Real Estate";
const description =
  "Tabela Robusta Unipessoal Lda — construction and real estate. Interior, exterior, home and architect design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Tabela Robusta",
  },
  description,
  applicationName: "Tabela Robusta",
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
    siteName: "Tabela Robusta",
    locale: "en_US",
    images: [
      {
        url: "/images/og/tabela-robusta-og.png",
        width: 1200,
        height: 630,
        alt: "Tabela Robusta Unipessoal Lda — construction and real estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og/tabela-robusta-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2A3F6A",
  colorScheme: "light",
};

/**
 * LocalBusiness structured data. Without it the phone number and email exist
 * only as link text, and nothing surfaces them in a search result panel.
 * `address` is omitted while the client has not supplied one — an incomplete
 * PostalAddress is worse than none, since Google validates the shape.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: `${site.name} ${site.tagline}`,
  alternateName: site.name,
  url: siteUrl,
  logo: `${siteUrl}/images/brand/tabela-robusta-logo.png`,
  image: `${siteUrl}/images/og/tabela-robusta-og.png`,
  description,
  telephone: site.phone,
  email: site.email,
  areaServed: "PT",
  slogan: site.slogan,
  ...(site.address && {
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // Static object built at module scope — no user input reaches it.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
