import { Quote } from "lucide-react";
import { Sparkle } from "@/components/brand/Botanical";
import { SectionHead, Stars } from "@/components/landing/ui";
import { TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            index="07"
            eyebrow="Client stories"
            title={
              <>
                What they say
                <br />
                after 90 days.
              </>
            }
          />
          <div className="flex items-center gap-3 rounded-full border border-ink bg-parchment px-4 py-3 md:mb-1">
            <span className="display text-[30px] leading-none">4.9</span>
            <div>
              <Stars className="text-ink" />
              <p className="mt-0.5 text-[10.5px] font-semibold text-ink/50">
                from 38 Google reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => {
            const dark = index === 1;
            return (
              <figure
                key={item.name}
                className={cn(
                  "relative flex flex-col rounded-[36px] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7",
                  dark
                    ? "stamp border-ink bg-ink text-parchment"
                    : "border-ink/40 bg-parchment text-ink"
                )}
              >
                {dark && (
                  <Sparkle className="absolute right-6 top-6 h-3 w-3 text-marigold/70" />
                )}
                <div className="flex items-center justify-between">
                  <Quote
                    className={cn("h-7 w-7", dark ? "text-marigold" : "text-ink/25")}
                    strokeWidth={1.5}
                  />
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em]",
                      dark
                        ? "border-marigold bg-marigold text-ink"
                        : "border-ink/20 bg-sage text-ink"
                    )}
                  >
                    {item.result}
                  </span>
                </div>

                <blockquote
                  className={cn(
                    "mt-5 flex-1 text-[14.5px] font-medium leading-relaxed tracking-[-0.01em]",
                    dark ? "text-parchment/85" : "text-ink/70"
                  )}
                >
                  “{item.quote}”
                </blockquote>

                <figcaption
                  className={cn(
                    "mt-6 flex items-center gap-3 border-t pt-4",
                    dark ? "border-paper/20" : "border-ink/15"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10px] font-bold",
                      dark
                        ? "border-marigold bg-marigold text-ink"
                        : "border-ink/25 bg-sand text-ink/70"
                    )}
                  >
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-extrabold">{item.name}</p>
                    <p className={cn("text-[11px]", dark ? "text-parchment/50" : "text-ink/45")}>
                      {item.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
