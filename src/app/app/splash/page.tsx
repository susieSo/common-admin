"use client";

import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table/data-table";
import { columns } from "@/components/Table/columns";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/tableData")
      .then((res) => res.json())
      .then((data) => {
        setData(data.tableData);
      })
      .catch((error) => {
        console.error("Failed to fetch table data:", error);
      });
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
