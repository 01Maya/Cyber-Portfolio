import { ticker } from "@/lib/data";

export function Marquee() {
  return (
    <div
      aria-hidden
      className="
        overflow-hidden
        border-y border-border
        py-4
        [mask-image:linear-gradient(
          90deg,
          transparent,
          #000_10%,
          #000_90%,
          transparent
        )]
      "
    >
      <div
        className="
          flex w-max
          animate-mq
          gap-3.5
          hover:[animation-play-state:paused]
        "
      >
        {[...ticker, ...ticker].map((t, i) => (
          <span
            key={i}
            className={`
              whitespace-nowrap
              px-3.5 py-1
              t-small
              font-medium
              ${
                i % 3 === 2
                  ? "text-teal"
                  : "text-mute"
              }
            `}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}