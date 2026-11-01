import { Cactus } from "@/components/brand/Botanical";
import { cn } from "@/lib/utils";

/**
 * Mini website mockups rendered entirely in CSS.
 * They stand in for project screenshots and stay crisp at every size.
 */

export type MockupVariant = "clinic" | "realestate" | "shop";

const URLS: Record<MockupVariant, string> = {
  clinic: "smilestudiochd.com",
  realestate: "meridianestates.in",
  shop: "nira.skin",
};

function Dots() {
  return (
    <span className="flex items-center gap-1">
      <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
    </span>
  );
}

function ClinicBody() {
  return (
    <div className="flex h-full flex-col bg-parchment p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-[9px] font-semibold uppercase tracking-[0.01em] text-ink">
          Smile Studio
        </span>
        <div className="flex items-center gap-2 text-[5.5px] font-medium text-ink/50">
          <span>Treatments</span>
          <span>Pricing</span>
          <span>About</span>
          <span className="rounded-full border border-ink bg-ink px-2 py-1 text-[5.5px] font-bold text-parchment">
            Book a visit
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 items-stretch gap-2">
        <div className="flex w-[56%] flex-col justify-center">
          <span className="font-mono text-[5px] uppercase tracking-[0.18em] text-ink/45">
            Sector 34 · Chandigarh
          </span>
          <p className="mt-1 font-display text-[15px] font-semibold uppercase leading-[0.88] tracking-[-0.01em] text-ink">
            Dentistry that
            <br />
            feels calm.
          </p>
          <p className="mt-1.5 text-[5.5px] leading-[1.5] text-ink/55">
            Implants, aligners and whitening with fixed pricing and same-week slots.
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="rounded-full border border-ink bg-ink px-2 py-1 text-[5px] font-bold text-parchment">
              Book appointment
            </span>
            <span className="rounded-full border border-ink/30 px-2 py-1 text-[5px] font-semibold text-ink/60">
              Call now
            </span>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-[10px] border border-ink/20 bg-[linear-gradient(150deg,#e4edc0_0%,#cfe3a2_45%,#b4d47f_100%)]">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[90%] w-[64%] text-ink/20">
            <Cactus />
          </div>
          <div className="absolute right-1.5 top-1.5 rounded-full border border-ink/20 bg-marigold px-1.5 py-0.5 text-[4.5px] font-bold text-ink">
            4.9 ★ 320 reviews
          </div>
          <div className="absolute bottom-2 left-2 right-2 rounded-md border border-ink/15 bg-parchment/95 p-1.5">
            <p className="text-[4.5px] font-semibold text-ink/55">Next available</p>
            <p className="text-[6px] font-bold text-ink">Tomorrow · 11:30 am</p>
          </div>
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[
          ["Implants", "₹25,000"],
          ["Aligners", "₹65,000"],
          ["Whitening", "₹8,500"],
        ].map(([name, price]) => (
          <div key={name} className="rounded-md border border-ink/15 bg-cream/45 p-1.5">
            <p className="text-[5px] font-bold text-ink">{name}</p>
            <p className="text-[5px] text-ink/50">{price} onwards</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealEstateBody() {
  return (
    <div className="flex h-full flex-col bg-cream p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-[9px] font-semibold uppercase tracking-[0.01em] text-ink">
          Meridian Estates
        </span>
        <div className="flex items-center gap-2 text-[5.5px] font-medium text-ink/50">
          <span>Projects</span>
          <span>Location</span>
          <span className="rounded-full border border-ink bg-ink px-2 py-1 text-[5.5px] font-bold text-marigold">
            Book site visit
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 gap-2">
        <div className="relative w-[44%] overflow-hidden rounded-[10px] border border-ink bg-[linear-gradient(165deg,#2b5a20_0%,#17430f_60%,#10380b_100%)]">
          <div className="absolute inset-x-2 bottom-0 top-5 grid grid-cols-4 gap-[2px]">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="rounded-[1px] bg-marigold/25"
                style={{ opacity: i % 5 === 0 ? 0.12 : 0.55 }}
              />
            ))}
          </div>
          <span className="absolute left-1.5 top-1.5 rounded-sm border border-ink/15 bg-parchment px-1.5 py-0.5 text-[4.5px] font-bold text-ink">
            Ready to move
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <span className="font-mono text-[5px] uppercase tracking-[0.18em] text-ink/40">
            Sector 66 · Mohali
          </span>
          <p className="mt-1 font-display text-[14px] font-semibold uppercase leading-[0.9] tracking-[-0.01em] text-ink">
            3 &amp; 4 BHK
            <br />
            in Mohali.
          </p>
          <p className="mt-1 inline-flex w-fit rounded-full bg-marigold px-1.5 py-0.5 text-[5px] font-bold text-ink">
            ₹1.4 Cr onwards
          </p>
          <p className="mt-1 text-[5.5px] leading-[1.5] text-ink/55">
            2140 sq.ft. · Covered parking · Clubhouse · Possession Dec 2027
          </p>
          <div className="mt-2 rounded-md border border-ink/20 bg-parchment p-1.5">
            <p className="text-[4.5px] font-semibold text-ink/45">Download floor plan</p>
            <div className="mt-1 flex gap-1">
              <span className="flex-1 rounded-sm border border-ink/20 px-1 py-0.5 text-[4.5px] text-ink/50">
                Name
              </span>
              <span className="rounded-sm border border-ink bg-ink px-1.5 py-0.5 text-[4.5px] font-bold text-parchment">
                Get it
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopBody() {
  return (
    <div className="flex h-full flex-col bg-parchment p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.01em] text-ink">
          nira.
        </span>
        <div className="flex items-center gap-2 text-[5.5px] font-medium text-ink/50">
          <span>Shop</span>
          <span>Ingredients</span>
          <span className="rounded-full border border-ink/30 px-2 py-1 text-[5.5px] font-semibold text-ink/60">
            Cart · 2
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-1 gap-2">
        <div className="flex w-[52%] flex-col justify-center">
          <span className="font-mono text-[5px] uppercase tracking-[0.18em] text-ink/45">
            Barrier repair
          </span>
          <p className="mt-1 font-display text-[14px] font-semibold uppercase leading-[0.88] tracking-[-0.01em] text-ink">
            Skin that
            <br />
            stops overreacting.
          </p>
          <p className="mt-1.5 text-[5.5px] leading-[1.5] text-ink/55">
            Ceramide-first moisturiser. Fragrance free. Made for Indian summers.
          </p>
          <p className="mt-1.5 font-display text-[8px] font-bold text-ink">₹899</p>
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="rounded-full border border-ink bg-ink px-2 py-1 text-[5px] font-bold text-parchment">
              Add to cart
            </span>
            <span className="text-[4.5px] text-ink/45">COD available</span>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-[10px] border border-ink/20 bg-[linear-gradient(160deg,#e9efcf_0%,#d7e6ae_60%,#c2d992_100%)]">
          <div className="absolute left-1/2 top-1/2 h-[62%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[6px] border border-ink/20 bg-[linear-gradient(105deg,#fefde6_0%,#f2ee98_40%,#dbe8ac_100%)]">
            <div className="absolute inset-x-0 top-0 h-[18%] rounded-t-[5px] bg-ink" />
            <div className="absolute inset-x-1 top-[34%] h-[1px] bg-ink/25" />
            <div className="absolute inset-x-1 top-[42%] h-[1px] bg-ink/15" />
          </div>
          <span className="absolute bottom-1.5 left-1.5 rounded-full border border-ink/20 bg-marigold px-1.5 py-0.5 text-[4.5px] font-bold text-ink">
            Bestseller
          </span>
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {["Barrier cream", "Cleanser", "Sunscreen"].map((name) => (
          <div key={name} className="rounded-md border border-ink/15 bg-cream/45 p-1.5">
            <div className="mb-1 h-3 rounded-sm border border-ink/10 bg-[linear-gradient(120deg,#dbe8ac,#b9d285)]" />
            <p className="text-[5px] font-bold text-ink">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const BODIES = {
  clinic: ClinicBody,
  realestate: RealEstateBody,
  shop: ShopBody,
} as const;

export function SiteMockup({
  variant,
  className,
  compact = false,
}: {
  variant: MockupVariant;
  className?: string;
  compact?: boolean;
}) {
  const Body = BODIES[variant];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[16px] border border-ink bg-parchment shadow-[5px_5px_0_0_#10380b]",
        className
      )}
      aria-hidden="true"
    >
      {!compact && (
        <div className="flex items-center gap-2 border-b border-ink/20 bg-cream px-2.5 py-1.5">
          <Dots />
          <span className="flex-1 truncate rounded-full border border-ink/10 bg-parchment px-2 py-0.5 text-center font-mono text-[6px] tracking-tight text-ink/50">
            {URLS[variant]}
          </span>
        </div>
      )}
      <div className={compact ? "h-full" : "aspect-[16/11]"}>
        <Body />
      </div>
    </div>
  );
}
