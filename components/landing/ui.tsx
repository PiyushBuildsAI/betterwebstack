import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHead({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "forest";
  className?: string;
}) {
  const onForest = tone === "forest";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {index && (
          <span
            className={cn(
              "flex h-6 items-center rounded-full border px-2.5 text-[10px] font-extrabold tracking-[0.14em]",
              onForest
                ? "border-paper/35 bg-transparent text-paper"
                : "border-ink/30 bg-parchment text-ink"
            )}
          >
            {index}
          </span>
        )}
        <span className={cn("eyebrow", onForest ? "text-marigold" : "text-ink/65")}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "display max-w-[19ch] text-[40px] leading-[0.9] sm:text-[52px] lg:text-[60px]",
          onForest ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[52ch] text-[14.5px] font-medium leading-relaxed sm:text-[16px]",
            onForest ? "text-paper/70" : "text-ink/65",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Stars({ className, count = 5 }: { className?: string; count?: number }) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-[#fce519]", className)}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-current stroke-ink/40"
          strokeWidth={1.2}
        />
      ))}
    </span>
  );
}

export function Initials({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/25 bg-sand text-[10px] font-extrabold tracking-wide text-ink",
        className
      )}
    >
      {initials}
    </span>
  );
}

export function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
