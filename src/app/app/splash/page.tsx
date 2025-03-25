"use client";

import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import { useSearchParams } from "next/navigation";
import { DataTableContainer } from "./(container)/DataTableContainer";
import { useSplashData } from "@/hooks/use-splash-data";

export default function SplashScreen() {
  const search = useSearchParams();
  const searchKeyword = search ? search.get("searchKeyword") : null;
  const searchTerm = search ? search.get("searchTerm") : null;

  const { data, loading, error, handleSearch } = useSplashData();

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
        handleSearch={handleSearch}
      />
      <DataTableContainer data={data} loading={loading} error={error} />
    </>
  );
}
