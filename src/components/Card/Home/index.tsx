import { CardHomeType } from "./types";

export const CardHome = ({
  icon,
  title,
  handleClickCardHome,
}: CardHomeType) => {
  return (
    <div
      className="flex gap-8 w-full max-w-screen-md cursor-pointer bg-gray-500 rounded-lg p-4 hover:scale-105 duration-300"
      onClick={handleClickCardHome}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};
