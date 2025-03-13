import {
  CHECKBOX_ITEMS,
  MULTIPLE_SELECT_OPTIONS,
  SELECT_OPTIONS,
} from "@/data/dummyData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      options: SELECT_OPTIONS,
      multipleOptions: MULTIPLE_SELECT_OPTIONS,
      checkboxItems: CHECKBOX_ITEMS,
    },
  });
}
