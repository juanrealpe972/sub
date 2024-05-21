import React, { createContext, useContext, useState } from "react";
import {
  getFincaForUser,
  createFinca,
  updateFinca,
  updateFincaActivar,
  updateFincaDesact,
} from "../api/api.finca";
import ModalMessage from "../nextui/ModalMessage";

const FincaContext = createContext();

export const useFincaContext = () => {
  const context = useContext(FincaContext)
  if (!context) {
    throw new Error('Debes usar MunicipioProvider en el App')
  }
  return context;
}

export const FincaProvider = ({ children }) => {
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState([]);
  const [fincas, setFincas] = useState([]);
  const [idFinca, setIdFinca] = useState(0)

  const getFinca = async (user) => {
    try {
      const res = await getFincaForUser(user);
      setFincas(res.data.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const createFincas = async (data, user) => {
    try {
      const response = await createFinca(data);
      getFinca(user);
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const updateFincas = async (id, data, user) => {
    try {
      const response = await updateFinca(id, data);
      getFinca(user);
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const desactivarFincas = async (id, user) => {
    try {
      const response = await updateFincaDesact(id);
      getFinca(user);
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const activarFincas = async (id, user) => {
    try {
      const response = await updateFincaActivar(id);
      getFinca(user);
      setMensaje(response.data.message);
      setModalMessage(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <FincaContext.Provider
      value={{
        errors,
        fincas,
        idFinca,
        setIdFinca,
        setFincas,
        getFinca,
        createFincas,
        updateFincas,
        desactivarFincas,
        activarFincas,
      }}
    >
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      {children}
    </FincaContext.Provider>
  );
};

export default FincaContext;
