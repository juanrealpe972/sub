import React, { createContext, useState } from "react";
import {
  getDeparts,
  createDeparts,
  UpdateDepartActivar,
  UpdateDepartDesact,
  updateDeparts,
} from "../api/api.departamentos";
import ModalMessage from "../nextui/ModalMessage";

const DeparContext = createContext();

export const DeparProvider = ({ children }) => {
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  const getDepartamentos = async () => {
    try {
      const res = await getDeparts();
      setDepartamentos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createDepartamento = async (data) => {
    try {
      const response = await createDeparts(data);
      getDepartamentos();
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const updateDepartamento = async (id, data) => {
    try {
      const response = await updateDeparts(id, data);
      getDepartamentos();
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const desactivarDepartamento = async (id) => {
    try {
      await UpdateDepartDesact(id);
      getDepartamentos();
      setMensaje("¡Departamento desactivado con éxito! Ahora este no podrá ser utilizado por los usuarios.");
      setModalMessage(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const activarDepartamento = async (id) => {
    try {
      await UpdateDepartActivar(id);
      getDepartamentos();
      setMensaje("¡Departamento activado con éxito! Ahora este listo para ser utilizado por los usuarios.");
      setModalMessage(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <DeparContext.Provider
      value={{
        errors,
        departamentos,
        setDepartamentos,
        getDepartamentos,
        createDepartamento,
        updateDepartamento,
        desactivarDepartamento,
        activarDepartamento,
      }}
    >
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      {children}
    </DeparContext.Provider>
  );
};

export default DeparContext;