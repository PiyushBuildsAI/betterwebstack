import {
  BarChart3,
  CalendarCheck,
  CreditCard,
  Infinity as InfinityIcon,
  Magnet,
  MessageCircle,
  Search,
  ShoppingBag,
  Sparkles,
  Triangle,
} from "lucide-react";
import { Sparkle } from "@/components/brand/Botanical";

const TOOLS = [
  { name: "Google Business", icon: Search },
  { name: "Meta Ads", icon: InfinityIcon },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Razorpay", icon: CreditCard },
  { name: "Next.js", icon: Triangle },
  { name: "Vercel", icon: Triangle },
  { name: "Sanity CMS", icon: Sparkles },
  { name: "WhatsApp Business", icon: MessageCircle },
  { name: "GA4", icon: BarChart3 },
  { name: "Calendly", icon: CalendarCheck },
  { name: "HubSpot", icon: Magnet },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-ink/25 bg-parchment py-4">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 sm:px-8 md:flex-row md:items-center md:gap-6">
        <p className="shrink-0 text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-ink/55">
          Built &amp; integrated with
        </p>
        <div className="marquee-mask relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-7">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <span
                key={`${tool.name}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap text-[13px] font-bold tracking-[-0.01em] text-ink/65 transition hover:text-ink"
              >
                <tool.icon className="h-3.5 w-3.5 text-ink/45" strokeWidth={2} />
                {tool.name}
                <Sparkle className="ml-3 h-2.5 w-2.5 text-marigold [stroke:currentColor]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
