import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SITE } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Website Design in Chandigarh, Mohali & Panchkula | BetterWebStack",
    template: "%s | BetterWebStack",
  },
  description:
    "BetterWebStack builds high-converting websites for Tricity businesses. More enquiries, faster launches, fixed pricing. Book a free website audit for your Chandigarh, Mohali or Panchkula business.",
  keywords: [
    "website design Chandigarh",
    "web development company Mohali",
    "website developer Panchkula",
    "Tricity web design agency",
    "ecommerce website Chandigarh",
    "local SEO Chandigarh",
    "lead generation website India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Design in Chandigarh, Mohali & Panchkula | BetterWebStack",
    description:
      "High-converting websites for Tricity businesses — built to bring enquiries, bookings and walk-ins.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design in Chandigarh, Mohali & Panchkula | BetterWebStack",
    description:
      "High-converting websites for Tricity businesses — built to bring enquiries, bookings and walk-ins.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "te4jBtQrgaZcNY3wWKysf_K0X7uNqdnbMm--LzLZ-qY",
  },
  category: "technology",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description:
    "Website design and development studio building lead-generating websites for businesses in Chandigarh, Mohali and Panchkula.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "₹₹",
  areaServed: [
    { "@type": "City", name: "Chandigarh" },
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Panchkula" },
    { "@type": "Place", name: "Tricity" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Website design",
    "Web development",
    "E-commerce websites",
    "Local SEO",
    "Lead generation",
    "AI chat automation",
  ],
  makesOffer: SITE.packages.map((pkg) => ({
    "@type": "Offer",
    name: pkg.name,
    description: pkg.description,
    priceCurrency: "INR",
    price: pkg.priceValue,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${oswald.variable}`}>
      <body className="bg-paper text-ink antialiased">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
