"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Reveal,
  Section,
  SectionHead,
} from "@/components/reveal";
import { Tilt } from "./services";
import { cases } from "@/lib/data";

function Redact({
  on,
  children,
  delay = 0,
}: {
  on: boolean;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span
      style={{
        ["--d" as string]: `${delay}s`,
      }}
      className={`
        relative inline-block px-0.5

        after:absolute
        after:inset-x-[-2px]
        after:inset-y-0.5
        after:rounded
        after:bg-foreground

        after:transition-transform
        after:delay-[var(--d)]
        after:duration-700
        after:ease-[cubic-bezier(.7,0,.2,1)]
        after:content-['']

        ${
          on
            ? "after:origin-right after:scale-x-0"
            : "after:origin-left after:scale-x-100"
        }
      `}
    >
      {children}
    </span>
  );
}

export function Cases() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="cases">
      <SectionHead
        title="Case files from real engagements"
        sub="Client names and exact figures are redacted. Flip the switch to declassify the details."
      >
        <label
          className="
            flex items-center gap-3.5
            rounded-full
            border border-border
            bg-card
            py-2 pl-5 pr-2
            t-body font-semibold
            max-sm:w-full
            max-sm:justify-between
          "
        >
          Declassify

          <Switch
            checked={open}
            onCheckedChange={setOpen}
            aria-label="Declassify case files"
          />
        </label>
      </SectionHead>

      <div className="grid gap-5 md:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal
            key={c.t}
            delay={i * 120}
          >
            <Tilt>
              <Card
                className="
                  h-full
                  transition-colors
                  duration-300
                  hover:border-teal
                "
              >
                <CardHeader className="pt-7">
                  <div>
                    <Badge className={c.tone}>
                      {c.sev}
                    </Badge>
                  </div>

                  <CardTitle className="mt-3">
                    {c.t}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>
                    {c.pre}

                    <Redact
                      on={open}
                      delay={i * 0.1}
                    >
                      {c.client}
                    </Redact>

                    {c.post}
                  </CardDescription>

                  <dl
                    className="
                      mt-5 flex gap-6
                      border-t
                      border-dashed
                      border-border
                      pt-5
                    "
                  >
                    <div>
                      <dt className="t-small text-mute">
                        {c.k1}
                      </dt>

                      <dd className="t-metric">
                        <Redact on={open}>
                          {c.v1}
                        </Redact>
                      </dd>
                    </div>

                    <div>
                      <dt className="t-small text-mute">
                        {c.k2}
                      </dt>

                      <dd className="t-metric">
                        {c.v2}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}