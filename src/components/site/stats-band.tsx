"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import { Reveal } from "@/components/site/reveal";

const STATS = [
  { value: 7, suffix: "", label: "Tools in one app" },
  { value: 100, suffix: "%", label: "Local data — nothing leaves your machine" },
  { value: 2, suffix: "", label: "Platforms: Windows + Linux" },
  { value: 0, suffix: "$", label: "Cost — free & open source" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {suffix === "$" && suffix}
      <motion.span>{rounded}</motion.span>
      {suffix !== "$" && suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-glow font-mono text-4xl font-bold text-primary sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}