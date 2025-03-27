import { Expense } from "@/app/app/splash/(table)/tableSchema";

export interface TableDataSearchParams {
  searchKeyword: string;
  searchTerm: string;
}

export interface TableDataProps {
  data: Expense[];
  searchKeyword: string;
  searchTerm: string;
}
