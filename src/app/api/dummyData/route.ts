import { NextResponse } from "next/server";
import {
  CHECKBOX_ITEMS,
  MULTIPLE_SELECT_OPTIONS,
  RADIO_ITEMS,
  SELECT_OPTIONS,
} from "@/data/dummyData";

export async function GET() {
  return NextResponse.json({
    data: {
      options: SELECT_OPTIONS,
      multipleOptions: MULTIPLE_SELECT_OPTIONS,
      checkboxItems: CHECKBOX_ITEMS,
      radioItems: RADIO_ITEMS,
    },
  });
}
