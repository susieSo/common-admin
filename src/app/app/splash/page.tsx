import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { DataTableContainer } from "./(container)/DataTableContainer";
import { TableDataSearchParams } from "@/hooks/use-table-data";

const getServerSideProps = async (props: TableDataSearchParams) => {
  const { searchKeyword, searchTerm } = props;

  return {
    props: {
      data: [],
      searchKeyword,
      searchTerm,
    },
  };
};

export default async function SplashScreen(props: TableDataSearchParams) {
  const res = await getServerSideProps(props);

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <DataTableContainer data={res.props.data} />
    </>
  );
}
