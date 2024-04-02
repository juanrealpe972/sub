import React from "react";
import SubastaFormMolecule from "../molecules/SubastaFormMolecule";

function SubastaFormPageOrganism() {
  return (
    <div className="bg-blanco py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <h1 className="text-center text-3xl font-bold">Crear subasta</h1>
        <SubastaFormMolecule />

      </div>
    </div>
  );
}

export default SubastaFormPageOrganism;
