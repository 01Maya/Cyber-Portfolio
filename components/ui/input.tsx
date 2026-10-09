import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = ({ className, ...p }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn("mt-1.5 w-full rounded-2xl border-[1.5px] border-border bg-background px-4 py-3 t-body leading-6 font-medium text-foreground outline-none transition placeholder:text-mute/60 focus:border-teal focus:bg-card", className)} {...p} />
);
