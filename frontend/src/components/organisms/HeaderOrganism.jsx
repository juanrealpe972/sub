import React, { useContext, useState } from "react";
import {
  Modal,
  User,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { icono } from "../atoms/IconsAtom";
import TextSubAtom from "../atoms/TextSubAtom";
import AvatarAtom from "../atoms/AvatarAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import SearchBarMolecule from "../molecules/SearchBarMolecule";
import ModalMessaAndNoti from "../molecules/ModalMessaAndNoti";
import IconHeaderAtom from "../atoms/IconHeaderAtom";
import AbrirModalTemplate from "../templates/AbrirModalTemplate";
import ModalBuscarMolecule from "../molecules/ModalBuscarMolecule";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import FormLoginOrganims from "./FormLoginOrganims";

function HeaderOrganism() {
  const [abrirBell, setAbrirBell] = useState(false);
  const [abrirBuscador, setAbrirBuscador] = useState(false);
  const [isMoonSelected, setIsMoonSelected] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isAuthenticated = window.localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const users = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();
  const { setUsers } = useContext(AuthContext);
  const URL = "http://localhost:4000/auth/login";

  const login = async (data, e) => {
    e.preventDefault();
    await axios.post(URL, data).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message, { duration: 5000 });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/subcoffee");
        setUsers(user);
      } else if (res.status === 401) {
        toast.error("Usuario no registrado");
      }
    }).catch((error) => console.log(error));
  };

  const logoutt = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Cierre de sesión exitoso");
  };

  const toggleAbrirBell = () => {
    setAbrirBell(!abrirBell);
    setAbrirBuscador(false);
  };

  const toggleAbrirModalBuscador = () => {
    setAbrirBuscador(!abrirBuscador);
    setAbrirBell(false);
  };

  const toggleTheme = () => {
    setIsMoonSelected((prevValue) => !prevValue);
  };

  const handleToggle = () => {
    setModalOpen(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <nav className="flex justify-between items-center bg-gray-300 p-4 shadow-sm">
          <div className="flex flex-col">
            <TextSubAtom
              to="/subcoffee"
              color="cafeClaroLogo"
              text="Bienvenido"
            />
          </div>
          <SearchBarMolecule onClick={() => setAbrirBuscador(true)} />
          <div className="flex gap-x-3 items-center">
            <IconHeaderAtom onClick={toggleAbrirBell}>
              <icono.iconoCampana className="h-5 w-5" />
            </IconHeaderAtom>
            {isMoonSelected ? (
              <icono.iconoLuna
                onClick={toggleTheme}
                className="text-blanco cursor-pointer"
              />
            ) : (
              <icono.iconoSol
                onClick={toggleTheme}
                className="text-blanco cursor-pointer"
              />
            )}
            <div className="flex items-center gap-4">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{ src: `./img/${ users.imagen_user ? users.imagen_user : "usernotfound.png" }`, }}
                    className="transition-transform"
                    description={`${users.rol_user}`}
                    name={`${users.nombre_user}`}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    onClick={() => navigate(`/profile/${users.pk_cedula_user}`)}
                    className="text-center bg-gray-400 hover:bg-gray-200 border text-white py-2"
                  >
                    Perfil
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    onPress={onOpen}
                    className="text-center bg-red-600 border text-white py-2"
                  >
                    Cerrar sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              <ModalHeader className="flex justify-center">
                <icono.iconoInterrogation className="text-red-600 w-32 h-32" />
              </ModalHeader>
              <ModalBody>
                <p className="text-black font-semibold text-center">
                  ¿Estás seguro de cerrar sesión?
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center mb-4">
                <Button
                  className="bg-red-600 text-white hover:bg-red-500 w-40 rounded-lg"
                  onClick={logoutt}
                >
                  Cerrar sesión
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {abrirBell && (
            <div className="absolute top-16 right-32 flex justify-center items-center">
              <div className="bg-blanco rounded-xl w-80">
                <ModalMessaAndNoti onClose={toggleAbrirBell} />
              </div>
            </div>
          )}
          {abrirBuscador && (
            <div className="absolute top-16 left-[585px] flex justify-center items-center">
              <div className="bg-blanco rounded-xl w-[300px]">
                <ModalBuscarMolecule onClose={toggleAbrirModalBuscador} />
              </div>
            </div>
          )}
        </nav>
      ) : (
        <>
          <nav className="flex justify-between items-center bg-gray-300 fixed w-full m-0 top-0 p-4 shadow-sm z-20">
            <div className="flex items-center">
              <AvatarAtom img="isotipo-SubCoffee.png" />
              <TextSubAtom to="/" color="gray-600" text="SubCoffee" />
            </div>
            <div className="flex items-center gap-x-3">
              <div className="cursor-pointer">
                {isMoonSelected ? (
                  <icono.iconoLuna
                    onClick={toggleTheme}
                    className="text-blanco"
                  />
                ) : (
                  <icono.iconoSol onClick={toggleTheme} className="text-blanco" />
                )}
              </div>
              <ButtonAtom onClick={() => handleToggle(true)}>
                Iniciar sesión
              </ButtonAtom>
            </div>
          </nav>
          <FormLoginOrganims
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            handleSubmit={login}
          />
      </>
      )}
    </>
  );
}

export default HeaderOrganism;
