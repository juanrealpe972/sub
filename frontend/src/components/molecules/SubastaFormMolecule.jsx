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
        icon={icono.iconoGmail}
        id="nombreSubasta"
        name="nombreSubasta"
        placeholder="Nombre de la Subasta"
        required
        type="text"
        value={nombreSubasta}
        onChange={(e) => setNombreSubasta(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="fechaInicial"
        name="fechaInicial"
        placeholder="Fecha inicial"
        required
        type="date"
        value={fechaInicial}
        onChange={(e) => setFechaInicial(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="fechaFinal"
        name="fechaFinal"
        placeholder="Fecha final"
        required
        type="date"
        value={fechaFinal}
        onChange={(e) => setFechaFinal(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="precioInicial"
        name="precioInicial"
        placeholder="Precio Inicial"
        required
        type="number"
        value={precioInicial}
        onChange={(e) => setPrecioInicial(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="imagen"
        name="imagen"
        placeholder="Imagen del producto"
        required
        type="file"
        value={imagen}
        onChange={(e) => setImagen(e.target.files[0])}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="tipoVariedad"
        name="tipoVariedad"
        placeholder="Tipo de la variedad"
        required
        type="text"
        value={tipoVariedad}
        onChange={(e) => setTipoVariedad(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="puntuacionCafe"
        name="puntuacionCafe"
        placeholder="Puntuación del café"
        required
        type="number"
        value={puntuacionCafe}
        onChange={(e) => setPuntuacionCafe(e.target.value)}
      />
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="cantidad"
        name="cantidad"
        placeholder="Camtidad del producto"
        required
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      {/* <TextTareaAtom
        icon={icono.iconoGmail}
        id="descripcion"
        name="descripcion"
        descripcion
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      >
        Descripcion
      </TextTareaAtom> */}
      <center>
        <ButtonAtom type="submit">Crear subasta</ButtonAtom>
      </center>
    </form>
  );
}

export default SubastaFormMolecule;
