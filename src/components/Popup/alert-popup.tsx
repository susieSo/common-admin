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
import { Icon, IconTypes } from "@/components/Common/Icon";

interface AlertPopupProps {
  buttonText: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
  hasIcon?: boolean;
  iconType?: string;
  isCancel?: boolean;
  onConfirm?: () => void;
}

export function AlertPopup({
  buttonText,
  title,
  description,
  className,
  variant = "default",
  size = "sm",
  hasIcon,
  iconType,
  isCancel,
  onConfirm,
}: AlertPopupProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className={className}>
        <Button variant={variant} size={size}>
          {buttonText}
          {hasIcon && (
            <Icon iconType={iconType as IconTypes} size="s" fill="white" />
          )}
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
