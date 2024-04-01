import React from "react";
import LinkAtom from "../atoms/LinkAtom";
import ModalFincaMolecule from "../molecules/ModalFincaMolecule";

function RegisterFincaOrganism() {
  return (
    <div className="bg-blanco py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <h1 className="text-center text-3xl font-bold">Registrar Finca</h1>
        <ModalFincaMolecule />
        <p className="text-grisMedio3 dark:text-gray-400 text-xs">
          ¿No quieres crear una finca?
          <LinkAtom to="/login">Volver</LinkAtom>
        </p>
      </div>
    </div>
  );
}

export default RegisterFincaOrganism;
