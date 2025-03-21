"use client";
import React from "react";
import { BreadCrumb } from "@/components/Layout/breadcrumb";
import { UserNavigation } from "@/components/Layout/user-navigation";
import { useMenuLabel } from "@/hooks/use-menuLabel";
import { usePathname } from "next/navigation";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";

export function HeaderLayout() {
  const pathname = usePathname();
  const menuLabel = useMenuLabel(pathname);
  const { state } = useSidebar();

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-10 h-[var(--header-height)] flex justify-between py-7 px-10 bg-bg-page",
        state === "expanded"
          ? "w-[calc(100%-var(--sidebar-width))]"
          : "w-[calc(100%-var(--sidebar-width-icon))]"
      )}
    >
      <SidebarTrigger />
      <BreadCrumb
        current={menuLabel.currentLabel}
        parent={menuLabel.parentLabel}
      />
      <UserNavigation />
    </div>
  );
}
