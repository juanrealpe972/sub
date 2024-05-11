import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterDepartMolecule from "../molecules/RegisterDepartMolecule";

function FormDepartamento ({ open, onClose, title, onCloseModal, titleBtn, idDepar, mode }) {
  return (
    <>
      <ModalForm open={open} onClose={onClose} title={title} >
        <RegisterDepartMolecule idDepar={idDepar} onCloseModal={onCloseModal} mode={mode} titleBtn={titleBtn} />
      </ModalForm>
    </>
  );
};

export default FormDepartamento