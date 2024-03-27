import React from "react";
import { Link } from "react-router-dom";

function ModalCerrarSesion() {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-center items-center w-44 border shadow-md p-2 text-sm">
      <Link to="/profile" className="hover:bg-slate-200 p-2 rounded hover:text-green-600 w-full text-center">Perfil</Link>
      <button className="hover:bg-slate-200 p-2 rounded hover:text-green-600 w-full text-center">Cerrar sesión</button>
    </div>
  );
}

export default ModalCerrarSesion;
