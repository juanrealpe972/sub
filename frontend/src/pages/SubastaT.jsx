import React, { useState, useEffect } from "react";
import axiosClient from "../api/axios";
import toast from "react-hot-toast";
import ModalMessage from "../nextui/ModalMessage.jsx";
import SubastaTable from "../components/Guard/SubastaTable.jsx";
import FormSubastaOrganism from "../components/organisms/FormSubastaOrganism.jsx";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "../nextui/PlusIcon.jsx";

function SubastaT() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
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
      const response = await axiosClient.put(`/v1/municipiosdes/${pk_codigo_muni}`);
      if (response.status === 200) {
        setMensaje("Subasta desactivado con éxito! Ahora este no podrá ser utilizado los usuarios.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const activarMunicipio = async (pk_codigo_muni) => {
    try {
      const response = await axiosClient.put(`/v1/municipiosac/${pk_codigo_muni}`);
      if (response.status === 200) {
        setMensaje("Subasta activado con éxito! Ahora está listo para ser utilizado por los usuarios.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de activar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const cambiarEspera = async (pk_codigo_muni) => {
    try {
      const response = await axiosClient.put(`/v1/municipiosdes/${pk_codigo_muni}`);
      if (response.status === 200) {
        setMensaje("Subasta desactivado con éxito! Ahora este no podrá ser utilizado los usuarios.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const cambiarProceso = async (pk_codigo_muni) => {
    try {
      const response = await axiosClient.put(`/v1/municipiosac/${pk_codigo_muni}`);
      if (response.status === 200) {
        setMensaje("Subasta activado con éxito! Ahora está listo para ser utilizado por los usuarios.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de activar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = mode === "create"
        ? await axiosClient.post("/v1/municipios", data)
        : await axiosClient.put(`/v1/municipios/${initialData.pk_codigo_muni}`, data);
      const message = response.data.message;
      if (response.status === 200) {
        toast.success(message);
        setModalOpen(false);
        fetchList(); // Actualizar la lista de datos después de crear o actualizar
      } else {
        toast.error(message);
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
      <Button color="primary" className="w-44" endContent={<PlusIcon />} onClick={() => setModalOpen(true)} >
        Registrar Subasta
      </Button>
      <FormSubastaOrganism
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        actionLabel={mode === "create" ? "Registrar" : "Actualizar"}
        initialData={initialData}
        handleSubmit={handleSubmit}
        mode={mode}
      />
      <SubastaTable />
    </div>
  );
}

export default SubastaT