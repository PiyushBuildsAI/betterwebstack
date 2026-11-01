import { Check, MapPin, Minus, Navigation } from "lucide-react";
import { Sparkle } from "@/components/brand/Botanical";
import { SectionHead } from "@/components/landing/ui";
import { AREAS, COMPARISON } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHead
          index="09"
          eyebrow="Why BetterWebStack"
          title={
            <>
              Not just a website.
              <br />
              A system that sells.
            </>
          }
          description="Most agencies hand over pages. We hand over a lead path: the offer, the proof, the enquiry, the follow-up — all tested on a phone before launch."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Comparison */}
          <div className="surface overflow-hidden">
            <div className="grid grid-cols-[1.6fr_0.7fr_0.9fr] items-center gap-2 border-b border-ink/20 bg-cream/70 px-5 py-3.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
                What you get
              </span>
              <span className="text-center font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
                Typical
              </span>
              <span className="mx-auto flex items-center justify-center gap-1 rounded-full border border-ink bg-ink px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-marigold">
                BWS
              </span>
            </div>

            <ul>
              {COMPARISON.map((row) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[1.6fr_0.7fr_0.9fr] items-center gap-2 border-b border-ink/10 px-5 py-3 last:border-0"
                >
                  <span className="text-[12.5px] font-semibold leading-snug text-ink/75">
                    {row.label}
                  </span>
                  <span className="flex justify-center text-ink/25">
                    <Minus className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex justify-center">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-marigold">
                      <Check className="h-3 w-3 text-ink" strokeWidth={3.5} />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tricity coverage */}
          <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-ink p-6 text-paper sm:p-7">
            <div className="pointer-events-none absolute inset-0 forest-lines opacity-60" />
            <Sparkle className="pointer-events-none absolute right-7 top-7 h-4 w-4 text-marigold/60" />
            <div className="relative">
              <span className="eyebrow text-marigold">Tricity born</span>
              <h3 className="mt-3 max-w-[20ch] text-[26px] font-semibold uppercase leading-[1.02] tracking-[-0.005em] text-paper">
                We know the market you sell to.
              </h3>
              <p className="mt-2.5 max-w-[42ch] text-[12px] font-medium leading-relaxed text-paper/60">
                Sector 17 retail, Mohali&apos;s IT corridor and Panchkula clinics do not buy the same
                way. Local context is why the copy lands.
              </p>

              {/* Radar */}
              <div className="relative mx-auto mt-6 aspect-square w-full max-w-[290px]">
                {[100, 72, 44].map((size) => (
                  <span
                    key={size}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/20"
                    style={{ width: `${size}%`, height: `${size}%` }}
                  />
                ))}
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marigold" />
                <span className="absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-paper/25 to-transparent" />
                <span className="absolute left-1/2 top-1/2 h-[92%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-paper/25 to-transparent" />

                <span className="absolute left-[46%] top-[22%] flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-paper/30 bg-ink px-2.5 py-1">
                  <MapPin className="h-3 w-3 text-marigold" />
                  <span className="text-[10px] font-semibold">Chandigarh</span>
                </span>
                <span className="absolute right-[2%] top-[52%] flex items-center gap-1.5 rounded-full border border-paper/30 bg-ink px-2.5 py-1">
                  <MapPin className="h-3 w-3 text-marigold" />
                  <span className="text-[10px] font-semibold">Mohali</span>
                </span>
                <span className="absolute bottom-[12%] left-[12%] flex items-center gap-1.5 rounded-full border border-paper/30 bg-ink px-2.5 py-1">
                  <MapPin className="h-3 w-3 text-marigold" />
                  <span className="text-[10px] font-semibold">Panchkula</span>
                </span>

                <span className="absolute bottom-[26%] right-[4%] flex items-center gap-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-paper/40">
                  <Navigation className="h-2.5 w-2.5" /> 30 min radius
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {AREAS.slice(0, 9).map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-paper/25 px-2.5 py-1 text-[10px] font-medium text-paper/60"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="mt-4 flex items-center gap-1.5 border-t border-paper/20 pt-3 text-[10.5px] text-paper/45">
                <Check className="h-3 w-3 text-marigold" strokeWidth={3.5} />
                In-person kickoff anywhere in Tricity. Remote builds across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
