export type ToastType = "success" | "error";

export type ToastProps = {
  message: string;
  type: ToastType;
  isOpen: boolean;
};

export type ToastContextType = {
  toast: ToastProps;
  setToast: (toast: {
    message: string;
    type: ToastType;
    isOpen: boolean;
  }) => void;
};
