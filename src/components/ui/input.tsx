import * as React from "react";

import { cn } from "@/lib/utils";
import { CustomIcon, IconTypes } from "../Common/CustomIcon";
import { Label } from "@/components/ui/label";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-input-background shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-black-400 focus-visible:border-primary-cyan focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      size: {
        md: "px-3 py-2 text-sm",
        xl: "px-4 py-[15px] text-base",
      },
      error: {
        true: "border-states-red focus-visible:border-states-red",
      },
      hasIcon: {
        true: "px-[46px]",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  }
);

interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  error?: boolean;
  leftIcon?: keyof typeof IconTypes;
  rightIcon?: keyof typeof IconTypes;
  label?: string;
  message?: string;
  size?: "xl" | "md";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      leftIcon,
      rightIcon,
      label,
      message,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex justify-center flex-col gap-1.5">
        {label && <Label>{label}</Label>}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <CustomIcon iconType={leftIcon} size="sm" />
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({
                size,
                error,
                hasIcon: !!(leftIcon || rightIcon),
              }),
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <CustomIcon iconType={rightIcon} size="sm" />
            </div>
          )}
        </div>
        {message && (
          <p
            className={cn("text-xs text-black-500", error && "text-states-red")}
          >
            {message}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
