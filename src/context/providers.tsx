import React from "react";
import { UserProvider } from "./user/contex";

export const AppProviders = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};
