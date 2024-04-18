import React from "react";
import RegisterFormMolecule from "../molecules/RegisterFormMolecule";
import ButtonVolverAtom from "../atoms/ButtonVolverAtom";

const RegisterPageOrganism = ({ onClose, mode, userId, }) => {
  return (
    <>
      <RegisterFormMolecule onClose={onClose} mode={mode} userId={userId} />
      <ButtonVolverAtom />
    </>
  );
};

export default RegisterPageOrganism;
