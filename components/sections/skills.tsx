"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Reveal,
  Section,
} from "@/components/reveal";
import { skills } from "@/lib/data";

const N = skills.length;
const CX = 260;
const CY = 220;
const R = 140;
const VB_W = 520;

const ang = (i: number) =>
  (2 * Math.PI * i) / N;

const pt = (
  i: number,
  r: number
): [number, number] => [
  Math.round(
    (CX + r * Math.sin(ang(i))) * 1000
  ) / 1000,
  Math.round(
    (CY - r * Math.cos(ang(i))) * 1000
  ) / 1000,
];

export function Skills() {
  const [k, setK] = useState(0);
  const [hi, setHi] = useState(-1);

  const user = useRef(false);
  const svg = useRef<SVGSVGElement>(null);

  // SVG text is sized in viewBox units, so it shrinks
  // with the chart. Measure the rendered width so
  // labels stay consistent with the site's type scale.
  const [w, setW] = useState(VB_W);

  useEffect(() => {
    const el = svg.current;

    if (!el) return;

    const ro = new ResizeObserver(([e]) => {
      if (e.contentRect.width > 0) {
        setW(e.contentRect.width);
      }
    });

    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // Convert on-screen pixels to SVG units.
  const fs = (px: number) =>
    (px * VB_W) / w;

  useEffect(() => {
    let raf = 0;
    let iv: ReturnType<typeof setInterval>;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;

        io.disconnect();

        if (
          matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
        ) {
          setK(1);
          setHi(0);
          return;
        }

        const t0 = performance.now();

        const f = (t: number) => {
          const p = Math.min(
            1,
            (t - t0) / 1400
          );

          setK(
            1 - Math.pow(1 - p, 3)
          );

          if (p < 1) {
            raf = requestAnimationFrame(f);
          } else {
            setHi(0);

            iv = setInterval(() => {
              if (!user.current) {
                setHi(
                  (h) => (h + 1) % N
                );
              }
            }, 2400);
          }
        };

        raf = requestAnimationFrame(f);
      },
      { threshold: 0.4 }
    );

    if (svg.current) {
      io.observe(svg.current);
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, []);

  const labelPx = w < 440 ? 12 : 14;
  const lfs = fs(labelPx);
  const gap = lfs * 1.2;

  const pts = skills.map((s, i) =>
    pt(
      i,
      (R * s.level * k) / 100
    )
  );

  const pick = (i: number) => {
    user.current = true;
    setHi(i);
  };

  return (
    <Section id="skills">
      <div className="mb-9 max-w-2xl">
        <h2 className="t-h2">
          Where I go deepest
        </h2>

        <p className="mt-4 t-lead text-mute">
Explore my cybersecurity skills across testing, defense, and threat detection.
        </p>
      </div>

      <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-10">

        {/* Radar Chart */}
        <Reveal
          className="
            w-full self-center
            rounded-xl border border-border
            bg-card p-5
            max-sm:p-2.5
          "
        >
          <svg
            ref={svg}
            viewBox="0 0 520 440"
            role="img"
            aria-label="Skill radar chart"
            className="
              mx-auto block
              w-full max-w-[520px]
              overflow-visible
            "
            onPointerDown={() =>
              (user.current = true)
            }
          >
            {/* Radar grid */}
            {[0.25, 0.5, 0.75, 1].map(
              (f) => (
                <polygon
                  key={f}
                  points={skills
                    .map((_, i) =>
                      pt(i, R * f)
                        .join(",")
                    )
                    .join(" ")}
                  fill={
                    f === 1
                      ? "#F8FBFC"
                      : "none"
                  }
                  stroke="#DCE4EC"
                />
              )
            )}

            {/* Scale labels */}
            <text
              x={CX + 6}
              y={
                CY -
                R * 0.5 +
                fs(12)
              }
              className="fill-mute"
              style={{
                fontSize: fs(12),
              }}
            >
              50
            </text>

            <text
              x={CX + 6}
              y={CY - R + fs(12)}
              className="fill-mute"
              style={{
                fontSize: fs(12),
              }}
            >
              100
            </text>

            {/* Skill axes and labels */}
            {skills.map((s, i) => {
              const [x, y] = pt(i, R);
              const [lx, ly] = pt(
                i,
                R + 22
              );

              const sn = Math.sin(
                ang(i)
              );

              const cs = Math.cos(
                ang(i)
              );

              const anchor =
                sn > 0.3
                  ? "start"
                  : sn < -0.3
                    ? "end"
                    : "middle";

              // Position labels above, below,
              // or beside the radar.
              const y1 =
                cs > 0.5
                  ? ly -
                    gap -
                    lfs * 0.15
                  : cs < -0.5
                    ? ly +
                      lfs * 0.8
                    : ly -
                      gap / 2 +
                      lfs * 0.35;

              return (
                <g key={s.n}>
                  <line
                    x1={CX}
                    y1={CY}
                    x2={x}
                    y2={y}
                    stroke="#DCE4EC"
                  />

                  <text
                    textAnchor={anchor}
                    style={{
                      fontSize: lfs,
                    }}
                    className={`
                      transition-colors
                      duration-300
                      ${
                        hi === i
                          ? "fill-teal font-bold"
                          : "fill-foreground font-semibold"
                      }
                    `}
                  >
                    <tspan
                      x={lx}
                      y={y1}
                    >
                      {s.lines[0]}
                    </tspan>

                    <tspan
                      x={lx}
                      y={y1 + gap}
                    >
                      {s.lines[1]}
                    </tspan>
                  </text>
                </g>
              );
            })}

            {/* Rotating scan */}
            <g className="origin-[260px_220px] animate-[spin_6s_linear_infinite]">
              <path
                d="
                  M260 220
                  L260 80
                  A140 140 0 0 1
                  330 98.8Z
                "
                fill="rgba(14,159,154,.14)"
              />

              <line
                x1="260"
                y1="220"
                x2="260"
                y2="80"
                stroke="#0E9F9A"
                strokeWidth="2"
              />
            </g>

            {/* Skill polygon */}
            <polygon
              points={pts
                .map((p) => p.join(","))
                .join(" ")}
              fill="rgba(14,159,154,.22)"
              stroke="#0E9F9A"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Highlight halo */}
            {hi >= 0 &&
              k > 0.9 && (
                <circle
                  cx={pts[hi][0]}
                  cy={pts[hi][1]}
                  r="14"
                  fill="none"
                  stroke="#0E9F9A"
                  strokeWidth="2"
                  className="
                    origin-center
                    animate-halo
                    [transform-box:fill-box]
                  "
                />
              )}

            {/* Skill points */}
            {pts.map((p, i) => (
              <circle
                key={i}
                cx={p[0]}
                cy={p[1]}
                r={hi === i ? 8 : 5}
                fill={
                  hi === i
                    ? "#0E9F9A"
                    : "#13213B"
                }
                className="
                  transition-all
                  duration-300
                "
              />
            ))}

            {/* Active skill score */}
            {hi >= 0 &&
              k > 0.9 && (
                <text
                  x={pts[hi][0]}
                  y={
                    pts[hi][1] -
                    8 -
                    fs(4)
                  }
                  textAnchor="middle"
                  style={{
                    fontSize: fs(16),
                    strokeWidth: fs(4),
                  }}
                  className="
                    fill-teal
                    font-display
                    font-bold
                    [paint-order:stroke]
                    [stroke:#fff]
                  "
                >
                  {skills[hi].level}
                </text>
              )}
          </svg>
        </Reveal>

        {/* Skills List */}
        <Reveal className="w-full self-center">
          <div className="w-full">
            <ul className="grid gap-2.5">
              {skills.map((s, i) => (
                <li
                  key={s.n}
                  tabIndex={0}
                  onMouseEnter={() =>
                    pick(i)
                  }
                  onFocus={() =>
                    pick(i)
                  }
                  onClick={() =>
                    pick(i)
                  }
                  className={`
                    flex cursor-pointer
                    items-center
                    justify-between
                    gap-4 rounded-xl
                    border bg-card
                    px-5 py-4
                    transition-all
                    duration-300
                    max-sm:px-3.5
                    ${
                      hi === i
                        ? "translate-x-1 border-teal bg-[#F5FCFB] max-sm:translate-x-1"
                        : "border-border"
                    }
                  `}
                >
                  <div>
                    <b className="t-h4">
                      {s.n}
                    </b>

                    <small className="block t-small text-mute">
                      {s.d}
                    </small>
                  </div>

                  <span className="t-metric text-teal">
                    {s.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}