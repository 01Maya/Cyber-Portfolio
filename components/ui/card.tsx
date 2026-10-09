import * as React from "react";
import { cn } from "@/lib/utils";
export const Card = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("hover-lift rounded-2xl border border-border bg-card text-card-foreground", className)} {...p} />
);
export const CardHeader = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex flex-col gap-1.5 p-7 pb-3", className)} {...p} />;
export const CardTitle = ({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn("t-h4", className)} {...p} />;
export const CardDescription = ({ className, ...p }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn("t-body text-mute", className)} {...p} />;
export const CardContent = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("p-7 pt-0", className)} {...p} />;
