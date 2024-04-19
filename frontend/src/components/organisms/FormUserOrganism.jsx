import React from "react";
import { AccodalAcciones } from "./AccodalAcciones";
import RegisterUser from "../molecules/RegisterUser"

function FormUserOrganism ({ open, onClose, handleSubmit, actionLabel, initialData, mode }) {
  return (
    <>
      <AccodalAcciones open={open} onClose={onClose}>
        <RegisterUser initialData={initialData} mode={mode} handleSubmit={handleSubmit} actionLabel={actionLabel} />
      </AccodalAcciones>
    </>
  );
};

export default FormUserOrganism