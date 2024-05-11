"use client";
import { UserContext } from "@/context/user/contex";
import { getLocalStorage, setLocalStorage } from "@/helpers/localStorage";
import { LOCALSTORAGE_KEYS } from "@/helpers/localStorage/types";
import { useRouter, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export const IsUserLoggedHoock = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userDataLocal = getLocalStorage(LOCALSTORAGE_KEYS.USER);
    console.log(user.name);
    console.log(!!userDataLocal);

    if (!userDataLocal && pathName !== "/login" && pathName !== "/") {
      setLocalStorage(LOCALSTORAGE_KEYS.REDIRECT_ROUTE, pathName);
    }

    if (!!userDataLocal) {
      setUser({ name: userDataLocal });
      return;
    }

    if (!user.name && pathName !== "/login") {
      router.push("/login");
    }
  }, [pathName, router, setUser, user.name]);

  console.log();

  return null;
};
