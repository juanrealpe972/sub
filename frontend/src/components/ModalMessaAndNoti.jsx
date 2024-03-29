import React, { useState } from "react";

function ModalMessaAndNoti() {
  const [activeTab, setActiveTab] = useState("notificaciones");

  const Notificaciones = [
    {
      id: 1,
      usuario: "Usuario A",
      foto: "./src/assets/profile_user.jfif",
      texto: "¡Nuevo pedido recibido!",
      fecha: "2024-03-15",
    },
    {
      id: 2,
      usuario: "Usuario B",
      foto: "./src/assets/profile_user.jfif",
      texto: "Tu producto ha sido enviado.",
      fecha: "2024-03-14",
    },
    {
      id: 3,
      usuario: "Usuario C",
      foto: "./src/assets/profile_user.jfif",
      texto: "Tu cuenta ha sido verificada.",
      fecha: "2024-03-13",
    },
  ];

  const Mensajes = [
    {
      id: 1,
      usuario: "Usuario D",
      foto: "./src/assets/profile_user.jfif",
      texto: "Hola, ¿cómo estás?",
      fecha: "2024-03-15",
    },
    {
      id: 2,
      usuario: "Usuario E",
      foto: "./src/assets/profile_user.jfif",
      texto: "¿Podemos agendar una llamada?",
      fecha: "2024-03-14",
    },
    {
      id: 3,
      usuario: "Usuario F",
      foto: "./src/assets/profile_user.jfif",
      texto: "Gracias por tu compra.",
      fecha: "2024-03-13",
    },
  ];

  const handleShowNotifications = () => {
    setActiveTab("notificaciones");
  };

  const handleShowMessages = () => {
    setActiveTab("mensajes");
  };

  return (
    <div className="bg-white rounded-xl p-3 border shadow-md">
      <div className="flex text-sm">
        <button
          onClick={handleShowNotifications}
          className={`focus:outline-none ${
            activeTab === "notificaciones"
              ? "border-b-2 border-blue-500"
              : "border-b "
          } text-gray-400 px-4 py-2`}
        >
          Notificaciones
        </button>
        <button
          onClick={handleShowMessages}
          className={`focus:outline-none ${
            activeTab === "mensajes"
              ? "border-b-2 border-green-500"
              : "border-b"
          } text-gray-400 px-4 py-2`}
        >
          Mensajes
        </button>
      </div>
      {activeTab === "notificaciones" ? (
        <div className="my-2">
          {Notificaciones.map((notificacion) => (
            <div key={notificacion.id} className="flex gap-x-1 hover:bg-gray-100 rounded p-1 cursor-pointer">
              <img
                src={notificacion.foto}
                alt="Foto de perfil"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm">{notificacion.usuario}</p>
                <p className="text-xs">{notificacion.texto}</p>
                <p className="text-xs">{notificacion.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-2">
          {Mensajes.map((mensaje) => (
            <div key={mensaje.id} className="flex gap-x-1 hover:bg-gray-100 rounded p-1 cursor-pointer">
              <img
                src={mensaje.foto}
                alt="Foto de perfil"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm">{mensaje.usuario}</p>
                <p className="text-xs">{mensaje.texto}</p>
                <p className="text-xs">{mensaje.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ModalMessaAndNoti;
