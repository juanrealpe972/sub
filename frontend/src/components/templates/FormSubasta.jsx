import React, { useEffect } from "react";
import RegisterSubastaMolecule from "../molecules/RegisterSubastaMolecule";
import { useSubastaContext } from "../../context/SubastaContext";
import { ModalFormXl } from "../organisms/ModalFormXl";

function FormSubasta ({ open, onClose, title, titleBtn, mode }) {
<<<<<<< HEAD
  const { cerrarModal, serCerrarModal } = useSubastaContext()
=======
  const { cerrarModal, setCerrarModal } = useSubastaContext()
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
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