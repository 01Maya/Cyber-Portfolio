"use client";

import { useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed inset-x-0 top-0 z-20
        border-b border-border/80
        bg-background/80
        shadow-[0_8px_30px_rgb(19_33_59_/_0.04)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex h-16
          max-w-[1120px]
          items-center
          justify-between
          px-6
          max-sm:px-[18px]
        "
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 t-h4"
        >
          <span
            className="
              grid size-[26px]
              place-items-center
              rounded-lg
              border border-teal/30
              bg-[#13213b]
              text-teal
              shadow-[0_0_20px_rgba(14,159,154,0.15)]
            "
          >
            <ShieldCheck aria-hidden="true" size={16} strokeWidth={2} />
          </span>

          Aarav Mehta
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-7 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="
                  t-body
                  font-medium
                  text-mute
                  transition-colors
                  hover:text-foreground
                "
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <Button
          asChild
          className="max-md:hidden"
        >
          <a href="#contact">
            <span>Contact securely</span>
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="default"
          size="icon"
          className="md:hidden"
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={open}
          onClick={() =>
            setOpen(!open)
          }
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          grid overflow-hidden
          bg-background/95
          px-6
          transition-all
          duration-500
          md:hidden
          ${
            open
              ? "max-h-[420px] border-b border-border py-3"
              : "max-h-0"
          }
        `}
      >
        {[...nav, {
          href: "#contact",
          label: "Contact",
        }].map((n, i) => (
          <a
            key={n.href}
            href={n.href}
            onClick={() =>
              setOpen(false)
            }
            style={{
              transitionDelay: open
                ? `${i * 60}ms`
                : "0ms",
            }}
            className={`
              border-b
              border-border
              py-3.5
              t-h4
              transition-all
              duration-500
              ${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }
            `}
          >
            {n.label}
          </a>
        ))}
      </div>
    </nav>
  );
}