"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Crown, Sparkles, Zap } from "lucide-react";
import { Sparkle } from "@/components/brand/Botanical";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Currency = "INR" | "USD";

export interface SolutionPricingProps {
  features: {
    starter: string[];
    growth: string[];
    enterprise: string[];
  };
}

export default function SolutionPricing({ features }: SolutionPricingProps) {
  const [currency, setCurrency] = useState<Currency>("INR");

  const tiers = [
    {
      name: "Starter",
      description: "Best for getting started fast.",
      price: { USD: "$6", INR: "₹499" },
      period: "one-time",
      icon: Zap,
      popular: false,
      features: features.starter,
      cta: "Get Started",
    },
    {
      name: "Growth",
      description: "Best for businesses ready to grow faster.",
      price: { USD: "$12", INR: "₹1199" },
      period: "one-time",
      icon: Sparkles,
      popular: true,
      features: features.growth,
      cta: "Book Free Call",
    },
    {
      name: "Enterprise",
      description: "Best for advanced needs and larger systems.",
      price: { USD: "Custom", INR: "Custom" },
      period: "quote",
      icon: Crown,
      popular: false,
      features: features.enterprise,
      cta: "Request Quote",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden border-y border-ink bg-sage px-5 py-20 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="pill mx-auto">
            <Sparkle className="h-3 w-3 text-ink" />
            Pricing
          </span>
          <h2 className="display mx-auto mt-4 max-w-[16ch] text-[42px] uppercase leading-[0.9] sm:text-[54px]">
            Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] font-medium leading-relaxed text-ink/65">
            Simple packages with clear deliverables. Choose what fits your business today.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            {(["INR", "USD"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCurrency(option)}
                aria-pressed={currency === option}
                className={cn(
                  "rounded-full border px-4 py-2 text-[12px] font-bold transition",
                  currency === option
                    ? "border-ink bg-ink text-parchment"
                    : "border-ink/30 bg-parchment text-ink/60 hover:border-ink/60 hover:text-ink"
                )}
              >
                {option === "INR" ? "INR (₹)" : "USD ($)"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-[40px] border p-6 transition-transform duration-300 hover:-translate-y-1",
                  tier.popular
                    ? "stamp border-ink bg-ink text-parchment"
                    : "border-ink/40 bg-parchment text-ink"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ink bg-marigold px-4 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-ink">
                    Most Popular
                  </span>
                )}

                <div className="text-center">
                  <span
                    className={cn(
                      "mx-auto flex h-12 w-12 items-center justify-center rounded-full border",
                      tier.popular
                        ? "border-marigold bg-marigold text-ink"
                        : "border-ink/25 bg-sage text-ink"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[24px] font-semibold uppercase tracking-[0.01em]">
                    {tier.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-[12px] font-medium",
                      tier.popular ? "text-parchment/60" : "text-ink/55"
                    )}
                  >
                    {tier.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "my-5 border-y py-4 text-center",
                    tier.popular ? "border-paper/20" : "border-ink/15"
                  )}
                >
                  <span className="display text-[40px] leading-none">{tier.price[currency]}</span>
                  {tier.period !== "quote" && (
                    <span
                      className={cn(
                        "ml-1 font-mono text-[10px] uppercase tracking-[0.1em]",
                        tier.popular ? "text-parchment/50" : "text-ink/45"
                      )}
                    >
                      /{tier.period}
                    </span>
                  )}
                </div>

                <ul className="flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-marigold">
                        <Check className="h-2.5 w-2.5 text-ink" strokeWidth={4} />
                      </span>
                      <span
                        className={cn(
                          "text-[12.5px] font-medium leading-snug",
                          tier.popular ? "text-parchment/80" : "text-ink/70"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "group mt-6 flex items-center justify-between rounded-full border px-5 py-3 text-[13px] font-bold transition",
                    tier.popular
                      ? "border-marigold bg-marigold text-ink hover:bg-[#e6d000]"
                      : "border-ink bg-ink text-parchment hover:bg-[#1b4d14]"
                  )}
                >
                  {tier.cta}
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform group-hover:translate-x-1",
                      tier.popular ? "text-ink" : "text-marigold"
                    )}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
