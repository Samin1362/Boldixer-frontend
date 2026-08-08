import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boldixer — Construction Co.",
  description:
    "Boldixer Pro costruction. We provide main source in interior, exterior, home and architect design.",
  openGraph: {
    title: "Boldixer — Construction Co.",
    description:
      "Boldixer Pro costruction. We provide main source in interior, exterior, home and architect design.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
