import * as React from "react";

import { cn } from "@/lib/utils";
import { CustomIcon, IconTypes } from "../Common/CustomIcon";
import { Label } from "@/components/ui/label";

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
  iconType?: keyof typeof IconTypes;
  label?: string;
  message?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, iconType, label, message, ...props }, ref) => {
    return (
      <div className="flex justify-center flex-col gap-1.5">
        <div className="relative">
          {label && <Label>{label}</Label>}
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-primary-foreground px-4 py-4 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-black-400 focus-visible:border-primary-cyan focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              error && "border-states-red focus-visible:border-states-red",
              iconType && "px-[46px]",
              className
            )}
            ref={ref}
            {...props}
          />
          {iconType && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <CustomIcon iconType={iconType} size="sm" />
            </div>
          )}
          {iconType && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <CustomIcon iconType={iconType} size="sm" />
            </div>
          )}
        </div>
        <p className={cn("text-xs text-black-500", error && "text-states-red")}>
          {message}
        </p>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
