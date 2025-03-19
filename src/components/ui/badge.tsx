import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

interface BaseBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

const filterBadgeVariants = cva(
  "px-4 py-1 h-7 text-sm inline-flex items-center rounded-full",
  {
    variants: {
      state: {
        on: "bg-primary-cyan text-white",
        off: "bg-white text-secondary-700 border border-secondary-200",
      },
    },
    defaultVariants: {
      state: "off",
    },
  }
);

export interface FilterBadgeProps
  extends BaseBadgeProps,
    VariantProps<typeof filterBadgeVariants> {}

function FilterBadge({ className, isActive, ...props }: FilterBadgeProps) {
  return (
    <div
      className={cn(
        filterBadgeVariants({ state: isActive ? "on" : "off" }),
        className
      )}
      {...props}
    />
  );
}

const answerBadgeVariants = cva(
  "px-3 py-2 h-[1.875rem] text-sm inline-flex items-center border rounded-full",
  {
    variants: {
      state: {
        on: "bg-[#E5FAED] border-[#AEEFC6] text-[#28D366]",
        off: "bg-black-00 border-black-100 text-black-300",
      },
    },
    defaultVariants: {
      state: "off",
    },
  }
);

export interface AnswerBadgeProps
  extends BaseBadgeProps,
    VariantProps<typeof answerBadgeVariants> {}

function AnswerBadge({ className, isActive, ...props }: AnswerBadgeProps) {
  return (
    <div
      className={cn(
        answerBadgeVariants({ state: isActive ? "on" : "off" }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants, FilterBadge, AnswerBadge };
