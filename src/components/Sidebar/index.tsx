import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { useStore } from "zustand";

import { Menu } from "./menu";

import { useSidebar } from "@/hooks/use-sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function CustomSidebar() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { isOpen } = sidebar;

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={19} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Menu isOpen={isOpen} />
      </SidebarContent>
    </Sidebar>
  );
}
