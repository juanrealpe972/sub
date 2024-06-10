import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import ImageSlider from "../components/molecules/ImageSlider";
import ModalSubCoffee from "../components/templates/ModalSubCoffee";

import { useSubastaContext } from "../context/SubastaContext";
import { useAuthContext } from "../context/AuthContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SubastaPage() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { getSubsMenoCerradas, subastasActivas, setIdSubasta } = useSubastaContext();
  const { getUsers } = useAuthContext();
  const [abrirModal, setAbrirModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // Índice de la primera subasta visible
  const users = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
=======
  const { getSubsMenoCerradas, subastasActivas, setIdSubasta, desactivarSubs, activarSubs, ProcesoSubs, EsperaSubs } = useSubastaContext();
  const { getUsers } = useAuthContext();
  const [ abrirModal, setAbrirModal ] = useState(false);
  const [ subastas, setSubastas ] = useState([]);

  const users = JSON.parse(localStorage.getItem('user'));

  const calcularTiempoRestante = (inicio, fin) => {
    const diferenciaMs = fin - inicio;
    const segundos = Math.floor((diferenciaMs / 1000) % 60);
    const minutos = Math.floor((diferenciaMs / 1000 / 60) % 60);
    const horas = Math.floor((diferenciaMs / 1000 / 60 / 60) % 24);
    const dias = Math.floor(diferenciaMs / 1000 / 60 / 60 / 24);
    return `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  };

  const calcularDiferencia = (fechaInicio, fechaFin) => {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const ahora = new Date();

    if (ahora < inicio) {
      return `La subasta empezará dentro de ${calcularTiempoRestante(ahora, inicio)}`;
    } else if (ahora > fin) {
      return "Subasta terminada";
    } else {
      const diferenciaMs = fin - ahora;
      const segundos = Math.floor((diferenciaMs / 1000) % 60);
      const minutos = Math.floor((diferenciaMs / 1000 / 60) % 60);
      const horas = Math.floor((diferenciaMs / 1000 / 60 / 60) % 24);
      const dias = Math.floor(diferenciaMs / 1000 / 60 / 60 / 24);

      if (dias === 0 && horas === 0 && minutos < 10) {
        return `A la subasta le quedan ${minutos} minutos y ${segundos} segundos`;
      } else {
        return `La subasta terminará en: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
      }
    }
  };

  useEffect(() => {
    const actualizarEstadosSubastas = async () => {
      for (const subasta of subastasActivas) {
        const { pk_id_sub } = subasta;
        const { pk_cedula_user } = users;

        const tiempo = calcularDiferencia(
          subasta.fecha_inicio_sub,
          subasta.fecha_fin_sub
        );

        if (tiempo.includes("Subasta terminada")) {
          await desactivarSubs(pk_id_sub, pk_cedula_user);
        } else if (tiempo.includes("A la subasta le quedan")) {
          await EsperaSubs(pk_id_sub, pk_cedula_user);
        } else if (tiempo.includes("La subasta terminará en")) {
          await ProcesoSubs(pk_id_sub, pk_cedula_user);
        } else if (tiempo.includes("La subasta empezará dentro de")) {
          await activarSubs(pk_id_sub, pk_cedula_user);
        }
      }
      getSubsMenoCerradas();  // Sirve para refrescar las subastas activas
    };
    const intervalId = setInterval(actualizarEstadosSubastas, 1000);

    return () => clearInterval(intervalId);
  }, [subastasActivas, users]);

  useEffect(() => {
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
    getSubsMenoCerradas();
    getUsers();
  }, []);

  useEffect(() => {
    if (subastasActivas) {
      setSubastas(subastasActivas);
    }
  }, [subastasActivas]);

  const handdleModaSub = (id) => {
    setAbrirModal(true);
    setIdSubasta(id);
  };

