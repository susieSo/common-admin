import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { CustomIcon } from "@/components/Common/CustomIcon";
import { SearchBar } from "@/components/SearchBar";
import { DataTable } from "@/components/Table";

export default function SplashScreen() {
  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <CustomIcon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <SearchBar />
      <DataTable />
    </>
  );
}
