import * as React from "react";
import { cn } from "@/lib/utils";
export const Badge = ({ className, ...p }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("inline-flex items-center rounded-full px-3 py-1 t-small font-semibold", className)} {...p} />
);
