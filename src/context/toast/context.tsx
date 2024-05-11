"use client";
import { createContext, useState } from "react";
import { ToastContextType, ToastProps } from "./types";

export const ToastContext = createContext<ToastContextType>({
  toast: {
    message: "",
    type: "success",
    isOpen: false,
  },
  setToast: () => {},
});

export const ToastProvider = ({ children }: any) => {
  const [toast, setToast] = useState<ToastProps>({
    message: "",
    type: "success",
    isOpen: false,
  });

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};
