"use client";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
export const Switch = ({ className, ...p }: React.ComponentProps<typeof SwitchPrimitive.Root>) => (
  <SwitchPrimitive.Root className={cn("peer inline-flex h-[34px] w-[62px] shrink-0 cursor-pointer items-center rounded-full bg-primary p-1 transition-colors duration-500 data-[state=checked]:bg-teal focus-visible:outline-teal", className)} {...p}>
    <SwitchPrimitive.Thumb className="block size-[26px] rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] data-[state=checked]:translate-x-7" />
  </SwitchPrimitive.Root>
);
