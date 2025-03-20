import { NextResponse } from "next/server";
import { TABLE_DATA } from "@/data/tableData";

export async function GET() {
  return NextResponse.json({ tableData: TABLE_DATA });
}
