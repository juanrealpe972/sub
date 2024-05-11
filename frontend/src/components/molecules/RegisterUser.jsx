import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  ModalFooter,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

import { EyeSlashFilledIcon } from "../../nextui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../nextui/EyeFilledIcon";
import { icono } from "../atoms/IconsAtom";
import AuthContext from "../../context/AuthContext";

const RegisterUser = ({ mode, idUser, titleBtn }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { createUsers, updateUsers } = useContext(AuthContext);
  const userAdmin = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    imagen_user: "",
    pk_cedula_user: "",
    nombre_user: "",
    email_user: "",
    password_user: "",
    telefono_user: "",
    fechanacimiento_user: "",
    rol_user: "",
    descripcion_user: "",
  });

  useEffect(() => {
    if (mode === "update" && idUser) {
      setFormData({
        pk_cedula_user: idUser.pk_cedula_user,
        nombre_user: idUser.nombre_user,
        email_user: idUser.email_user,
        password_user: idUser.password_user,
        descripcion_user: idUser.descripcion_user,
        imagen_user: idUser.imagen_user,
        telefono_user: idUser.telefono_user,
        fechanacimiento_user: idUser.fechanacimiento_user,
        rol_user: idUser.rol_user,
      });
    }
  }, [mode, idUser]);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [e.target.name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const datosAEnviar = new FormData();
    datosAEnviar.append("imagen_user", formData.imagen_user);
    datosAEnviar.append("pk_cedula_user", formData.pk_cedula_user);
    datosAEnviar.append("nombre_user", formData.nombre_user);
    datosAEnviar.append("email_user", formData.email_user);
    datosAEnviar.append("password_user", formData.password_user);
    datosAEnviar.append("telefono_user", formData.telefono_user);
    datosAEnviar.append("fechanacimiento_user", formData.fechanacimiento_user);
    datosAEnviar.append("rol_user", formData.rol_user);
    datosAEnviar.append("descripcion_user", formData.descripcion_user);
    try {
      if (mode === "update") {
        await updateUsers(idUser.pk_cedula_user, datosAEnviar);
      } else {
        await createUsers(datosAEnviar);
      }
    } catch (error) {
      console.log(error);
      alert("Error en el servidor " + error);
    }
    console.log("formData después del envío:", formData);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-2 px-4">
      <div className="flex w-full justify-center rounded-full">
        <input
          placeholder="Imagen de usuario"
          required
          type="file"
          name="imagen_user"
          className="hidden"
          id="fileInput"
          onChange={handleChange}
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer items-center w-auto flex justify-center bg-blue-200 rounded-full border"
        >
          {formData.imagen_user ? (
            <div className="relative">
              <button
                type="button"
                className="absolute top-0 right-0 p-1 bg-gray-300 rounded-full"
                onClick={() => setFormData({ ...formData, imagen_user: null })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {formData.imagen_user &&
              typeof formData.imagen_user === "object" ? (
                <img
                  src={URL.createObjectURL(formData.imagen_user)}
                  alt="user"
                  className="h-28 w-28 object-cover rounded-full mx-auto"
                />
              ) : (
                <div className="flex items-center justify-center w-28 h-28 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300">
                  <span className="text-gray-500 text-center">
                    Seleccionar imagen
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center w-28 h-28 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300">
              <span className="text-gray-500 text-center">
                Seleccionar imagen
              </span>
            </div>
          )}
        </label>
      </div>
      <Input
        placeholder="Nombre Completo"
        required
        type="text"
        name="nombre_user"
        variant="bordered"
        value={formData.nombre_user}
        onChange={handleChange}
        startContent={<icono.iconoUser />}
      />
      <div className="grid grid-cols-2 items-center gap-x-2">
        <Input
          placeholder="Cédula"
          required
          type="number"
          variant="bordered"
          min={0}
          name="pk_cedula_user"
          value={formData.pk_cedula_user}
          onChange={handleChange}
          startContent={<icono.iconoCedula />}
        />
        <Input
          placeholder="Fecha de Nacimiento"
          required
          variant="bordered"
          type="date"
          name="fechanacimiento_user"
          value={formData.fechanacimiento_user}
          onChange={handleChange}
          startContent={<icono.iconoFecha />}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-x-2">
        <Input
          placeholder="Teléfono"
          required
          type="number"
          variant="bordered"
          min={0}
          name="telefono_user"
          value={formData.telefono_user}
          onChange={handleChange}
          startContent={<icono.iconoCelular />}
        />
        <Input
          placeholder="Correo"
          required
          type="email"
          variant="bordered"
          name="email_user"
          value={formData.email_user}
          onChange={handleChange}
          startContent={<icono.iconoGmail />}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-x-2">
        <Select
          label=""
          startContent={<icono.iconoRol />}
          placeholder="Seleccionar Rol"
          labelPlacement="outside"
          variant="bordered"
          className="max-w-xs"
          aria-label="Seleccionar Rol"
          value={formData.rol_user}
          onChange={handleChange}
          name="rol_user"
        >
          {userAdmin.rol_user === "admin" && (
            <SelectItem key="admin" value="admin" textValue="Admin"> Admin </SelectItem>
          )}
          <SelectItem key="vendedor" value="vendedor" textValue="Vendedor"> Vendedor </SelectItem>
          <SelectItem key="comprador" value="comprador" textValue="Comprador"> Comprador </SelectItem>
        </Select>
        <Input
          label=""
          aria-label="Contraseña"
          variant="bordered"
          placeholder="Contraseña"
          startContent={<icono.iconoContraseña />}
          endContent={
            <button
              type="button"
              onClick={toggleVisibility}
              className="focus:outline-none"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          value={formData.password_user}
          name="password_user"
          onChange={handleChange}
        />
      </div>
      <Textarea
        label="Descripción de usuario"
        startContent={<icono.iconoDescript />}
        variant="bordered"
        placeholder="Ingresa la descripción de usuario"
        disableAnimation
        disableAutosize
        classNames={{
          base: "w-full",
          input: "resize-y min-h-[40px]",
        }}
        value={formData.descripcion_user}
        onChange={handleChange}
        name="descripcion_user"
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
