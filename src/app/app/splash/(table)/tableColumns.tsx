"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "./tableSchema";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableRowAction } from "@/components/Table/data-table-row-action";

export const columns: ColumnDef<Expense>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[30rem] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "department",
    cell: ({ row }) => {
      return (
        <div className="max-w-40 flex justify-center items-center">
          <span className="capitalize"> {row.getValue("department")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "authority",
    cell: ({ row }) => {
      return <div className="capitalize">{row.getValue("authority")}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "type",
    cell: ({ row }) => {
      const type = row.getValue("type");
      return (
        <div className="max-w-40 flex justify-center items-center">
          {type === "Income" ? (
            <TrendingUp size={20} className="mr-2 text-green-500" />
          ) : (
            <TrendingDown size={20} className="mr-2 text-red-500" />
          )}
          <span className="capitalize"> {row.getValue("type")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "amount",
    cell: ({ row }) => {
      const type = row.getValue("type");
      return (
        <div className="max-w-40 flex justify-center items-center">
          <span
            className={cn(
              "capitalize",
              type === "income" ? "text-green-500" : "text-red-500"
            )}
          >
            {" "}
            {row.getValue("amount")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formattedDate = date.toLocaleDateString("ko-KR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      return (
        <div className="max-w-32 flex justify-center items-center">
          <span className="capitalize">{formattedDate}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const rowDate = new Date(row.getValue(id));
      const [startDate, endDate] = value;
      return rowDate >= startDate && rowDate <= endDate;
    },
  },
  {
    id: "actions",
    accessorKey: "actions",
    cell: ({ row }) => <DataTableRowAction row={row} />,
  },
];
