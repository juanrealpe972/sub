import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";

import ButtonAtom from "../atoms/ButtonAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import TextTareaAtom from "../atoms/TextTareaAtom";
import TitleForModal from "../atoms/TitleForModal";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { SelectorIcon } from "../../nextui/SelectorIcon"

const RegisterSubastaMolecule = ({ mode, initialData, handleSubmit, actionLabel }) => {
    const fechaInicialRef = useRef(null);
    const fechaFinalRef = useRef(null);
    const cantidadRef = useRef(null);
    const precioInicialRef = useRef(null);
    const imagenRef = useRef(null);
    const certificadoRef = useRef(null);
    const tipoVariedadRef = useRef(null);
    const descripcionRef = useRef(null);
    const [unidadPeso, setUnidadPeso] = useState("Libra");

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("fecha_inicio_sub", fechaInicialRef.current.value);
            formData.append("fecha_fin_sub", fechaFinalRef.current.value);
            formData.append("precio_inicial_sub", precioInicialRef.current.value);
            formData.append("unidad_peso_sub", unidadPeso);
            formData.append("cantidad_sub", cantidadRef.current.value);
            formData.append("imagen_sub", imagenRef.current.files[0]);
            formData.append("certificado_sub", certificadoRef.current.files[0]);
            formData.append("descripcion_sub", descripcionRef.current.value);
            formData.append("fk_variedad", tipoVariedadRef.current.value);

            // Enviar formData al handleSubmit
            handleSubmit(formData);
        } catch (error) {
            toast.error("Error en el sistema: " + error.message);
        }
    };

    const unidadesPeso = [
        { value: "Libra", label: "Libra" },
        { value: "Gramo", label: "Gramo" },
        { value: "Kilogramo", label: "Kilogramo" },
        { value: "Tonelada", label: "Tonelada" },
    ];

    return (
        <form onSubmit={onSubmit} className="space-y-4 p-4">
            <TitleForModal>
                {mode === "update" ? "Actualizar Subasta" : "Registrar Subasta"}
            </TitleForModal>
            <div className="grid grid-cols-2">
                <InputWithIconAtom
                    icon={icono.iconoFecha}
                    placeholder="Fecha inicial"
                    required
                    type="date"
                    ref={fechaInicialRef}
                />
                <InputWithIconAtom
                    icon={icono.iconoDateDay}
                    placeholder="Fecha final"
                    required
                    type="date"
                    ref={fechaFinalRef}
                />
            </div>
            <div className="grid grid-cols-2 ">
                <InputWithIconAtom
                    icon={icono.iconoPrice}
                    placeholder="Precio Inicial"
                    required
                    type="number"
                    ref={precioInicialRef}
                />
                <Select
                    label=" "
                    className="max-w-xs h-8"
                    radius="sm"
                    variant="bordered"
                    labelPlacement="outside-left"
                    placeholder="Unidad de peso"
                    disableSelectorIconRotation
                    selectorIcon={<SelectorIcon />}
                >
                    {unidadesPeso.map((unidad) => (
                        <SelectItem key={unidad.value} value={unidad.value}>
                            {unidad.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className="grid grid-cols-2">
                <InputWithIconAtom
                    icon={icono.iconoQuantity}
                    placeholder="Cantidad"
                    required
                    type="number"
                    ref={cantidadRef}
                />
                <InputWithIconAtom
                    icon={icono.iconoPush}
                    placeholder="Imagen del producto"
                    required
                    type="file"
                    ref={imagenRef}
                />
            </div>
            <div className="grid grid-cols-2">
                <InputWithIconAtom
                    icon={icono.iconoPush}
                    placeholder="Imagen del producto"
                    required
                    type="file"
                    ref={imagenRef}
                />
                <InputWithIconAtom
                    icon={icono.iconoType}
                    placeholder="Tipo de variedad"
                    required
                    type="text"
                    ref={tipoVariedadRef}
                />
            </div>
            <TextTareaAtom
                icon={icono.iconoDescript}
                placeholder="Descripción"
                ref={descripcionRef}
            />
            <center>
                <Button type="submit" color="primary">
                    {actionLabel}
                </Button>
            </center>
        </form>
    );
};

export default RegisterSubastaMolecule;
