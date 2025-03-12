import React, { ReactNode } from "react";
import { Icon } from "@/components/Common/Icon";

type Menu = {
  href: string;
  label: string;
  icon: ReactNode;
  submenus?: Submenu[];
  active?: boolean;
};

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

export function getMenuList(): Menu[] {
  return [
    {
      href: "/dashboard",
      label: "대시보드",
      icon: <Icon iconType="dashboard" size="m" fill="white" />,
      submenus: [],
    },
    {
      href: "",
      label: "앱 관리",
      icon: <Icon iconType="app" size="m" fill="white" />,
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
      href: "",
      label: "콘텐츠 관리",
      icon: <Icon iconType="content" size="m" fill="white" />,
      submenus: [
        {
          href: "/content/league",
          label: "리그 관리",
        },
        {
          href: "/content/contest",
          label: "대회 관리",
        },
        {
          href: "/content/player",
          label: "선수 관리",
        },
      ],
    },
    {
      href: "",
      label: "자산 관리",
      icon: <Icon iconType="money" size="m" fill="white" />,
      submenus: [
        {
          href: "/money/digitalgoods",
          label: "디지털굿즈 관리",
        },
        {
          href: "/money/level",
          label: "레벨/등급 관리",
        },
        {
          href: "/money/market",
          label: "마켓 관리",
        },
      ],
    },
    {
      href: "",
      label: "회원 관리",
      icon: <Icon iconType="member" size="m" fill="white" />,
      submenus: [
        {
          href: "/member/member",
          label: "회원 관리",
        },
        {
          href: "/member/TDTP",
          label: "TDTP 지급/차감 관리",
        },
      ],
    },
    {
      href: "",
      label: "이벤트 관리",
      icon: <Icon iconType="event" size="m" fill="white" />,
      submenus: [
        {
          href: "/event/raffle",
          label: "래플 관리",
        },
        {
          href: "/event/recommend",
          label: "친구추천 이벤트 관리",
        },
        {
          href: "/event/referral",
          label: "래퍼럴 관리",
        },
      ],
    },
    {
      href: "",
      label: "고객 지원",
      icon: <Icon iconType="customerCenter" size="m" fill="white" />,
      submenus: [
        {
          href: "/cs/inquiry",
          label: "1:1 문의 관리",
        },
        {
          href: "/cs/notice",
          label: "공지사항 관리",
        },
        {
          href: "/cs/faq",
          label: "FAQ 관리",
        },
      ],
    },
    {
      href: "",
      label: "통계",
      icon: <Icon iconType="graphBar" size="m" fill="white" />,
      submenus: [
        {
          href: "/statistics/content",
          label: "콘텐츠 통계",
        },
        {
          href: "/statistics/member",
          label: "회원 통계",
        },
        {
          href: "/statistics/event",
          label: "이벤트 통계",
        },
      ],
    },
  ];
}
