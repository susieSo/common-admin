"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const checkboxVariants = cva(
  "peer h-5 w-5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:border-black-200 disabled:bg-black-100",
  {
    variants: {
      size: {
        sm: "shadow border border-secondary-200 data-[state=checked]:border-primary-cyanDark data-[state=checked]:bg-primary-cyan data-[state=checked]:text-white",
        xs: "shadow-none border-none data-[state=unchecked]:text-black-100 data-[state=checked]:text-primary-cyan",
      },
      error: {
        true: "border-states-red data-[state=checked]:border-states-red data-[state=checked]:bg-states-red",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  error?: boolean;
  size?: "sm" | "xs";
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, error, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      checkboxVariants({
        size,
        error,
      }),
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
