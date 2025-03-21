"use client";

import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Expense } from "@/components/Table/schema";
import { DataTableContainer } from "./(container)/DataTableContainer";

export default function SplashScreen() {
  const search = useSearchParams();
  const searchKeyword = search ? search.get("searchKeyword") : null;
  const searchTerm = search ? search.get("searchTerm") : null;

  const [data, setData] = useState<Expense[]>([]);

  const fetchData = async () => {
    try {
      const params = new URLSearchParams();
      params.set("searchKeyword", searchKeyword || "name");
      params.set("searchTerm", searchTerm || "");

      const response = await fetch(`/api/tableData?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch table data");
      }

      const data = await response.json();
      setData(data.tableData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <SearchBar
        initialKeyword={searchKeyword || "name"}
        initialTerm={searchTerm || ""}
      />
      {data.length > 0 ? (
        <DataTableContainer data={data} />
      ) : (
        <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
          <p className="text-base text-gray-500">검색 결과가 없습니다.</p>
        </div>
      )}
    </>
  );
}
