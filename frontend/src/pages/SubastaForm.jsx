import React, { useState } from "react";

const SubastaFormulario = () => {
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [precioInicial, setPrecioInicial] = useState("");
  const [nombreSubasta, setNombreSubasta] = useState("");
  const [imagen, setImagen] = useState("");
  const [tipoVariedad, setTipoVariedad] = useState("");
  const [puntuacionCafe, setPuntuacionCafe] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos del formulario enviados");
  };

  return (
    <div className="bg-white py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-lg space-y-6">
        <form onSubmit={handleSubmit} className="space-y-1">
          <h1 className="text-center text-3xl font-bold">Crear Subasta</h1>
          <div>
            <label
              htmlFor="nombreSubasta"
              className="text-sm font-medium text-gray-700"
            >
              Nombre de la Subasta
            </label>
            <input
              id="nombreSubasta"
              type="text"
              value={nombreSubasta}
              onChange={(e) => setNombreSubasta(e.target.value)}
              className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fechaInicial"
                className="text-sm font-medium text-gray-700"
              >
                Fecha Inicial
              </label>
              <input
                id="fechaInicial"
                type="datetime-local"
                value={fechaInicial}
                onChange={(e) => setFechaInicial(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="fechaFinal"
                className="text-sm font-medium text-gray-700"
              >
                Fecha Final
              </label>
              <input
                id="fechaFinal"
                type="datetime-local"
                value={fechaFinal}
                onChange={(e) => setFechaFinal(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="precioInicial"
                className="text-sm font-medium text-gray-700"
              >
                Precio Inicial
              </label>
              <input
                id="precioInicial"
                type="number"
                value={precioInicial}
                onChange={(e) => setPrecioInicial(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="cantidad"
                className="text-sm font-medium text-gray-700"
              >
                Cantidad
              </label>
              <input
                id="cantidad"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="puntuacionCafe"
                className="text-sm font-medium text-gray-700"
              >
                Puntuación del Café
              </label>
              <input
                id="puntuacionCafe"
                type="number"
                value={puntuacionCafe}
                onChange={(e) => setPuntuacionCafe(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="imagen"
                className="text-sm font-medium text-gray-700"
              >
                Imagen
              </label>
              <input
                id="imagen"
                type="file"
                onChange={(e) => setImagen(e.target.files[0])}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="tipoVariedad"
                className="text-sm font-medium text-gray-700"
              >
                Tipo de Variedad
              </label>
              <input
                id="tipoVariedad"
                type="text"
                value={tipoVariedad}
                onChange={(e) => setTipoVariedad(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="descripcion"
              className="text-sm font-medium text-gray-700"
            >
              Descripción
            </label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear Subasta
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubastaFormulario;
