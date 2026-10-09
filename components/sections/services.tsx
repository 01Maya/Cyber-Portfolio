"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Reveal,
  Section,
  SectionHead,
} from "@/components/reveal";
import { services } from "@/lib/data";

const icons = {
  web: (
    <>
      <rect
        x="6"
        y="9"
        width="42"
        height="32"
        rx="5"
      />

      <path
        className="stroke-teal"
        d="
          M17 22l-5 5 5 5
          M37 22l5 5-5 5
          M30 19l-6 16
        "
      />

      <path d="M18 48h18" />
    </>
  ),

  cloud: (
    <>
      <path d="M14 40a10 10 0 0 1 1-20 13 13 0 0 1 25 3 8.5 8.5 0 0 1-1 17z" />

      <path
        className="stroke-teal"
        d="
          M27 27v10
          M22 32l5-5 5 5
        "
      />
    </>
  ),

  target: (
    <>
      <circle
        cx="27"
        cy="27"
        r="19"
      />

      <circle
        cx="27"
        cy="27"
        r="10"
      />

      <path
        className="stroke-teal"
        d="
          M27 4v12
          M27 38v12
          M4 27h12
          M38 27h12
        "
      />
    </>
  ),

  shield: (
    <>
      <path d="M27 6l18 7v13c0 12-8 19-18 22-10-3-18-10-18-22V13z" />

      <path
        className="stroke-teal"
        d="M19 27l6 6 11-12"
      />
    </>
  ),
} as const;

function Tilt({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {children}
    </div>
  );
}

export { Tilt };

export function Services() {
  return (
    <Section id="services">
      <SectionHead
        title="How I can help"
        sub="Four ways to put an attacker's mindset to work for your team."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal
            key={s.t}
            delay={i * 100}
          >
            <Tilt>
              <Card
                className="
                  group/c relative h-full
                  overflow-hidden
                  transition-[box-shadow,border-color]
                  duration-500
                  after:absolute after:bottom-0
                  after:left-0 after:h-0.5
                  after:w-full
                  after:origin-left
                  after:scale-x-0
                  after:bg-teal
                  after:transition-transform
                  after:duration-500
                  hover:border-teal
                  hover:after:scale-x-100
                "
              >
                <CardHeader className="pt-7">
                  <svg
                    viewBox="0 0 54 54"
                    className="
                      mb-3 size-[54px]
                      fill-none
                      stroke-foreground
                      stroke-[2.4]
                      [stroke-dasharray:140]
                      [stroke-dashoffset:140]
                      [stroke-linecap:round]
                      [stroke-linejoin:round]
                      transition-[stroke-dashoffset]
                      duration-[1200ms]
                      ease-out
                      group-data-[in=true]:[stroke-dashoffset:0]
                    "
                  >
                    {icons[s.icon]}
                  </svg>

                  <CardTitle>
                    {s.t}
                  </CardTitle>
                </CardHeader>

                <div className="px-7 pb-7">
                  <CardDescription>
                    {s.d}
                  </CardDescription>
                </div>
              </Card>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}