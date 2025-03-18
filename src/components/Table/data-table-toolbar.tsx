import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Icon } from "../Common/Icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="pl-6 pr-10 pb-4 flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold">
          검색결과{" "}
          <span className="text-states-red">
            {table.getFilteredRowModel().rows.length}
          </span>
          건
        </p>
      </div>
      <div className="flex items-center">
        <Button size="md" className="mr-4">
          계정권한관리 <Icon iconType="setting" size="s" fill="white" />
        </Button>
        <Select>
          <SelectTrigger className="w-40 mr-1">
            <SelectValue placeholder="최근등록일순" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="descending">등록일내림차순</SelectItem>
            <SelectItem value="Ascending">등록일오름차순</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue
              placeholder={`${table.getState().pagination.pageSize}개`}
            />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}개
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
