import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axios";
import {
  Card,
  CardHeader,
  CardFooter,
  Avatar,
  Image,
  Button,
  Input,
  CardBody,
} from "@nextui-org/react";

function SubastaUser() {
  const { id } = useParams();
  const [subasta, setSubasta] = useState(null);
  const [oferta, setOferta] = useState("");

  useEffect(() => {
    fetchSubasta();
  }, []);

  const fetchSubasta = async () => {
    try {
      const response = await axiosClient.get(`/v1/buscar/${id}`);
      setSubasta(response.data.data);
    } catch (error) {
      console.error("Error fetching subasta:", error);
    }
  };

  const handleSubmitOferta = async () => {
    // Aquí puedes enviar la oferta al servidor
    console.log("Oferta:", oferta);
  };

  const handleChatClick = () => {
    // Maneja la acción de ir al chat
  };

  const handlePostulantesClick = () => {
    // Maneja la acción de ver los postulantes
  };

  if (!subasta) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">
        Subasta: {subasta.nombre_tipo_vari} - {subasta.nombre_fin}
      </h1>
      <Card shadow className="grid grid-cols-2 gap-3 justify-between">
        <CardBody className="bg-gray-200">
          <div>
            <h3 className="text-lg font-semibold">Subasta</h3>
            <Image
              shadow="sm"
              radius="md"
              alt={subasta.imagen_sub}
              className="object-cover w-full h-40"
              src={subasta.imagen_sub}
            />
            <p>{subasta.descripcion_sub}</p>
            <p>Precio Inicial: {subasta.precio_inicial_sub}</p>
            <p>Precio Final: {subasta.precio_final_sub}</p>
            <p className="text-gray-700 text-sm">
              {"Fecha de inicio "}
              {new Date(subasta.fecha_inicio_sub).toLocaleString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </p>
            <p className="text-gray-700 text-sm">
              {" Fecha fin "}
              {new Date(subasta.fecha_fin_sub).toLocaleString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </p>
          </div>
        </CardBody>
        <CardBody className="bg-gray-200">
          <div>
            <h3 className="text-lg font-semibold">Usuario</h3>
            <Avatar src={subasta.imagen_user} />
            <p>{subasta.nombre_user}</p>
            <p>{subasta.email_user}</p>
          </div>
        </CardBody>
      </Card>
      <Card shadow className="mt-4 grid grid-cols-2">
        <CardBody className="bg-gray-200">
          <div>
            <h3 className="text-lg font-semibold">Ofertas</h3>
            <Input
              type="number"
              value={oferta}
              onChange={(e) => setOferta(e.target.value)}
              placeholder="Ingrese su oferta"
            />
            <Button className="mt-2" onClick={handleSubmitOferta}>
              Realizar Oferta
            </Button>
          </div>
        </CardBody>
        <CardBody className="bg-gray-200">
          <div>
            <Button className="mr-2" onClick={handleChatClick}>
              Chat
            </Button>
            <Button onClick={handlePostulantesClick}>Ver Postulantes</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SubastaUser;
