import { MorphyButton } from "@/components/ui/morphy-button";
import { ExpandableScreenTrigger } from "@/components/ui/expandable-screen";
import { Cactus, RoundCactus, Sparkle, SunBurst } from "@/components/brand/Botanical";

export function ContactHero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-20 [mask-image:radial-gradient(ellipse_at_50%_40%,black_0%,transparent_72%)]" />
      <SunBurst className="pointer-events-none absolute -right-20 top-24 h-72 w-72 text-ink/[0.07]" />
      <Cactus className="pointer-events-none absolute -left-6 bottom-0 hidden h-72 w-52 text-ink/15 lg:block" />
      <RoundCactus className="pointer-events-none absolute -right-3 bottom-6 hidden h-44 w-36 rotate-[10deg] text-ink/10 md:block" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-5 text-center sm:gap-6">
        <span className="pill pill-marigold mx-auto">
          <Sparkle className="h-3 w-3 text-ink" />
          Start a project
        </span>

        <h1 className="display-bold max-w-[16ch] text-[48px] uppercase leading-[0.88] sm:text-[68px] lg:text-[84px]">
          Websites, AI Automation <span className="italic">&amp; Growth Systems</span>
        </h1>

        <p className="max-w-2xl px-2 text-[14.5px] font-medium leading-relaxed text-ink/65 sm:text-[16.5px]">
          Build a stronger online presence, capture more leads, and run smarter operations.
        </p>

        <div className="mt-2">
          <ExpandableScreenTrigger>
            <MorphyButton size="lg" className="select-none">
              Get in touch
            </MorphyButton>
          </ExpandableScreenTrigger>
        </div>

        <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
          Chandigarh · Mohali · Panchkula
        </p>
      </div>
    </div>
  );
}
