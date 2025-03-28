import { Expense } from "@/app/app/splash/(table)/tableSchema";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { TableDataSearchParams } from "@/types/table";

const fetchData = async (params: TableDataSearchParams) => {
  const response = await fetch(
    `/api/tableData?searchKeyword=${params.searchKeyword}&searchTerm=${params.searchTerm}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data.tableData;
};

export const useGetTableData = ({
  initialData,
}: {
  initialData: Expense[];
}) => {
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

export const useDeleteTableData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/tableData?id=${id}`, {
        method: "DELETE",
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("데이터를 삭제하는데 실패했습니다.");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tableData"] });
    },
  });
};

interface UpdateTableDataParams {
  id: number;
  exposure: boolean;
}

export const useUpdateTableData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, exposure }: UpdateTableDataParams) => {
      const response = await fetch(`/api/tableData?id=${id}`, {
        method: "PUT",
        cache: "no-store",
        body: JSON.stringify({ exposure }),
      });
      if (!response.ok) {
        throw new Error("데이터를 업데이트하는데 실패했습니다.");
      }
      return response.json();
    },
    onMutate: async ({ id, exposure }: UpdateTableDataParams) => {
      await queryClient.cancelQueries({ queryKey: ["tableData"] });

      queryClient.setQueryData<Expense[]>(["tableData"], (old) =>
        old
          ? old.map((item) => (item.id === id ? { ...item, exposure } : item))
          : []
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tableData"] });
    },
  });
};
