import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://meditrajet.fr";
const siteName = "MediTrajet";
const defaultDescription =
  "Plateforme de transport médical partagé conventionné CPAM. Matching intelligent, suivi GPS temps réel, reporting ARS. Conforme décret février 2025.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MediTrajet | Transport médical partagé conventionné",
    template: "%s | MediTrajet",
  },
  description: defaultDescription,
  keywords: [
    "transport médical partagé",
    "transport sanitaire",
    "VSL partagé",
    "taxi conventionné",
    "CPAM transport",
    "décret transport partagé 2025",
    "transport médical conventionné",
    "plateforme transport sanitaire",
    "ALD transport",
    "dialyse transport",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName,
    title: "MediTrajet | Transport médical partagé conventionné",
    description: defaultDescription,
    images: [
      {
        url: "/images/hero-patient.jpg",
        width: 1200,
        height: 630,
        alt: "MediTrajet, plateforme de transport médical partagé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediTrajet | Transport médical partagé conventionné",
    description: defaultDescription,
    images: ["/images/hero-patient.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
