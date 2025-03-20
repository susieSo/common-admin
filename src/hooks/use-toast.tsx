import { Icon } from "@/components/Common/Icon";
import { toast } from "sonner";

interface ToastProps {
  message: string;
  type?: "primary" | "success" | "info" | "warning" | "error";
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export const useToast = () => {
  const addToast = ({ message, type }: ToastProps) => {
    switch (type) {
      case "success":
        toast.success(message, {
          icon: <Icon iconType="toastSuccess" size="m" />,
          action: {
            label: <Icon iconType="close" size="s" fill="white" />,
            onClick: () => {
              toast.dismiss();
            },
          },
        });
        break;
      case "info":
        toast.info(message, {
          icon: <Icon iconType="toastInfo" size="m" />,
          action: {
            label: <Icon iconType="close" size="s" fill="white" />,
            onClick: () => {
              toast.dismiss();
            },
          },
        });
        break;
      case "warning":
        toast.warning(message, {
          icon: <Icon iconType="toastWarning" size="m" />,
          action: {
            label: <Icon iconType="close" size="s" fill="white" />,
            onClick: () => {
              toast.dismiss();
            },
          },
        });
        break;
      case "error":
        toast.error(message, {
          icon: <Icon iconType="toastError" size="m" />,
          action: {
            label: <Icon iconType="close" size="s" fill="white" />,
            onClick: () => {
              toast.dismiss();
            },
          },
        });
        break;
      default:
        toast(message, {
          icon: <Icon iconType="toastPrimary" size="m" />,
          className: "group-[.toaster]:gradient-grad",
          action: {
            label: <Icon iconType="close" size="s" fill="white" />,
            onClick: () => {
              toast.dismiss();
            },
          },
        });
        break;
    }
  };

  return { addToast };
};
