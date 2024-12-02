import React from "react";
import { CustomBreadCrumb } from "@/components/BreadCrumb";
import { UserNav } from "@/components/UserNav";

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-bg-page">
      <div className="container">
        <div className="flex justify-between py-7 px-10">
          <CustomBreadCrumb current="스플래시 화면 관리" parent="앱 관리" />
          <UserNav />
        </div>
        <div className="px-14 m-auto">{children}</div>
      </div>
    </div>
  );
}
