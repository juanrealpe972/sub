import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ButtonAtom from "../atoms/ButtonAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import TextTareaAtom from "../atoms/TextTareaAtom";

function SubastaFormMolecule() {
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [precioInicial, setPrecioInicial] = useState("");
  const [nombreSubasta, setNombreSubasta] = useState("");
  const [imagen, setImagen] = useState("");
  const [tipoVariedad, setTipoVariedad] = useState("");
  const [puntuacionCafe, setPuntuacionCafe] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();

  const URL = "";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      alert("Error en el sistema" + error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <InputWithIconAtom
        icon={icono.iconoNamePropiedad}
        id="nombreSubasta"
        name="nombreSubasta"
        placeholder="Nombre de la Subasta"
        required
        type="text"
        value={nombreSubasta}
        onChange={(e) => setNombreSubasta(e.target.value)}
      />
      <div className="grid grid-cols-2">
        <InputWithIconAtom
          icon={icono.iconoFecha}
          id="fechaInicial"
          name="fechaInicial"
          placeholder="Fecha inicial"
          required
          type="date"
          value={fechaInicial}
          onChange={(e) => setFechaInicial(e.target.value)}
        />
        <InputWithIconAtom
          icon={icono.iconoDateDay}
          id="fechaFinal"
          name="fechaFinal"
          placeholder="Fecha final"
          required
          type="date"
          value={fechaFinal}
          onChange={(e) => setFechaFinal(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        <InputWithIconAtom
          icon={icono.iconoQuantity}
          id="cantidad"
          name="cantidad"
          placeholder="Cantidad"
          required
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <InputWithIconAtom
          icon={icono.iconoPrice}
          id="precioInicial"
          name="precioInicial"
          placeholder="Precio Inicial"
          required
          type="number"
          value={precioInicial}
          onChange={(e) => setPrecioInicial(e.target.value)}
        />
      </div>
      <InputWithIconAtom
        icon={icono.iconoPush}
        id="imagen"
        name="imagen"
        placeholder="Imagen del producto"
        required
        type="file"
        value={imagen}
        onChange={(e) => setImagen(e.target.files[0])}
      />
      <div className="grid grid-cols-2">
        <InputWithIconAtom
          icon={icono.iconoType}
          id="tipoVariedad"
          name="tipoVariedad"
          placeholder="Tipo de variedad"
          required
          type="text"
          value={tipoVariedad}
          onChange={(e) => setTipoVariedad(e.target.value)}
        />
        <InputWithIconAtom
          icon={icono.iconoValor}
          id="puntuacionCafe"
          name="puntuacionCafe"
          placeholder="Puntuación café"
          required
          type="number"
          value={puntuacionCafe}
          onChange={(e) => setPuntuacionCafe(e.target.value)}
        />
      </div>
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
        <ButtonAtom type="submit">Crear subasta</ButtonAtom>
      </center>
    </form>
  );
}

export default SubastaFormMolecule;
