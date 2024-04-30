import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@nextui-org/react";
import avatarImage from "../../public/imagen_de_usuario.webp";
import axiosClient from "../api/axios";
import { useParams } from "react-router-dom";
import { icono } from "../components/atoms/IconsAtom";

function ProfileUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("creadas");
  const localuser = localStorage.getItem("user")
  const userlocal = JSON.parse(localuser)

  useEffect(() => {
    axiosClient.get(`/v1/users/${id}`).then((res) => {
      setUser(res.data.data[0]);
      console.log("User data:", res.data.data);
    }).catch((err) => {
      console.error(err);
    });
  }, [id]);

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
      {user && (
        <div className="flex">
          <div className="flex my-6 items-center gap-x-4">
            <Avatar src={user.imagen_user ? `../../public/${user.imagen_user}` : avatarImage} className="w-44 h-44" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold my-4">{user.nombre_user}</span>
              <span className="text-sm text-gray-600">{icono.iconoCelular} Telefono: {user.telefono_user}</span>
              <span className="text-sm text-gray-600">{icono.iconoCelular} Fecha Nacimiento: {new Date(user.fecha_nacimiento_user).toLocaleDateString()}</span>
              <span className="text-sm text-gray-600">{icono.iconoCelular} Gmail: {user.email_user}</span>
              <span className="text-sm text-gray-600">{user.descripcion_user}</span>
            </div>
          </div>
          <div className="flex items-end mb-8 ml-8">
            {user.pk_cedula_user === userlocal.pk_cedula_user &&
              <Button color="default">
                Editar perfil
              </Button>
            }
          </div>
        </div>
      )}
      {user && user.rol_user !== "comprador" && (
        <>
          <div className="grow border-b border-gray-400 my-4"></div>
            <div className="flex items-center w-full mb-4">
              <button
                className={`text-lg font-semibold mr-4 focus:outline-none ${activeTab === "creadas" ? "text-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("creadas")}
              >
                Subastas creadas
              </button>
              <button
                className={`text-lg font-semibold focus:outline-none ${activeTab === "ganadas" ? "text-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("ganadas")}
              >
                Subastas ganadas
              </button>
          </div>
        </>
      )}
      {user && user.rol_user !== "comprador" && (
        <div>
          {activeTab === "creadas" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Subastas Creadas</h2>
              {renderSubastas(SubastasCreadas)}
            </div>
          )}
          {activeTab === "ganadas" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Subastas Ganadas</h2>
              {renderSubastas(SubastasGanadas)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileUser;
