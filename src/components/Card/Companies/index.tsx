import { CardCompaniesProps } from "./types";
import { getDate } from "@/helpers/date";

export const CardCompanies = ({
  collaboratorsCount,
  companyName,
  createdAt,
  id,
  lastSubmit,
  handleClickCard,
}: CardCompaniesProps) => {
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
        <h3 className="">Nome da Comapnia: {companyName}</h3>
        <p>Total de colaboradores: {collaboratorsCount}</p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span>Criado em: {getDate(createdAt).dateFormated}</span>{" "}
            <span>
              Ultima data de atualização em: {getDate(lastSubmit).dateFormated}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
