import React, { useRef, useEffect } from "react";
import { Button, ModalFooter } from "@nextui-org/react";

import InputWithToggleIconAtom from "../atoms/InputWithToggleIconAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import SelectInputAtom from "../atoms/SelectInputAtom";
import OptionAtom from "../atoms/OptionAtom";
import { icono } from "../atoms/IconsAtom";

const RegisterUser = ({ mode, idUser, titleBtn }) => {
  const cedula = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phoneNumber = useRef(null);
  const birthdate = useRef(null);
  const rol = useRef(null);

  useEffect(() => {
    if (mode === "update" && idUser) {
      try {
        console.log(idUser);

        cedula.current.value = idUser.cedula_user;
        fullName.current.value = idUser.nombre_user;
        email.current.value = idUser.email_user;
        phoneNumber.current.value = idUser.telefono_user;
        birthdate.current.value = idUser.fechanacimiento_user;
        rol.current.value = idUser.rol_user;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }, [mode, idUser]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        cedula_user: cedula.current.value,
        nombre_user: fullName.current.value,
        email_user: email.current.value,
        password_user: password.current.value,
        telefono_user: phoneNumber.current.value,
        fechanacimiento_user: birthdate.current.value,
        rol_user: rol.current.value,
      };
      handleSubmit(data, e);
    } catch (error) {
      console.log(error);
      alert("Error en el servidor " + error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-4">
      <InputWithIconAtom
        icon={icono.iconoUser}
        placeholder="Nombre Completo"
        required
        type="text"
        ref={fullName}
      />
      <div className="grid grid-cols-2 items-center">
        <InputWithIconAtom
          icon={icono.iconoCedula}
          placeholder="Cédula"
          required
          type="number"
          ref={cedula}
        />
        <InputWithIconAtom
          icon={icono.iconoFecha}
          placeholder="Fecha de Nacimiento"
          required
          type="date"
          ref={birthdate}
        />
      </div>
      <InputWithIconAtom
        icon={icono.iconoGmail}
        placeholder="Correo"
        required
        type="email"
        ref={email}
      />
      <div className="grid grid-cols-2 items-center gap-x-2">
        <InputWithIconAtom
          icon={icono.iconoCelular}
          placeholder="Teléfono"
          required
          type="number"
          ref={phoneNumber}
        />
        <SelectInputAtom ref={rol}>
          <OptionAtom value="admin" label="Admin" />
          <OptionAtom value="vendedor" label="Vendedor" />
          <OptionAtom value="comprador" label="Comprador" />
        </SelectInputAtom>
      </div>
      <InputWithToggleIconAtom
        icon={icono.iconoContraseña}
        placeholder="Contraseña"
        required
        type="password"
        ref={password}
      />
      <ModalFooter className="flex justify-center">
        <Button type="submit" className="bg-gray-600 text-white">
          {titleBtn}
        </Button>
      </ModalFooter>
    </form>
  );
};

export default RegisterUser;
