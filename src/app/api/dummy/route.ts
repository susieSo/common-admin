import {
  CHECKBOX_ITEMS,
  MULTIPLE_SELECT_OPTIONS,
  RADIO_ITEMS,
  SELECT_OPTIONS,
  TOGGLE_ITEMS,
} from "@/data/dummyData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      options: SELECT_OPTIONS,
      multipleOptions: MULTIPLE_SELECT_OPTIONS,
      checkboxItems: CHECKBOX_ITEMS,
      radioItems: RADIO_ITEMS,
      toggleItems: TOGGLE_ITEMS,
    },
  });
}
