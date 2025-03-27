import { Expense } from "@/app/app/splash/(table)/tableSchema";
import { Row } from "@tanstack/react-table";
import { useDeleteTableData } from "@/hooks/use-table-data";
import { AlertPopup } from "../Popup/alert-popup";

export const DataTableRowAction = ({ row }: { row: Row<Expense> }) => {
  const { mutate: deleteTableData } = useDeleteTableData();

  return (
    <div className="flex space-x-2">
      <AlertPopup
        buttonText="삭제"
        title="삭제하시겠습니까?"
        className="w-full"
        isCancel
        onConfirm={() => deleteTableData(row.original.id)}
      />
    </div>
  );
};
