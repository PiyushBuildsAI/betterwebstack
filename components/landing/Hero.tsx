import Link from "next/link";
import { ArrowRight, Check, Clock, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { Cactus, DesertScene, Sparkle, SunBurst } from "@/components/brand/Botanical";
import { LeadForm } from "@/components/landing/LeadForm";
import { Initials, Stars } from "@/components/landing/ui";
import { SITE } from "@/lib/site";

const PROMISES = ["Fixed quote before we start", "Launch in 10–21 days", "You own everything"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="sunlit-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_70%)] opacity-40" />
        <div className="absolute -right-16 top-24 hidden h-[520px] w-[620px] text-ink/[0.18] lg:block">
          <DesertScene />
        </div>
        <div className="absolute -left-16 bottom-4 hidden h-44 w-32 text-ink/20 lg:block">
          <Cactus />
        </div>
        <div className="absolute left-[42%] top-16 hidden h-16 w-16 text-ink/25 xl:block">
          <SunBurst />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          {/* Copy */}
          <div className="animate-rise">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="pill pill-sage">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                Chandigarh · Mohali · Panchkula
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink/50">
                Booking November builds
              </span>
            </div>

            <h1 className="display-bold mt-6 text-[58px] leading-[0.82] text-ink sm:text-[78px] lg:text-[88px] xl:text-[100px]">
              Websites that
              <br />
              bring you{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="display-italic">customers.</span>
                <svg
                  className="absolute -bottom-2 left-0 h-[12px] w-full sm:-bottom-3 sm:h-[16px]"
                  viewBox="0 0 220 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10.5C48 3.5 130 2 217 7.5"
                    stroke="#fce519"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-[46ch] text-[15.5px] font-medium leading-[1.65] text-ink/70 sm:text-[17px]">
              We design and build high-converting websites for Tricity businesses — then wire them
              to capture enquiries, book appointments and follow up on WhatsApp while you work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="#audit" className="btn-lime group w-full sm:w-auto">
                Get my free website audit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="#work" className="btn-ghost group w-full sm:w-auto">
                See the work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["AK", "RM", "SJ", "VG"].map((initials) => (
                  <Initials
                    key={initials}
                    initials={initials}
                    className="h-9 w-9 border-parchment bg-sage text-[9px]"
                  />
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 bg-ink text-[9px] font-extrabold text-paper">
                  120+
                </span>
              </div>
              <div className="text-[12px] font-medium leading-tight text-ink/65">
                <span className="flex items-center gap-1.5 font-bold text-ink">
                  <Stars /> 4.9 on Google
                </span>
                Tricity businesses trust us with their website
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
              {PROMISES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-[11.5px] font-semibold text-ink/65"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-marigold">
                    <Check className="h-2.5 w-2.5 text-ink" strokeWidth={3.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lead capture */}
          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="pointer-events-none absolute -right-5 -top-8 hidden h-24 w-24 text-ink/30 sm:block">
              <SunBurst />
            </div>
            <div className="pointer-events-none absolute -left-12 -bottom-14 hidden h-36 w-24 rotate-[-8deg] text-ink/20 lg:block">
              <Cactus />
            </div>
            <Sparkle className="absolute -left-5 top-28 hidden h-7 w-7 text-ink/40 lg:block" />

            <div className="stamp-lg relative rounded-[40px] border border-ink bg-parchment p-5 sm:p-7">
              <div className="absolute right-5 top-5 hidden items-center gap-1.5 rounded-full border border-ink/25 bg-paper px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-ink/60 sm:flex">
                <Clock className="h-3 w-3" />
                2h reply
              </div>

              <LeadForm source="hero-audit" submitLabel="Get my free audit" />

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink/20 pt-4">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/55">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  14 free audits each month
                </p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink underline decoration-ink/25 decoration-1 underline-offset-4 transition hover:decoration-ink"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp instead
                </a>
              </div>
            </div>

            <div className="relative mt-4 flex items-center gap-2.5 rounded-full border border-ink bg-ink px-4 py-3 text-paper">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marigold text-ink">
                <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <p className="text-[11.5px] font-medium leading-tight text-paper/75">
                <span className="font-bold text-paper">Website + WhatsApp automation.</span>{" "}
                Enquiries answered in 8 seconds, even at 11pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
