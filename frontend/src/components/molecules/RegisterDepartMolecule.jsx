import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { icono } from "../atoms/IconsAtom";
import { Button, Input, ModalFooter } from "@nextui-org/react";
import DeparContext from "../../context/DeparContext";

const RegisterDepartMolecule = ({ mode, idDepar, titleBtn, onCloseModal }) => {
  const [formData, setFormData] = useState({
    pk_codigo_depar: "",
    nombre_depar: "",
  });
  const { createDepartamento, updateDepartamento } = useContext(DeparContext);

  useEffect(() => {
    if (mode === "update" && idDepar) {
      setFormData({
        pk_codigo_depar: idDepar.pk_codigo_depar,
        nombre_depar: idDepar.nombre_depar,
      });
    }
  }, [mode, idDepar]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "update") {
        await updateDepartamento(idDepar.pk_codigo_depar, formData);
      } else {
        await createDepartamento(formData);
      }
      onCloseModal()
    } catch (error) {
      console.error(error);
      toast.error("Error en el servidor: " + error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 px-4">
      <Input
        type="number"
        name="pk_codigo_depar"
        placeholder="Código del Departamento"
        labelPlacement="outside"
        startContent={<icono.iconoNumber />}
        variant="bordered"
        min={0}
        required={true}
        value={formData.pk_codigo_depar}
        onChange={handleChange}
      />
      <Input
        name="nombre_depar"
        labelPlacement="outside"
        startContent={<icono.iconoDepar />}
        variant="bordered"
        required={true}
        type="text"
        placeholder="Nombre del Departamento"
        value={formData.nombre_depar}
        onChange={handleChange}
      />
      <ModalFooter className="flex justify-center">
        <Button type="submit" className="bg-gray-600 text-white">
          {titleBtn}
        </Button>
      </ModalFooter>
    </form>
  );
};

export default RegisterDepartMolecule;
