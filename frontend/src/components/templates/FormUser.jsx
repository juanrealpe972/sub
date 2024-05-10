import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterUser from "../molecules/RegisterUser"

function FormUser ({ open, onClose, title, titleBtn, idUser, mode }) {
  return (
    <>
      <ModalForm open={open} onClose={onClose} title={title}>
        <RegisterUser idUser={idUser} mode={mode} titleBtn={titleBtn} />
      </ModalForm>
    </>
  );
};

export default FormUser