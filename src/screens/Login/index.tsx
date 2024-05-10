"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/user/contex";
import { ButtonComponent } from "@/components/Button";
import { InputComponent } from "@/components/Input";
import { removeLocalStorage, setLocalStorage } from "@/helpers/localStorage";
import { LOCALSTORAGE_kEYS } from "@/helpers/localStorage/types";
import { useRouter } from "next/navigation";

export const LoginScreen = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (!!username && !!password) {
      setDisableButton(false);
    }
  }, [password, username]);

  useEffect(() => {
    removeLocalStorage(LOCALSTORAGE_kEYS.USER);
  }, []);

  const handleLogin = () => {
    if (saveUser) {
      setLocalStorage(LOCALSTORAGE_kEYS.USER, username);
    }

    setUser({ name: username });
    router.push("/");
  };

  return (
    <section className="flex items-center justify-center h-full m-auto">
      <div className="w-full max-w-screen-md border border-gray-500 p-8 rounded-lg">
        <h5 className="text-xl font-medium text-center">
          Faça login na plataforma
        </h5>
        <div className="flex flex-col space-y-4">
          <InputComponent
            className="w-full"
            label="Nome de Usuário"
            name="username"
            onChange={(ev) => setUsername(ev.target.value)}
            placeholder="Entre com seu nome de usuário"
            type="text"
            value={username}
          />
          <InputComponent
            className="w-full"
            label="Password"
            name="password"
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Entre com sua senha"
            type="password"
            value={password}
          />
          <InputComponent
            label="Lembrar usuário"
            name="remember"
            onChange={(ev) => setSaveUser(ev.target.checked)}
            type="checkbox"
          />
          <ButtonComponent onClick={handleLogin} disabled={disableButton}>
            Entrar
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};
