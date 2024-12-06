"use client";

import React from "react";
import { useStore } from "zustand";

import { useSidebar } from "@/hooks/use-sidebar";
import { CustomSidebar } from "../Sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;

  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
