"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Reveal,
  Section,
  SectionHead,
} from "@/components/reveal";
import { phases } from "@/lib/data";

export function Process() {
  const [cur, setCur] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);

  const progressMax = phases.length - 1;
  const progressWidth = (cur / progressMax) * 80;
  const indicatorLeft = 10 + (cur / progressMax) * 80;

  useEffect(() => {
    return () => {
      if (resumeTimer.current !== null) {
        window.clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (
      !auto ||
      paused ||
      matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const t = window.setInterval(() => {
      setCur(
        (c) => (c + 1) % phases.length
      );
    }, 3200);

    return () => window.clearInterval(t);
  }, [auto, paused]);

  const handleStageSelect = (next: number) => {
    setCur(next);
    setAuto(true);
    setPaused(true);

    if (resumeTimer.current !== null) {
      window.clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimer.current = null;
    }, 1500);
  };

  const p = phases[cur];

  return (
    <Section id="chain">
      <SectionHead
        title="How an engagement unfolds"
        sub="A structured five-step process to identify vulnerabilities, report findings, and validate security fixes."
      />

      <Reveal
        className="
          rounded-xl
          border border-border
          bg-card
          p-9
          max-md:p-7
          max-sm:p-4
          max-sm:py-7
        "
      >
        {/* Process Timeline */}
        <div
          className="relative mb-9 grid grid-cols-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Background Line */}
          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[27px]
              h-[3px]
              rounded
              bg-border
              max-sm:top-[17px]
            "
          />

          {/* Progress Line */}
          <div
            className="
              absolute
              left-[10%]
              top-[27px]
              h-[3px]
              rounded
              bg-teal
              transition-all
              duration-700
              ease-[cubic-bezier(.7,0,.2,1)]
              max-sm:top-[17px]
            "
            style={{
              width: `${progressWidth}%`,
            }}
          />

          {/* Active Indicator */}
          <b
            className="
              absolute
              top-[19px]
              -ml-[9px]
              size-[19px]
              rounded-full
              bg-teal
              shadow-[0_0_0_8px_rgba(14,159,154,.2)]
              transition-all
              duration-700
              ease-[cubic-bezier(.7,0,.2,1)]
              max-sm:top-[9px]
            "
            style={{
              left: `${indicatorLeft}%`,
            }}
          />

          {/* Process Stages */}
          {phases.map((ph, i) => (
            <button
              key={ph.s}
              onClick={() => handleStageSelect(i)}
              className={`
                relative z-[1]
                grid
                justify-items-center
                gap-2.5
                t-small
                font-semibold
                transition-colors
                ${
                  i === cur
                    ? "text-foreground"
                    : "text-mute"
                }
              `}
            >
              <span
                className={`
                  grid
                  size-14
                  place-items-center
                  rounded-full
                  border-2
                  font-display
                  t-body
                  font-bold
                  transition-all
                  duration-500
                  max-sm:size-9
                  max-sm:text-sm
                  ${
                    i === cur
                      ? "border-primary bg-primary text-white"
                      : i < cur
                        ? "border-teal bg-teal text-white"
                        : "border-border bg-background"
                  }
                `}
              >
                {i + 1}
              </span>

              {ph.s}
            </button>
          ))}
        </div>

        {/* Active Stage Content */}
        <div
          key={cur}
          className="
            min-h-24
            max-w-[640px]
            animate-fade
          "
        >
          <h3 className="mb-2 t-h3">
            {p.t}
          </h3>

          <p className="text-mute">
            {p.d}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}