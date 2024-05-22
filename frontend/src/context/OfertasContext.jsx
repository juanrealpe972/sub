import React, { createContext, useContext, useState } from "react";
import { createOferta, getOfertas } from "../api/api.ofertas";

const OfertasContext = createContext();

export const useOfertasContext = () => {
  const context = useContext(OfertasContext)
  if (!context) {
    throw new Error('Debes usar ofertaProvider en el App')
  }
  return context;
}
export const OfertaProvider = ({ children }) => {
  const [ofertas, setOfertas] = useState([])

  const getOferts = async () => {
    try {
      const response = await getOfertas()
      setOfertas(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const createOfert = async (data) => {
    try {
      const response = await createOferta(data)
      setOfertas(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <OfertasContext.Provider
      value={{
        ofertas,
        getOferts,
        createOfert
      }}
    >
      {children}
    </OfertasContext.Provider>
  );
};

export default OfertasContext;
