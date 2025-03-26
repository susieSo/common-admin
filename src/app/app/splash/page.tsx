import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { DataTableContainer } from "./(container)/DataTableContainer";
import { GetServerSideProps } from "next";
import { Expense } from "./(table)/tableSchema";

export interface SplashScreenProps {
  data: Expense[];
  searchKeyword: string;
  searchTerm: string;
}

const getServerSideProps = (async (context) => {
  const search = (await context.params) || {};
  const searchKeyword = (search?.searchKeyword as string) || "name";
  const searchTerm = (search?.searchTerm as string) || "";
  const data = await fetchTableData(searchKeyword, searchTerm);

  return {
    props: {
      data: data,
      searchKeyword: searchKeyword,
      searchTerm: searchTerm,
    },
  };
}) satisfies GetServerSideProps;

const fetchTableData = async (searchKeyword: string, searchTerm: string) => {
  try {
    const params = new URLSearchParams();
    params.set("searchKeyword", searchKeyword || "name");
    params.set("searchTerm", searchTerm || "");

    const res = await fetch(
      `http://localhost:3000/api/tableData?${params.toString()}`
    );
    const data = await res.json();
    return data.tableData;
  } catch (error) {
    console.error("Error fetching table data:", error);
    return [];
  }
};

export default async function SplashScreen(props: SplashScreenProps) {
  const res = await getServerSideProps(props);
  console.log(res);

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <DataTableContainer {...res.props} />
    </>
  );
}
