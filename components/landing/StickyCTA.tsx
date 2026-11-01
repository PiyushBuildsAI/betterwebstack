"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const audit = document.getElementById("audit");
      const atForm = audit ? audit.getBoundingClientRect().top < window.innerHeight * 0.55 : false;
      setVisible(window.scrollY > 620 && !atForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-ink bg-parchment px-3 py-2.5">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink bg-cream text-ink"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink bg-cream text-ink"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            href="#audit"
            className="flex h-11 flex-1 items-center justify-between rounded-full border border-ink bg-ink pl-4 pr-2 text-[12.5px] font-bold text-parchment"
          >
            Get my free audit
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-marigold text-ink">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
