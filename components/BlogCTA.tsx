import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { socialMediaLinks } from "@/lib/data/socialmedialink"
import { Sparkle, SunBurst } from "@/components/brand/Botanical"

export function BlogCTA() {
  return (
    <section className="pb-16 pt-8">
      <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-marigold px-6 py-10 sm:px-10">
        <SunBurst className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 text-ink/[0.07]" />
        <Sparkle className="pointer-events-none absolute bottom-8 left-8 h-4 w-4 text-ink/20" />

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="max-w-md text-[15px] font-medium leading-relaxed text-ink/75">
              <span className="font-extrabold text-ink">See if we&apos;re the right fit!</span>{" "}
              We offer a free consultation call to help you determine if our services are a good fit for your needs.
            </p>
            <Link href="/contact" className="btn-ink group mt-6">
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="md:border-l md:border-ink/20 md:pl-8">
            <p className="text-[15px] font-medium leading-relaxed text-ink/75">
              <span className="font-extrabold text-ink">Connect with us</span>{" "}
              Follow us on social media for updates and insights.
            </p>
            <div className="mt-5 flex gap-3">
              {socialMediaLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 bg-parchment text-ink transition hover:-translate-y-0.5 hover:border-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
