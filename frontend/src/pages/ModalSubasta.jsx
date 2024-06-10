import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useSubastaContext } from "../context/SubastaContext";
import { usePostulantesContext } from "../context/PostulantesContext";
import "./scroll.css"

function ModalSubasta({ onClose }) {
  const { getSub, subasta, idSubasta } = useSubastaContext();
  const { createPosts, getPosts, posts } = usePostulantesContext();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [tiempoRestante, setTiempoRestante] = useState("");
  const [subastaIniciada, setSubastaIniciada] = useState(false);

  const handleIniciarPuja = async () => {
    try {
      const data = {
        fk_id_usuario: user.pk_cedula_user,
        fk_id_subasta: subasta.pk_id_sub,
      };
      await createPosts(data, idSubasta);
      navigate(`/subasta/${subasta.pk_id_sub}`);
    } catch (error) {
      console.error("Error al registrar el postulante:", error);
    }
  };

  useEffect(() => {
    getPosts(idSubasta);
  }, [idSubasta]);

  useEffect(() => {
    getSub(idSubasta);
  }, [idSubasta]);

  useEffect(() => {
    const calcularDiferencia = (fechaInicio, fechaFin) => {
      const inicio = new Date(fechaInicio);
      const fin = new Date(fechaFin);
      const ahora = new Date();
  
      if (ahora < inicio) {
        setSubastaIniciada(false);
        return `La subasta empezará dentro de ${calcularTiempoRestante(ahora, inicio)}`;
      } else if (ahora > fin && !subasta.ganador_sub) {
        setSubastaIniciada(true);
        return "Subasta terminada, falta escoger ganador";
      }  else if (ahora > fin) {
        setSubastaIniciada(false);
        return "Subasta terminadaaa";
      } else {
        setSubastaIniciada(true);
        const diferenciaMs = fin - ahora;
        const segundos = Math.floor((diferenciaMs / 1000) % 60);
        const minutos = Math.floor((diferenciaMs / 1000 / 60) % 60);
        const horas = Math.floor((diferenciaMs / 1000 / 60 / 60) % 24);
        const dias = Math.floor(diferenciaMs / 1000 / 60 / 60 / 24);
        return `La subasta terminará en: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
      }
    };
  
    const calcularTiempoRestante = (inicio, fin) => {
      const diferenciaMs = fin - inicio;
      const segundos = Math.floor((diferenciaMs / 1000) % 60);
      const minutos = Math.floor((diferenciaMs / 1000 / 60) % 60);
      const horas = Math.floor((diferenciaMs / 1000 / 60 / 60) % 24);
      const dias = Math.floor(diferenciaMs / 1000 / 60 / 60 / 24);
      return `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    };
  
    const actualizarTiempo = () => {
      setTiempoRestante(
        calcularDiferencia(subasta.fecha_inicio_sub, subasta.fecha_fin_sub)
      );
    };
  
    const intervalId = setInterval(actualizarTiempo, 1000);
    actualizarTiempo(); // Para calcular el tiempo restante inmediatamente
    return () => clearInterval(intervalId);
  }, [subasta.fecha_inicio_sub, subasta.fecha_fin_sub]);

  const [hoveredLinks, setHoveredLinks] = useState({});

  const handleMouseEnter = (id) => {
    setHoveredLinks({ ...hoveredLinks, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setHoveredLinks({ ...hoveredLinks, [id]: false });
  };

  return (
    <div>
      <ModalHeader className="flex justify-center">
        <h1 className="text-center text-3xl font-bold"> {subasta.pk_id_sub} - {subasta.nombre_tipo_vari} </h1>
      </ModalHeader>
      <ModalBody>
        <div className="grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-x-2">
          <Image
            radius="md"
            alt={subasta.imagen_sub}
            className="object-cover w-[400px] h-[280px] shadow shadow-gray-400"
            src={`http://localhost:4000/subastas/${subasta.imagen_sub}`}
          />
          <div className="shadow shadow-gray-400 text-sm rounded-lg w-80 max-h-[300px]">
            <div className="bg-[#009100] py-2 rounded-t-lg">
              <p className="text-xl text-white font-semibold text-center"> Datos de la subasta </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#a1653d] text-center"> {tiempoRestante} </p>
            </div>
            <div className="grid grid-cols-2 gap-x-2 py-2 px-2">
              <div className="items-end flex flex-col ">
                <p className="font-semibold">Apertura:</p>
                <p className="font-semibold">Cierre:</p>
                <p className="font-semibold">Ubicación:</p>
                <p className="font-semibold">Cantidad:</p>
                <p className="font-semibold">Certificado:</p>
                <p className="font-semibold">Tipo Variedad:</p>
                <p className="font-semibold text-center">Descripción:</p>
              </div>
              <div>
                <p> {new Date(subasta.fecha_inicio_sub).toLocaleString("es-ES", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })} </p>
                <p> {new Date(subasta.fecha_fin_sub).toLocaleString("es-ES", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })} </p> 
                <div className="scroll-container" onMouseEnter={() => handleMouseEnter('ubicacion')} onMouseLeave={() => handleMouseLeave('ubicacion')}>
                  <p className={`scroll-text ${hoveredLinks['ubicacion'] ? 'scroll-active' : ''}`}> {subasta.nombre_vere} - {subasta.nombre_muni} - {subasta.nombre_depar} </p>
                </div>
                <p> {subasta.cantidad_sub} {subasta.cantidad_sub > 1 ? subasta.unidad_peso_sub + "s" : subasta.unidad_peso_sub} </p>
                <div className="scroll-container" onMouseEnter={() => handleMouseEnter('certificado')} onMouseLeave={() => handleMouseLeave('certificado')}>
                  <p className={`scroll-text ${hoveredLinks['certificado'] ? 'scroll-active' : ''}`}>
                    <a href={`http://localhost:4000/subastas/${subasta.certificado_sub}`} download={subasta.certificado_sub}>
                      {subasta.certificado_sub}
                    </a>
                  </p>
                </div>
                <p>{subasta.nombre_tipo_vari}</p>
                <div className="scroll-container" onMouseEnter={() => handleMouseEnter('descripcion')} onMouseLeave={() => handleMouseLeave('descripcion')}>
                  <p className={`scroll-text ${hoveredLinks['descripcion'] ? 'scroll-active' : ''}`}>
                    {subasta.descripcion_sub}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#a1653d]">PRECIO BASE:</p>
              <p className="text-[#009100] font-semibold text-lg -mt-2"> ${Number(subasta.precio_inicial_sub).toLocaleString("es-ES")} </p>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="flex justify-center">
        <Button onClick={() => onClose()}>Salir</Button>
        {subasta.pk_cedula_user === user.pk_cedula_user ? 
          (
            <Button
              type="submit"
              className="bg-gray-600 text-white"
              onClick={() => navigate(`/subasta/${subasta.pk_id_sub}`)}
              isDisabled={!subastaIniciada}
            >
              Ingresar a pujar
          </Button>
          ) : (
            <Button
              type="submit"
              className="bg-gray-600 text-white"
              onClick={handleIniciarPuja}
              isDisabled={!subastaIniciada}
            >
              {posts ? posts.length === 0
                ? "Postularme a la subasta" : posts.some((post) => post.fk_id_usuario === user.pk_cedula_user && post.estado_post === "activo" )
                ? "Ingresar a pujar" : "Postularme a la subasta" : (
                  "Postularme a la subasta"
                )}
            </Button>
          )
        }
      </ModalFooter>
    </div>
  );
}

export default ModalSubasta;
