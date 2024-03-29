import React from "react";
import LinkAtom from "../../atoms/LinkAtom";
import LoginFormMolecule from "../../molecules/LoginFormMolecule";

const LoginPageOrganism = () => {

  return (
    <div className="bg-blanco py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <h1 className="text-center text-3xl font-bold">Iniciar Sesión</h1>
        <LoginFormMolecule/>
        <p className="text-grisMedio3 dark:text-gray-400 text-xs">
          ¿No tienes una cuenta?
          <LinkAtom to="/register">Crear cuenta</LinkAtom>
        </p>
      </div>
    </div>
  );
};

export default LoginPageOrganism;
