import React, { useEffect, useState } from "react";
import axiosClient from "../api/axios";
import toast from "react-hot-toast";
import FormFincaOrganims from "../components/organisms/FormFincaOrganims";
import FincaTable from "../components/Guard/FincaTable";
import ModalMessage from "../nextui/ModalMessage";

export default function FincaT() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [initialData, setInitialData] = useState(null);
  const [results, setResults] = useState([]);
  const [modalMessage, setModalMessage] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const storedUser = localStorage.getItem("user");
  const users = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    fetchList(); //  Lista los datos al cargar la página
  }, []);

  const fetchList = async () => {
    try {
      const response = await axiosClient.get( `/v1/finca/${users.pk_cedula_user}` );
      setResults(response.data.data);
    } catch (error) {
      console.error("Error fetching dates list:", error);
    }
  };

  const desactivarFinca = async (pk_id_vari) => {
    try {
      const response = await axiosClient.put(`/v1/fincades/${pk_id_vari}`);
      if (response.status === 200) {
        setMensaje("¡Finca desactivada con éxito! Ahora no se podrá utilizar para crear variedades de café ni subastar. Si ya has registrado una variedad o subasta con esta finca, se desactivarán automáticamente.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const activarFinca = async (pk_id_vari) => {
    try {
      const response = await axiosClient.put(`/v1/fincaac/${pk_id_vari}`);
      if (response.status === 200) {
        setMensaje("¡Variedad activada con éxito! Ahora está lista para ser utilizada.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de activar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const contenido = [
    // { uid: "pk_id_fin", name: "Codigo Finca", sortable: true },
    { uid: "nombre_fin", name: "Nombre Finca", sortable: false },
    { uid: "imagen_fin", name: "Imagen Finca", sortable: true },
    { uid: "descripcion_fin", name: "Descripción Finca", sortable: true },
    { uid: "estado_fin", name: "Estado Finca", sortable: true },
    { uid: "nombre_vere", name: "Vereda", sortable: true },
    { uid: "nombre_muni", name: "Municipio", sortable: true },
    { uid: "nombre_depar", name: "Departamento", sortable: true },
    { uid: "actions", name: "Acciones", sortable: false },
  ];

  const id = localStorage.getItem("id_finca");

  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = mode === "create"
          ? await axiosClient.post("/v1/finca", data)
          : await axiosClient.put(`/v1/finca/${initialData.pk_id_vari}`, data);
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
    <div className="w-full flex bg-gray-100 flex-col items-center">
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      <FormFincaOrganims
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        actionLabel={mode === "create" ? "Registrar" : "Actualizar"}
        initialData={initialData}
        handleSubmit={handleSubmit}
        mode={mode}
      />
      <FincaTable
        actualizar={() => handleToggle("update", id)}
        registrar={() => handleToggle("create")}
        desactivar={desactivarFinca}
        activar={activarFinca}
        data={contenido}
        results={results}
      />
    </div>
  );
}
