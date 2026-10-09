import * as React from "react";
import { cn } from "@/lib/utils";
export const Label = ({ className, ...p }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn("t-small font-semibold text-mute", className)} {...p} />
);
