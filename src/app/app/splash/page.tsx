import { DataTableContainer } from "./(container)/DataTableContainer";
import { TableDataSearchParams } from "@/types/table";
import { ContentTitle } from "@/components/Layout/content-title";

const fetchTableData = async (searchKeyword: string, searchTerm: string) => {
  try {
    const params = new URLSearchParams();
    params.set("searchKeyword", searchKeyword || "name");
    params.set("searchTerm", searchTerm || "");

    const response = await fetch(
      `${process.env.HOST_URL}/api/tableData?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }

    const data = await response.json();

    return data.tableData;
  } catch (error) {
    throw error;
  }
};

export default async function SplashScreenPage(props: {
  searchParams: TableDataSearchParams;
}) {
  const search = await props.searchParams;
  const searchKeyword = (search.searchKeyword || "name") as string;
  const searchTerm = (search.searchTerm || "") as string;
  const data = await fetchTableData(searchKeyword, searchTerm);

  return (
    <>
      <ContentTitle />
      <DataTableContainer
        data={data}
        searchKeyword={searchKeyword}
        searchTerm={searchTerm}
      />
    </>
  );
}
