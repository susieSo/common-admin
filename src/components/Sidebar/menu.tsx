import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible } from "@/components/ui/collapsible";
import { CollapseMenuButton } from "./collapse-menu";

export function Menu() {
  const menuList = getMenuList();
  const pathname = usePathname();

  return (
    <SidebarMenu>
      <Collapsible className="group/collapsible">
        {menuList.map(({ href, label, icon: Icon, active, submenus }, index) =>
          !submenus || submenus.length === 0 ? (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                variant={
                  (active === undefined && pathname.startsWith(href)) || active
                    ? "active"
                    : "default"
                }
              >
                <div className="w-full items-center flex justify-between">
                  <Link href={href} className="flex items-center gap-2">
                    <span>{Icon}</span>
                    <p className={cn("max-w-[150px] truncate")}>{label}</p>
                  </Link>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            <SidebarMenuItem key={index}>
              <CollapseMenuButton
                icon={Icon}
                label={label}
                submenus={submenus}
                active={
                  active === undefined ? pathname.startsWith(href) : active
                }
              />
            </SidebarMenuItem>
          )
        )}
      </Collapsible>
    </SidebarMenu>
  );
}
