import React from "react";
import LinkAtom from "../atoms/LinkAtom";
import RegisterFormMolecule from "../molecules/RegisterFormMolecule";
import TitleForModal from "../atoms/TitleForModal";
import ButtonVolverAtom from "../atoms/ButtonVolverAtom";

const RegisterPageOrganism = () => {
  return (
    <>
      <TitleForModal>Registrarse</TitleForModal>
      <RegisterFormMolecule />
      <ButtonVolverAtom>
        ¿Ya tienes una cuenta?
        <LinkAtom to="/">Iniciar sesión</LinkAtom>
      </ButtonVolverAtom>
    </>
  );
};

export default RegisterPageOrganism;
