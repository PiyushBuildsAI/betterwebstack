"use client";

import { useEffect, useState } from "react";
import { BlogCTA } from "@/components/BlogCTA";
import { FeaturedPosts } from "@/components/FeaturePost";
import { BlogCardSkeletonGrid } from "@/components/BlogCardSkeleton";
import type { BlogPost } from "@/types/blog";
import { fetchBlogPosts } from "@/lib/blog";
import { Construction } from "lucide-react";
import { SunBurst } from "@/components/brand/Botanical";

export function BlogPostsClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (active) setLoading(false);
    }, 5000);

    fetchBlogPosts()
      .then((data) => {
        if (active) setPosts(data);
      })
      .finally(() => {
        if (active) setLoading(false);
        clearTimeout(timer);
      });

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <BlogCardSkeletonGrid count={6} />
      ) : posts.length > 0 ? (
        <FeaturedPosts posts={posts} initialDisplayCount={6} />
      ) : (
        <div className="py-10 sm:py-14">
          <div className="stamp relative mx-auto max-w-2xl overflow-hidden rounded-[40px] border border-ink bg-parchment px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-30 [mask-image:radial-gradient(ellipse_at_50%_0%,black_0%,transparent_75%)]" />
            <SunBurst className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 text-ink/[0.06]" />
            <div className="relative">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <Construction className="h-7 w-7 text-ink" />
              </span>
              <h2 className="display mt-5 text-[30px] uppercase leading-[0.95] sm:text-[42px]">
                We are working on it
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-[13.5px] font-medium leading-relaxed text-ink/60">
                New field notes are on the way. Until then, tell us what you&apos;re working on
                and we&apos;ll point you in the right direction.
              </p>
            </div>
          </div>
        </div>
      )}
      <BlogCTA />
    </>
  );
}
