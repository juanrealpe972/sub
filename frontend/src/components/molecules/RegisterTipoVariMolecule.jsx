import React, { useRef, useEffect } from "react";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import TitleForModal from "../atoms/TitleForModal";
import toast from "react-hot-toast";
import { icono } from "../atoms/IconsAtom";
import { Button } from "@nextui-org/react";

const RegisterTipoVariMolecule = ({ mode, initialData, handleSubmit, actionLabel }) => {
  const nombreTipoVariRef = useRef(null);

  useEffect(() => {
    if (mode === "update" && initialData) {
      try {
        console.log(initialData);

        nombreTipoVariRef.current.value = initialData.nombre_tipo_vari;
      } catch (error) {
        console.error("Error fetching tipo de variedad data:", error);
        toast.error("Error al cargar datos del tipo de variedad");
      }
    }
  }, [mode, initialData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        nombre_tipo_vari: nombreTipoVariRef.current.value,
      };
      handleSubmit(data, e);
    } catch (error) {
      console.log(error);
      toast.error("Error en el servidor " + error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-4">
      <TitleForModal>
        {mode === "update" ? "Actualizar Tipo de Variedad" : "Registrar Tipo de Variedad"}
      </TitleForModal>
      <InputWithIconAtom
        icon={icono.iconoBuscar}
        placeholder="Nombre del Tipo de Variedad"
        required
        type="text"
        ref={nombreTipoVariRef}
      />
      <center>
        <Button type="submit" color="primary">
          {actionLabel}
        </Button>
      </center>
    </form>
  );
};

export default RegisterTipoVariMolecule;
