"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Reveal,
  Section,
  SectionHead,
} from "@/components/reveal";
import {
  certs,
  timeline,
} from "@/lib/data";

export function Experience() {
  const tl = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const f = () => {
      const r =
        tl.current!.getBoundingClientRect();

      setP(
        Math.max(
          0,
          Math.min(
            1,
            (innerHeight * 0.65 - r.top) /
              r.height
          )
        )
      );
    };

    f();

    addEventListener(
      "scroll",
      f,
      { passive: true }
    );

    return () =>
      removeEventListener("scroll", f);
  }, []);

  return (
    <Section id="path">
      <SectionHead title="Experience and credentials" />

      <div
        ref={tl}
        className="
          relative grid gap-6
          pl-[34px]
        "
      >
        {/* Timeline Track */}
        <div
          className="
            absolute
            bottom-1.5 left-[7px]
            top-1.5
            w-0.5
            bg-border
          "
        />

        {/* Timeline Progress */}
        <div
          className="
            absolute
            left-[7px]
            top-1.5
            w-0.5
            bg-teal
            transition-[height]
            duration-200
          "
          style={{
            height: `${p * 100}%`,
          }}
        />

        {/* Timeline Items */}
        {timeline.map((t, i) => (
          <Reveal
            key={t.t}
            delay={i * 80}
          >
            <Card
              className="
                relative grid gap-1.5
                p-6
                md:grid-cols-[130px_1fr]
                md:gap-5
                md:px-7
              "
            >
              <span
                className="
                  absolute
                  -left-[34px]
                  top-[30px]
                  size-4
                  rounded-full
                  border-[3px]
                  border-teal
                  bg-teal
                "
              />

              <time
                className="
                  font-display
                  t-body
                  font-bold
                  text-teal
                "
              >
                {t.when}
              </time>

              <div>
                <h3 className="mb-1.5 t-h4">
                  {t.t}
                </h3>

                <p className="text-mute">
                  {t.d}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Certifications */}
      <Reveal className="mt-9 flex flex-wrap gap-3">
        {certs.map((c) => (
          <Badge
            key={c}
            className="
              border border-border
              bg-transparent
              px-5 py-2.5
              font-medium
              text-foreground
              transition-colors
              duration-300
              hover:bg-teal-soft
            "
          >
            {c}
          </Badge>
        ))}
      </Reveal>
    </Section>
  );
}