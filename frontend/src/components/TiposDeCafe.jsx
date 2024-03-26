import React from "react";
import { FaReact } from "react-icons/fa";

function TiposDeCafe() {
  const datos = [
    {
      title: "Tipo seco",
      img: "cafeseco.jpeg",
    },
    {
      title: "Tipo mojado",
      img: "imagen_mojado.jpg",
    },
    {
      title: "Tipo Molido",
      img: "imagen_molido.jpg",
    },
    {
      title: "Tipo Molido Grueso",
      img: "imagen_molido_grueso.jpg",
    },
    {
      title: "Tipo Molido Delgado",
      img: "imagen_molido_delgado.jpg",
    },
    {
      title: "Tipo Tostado",
      img: "imagen_tostado.jpg",
    },
    {
      title: "Tipo Tostado Suave",
      img: "imagen_tostado_suave.jpg",
    },
    {
      title: "Tipo Tostado Medio",
      img: "imagen_tostado_medio.jpg",
    },
    {
      title: "Tipo Tostado Oscuro",
      img: "imagen_tostado_oscuro.jpg",
    },
  ];

  return (
    <div
      className="flex justify-center w-full space-x-6 p-6 overflow-x-auto pl-56"
      style={{ scrollbarWidth: "none" }}
    >
      {datos.map((dato, i) => (
        <div
          key={i}
          className="bg-blue-400 text-white rounded-lg p-4 h-52 transition-all duration-300 hover:scale-105"
        >
          <h2 className="font-semibold text-sm text-center w-28">
            {dato.title}
          </h2>
          <div
            className="bg-cover mt-4"
            style={{ backgroundImage: `url(./src/assets/${dato.img})` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default TiposDeCafe;
