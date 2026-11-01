import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { SectionHead } from "@/components/landing/ui";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Launch",
    price: "₹24,999",
    tagline: "For a local business that needs to look credible and get calls.",
    delivery: "7–10 days",
    features: [
      "5-page website",
      "Copywriting for every page",
      "WhatsApp + click-to-call buttons",
      "Contact form with instant alerts",
      "Google Business Profile setup",
      "30 days of aftercare",
    ],
    cta: "Start with Launch",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹49,999",
    tagline: "For a business ready to rank locally and handle more enquiries.",
    delivery: "2–3 weeks",
    features: [
      "8–10 pages with CMS blog",
      "Everything in Launch",
      "Local SEO + location pages",
      "Lead routing to WhatsApp / email",
      "Speed, analytics and schema setup",
      "60 days of aftercare",
    ],
    cta: "Start with Growth",
    popular: true,
  },
  {
    name: "Scale",
    price: "₹99,999+",
    tagline: "For stores, bookings and businesses automating their follow-up.",
    delivery: "3–5 weeks",
    features: [
      "E-commerce or booking system",
      "AI chat + WhatsApp automation",
      "CRM / Google Sheets integration",
      "Catalog or listing migration",
      "Paid ads landing pages",
      "90 days of aftercare",
    ],
    cta: "Talk about Scale",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 overflow-hidden border-y border-ink bg-sage py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-30" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="08"
            eyebrow="Pricing"
            title={
              <>
                Fixed prices.
                <br />
                No hourly surprises.
              </>
            }
          />
          <div className="max-w-[34ch] md:pb-2">
            <p className="text-[13px] font-medium leading-relaxed text-ink/60">
              All prices are starting points and exclude GST. You get a written scope and a fixed
              final quote after the free audit — before any work begins.
            </p>
            <Link
              href="#planner"
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
            >
              Not sure which fits? Answer 4 questions
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-[36px] border p-6 sm:p-7",
                plan.popular
                  ? "stamp border-ink bg-ink text-parchment"
                  : "border-ink/40 bg-parchment text-ink"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full border border-ink bg-marigold px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-ink">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}

              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-[20px] font-semibold uppercase tracking-[0.01em]">
                  {plan.name}
                </h3>
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-[0.12em]",
                    plan.popular ? "text-parchment/45" : "text-ink/40"
                  )}
                >
                  {plan.delivery}
                </span>
              </div>

              <p
                className={cn(
                  "mt-1.5 min-h-[40px] text-[12px] font-medium leading-relaxed",
                  plan.popular ? "text-parchment/60" : "text-ink/50"
                )}
              >
                {plan.tagline}
              </p>

              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="display text-[40px] leading-none">{plan.price}</span>
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-[0.1em]",
                    plan.popular ? "text-parchment/45" : "text-ink/40"
                  )}
                >
                  onwards
                </span>
              </p>

              <ul
                className={cn(
                  "mt-6 space-y-2.5 border-t pt-5",
                  plan.popular ? "border-paper/15" : "border-ink/15"
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[12.5px] leading-snug">
                    <span
                      className={cn(
                        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                        plan.popular ? "bg-marigold text-ink" : "bg-marigold text-ink"
                      )}
                    >
                      <Check className="h-2.5 w-2.5" strokeWidth={4} />
                    </span>
                    <span
                      className={cn(
                        "font-medium",
                        plan.popular ? "text-parchment/80" : "text-ink/70"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#audit"
                className={cn(
                  "group mt-7 flex items-center justify-between gap-2 rounded-full border px-5 py-3.5 text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5",
                  plan.popular
                    ? "border-marigold bg-marigold text-ink hover:bg-[#e6d000]"
                    : "border-ink bg-ink text-parchment hover:bg-[#1b4d14]"
                )}
              >
                {plan.cta}
                <ArrowRight
                  className={cn(
                    "h-4 w-4",
                    plan.popular ? "text-ink" : "text-marigold"
                  )}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[28px] border border-ink bg-marigold px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink bg-parchment text-[13px] font-bold text-ink">
              ₹
            </span>
            <div>
              <p className="font-display text-[18px] font-semibold uppercase tracking-[0.01em]">
                Care &amp; growth plan — ₹4,999/month
              </p>
              <p className="text-[12px] font-medium leading-relaxed text-ink/60">
                Hosting, backups, security, two hours of edits a month and a one-page report on the
                enquiries you got. Cancel any time.
              </p>
            </div>
          </div>
          <Link href="#audit" className="btn-ink shrink-0 py-2.5 text-[12.5px]">
            Add it to my quote
          </Link>
        </div>
      </div>
    </section>
  );
}
