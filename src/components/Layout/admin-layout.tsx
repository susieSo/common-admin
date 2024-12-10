"use client";
import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomSidebar } from "../Sidebar";
import { ContentLayout } from "./content-layout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="relative w-full h-screen bg-bg-page">
        <SidebarTrigger />
        <ContentLayout>{children}</ContentLayout>
      </main>
    </SidebarProvider>
  );
}
