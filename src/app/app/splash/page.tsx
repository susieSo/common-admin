"use client";
import { getMenuList } from "@/lib/menu-list";
import { HeaderLayout } from "@/components/Layout/header-layout";
import { CustomIcon } from "@/components/Common/CustomIcon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table";
import { H1 } from "@/components/Common/Typography";
import { Button } from "@/components/ui/button";

export default function SplashScreen() {
  const menuList = getMenuList();

  const currentMenu = menuList.find((menu) =>
    menu.submenus?.some((submenu) => submenu.label === "스플래시 화면 관리")
  );
  const currentLabel: string =
    currentMenu?.submenus?.find(
      (submenu) => submenu.label === "스플래시 화면 관리"
    )?.label ??
    (() => {
      throw new Error("Label not found");
    })();

  const parentLabel = currentMenu?.label;

  return (
    <div>
      <div className="container">
        <HeaderLayout current={currentLabel} parent={parentLabel} />
        <div className="px-14 m-auto">
          <div className="py-8 flex justify-between items-center">
            <H1>{currentLabel}</H1>
            <Button size="md" variant="gradient">
              신규등록 <CustomIcon iconType="plus" size="sm" fill="white" />
            </Button>
          </div>
          <SearchBar />
          <DataTable />
        </div>
      </div>
    </div>
  );
}
