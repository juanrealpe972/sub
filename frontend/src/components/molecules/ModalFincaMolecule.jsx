import React, { useState } from "react";
import ButtonAtom from "../atoms/ButtonAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import TextTareaAtom from "../atoms/TextTareaAtom"; 
import { icono } from "../atoms/IconsAtom";

const ModalFincaMolecule = () => {
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
        <InputWithIconAtom
          icon={icono}
          type="text"
          id="nombreFinca"
          name="nombreFinca"
          value={nombreFinca}
          onChange={(e) => setNombreFinca(e.target.value)}
          placeholder="Nombre de la Finca"
        />
        <InputWithIconAtom
          icon={icono}
          type="text"
          id="direccion"
          name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Dirección"
        />
        <div className="grid grid-cols-2 gap-4">
          <InputWithIconAtom
            icon={icono}
            type="text"
            id="municipio"
            name="municipio"
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            placeholder="Municipio"
          />
          <InputWithIconAtom
            icon={icono}
            type="text"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            placeholder="Departamento"
          />
        </div>
        <InputWithIconAtom
          icon={icono}
          type="file"
          id="imagen"
          name="imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.files[0])}
          placeholder="Imagen"
        />
        <TextTareaAtom
          icon={icono}
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        >Descripcion</TextTareaAtom>
        <ButtonAtom type="submit">Crear Finca</ButtonAtom>
      </form>
    </div>
  );
};

export default ModalFincaMolecule;
