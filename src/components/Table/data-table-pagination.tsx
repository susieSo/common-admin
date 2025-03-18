import { Table } from "@tanstack/react-table";
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst onClick={() => table.setPageIndex(0)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious onClick={() => table.previousPage()} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => table.nextPage()} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
