import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterTipoVariMolecule from "../molecules/RegisterTipoVariMolecule"

function FormTipovariedad ({ open, onClose, handleSubmit, title, actionLabel, initialData, mode }) {
  return (
    <>
      <ModalForm open={open} onClose={onClose}>
        <RegisterTipoVariMolecule initialData={initialData} mode={mode} title={title} handleSubmit={handleSubmit} actionLabel={actionLabel} />
      </ModalForm>
    </>
  );
};

export default FormTipovariedad