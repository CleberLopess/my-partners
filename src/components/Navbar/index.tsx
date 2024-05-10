import { NavbarProps } from "./types";

export const NavbarComponent = ({ userName }: NavbarProps) => {
  return (
    <nav className="bg-gray-500 text-white fixed w-full left-0 top-0">
      <section className="flex flex-wrap flex-row-reverse justify-between  p-4">
        <ul className="flex gap-8">
          <li className="border-b border-transparent hover:border-cyan-50">
            <a href="/">Home</a>
          </li>
          <li className="border-b border-transparent hover:border-cyan-50">
            <a href="/login">Sair</a>
          </li>
        </ul>
        {userName && (
          <div className="flex gap-2">
            Voce esta logado como: <strong>{userName}</strong>
          </div>
        )}
      </section>
    </nav>
  );
};
