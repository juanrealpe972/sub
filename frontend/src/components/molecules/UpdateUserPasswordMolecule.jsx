import { Button, ModalFooter } from "@nextui-org/react";
import React, { useState } from "react";

import { icono } from "../atoms/IconsAtom";
import { EyeSlashFilledIcon } from "../../nextui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../nextui/EyeFilledIcon";
import { useAuthContext } from "../../context/AuthContext";
import { TextInput } from "@tremor/react";

function UpdateUserPasswordMolecule({ titleBtn, onClose }) {
  const [isVisibleOld, setIsVisibleOld] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const toggleVisibilityOld = () => setIsVisibleOld(!isVisibleOld);
  const toggleVisibilityNew = () => setIsVisibleNew(!isVisibleNew);
  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  const { updatePassword, idUser, errors } = useAuthContext();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePassword(idUser.pk_cedula_user, formData);
      if(response.status === 200) {
          onClose();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 px-4">
      {errors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
            {error}
          </div>
        ))
      }  
      <TextInput
        label=""
        aria-label="Contraseña anterior"
        variant="bordered"
        placeholder="Contraseña anterior"
        icon={icono.iconoContraseña}
        endContent={
          <button
            type="button"
            onClick={toggleVisibilityOld}
            className="focus:outline-none"
          >
            {isVisibleOld ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisibleOld ? "text" : "password"}
        value={formData.oldPassword}
        name="oldPassword"
        onChange={handleChange}
      />
      <TextInput
        label=""
        aria-label="Nueva Contraseña"
        variant="bordered"
        placeholder="Nueva Contraseña"
        icon={icono.iconoContraseña}
        endContent={
          <button
            type="button"
            onClick={toggleVisibilityNew}
            className="focus:outline-none"
          >
            {isVisibleNew ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisibleNew ? "text" : "password"}
        value={formData.newPassword}
        name="newPassword"
        onChange={handleChange}
      />
      <TextInput
        label=""
        aria-label="Confirmar Contraseña"
        variant="bordered"
        placeholder="Confirmar Contraseña"
        icon={icono.iconoContraseña}
        endContent={
          <button
            type="button"
            onClick={toggleVisibilityConfirm}
            className="focus:outline-none"
          >
            {isVisibleConfirm ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisibleConfirm ? "text" : "password"}
        value={formData.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
      />
      <ModalFooter className="flex justify-center">
        <Button type="submit"   className="text-white bg-[#39A800] h-10 w-36 rounded-lg font-bold flex justify-center items-center">{titleBtn}</Button>
      </ModalFooter>
    </form>
  );
}

export default UpdateUserPasswordMolecule;
