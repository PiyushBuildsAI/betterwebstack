import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Cactus, Sparkle } from "@/components/brand/Botanical";
import { SectionHead } from "@/components/landing/ui";
import { PROCESS } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-28 overflow-hidden border-y border-ink bg-ink py-16 text-paper sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 forest-lines opacity-60" />
      <div className="pointer-events-none absolute -right-8 bottom-0 hidden h-[360px] w-[240px] text-paper/[0.09] lg:block">
        <Cactus />
      </div>
      <Sparkle className="pointer-events-none absolute right-[18%] top-16 h-6 w-6 text-marigold/50" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="04"
            eyebrow="How it works"
            tone="forest"
            title={
              <>
                From first call
                <br />
                to first enquiry.
              </>
            }
          />
          <div className="flex items-center gap-3 rounded-full border border-paper/25 bg-paper/[0.06] px-4 py-2.5 md:mb-1">
            <Clock className="h-4 w-4 text-marigold" />
            <p className="text-[11.5px] leading-tight text-paper/60">
              <span className="block font-extrabold text-paper">Average launch: 18 days</span>
              Fastest this year: 9 days
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <div key={step.step} className="relative border-t border-paper/30 pt-6">
              <span className="absolute -top-[6px] left-0 h-3 w-3 rounded-full border-2 border-ink bg-marigold" />
              {index === 0 && (
                <span className="absolute -top-[6px] left-0 h-3 w-3 animate-ping rounded-full bg-marigold/60" />
              )}

              <div className="flex items-center justify-between">
                <span className="font-display text-[15px] font-semibold tracking-[0.08em] text-marigold">
                  {step.step}
                </span>
                <span className="rounded-full border border-paper/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/60">
                  {step.time}
                </span>
              </div>

              <h3 className="mt-4 max-w-[14ch] text-[22px] font-semibold uppercase leading-[1] tracking-[-0.005em] text-paper">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] font-medium leading-relaxed text-paper/65">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-[32px] border border-ink bg-marigold px-6 py-6 text-ink sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-[21px] font-semibold uppercase leading-[1.05] tracking-[-0.01em]">
              You approve the scope and the price before we build anything.
            </p>
            <p className="mt-1.5 max-w-[62ch] text-[12.5px] font-medium text-ink/65">
              No retainers to start, no surprise invoices, no “that will cost extra” halfway through.
            </p>
          </div>
          <Link href="#audit" className="btn-ink group shrink-0">
            Start with a free audit
            <ArrowRight className="h-4 w-4 text-marigold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
