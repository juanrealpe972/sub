import { useState } from "react";

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
    <div className="px-44 relative">
      <div className="relative">
        <img src="./src/assets/finca1.jpg" className="w-full rounded-lg" alt="Finca de usuario" />
        <img
          src="./src/assets/profile_user.jfif"
          className="rounded-full w-44 h-44 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="grid grid-cols-1">
          <span>Juan Camilo</span>
          <span>3157874593</span>
          <span>15-06-2005</span>
          <button>Editar perfil</button>
        </div>
      </div>
      <div className="flex space-x-28 justify-center">
        <button onClick={() => setActiveTab("creadas")}>Subastas creadas</button>
        <button onClick={() => setActiveTab("ganadas")}>Subastas ganadas</button>
      </div>
      <div>
        {activeTab === "creadas" && (
          <div>
            <h2>Subastas Creadas</h2>
            {SubastasCreadas.map((subasta) => (
              <div key={subasta.id}>
                <h3>{subasta.titulo}</h3>
                <p>{subasta.descripcion}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "ganadas" && (
          <div>
            <h2>Subastas Ganadas</h2>
            {SubastasGanadas.map((subasta) => (
              <div key={subasta.id}>
                <h3>{subasta.titulo}</h3>
                <p>{subasta.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileUser;
