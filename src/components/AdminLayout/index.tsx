"use client";

import React from "react";
import { useStore } from "zustand";

import { useSidebar } from "@/hooks/use-sidebar";
import { CustomSidebar } from "../Sidebar";

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
      <main className="ml-72">{children}</main>
    </>
  );
}
