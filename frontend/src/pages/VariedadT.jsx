import React, { useEffect, useState } from "react";
import axiosClient from "../api/axios";
import VariedadUserTable from "../components/Guard/VariedadUserTable";
import toast from "react-hot-toast";
import FormVariedadUserOrganim from "../components/organisms/FormVariedadUserOrganim";
import ModalMessage from "../nextui/ModalMessage";

export default function VariedadT() {
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
      const response = await axiosClient.get( `/v1/variedaduser/${users.pk_cedula_user}` );
      setResults(response.data.data);
    } catch (error) {
      console.error("Error fetching dates list:", error);
    }
  };

  const desactivarVariedad = async (pk_id_vari) => {
    try {
      const response = await axiosClient.put(`/v1/variedaddes/${pk_id_vari}`);
      if (response.status === 200) {
        setMensaje("¡Variedad desactivada con éxito! Ahora no podrá ser utilizada para crear una subasta. Y si ya tienes registrada una subasta con esta variedad, esta se desactivará automáticamente.");
        setModalMessage(true);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const activarVariedad = async (pk_id_vari) => {
    try {
      const response = await axiosClient.put(`/v1/variedadac/${pk_id_vari}`);
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
    // { uid: "pk_id_vari", name: "Codigo Variedad", sortable: true },
    { uid: "nombre_tipo_vari", name: "Tipo Variedad", sortable: false },
    { uid: "descripcion_vari", name: "Descripción Variedad", sortable: true },
    { uid: "imagen_vari", name: "Imagen Variedad", sortable: true },
    { uid: "estado_vari", name: "Estado Variedad", sortable: true },
    { uid: "nombre_fin", name: "Finca", sortable: true },
    { uid: "actions", name: "Acciones", sortable: false },
  ];

  const id = localStorage.getItem("id_variedad");

  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = mode === "create"
          ? await axiosClient.post("/v1/variedad", data)
          : await axiosClient.put( `/v1/variedad/${initialData.pk_id_vari}`, data );
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
    <div className="w-full bg-gray-100 flex flex-col items-center px-10">
      <ModalMessage
        isOpen={modalMessage}
        onClose={() => setModalMessage(false)}
        label={mensaje}
      />
      <FormVariedadUserOrganim
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        actionLabel={mode === "create" ? "Registrar" : "Actualizar"}
        initialData={initialData}
        handleSubmit={handleSubmit}
        mode={mode}
      />
      <VariedadUserTable
        actualizar={() => handleToggle("update", id)}
        registrar={() => handleToggle("create")}
        desactivar={desactivarVariedad}
        activar={activarVariedad}
        data={contenido}
        results={results}
      />
    </div>
  );
}