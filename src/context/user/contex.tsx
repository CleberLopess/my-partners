"use client";
import { createContext, useState } from "react";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType>({
  user: { name: "" },
  setUser: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({ name: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
