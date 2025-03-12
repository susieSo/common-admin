"use client";
import React from "react";
import { BreadCrumb } from "@/components/Layout/breadcrumb";
import { UserNavigation } from "@/components/Layout/user-navigation";
import { useMenuLabel } from "@/hooks/use-menuLabel";
import { usePathname } from "next/navigation";

export function HeaderLayout() {
  const pathname = usePathname();
  const menuLabel = useMenuLabel(pathname);

  return (
    <div className="flex justify-between py-7 px-10">
      <BreadCrumb
        current={menuLabel.currentLabel}
        parent={menuLabel.parentLabel}
      />
      <UserNavigation />
    </div>
  );
}
