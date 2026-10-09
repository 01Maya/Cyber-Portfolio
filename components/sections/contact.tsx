"use client";

import { useRef, useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Reveal,
  Section,
} from "@/components/reveal";

const CH = "ABCDEF0123456789#$%&@!?*+=<>";

export function Contact() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  const busy = useRef(false);

  const submit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (busy.current) return;

    busy.current = true;

    const form = e.currentTarget;
    const orig = msg;

    let n = 0;

    const iv = setInterval(() => {
      setMsg(
        [...orig]
          .map((c) =>
            c === " "
              ? " "
              : CH[
                  (Math.random() *
                    CH.length) |
                    0
                ]
          )
          .join("")
      );

      setStatus(
        `Encrypting… ${Math.min(
          100,
          n * 8
        )}%`
      );

      n++;

      if (n > 13) {
        clearInterval(iv);

        setStatus(
          "✓ Encrypted and sent (demo). I reply within one working day."
        );

        setMsg("");
        form.reset();
        busy.current = false;
      }
    }, 70);
  };

  return (
    <Section id="contact">
      <Reveal
        className="
          relative grid gap-12
          rounded-xl
          border border-border
          bg-card p-14
          md:grid-cols-2
          max-md:p-[30px_22px]
        "
      >
        {/* Contact Information */}
        <div className="relative">
          <h2 className="t-h2">
            Send me something sensitive
          </h2>

          <p className="mt-4 max-w-md t-lead text-mute">
            Your message is scrambled right in
            your browser as you send it. Tell me
            what you need protected.
          </p>

          <div
            className="
              mt-6 inline-flex
              items-center gap-2.5
              font-semibold text-teal
            "
          >
            <Lock className="size-5" />
            End-to-end encrypted demo
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={submit}
          className="relative grid gap-3.5"
        >
          <Label>
            Your name
            <Input
              required
              placeholder="Jane Doe"
            />
          </Label>

          <Label>
            Work email
            <Input
              required
              type="email"
              placeholder="jane@company.com"
            />
          </Label>

          <Label>
            What should I test?
            <Textarea
              required
              value={msg}
              onChange={(e) =>
                setMsg(e.target.value)
              }
              placeholder="Web app, cloud setup, internal network…"
            />
          </Label>

          <Button
            type="submit"
            variant="default"
            className="justify-self-start"
          >
            <span>Encrypt and send</span>
          </Button>

          <div
            aria-live="polite"
            className="
              min-h-6
              break-all
              font-semibold
              text-teal
            "
          >
            {status}
          </div>
        </form>
      </Reveal>
    </Section>
  );
}