import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RoundCactus, Sparkle } from "@/components/brand/Botanical";

export type RelatedSolution = {
  title: string;
  description: string;
  href: string;
};

export default function RelatedSolutions({ solutions }: { solutions: RelatedSolution[] }) {
  return (
    <section className="w-full px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="pill mx-auto">
            <Sparkle className="h-3 w-3 text-ink" />
            Keep exploring
          </span>
          <h2 className="display mx-auto mt-4 max-w-[15ch] text-[40px] uppercase leading-[0.9] sm:text-[50px]">
            Related Solutions
          </h2>
          <p className="mx-auto mt-3 text-[14px] font-medium text-ink/60">
            Combine services for even stronger results.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href} className="group block">
              <div className="flex h-full flex-col rounded-[32px] border border-ink/40 bg-parchment p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ink">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 bg-sage">
                  <ArrowRight className="h-4 w-4 text-ink" />
                </div>
                <h3 className="mt-4 text-[21px] font-semibold uppercase leading-[1] tracking-[-0.005em]">
                  {solution.title}
                </h3>
                <p className="mt-2 flex-1 text-[12.5px] font-medium leading-relaxed text-ink/60">
                  {solution.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 border-t border-ink/15 pt-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[40px] border border-ink bg-marigold p-8 text-center sm:p-10">
          <RoundCactus className="pointer-events-none absolute -bottom-8 -left-4 h-32 w-28 rotate-[-8deg] text-ink/15" />
          <Sparkle className="pointer-events-none absolute right-8 top-8 h-4 w-4 text-ink/30" />
          <p className="display text-[28px] uppercase leading-[1] sm:text-[34px]">
            Need More Than One Solution?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[13px] font-medium text-ink/65">
            Many businesses combine multiple systems for stronger results.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/solutions" className="btn-outline bg-parchment px-6 py-3 text-[13px]">
              View All Solutions
            </Link>
            <Link href="/contact" className="btn-ink px-6 py-3 text-[13px]">
              Book Strategy Call
              <ArrowRight className="h-4 w-4 text-marigold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
