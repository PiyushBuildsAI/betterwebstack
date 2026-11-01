"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Triangle } from "lucide-react"
import { VercelCard } from "./VercelCard"
import type { BlogPost } from "@/types/blog"

interface FeaturedPostsProps {
  posts?: BlogPost[]
  initialDisplayCount?: number
}

export function FeaturedPosts({ posts, initialDisplayCount = 6 }: FeaturedPostsProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)
  
  // Use provided posts or fall back to empty array
  const blogPosts = posts || []
  const displayedPosts = blogPosts.slice(0, displayCount)
  const hasMore = displayCount < blogPosts.length

  const layoutClass =
    displayedPosts.length === 1
      ? "mx-auto grid max-w-lg grid-cols-1 gap-6 py-8"
      : displayedPosts.length === 2
        ? "mx-auto grid max-w-3xl grid-cols-1 gap-6 py-8 md:grid-cols-2"
        : "grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"

  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 6, blogPosts.length))
  }

  return (
    <>
      <section className={layoutClass}>
        {displayedPosts.map((post) => {
          const Icon = post.icon || Triangle
          const author = post.authors.length > 0 ? post.authors[0].name : "Anonymous"
          
          return (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="group block h-full">
              <VercelCard 
                showIcons={false}
                animateOnHover={false} 
                glowEffect={false} 
                className="h-full bg-parchment transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ink"
                contentClassName="p-0"
              >
                <article className="flex h-full w-full flex-col overflow-hidden">
                  {/* Image Section - Top */}
                  <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b border-ink/15 bg-sage">
                    {post.mainImage?.url ? (
                      <Image 
                        src={post.mainImage.url} 
                        alt={post.mainImage.alt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Icon className="h-12 w-12 text-ink/20" strokeWidth={1} />
                    )}
                  </div>

                  {/* Content Section - Bottom */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-ink/45">
                      <time dateTime={post.date}>{post.date}</time>
                      {post.readTime && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-ink/25" />
                          <span>{post.readTime} min read</span>
                        </>
                      )}
                    </div>
                    
                    <h2 className="display line-clamp-2 text-[24px] uppercase leading-[0.98] text-ink transition-colors group-hover:text-ink/70">
                      {post.title}
                    </h2>
                    
                    <p className="mb-4 mt-2 line-clamp-3 text-[12.5px] font-medium leading-relaxed text-ink/60">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/15 pt-3">
                      <span className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 bg-sage text-[9px] font-extrabold uppercase text-ink">
                          {author.slice(0, 1)}
                        </span>
                        <span className="text-[11px] font-bold text-ink/70">{author}</span>
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 bg-cream transition group-hover:bg-marigold">
                        <ArrowUpRight className="h-3.5 w-3.5 text-ink" />
                      </span>
                    </div>
                  </div>
                </article>
              </VercelCard>
            </Link>
          )
        })}
      </section>

      {hasMore && (
        <div className="flex justify-center pb-8">
          <button
            onClick={handleShowMore}
            type="button"
            className="btn-outline bg-parchment"
          >
            Show More
          </button>
        </div>
      )}
    </>
  )
}
