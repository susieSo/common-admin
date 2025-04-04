import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { DataTableContainer } from "./(container)/DataTableContainer";
import { TableDataSearchParams } from "@/types/table";

const fetchTableData = async (searchKeyword: string, searchTerm: string) => {
  try {
    const params = new URLSearchParams();
    params.set("searchKeyword", searchKeyword || "name");
    params.set("searchTerm", searchTerm || "");

    const response = await fetch(
      `http://localhost:3000/api/tableData?${params.toString()}`
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

export default async function SplashScreen(props: {
  searchParams: TableDataSearchParams;
}) {
  const search = (await props.searchParams) || {};
  const searchKeyword = (search?.searchKeyword as string) || "name";
  const searchTerm = (search?.searchTerm as string) || "";
  const data = await fetchTableData(searchKeyword, searchTerm);

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <DataTableContainer {...data} />
    </>
  );
}
