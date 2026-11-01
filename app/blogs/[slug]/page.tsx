import { client } from "@/lib/sanity"
import { PortableText, type PortableTextBlock } from "@portabletext/react"
import UnderlineButton from "@/components/UnderlineButton"
import { Sparkle } from "@/components/brand/Botanical"

interface Props {
  params: Promise<{ slug: string }>
}

interface SingleBlogPost {
  title: string
  date: string
  body: PortableTextBlock[]
  author: {
    name: string
  }
  mainImage?: {
    asset: unknown
  }
  readTime?: number
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "date": publishedAt,
    body,
    author->{name},
    mainImage,
    readTime
  }`

  const post: SingleBlogPost | null = await client.fetch(query, { slug })

  if (!post) {
    return (
      <div className="min-h-screen bg-paper px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <UnderlineButton href="/blogs" label="All articles" />
          <div className="mt-10 rounded-[40px] border border-ink/25 bg-parchment p-10 text-center">
            <p className="text-[14px] font-medium text-ink/60">Post not found</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] sunlit-dots opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <UnderlineButton href="/blogs" label="All articles" />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="pill">
            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
          <span className="pill pill-sage">{post.author?.name}</span>
          {post.readTime && <span className="pill">{post.readTime} min read</span>}
        </div>

        <h1 className="display-bold mt-5 max-w-[18ch] text-[42px] uppercase leading-[0.92] sm:text-[56px]">
          {post.title}
        </h1>

        <div className="relative mt-10">
          <Sparkle className="pointer-events-none absolute -left-4 -top-4 h-4 w-4 text-ink/25" />
          <div className="stamp rounded-[40px] border border-ink bg-parchment p-6 sm:p-10">
            <div className="prose max-w-none">
              <PortableText value={post.body} />
            </div>
          </div>
        </div>

        <p className="mt-10 flex flex-wrap items-center gap-2 border-t border-ink/20 pt-6 text-[12px] font-medium text-ink/50">
          Published by{" "}
          <span className="font-bold text-ink">{post.author?.name}</span>
        </p>
      </div>
    </article>
  )
}
