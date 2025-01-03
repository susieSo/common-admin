import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import * as Icons from "../../../../public/icons";

const IconSize = {
  s: 16,
  sm: 20,
  m: 24,
  l: 32,
} as const;

const IconTypes = {
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
  ChevronDown: Icons.icChevronDown,
} as const;

type IconType = keyof typeof IconTypes;

export type CustomIconType = ForwardRefExoticComponent<
  Omit<CustomIconProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface CustomIconProps extends React.SVGAttributes<SVGElement> {
  iconType: IconType;
  fill?: string;
  stroke?: string;
  size: keyof typeof IconSize;
  className?: string;
}

export const CustomIcon = ({ iconType, size, ...props }: CustomIconProps) => {
  const Icon = IconTypes[iconType];
  const iconSize = IconSize[size];

  if (!Icon) {
    console.warn(`Invalid icon type: ${iconType}`);
    return null;
  }

  return <Icon width={iconSize} height={iconSize} {...props} />;
};
