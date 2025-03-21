"use client";

import { DataTableContainer } from "@/app/app/splash/(container)/DataTableContainer";

import { SearchBar } from "@/components/SearchBar";
import { Expense } from "@/components/Table/schema";
import { useSearchParams } from "next/navigation";

interface SplashContainerProps {
  initialData: {
    data: Expense[];
    searchKeyword: string;
    searchTerm: string;
  };
}

export const SplashContainer = ({ initialData }: SplashContainerProps) => {
  const search = useSearchParams();
  const searchKeyword = initialData.searchKeyword
    ? initialData.searchKeyword
    : search.get("searchKeyword") ?? "name";
  const searchTerm = initialData.searchTerm
    ? initialData.searchTerm
    : search.get("searchTerm") ?? "";

  // const [data, setData] = useState<Expense[]>(initialData.data || []);
  const data = initialData.data || [];

  return (
    <>
      <SearchBar initialKeyword={searchKeyword} initialTerm={searchTerm} />
      {data.length > 0 ? (
        <DataTableContainer data={data} />
      ) : (
        <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
          <p className="text-base text-gray-500">검색 결과가 없습니다.</p>
        </div>
      )}
    </>
  );
};
