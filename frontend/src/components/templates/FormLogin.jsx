import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import LoginFormMolecule from "../molecules/LoginFormMolecule";

function FormLogin({ open, onClose, handleSubmit }) {
  return (
    <div>
      <ModalForm open={open} onClose={onClose} >
        <LoginFormMolecule handleSubmit={handleSubmit} />
      </ModalForm>
    </div>
  );
}

export default FormLogin;
