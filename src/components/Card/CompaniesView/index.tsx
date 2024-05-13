import { ButtonComponent } from "@/components/Button";
import { CompaniesViewProps } from "./type";
import { getDate } from "@/helpers/date";

export const CompaniesViewComponent = ({
  collaboratorsCount,
  companyName,
  createdAt,
  handleClickDelete,
  handleClickEdit,
  isActive,
  lastSubmit,
  id,
}: CompaniesViewProps) => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-500 p-4 rounded gap-2">
      <div className="text-center w-full">
        <h2 className="text-2xl">{companyName}</h2>
        <span>ID: {id}</span>
        <p>Numero de colaboradores: {collaboratorsCount}</p>
        <span>Status da compania: {isActive ? "Ativo" : "Inativo"}</span>
      </div>

      <div className="flex gap-2 justify-between w-full">
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
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Data de criação: {getDate(createdAt).dateFormated}
        </span>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Ultima data de atualização em: {getDate(lastSubmit).dateFormated}
        </span>
      </div>
    </div>
  );
};
