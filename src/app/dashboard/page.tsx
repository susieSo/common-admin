"use client";
import { HeaderLayout } from "@/components/Layout/header-layout";
import { usePathname } from "next/navigation";
import { Title } from "@/components/Layout/title";

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <>
      <div className="container">
        <HeaderLayout pathname={pathname} />
        <div className="px-14 m-auto">
          <div className="py-8 flex justify-between items-center">
            <Title pathname={pathname} />
          </div>
        </div>
      </div>
    </>
  );
}
