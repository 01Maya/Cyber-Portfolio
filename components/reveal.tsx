"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref =
    useRef<HTMLDivElement>(null);

  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-in={on}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "group transition-all duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100",
        on
          ? "translate-y-0 opacity-100"
          : "translate-y-9 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHead({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal
      className="
        mb-12
        flex
        flex-wrap
        items-end
        justify-between
        gap-6
        max-sm:mb-8
      "
    >
      <div>
        <h2
          className="
            max-w-3xl
            t-h2
            after:mt-4
            after:block
            after:h-[3px]
            after:w-0
            after:rounded
            after:bg-teal
            after:transition-[width]
            after:delay-300
            after:duration-1000
            group-data-[in=true]:after:w-[48px]
          "
        >
          {title}
        </h2>

        {sub && (
          <p className="mt-4 max-w-xl t-lead text-mute">
            {sub}
          </p>
        )}
      </div>

      {children}
    </Reveal>
  );
}

export const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`py-[120px] max-md:py-20 ${className}`}
  >
    <div className="mx-auto max-w-[1120px] px-6 max-sm:px-[18px]">
      {children}
    </div>
  </section>
);