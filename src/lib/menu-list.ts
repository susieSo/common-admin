import React, { ReactNode } from "react";
import { LayoutGrid, LucideIcon } from "lucide-react";
import { CustomIcon, CustomIconType } from "@/components/CustomIcon";

type Menu = {
  href: string;
  label: string;
  // icon: CustomIconType;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Submenu = {
  href: string;
  label: string;
};

export function getMenuList(): Menu[] {
  return [
    {
      href: "/dashboard",
      label: "대시보드",
      icon: LayoutGrid,
      submenus: [],
    },
    {
      href: "/",
      label: "앱 관리",
      icon: LayoutGrid,
      submenus: [
        {
          href: "/app/splash",
          label: "스플래시 화면 관리",
        },
        {
          href: "/app/login",
          label: "로그인 화면 관리",
        },
        {
          href: "/app/appRunning",
          label: "앱 구동 관리",
        },
      ],
    },
    {
      href: "/",
      label: "콘텐츠 관리",
      icon: LayoutGrid,
      submenus: [],
    },
    {
      href: "/",
      label: "자산 관리",
      icon: LayoutGrid,
      submenus: [],
    },
    {
      href: "/",
      label: "회원 관리",
      icon: LayoutGrid,
      submenus: [],
    },
    {
      href: "/",
      label: "이벤트 관리",
      icon: LayoutGrid,
      submenus: [],
    },
    {
      href: "/",
      label: "고객 지원",
      icon: LayoutGrid,
      submenus: [],
    },
    {
      href: "/",
      label: "통계",
      icon: LayoutGrid,
      submenus: [],
    },
  ];
}
