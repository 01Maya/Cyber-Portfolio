"use client";

import {
  useEffect,
  useRef,
} from "react";

export function NetworkBg() {
  const ref =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const cx = cv.getContext("2d")!;

    const rm = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W = 0;
    let H = 0;
    let raf = 0;

    let P: {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[] = [];

    const m = {
      x: -999,
      y: -999,
    };

    const rs = () => {
      W = cv.width = innerWidth;
      H = cv.height = innerHeight;

      P = Array.from(
        {
          length: Math.min(
            70,
            (W / 18) | 0
          ),
        },
        () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx:
            (Math.random() - 0.5) *
            0.35,
          vy:
            (Math.random() - 0.5) *
            0.35,
        })
      );
    };

    const mv = (e: PointerEvent) => {
      m.x = e.clientX;
      m.y = e.clientY;
    };

    const draw = () => {
      cx.clearRect(0, 0, W, H);

      for (const a of P) {
        // Move particles
        a.x += a.vx;
        a.y += a.vy;

        if (
          a.x < 0 ||
          a.x > W
        ) {
          a.vx *= -1;
        }

        if (
          a.y < 0 ||
          a.y > H
        ) {
          a.vy *= -1;
        }

        // Draw particle
        cx.fillStyle =
          "rgba(14,159,154,.45)";

        cx.beginPath();
        cx.arc(
          a.x,
          a.y,
          2,
          0,
          7
        );
        cx.fill();

        // Connect nearby particles
        for (const b of P) {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const q =
            dx * dx +
            dy * dy;

          if (q < 14000) {
            cx.strokeStyle = `rgba(19,33,59,${
              0.1 *
              (1 - q / 14000)
            })`;

            cx.beginPath();
            cx.moveTo(
              a.x,
              a.y
            );
            cx.lineTo(
              b.x,
              b.y
            );
            cx.stroke();
          }
        }

        // Connect particles to cursor
        const mx = a.x - m.x;
        const my = a.y - m.y;
        const mq =
          mx * mx +
          my * my;

        if (mq < 30000) {
          cx.strokeStyle = `rgba(14,159,154,${
            0.5 *
            (1 - mq / 30000)
          })`;

          cx.beginPath();
          cx.moveTo(
            a.x,
            a.y
          );
          cx.lineTo(
            m.x,
            m.y
          );
          cx.stroke();
        }
      }

      if (!rm) {
        raf =
          requestAnimationFrame(
            draw
          );
      }
    };

    rs();
    draw();

    addEventListener(
      "resize",
      rs
    );

    addEventListener(
      "pointermove",
      mv
    );

    return () => {
      cancelAnimationFrame(raf);

      removeEventListener(
        "resize",
        rs
      );

      removeEventListener(
        "pointermove",
        mv
      );
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="
        pointer-events-none
        fixed inset-0
        z-0
        size-full
      "
    />
  );
}