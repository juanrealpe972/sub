import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Image, Button, Input } from "@nextui-org/react";
import { useSubastaContext } from "../context/SubastaContext";
import EstrellaLlena from "../nextui/EstrellaLlena";
import EstrellaMediaLlena from "../nextui/EstrellaMediaLlena";
import EstrellaVacia from "../nextui/EstrellaVacia";

function SubastaUser() {
  const { id } = useParams();
  const [oferta, setOferta] = useState("");
  const { getSub, subasta } = useSubastaContext();
  // const [time, setTime] = useState(new Date());

  useEffect(() => {
    getSub(id);
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);
  // const formatTime = (date) => {
  //   return date.toLocaleTimeString();
  // };

  {/* <div>
    <h2>Hora Actual: {formatTime(time)}</h2>
  </div> */}

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

  const diferencia = calcularDiferencia(subasta.fecha_inicio_sub, subasta.fecha_fin_sub);

  const handleSubmitOferta = async () => {
    // Aquí puedes enviar la oferta al servidor
    console.log("Oferta:", oferta);
  };

  const handlePostulantesClick = () => {
    // Maneja la acción de ver los postulantes
  };

  return (
    <div className="bg-gray-100 p-4">
      <p className="font-bold p-1 text-xl items-center flex">
        {subasta.pk_id_sub} - {subasta.nombre_tipo_vari}
        <span className="text-xs mx-4 p-1 rounded-lg bg-[#009100] text-[#e0e0e0]">{subasta.estado_sub}</span>
      </p>
      <div className="flex gap-3 w-full">
        <div className="bg-[#e0e0e0] rounded-xl w-full p-4">
          <div className="grid gap-1">
            <div className="flex flex-col gap-2">
              <Image
                radius="md"
                shadow="sm"
                alt={subasta.imagen_sub}
                className="object-cover w-[400px] h-[210px]"
                src={`http://localhost:4000/img/subasta/${subasta.imagen_sub}`}
              />
            </div>
            <div className="shadow text-sm rounded-lg py-1">
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
                  <p>{new Date(subasta.fecha_inicio_sub).toLocaleString( "es-ES", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })} </p>
                  <p>{new Date(subasta.fecha_fin_sub).toLocaleString("es-ES", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })} </p>
                  <p>{subasta.nombre_vere} - {subasta.nombre_muni} - {subasta.nombre_depar} </p>
                  <p>{subasta.cantidad_sub} {subasta.unidad_peso_sub > 1 ? (subasta.unidad_peso_sub + 's') : subasta.unidad_peso_sub}</p>
                  <p>{subasta.nombre_tipo_vari}</p>
                  <p className="underline cursor-pointer">{subasta.certificado_sub}</p>
                  <p>{subasta.descripcion_sub}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-[#a1653d]">PRECIO BASE:</p>
                <p className="text-[#009100] font-semibold text-lg -mt-2">${Number(subasta.precio_inicial_sub).toLocaleString('es-ES')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-[#e0e0e0] h-[460px] rounded-xl p-4">
            <h3 className="text-lg font-semibold text-center">Ofertas</h3>
            <div>
              <p>Juan - 80000</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 bg-[#e0e0e0] rounded-xl p-4 mt-2">
            <Input
              type="number"
              value={oferta}
              onChange={(e) => setOferta(e.target.value)}
              placeholder="Ingrese su oferta"
            />
            <Button onClick={handleSubmitOferta}>Realizar Oferta</Button>
          </div>
        </div>
        <div className="grid">
          <div className="bg-[#e0e0e0] w-64 rounded-xl p-4 items-center flex flex-col">
            <h3 className="text-lg font-semibold">Vendedor</h3>
            <Avatar
              src={
                subasta.imagen_user && subasta.imagen_user.length > 0
                ? `http://localhost:4000/img/${subasta.imagen_user}`
                : "http://localhost:4000/usuarios/imagen_de_usuario.webp"
              }
              className="w-28 h-28"
              />
            <p className="text-center">{subasta.nombre_user}</p>
            <p className="text-center">{subasta.email_user}</p>
            <p className="text-center">{subasta.telefono_user}</p>
            <p className="text-[#a1653d]">Calificación del usuario</p>
            <span class="icon-[material-symbols--star-outline-rounded]"></span>
            <div className="flex">
              <span><EstrellaLlena /></span>
              <span><EstrellaLlena /></span>
              <span><EstrellaLlena /></span>
              <span><EstrellaMediaLlena /></span>
              <span><EstrellaVacia /></span>
            </div>
          </div>
          <div className="mt-2 flex h-60 bg-gray-100 gap-x-4">
            <div className="bg-[#e0e0e0] rounded-xl w-64 p-4 flex-col gap-4 flex justify-center">
              <h3 className="text-lg font-semibold text-center">Postulantes</h3>
              <Button onClick={handlePostulantesClick} className="text-white bg-red-600">Salir de la subasta</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubastaUser;
