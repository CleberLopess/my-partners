"use client";
import { ToastComponent } from "@/components/Toast";
import { ToastContext } from "@/context/toast/context";
import { useContext, useEffect } from "react";

export const ToastHook = () => {
  const { toast, setToast } = useContext(ToastContext);

  useEffect(() => {
    if (toast.isOpen) {
      setTimeout(() => {
        setToast({
          message: "",
          type: "success",
          isOpen: false,
        });
      }, 3000);
    }
  }, [setToast, toast.isOpen]);

  return (
    <ToastComponent
      open={toast.isOpen}
      text={toast.message}
      type={toast.type}
    />
  );
};
