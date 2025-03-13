import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-input-background shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-black-400 focus-visible:border-primary-cyan focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      size: {
        xl: "px-4 py-[0.938rem] text-base",
        md: "px-3 py-2 text-sm",
      },
      error: {
        true: "border-states-red focus-visible:border-states-red",
      },
      hasIcon: {
        true: "px-[4.938rem]",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  }
);

interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  error?: boolean;
  size?: "xl" | "md";
  hasIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, size, hasIcon, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({
            size,
            error,
            hasIcon,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
