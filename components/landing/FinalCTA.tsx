import { Check, MessageCircle, Phone } from "lucide-react";
import { DesertScene, Sparkle } from "@/components/brand/Botanical";
import { LeadForm } from "@/components/landing/LeadForm";
import { SITE } from "@/lib/site";

const DELIVERABLES = [
  "A 5-point teardown of your current site (or a plan if you do not have one)",
  "The three fixes we would make first, in order",
  "A page plan and a fixed quote range for the rebuild",
];

export function FinalCTA() {
  return (
    <section id="audit" className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20">
      <div className="stamp relative mx-auto max-w-[1200px] overflow-hidden rounded-[40px] border border-ink bg-ink px-6 py-10 text-paper sm:px-10 sm:py-12 lg:px-12">
        <div className="pointer-events-none absolute inset-0 forest-lines opacity-60" />
        <div className="pointer-events-none absolute -right-24 -top-10 hidden h-[540px] w-[640px] text-paper/[0.09] lg:block">
          <DesertScene />
        </div>
        <Sparkle className="pointer-events-none absolute bottom-10 left-[42%] h-5 w-5 text-marigold/60" />

        <div className="relative grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/[0.06] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-marigold">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
              Free website audit
            </span>

            <h2 className="display mt-5 max-w-[17ch] text-[38px] uppercase leading-[0.9] text-paper sm:text-[48px] lg:text-[54px]">
              Let&apos;s find what is leaking your enquiries.
            </h2>

            <p className="mt-5 max-w-[44ch] text-[14px] font-medium leading-relaxed text-paper/65">
              Tell us where to send it. We will record a short walkthrough of your site and send it
              on WhatsApp — no deck, no obligation, no follow-up sequence.
            </p>

            <ul className="mt-7 space-y-3">
              {DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[12.5px] font-medium leading-relaxed text-paper/75"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-marigold text-ink">
                    <Check className="h-2.5 w-2.5" strokeWidth={4} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-paper/20 pt-6">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-[12.5px] font-bold text-paper/85 transition hover:-translate-y-0.5 hover:border-paper/60 hover:text-paper"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>

            <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-paper/40">
              {SITE.hours} · {SITE.responseTime}
            </p>
          </div>

          <div className="stamp-marigold rounded-[32px] border border-ink bg-parchment p-5 text-ink sm:p-6">
            <LeadForm
              source="final-audit"
              variant="full"
              submitLabel="Send me my free audit"
              hideHeading={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
