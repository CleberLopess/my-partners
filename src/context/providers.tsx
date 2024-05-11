import React from "react";
import { UserProvider } from "./user/contex";
import { ToastProvider } from "./toast/context";

export const AppProviders = ({ children }: any) => {
  return (
    <ToastProvider>
      <UserProvider>{children}</UserProvider>
    </ToastProvider>
  );
};
