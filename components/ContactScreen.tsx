"use client";

import {
  ExpandableScreen,
  ExpandableScreenContent,
} from "@/components/ui/expandable-screen";
import { ContactHero } from "./contact/ContactHero";
import { ContactFeatures } from "./contact/ContactFeatures";
import { ContactForm } from "./contact/ContactForm";
import { ContactSocials } from "./contact/ContactSocials";
import { Sparkle, SunBurst } from "@/components/brand/Botanical";

const ExpandableScreenDemo = () => {
  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="40px"
    >
      <ContactHero />

      <ExpandableScreenContent
        className="bg-ink"
        closeButtonClassName="border border-paper/25 bg-paper/10 text-paper hover:bg-marigold hover:text-ink"
      >
        <div className="pointer-events-none absolute inset-0 forest-lines opacity-60" />
        <SunBurst className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-paper/[0.06]" />
        <Sparkle className="pointer-events-none absolute bottom-10 left-10 h-4 w-4 text-marigold/60" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col items-center gap-10 p-6 sm:p-10 lg:flex-row lg:gap-16 lg:p-16">
          <div className="flex w-full flex-1 flex-col justify-center space-y-5">
            <span className="pill pill-marigold w-fit">
              <Sparkle className="h-3 w-3 text-ink" />
              Say hello
            </span>
            <h2 className="display-bold text-[44px] uppercase leading-[0.9] text-paper sm:text-[56px] lg:text-[64px]">
              Contact us
            </h2>

            <ContactFeatures />
            <ContactSocials />
          </div>

          <div className="w-full flex-1">
            <ContactForm />
          </div>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default ExpandableScreenDemo;
