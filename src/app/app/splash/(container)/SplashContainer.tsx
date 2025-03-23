"use client";

import { DataTableContainer } from "@/app/app/splash/(container)/DataTableContainer";
import { SearchBar } from "@/components/SearchBar";
import { Expense } from "@/components/Table/schema";
import { useTableData } from "@/hooks/useTableData";

interface SplashContainerProps {
  initialData: {
    data: Expense[];
    searchKeyword: string;
    searchTerm: string;
  };
}

export const SplashContainer = ({ initialData }: SplashContainerProps) => {
  const initialSearchKeyword = initialData.searchKeyword;
  const initialSearchTerm = initialData.searchTerm;

  const { data, isLoading, error, handleSearchReplace } = useTableData({
    initialData: initialData.data,
    initialSearchKeyword: initialSearchKeyword,
    initialSearchTerm: initialSearchTerm,
  });

  if (error) {
    return (
      <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
        <p className="text-base text-red-500">
          에러가 발생했습니다: {error.message}
        </p>
      </div>
    );
  }

  return (
    <>
      <SearchBar
        initialKeyword={initialSearchKeyword}
        initialTerm={initialSearchTerm}
        onSearch={handleSearchReplace}
      />
      {isLoading ? (
        <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
          <p className="text-base text-gray-500">로딩 중...</p>
        </div>
      ) : data.length > 0 ? (
        <DataTableContainer data={data} />
      ) : (
        <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
          <p className="text-base text-gray-500">검색 결과가 없습니다.</p>
        </div>
      )}
    </>
  );
};
