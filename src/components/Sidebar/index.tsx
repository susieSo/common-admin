"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { useStore } from "zustand";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Menu } from "./menu";

export function CustomSidebar() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { getOpenState } = sidebar;

  return (
    <SidebarProvider>
      <Sidebar
        variant="floating"
        className={cn(getOpenState() ? "w-[--sidebar-width]" : "w-0")}
      >
        <SidebarHeader>
          <Link href="/">
            <Image src={logo} alt="logo" width={120} height={19} />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <Menu />
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
