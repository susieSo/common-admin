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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set("searchKeyword", searchKeyword || "name");
      params.set("searchTerm", searchTerm || "");

      const response = await fetch(`/api/tableData?${params.toString()}`);

      if (!response.ok) {
        throw new Error("검색 결과가 없습니다.");
      }

      const data = await response.json();
      setData(data.tableData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);
      setError("검색 결과가 없습니다.");
    } finally {
      setLoading(false);
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
      <DataTableContainer data={data} loading={loading} error={error} />
    </>
  );
}
