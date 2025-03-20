"use client";

import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { Expense } from "@/components/Table/schema";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";

export const DataTableContainer = ({ data }: { data: Expense[] }) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  return (
    <DataTable
      columns={columns}
      data={data}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
    />
  );
};
