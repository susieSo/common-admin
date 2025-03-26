import { Expense } from "@/app/app/splash/(table)/tableSchema";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export interface TableDataSearchParams {
  searchKeyword: string;
  searchTerm: string;
}

export const useTableData = ({
  initialData,
  initialSearchKeyword,
  initialSearchTerm,
}: {
  initialData: Expense[];
  initialSearchKeyword: string;
  initialSearchTerm: string;
}) => {
  const [data, setData] = useState<Expense[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const searchKeyword = searchParams ? searchParams.get("searchKeyword") : null;
  const searchTerm = searchParams ? searchParams.get("searchTerm") : null;

  const handleSearch = useCallback(
    (data: TableDataSearchParams) => {
      const params = new URLSearchParams();
      if (data.searchKeyword) {
        params.set("searchKeyword", data.searchKeyword);
      }
      if (data.searchTerm) {
        params.set("searchTerm", data.searchTerm);
      }
      const newUrl = `${window.location.pathname}${
        params.toString() ? `?${params.toString()}` : ""
      }`;
      replace(newUrl, { scroll: false });
    },
    [replace]
  );

  const fetchData = async (params: TableDataSearchParams) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `/api/tableData?searchKeyword=${params.searchKeyword}&searchTerm=${params.searchTerm}`
      );
      const data = await response.json();
      setData(data.tableData);
    } catch (error) {
      setError(
        error instanceof Error
          ? error
          : new Error("데이터를 불러오는데 실패했습니다.")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({
      searchKeyword: initialSearchKeyword || "name",
      searchTerm: initialSearchTerm || "",
    });
  }, [searchKeyword, initialSearchKeyword, searchTerm, initialSearchTerm]);

  return { data, loading, error, handleSearch };
};
