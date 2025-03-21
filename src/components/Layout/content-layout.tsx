"use client";
import { HeaderLayout } from "./header-layout";

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLayout />
      <div className="px-14 mt-[calc(var(--header-height))] pb-4 m-auto">
        {children}
      </div>
    </>
  );
}
