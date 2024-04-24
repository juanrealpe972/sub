import React, { useState, useEffect } from "react";
import axiosClient from "../api/axios";
import toast from "react-hot-toast";
import TipoVariedadTable from "../components/Guard/TipoVariedadTable.jsx";
import FormTipoVariOrganism from "../components/organisms/FormTipoVariOrganism.jsx";

export function TipoVariedadT() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [initialData, setInitialData] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchList(); //  Lista los datos al cargar la página
  }, []);

  const fetchList = async () => {
    try {
      const response = await axiosClient.get("/v1/tipo_vari");
      setResults(response.data.data);
    } catch (error) {
      console.error("Error fetching dates list:", error);
    }
  };

  const peticionDesactivar = async (pk_id_tipo_vari) => {
    try {
      const response = await axiosClient.put(`/v1/tipo_varides/${pk_id_tipo_vari}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };
  
  const peticionActivar = async (pk_id_tipo_vari) => {
    try {
      const response = await axiosClient.put(`/v1/tipo_variac/${pk_id_tipo_vari}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchList(); // Actualizar la lista de datos después de activar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const contenido = [
    { uid: "pk_id_tipo_vari", name: "Codigo Tipo Variedad", sortable: true },
    { uid: "nombre_tipo_vari", name: "Nombre Tipo Variedad", sortable: true },
    { uid: "estado_tipo_vari", name: "Estado Tipo Variedad", sortable: true },
    { uid: "actions", name: "Acciones", sortable: false },
  ];

const id =localStorage.getItem('id_tipo_vari')
  
  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = mode === "create"
        ? await axiosClient.post("/v1/tipo_vari", data)
        : await axiosClient.put(`/v1/tipo_vari/${initialData.pk_id_tipo_vari}`, data);

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
      <FormTipoVariOrganism
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        actionLabel={mode === "create" ? "Registrar" : "Actualizar"}
        initialData={initialData}
        handleSubmit={handleSubmit}
        mode={mode}
      />
      <TipoVariedadTable
        actualizar={() => handleToggle("update", id)}
        registrar={() => handleToggle("create")}
        desactivar={peticionDesactivar}
        activar={peticionActivar}
        data={contenido}
        results={results}
      />
    </div>
  );
}

export default TipoVariedadT;
