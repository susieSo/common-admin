"use client";

import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table/data-table";
import { columns } from "@/components/Table/columns";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Expense } from "@/components/Table/schema";

export default function SplashScreen() {
  const search = useSearchParams();
  const searchKeyword = search ? search.get("searchKeyword") : null;
  const searchTerm = search ? search.get("searchTerm") : null;

  // const buildSearchQuery = () => {
  //   const params = new URLSearchParams();
  //   if (searchKeyword && searchTerm) {
  //     params.set("searchKeyword", searchKeyword);
  //     params.set("searchTerm", searchTerm);
  //   }
  //   return params.toString();
  // };

  const [data, setData] = useState<Expense[]>([]);
  const [filteredData, setFilteredData] = useState<Expense[]>([]);

  const fetchData = async () => {
    try {
      // const query = buildSearchQuery();
      const response = await fetch(`/api/tableData`);

      if (!response.ok) {
        throw new Error("Failed to fetch table data");
      }

      const data = await response.json();
      setData(data.tableData);
      filterData(data.tableData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);
    }
  };

  const filterData = (data: Expense[]) => {
    if (!searchKeyword || !searchTerm) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((item) => {
      const term = searchTerm.toLowerCase();
      const value = String(item[searchKeyword as keyof Expense]).toLowerCase();
      return value.includes(term);
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData(data);
  }, [searchKeyword, searchTerm]);

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
      {filteredData.length > 0 ? (
        <DataTable columns={columns} data={filteredData} />
      ) : (
        <div className="w-full h-full p-6 flex justify-center items-center bg-white rounded-xl">
          <p className="text-sm text-gray-500">검색 결과가 없습니다.</p>
        </div>
      )}
    </>
  );
}
