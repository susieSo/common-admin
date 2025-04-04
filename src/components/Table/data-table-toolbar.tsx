import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSeveralDeleteTableData } from "@/hooks/use-table-data";
import { useToast } from "@/hooks/use-toast";
import { AlertPopup } from "../Popup/alert-popup";
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const { mutate: deleteSeveralTableData } = useSeveralDeleteTableData(table);
  const { addToast } = useToast();
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
        {table.getFilteredSelectedRowModel().rows.length === 0 ? (
          <AlertPopup
            buttonText="선택삭제"
            title="선택한 데이터가 없습니다."
            className="mr-4"
            variant="secondary"
            size="md"
            hasIcon
            iconType="trash"
          />
        ) : (
          <AlertPopup
            buttonText="선택삭제"
            title="선택한 데이터를 삭제하시겠습니까?"
            className="mr-4"
            variant="secondary"
            size="md"
            hasIcon
            iconType="trash"
            isCancel
            onConfirm={() => {
              const selectedRows = table.getFilteredSelectedRowModel().rows;
              const selectedIds = selectedRows.map((row) => row.original.id);
              deleteSeveralTableData(selectedIds);
              addToast({
                message: "선택한 데이터가 삭제되었습니다.",
                type: "success",
              });
            }}
          />
        )}

        <Select
          onValueChange={(value) => {
            table.setSorting([
              {
                id: "date",
                desc: value === "descending",
              },
            ]);
          }}
        >
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
