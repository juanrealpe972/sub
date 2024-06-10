import React, { useEffect } from "react";
import { ModalForm } from "../organisms/ModalForm";
import RegisterDepartMolecule from "../molecules/RegisterDepartMolecule";
import { useDepartContext } from "../../context/DeparContext";

function FormDepartamento ({ open, onClose, title, titleBtn, mode }) {
  const { cerrarModal, setCerrarModal } = useDepartContext();
<<<<<<< HEAD

=======
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
  useEffect(() => {
    if (cerrarModal) {
      onClose();
      setCerrarModal(false);
    }
  }, [cerrarModal, onClose, setCerrarModal]);
  
  return (
    <>
      <ModalForm open={open} onClose={onClose} title={title} >
        <RegisterDepartMolecule mode={mode} titleBtn={titleBtn} />
      </ModalForm>
    </>
  );
};

export default FormDepartamento