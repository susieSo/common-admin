import { useState, useEffect, useCallback } from "react";
import { fetchTableData } from "@/services/api/table";
import { Expense } from "@/components/Table/schema";
import { useRouter, useSearchParams } from "next/navigation";

export const useTableData = ({
  initialData,
  initialSearchKeyword,
  initialSearchTerm,
}: {
  initialData: Expense[];
  initialSearchKeyword: string;
  initialSearchTerm: string;
}) => {
  const { replace } = useRouter();
  const search = useSearchParams();
  const searchKeyword = search.get("searchKeyword") ?? "name";
  const searchTerm = search.get("searchTerm") ?? "";

  const [data, setData] = useState<Expense[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateData = useCallback(
    async (searchKeyword: string, searchTerm: string) => {
      try {
        setIsLoading(true);
        setError(null);
        const newData = await fetchTableData(searchKeyword, searchTerm);
        setData(newData);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("데이터를 불러오는데 실패했습니다.")
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (
      searchKeyword === initialSearchKeyword &&
      searchTerm === initialSearchTerm
    ) {
      setData(initialData);
      return;
    }

    updateData(searchKeyword, searchTerm);
  }, [
    searchKeyword,
    searchTerm,
    initialSearchKeyword,
    initialSearchTerm,
    initialData,
    updateData,
  ]);

  const handleSearchReplace = useCallback(
    (keyword: string, term: string) => {
      const params = new URLSearchParams();
      if (keyword) params.set("searchKeyword", keyword);
      if (term) params.set("searchTerm", term);

      const newUrl = `${window.location.pathname}${
        params.toString() ? `?${params.toString()}` : ""
      }`;
      replace(newUrl, { scroll: false });
    },
    [replace]
  );

  const handleSearch = useCallback(
    (keyword: string, term: string) => {
      updateData(keyword, term);
    },
    [updateData]
  );

  return { data, isLoading, error, handleSearch, handleSearchReplace };
};
