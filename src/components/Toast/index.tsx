import { ToastProps } from "./types";
import { MdErrorOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

export const ToastComponent = ({ text, type, open }: ToastProps) => {
  const setIcon = () => {
    switch (type) {
      case "error":
        return <MdErrorOutline className="w-5 h-5" />;
      default:
        return <CiCircleCheck className="w-5 h-5" />;
    }
  };

  const setBgColor = () => {
    switch (type) {
      case "error":
        return "bg-red-100 text-red-500";
      default:
        return "bg-green-100 text-green-500";
    }
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } ${setBgColor()} fixed flex items-center p-4 mb-4 gap-2 text-sm rounded-lg right-5 bottom-5 z-10`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ">
        {setIcon()}
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
    </div>
  );
};
