import React from "react";
import { CustomBreadCrumb } from "@/components/Layout/breadcrumb";
import { UserNavigation } from "@/components/Layout/user-navigation";
import { useMenuLabel } from "@/hooks/use-menuLabel";

type HeadrLayoutProps = {
  pathname: string;
};

export function HeaderLayout({ pathname }: HeadrLayoutProps) {
  const menuLabel = useMenuLabel(pathname);

  return (
    <div className="flex justify-between py-7 px-10">
      <CustomBreadCrumb
        current={menuLabel.currentLabel}
        parent={menuLabel.parentLabel}
      />
      <UserNavigation />
    </div>
  );
}
