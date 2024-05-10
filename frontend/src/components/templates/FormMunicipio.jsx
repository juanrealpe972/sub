import React from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterMunicipioMolecule from "../molecules/RegisterMunicipioMolecule";

function FormMunicipio ({ open, onClose, title, handleSubmit, actionLabel, initialData, mode }) {
  return (
    <>
      <ModalForm open={open} onClose={onClose}>
        <RegisterMunicipioMolecule initialData={initialData} title={title} mode={mode} handleSubmit={handleSubmit} actionLabel={actionLabel} />
      </ModalForm>
    </>
  );
};

export default FormMunicipio