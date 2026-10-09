"use client";

import { useEffect, useState } from "react";
import { Reveal, Section, SectionHead } from "@/components/reveal";
import { quotes } from "@/lib/data";

export function Testimonials() {
  const [q, setQ] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setQ((c) => (c + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, [tick]);

  return (
    <Section id="words">
      <SectionHead title="What clients say" />
      <Reveal>
        <div className="relative min-h-[230px] max-w-[780px] max-sm:min-h-[300px]" aria-live="polite">
          {quotes.map((x, i) => (
            <blockquote key={i} className={`absolute inset-0 transition-all duration-700 ease-out ${i === q ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-10 opacity-0"}`}>
              <p className="font-display text-[clamp(24px,3.6vw,38px)] font-bold leading-tight tracking-tight">{x.q}</p>
              <cite className="mt-5 block font-medium not-italic text-mute">{x.by}</cite>
            </blockquote>
          ))}
        </div>
        <div className="mt-5 flex gap-2.5">
          {quotes.map((_, i) => (<button key={i} aria-label={`Testimonial ${i + 1}`} onClick={() => { setQ(i); setTick((t) => t + 1); }} className={`h-3 rounded-full transition-all duration-500 ${i === q ? "w-[38px] bg-teal" : "w-3 bg-border"}`} />))}
        </div>
      </Reveal>
    </Section>
  );
}
