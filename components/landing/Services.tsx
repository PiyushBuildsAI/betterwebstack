"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Clock,
  Globe,
  LifeBuoy,
  Search,
  ShoppingCart,
  Target,
} from "lucide-react";
import { SunBurst } from "@/components/brand/Botanical";
import { SERVICES, type ServiceKey } from "@/lib/site";
import { SectionHead } from "@/components/landing/ui";
import { cn } from "@/lib/utils";

const ICONS: Record<ServiceKey, typeof Globe> = {
  business: Globe,
  ecommerce: ShoppingCart,
  landing: Target,
  "local-seo": Search,
  automation: Bot,
  care: LifeBuoy,
};

export function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];
  const Icon = ICONS[service.key];

  return (
    <section id="services" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="02"
            eyebrow="What we build"
            title={
              <>
                Pick the outcome.
                <br />
                We will build the site.
              </>
            }
          />
          <p className="max-w-[34ch] text-[13.5px] font-medium leading-relaxed text-ink/60 md:pb-2">
            Every project starts with the enquiry you want, not the template we like. Six ways
            Tricity businesses work with us.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
          {/* Selector */}
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:flex-col lg:gap-2 lg:overflow-visible">
            {SERVICES.map((item, i) => {
              const ItemIcon = ICONS[item.key];
              const isActive = i === active;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex min-w-[210px] shrink-0 items-center justify-between gap-3 rounded-[24px] border px-4 py-3.5 text-left transition-all duration-300 lg:min-w-0 lg:px-5 lg:py-4",
                    isActive
                      ? "border-ink bg-ink text-parchment"
                      : "border-ink/25 bg-parchment text-ink hover:-translate-y-0.5 hover:border-ink/50 hover:bg-cream"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
                        isActive
                          ? "border-marigold bg-marigold text-ink"
                          : "border-ink/20 bg-sage text-ink"
                      )}
                    >
                      <ItemIcon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-extrabold tracking-[-0.01em]">
                        {item.short}
                      </span>
                      <span
                        className={cn(
                          "block font-mono text-[9px] uppercase tracking-[0.12em]",
                          isActive ? "text-parchment/50" : "text-ink/45"
                        )}
                      >
                        {item.price}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 transition",
                      isActive ? "text-marigold" : "text-ink/30 group-hover:text-ink/70"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="surface stamp relative overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 text-ink/10">
              <SunBurst />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 text-ink/[0.07]">
              <SunBurst />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full flex-col p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-marigold text-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="pill pill-forest">{service.price}</span>
                    <span className="pill hidden sm:inline-flex">
                      <Clock className="h-3 w-3" />
                      {service.timeline}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 max-w-[18ch] text-[30px] font-semibold uppercase leading-[0.95] tracking-[-0.01em] sm:text-[38px]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[14px] font-medium leading-relaxed text-ink/65">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2.5 rounded-[20px] border border-ink/15 bg-cream/55 px-3 py-2.5 text-[12.5px] font-semibold leading-snug text-ink/75"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-marigold">
                        <Check className="h-2.5 w-2.5 text-ink" strokeWidth={4} />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-ink/15 pt-5">
                  <Link href="#audit" className="btn-ink group">
                    Start with this
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#planner"
                    className="text-[12.5px] font-bold text-ink/60 underline decoration-ink/25 decoration-1 underline-offset-4 transition hover:text-ink hover:decoration-ink"
                  >
                    Not sure? Answer 4 questions
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
