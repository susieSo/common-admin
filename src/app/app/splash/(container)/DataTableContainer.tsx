"use client";

import { columns } from "../(table)/tableColumns";
import { Expense } from "../(table)/tableSchema";
import { DataTable } from "@/components/Table/data-table";
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
    <>
      {error && <div>{error}</div>}
      {loading ? (
        <div className="mb-4 p-4 text-center text-sm text-black-800 bg-white rounded-xl">
          Loading...
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={data}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      )}
    </>
  );
};
