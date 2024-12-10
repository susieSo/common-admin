"use client";
import { HeaderLayout } from "./header-layout";

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <HeaderLayout />
      <div className="px-14 m-auto">{children}</div>
    </div>
  );
}
