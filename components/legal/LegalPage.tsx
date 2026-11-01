import { NavbarDemo } from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import { Cactus, Sparkle, SunBurst } from "@/components/brand/Botanical";

export type LegalSection = {
  title: string;
  body: string;
};

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <NavbarDemo />

      <main className="flex-1">
        <section className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32">
          <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_72%)]" />
          <SunBurst className="pointer-events-none absolute -right-16 top-20 h-60 w-60 text-ink/[0.06]" />
          <Cactus className="pointer-events-none absolute -left-6 bottom-0 hidden h-56 w-40 text-ink/10 lg:block" />

          <div className="relative mx-auto max-w-3xl">
            <span className="pill pill-marigold">
              <Sparkle className="h-3 w-3 text-ink" />
              {eyebrow}
            </span>
            <h1 className="display-bold mt-5 max-w-[16ch] text-[48px] uppercase leading-[0.9] sm:text-[64px]">
              {title}
            </h1>
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">
              Last updated: {updated}
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8">
          <div className="stamp relative mx-auto max-w-3xl overflow-hidden rounded-[40px] border border-ink bg-parchment p-6 sm:p-10">
            <Sparkle className="pointer-events-none absolute right-6 top-6 h-4 w-4 text-ink/20" />

            <div className="relative space-y-8">
              {sections.map((section, index) => (
                <section key={section.title} className={index > 0 ? "border-t border-ink/15 pt-8" : ""}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-marigold font-mono text-[9px] font-bold text-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[28px] uppercase leading-[0.95]">{section.title}</h2>
                  </div>
                  <p className="mt-3 pl-10 text-[13.5px] font-medium leading-relaxed text-ink/65">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
