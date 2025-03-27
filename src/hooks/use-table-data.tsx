import { Expense } from "@/app/app/splash/(table)/tableSchema";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { TableDataSearchParams } from "@/types/table";

const fetchData = async (params: TableDataSearchParams) => {
  const response = await fetch(
    `/api/tableData?searchKeyword=${params.searchKeyword}&searchTerm=${params.searchTerm}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data.tableData;
};

export const useTableData = ({ initialData }: { initialData: Expense[] }) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get("searchKeyword") ?? "name";
  const searchTerm = searchParams.get("searchTerm") ?? "";

  const handleSearch = useCallback(
    (params: TableDataSearchParams) => {
      const newParams = new URLSearchParams();
      if (params.searchKeyword) {
        newParams.set("searchKeyword", params.searchKeyword);
      }
      if (params.searchTerm) {
        newParams.set("searchTerm", params.searchTerm);
      }
      const newUrl = `${window.location.pathname}${
        newParams.toString() ? `?${newParams.toString()}` : ""
      }`;
      replace(newUrl, { scroll: false });
    },
    [replace]
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["tableData", searchKeyword, searchTerm],
    queryFn: () =>
      fetchData({
        searchKeyword,
        searchTerm,
      }),
    placeholderData: (previousData) => previousData ?? initialData,
    enabled: true,
  });

  return { data: data as Expense[], isLoading, error, handleSearch };
};
