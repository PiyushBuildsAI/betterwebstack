import { solutions } from "@/lib/data/solutions";
import { notFound } from "next/navigation";
import Link from "next/link";
import UnderlineButton from "@/components/UnderlineButton";
import { Check, Sparkle } from "lucide-react";
import { Cactus } from "@/components/brand/Botanical";

export function generateStaticParams() {
  return solutions.map((solution) => ({
    id: solution.id,
  }));
}

function renderContent(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={lastIndex}
        href={match[2]}
        className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
      >
        {match[1]}
      </Link>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default async function SolutionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const solution = solutions.find((s) => s.id === id);

  if (!solution) {
    notFound();
  }

  const Icon = solution.icon;

  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl">
          <UnderlineButton href="/solutions" label="All solutions" />

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-ink bg-marigold">
              <Icon className="h-6 w-6 text-ink" />
            </span>
            <div>
              <span className="pill">
                <Sparkle className="h-3 w-3 text-ink/60" />
                {solution.badge}
              </span>
              <h1 className="display-bold mt-3 max-w-[16ch] text-[44px] uppercase leading-[0.9] sm:text-[58px]">
                {solution.title}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-[15px] font-medium leading-relaxed text-ink/65">
            {solution.description}
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="stamp relative mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-ink bg-parchment p-6 sm:p-10">
          <Cactus className="pointer-events-none absolute -bottom-8 -right-4 h-40 w-28 text-ink/[0.06]" />

          <div className="relative">
            <h2 className="text-[30px] uppercase leading-none">Overview</h2>
            <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink/65">
              {renderContent(solution.detailedContent)}
            </p>

            <h2 className="mt-10 text-[30px] uppercase leading-none">Key Benefits</h2>
            <ul className="mt-4 grid list-none grid-cols-1 gap-3 pl-0 md:grid-cols-2">
              {solution.benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="m-0 flex items-center gap-3 rounded-[20px] border border-ink/20 bg-cream/60 px-4 py-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-marigold">
                    <Check className="h-3 w-3 text-ink" strokeWidth={4} />
                  </span>
                  <span className="text-[13px] font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[32px] border border-ink bg-sage px-6 py-8 text-center">
              <h2 className="text-[28px] uppercase leading-none">Ready to get started?</h2>
              <p className="mx-auto mt-3 max-w-md text-[13px] font-medium leading-relaxed text-ink/60">
                Let&apos;s discuss how our {solution.title} services can help your business grow.
              </p>
              <Link href="/contact" className="btn-ink mt-6">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
