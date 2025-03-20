import { Title } from "@/components/Layout/title";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Common/Icon";
import { SearchBar } from "@/components/SearchBar";
import path from "path";
import fs from "fs";
import { DataTableContainer } from "@/app/app/splash/(container)/DataTableContainer";

async function getData() {
  const filePath = path.join(process.cwd(), "src", "data", "tableData.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export default async function SplashScreen() {
  const data = await getData();

  return (
    <>
      <div className="py-8 flex justify-between items-center">
        <Title />
        <Button size="lg" variant="gradient">
          신규등록 <Icon iconType="plus" size="sm" fill="white" />
        </Button>
      </div>
      <SearchBar />
      <DataTableContainer data={data} />
    </>
  );
}
