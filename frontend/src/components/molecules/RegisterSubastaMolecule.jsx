import React, { useRef } from "react";
import { toast } from "react-hot-toast";

import ButtonAtom from "../atoms/ButtonAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import TextTareaAtom from "../atoms/TextTareaAtom";
import TitleForModal from "../atoms/TitleForModal";
// import { DateRangePicker } from "@nextui-org/react";
import { parseZonedDateTime } from "@internationalized/date";

const RegisterSubastaMolecule = ({ mode, initialData, handleSubmit, actionLabel }) => {

    const fechaInicialRef = useRef(null);
    const fechaFinalRef = useRef(null);
    const cantidadRef = useRef(null);
    const precioInicialRef = useRef(null);
    const imagenRef = useRef(null);
    const certificadoRef = useRef(null);
    const tipoVariedadRef = useRef(null);
    const descripcionRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("fecha_inicio_sub", fechaInicialRef.current.value);
            formData.append("fecha_fin_sub", fechaFinalRef.current.value);
            formData.append("precio_inicial_sub", precioInicialRef.current.value);
            formData.append("unidad_peso_sub", precioInicialRef.current.value);
            formData.append("cantidad_sub", cantidadRef.current.value);
            formData.append("imagen_sub", imagenRef.current.files[0]);
            formData.append("certificado_sub", certificadoRef.current.files[0]);
            formData.append("descripcion_sub", descripcionRef.current.value);
            formData.append("fk_variedad", tipoVariedadRef.current.value);

        } catch (error) {
            toast.error("Error en el sistema: " + error.message);
        }
    };

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
            {/* <div className="w-full max-w-xl flex flex-row gap-4">
                <DateRangePicker
                    label="Event duration"
                    hideTimeZone
                    visibleMonths={2}
                    defaultValue={{
                        start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
                        end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
                    }}
                />
            </div> */}
            <div className="grid grid-cols-2 gap-x-2">
                <InputWithIconAtom
                    icon={icono.iconoQuantity}
                    placeholder="Cantidad"
                    required
                    type="number"
                    ref={cantidadRef}
                />
                <InputWithIconAtom
                    icon={icono.iconoPrice}
                    placeholder="Precio Inicial"
                    required
                    type="number"
                    ref={precioInicialRef}
                />
            </div>
            <InputWithIconAtom
                icon={icono.iconoPush}
                placeholder="Imagen del producto"
                required
                type="file"
                ref={imagenRef}
            />
            <div className="grid grid-cols-2">
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
                <ButtonAtom type="submit">Crear subasta</ButtonAtom>
            </center>
        </form>
    );
};

export default RegisterSubastaMolecule;
