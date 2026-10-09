import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 before:absolute before:inset-0 before:-translate-x-full before:bg-teal before:transition-transform before:duration-500 before:ease-[cubic-bezier(.7,0,.2,1)] hover:before:translate-x-0 [&>*]:relative",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "bg-transparent text-foreground shadow-[inset_0_0_0_1.5px_var(--primary)] hover:text-white hover:shadow-[inset_0_0_0_1.5px_var(--teal)]",
        light: "bg-white text-primary hover:text-white",
        ghost: "bg-transparent before:hidden hover:bg-secondary",
      },
      size: { default: "h-12 rounded-full px-6 t-body", icon: "size-11 rounded-xl" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };
