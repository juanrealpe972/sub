import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterFincaMolecule from "../molecules/RegisterFincaMolecule";

function FormFinca ({ open, onClose, title, handleSubmit, actionLabel, initialData, mode }) {
  return (
    <>
      <ModalForm open={open} onClose={onClose}>
        <RegisterFincaMolecule initialData={initialData} title={title} mode={mode} handleSubmit={handleSubmit} actionLabel={actionLabel} />
      </ModalForm>
    </>
  );
};

export default FormFinca