"use client";

import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Expense } from "@/components/Table/schema";
import { DataTableContainer } from "./(container)/DataTableContainer";
import { useFetch } from "@/hooks/use-fetch";
import { toast } from "sonner";

export default function SplashScreen() {
  const search = useSearchParams();
  const searchKeyword = search ? search.get("searchKeyword") : null;
  const searchTerm = search ? search.get("searchTerm") : null;

  const [data, setData] = useState<Expense[]>([]);

  const { loading, error, fetchInitialData } = useFetch({
    callback: (data) => setData(data.tableData as Expense[]),
    url:
      searchKeyword && searchTerm
        ? `/api/tableData?searchKeyword=${searchKeyword}&searchTerm=${searchTerm}`
        : "/api/tableData",
  });

  useEffect(() => {
    fetchInitialData();
  }, [search]);

  if (error) {
    toast.error("Failed to fetch table data");
  }

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
      <DataTableContainer data={data} loading={loading} />
    </>
  );
}
