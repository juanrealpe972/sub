import React from "react";
import LinkAtom from "../atoms/LinkAtom";
import LoginFormMolecule from "../molecules/LoginFormMolecule";
import TitleForModal from "../atoms/TitleForModal";
import ButtonVolverAtom from "../atoms/ButtonVolverAtom";

const LoginPageOrganism = ({ onClose }) => {
  return (
    <>
      <TitleForModal>Iniciar sesión</TitleForModal>
      <LoginFormMolecule onClose={onClose} />
      <ButtonVolverAtom>
        ¿No tienes una cuenta?
        <LinkAtom to="/">Registrarse</LinkAtom>
      </ButtonVolverAtom>
    </>
  );
};

export default LoginPageOrganism;
