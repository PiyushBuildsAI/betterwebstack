import { cn } from "@/lib/utils";

const BLOB =
  "M331 40c106-7 212 67 229 174 18 111-34 220-133 279-99 59-217 60-289-12C55 398 45 286 104 193 162 101 236 47 331 40Z";

/**
 * Liquid-chrome sculpture, drawn as SVG so it stays sharp and themeable.
 * This is the recurring visual motif from the design mockups.
 */
export function ChromeBlob({
  uid = "chrome",
  className,
}: {
  uid?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 620 620"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-metal`} x1="14%" y1="4%" x2="86%" y2="96%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.07" stopColor="#ecece6" />
          <stop offset="0.15" stopColor="#9d9e97" />
          <stop offset="0.24" stopColor="#f7f7f2" />
          <stop offset="0.33" stopColor="#3c3d38" />
          <stop offset="0.43" stopColor="#d2d2ca" />
          <stop offset="0.53" stopColor="#6c6d67" />
          <stop offset="0.64" stopColor="#fbfbf6" />
          <stop offset="0.74" stopColor="#9a9b94" />
          <stop offset="0.85" stopColor="#24251f" />
          <stop offset="0.94" stopColor="#efefe7" />
          <stop offset="1" stopColor="#b9bab2" />
        </linearGradient>
        <radialGradient id={`${uid}-sheen`} cx="30%" cy="22%" r="58%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-rim`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.06" />
        </linearGradient>
        <filter id={`${uid}-blur`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id={`${uid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <clipPath id={`${uid}-clip`}>
          <path d={BLOB} />
        </clipPath>
      </defs>

      <ellipse
        cx="320"
        cy="566"
        rx="190"
        ry="26"
        fill="#0c0d0b"
        opacity="0.16"
        filter={`url(#${uid}-blur)`}
      />

      <path d={BLOB} fill={`url(#${uid}-metal)`} />

      <g clipPath={`url(#${uid}-clip)`}>
        <ellipse
          cx="212"
          cy="176"
          rx="150"
          ry="96"
          fill={`url(#${uid}-sheen)`}
          transform="rotate(-24 212 176)"
        />
        <ellipse
          cx="430"
          cy="168"
          rx="92"
          ry="56"
          fill="#ffffff"
          opacity="0.55"
          filter={`url(#${uid}-soft)`}
          transform="rotate(18 430 168)"
        />
        <ellipse
          cx="470"
          cy="430"
          rx="130"
          ry="86"
          fill="#0c0d0b"
          opacity="0.35"
          filter={`url(#${uid}-blur)`}
          transform="rotate(-14 470 430)"
        />
        <path
          d="M120 430c74 64 166 88 264 60"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.55"
          strokeWidth="3"
          filter={`url(#${uid}-soft)`}
        />
        <path
          d="M168 146c92-46 196-40 278 20"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.75"
          strokeWidth="2"
        />
      </g>

      <path
        d={BLOB}
        fill="none"
        stroke={`url(#${uid}-rim)`}
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** A small polished chrome sphere — good for tight accents. */
export function ChromeBall({
  uid = "ball",
  className,
}: {
  uid?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <radialGradient id={`${uid}-ball`} cx="34%" cy="28%" r="78%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.28" stopColor="#e8e8e2" />
          <stop offset="0.56" stopColor="#6f706a" />
          <stop offset="0.78" stopColor="#25261f" />
          <stop offset="1" stopColor="#c9c9c1" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill={`url(#${uid}-ball)`} />
      <ellipse cx="43" cy="38" rx="18" ry="12" fill="#ffffff" opacity="0.85" transform="rotate(-26 43 38)" filter="blur(4px)" />
    </svg>
  );
}

/** Hand-drawn arrow annotation, as seen in the mockups. */
export function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={cn("h-16 w-20", className)} fill="none" aria-hidden="true">
      <path
        d="M6 74c18-30 44-46 78-44"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeDasharray="0"
      />
      <path
        d="M70 18c6 5 12 9 20 12-7 5-11 10-14 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" aria-hidden="true">
      <path
        d="M12 2c.6 5.2 2.4 7.4 8 8-5.6.6-7.4 2.8-8 8-.6-5.2-2.4-7.4-8-8 5.6-.6 7.4-2.8 8-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Small orbit diagram used behind the hero visual. */
export function OrbitRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={cn("h-full w-full", className)} fill="none" aria-hidden="true">
      <ellipse cx="200" cy="200" rx="186" ry="78" stroke="currentColor" strokeOpacity="0.28" strokeDasharray="3 7" transform="rotate(-18 200 200)" />
      <ellipse cx="200" cy="200" rx="132" ry="132" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="2 8" />
      <circle cx="352" cy="168" r="5" fill="currentColor" />
      <circle cx="86" cy="262" r="3.5" fill="currentColor" />
    </svg>
  );
}
