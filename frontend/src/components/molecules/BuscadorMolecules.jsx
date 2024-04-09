import React, { useState } from "react";
import TabSelectorMolecule from "./TabSelectorMolecule";
import UserListMolecule from "./UserListMolecule"; // Componente para mostrar lista de usuarios
import SubastaListMolecule from "./SubastaListMolecule";

function BuscadorMolecules() {
  const [activeTab, setActiveTab] = useState("usuarios"); // Estado para controlar la pestaña activa

  const handleShowUsers = () => {
    setActiveTab("usuarios"); // Mostrar lista de usuarios
  };

  const handleShowSubastas = () => {
    setActiveTab("subastas"); // Mostrar lista de subastas
  };

  return (
    <div className="bg-white rounded-xl p-3 border shadow-md">
      <TabSelectorMolecule
        activeTab={activeTab}
        handleShowNotifications={handleShowUsers} // Cambiar a handleShowUsers para mostrar usuarios
        handleShowMessages={handleShowSubastas} // Cambiar a handleShowSubastas para mostrar subastas
      />
      {activeTab === "usuarios" ? (
        <UserListMolecule /> // Mostrar lista de usuarios
      ) : (
        <SubastaListMolecule /> // Mostrar lista de subastas
      )}
    </div>
  );
}

export default BuscadorMolecules;
