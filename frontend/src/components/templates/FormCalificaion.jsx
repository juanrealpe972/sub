import React, { useEffect } from "react";
import { ModalForm } from "../organisms/ModalForm";
import { useDepartContext } from "../../context/DeparContext";
import Calificaciones from "../organisms/Calificaciones";

function FormCalificaion ({ open, onClose, title, titleBtn }) {
  const { cerrarModal, serCerrarModal } = useDepartContext();

  useEffect(() => {
    if (cerrarModal) {
      onClose();
      serCerrarModal(false);
    }
  }, [cerrarModal, onClose, serCerrarModal]);
  
  return (
    <>
      <ModalForm open={open} onClose={onClose} title={title} >
        <Calificaciones titleBtn={titleBtn} />
      </ModalForm>
    </>
  );
};

export default FormCalificaion