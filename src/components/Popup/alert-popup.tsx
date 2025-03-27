import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface AlertPopupProps {
  buttonText: string;
  title: string;
  description?: string;
  className?: string;
  isCancel?: boolean;
  onConfirm?: () => void;
}

export function AlertPopup({
  buttonText,
  title,
  description,
  className,
  isCancel,
  onConfirm,
}: AlertPopupProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className={className}>
        <Button variant="default" size="sm">
          {buttonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {isCancel && <AlertDialogCancel>취소</AlertDialogCancel>}
          <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
