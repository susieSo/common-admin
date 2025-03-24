import { NextResponse } from "next/server";
import { TABLE_DATA } from "@/data/tableData";
import { Expense } from "@/app/app/splash/(table)/tableSchema";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchKeyword = url.searchParams.get("searchKeyword");
  const searchTerm = url.searchParams.get("searchTerm");

  let filteredData = [...TABLE_DATA];

  if (searchKeyword && searchTerm) {
    filteredData = filteredData.filter((item) => {
      const value = String(item[searchKeyword as keyof Expense]).toLowerCase();
      return value.includes(searchTerm.toLowerCase());
    });
  }

  return NextResponse.json({
    tableData: filteredData,
    filtered: searchKeyword && searchTerm ? true : false,
    query: { searchKeyword, searchTerm },
  });
}
