"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "../Common/Icon";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-80 pt-8 pb-6 px-6", className)}
      classNames={{
        months:
          "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "w-full space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-bold",
        nav: "flex items-center justify-center",
        nav_button: "flex items-center justify-center h-8 w-8 border-none",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse mt-4",
        head_row: "flex items-center mb-2",
        head_cell: "text-black-900 w-10 font-normal text-xs",
        row: "flex w-full mt-1",
        cell: cn(
          "relative p-0 text-center text-sm text-white focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary-cyanDark [&:has([aria-selected].day-outside)]:bg-primary-cyanDark [&:has([aria-selected].day-range-end)]:rounded-full [&:has([aria-selected].day-range-start)]:rounded-full",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-full [&:has(>.day-range-start)]:rounded-full first:[&:has([aria-selected])]:rounded-full last:[&:has([aria-selected])]:rounded-full"
            : "[&:has([aria-selected])]:rounded-full"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-primary-cyanDark hover:text-white hover:rounded-full",
          props.mode === "range" &&
            "[&:has(>.day-range-end)]:rounded-full [&:has(>.day-range-start)]:rounded-full first:[&:has([aria-selected])]:rounded-full last:[&:has([aria-selected])]:rounded-full"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: cn(
          "bg-primary text-white hover:bg-primary-cyanDark hover:text-white focus:bg-primary-cyanDark focus:text-white rounded-full",
          props.mode === "range" &&
            "rounded-none [&:has([aria-selected])]:rounded-full hover:rounded-none hover:bg-transparent"
        ),
        day_today: "bg-secondary-100 text-black-900 rounded-full",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-primary-cyanLight aria-selected:text-primary-cyanDark",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <Icon iconType="chevronLeft" size="s" {...props} />
        ),
        IconRight: ({ ...props }) => (
          <Icon iconType="chevronRight" size="s" {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
