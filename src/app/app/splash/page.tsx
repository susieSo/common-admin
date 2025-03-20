"use client";

import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table/data-table";
import { columns } from "@/components/Table/columns";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SplashScreen() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/tableData?${encodedSearchQuery}`);
      const data = await response.json();
      setData(data.tableData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <SearchBar />
      <DataTable columns={columns} data={data} />
    </>
  );
}
