"use client";
import ToastComponent from "@/components/Toast";
import { ToastContext } from "@/context/toast/context";
import { useContext } from "react";

const ToastHook = () => {
  const { toast } = useContext(ToastContext);

  return (
    <ToastComponent
      open={toast.isOpen}
      text={toast.message}
      type={toast.type}
    />
  );
};

export default ToastHook;
