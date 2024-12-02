import Link from "next/link";
import { ChevronDown, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

interface CollapseMenuButtonProps {
  icon: LucideIcon;
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
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180"
        asChild
      >
        <Button className="w-full h-auto py-5 px-6 justify-start hover:text-primary-2 hover:bg-transparent">
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center gap-2">
              <span>
                <Icon size={16} />
              </span>
              <p className={cn("max-w-[150px] truncate")}>{label}</p>
            </div>
            <div className={cn("whitespace-nowrap")}>
              <ChevronDown
                size={24}
                className="transition-transform duration-200"
              />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label }, index) => (
          <Button
            key={index}
            className="w-full justify-start h-10 mb-[11px] text-sm pl-14 py-0 hover:text-primary-2 hover:bg-transparent"
            asChild
          >
            <Link href={href}>
              <p className={cn("max-w-[170px]")}>{label}</p>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
