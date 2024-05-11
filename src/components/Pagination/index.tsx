import { ButtonComponent } from "../Button";
import { PaginationProps } from "./types";

export const PaginationComponent = ({
  currentPage,
  onPageChange,
  totalPages,
  className,
}: PaginationProps) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Página{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage}
        </span>{" "}
        de{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalPages}
        </span>
      </span>

      <div className="inline-flex mt-2 gap-2 xs:mt-0">
        <ButtonComponent
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </ButtonComponent>
        <ButtonComponent
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </ButtonComponent>
      </div>
    </div>
  );
};
