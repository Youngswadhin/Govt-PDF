import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeButton?: boolean;
  className?: string;
  children: React.ReactNode;
  title?: string;
  bottomContent?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeButton = true,
  className,
  children,
  title,
  bottomContent,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="wrapper w-[100vw] h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div
        className={`flex flex-col bg-white rounded-md overflow-hidden m-auto ${className}`}
      >
        <div className={`flex justify-between mx-3 mt-2 font-semibold`}>
          {title ? title : <div></div>}
          {closeButton && (
            <button
              className="text-lg text-gray-600 hover:text-red-400 duration-150 pb-0.5 w-6 h-6 rounded-full hover:bg-red-100 flex items-center justify-center"
              onClick={onClose}
            >
              &times;
            </button>
          )}
        </div>
        <div className="children-wrapper w-full h-full overflow-scroll">
          {children}
        </div>
        {bottomContent}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
