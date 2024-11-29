"use client";

import { CustomSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
  return (
    <div className="p-4 h-screen bg-bg-page">
      <SidebarProvider>
        <CustomSidebar />
      </SidebarProvider>
    </div>
  );
}
