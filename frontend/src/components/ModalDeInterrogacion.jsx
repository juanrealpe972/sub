import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ModalDeInterrogacion() {
  const { logout } = useAuth();

  return (
    <div className="bg-white rounded-xl flex flex-col justify-center items-center w-44 border shadow-md p-2 text-sm">
      <AiOutlineInfoCircle className="text-red-500 mb-2 w-32 h-32" />
      <p className="mb-4">¿Estás seguro?</p>
      <Link
        to="/"
        onClick={() => {
          logout();
        }}
        className="bg-red-500 text-white hover:bg-red-600 p-2 rounded w-full text-center"
      >
        Cerrar Sesión
      </Link>
    </div>
  );
}

export default ModalDeInterrogacion;
