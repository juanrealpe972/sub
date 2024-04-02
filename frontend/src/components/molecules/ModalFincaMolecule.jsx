import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      alert("Finca creada con éxito");
    } catch (error) {
      alert("Error en el sistema" + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputWithIconAtom
        icon={icono.iconoNamePropiedad}
        id="nombreFinca"
        name="nombreFinca"
        placeholder="Nombre de la Finca"
        required
        type="text"
        value={nombreFinca}
        onChange={(e) => setNombreFinca(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoMundo}
        id="direccion"
        name="direccion"
        placeholder="Dirección"
        required
        type="text"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        <InputWithIconAtom
          icon={icono.iconoMunicipio}
          id="municipio"
          name="municipio"
          placeholder="Municipio"
          required
          type="text"
          value={municipio}
          onChange={(e) => setMunicipio(e.target.value)}
        />
        <InputWithIconAtom
          icon={icono.iconoDepartamento}
          id="departamento"
          name="departamento"
          placeholder="Departamento"
          required
          type="text"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        />
      </div>
      <InputWithIconAtom
        icon={icono.iconoPush}
        id="imagen"
        name="imagen"
        placeholder="Imagen"
        required
        type="file"
        value={imagen}
        onChange={(e) => setImagen(e.target.files[0])}
      />
      <TextTareaAtom
        icon={icono.iconoDescript}
        id="descripcion"
        name="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      >
        Descripcion
      </TextTareaAtom>
      <center>
        <ButtonAtom type="submit">Crear Finca</ButtonAtom>
      </center>
    </form>
  );
};

export default ModalFincaMolecule;
