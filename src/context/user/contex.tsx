"use client";
import { createContext, useState } from "react";
import { UserContextType, UserContextContextType } from "./types";

export const UserContext = createContext<UserContextContextType>({
  user: { name: "" },
  setUser: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserContextType>({ name: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
