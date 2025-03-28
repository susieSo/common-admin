import { NextResponse } from "next/server";
import { TABLE_DATA } from "@/data/tableData";
import { Expense } from "@/app/app/splash/(table)/tableSchema";

let tableData = TABLE_DATA;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchKeyword = url.searchParams.get("searchKeyword") as keyof Expense;
  const searchTerm = url.searchParams.get("searchTerm");

  let filteredData = [...tableData];

  if (searchKeyword && searchTerm) {
    filteredData = filteredData.filter((item) => {
      const value = String(item[searchKeyword]).toLowerCase();
      return value.includes(searchTerm.toLowerCase());
    });
  }

  return NextResponse.json({
    tableData: filteredData,
    filtered: searchKeyword && searchTerm ? true : false,
    query: { searchKeyword, searchTerm },
  });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  tableData = tableData.filter((item) => item.id !== Number(id));
  return NextResponse.json({ message: "Deleted", tableData });
}

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const { exposure } = await req.json();

  tableData = tableData.map((item) =>
    item.id === Number(id) ? { ...item, exposure } : item
  );
  return NextResponse.json({ message: "Updated", tableData });
}
