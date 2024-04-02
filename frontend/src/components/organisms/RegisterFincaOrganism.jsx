import React from "react";
import LinkAtom from "../atoms/LinkAtom";
import ModalFincaMolecule from "../molecules/ModalFincaMolecule";
import TitleForModal from "../atoms/TitleForModal";
import ButtonVolverAtom from "../atoms/ButtonVolverAtom";

function RegisterFincaOrganism() {
  return (
    <>
      <TitleForModal>Registrar finca</TitleForModal>
      <ModalFincaMolecule />
      <ButtonVolverAtom>
        ¿No quieres crear una finca?
        <LinkAtom to="/">Volver</LinkAtom>
      </ButtonVolverAtom>
    </>
  );
}

export default RegisterFincaOrganism;
