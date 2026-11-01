import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Sparkle, SunBurst } from "@/components/brand/Botanical";
import UnderlineButton from "@/components/UnderlineButton";
import { cn } from "@/lib/utils";

type Band = "cream" | "sage" | "forest";

const bandClass: Record<Band, string> = {
  cream: "",
  sage: "border-y border-ink/15 bg-sage",
  forest: "bg-ink text-paper",
};

export function SolutionHero({
  eyebrow,
  title,
  description,
  bullets = [],
  primaryLabel = "Book Free Call",
  secondaryLabel = "Get Quote",
  centered = false,
  visual,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  primaryLabel?: string;
  secondaryLabel?: string;
  centered?: boolean;
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <UnderlineButton href="/solutions" label="All solutions" />
          <span className="hidden font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40 sm:block">
            BetterWebStack / Solutions
          </span>
        </div>

        <div
          className={cn(
            "mt-9",
            centered
              ? "mx-auto max-w-3xl text-center"
              : "grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]"
          )}
        >
          <div>
            <span className={cn("pill pill-marigold", centered && "mx-auto")}>
              <Sparkle className="h-3 w-3 text-ink" />
              {eyebrow}
            </span>
            <h1 className="display-bold mt-5 max-w-[16ch] text-[46px] uppercase leading-[0.88] sm:text-[60px] lg:text-[72px]">
              {title}
            </h1>
            <p
              className={cn(
                "mt-5 max-w-2xl text-[15px] font-medium leading-relaxed text-ink/65 sm:text-[16.5px]",
                centered && "mx-auto"
              )}
            >
              {description}
            </p>
            <div
              className={cn(
                "mt-7 flex flex-wrap items-center gap-3",
                centered && "justify-center"
              )}
            >
              <Link href="/contact" className="btn-ink group">
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/#pricing" className="btn-outline">
                {secondaryLabel}
              </Link>
            </div>
            {bullets.length > 0 && (
              <div
                className={cn(
                  "mt-6 flex flex-wrap gap-x-5 gap-y-2",
                  centered && "justify-center"
                )}
              >
                {bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="flex items-center text-[12px] font-bold text-ink/65"
                  >
                    <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-ink/50" />
                    {bullet}
                  </span>
                ))}
              </div>
            )}
          </div>

          {visual && !centered && (
            <div className="relative hidden lg:block">{visual}</div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection({
  id,
  band = "cream",
  className,
  children,
}: {
  id?: string;
  band?: Band;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden px-5 py-16 sm:px-8 sm:py-20",
        bandClass[band],
        className
      )}
    >
      {band === "forest" && (
        <div className="pointer-events-none absolute inset-0 forest-lines opacity-60" />
      )}
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SolutionHead({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  tone?: "light" | "forest";
  align?: "center" | "left";
}) {
  const onForest = tone === "forest";

  return (
    <div className={cn("mb-10", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <span className={cn("pill", onForest && "pill-marigold", align === "center" && "mx-auto")}>
          <Sparkle className={cn("h-3 w-3", onForest ? "text-ink" : "text-ink/60")} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "display mx-auto mt-4 max-w-[21ch] text-[36px] uppercase leading-[0.92] sm:text-[46px]",
          onForest ? "text-paper" : "text-ink",
          align === "left" && "ml-0"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-3 max-w-2xl text-[14px] font-medium leading-relaxed sm:text-[15px]",
            onForest ? "text-paper/65" : "text-ink/60",
            align === "left" && "ml-0"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function SolutionFinalCTA({
  title,
  description,
  primaryLabel = "Book Free Call",
  secondaryLabel = "Get Quote",
  primaryHref = "/contact",
  secondaryHref = "/#pricing",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="w-full px-5 pb-20 pt-4 sm:px-8">
      <div className="stamp relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-ink bg-parchment px-6 py-10 text-center sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-12 -top-14 h-48 w-48 text-ink/[0.07]">
          <SunBurst />
        </div>
        <Sparkle className="pointer-events-none absolute left-8 top-8 h-4 w-4 text-ink/25" />
        <Sparkle className="pointer-events-none absolute bottom-8 right-10 h-3 w-3 text-ink/20" />
        <h2 className="display relative mx-auto max-w-[21ch] text-[38px] uppercase leading-[0.92] sm:text-[50px]">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-[14px] font-medium leading-relaxed text-ink/60">
          {description}
        </p>
        <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={primaryHref} className="btn-ink group">
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href={secondaryHref} className="btn-outline bg-parchment">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function NumberBadge({
  children,
  tone = "marigold",
  className,
}: {
  children: React.ReactNode;
  tone?: "marigold" | "sage" | "forest" | "paper";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-bold",
        tone === "marigold" && "border-ink/20 bg-marigold text-ink",
        tone === "sage" && "border-ink/20 bg-sage text-ink",
        tone === "forest" && "border-ink bg-ink text-paper",
        tone === "paper" && "border-paper/30 bg-paper/10 text-paper",
        className
      )}
    >
      {children}
    </span>
  );
}
