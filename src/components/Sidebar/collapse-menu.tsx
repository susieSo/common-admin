"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { CustomIcon } from "../Common/CustomIcon";
import { usePathname } from "next/navigation";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

interface CollapseMenuButtonProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  submenus: Submenu[];
  isOpen?: boolean | undefined;
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  submenus,
}: CollapseMenuButtonProps) {
  const pathname = usePathname();
  const isSubmenuActive = submenus.some((submenu) =>
    submenu.active === undefined ? submenu.href === pathname : submenu.active
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);
  return (
    <Collapsible
      className="w-full"
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
    >
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180"
        asChild
      >
        <SidebarMenuButton variant={isSubmenuActive ? "active" : "default"}>
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center gap-2">
              <span>{Icon}</span>
              <p className={cn("truncate")}>{label}</p>
            </div>
            <div className={cn("whitespace-nowrap")}>
              <CustomIcon
                iconType="chevronUp"
                size="sm"
                className="transition-transform duration-200"
              />
            </div>
          </div>
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "mb-3.5 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
        )}
      >
        {submenus.map(({ href, label, active }, index) => (
          <SidebarMenuSubButton
            key={index}
            variant={
              (active === undefined && pathname === href) || active
                ? "active"
                : "default"
            }
            asChild
          >
            <Link href={href}>
              <p className={cn("truncate")}>{label}</p>
            </Link>
          </SidebarMenuSubButton>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
