import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getSubastasRequest,
  deleteSubastaRequest,
  createSubastaRequest,
  getSubastaRequest,
  updateSubastaRequest,
} from "../api/subasta.api";

export const SubastaContext = createContext();

export const useSubasta = () => {
  const context = useContext(SubastaContext);
  if (!context) {
    throw new Error("Debe usarse dentro de SubastaContextProviter");
  }
  return context;
};

export const SubastaContextProviter = ({ children }) => {
  const [subastas, setSubastas] = useState([]);
  const [erros, setErrors] = useState([]);

  const getSubastas = async () => {
    try {
      const res = await getSubastasRequest();
      setSubastas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createSubasta = async (subasta) => {
    try {
      const res = await createSubastaRequest(subasta);
      console.log(res);
      setSubastas([...subastas, response.data])
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const deleteSubasta = async (id) => {
    try {
      const res = await deleteSubastaRequest(id);
      if (res.status === 204)
        setSubastas(subastas.filter((subasta) => subasta.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getSubasta = async (id) => {
    try {
      const res = await getSubastaRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateSubasta = async (id, newFields) => {
    try {
      await updateSubastaRequest(id, newFields);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    if (erros.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [erros]);

  return (
    <SubastaContext.Provider
      value={{
        subastas,
        getSubastas,
        deleteSubasta,
        createSubasta,
        getSubasta,
        updateSubasta,
        erros,
      }}
    >
      {children}
    </SubastaContext.Provider>
  );
};
