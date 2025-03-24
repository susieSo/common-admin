"use client";

import { columns } from "./tableColumns";
import { Expense } from "./tableSchema";
import { DataTable } from "@/components/Table/data-table";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";

interface DataTableContainerProps {
  data: Expense[];
  loading: boolean;
}

export const DataTableContainer = ({
  data,
  loading,
}: DataTableContainerProps) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  return (
    <DataTable
      columns={columns}
      data={data}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      loading={loading}
    />
  );
};
