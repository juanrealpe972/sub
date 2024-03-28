
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalDeInterrogacion from "./ModalDeInterrogacion";

function ModalCerrarSesion() {
  const [mostrarAviso, setMostrarAviso] = useState(false);

  const handleCerrarSesion = () => {
    setMostrarAviso(!mostrarAviso);
  };

  return (
    <div className="bg-white rounded-xl flex flex-col justify-center items-center w-44 border shadow-md p-2 text-sm">
      <Link
        to="/profile"
        className="hover:bg-gray-200 p-2 rounded hover:text-green-600 w-full text-center"
      >
        Perfil
      </Link>
      <button
        onClick={handleCerrarSesion}
        className="hover:bg-gray-200 p-2 rounded hover:text-green-600 w-full text-center"
      >
        Cerrar sesión
      </button>
      {mostrarAviso && (
        <ModalDeInterrogacion onClose={() => setMostrarAviso(false)} />
      )}
    </div>
  );
}

export default ModalCerrarSesion;
  