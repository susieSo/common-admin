import Link from "next/link";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Collapsible } from "@/components/ui/collapsible";
import { CollapseMenuButton } from "./collapse-menu";

export function Menu() {
  const menuList = getMenuList();

  return (
    <SidebarMenu className="text-white">
      <Collapsible className="group/collapsible">
        {menuList.map(({ href, label, icon: Icon, submenus }, index) =>
          !submenus || submenus.length === 0 ? (
            <SidebarMenuItem key={index}>
              <Button className="w-full h-auto py-5 px-6 justify-start hover:text-primary-2 hover:bg-transparent">
                <div className="w-full items-center flex justify-between">
                  <Link href={href} className="flex items-center gap-2">
                    <span>
                      <Icon size={16} />
                    </span>
                    <p className={cn("max-w-[150px] truncate")}>{label}</p>
                  </Link>
                </div>
              </Button>
            </SidebarMenuItem>
          ) : (
            <SidebarMenuItem key={index}>
              <CollapseMenuButton
                icon={Icon}
                label={label}
                submenus={submenus}
              />
            </SidebarMenuItem>
          )
        )}
      </Collapsible>
    </SidebarMenu>
  );
}
