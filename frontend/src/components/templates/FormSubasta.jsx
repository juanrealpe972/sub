import React, { useEffect } from "react";
import RegisterSubastaMolecule from "../molecules/RegisterSubastaMolecule";
import { useSubastaContext } from "../../context/SubastaContext";
import { ModalFormXl } from "../organisms/ModalFormXl";

function FormSubasta ({ open, onClose, title, titleBtn, mode }) {
  const { cerrarModal, setCerrarModal } = useSubastaContext()
  useEffect(() => {
    if (cerrarModal) {
      onClose();
      setCerrarModal(false);
    }
  }, [cerrarModal, onClose, setCerrarModal]);

  return (
    <>
      <ModalFormXl open={open} onClose={onClose} title={title}>
        <RegisterSubastaMolecule onClose={onClose} mode={mode} titleBtn={titleBtn} />
      </ModalFormXl>
    </>
  );
};

export default FormSubasta