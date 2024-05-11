"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NavbarComponent } from "@/components/Navbar";
import { UserContext } from "@/context/user/contex";
import { CardHome } from "@/components/Card/Home";

//icons
import { GrUserNew } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { removeLocalStorage } from "@/helpers/localStorage";
import { LOCALSTORAGE_KEYS } from "@/helpers/localStorage/types";

export const itemsMenu = [
  {
    label: "Cadastrar parceiros",
    link: "/cadastrar-parceiros",
    icon: <GrUserNew />,
  },
  {
    label: "Listar parceiros",
    link: "/listar-parceiros/1",
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
  const { user } = useContext(UserContext);

  useEffect(() => {
    removeLocalStorage(LOCALSTORAGE_KEYS.PAGINATION_PARTNERS);
    removeLocalStorage(LOCALSTORAGE_KEYS.REDIRECT_ROUTE);
  }, []);

  return (
    <>
      <NavbarComponent userName={user.name} />
      <section className="h-full w-full flex items-center justify-center flex-col gap-8">
        {itemsMenu.map((item) => {
          return (
            <CardHome
              key={item.label}
              handleClickCardHome={() => router.push(item.link)}
              icon={item.icon}
              title={item.label}
            />
          );
        })}
      </section>
    </>
  );
};
