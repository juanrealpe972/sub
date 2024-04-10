import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersListOrganism from "../components/organisms/UsersListOrganism";

function UsersPage() {
  const URL = "http://localhost:9722/v1/users";
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
        alert("Error al obtener los datos del usuario");
      });
  }, []);

  if (!users) {
    return <div className="text-red-500">Cargando datos del usuario...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">{users.length} Usuarios</h1>
      <UsersListOrganism users={users} />
    </div>
  );
}

export default UsersPage;
