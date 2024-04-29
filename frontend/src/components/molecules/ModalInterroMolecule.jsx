import React from "react";
import { icono } from "../atoms/IconsAtom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";

function ModalInterroMolecule() {
  const navigator = useNavigate();

  const logoutt = () => {
    localStorage.clear();
    navigator("/");
    toast.success("Cierre de sesión exitoso");
  };

  return (
    <div className="bg-blanco rounded-xl flex flex-col justify-center items-center border-gray-300 w-44 border shadow-md p-2 text-sm m-2">
      <icono.iconoInterrogation className="text-red-600 mb-2 w-32 h-32" />
      <p className="mb-4 text-black font-semibold text-center">
        ¿Estás seguro de cerrar sesión?
      </p>
      <Button
        className="bg-red-600 text-white hover:bg-red-500 w-full rounded-lg"
        onClick={logoutt}
      >
        Cerrar sesión
      </Button>
    </div>
  );
}

export default ModalInterroMolecule;
