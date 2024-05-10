import type { Metadata } from "next";
import "../styles/globals.css";
import { AppProviders } from "@/context/providers";
import { NavbarComponent } from "@/components/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Meus Parceiros",
  description: "Aqui você encontra todos os parceiros que nós ajudamos.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
