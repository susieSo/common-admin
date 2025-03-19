"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Menu } from "./menu";

export function MenuSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={19} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Menu />
      </SidebarContent>
    </Sidebar>
  );
}
