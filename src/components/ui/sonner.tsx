"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:py-5 group-[.toaster]:px-6 group-[.toaster]:flex group-[.toaster]:items-center group-[.toaster]:gap-4  group-[.toaster]:text-base group-[.toaster]:border-none group-[.toaster]:shadow-lg group-[.toaster]:rounded-full group-[.toaster]:box-border group-[.toaster]:bg-black-900 group-[.toaster]:text-white",
          success: "group-[.toaster]:bg-black-900 group-[.toaster]:text-white",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "!bg-transparent group-[.toast]:text-primary-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
