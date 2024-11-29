import Link from "next/link";

import { CollapseMenuButton } from "./collapse-menu";
import { getMenuList } from "@/lib/menu-list";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const menuList = getMenuList();

  return (
    <SidebarMenu className="text-white">
      <Collapsible className="group/collapsible">
        {menuList.map(({ href, label, icon: Icon, submenus }, index) =>
          !submenus || submenus.length === 0 ? (
            <CollapsibleTrigger asChild key={index}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={href}>
                    <Icon size={24} />
                    <span>{label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </CollapsibleTrigger>
          ) : (
            <SidebarMenuItem key={index}>
              <CollapseMenuButton
                icon={Icon}
                label={label}
                submenus={submenus}
                isOpen={isOpen}
              />
            </SidebarMenuItem>
          )
        )}
      </Collapsible>
    </SidebarMenu>
  );
}
