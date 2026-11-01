"use client";

import { useState } from "react";
import { Minus, Phone, Plus } from "lucide-react";
import { Sparkle } from "@/components/brand/Botanical";
import { FAQS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="flex h-6 items-center rounded-full border border-ink/30 bg-parchment px-2.5 text-[10px] font-extrabold tracking-[0.14em] text-ink">
                10
              </span>
              <span className="eyebrow text-ink/65">Questions</span>
            </div>
            <h2 className="display mt-4 max-w-[12ch] text-[42px] leading-[0.9] sm:text-[54px]">
              We&apos;ve got answers.
            </h2>
            <p className="mt-4 max-w-[32ch] text-[13.5px] font-medium leading-relaxed text-ink/60">
              The questions that come up on almost every first call — pricing, timelines, ownership
              and what happens after launch.
            </p>

            <div className="relative mt-6 rounded-[28px] border border-ink bg-sage p-4">
              <Sparkle className="absolute right-4 top-4 h-3.5 w-3.5 text-ink/30" />
              <p className="text-[13px] font-extrabold">Still unsure?</p>
              <p className="mt-1 text-[12px] font-medium leading-relaxed text-ink/60">
                Call and ask directly. You will speak to the person who builds the site.
              </p>
              <a href={SITE.phoneHref} className="btn-ink mt-3 px-4 py-2.5 text-[12px]">
                <Phone className="h-3.5 w-3.5 text-marigold" />
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="surface px-5 sm:px-7">
            {FAQS.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q} className="border-b border-ink/15 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "flex gap-3 text-[14px] font-bold leading-snug tracking-[-0.01em] transition-colors",
                        isOpen ? "text-ink" : "text-ink/75 group-hover:text-ink"
                      )}
                    >
                      <span className="mt-0.5 font-mono text-[9.5px] font-semibold text-ink/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                        isOpen
                          ? "border-ink bg-ink text-marigold"
                          : "border-ink/25 text-ink/50 group-hover:border-ink/50"
                      )}
                    >
                      {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pr-8 pl-7 text-[13px] font-medium leading-relaxed text-ink/60">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
