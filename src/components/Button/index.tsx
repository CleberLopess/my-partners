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
      className={`${className} w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400`}
    >
      {children}
    </button>
  );
};
