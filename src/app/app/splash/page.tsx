"use client";
import { HeaderLayout } from "@/components/Layout/header-layout";
import { CustomIcon } from "@/components/Common/CustomIcon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Title } from "@/components/Layout/title";

export default function SplashScreen() {
  const pathname = usePathname();

  return (
    <>
      <div className="container">
        <HeaderLayout pathname={pathname} />
        <div className="px-14 m-auto">
          <div className="py-8 flex justify-between items-center">
            <Title pathname={pathname} />
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
