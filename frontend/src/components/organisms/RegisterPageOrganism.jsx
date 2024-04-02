import React from "react";
import LinkAtom from "../atoms/LinkAtom";
import RegisterFormMolecule from "../molecules/RegisterFormMolecule";

const RegisterPageOrganism = () => {
  return (
    <div className="bg-blanco py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <h1 className="text-center text-3xl font-bold">Registrarse</h1>
        <RegisterFormMolecule />
        <p className="text-grisMedio3 dark:text-gray-400 text-xs">
          ¿Ya tienes una cuenta?
          <LinkAtom to="/">Iniciar sesión</LinkAtom>
        </p>
      </div>
    </div>
  );
};

export default RegisterPageOrganism;
