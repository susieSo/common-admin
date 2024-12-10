"use client";
import { usePathname } from "next/navigation";
import { useMenuLabel } from "@/hooks/use-menuLabel";
import { H1 } from "../Common/Typography";

export function Title() {
  const pathname = usePathname();
  const menuLabel = useMenuLabel(pathname);

  return <H1>{menuLabel.currentLabel}</H1>;
}
