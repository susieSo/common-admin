import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm leading-normal font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-secondary-700 text-white shadow hover:bg-secondary-900",
        gradient: "gradient-grad text-white shadow-sm hover:gradient-grad-dark",
        secondary:
          "bg-secondary-400 text-white shadow-sm hover:bg-secondary-600",
        tertiary:
          "bg-secondary-200 text-secondary-700 shadow-sm hover:bg-secondary-400",
        outline:
          "border border-secondary-300 bg-transparent text-secondary-600 shadow-sm hover:border-secondary-400 hover:text-secondary-800",
        disabled: "bg-black-200 text-white shadow-sm",
        disabledOutline:
          "border border-black-200 bg-transparent text-black-400 shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost:
          "hover:bg-accent text-secondary-800 hover:underline hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xl: "h-14 px-5 py-[0.938rem] rounded-[8px] text-base/[normal]",
        lg: "h-12 px-5 py-3 rounded-[6px] text-[0.938rem]",
        md: "h-10 px-3.5 py-2 rounded-[6px] text-sm",
        sm: "h-8 px-3 py-1.5 rounded-[6px] text-[0.813rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
