import { ModalProps } from "./types";
import { IoMdClose } from "react-icons/io";

const ModalComponent = ({ children, handleCloseModal, isOpen }: ModalProps) => {
  const stopPropagation = (ev: MouseEvent | any) => {
    ev.stopPropagation();
  };

  const handleClose = (ev: MouseEvent | any) => {
    stopPropagation(ev);
    handleCloseModal();
  };

  return (
    <div
      onClick={(event) => handleClose(event)}
      className={`${
        isOpen ? "block" : "hidden"
      } flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
    >
      <div
        onClick={stopPropagation}
        className="relative p-4 w-full max-w-md max-h-full"
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-500">
          <button
            onClick={handleClose}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
          <div className="p-4 max-w-[80%] mx-auto md:p-5 text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
