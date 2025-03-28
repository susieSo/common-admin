import { Expense } from "@/app/app/splash/(table)/tableSchema";
import { Row } from "@tanstack/react-table";
import { useDeleteTableData, useUpdateTableData } from "@/hooks/use-table-data";
import { AlertPopup } from "@/components/Popup/alert-popup";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export const DataTableRowAction = ({ row }: { row: Row<Expense> }) => {
  const { mutate: deleteTableData } = useDeleteTableData();
  const { mutate: updateTableData } = useUpdateTableData();

  const { addToast } = useToast();

  return (
    <div className="flex items-center gap-4">
      <AlertPopup
        buttonText="삭제"
        title="삭제하시겠습니까?"
        className="w-full"
        isCancel
        onConfirm={() => deleteTableData(row.original.id)}
      />
      <Switch
        checked={row.original.exposure}
        onCheckedChange={() => {
          addToast({
            message: "데이터가 업데이트되었습니다.",
            type: "success",
          });
          updateTableData({
            id: row.original.id,
            exposure: !row.original.exposure,
          });
        }}
      />
    </div>
  );
};
