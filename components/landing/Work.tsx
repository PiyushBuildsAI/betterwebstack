import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteMockup } from "@/components/brand/SiteMockup";
import { SectionHead } from "@/components/landing/ui";
import { WORK } from "@/lib/site";
import { cn } from "@/lib/utils";

const TINTS: Record<string, string> = {
  clinic: "bg-[linear-gradient(145deg,#e4edc0_0%,#d3e5a8_55%,#bfd98c_100%)]",
  realestate: "bg-[linear-gradient(145deg,#f2ee98_0%,#e9e78a_55%,#dbe8ac_100%)]",
  shop: "bg-[linear-gradient(145deg,#fefde6_0%,#f5f0c4_55%,#fce519_100%)]",
};

export function Work() {
  const [feature, ...rest] = WORK;

  return (
    <section id="work" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="03"
            eyebrow="Selected work"
            title={
              <>
                Real projects.
                <br />
                Real business growth.
              </>
            }
          />
          <Link href="#audit" className="btn-ghost group md:mb-2">
            Get a result like this
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Feature */}
          <article className="group stamp relative flex flex-col overflow-hidden rounded-[40px] border border-ink bg-parchment lg:col-span-7">
            <div
              className={cn(
                "relative overflow-hidden border-b border-ink/20 px-6 pt-7 sm:px-8 sm:pt-9",
                TINTS[feature.mockup]
              )}
            >
              <div className="flex items-center justify-between pb-4">
                <span className="pill pill-sage bg-parchment/70">{feature.tag}</span>
                <ArrowUpRight className="h-4 w-4 text-ink/40 transition group-hover:text-ink" />
              </div>
              <div className="mx-auto max-w-[460px] pb-1">
                <SiteMockup
                  variant={feature.mockup}
                  className="translate-y-1 rotate-[-1.2deg] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-7">
              <h3 className="max-w-[22ch] text-[24px] font-semibold uppercase leading-[0.98] tracking-[-0.01em] sm:text-[30px]">
                {feature.title}
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[13.5px] font-medium leading-relaxed text-ink/60">
                {feature.summary}
              </p>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-5">
                <div>
                  <p className="display text-[42px] leading-none text-ink">{feature.metric}</p>
                  <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink/55">
                    {feature.metricLabel}
                  </p>
                </div>
                <span className="pill pill-marigold">{feature.extra}</span>
              </div>
            </div>
          </article>

          {/* Stacked */}
          <div className="grid gap-5 lg:col-span-5">
            {rest.map((project) => (
              <article
                key={project.id}
                className="group flex items-stretch overflow-hidden rounded-[32px] border border-ink/40 bg-parchment"
              >
                <div
                  className={cn(
                    "relative hidden w-[46%] shrink-0 items-center overflow-hidden border-r border-ink/20 p-4 sm:flex",
                    TINTS[project.mockup]
                  )}
                >
                  <SiteMockup
                    variant={project.mockup}
                    compact
                    className="h-[150px] w-full rotate-[-2deg] transition-transform duration-500 group-hover:rotate-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink/45">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-[19px] font-semibold uppercase leading-[1.02] tracking-[-0.01em]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] font-medium leading-relaxed text-ink/55">
                    {project.summary}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 border-t border-ink/10 pt-4">
                    <div>
                      <p className="display text-[28px] leading-none">{project.metric}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-ink/50">
                        {project.metricLabel}
                      </p>
                    </div>
                    <span className="rounded-full border border-ink/20 bg-cream px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.1em] text-ink/55">
                      {project.extra}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 max-w-[90ch] text-[11px] font-medium leading-relaxed text-ink/40">
          Results are from live client projects. Figures shown are the change measured in the first
          90 days after launch — your numbers will depend on your offer, traffic and market.
        </p>
      </div>
    </section>
  );
}
