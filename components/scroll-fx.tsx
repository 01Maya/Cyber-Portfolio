"use client";

import {
  useEffect,
  useRef,
} from "react";

export function ScrollFx() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = () => {
      if (!bar.current) return;

      const progress =
        (scrollY /
          (document.documentElement
            .scrollHeight -
            innerHeight)) *
        100;

      bar.current.style.width =
        progress + "%";
    };

    addEventListener(
      "scroll",
      s,
      { passive: true }
    );

    return () =>
      removeEventListener(
        "scroll",
        s
      );
  }, []);

  return (
    <div
      ref={bar}
      className="
        fixed
        left-0
        top-0
        z-30
        h-[3px]
        w-0
        bg-gradient-to-r
        from-teal
        to-[#7DE3DE]
      "
    />
  );
}