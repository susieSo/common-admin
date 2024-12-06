"use client";
import { getMenuList } from "@/lib/menu-list";
import { H1 } from "@/components/Common/Typography";
import { HeaderLayout } from "@/components/Layout/header-layout";

export default function Dashboard() {
  const menuList = getMenuList();
  const currentLabel: string =
    menuList.find((menu) => menu.label === "대시보드")?.label ??
    (() => {
      throw new Error("Label not found");
    })();

  return (
    <div>
      <div className="container">
        <HeaderLayout current={currentLabel} />
        <div className="px-14 m-auto">
          <div className="py-8 flex justify-between items-center">
            <H1>{currentLabel}</H1>
          </div>
        </div>
      </div>
    </div>
  );
}
