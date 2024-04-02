import React from "react";
import SubastaFormMolecule from "../molecules/SubastaFormMolecule";
import LinkAtom from "../atoms/LinkAtom";

function SubastaFormPageOrganism() {
  return (
    <div className="bg-blanco py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <h1 className="text-center text-3xl font-bold">Crear subasta</h1>
        <SubastaFormMolecule />
        <p className="text-grisMedio3 dark:text-gray-400 text-xs">
          ¿No quieres crear una subasta?
          <LinkAtom to="/">Volver</LinkAtom>
        </p>
      </div>
    </div>
  );
}

export default SubastaFormPageOrganism;
