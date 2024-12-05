import React from "react";
import { CustomBreadCrumb } from "@/components/Layout/breadcrumb";
import { UserNavigation } from "@/components/Layout/user-navigation";

interface HeaderLayoutProps {
  current: string;
  parent?: string;
}

export function HeaderLayout({ current, parent }: HeaderLayoutProps) {
  return (
    <div className="flex justify-between py-7 px-10">
      <CustomBreadCrumb current={current} parent={parent} />
      <UserNavigation />
    </div>
  );
}
