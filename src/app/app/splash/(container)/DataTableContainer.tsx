"use client";

import { SearchBar } from "@/components/SearchBar";
import { columns } from "../(table)/tableColumns";
import { DataTable } from "@/components/Table/data-table";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";
import { useTableData } from "@/hooks/use-table-data";
import { SplashScreenProps } from "../page";

export const DataTableContainer = (props: SplashScreenProps) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const { data, loading, error, handleSearch } = useTableData({
    initialData: props.data,
    initialSearchKeyword: props.searchKeyword,
    initialSearchTerm: props.searchTerm,
  });

  if (error) {
    return (
      <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
        <p className="text-base text-state-red">
          에러가 발생했습니다: {error.message}
        </p>
      </div>
    );
  }
  return (
    <>
      <SearchBar
        initialKeyword={props.searchKeyword}
        initialTerm={props.searchTerm}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="mb-4 p-6 text-center text-sm text-black-800 bg-white rounded-xl">
          Loading...
        </div>
      ) : data.length > 0 ? (
        <DataTable
          columns={columns}
          data={data}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      ) : (
        <div className="mb-4 p-6 text-center text-sm text-black-800 bg-white rounded-xl">
          검색 결과가 없습니다.
        </div>
      )}
    </>
  );
};