<<<<<<< HEAD
  useEffect(() => {
    if (users.rol_user === "admin") navigate('/users');
  }, [users, navigate]);

  const showNextSubastas = () => {
    setStartIndex(startIndex + 1);
  };

  const showPrevSubastas = () => {
    setStartIndex(startIndex - 1);
  };

  return (
    <div className="pb-8">
      <ImageSlider />
      {users.rol_user !== "admin" && (
        <div className="pl-6">
          <p className="pl-4 text-2xl text-[#a1653d] text-center">Subastas</p>
          <div className="flex flex-col overflow-x-auto py-6 overflow-hidden">
            {subastasActivas.length > 0 ? (
              <div className="flex flex-wrap ml-6 gap-x-7">
                {subastasActivas.slice(startIndex, startIndex + 3).map((subasta) => (
                  <Card key={subasta.pk_id_sub} className="max-w-[380px] h-[540px] p-2 mb-4 shadow-small">
=======
  const groupedSubastas = subastas.reduce((acculatorAgrupator, subasta) => {
    if (!acculatorAgrupator[subasta.nombre_tipo_vari]) {
      acculatorAgrupator[subasta.nombre_tipo_vari] = [];
    }
    acculatorAgrupator[subasta.nombre_tipo_vari].push(subasta);
    return acculatorAgrupator;
  }, {});

  useEffect(() => {
    if (users.rol_user === "admin") navigate('/users');
  }, [users, navigate]);

  return (
    <div className="px-auto pb-8 bg-gray-300">
      <ImageSlider />
      {users.rol_user !== "admin" && (
        <div className="px-16">
          <p className="pl-4 pb-4 text-[#00684a]  text-2xl font-semibold md:text-2xl  mb-4">Subastas</p>
          {Object.entries(groupedSubastas).map(([tipoVari, subastas]) => (
            <div key={tipoVari}>
              <p className="pl-4 text-xl my-4">{tipoVari}</p>
                {subastas.map((subasta) => (
                  <Card key={subasta.pk_id_sub} className="max-w-[320px] h-[560px] p-2 bg-[#00684a] text-white  ">
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                    <CardHeader className="justify-between">
                      <div className="flex gap-x-3">
                        <Avatar
                          isBordered
                          radius="full"
                          size="md"
                          src={
                            subasta.imagen_user && subasta.imagen_user.length > 0
<<<<<<< HEAD
                              ? `http://localhost:4000/usuarios/${subasta.imagen_user}`
=======
                              ? `http://localhost:4000/img/${subasta.imagen_user}`
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                              : "http://localhost:4000/usuarios/imagen_de_usuario.webp"
                          }
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
<<<<<<< HEAD
                          <h4 className="text-small font-semibold leading-none text-default-600"> {subasta.nombre_user} </h4>
                          <h5 className="text-small -mt-1 tracking-tight text-default-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-auto"> @{subasta.email_user} </h5>
                        </div>
                      </div>
                      <Button
                        className="bg-gray-100 text-foreground border-default-200"
=======
                          <h4 className="text-small font-semibold leading-none text-white"> {subasta.nombre_user} </h4>
                          <h5 className="text-small -mt-1 tracking-tight text-default-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]"> @{subasta.email_user} </h5>
                        </div>
                      </div>
                      <Button
                        className="inline-flex items-center justify-center py-2 px-4 bg-[#001e2b] text-white font-semibold rounded-md hover:bg-[#00ed64] border-2 hover:border-[#00ed64] hover:text-[#001e2b] transition-all ease-in-out duration-500"
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                        radius="md"
                        variant="bordered"
                        size="sm"
                        onPress={() => navigate(`/profile/${subasta.pk_cedula_user}`)}
                      >
                        Visualizar perfil
                      </Button>
                    </CardHeader>
                    <CardBody className="items-start w-full -mt-3">
                      <span className="flex justify-center items-center gap-x-3">
<<<<<<< HEAD
                        <b className="ml-5"> {subasta.pk_id_sub} - {subasta.nombre_tipo_vari} </b>
                        <p className={`text-sm py-1 rounded-lg px-2 capitalize 
                          ${subasta.estado_sub === "abierta"? "bg-[#d1f4e0] text-[#14a150]": ""}
                          ${subasta.estado_sub === "proceso"? "bg-orange-100 text-orange-500": ""}
                          ${subasta.estado_sub === "espera"? "bg-blue-100 text-blue-500": ""}
                          ${subasta.estado_sub === "cerrada"? "bg-[#fdd0df] text-[#f31263]": ""} 
                        `}>
                          {subasta.estado_sub}
                        </p>
=======
                        <b className="ml-5">{subasta.pk_id_sub} - {subasta.nombre_tipo_vari}</b>
                        <div className={`rounded-lg border
                          ${subasta.estado_sub === "abierta" ? "bg-green-500 border-green-600 text-green-50" : ""}
                          ${subasta.estado_sub === "proceso" ? "bg-orange-500 border-orange-600 text-orange-50" : ""}
                          ${subasta.estado_sub === "espera" ? "bg-blue-500 border-blue-600 text-blue-50" : ""}
                          ${subasta.estado_sub === "cerrada" ? "bg-red-400 border-red-600 text-red-50" : ""}`}
                        >
                          <p className="text-sm text-default-50 p-0 px-1">{subasta.estado_sub}</p>
                        </div>
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                      </span>
                      <CardBody className="flex">
                        <Image
                          shadow="sm"
                          radius="md"
                          alt={subasta.imagen_sub}
                          className="w-[300px] object-cover h-[200px]"
<<<<<<< HEAD
                          src={`http://localhost:4000/subastas/${subasta.imagen_sub}`}
                        />
                        <div className="grid gap-x-2 py-2 px-2 text-sm">
=======
                          src={`http://localhost:4000/img/subasta/${subasta.imagen_sub}`}
                        />
                        <div className="grid gap-x-2 py-2 px-1 text-sm max-h-[400px] overflow-y-auto">
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                          <div className="flex flex-col">
                            <div className="flex w-full gap-x-2">
                              <p className="font-semibold">Apertura:</p>
                              <p> {new Date( subasta.fecha_inicio_sub ).toLocaleString("es-ES", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })} </p>
                            </div>
                            <div className="flex w-full gap-x-2">
                              <p className="font-semibold">Cierre:</p>
                              <p> {new Date(subasta.fecha_fin_sub).toLocaleString( "es-ES", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", } )} </p>
                            </div>
                            <div className="flex w-full gap-x-2">
                              <p className="font-semibold">Ubicación:</p>
                              <p> {subasta.nombre_vere} - {subasta.nombre_muni} - {subasta.nombre_depar} </p>
                            </div>
                            <div className="flex w-full gap-x-2">
                              <p className="font-semibold">Cantidad:</p>
                              <p> {subasta.cantidad_sub} {subasta.cantidad_sub > 1 ? subasta.unidad_peso_sub + "s" : subasta.unidad_peso_sub} </p>
                            </div>
                            <div className="flex w-full gap-x-2">
                              <p className="font-semibold">Tipo Variedad:</p>
                              <p>{subasta.nombre_tipo_vari}</p>
                            </div>
                            <div className="flex w-full gap-x-2">
                              <p className="font-semibold">Certificado:</p>
<<<<<<< HEAD
                              <a href={`http://localhost:4000/subastas/${subasta.certificado_sub}`} download={subasta.certificado_sub} className="underline cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap w-52">{subasta.certificado_sub}</a>
=======
                              <p className="underline cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]"> {subasta.certificado_sub} </p>
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-2">
                          <Button
<<<<<<< HEAD
                            className="py-2 px-4 bg-[#00684a] text-white font-semibold rounded-lg"
                            size="lg"
                            onClick={() => handdleModaSub(subasta.pk_id_sub)}
                          >
                            Ver subasta
=======
                            className="border-[#00ed64] inline-flex items-center justify-center py-2 px-4 bg-[#00ed64] text-white  font-semibold rounded-md hover:bg-[#00ed64] border-2 hover:border-[#001e2b]  hover:text-[#001e2b] transition-all ease-in-out duration-500"
                            radius="md"
                            size="lg"
                            onClick={() => handdleModaSub(subasta.pk_id_sub)}
                          >
                            Ver Detalles
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                          </Button>
                        </div>
                      </CardBody>
                    </CardBody>
                  </Card>
                ))}
<<<<<<< HEAD
              </div>
            ) : (
              <div className="flex">
                <p className="pl-4 text-xl my-2 text-gray-500 font-semibold">No hay subastas disponibles.</p>
              </div>
            )}
            <div className="flex justify-between mt-4">
              <Button auto className="mr-2" onClick={showPrevSubastas} startContent={<FaChevronLeft/>} isDisabled={startIndex <= 0} >
                Anterior
              </Button>
              <Button auto className="ml-2" onClick={showNextSubastas} endContent={<FaChevronRight/>} isDisabled={(startIndex + 3) >= subastasActivas.length} >
                Siguiente
              </Button>
            </div>
          </div>
          <ModalSubCoffee
            open={abrirModal}
            onClose={() => setAbrirModal(false)}
          />
=======
            </div>
          ))}
          <ModalSubCoffee open={abrirModal} onClose={() => setAbrirModal(false)} />
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
        </div>
      )}
    </div>
  ); 
}

export default SubastaPage;