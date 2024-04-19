import React from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

export const AccodalAcciones = ({ open, onClose, children }) => {
  return (
    <>
      <Modal isOpen={open} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
