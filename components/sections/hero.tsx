"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

const HEADLINE_PREFIX = "I find the doors you";
const HEADLINE_GLITCH = "forgot to lock.";
const CH = "ABCDEF0123456789#$%&@!?*+=<>";

function Counter({ n }: { n: number }) {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();

        const t0 = performance.now();

        const f = (t: number) => {
          const p = Math.min(1, (t - t0) / 1800);

          setV(
            Math.round(
              n * (1 - Math.pow(1 - p, 4))
            )
          );

          if (p < 1) {
            requestAnimationFrame(f);
          }
        };

        requestAnimationFrame(f);
      },
      { threshold: 0.6 }
    );

    ref.current && io.observe(ref.current);

    return () => io.disconnect();
  }, [n]);

  return (
    <b ref={ref} className="block t-metric">
      {v}
      {n > 50 && v === n ? "+" : ""}
    </b>
  );
}

function GlitchHeadline() {
  const [txt, setTxt] = useState(HEADLINE_GLITCH);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTxt(HEADLINE_GLITCH);
      return;
    }

    let raf = 0;

    const id = window.setTimeout(() => {
      const t0 = performance.now();

      const f = (t: number) => {
        const p = Math.min(1, (t - t0) / 1700);
        const revealCount = Math.max(
          0,
          Math.round(p * HEADLINE_GLITCH.length)
        );

        const next = [...HEADLINE_GLITCH]
          .map((char, i) => {
            if (char === " ") return char;
            if (i < revealCount) return char;

            const pulse =
              Math.floor((t / 80) + i * 1.35) % CH.length;

            return CH[pulse] ?? char;
          })
          .join("");

        setTxt((current) =>
          current === next ? current : next
        );

        if (p < 1) {
          raf = requestAnimationFrame(f);
        } else {
          setTxt(HEADLINE_GLITCH);
        }
      };

      raf = requestAnimationFrame(f);
    }, 250);

    return () => {
      clearTimeout(id);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span className="inline-block min-h-[1.2em] whitespace-pre-wrap">
      {txt}
    </span>
  );
}

export function Hero() {
  return (
    <header className="grid min-h-screen items-center pb-[70px] pt-[120px] max-md:pt-[100px]">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-6 max-sm:px-[18px] md:grid-cols-[1.25fr_.75fr]">
        <div>
          <div className="animate-breathe inline-flex items-center gap-2.5 rounded-full border border-teal/25 bg-card/70 px-4 py-2 t-small font-medium text-mute shadow-sm">
            <b className="size-2 animate-pulse rounded-full bg-teal" />
            Available for security engagements
          </div>


<h1
  aria-label={`${HEADLINE_PREFIX} ${HEADLINE_GLITCH}`}
  className="my-6 t-display"
>
  <span className="block whitespace-nowrap">
    I find the doors you
  </span>
  <GlitchHeadline />
</h1>


          <p className="max-w-[520px] t-lead text-mute">
            Aarav Mehta is a penetration tester and security engineer. He breaks into web apps, cloud accounts and networks so your attackers can't.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5 max-sm:[&>*]:flex-1">
            <Button asChild>
              <a href="#cases">
                <span>Read the case files</span>
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href="#contact">
                <span>Start a project</span>
              </a>
            </Button>
          </div>

          <div className="mt-11 flex flex-wrap gap-8 max-sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.l}
                className="border-l-[3px] border-teal pl-3.5"
              >
                <Counter n={s.n} />
                <span className="t-small text-mute">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="relative mx-auto aspect-square w-full max-w-[400px] transition-transform duration-200 ease-out max-md:max-w-[300px]"
        >
          <svg
            viewBox="0 0 400 400"
            className="size-full overflow-visible"
          >
            <defs>
              <clipPath id="c">
                <circle cx="200" cy="200" r="118" />
              </clipPath>
            </defs>

            <circle
              cx="200"
              cy="200"
              r="190"
              fill="#fff"
              stroke="#DCE4EC"
            />

            <g className="origin-[200px_200px] animate-[spin_40s_linear_infinite]">
              <circle
                cx="200"
                cy="200"
                r="170"
                fill="none"
                stroke="#DCE4EC"
                strokeWidth="2"
                strokeDasharray="2 10"
              />

              <circle
                cx="200"
                cy="30"
                r="7"
                fill="#0E9F9A"
              />
            </g>

            <g className="origin-[200px_200px] animate-[spin_28s_linear_infinite]">
              <circle
                cx="200"
                cy="200"
                r="145"
                fill="none"
                stroke="#13213B"
                strokeWidth="2"
                strokeDasharray="40 14 4 14"
              />
            </g>

            <g className="origin-[200px_200px] animate-[spin_18s_linear_infinite_reverse]">
              <circle
                cx="200"
                cy="200"
                r="122"
                fill="none"
                stroke="#0E9F9A"
                strokeWidth="3"
                strokeDasharray="90 30"
              />

              <circle
                cx="322"
                cy="200"
                r="6"
                fill="#E5484D"
              />
            </g>

            <circle
              cx="200"
              cy="200"
              r="104"
              fill="#13213B"
            />

            <g clipPath="url(#c)">
              <g className="animate-scan">
                <rect
                  x="80"
                  y="196"
                  width="240"
                  height="8"
                  fill="#0E9F9A"
                  opacity=".5"
                />

                <rect
                  x="80"
                  y="200"
                  width="240"
                  height="2"
                  fill="#7DE3DE"
                />
              </g>
            </g>

            <rect
              x="172"
              y="196"
              width="56"
              height="44"
              rx="9"
              fill="#fff"
            />

            <path
              d="M182 196v-14a18 18 0 0 1 36 0v14"
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
            />

            <circle
              cx="200"
              cy="217"
              r="6"
              fill="#0E9F9A"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}