import React, { createContext, useContext, useEffect, useState } from "react";
import ModalMessage from "../nextui/ModalMessage";

const CalificacionesContext = createContext();

export const useCalificacionesContext = () => {
  const context = useContext(CalificacionesContext)
  if (!context) {
    throw new Error('Debes usar CalifiProvider en el App')
  }
  return context;
}

export const CalifiProvider = ({ children }) => {
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <CalificacionesContext.Provider
      value={{

      }}
    >
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      {children}
    </CalificacionesContext.Provider>
  );
};

export default CalificacionesContext;
