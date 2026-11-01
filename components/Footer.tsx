import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Cactus } from "@/components/brand/Botanical";

const SERVICE_LINKS = [
  { label: "Business websites", href: "/#services" },
  { label: "E-commerce stores", href: "/#services" },
  { label: "Ad landing pages", href: "/#services" },
  { label: "Local SEO", href: "/#services" },
  { label: "AI chat + automation", href: "/#services" },
  { label: "Care & growth plan", href: "/#pricing" },
];

const COMPANY_LINKS = [
  { label: "Selected work", href: "/#work" },
  { label: "Our process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Project planner", href: "/#planner" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blogs" },
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="forest-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -bottom-16 right-0 hidden h-[340px] w-[220px] text-paper/20 lg:block">
        <Cactus />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-paper/15 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="display-eyebrow text-lime">Start a project</p>
            <p className="display mt-3 max-w-[24ch] text-[36px] leading-[0.9] text-paper sm:text-[44px]">
              Have a project in mind? Let&apos;s make it pay for itself.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-full border border-ink bg-lime px-5 py-3 text-[12.5px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-lime-deep"
            >
              Get a free audit
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-[12.5px] font-bold text-paper transition hover:border-paper/60 hover:bg-paper/10"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-paper/30 bg-paper">
                <span className="font-display text-[20px] font-semibold leading-none text-ink">B</span>
              </span>
              <span className="font-display text-[25px] font-semibold tracking-[-0.02em] text-paper">
                betterwebstack<span className="text-lime">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[32ch] text-[13px] font-medium leading-relaxed text-paper/60">
              A small web studio building lead-generating websites for businesses in Chandigarh,
              Mohali and Panchkula.
            </p>
            <p className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.13em] text-paper/60">
              <MapPin className="h-3 w-3 text-lime" />
              {SITE.location}
            </p>
          </div>

          <div>
            <p className="display-eyebrow text-paper/45">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-paper/70 transition hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="display-eyebrow text-paper/45">Company</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-paper/70 transition hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="display-eyebrow text-paper/45">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 text-[13px] font-medium text-paper/70 transition hover:text-paper"
                >
                  <Phone className="h-3.5 w-3.5 text-lime" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-[13px] font-medium text-paper/70 transition hover:text-paper"
                >
                  <Mail className="h-3.5 w-3.5 text-lime" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[13px] font-medium text-paper/70">
                <MessageCircle className="h-3.5 w-3.5 text-lime" />
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-paper"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-[13px] font-medium text-paper/70">
                <Clock className="h-3.5 w-3.5 text-lime" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium text-paper/45">
            © {new Date().getFullYear()} {SITE.name}. Website design &amp; development in
            Chandigarh, Mohali and Panchkula.
          </p>
          <div className="flex items-center gap-5 text-[11px] font-bold text-paper/50">
            <Link href="/terms" className="transition hover:text-lime">
              Terms
            </Link>
            <Link href="/privacy" className="transition hover:text-lime">
              Privacy
            </Link>
            <Link href="/#faq" className="transition hover:text-lime">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
