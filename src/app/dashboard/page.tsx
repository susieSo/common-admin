"use client";
import { H1 } from "@/components/Common/Typography";
import { HeaderLayout } from "@/components/Layout/header-layout";
import { usePathname } from "next/navigation";
import { useMenuLabel } from "@/hooks/use-menuLabel";

export default function Dashboard() {
  const pathname = usePathname();
  const menuLabel = useMenuLabel(pathname);

  return (
    <>
      <div className="container">
        <HeaderLayout current={menuLabel.currentLabel} />
        <div className="px-14 m-auto">
          <div className="py-8 flex justify-between items-center">
            <H1>{menuLabel.currentLabel}</H1>
          </div>
        </div>
      </div>
    </>
  );
}
