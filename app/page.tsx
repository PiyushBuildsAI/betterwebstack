import type { Metadata } from "next";
import { NavbarDemo } from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Stats } from "@/components/landing/Stats";
import { Transform } from "@/components/landing/Transform";
import { Services } from "@/components/landing/Services";
import { Work } from "@/components/landing/Work";
import { Process } from "@/components/landing/Process";
import { Calculator } from "@/components/landing/Calculator";
import { Planner } from "@/components/landing/Planner";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { WhyUs } from "@/components/landing/WhyUs";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Design in Chandigarh, Mohali & Panchkula | BetterWebStack",
  description:
    "High-converting websites for Tricity businesses. More enquiries, faster launches, fixed pricing. Get a free website audit for your Chandigarh, Mohali or Panchkula business.",
  alternates: {
    canonical: "/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <main className="relative overflow-x-clip bg-paper pb-16 md:pb-0">
        <Hero />
        <TrustStrip />
        <Stats />
        <Transform />
        <Services />
        <Work />
        <Process />
        <Calculator />
        <Planner />
        <Testimonials />
        <Pricing />
        <WhyUs />
        <FAQ />
        <FinalCTA />
        <p className="mx-auto max-w-[1240px] px-4 pb-10 text-[10.5px] leading-relaxed text-ink/30 sm:px-6">
          {SITE.name} builds websites for businesses across Chandigarh, Mohali, Panchkula,
          Zirakpur and Kharar. Services include website design, e-commerce development, landing
          pages, local SEO, Google Business Profile optimisation and WhatsApp automation. Prices
          shown are starting points and exclude GST.
        </p>
      </main>
      <FooterSection />
      <StickyCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
