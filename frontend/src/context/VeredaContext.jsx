import React, { createContext, useState } from "react";
import {
  getVeredas,
  createVeredas,
  updateVeredas,
  updateVeredaActivar,
  updateVeredaDesact,
} from "../api/api.veredas";
import ModalMessage from "../nextui/ModalMessage";

const VeredaContext = createContext();

export const VeredaProvider = ({ children }) => {
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState([]);
  const [veredas, setVeredas] = useState([]);
  const [idVereda, setIdVereda] = useState(0)

  const getVeres = async () => {
    try {
      const res = await getVeredas();
      setVeredas(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createVeres = async (data) => {
    try {
      const response = await createVeredas(data);
      getVeres();
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const updateVeres = async (id, data) => {
    try {
      const response = await updateVeredas(id, data);
      getVeres();
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const desactivarVeres = async (id) => {
    try {
      const response = await updateVeredaDesact(id);
      getVeres();
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const activarVeres = async (id) => {
    try {
      const response = await updateVeredaActivar(id);
      getVeres();
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <VeredaContext.Provider
      value={{
        errors,
        veredas,
        idVereda,
        setIdVereda,
        setVeredas,
        getVeres,
        createVeres,
        updateVeres,
        desactivarVeres,
        activarVeres,
      }}
    >
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      {children}
    </VeredaContext.Provider>
  );
};

export default VeredaContext;
