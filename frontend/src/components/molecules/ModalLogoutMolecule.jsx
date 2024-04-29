import React, { useState } from "react";
import ModalDeInterrogacion from "./ModalInterroMolecule";
import LinkButtonAtom from "../atoms/LinkButtonAtom";
import { Button } from "@nextui-org/react";

function ModalLogoutMolecule() {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const storedUser = localStorage.getItem("user");
  const users = storedUser ? JSON.parse(storedUser) : null;

  const handleCerrarSesion = () => {
    setMostrarAviso(!mostrarAviso);
  };

  return (
    <div className="bg-white rounded-xl flex flex-col justify-center items-center w-52 border border-grisOscuro shadow-md p-2 text-sm gap-y-2">
      <LinkButtonAtom to={`/profile/${users.pk_cedula_user}`}>
        Perfil
      </LinkButtonAtom>
      <Button
        className="bg-red-600 text-white hover:bg-red-500 w-full rounded-lg flex justify-center items-center"
        onClick={handleCerrarSesion}
      >
        Cerrar sesión
      </Button>
      {mostrarAviso && (
        <ModalDeInterrogacion onClose={() => setMostrarAviso(false)} />
      )}
    </div>
  );
}

export default ModalLogoutMolecule;
