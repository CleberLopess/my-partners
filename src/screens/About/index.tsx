"use client";
import { NavbarComponent } from "@/components/Navbar";
import { UserContext } from "@/context/user/contex";
import React, { useContext } from "react";

export const AboutScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavbarComponent userName={user.name} />
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Projeto: Cadastro de Parceiros e Empresas Externas
        </h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Sobre o Sistema
          </h2>
          <p className="text-gray-700">
            O intuito deste projeto é desenvolver um sistema para cadastrar e
            gerenciar parceiros integrados em nossas aplicações, bem como
            informações sobre seu uso e os clientes atendidos. O sistema será
            implementado utilizando micro front-ends separados por domínios ou
            contextos de uso, permitindo que diferentes times possam cuidar das
            funcionalidades de forma independente.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Informações de Desenvolvimento
          </h2>
          <p className="text-gray-700">
            O projeto será implementado com micro front-ends usando frameworks
            diferentes para demonstrar diversidade e capacidade de integração.
            No repositório, será disponibilizado um <code>README.md</code>{" "}
            detalhado para orientar qualquer desenvolvedor sobre como configurar
            e executar o projeto.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            Funcionalidades da API
          </h3>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>Listar todos os parceiros</li>
            <li>Obter detalhes de um parceiro por ID</li>
            <li>Cadastrar um novo parceiro</li>
            <li>Atualizar informações de um parceiro existente</li>
            <li>Excluir um parceiro</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            URL das APIs
          </h3>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>
              Parceiros:{" "}
              <a
                href="https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners"
                className="text-blue-600 underline"
              >
                https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners
              </a>
            </li>
            <li>
              Empresas Externas:{" "}
              <a
                href="https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies"
                className="text-blue-600 underline"
              >
                https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies
              </a>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Tecnologias Utilizadas
          </h2>
          <p className="text-gray-700">
            Este projeto foi desenvolvido utilizando as seguintes tecnologias:
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>
              Next.js: Framework React utilizado para renderização do lado do
              servidor (SSR) e geração de páginas estáticas.
            </li>
            <li>
              React.js: Utilizado como o principal framework de frontend,
              oferecendo componentização e um modelo de desenvolvimento
              declarativo.
            </li>
            <li>
              Tailwind CSS: Framework de estilização utilizado para uma
              abordagem moderna e eficiente de estilização baseada em classes.
            </li>
            <li>
              useContext: Hook do React utilizado para gerenciamento de estado
              global e compartilhamento de dados entre componentes.
            </li>
            <li>
              Axios: Biblioteca para realizar requisições HTTP, utilizada para
              integração com as APIs de parceiros e empresas externas.
            </li>
            <li>
              localStorage: Utilizado para armazenar dados localmente no
              navegador, oferecendo uma solução simples de persistência de
              informações.
            </li>
            <li>
              react-icons: Biblioteca para utilizar ícones de forma simplificada
              e consistente no projeto.
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Declarações do desenvolvedor
          </h2>
          <p className="text-gray-700">
            Esse projeto serviu para ver minhas capacidades tecnicas atuais,
            Este projeto foi uma oportunidade valiosa para avaliar minhas
            habilidades técnicas atuais. Acredito sinceramente que dei o meu
            melhor dentro do prazo estipulado e estou muito satisfeito com o
            resultado alcançado.
            <br /> Um dos desafios mais interessantes que enfrentei foi
            implementar a lógica que redireciona o usuário de volta à página
            compartilhada após o login, caso ele não estivesse autenticado
            anteriormente. <br />
            Com mais tempo à disposição, tenho certeza de que poderia aprimorar
            e tornar este projeto mais robusto. Ideias como animações de
            transição, indicadores visuais para informar ao usuário sobre o
            progresso do carregamento e otimizações de desempenho seriam áreas
            de foco para melhorias futuras. <br />
            Espero que tenha apreciado este projeto e esteja ciente de que tenho
            muito mais a oferecer e a demonstrar nas minhas capacidades
            técnicas. Estou ansioso para compartilhar mais do meu trabalho no
            futuro!
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            Entre em contato comigo!
          </h3>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>
              Portifólio:{" "}
              <a
                href="https://lobster-site.vercel.app/"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://lobster-site.vercel.app/
              </a>
            </li>
            <li>
              Linkedin{" "}
              <a
                href="https://www.linkedin.com/in/cleber-lopess/"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://www.linkedin.com/in/cleber-lopess/
              </a>
            </li>
            <li>
              Github{" "}
              <a
                href="https://github.com/CleberLopess"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://github.com/CleberLopess
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};
