import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import * as Icons from "../../../../public/icons";

const IconSize = {
  xs: 12,
  s: 16,
  sm: 20,
  m: 24,
  l: 32,
} as const;

export const IconTypes = {
  dashboard: Icons.icDashboard,
  app: Icons.icApp,
  content: Icons.icContent,
  money: Icons.icMoney,
  member: Icons.icMember,
  event: Icons.icEvent,
  customerCenter: Icons.icCustomerCenter,
  graphBar: Icons.icGraphBar,
  personStroke: Icons.icPersonStroke,
  personFill: Icons.icPersonFill,
  setting: Icons.icSetting,
  logout: Icons.icLogout,
  trash: Icons.icTrash,
  edit: Icons.icEdit,
  home: Icons.icHome,
  plus: Icons.icPlus,
  minus: Icons.icMinus,
  search: Icons.icSearch,
  refresh: Icons.icRefresh,
  noImg: Icons.icNoImg,
  download: Icons.icDownload,
  upload: Icons.icUpload,
  calendar: Icons.icCalendar,
  time: Icons.icTime,
  closeCircle: Icons.icCloseCircle,
  close: Icons.icClose,
  check: Icons.icCheck,
  chevronUp: Icons.icChevronUp,
  chevronDown: Icons.icChevronDown,
  chevronLeft: Icons.icChevronLeft,
  chevronRight: Icons.icChevronRight,
  arrowFillDown: Icons.icArrowFillDown,
  arrowFillUp: Icons.icArrowFillUp,
  arrowFirst: Icons.icArrowFirst,
  arrowLast: Icons.icArrowLast,
} as const;

type IconTypes = keyof typeof IconTypes;

export type IconType = ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface IconProps extends React.SVGAttributes<SVGElement> {
  iconType: IconTypes;
  fill?: string;
  stroke?: string;
  size: keyof typeof IconSize;
  className?: string;
}

export const Icon = ({ iconType, size, ...props }: IconProps) => {
  const Icon = IconTypes[iconType];
  const iconSize = IconSize[size];

  if (!Icon) {
    console.warn(`Invalid icon type: ${iconType}`);
    return null;
  }

  return <Icon width={iconSize} height={iconSize} fill="#171b1e" {...props} />;
};
