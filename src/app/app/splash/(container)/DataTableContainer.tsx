"use client";

import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { Expense } from "@/components/Table/schema";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";

interface DataTableContainerProps {
  data: Expense[];
  loading: boolean;
  error: string | null;
}

export const DataTableContainer = ({
  data,
  loading,
  error,
}: DataTableContainerProps) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  return (
    <DataTable
      columns={columns}
      data={data}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      loading={loading}
      error={error}
    />
  );
};
