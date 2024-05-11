import { ButtonProps } from "./types";

export const ButtonComponent = ({
  children,
  onClick,
  className,
  disabled,
  id,
  name,
  title,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      id={id}
      name={name}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`${className} w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400`}
    >
      {children}
    </button>
  );
};
