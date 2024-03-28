import React, { useState } from "react";

function ModalFinca() {
  const [nombreFinca, setNombreFinca] = useState("");
  const [direccion, setDireccion] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Finca creada con éxito");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Finca</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label
            htmlFor="nombreFinca"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de la Finca
          </label>
          <input
            type="text"
            id="nombreFinca"
            value={nombreFinca}
            onChange={(e) => setNombreFinca(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="direccion"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="municipio"
              className="block text-sm font-medium text-gray-700"
            >
              Municipio
            </label>
            <input
              type="text"
              id="municipio"
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="departamento"
              className="block text-sm font-medium text-gray-700"
            >
              Departamento
            </label>
            <input
              type="text"
              id="departamento"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="imagen"
            className="block text-sm font-medium text-gray-700"
          >
            Imagen
          </label>
          <input
            type="file"
            id="imagen"
            onChange={(e) => setImagen(e.target.files[0])}
            className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Crear
        </button>
      </form>
    </div>
  );
}

export default ModalFinca;
