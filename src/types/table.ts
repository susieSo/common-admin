import { Expense } from "@/app/app/splash/(table)/tableSchema";

export interface TableDataSearchParams {
  searchKeyword: string;
  searchTerm: string;
  page?: number;
  size?: number;
}

export interface TableDataProps {
  data: Expense[];
  searchKeyword: string;
  searchTerm: string;
  page?: number;
  size?: number;
}
