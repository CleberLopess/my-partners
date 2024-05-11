import { FaGithub } from "react-icons/fa6";
import { PartinersViewProps } from "./types";
import { IoDocumentSharp } from "react-icons/io5";
import { getDate } from "@/helpers/date";
import { ButtonComponent } from "@/components/Button";

const PartinersViewComponent = ({
  clients,
  createdAt,
  description,
  id,
  linkDocs,
  linkGithub,
  name,
  projects,
  handleClickDelete,
  handleClickEdit,
}: PartinersViewProps) => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-500 p-4 rounded gap-2">
      <div className="text-center w-full">
        <h2 className="text-2xl">{name}</h2>
        <span>ID: {id}</span>
        <p>Descrição: {description}</p>
      </div>

      <div className="w-full border border-gray-200 p-4 grid grid-cols-2 rounded">
        <div>
          <span>Clientes</span>

          <ul className="mt-2">
            {clients.map((client, index) => (
              <li key={client}>
                {index} {client}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span>Projetos</span>
          <ul className="mt-2">
            {projects.map((project, index) => (
              <li key={project}>
                {index} {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-2 justify-between w-full">
        <div className="flex gap-2 w-full">
          <a
            className="flex items-center justify-center gap-2 w-full bg-black p-4 rounded-lg hover:bg-gray-600 "
            href={linkGithub}
            target="_blank"
          >
            <FaGithub className="text-white" />
            Link Github
          </a>
          <a
            className="flex items-center justify-center gap-2 w-full bg-blue-500 p-4 rounded-lg hover:bg-blue-600"
            href={linkDocs}
            target="_blank"
          >
            <IoDocumentSharp className="text-white" />
            Link Docs
          </a>
        </div>
        <div className="flex gap-2 w-full">
          <ButtonComponent
            className="bg-yellow-500 hover:bg-yellow-600"
            onClick={handleClickEdit}
          >
            Editar
          </ButtonComponent>
          <ButtonComponent
            className="bg-red-500 hover:bg-red-600"
            onClick={handleClickDelete}
          >
            Excluir
          </ButtonComponent>
        </div>
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Data de criação: {getDate(createdAt).dateFormated}
      </span>
    </div>
  );
};

export default PartinersViewComponent;
