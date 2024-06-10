<<<<<<< HEAD
import React, { createContext, useCallback, useContext, useState } from "react";
import { createOferta, deleteOfertasForSub, getOfertas, getOfertasForSub, getOfertaMayor } from "../api/api.ofertas";
=======
import React, { createContext, useContext, useState } from "react";
import { createOferta, getOfertas, getOfertasForSub } from "../api/api.ofertas";
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
import ModalMessage from "../nextui/ModalMessage";

const OfertasContext = createContext();

export const useOfertasContext = () => {
  const context = useContext(OfertasContext)
  if (!context) {
    throw new Error('Debes usar ofertaProvider en el App')
  }
  return context;
}
export const OfertaProvider = ({ children }) => {
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [ofertas, setOfertas] = useState([])
<<<<<<< HEAD
  const [ofertasMayor, setOfertaMayor] = useState([])
=======
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55

  const getOferts = async () => {
    try {
      const response = await getOfertas()
      setOfertas(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getOfertForSub = async (id) => {
    try {
      getOfertasForSub(id).then((response) => {
        setOfertas(response.data.data)
      })
    } catch (error) {
      console.log(error);
    }
  }

<<<<<<< HEAD
  const getOfertMayor = useCallback(async(id) => {
    try {
      getOfertaMayor(id).then((response) => {
        setOfertaMayor(response.data.data)
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

=======
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
  const createOfert = async (data, id) => {
    try {
      const response = await createOferta(data)
      setOfertas(response.data)
      setMensaje(response.data.message);
      setModalMessage(true);
      getOfertForSub(id)
    } catch (error) {
      console.log(error);
    }
  }

<<<<<<< HEAD
  const eliminarOfertas = async (id, user) => {
    try {
      await deleteOfertasForSub(id, user)
      getOfertForSub(id)
    } catch (error) {
      console.log(error);
    }
  }

=======
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
  return (
    <OfertasContext.Provider
      value={{
        ofertas,
        getOferts,
        createOfert,
<<<<<<< HEAD
        getOfertForSub,
        eliminarOfertas,
        getOfertMayor,
        ofertasMayor
=======
        getOfertForSub
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
      }}
    >
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      {children}
    </OfertasContext.Provider>
  );
};

export default OfertasContext;
