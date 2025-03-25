import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SplashDataSearchParams {
  searchKeyword: string;
  searchTerm: string;
}

export const useSplashData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchKeyword = searchParams ? searchParams.get("searchKeyword") : null;
  const searchTerm = searchParams ? searchParams.get("searchTerm") : null;

  const handleSearch = (data: SplashDataSearchParams) => {
    const params = new URLSearchParams();
    params.set("searchKeyword", data.searchKeyword);
    params.set("searchTerm", data.searchTerm);
    replace(`${pathname}?${params.toString()}`);
  };

  const fetchData = async (params: SplashDataSearchParams) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/tableData?searchKeyword=${params.searchKeyword}&searchTerm=${params.searchTerm}`
      );
      const data = await response.json();
      setData(data.tableData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);
      setError("Failed to fetch initial data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({
      searchKeyword: searchKeyword || "name",
      searchTerm: searchTerm || "",
    });
  }, [searchKeyword, searchTerm]);

  return { data, loading, error, handleSearch };
};
