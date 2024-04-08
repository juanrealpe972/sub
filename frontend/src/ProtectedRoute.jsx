import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ModalProtectMolecule from './components/molecules/ModalProtectMolecule';

function ProtectedRoute() {
    const auth = window.localStorage.getItem('token');
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    if (auth) {
        return <Outlet />;
    } else {
        return (
            <>
                <ModalProtectMolecule
                    isOpen={showModal}
                    onRequestClose={handleCloseModal}
                    contentLabel="Iniciar sesión"
                >
                    <h2>Debes iniciar sesión primero.</h2>
                    <button onClick={handleCloseModal}>Cerrar</button>
                </ModalProtectMolecule>
                <button onClick={() => setShowModal(true)}>Mostrar modal</button>
            </>
        );
    }
}

export default ProtectedRoute;
