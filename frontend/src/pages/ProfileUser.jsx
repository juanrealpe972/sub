import React, { useState } from "react";

function ProfileUser() {
  const SubastasCreadas = [
    {
      id: 1,
      titulo: "Subasta 1",
      descripcion: "Descripción de la subasta 1",
    },
    {
      id: 2,
      titulo: "Subasta 2",
      descripcion: "Descripción de la subasta 2",
    },
  ];

  const SubastasGanadas = [
    {
      id: 1,
      titulo: "Subasta 3",
      descripcion: "Descripción de la subasta 3",
    },
    {
      id: 2,
      titulo: "Subasta 4",
      descripcion: "Descripción de la subasta 4",
    },
  ];

  const [activeTab, setActiveTab] = useState("creadas");

  return (
    <div className="px-32">
      <div className="">
        <img
          src="./src/assets/finca1.jpg"
          className="w-full rounded-lg"
          alt="Finca de usuario"
        />
        <img
          src="./src/assets/profile_user.jfif"
          className="rounded-full w-44 h-44 absolute left-2/4 transform -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className="flex mt-4 justify-between">
        <div className="grid grid-cols-1 gap-y-1">
          <span className="text-lg font-semibold">Juan Camilo</span>
          <span className="text-sm text-gray-600">3157874593</span>
          <span className="text-sm text-gray-600">15-06-2005</span>
          <span className="text-sm text-gray-600">juan@gmail.com</span>
          <span className="text-sm text-gray-600">Cafetero a morir, heredero de 5 haciendas, un helicóptero y 3 mansiones, sin hijos, soltero y feliz</span>
        </div>
        <div>
          <button className="text-sm bg-green-400 text-white p-2 rounded hover:bg-green-300">Editar perfil</button>
        </div>
      </div>
      <div className="flex mt-4 space-x-28 justify-center">
        <button
          className={`text-lg font-semibold focus:outline-none ${
            activeTab === "creadas" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("creadas")}
        >
          Subastas creadas
        </button>
        <button
          className={`text-lg font-semibold focus:outline-none ${
            activeTab === "ganadas" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("ganadas")}
        >
          Subastas ganadas
        </button>
      </div>
      <div className="mt-6">
        {activeTab === "creadas" && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Subastas Creadas</h2>
            {SubastasCreadas.map((subasta) => (
              <div key={subasta.id} className="mb-4">
                <h3 className="text-md font-semibold">{subasta.titulo}</h3>
                <p className="text-sm text-gray-600">{subasta.descripcion}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "ganadas" && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Subastas Ganadas</h2>
            {SubastasGanadas.map((subasta) => (
              <div key={subasta.id} className="mb-4">
                <h3 className="text-md font-semibold">{subasta.titulo}</h3>
                <p className="text-sm text-gray-600">{subasta.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileUser;
