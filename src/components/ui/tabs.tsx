"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  size?: "box" | "line";
}

const TabsContext = React.createContext<"box" | "line">("box");

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ size = "box", ...props }, ref) => (
  <TabsContext.Provider value={size}>
    <TabsPrimitive.Root ref={ref} {...props} />
  </TabsContext.Provider>
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const tabsListVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      box: "gap-1",
      line: "gap-5",
    },
  },
  defaultVariants: {
    size: "box",
  },
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    size?: "box" | "line";
  }
>(({ className, size, ...props }, ref) => {
  const tabsSize = React.useContext(TabsContext);
  const finalSize = size || tabsSize;

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants({ size: finalSize }), className)}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariants = cva(
  "inline-flex gap-1 items-center justify-center text-black-300 whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border",
  {
    variants: {
      size: {
        box: "py-2.5 px-5 text-xl font-extrabold data-[state=active]:rounded-full data-[state=active]:bg-primary-cyan data-[state=active]:text-white",
        line: "p-0 text-lg font-bold rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black-900 data-[state=active]:text-black-900",
      },
    },
    defaultVariants: {
      size: "box",
    },
  }
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    size?: "box" | "line";
    data?: number;
  }
>(({ className, size, ...props }, ref) => {
  const tabsSize = React.useContext(TabsContext);
  const finalSize = size || tabsSize;

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ size: finalSize }), className)}
      {...props}
    >
      {props.children}
      {props.data && <span>{props.data}</span>}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
