import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import axiosClient from "../api/axios";
import FormVariedadUserOrganim from "../components/organisms/FormVariedadUserOrganim";
import VariedadUserTable from "../components/Guard/VariedadUserTable";
import toast from "react-hot-toast";

export default function MiSubastaT() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [initialData, setInitialData] = useState(null);
  const [results, setResults] = useState([]);
  const storedUser = localStorage.getItem("user");
  const users = storedUser ? JSON.parse(storedUser) : null;

  const {
    isOpen: isOpenFinca,
    onOpen: onOpenFinca,
    onClose: onCloseFinca,
  } = useDisclosure();

  useEffect(() => {
    fetchList(); //  Lista los datos al cargar la página
  }, []);

  const fetchList = async () => {
    try {
      const response = await axiosClient.get(`/v1/variedad/${users.pk_cedula_user}`);
      setResults(response.data.data);
    } catch (error) {
      console.error("Error fetching dates list:", error);
    }
  };

  const peticionDesactivar = async (pk_id_vari) => {
    try {
      const response = await axiosClient.put(`/v1/variedaddes/${pk_id_vari}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchList(); // Actualizar la lista de datos después de desactivar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const peticionActivar = async (pk_id_vari) => {
    try {
      const response = await axiosClient.put(`/v1/variedadac/${pk_id_vari}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchList(); // Actualizar la lista de datos después de activar
      }
    } catch (error) {
      toast.error("Error en el sistema " + error);
    }
  };

  const contenido = [
    // { uid: "pk_id_vari", name: "Codigo Variedad", sortable: true },
    { uid: "nombre_tipo_variedad", name: "Tipo Variedad", sortable: false },
    { uid: "descripcion_vari", name: "Descripción Variedad", sortable: true },
    { uid: "imagen_vari", name: "Imagen Variedad", sortable: true },
    { uid: "estado_vari", name: "Estado Variedad", sortable: true },
    { uid: "nombre_finca", name: "Finca", sortable: true },
    { uid: "actions", name: "Acciones", sortable: false },
  ];

  const id = localStorage.getItem("id_variedad");

  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response =
        mode === "create"
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
    <div className="w-full flex flex-col items-center px-10">
      <div className="pb-6">
        <div className="flex justify-center pt-8 pb-2">
          <img src="./public/cafe.png" alt="Cafe_imagen" className="rounded-s-2xl transition-width duration-300 md:max-w-[25%] lg:max-w-[33.33%] xl:max-w-[50%] w-full lg:w-auto xl:w-auto" />
          <img src="./public/image.png" alt="Finca_imagen" className="rounded-e-2xl transition-width duration-300 md:max-w-[25%] lg:max-w-[33.33%] xl:max-w-[50%] w-full lg:w-auto xl:w-auto" />
        </div>
        <p className="text-center text-negro transition duration-300">
          ¡Tu finca tiene una historia que contar!
        </p>
      </div>
      <Button onClick={onOpenFinca}>Registrar finca</Button>
      <p>
        Registra todas las variedades de café que tienes en tu maravillosa finca
      </p>
      <div className="flex justify-center">
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
          desactivar={peticionDesactivar}
          activar={peticionActivar}
          data={contenido}
          results={results}
        />
      </div>

      <Modal isOpen={isOpenFinca} onClose={onCloseFinca} className="p-4">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center">
            Modal Title 1
          </ModalHeader>
          <ModalBody>
            <p>Contenido del primer modal...</p>
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <Button color="primary" onClick={onCloseFinca}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
