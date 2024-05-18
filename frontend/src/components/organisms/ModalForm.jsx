import React, { useEffect } from "react";
import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
import { useDepartContext } from "../../context/DeparContext";

export const ModalForm = ({ open, onClose, children, title }) => {
  const { cerrarModal, serCerrarModal } = useDepartContext();

  useEffect(() => {
    if (cerrarModal) {
      onClose();
      serCerrarModal(false); 
    }
  }, [cerrarModal, onClose, serCerrarModal]);

  return (
    <>
      <Modal isOpen={open} onClose={onClose} isDismissable={false} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex justify-center">
            <h1 className="text-center text-3xl font-bold">{title}</h1>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
