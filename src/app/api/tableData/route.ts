import { NextResponse } from "next/server";
import { TABLE_DATA } from "@/data/tableData";
import { Expense } from "@/components/Table/schema";

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
  console.log(filteredData);

  return NextResponse.json({
    tableData: filteredData,
    filtered: searchKeyword && searchTerm ? true : false,
    query: { searchKeyword, searchTerm },
  });
}
