import React, { useContext } from "react";
import UsersListOrganism from "../components/organisms/UsersListOrganism";
import { icono } from "../components/atoms/IconsAtom";
import IconHeaderAtom from "../components/atoms/IconHeaderAtom";
import AuthContext from "../context/AuthContext";

function UsersPage() {

  const handle = () => {
    e.preventDefault()
    console.log("hello");
  }

  const { users } = useContext(AuthContext);

  if (!users) {
    return <div className="text-red-500">No hay usuarios registrados...</div>;
  }

  return (
    <div className="max-w-72 mx-auto p-4">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">
          Usuarios</h1>
        <IconHeaderAtom onClick={handle}>
          <icono.iconoBuscar className="h-5 w-5 text-negro" />
        </IconHeaderAtom>
      </div>
      <UsersListOrganism users={users} />
    </div>
  );

}

export default UsersPage;
