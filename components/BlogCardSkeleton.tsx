import { VercelCard } from "./VercelCard"

export function BlogCardSkeleton() {
  return (
    <VercelCard showIcons={false} animateOnHover={false} glowEffect={false} className="bg-parchment" contentClassName="p-0">
      <article className="h-full animate-pulse overflow-hidden">
        <div className="h-48 w-full border-b border-ink/15 bg-sage" />
        <div className="p-5">
          <div className="mb-4 h-3 w-28 rounded-full bg-sage" />
          <div className="space-y-2">
            <div className="h-6 w-3/4 rounded-full bg-sage" />
            <div className="h-6 w-1/2 rounded-full bg-sage" />
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-3 w-full rounded-full bg-sage/80" />
            <div className="h-3 w-full rounded-full bg-sage/80" />
            <div className="h-3 w-5/6 rounded-full bg-sage/80" />
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-ink/15 pt-4">
            <div className="h-7 w-7 rounded-full bg-sage" />
            <div className="h-3 w-32 rounded-full bg-sage" />
          </div>
        </div>
      </article>
    </VercelCard>
  )
}

export function BlogCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <section className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </section>
  )
}
