"use client";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getPartners } from "@/app/api/partners/get/route";
import { NavbarComponent } from "@/components/Navbar";
import { UserContext } from "@/context/user/contex";
import { getLocalStorage } from "@/helpers/localStorage";
import { LOCALSTORAGE_kEYS } from "@/helpers/localStorage/types";
import { CardHome } from "@/components/Card/Home";

//icons
import { GrUserNew } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";

export const itemsMenu = [
  {
    label: "Cadastrar parceiros",
    link: "/cadastrar-parceiros",
    icon: <GrUserNew />,
  },
  {
    label: "Listar parceiros",
    link: "/listar-parceiros",
    icon: <CiBoxList />,
  },
  {
    label: "Cadastrar empresa externa",
    link: "/cadastrar-empresa-externa",
    icon: <GrUserNew />,
  },
  {
    label: "Listar empresas externas",
    link: "/listar-empresas-externas",
    icon: <CiBoxList />,
  },
  {
    label: "Sobre",
    link: "/sobre",
    icon: <CgDetailsMore />,
  },
];

export const HomeScreen = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const userDataLocal = getLocalStorage(LOCALSTORAGE_kEYS.USER);

  const setItemsMenu = useMemo(() => {
    return itemsMenu.map((item) => {
      return (
        <CardHome
          key={item.label}
          handleClickCardHome={() => router.push(item.link)}
          icon={item.icon}
          title={item.label}
        />
      );
    });
  }, [router]);

  useEffect(() => {
    if (userDataLocal) {
      setUser({ name: userDataLocal });
      return;
    }

    if (!user.name) {
      router.push("/login");
      return;
    }
  }, [router, setUser, user.name, userDataLocal]);

  const get = useCallback(async () => {
    const data = await getPartners();
  }, []);

  useEffect(() => {
    get();
  }, [get]);

  return (
    <>
      <NavbarComponent userName={user.name} />
      <section className="h-full w-full flex items-center justify-center flex-col gap-8">
        {setItemsMenu}
      </section>
    </>
  );
};
