import React from "react";
import { useSubasta } from "../context/SubastaContext";
import { useNavigate } from "react-router-dom";

function SubastaCard({ subasta }) {
  const { deleteSubasta } = useSubasta();
  const navigate = useNavigate();

  // Datos de las subastas
  const Subastas = [
    {
      title: "Subasta Esmeralda",
      description:
        "Esta variedad de café, cultivada en las montañas de Huila, ofrece notas de cacao y frutas maduras. Su sabor es suave y equilibrado.",
      link: "/subasta/esmeralda",
      img: "./src/assets/nueuser_1.jfif",
      status: 1,
      createAT: "2024-03-01",
      id: 1,
    },
    {
      title: "Café Andino",
      description:
        "Producido en las laderas de la cordillera, el Café Andino tiene un cuerpo completo con matices de nuez y caramelo. Ideal para los amantes del café fuerte.",
      link: "/subasta/andino",
      img: "./src/assets/nueuser_2.jfif",
      status: 0,
      createAT: "2024-02-28",
      id: 2,
    },
    {
      title: "Geisha Dorada",
      description:
        "La variedad Geisha, con sus flores doradas, produce granos excepcionales con sabores florales y afrutados. Una joya para los paladares más exigentes.",
      link: "/subasta/geisha",
      img: "./src/assets/nueuser_3.jfif",
      status: 1,
      createAT: "2024-02-27",
      id: 3,
    },
  ];

  return (
    <div className="grid grid-flow-col space-x-6">
      {Subastas.map((subasta) => (
        <div
          key={subasta.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
        >
          <h2 className="text-xl font-semibold mb-2">{subasta.title}</h2>
          <p className="text-gray-700 mb-4">{subasta.description}</p>
          <span className="text-sm text-gray-500">
            Estado: {subasta.status === 1 ? "Activa" : "Inactiva"}
          </span>
          <span className="text-sm text-gray-500 block mb-2">
            Creada el: {subasta.createAT}
          </span>
          <button
            onClick={() => deleteSubasta(subasta.id)}
            className="px-2 py-1 bg-red-600 text-white rounded-lg mr-2"
          >
            Eliminar
          </button>
          <button
            onClick={() => navigate(`/editmess/${subasta.id}`)}
            className="px-2 py-1 bg-blue-500 text-white rounded-lg"
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}

export default SubastaCard;
