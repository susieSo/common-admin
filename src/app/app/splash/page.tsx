"use client";
import { HeaderLayout } from "@/components/Layout/header-layout";
import { CustomIcon } from "@/components/Common/CustomIcon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table";
import { H1 } from "@/components/Common/Typography";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useMenuLabel } from "@/hooks/use-menuLabel";

export default function SplashScreen() {
  const pathname = usePathname();
  const menuLabel = useMenuLabel(pathname);

  return (
    <>
      <div className="container">
        <HeaderLayout
          current={menuLabel.currentLabel}
          parent={menuLabel.parentLabel}
        />
        <div className="px-14 m-auto">
          <div className="py-8 flex justify-between items-center">
            <H1>{menuLabel.currentLabel}</H1>
            <Button size="md" variant="gradient">
              신규등록 <CustomIcon iconType="plus" size="sm" fill="white" />
            </Button>
          </div>
          <SearchBar />
          <DataTable />
        </div>
      </div>
    </>
  );
}
