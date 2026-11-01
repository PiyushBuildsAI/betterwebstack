import { BlogPostsClient } from "@/components/BlogPostsClient";
import { RoundCactus, Sparkle, SunBurst } from "@/components/brand/Botanical";

export default function BlogPage() {
  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden px-5 pb-8 pt-28 sm:px-8 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_72%)]" />
        <SunBurst className="pointer-events-none absolute -right-16 top-16 h-64 w-64 text-ink/[0.06]" />
        <RoundCactus className="pointer-events-none absolute -bottom-10 left-2 hidden h-40 w-32 rotate-[-8deg] text-ink/10 lg:block" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="pill pill-marigold mx-auto">
            <Sparkle className="h-3 w-3 text-ink" />
            Field notes
          </span>
          <h1 className="display-bold mx-auto mt-5 max-w-[15ch] text-[52px] uppercase leading-[0.88] sm:text-[72px]">
            Ideas for a Better Web Stack
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[14px] font-medium leading-relaxed text-ink/60 sm:text-[15px]">
            Practical notes on websites, AI automation and growth systems for small businesses.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlogPostsClient />
      </div>
    </div>
  );
}
