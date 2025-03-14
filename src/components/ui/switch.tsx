"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-black-400 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-cyan data-[state=checked]:border-primary-cyanDark data-[state=unchecked]:bg-white",
  {
    variants: {
      size: {
        lg: "h-[1.375rem] w-[2.125rem]",
        sm: "h-[1.125rem] w-[1.625rem]",
      },
      error: {
        true: "border-states-red data-[state=checked]:border-states-red",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: "lg" | "sm";
  error?: boolean;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, error, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      switchVariants({
        size,
        error,
      }),
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-black-400 shadow-lg ring-0 transition-transform data-[state=checked]:bg-white data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0.5",
        size === "sm" && "h-3 w-3 data-[state=checked]:translate-x-3",
        error && "bg-states-red"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
