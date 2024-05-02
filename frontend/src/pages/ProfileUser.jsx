import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axios";

import Phone from "../nextui/Phone";
import DateIconn from "../nextui/DateIconn";
import UserRol from "../nextui/UserRol";
import Gmail from "../nextui/Gmail";
import toast from "react-hot-toast";

function ProfileUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("creadas");
  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axiosClient.get(`/v1/users/${id}`).then((res) => {
      setUser(res.data.data[0]);
    })
    .catch((err) => {
      toast.error("Error al traer los datos del usuario" + error)
      console.error(err);
    });
  }, [id]);

  useEffect(() => {
    if (user.rol_user === "comprador") {
      setActiveTab("ganadas");
    } else {
      setActiveTab("creadas")
    }
  }, [user.rol_user]);

  const SubastasCreadas = [
    { id: 1, titulo: "Subasta 1", descripcion: "Descripción de la subasta 1" },
    { id: 2, titulo: "Subasta 2", descripcion: "Descripción de la subasta 2" },
    { id: 3, titulo: "Subasta 1", descripcion: "Descripción de la subasta 1" },
    { id: 4, titulo: "Subasta 2", descripcion: "Descripción de la subasta 2" },
  ];

  const SubastasGanadas = [
    { id: 1, titulo: "Subasta 3", descripcion: "Descripción de la subasta 3" },
    { id: 2, titulo: "Subasta 4", descripcion: "Descripción de la subasta 4" },
    { id: 3, titulo: "Subasta 3", descripcion: "Descripción de la subasta 3" },
    { id: 4, titulo: "Subasta 4", descripcion: "Descripción de la subasta 4" },
  ];

  const renderSubastas = (subastas) => (
    <div className="grid grid-cols-2 gap-4">
      {subastas.map((subasta) => (
        <div key={subasta.id} className="border rounded p-4">
          <h3 className="text-md font-semibold">{subasta.titulo}</h3>
          <p className="text-sm text-gray-600">{subasta.descripcion}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-28 mb-9">
      <div className="flex">
        <div className="flex my-6 items-center gap-x-4">
          <Avatar
            src={
              user.imagen_user && user.imagen_user.length > 0
                ? `../../public/${user.imagen_user}`
                : "../../public/imagen_de_usuario.webp"
            }
            className="w-56 h-56"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold my-4">
              {user.nombre_user}
            </span>
            <span className="text-sm text-gray-600 flex items-center">
              {/* <Phone /> */}
              <div>
                <p className="text-sm text-gray-900">{user.telefono_user}</p>
                <p className="text-xs text-gray-500">Teléfono</p>
              </div>
            </span>
            <span className="text-sm text-gray-600 flex items-center">
              {/* <DateIconn /> */}
              <div>
                <p className="text-sm text-gray-900">{new Date(user.fecha_nacimiento_user).toLocaleDateString()}</p>
                <p className="text-xs text-gray-500">Fecha de Nacimiento</p>
              </div>
            </span>
            <span className="text-sm text-gray-600 flex items-center">
              {/* <Gmail /> */}
              <div>
                <p className="text-sm text-gray-900">{user.email_user}</p>
                <p className="text-xs text-gray-500">Correo Electrónico</p>
              </div>
            </span>
            <span className="text-sm text-gray-600 flex items-center">
              {/* <UserRol /> */}
              <div>
                <p className="text-sm text-gray-900">{user.rol_user}</p>
                <p className="text-xs text-gray-500">Rol de Usuario</p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">{user.descripcion_user}</span>
        {user.pk_cedula_user === localUser.pk_cedula_user && (
          <Button color="primary">Editar perfil</Button>
        )}
      </div>
      <div className="grow border-b border-gray-400 my-4"></div>
      <div className="flex items-center w-full mb-4">
        {user.rol_user !== "comprador" && (
          <button
            className={`text-lg font-semibold mr-4 focus:outline-none ${
              activeTab === "creadas" ? "text-blue-600 border-b border-blue-600 mb-3 transition delay-150 duration-500 ease-in-out" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("creadas")}
          >
            Subastas Creadas
          </button>
        )}
        <button
          className={`text-lg font-semibold focus:outline-none ${
            activeTab === "ganadas" ? "text-blue-600 border-b border-blue-600 mb-3 transition delay-150 duration-500 ease-in-out" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("ganadas")}
        >
          Subastas Ganadas
        </button>
      </div>
      <div>
        {user.rol_user !== "comprador" && activeTab === "creadas" && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">
              Subastas Creadas
            </h2>
            {renderSubastas(SubastasCreadas)}
          </div>
        )}
        {activeTab === "ganadas" && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">
              Subastas Ganadas
            </h2>
            {renderSubastas(SubastasGanadas)}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileUser;
