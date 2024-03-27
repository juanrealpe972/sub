import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

function ModalDeInterrogacion() {
  const handleClose = () => {
    alert("Sesión cerrada con éxito");
  };

  return (
    <div className="bg-white rounded-xl flex flex-col justify-center items-center w-44 border shadow-md p-2 text-sm">
      <AiOutlineInfoCircle className="text-red-500 mb-2 w-32 h-32" />
      <p className="mb-4">¿Estás seguro?</p>
      <button
        onClick={handleClose}
        className="bg-red-500 text-white hover:bg-red-600 p-2 rounded w-full text-center"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default ModalDeInterrogacion;