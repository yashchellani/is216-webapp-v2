import React, { FC, ReactNode } from 'react';

interface ModalProps {
  title?: string;
  children: ReactNode;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  modalOpen = false,
  setModalOpen,
}) => {
  return (
    <div className={`${modalOpen ? '' : 'hidden'}`}>
      {/* Input Toggle */}
      <input
        value={String(modalOpen)}
        type="checkbox"
        checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)}
        className="modal-toggle"
      />

      {/* Modal */}
      <div className="modal bg-black fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-50">
        <div className="modal-box relative rounded-lg bg-white p-6 text-gray-900 shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="absolute right-4 top-4 rounded-full bg-gray-300 p-2 focus:outline-none focus:ring-2"
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="mb-4 text-lg font-bold">{title}</h3>

          {/* Children Content */}
          <div className="py-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
