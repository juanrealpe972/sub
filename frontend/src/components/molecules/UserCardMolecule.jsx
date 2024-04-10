import React from "react";
import TextAtom from "../atoms/TextAtom";

const UserCardMolecule = ({ user, index }) => {
  return (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out hover:bg-blancoMedio1 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
    >
      <TextAtom className="font-bold text-grisOscuro">Cédula: {user.pk_cedula_user}</TextAtom>
      <TextAtom>Nombre: {user.nombre_user}</TextAtom>
      <TextAtom>Email: {user.email_user}</TextAtom>
      <TextAtom>Teléfono: {user.telefono_user}</TextAtom>
      {user.descripcion_user && <TextAtom>Descripción: {user.descripcion_user}</TextAtom>}
      <TextAtom>Fecha de Nacimiento: {user.fecha_nacimiento_user}</TextAtom>
      <TextAtom>Rol: {user.rol_user}</TextAtom>
    </div>
  );
};

export default UserCardMolecule;
