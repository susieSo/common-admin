import { Expense } from "@/components/Table/schema";
import { config } from "@/config";
export const fetchTableData = async (
  searchKeyword?: string,
  searchTerm?: string
) => {
  try {
    const params = new URLSearchParams();
    params.set("searchKeyword", searchKeyword || "name");
    params.set("searchTerm", searchTerm || "");

    const response = await fetch(
      `${config.apiUrl}/tableData?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch table data");
    }

    const data = await response.json();
    return data.tableData as Expense[];
  } catch (error) {
    console.error("Failed to fetch table data:", error);
    return [];
  }
};
