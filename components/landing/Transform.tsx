"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { ArrowRight, MousePointerClick, MoveHorizontal, X } from "lucide-react";
import { Cactus, Sparkle } from "@/components/brand/Botanical";
import { SectionHead } from "@/components/landing/ui";

function Dots() {
  return (
    <span className="flex items-center gap-1">
      <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
    </span>
  );
}

/** Redesigned version: image left, selling copy right, so the visible half reads well. */
function AfterSite() {
  return (
    <div className="flex h-full flex-col bg-parchment">
      <div className="flex shrink-0 items-center gap-2 border-b border-ink/20 bg-cream px-2.5 py-1.5">
        <Dots />
        <span className="flex-1 truncate rounded-full border border-ink/10 bg-parchment px-2 py-0.5 text-center font-mono text-[6px] tracking-tight text-ink/50">
          smilestudiochd.com
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-3 pb-8 sm:p-4 sm:pb-9">
        <div className="flex shrink-0 items-center justify-between">
          <span className="font-display text-[9px] font-semibold uppercase tracking-[0.01em] text-ink">
            Smile Studio
          </span>
          <div className="flex items-center gap-2 text-[5.5px] font-medium text-ink/55">
            <span>Treatments</span>
            <span>Pricing</span>
            <span>About</span>
            <span className="rounded-full border border-ink bg-ink px-2 py-1 text-[5.5px] font-bold text-parchment">
              Book a visit
            </span>
          </div>
        </div>

        <div className="mt-2.5 flex min-h-0 flex-1 items-stretch gap-2.5">
          <div className="relative w-[38%] shrink-0 overflow-hidden rounded-[10px] border border-ink/20 bg-[linear-gradient(150deg,#e4edc0_0%,#cfe3a2_45%,#b4d47f_100%)]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[92%] w-[74%] text-ink/20">
              <Cactus />
            </div>
            <div className="absolute left-1.5 top-1.5 rounded-full border border-ink/20 bg-marigold px-1.5 py-0.5 text-[4.5px] font-bold text-ink">
              4.9 ★ 320 reviews
            </div>
            <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-ink/15 bg-parchment/95 p-1.5">
              <p className="text-[4.5px] font-semibold text-ink/55">Next available</p>
              <p className="text-[6px] font-bold text-ink">Tomorrow · 11:30 am</p>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
            <div>
              <span className="font-mono text-[5px] uppercase tracking-[0.18em] text-ink/50">
                Sector 34 · Chandigarh
              </span>
              <p className="mt-1 font-display text-[16px] font-semibold uppercase leading-[0.9] tracking-[-0.01em] text-ink">
                Dentistry that
                <br />
                feels calm.
              </p>
              <p className="mt-1.5 max-w-[94%] text-[6px] leading-[1.5] text-ink/55">
                Implants, aligners and whitening with fixed pricing and same-week slots.
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="rounded-full border border-ink bg-ink px-2 py-[5px] text-[5.5px] font-bold text-parchment">
                  Book appointment
                </span>
                <span className="rounded-full border border-ink/30 px-2 py-[5px] text-[5.5px] font-semibold text-ink/65">
                  Call now
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-1 text-[4.5px] text-ink/50">
                <span className="text-[#c7b400]">★★★★★</span>
                <span>4.9 on Google · 320 reviews</span>
              </div>
            </div>

            <div className="rounded-lg border border-ink/15 bg-cream/60 px-2 py-1.5">
              <p className="text-[5px] leading-[1.55] text-ink/60">
                “Booked three new patients the same week we launched. The site pays for itself.”
              </p>
              <p className="mt-1 text-[4.5px] text-ink/40">
                — Dr. R. Sharma · Smile Studio, Sector 34
              </p>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between border-t border-ink/15 pt-1.5">
                <span className="font-mono text-[4.5px] uppercase tracking-[0.16em] text-ink/40">
                  Fixed price list
                </span>
                <span className="text-[4.5px] font-semibold text-ink/60">No hidden costs</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  ["Implants", "₹25,000"],
                  ["Aligners", "₹65,000"],
                  ["Whitening", "₹8,500"],
                ].map(([name, price]) => (
                  <div
                    key={name}
                    className="rounded-md border border-ink/15 bg-cream/45 p-1.5"
                  >
                    <p className="text-[5px] font-bold text-ink">{name}</p>
                    <p className="text-[5px] text-ink/50">{price} onwards</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegacySite() {
  return (
    <div className="flex h-full flex-col bg-[#e6e1cf] p-3 font-serif text-[#454530] sm:p-4">
      <div className="border-b-2 border-[#7c7a58] pb-1 text-center">
        <p className="text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-[#4f4e36] sm:text-[13px]">
          Sharma Dental Clinic
        </p>
        <p className="mt-0.5 text-[5px] italic text-[#787457]">
          Best dental clinic in tricity — since 1998
        </p>
      </div>
      <div className="mt-1 flex items-center justify-center gap-2 border-b border-[#b5ae90] pb-1 text-[5px] text-[#636146]">
        <span>Home</span>
        <span>|</span>
        <span>About Us</span>
        <span>|</span>
        <span>Services</span>
        <span>|</span>
        <span>Contact</span>
        <span>|</span>
        <span>Gallery</span>
      </div>

      <div className="mt-1.5 bg-[linear-gradient(180deg,#8a8a62_0%,#5c5d40_100%)] p-2 text-center">
        <p className="text-[8px] font-bold text-[#f4f0dd] sm:text-[9px]">
          Welcome to our Website!!!
        </p>
        <p className="mt-0.5 text-[4.5px] text-[#ded9bf]">
          We are the leading dental clinic of Chandigarh. Please call us for appointment.
        </p>
        <span className="mt-1 inline-block bg-[#d9c98a] px-2 py-0.5 text-[4.5px] font-bold text-[#4a3a1a] ring-1 ring-[#a8945a]">
          CLICK HERE FOR APPOINTMENT
        </span>
      </div>

      <div className="mt-1.5 grid flex-1 grid-cols-3 gap-1">
        {["Our Services", "About Doctor", "Contact Us"].map((title) => (
          <div key={title} className="border border-[#b5ae90] bg-[#f1ecdc] p-1">
            <p className="text-[4.5px] font-bold underline">{title}</p>
            <div className="mt-1 space-y-[2px]">
              <div className="h-[2px] w-full bg-[#c9c2a6]" />
              <div className="h-[2px] w-[92%] bg-[#c9c2a6]" />
              <div className="h-[2px] w-[97%] bg-[#c9c2a6]" />
              <div className="h-[2px] w-[70%] bg-[#c9c2a6]" />
              <div className="h-[2px] w-[88%] bg-[#c9c2a6]" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-1.5 flex items-center justify-between border-t border-[#b5ae90] pt-1 text-[4px] text-[#787457]">
        <span>© Sharma Dental Clinic. All Rights Reserved.</span>
        <span className="bg-[#2b2c1e] px-1 py-0.5 font-mono text-[4px] text-[#b9e28a]">
          Visitors: 004521
        </span>
      </div>
    </div>
  );
}

export function Transform() {
  const [position, setPosition] = useState(34);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = frameRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }, []);

  return (
    <section id="problem" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12">
          <div>
            <SectionHead
              index="01"
              eyebrow="The problem"
              title={
                <>
                  Your site looks fine.
                  <br />
                  It just doesn&apos;t sell.
                </>
              }
              description="Most Tricity business websites were built to exist, not to convert. The fix is usually structure and clarity — not a bigger budget."
            />

            <ul className="mt-8 border-t border-ink/25">
              {[
                ["No obvious next step", "Visitors have to hunt for a number or form."],
                ["Enquiries die in DMs", "Saw the ad. Visited the site. Never called."],
                ["Slow and hard to read", "3 in 4 visitors are on a phone in the sun."],
                ["No proof of quality", "No reviews, no pricing, no reason to trust."],
              ].map(([title, body], index) => (
                <li key={title} className="flex gap-3 border-b border-ink/15 py-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink/30 bg-parchment text-ink">
                    <X className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-extrabold text-ink">
                      <span className="mr-1.5 font-mono text-[10px] font-semibold text-ink/40">
                        0{index + 1}
                      </span>
                      {title}
                    </p>
                    <p className="text-[12.5px] leading-relaxed text-ink/55">{body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="#audit" className="btn-ghost group mt-7">
              Check my website
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="pill pill-marigold">
                <MousePointerClick className="h-3 w-3" />
                Drag to compare
              </span>
              <span className="hidden items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/45 sm:flex">
                <Sparkle className="h-2.5 w-2.5 text-ink/40" />
                Same business · different result
              </span>
            </div>

            <div
              ref={frameRef}
              className="stamp relative aspect-[16/11] touch-none select-none overflow-hidden rounded-[40px] border border-ink bg-parchment"
              onPointerDown={(event) => {
                setDragging(true);
                (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
                updateFromClientX(event.clientX);
              }}
              onPointerMove={(event) => {
                if (!dragging) return;
                updateFromClientX(event.clientX);
              }}
              onPointerUp={() => setDragging(false)}
              onPointerCancel={() => setDragging(false)}
            >
              {/* After (full) */}
              <div className="absolute inset-0">
                <AfterSite />
              </div>

              {/* Before (clipped) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <LegacySite />
              </div>

              <span className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full border border-ink bg-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-parchment">
                Before
              </span>
              <span className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full border border-ink bg-marigold px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
                After
              </span>

              <div
                className="pointer-events-none absolute inset-y-0 w-[2px] bg-ink"
                style={{ left: `${position}%` }}
              >
                <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-parchment bg-ink text-parchment">
                  <MoveHorizontal className="h-4 w-4" />
                </div>
              </div>

              <input
                type="range"
                min={4}
                max={96}
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-label="Compare the old and new website design"
                className="absolute inset-x-0 bottom-2 mx-auto w-1/2 cursor-ew-resize appearance-none bg-transparent opacity-0"
              />
            </div>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {[
                ["Book in 2 taps", "Appointment button above the fold"],
                ["Proof up front", "Reviews, pricing and doctor profile"],
                ["0.9s on 4G", "Feels instant on a mid-range phone"],
              ].map(([title, body], index) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-ink/25 bg-parchment px-3.5 py-3"
                >
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                    0{index + 1}
                  </p>
                  <p className="mt-1 text-[11.5px] font-extrabold text-ink">{title}</p>
                  <p className="mt-0.5 text-[10.5px] leading-snug text-ink/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
