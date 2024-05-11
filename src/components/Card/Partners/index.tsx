import { CardPartnersProps } from "./types";
import { IoDocumentSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { getDate } from "@/helpers/date";

export const CardPartners = ({
  description,
  id,
  name,
  clients,
  projects,
  linkDocs,
  linkGithub,
  createdAt,
  handleClickCard,
}: CardPartnersProps) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
    handleClickCard(id);
  };

  return (
    <div
      className="flex justify-between w-full bg-gray-500 cursor-pointer hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center border-r w-24 gap-2">
        <span>ID: {id}</span>
      </div>
      <div className="flex flex-col w-full gap-2 p-4">
        <h3 className="">{name}</h3>
        <p>{description}</p>
        <div className="flex justify-between">
          <div>
            <span>Data de criação: {getDate(createdAt).dateFormated}</span>
          </div>
          <div className="flex gap-4">
            <span>numeros de clientes: {clients}</span>
            <span>numeros de projetos: {projects}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between min-w-16">
        <a
          className="flex text-center items-center justify-center h-full  w-full bg-black p-4 hover:scale-110"
          href={linkGithub}
          target="_blank"
        >
          <FaGithub className="text-white" />
        </a>
        <a
          className="flex text-center items-center justify-center gap-2 h-full  w-full bg-blue-500 p-4 hover:scale-110"
          href={linkDocs}
          target="_blank"
        >
          <IoDocumentSharp className="text-white" />
        </a>
      </div>
    </div>
  );
};
