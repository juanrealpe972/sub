import React, { useEffect } from "react";
import {
  Button,
  Image,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useSubastaContext } from "../context/SubastaContext";

function ModalSubasta({ onClose }) {
  const { getSub, subasta, idSubasta } = useSubastaContext();
  const navigate = useNavigate();

  console.log();

  useEffect(() => {
    getSub(idSubasta);
  }, []);

  const calcularDiferencia = (fechaInicio, fechaFin) => {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    const diferenciaMs = fin - inicio;

    const segundos = Math.floor((diferenciaMs / 1000) % 60);
    const minutos = Math.floor((diferenciaMs / 1000 / 60) % 60);
    const horas = Math.floor((diferenciaMs / 1000 / 60 / 60) % 24);
    const dias = Math.floor(diferenciaMs / 1000 / 60 / 60 / 24);

    return `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  };

  const diferencia = calcularDiferencia(
    subasta.fecha_inicio_sub,
    subasta.fecha_fin_sub
  );

  return (
    <div>
      <ModalHeader className="flex justify-center">
        <h1 className="text-center text-3xl font-bold">
          {subasta.pk_id_sub} - {subasta.nombre_tipo_vari}
        </h1>
      </ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex flex-col gap-2">
            <Image
              radius="md"
              shadow="sm"
              alt={subasta.imagen_sub}
              className="object-cover w-[400px] h-[270px]"
              src={`http://localhost:4000/img/subasta/${subasta.imagen_sub}`}
            />
          </div>
          <div className="shadow text-sm rounded-lg w-80">
            <div className="bg-[#009100] p-2 rounded-t-lg">
              <p className="text-xl text-white font-semibold text-center">
                Datos de la subasta
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#a1653d]">
                Fecha fin de la subasta:
              </p>
              <p className="text-[#009100] font-semibold text-[16px] -mt-1">
                {diferencia}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-2 py-2 px-2">
              <div className="items-end flex flex-col ">
                <p className="font-semibold">Apertura:</p>
                <p className="font-semibold">Cierre:</p>
                <p className="font-semibold">Ubicación:</p>
                <p className="font-semibold">Cantidad:</p>
                <p className="font-semibold">Tipo Variedad:</p>
                <p className="font-semibold">Certificado:</p>
                <p className="font-semibold">Descripción:</p>
              </div>
              <div>
                <p>
                  {new Date(subasta.fecha_inicio_sub).toLocaleString("es-ES", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                  })}
                </p>
                <p>
                  {new Date(subasta.fecha_fin_sub).toLocaleString("es-ES", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                  })}
                </p>
                <p>
                  {subasta.nombre_vere} - {subasta.nombre_muni} -
                  {subasta.nombre_depar}
                </p>
                <p>
                  {subasta.cantidad_sub}
                  {subasta.unidad_peso_sub > 1
                    ? subasta.unidad_peso_sub + "s"
                    : subasta.unidad_peso_sub}
                </p>
                <p>{subasta.nombre_tipo_vari}</p>
                <p className="underline cursor-pointer">
                  {subasta.certificado_sub}
                </p>
                <p>{subasta.descripcion_sub}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#a1653d]">PRECIO BASE:</p>
              <p className="text-[#009100] font-semibold text-lg -mt-2">
                ${Number(subasta.precio_inicial_sub).toLocaleString("es-ES")}
              </p>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="flex justify-center">
        <Button onClick={() => onClose()}>Salir</Button>
        <Button type="submit" className="bg-gray-600 text-white" onClick={() => navigate(`/subasta/${subasta.pk_id_sub}`)}>
          Ingresar a la puja
        </Button>
      </ModalFooter>
    </div>
  );
}

export default ModalSubasta;
