"use client";

import React from "react";
import { useStore } from "zustand";

import { useSidebar } from "@/hooks/use-sidebar";
import { CustomSidebar } from "../Sidebar";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;

  return (
    <>
      <CustomSidebar />
      <main
        className={cn(
          "transition-[margin-left] ease-in-out duration-300 lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
}
