"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Sparkle } from "@/components/brand/Botanical";

export function NavbarDemo() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (anchor: string) => (pathname === "/" ? anchor : `/${anchor}`);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "pointer-events-auto border-b transition-colors duration-300",
          scrolled
            ? "border-ink/20 bg-paper/95 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <nav
            className="flex h-[72px] items-center justify-between gap-4"
            aria-label="Main"
          >
            <Link href="/" className="group flex shrink-0 items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-[11px] border border-ink bg-ink">
                <span className="font-display text-[20px] font-semibold leading-none text-lime">
                  B
                </span>
                <Sparkle className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 text-ink" />
              </span>
              <span className="font-display text-[24px] font-semibold tracking-[-0.02em] text-ink">
                betterwebstack<span className="text-ink/50">.</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={href(link.href)}
                  className="rounded-full px-3.5 py-2 text-[13px] font-bold text-ink/75 transition hover:bg-parchment hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={SITE.phoneHref}
                className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 text-[12.5px] font-bold text-ink transition hover:bg-parchment lg:flex"
              >
                <Phone className="h-3.5 w-3.5" />
                {SITE.phone}
              </a>

              <Link
                href={href("#audit")}
                className="group hidden items-center gap-1.5 rounded-full border border-ink bg-lime px-4 py-2.5 text-[12.5px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-lime-deep sm:inline-flex"
              >
                Free website audit
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 bg-parchment text-ink transition hover:bg-lime md:hidden"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink bg-ink text-paper transition hover:bg-[#1b4d14] md:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile sheet */}
        <div
          className={cn(
            "pointer-events-auto mx-4 mb-3 overflow-hidden rounded-[28px] border border-ink bg-parchment transition-all duration-300 md:hidden",
            open
              ? "max-h-[560px] opacity-100 shadow-[6px_6px_0_0_#10380b]"
              : "pointer-events-none max-h-0 border-transparent opacity-0"
          )}
        >
          <div className="flex flex-col p-3.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={href(link.href)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-3.5 py-3 font-display text-[19px] font-medium text-ink transition hover:bg-sage"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-ink/40" />
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-ink/20 pt-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-ink px-3 py-2.5 text-[13px] font-bold text-ink"
              >
                <Phone className="h-3.5 w-3.5" /> Call
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-ink bg-lime px-3 py-2.5 text-[13px] font-bold text-ink"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
            <Link
              href={href("#audit")}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-3 py-3 text-[13px] font-bold text-paper"
            >
              Free website audit <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
