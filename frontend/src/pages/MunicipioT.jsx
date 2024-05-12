import React, { useState, useEffect } from "react";
import axiosClient from "../api/axios";
import toast from "react-hot-toast";
import MunicipioTable from "../components/Guard/MunicipioTable.jsx";
import ModalMessage from "../nextui/ModalMessage.jsx";
import FormMunicipio from "../components/templates/FormMunicipio.jsx";

export function MunicipioT() {

  const [initialData, setInitialData] = useState(null);
  const [results, setResults] = useState([]);
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetchList(); //  Lista los datos al cargar la página
  }, []);

  const fetchList = async () => {
    try {
      const response = await axiosClient.get("/v1/municipios");
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching dates list:", error);
    }
  };

  const desactivarMunicipio = async (pk_codigo_muni) => {
    try {
      const response = await axiosClient.put( `/v1/municipiosdes/${pk_codigo_muni}` );
      if (response.status === 200) {
        setMensaje("¡Municipio desactivado con éxito! Ahora este no podrá ser utilizado los usuarios.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const activarMunicipio = async (pk_codigo_muni) => {
    try {
      const response = await axiosClient.put( `/v1/municipiosac/${pk_codigo_muni}` );
      if (response.status === 200) {
        setMensaje("¡Municipio activado con éxito! Ahora está listo para ser utilizado por los usuarios.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de activar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const id = localStorage.getItem("id_muni");

  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = mode === "create"
          ? await axiosClient.post("/v1/municipios", data)
          : await axiosClient.put(`/v1/municipios/${id}`, data);
      if (response.status === 200) {
        toast.success(response.data.message);
        setModalOpen(false);
        fetchList(); // Actualizar la lista de datos después de crear o actualizar
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error en el servidor:", error);
      toast.error("Error en el servidor");
    }
  };

  const handleToggle = (mode, initialData) => {
    setInitialData(initialData);
    setModalOpen(true);
    setMode(mode);
  };

  return (
    <div className="w-full flex flex-col items-center px-10">
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />

      <MunicipioTable
        actualizar={() => handleToggle("update", id)}
        registrar={() => handleToggle("create")}
        desactivar={desactivarMunicipio}
        activar={activarMunicipio}
        results={results}
      />
    </div>
  );
}

export default MunicipioT;
