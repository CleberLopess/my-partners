import type { Metadata } from "next";
import { AppProviders } from "@/context/providers";
import { IsUserLoggedHoock } from "@/screens/IsUserLogged";
import "../styles/globals.css";
import ToastComponent from "@/components/Toast";
import ToastHook from "@/screens/Toast";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Meus Parceiros",
  description: "Aqui você encontra todos os parceiros que nós ajudamos.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AppProviders>
      <html lang="pt-br">
        <body>
          <ToastHook />
          <IsUserLoggedHoock />
          {children}
        </body>
      </html>
    </AppProviders>
  );
}
