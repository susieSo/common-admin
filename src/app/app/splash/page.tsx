import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SplashContainer } from "./(container)/SplashContainer";
import { fetchTableData } from "@/services/api/table";
export default async function SplashScreen({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const searchKeyword = params.searchKeyword as string;
  const searchTerm = params.searchTerm as string;

  const data = await fetchTableData(searchKeyword, searchTerm);

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <SplashContainer
        initialData={{
          data,
          searchKeyword,
          searchTerm,
        }}
      />
    </>
  );
}
