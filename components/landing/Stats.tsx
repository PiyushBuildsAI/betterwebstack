"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkle } from "@/components/brand/Botanical";
import { STATS } from "@/lib/site";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function CountUp({ target, decimals }: { target: number; decimals: number }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView<HTMLSpanElement>();

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-ink bg-marigold py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-25" />
      <Sparkle className="pointer-events-none absolute left-4 top-4 h-3.5 w-3.5 text-ink/30" />
      <Sparkle className="pointer-events-none absolute bottom-4 right-6 h-2.5 w-2.5 text-ink/25" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-ink/25">
          {STATS.map((stat) => (
            <div key={stat.label} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <p className="display flex items-baseline text-[38px] leading-none tabular-nums text-ink sm:text-[50px]">
                <CountUp
                  target={stat.value}
                  decimals={Number.isInteger(stat.value) ? 0 : 1}
                />
                <span className="ml-0.5 text-[0.52em] tracking-[-0.02em] text-ink/70">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-[11.5px] font-extrabold uppercase leading-tight tracking-[0.12em] text-ink/80">
                {stat.label}
              </p>
              <p className="mt-0.5 text-[10.5px] font-semibold italic text-ink/55">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
