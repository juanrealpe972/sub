import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterVeredaMolecule from "../molecules/RegisterVeredaMolecule";

function FormVereda ({ open, onClose, title, handleSubmit, actionLabel, initialData, mode }) {
  return (
    <>
      <ModalForm open={open} onClose={onClose}>
        <RegisterVeredaMolecule initialData={initialData} title={title} mode={mode} handleSubmit={handleSubmit} actionLabel={actionLabel} />
      </ModalForm>
    </>
  );
};

export default FormVereda