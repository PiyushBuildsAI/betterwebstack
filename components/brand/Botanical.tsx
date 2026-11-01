import { cn } from "@/lib/utils";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Tall saguaro cactus, drawn as a single-weight botanical line illustration. */
export function Cactus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={cn("h-full w-full", className)} aria-hidden="true" {...stroke}>
      <path d="M100 268V96c0-12 8-20 20-20s20 8 20 20v172" />
      <path d="M100 210H74c-16 0-28-12-28-28V124c0-9 6-15 14-15s14 6 14 15v54c0 6 4 10 10 10h16" />
      <path d="M140 190h24c16 0 28-12 28-28v-40c0-9-6-15-14-15s-14 6-14 15v36c0 6-4 10-10 10h-14" />
      <path d="M52 268h100" />
      <path d="M86 250h38M86 224h38M86 198h38M86 172h38M86 146h38M86 120h38M86 96h10M128 96h10" opacity="0.45" />
      <path d="M78 202h-6M78 184h-6M124 214h6M124 196h6M72 158h-5M146 156h6" opacity="0.7" />
      <path d="M166 266c10-8 20-8 30 0M30 266c-8-6-16-6-24 0" opacity="0.55" />
    </svg>
  );
}

/** A small round cactus for tight spots. */
export function RoundCactus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 160" className={cn("h-full w-full", className)} aria-hidden="true" {...stroke}>
      <path d="M70 144v-24" />
      <path d="M46 120c-12-8-18-22-18-38 0-26 18-46 42-46s42 20 42 46c0 16-6 30-18 38" />
      <path d="M46 120h48" />
      <path d="M45 88c10 0 16-6 16-16M95 88c-10 0-16-6-16-16M70 44v-8" opacity="0.55" />
      <path d="M35 60h-6M105 60h6M52 38l-4-5M88 38l4-5" opacity="0.7" />
      <path d="M56 144h28" />
    </svg>
  );
}

export function SunBurst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={cn("h-full w-full", className)} aria-hidden="true" {...stroke}>
      <circle cx="80" cy="80" r="32" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x1 = 80 + Math.cos(angle) * 43;
        const y1 = 80 + Math.sin(angle) * 43;
        const x2 = 80 + Math.cos(angle) * (i % 3 === 0 ? 65 : 56);
        const y2 = 80 + Math.sin(angle) * (i % 3 === 0 ? 65 : 56);
        return <path key={i} d={`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`} />;
      })}
      <circle cx="69" cy="72" r="2" fill="currentColor" stroke="none" />
      <circle cx="91" cy="72" r="2" fill="currentColor" stroke="none" />
      <path d="M69 90c7 6 15 6 22 0" />
    </svg>
  );
}

export function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 80" className={cn("h-full w-full", className)} aria-hidden="true" {...stroke}>
      <path d="M26 58h116c14 0 24-9 24-20s-9-19-22-19c-2-11-12-19-25-19-11 0-20 6-24 15-3-2-8-4-13-4-12 0-21 8-22 19-10 1-17 7-17 15 0 8 7 13 17 13h2" />
      <path d="M62 50c8-4 16-4 24 0" opacity="0.6" />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="currentColor" aria-hidden="true">
      <path d="M12 1.8c.7 5.8 2.7 8.2 8.8 9-6.1.8-8.1 3.2-8.8 9-.7-5.8-2.7-8.2-8.8-9 6.1-.8 8.1-3.2 8.8-9Z" />
    </svg>
  );
}

/** A hand-drawn arrow for editorial annotations. */
export function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 90" className={cn("h-16 w-20", className)} aria-hidden="true" {...stroke}>
      <path d="M6 76c20-34 50-52 92-48" />
      <path d="M82 12c7 7 15 12 26 15-9 6-14 12-17 22" />
    </svg>
  );
}

/**
 * The hero landscape: a sun, clouds, desert dunes, cacti and a tiny
 * parachuting explorer. Used behind product / form cards.
 */
export function DesertScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 680 440" className={cn("h-full w-full", className)} aria-hidden="true" {...stroke}>
      {/* sun */}
      <circle cx="544" cy="92" r="42" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x1 = 544 + Math.cos(angle) * 54;
        const y1 = 92 + Math.sin(angle) * 54;
        const x2 = 544 + Math.cos(angle) * (i % 3 === 0 ? 76 : 66);
        const y2 = 92 + Math.sin(angle) * (i % 3 === 0 ? 76 : 66);
        return <path key={i} d={`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`} />;
      })}

      {/* clouds */}
      <path d="M74 98h72c10 0 18-7 18-15s-7-15-17-15c-1-9-9-15-19-15-8 0-15 5-18 12-2-2-6-3-10-3-9 0-16 6-17 15-8 0-13 5-13 11s5 10 12 10" />
      <path d="M382 58h48c8 0 13-5 13-11s-5-11-12-11c-1-7-7-11-14-11-6 0-11 4-13 9-2-1-4-2-7-2-7 0-12 4-13 11-6 0-10 4-10 8s4 7 8 7" opacity="0.7" />

      {/* dunes */}
      <path d="M0 352c56-26 110-32 166-12 40 14 68 12 100-4 38-20 78-20 118 0 40 19 78 18 116-2 30-16 62-19 94-8 24 9 52 11 86 6" />
      <path d="M0 390c70-18 136-18 198 0 52 15 108 15 162 0 62-18 128-20 198-6 40 8 78 8 122 0" opacity="0.5" />

      {/* left cactus */}
      <g transform="translate(58 138) scale(0.56)">
        <path d="M100 268V96c0-12 8-20 20-20s20 8 20 20v172" />
        <path d="M100 210H74c-16 0-28-12-28-28V124c0-9 6-15 14-15s14 6 14 15v54c0 6 4 10 10 10h16" />
        <path d="M140 190h24c16 0 28-12 28-28v-40c0-9-6-15-14-15s-14 6-14 15v36c0 6-4 10-10 10h-14" />
        <path d="M52 268h100" />
        <path d="M86 250h38M86 224h38M86 198h38M86 172h38M86 146h38M86 120h38M86 96h10M128 96h10" opacity="0.45" />
      </g>

      {/* right small cactus */}
      <g transform="translate(566 278) scale(0.3)">
        <path d="M70 144v-24" />
        <path d="M46 120c-12-8-18-22-18-38 0-26 18-46 42-46s42 20 42 46c0 16-6 30-18 38" />
        <path d="M46 120h48" />
        <path d="M45 88c10 0 16-6 16-16M95 88c-10 0-16-6-16-16M70 44v-8" opacity="0.55" />
      </g>

      {/* parachuting explorer */}
      <g transform="translate(300 88)">
        <path d="M24 0c18 0 34 12 38 28-7 3-14 1-19-3-4 5-10 6-16 3-5 5-13 5-19 1C4 16 8 0 24 0Z" />
        <path d="M15 14l6 24M44 14l-6 24M24 3v20" opacity="0.8" />
        <circle cx="25" cy="46" r="4" />
        <path d="M25 50v10M19 54h12M20 64l-4 7M30 64l4 7" />
      </g>

      {/* scattered desert marks */}
      <path d="M210 370c6-10 14-10 20 0M470 394c5-8 12-8 17 0" opacity="0.6" />
      <path d="M620 340h22M630 330v20" opacity="0.4" />
      <circle cx="250" cy="72" r="3" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="460" cy="120" r="2.5" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  );
}
