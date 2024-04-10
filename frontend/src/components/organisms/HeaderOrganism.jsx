import React, { useState, useEffect } from "react";

import { icono } from "../atoms/IconsAtom";
import TextSubAtom from "../atoms/TextSubAtom";
import AvatarAtom from "../atoms/AvatarAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import SearchBarMolecule from "../molecules/SearchBarMolecule";
import ModalCerrarSesion from "../molecules/ModalLogoutMolecule";
import ModalMessaAndNoti from "../molecules/ModalMessaAndNoti";
import IconHeaderAtom from "../atoms/IconHeaderAtom";
import ButtonCerrarModalAtom from "../atoms/ButtonCerrarModalAtom";
import AbrirModalTemplate from "../templates/AbrirModalTemplate";
import LoginPageOrganism from "./LoginPageOrganism";
import RegisterPageOrganism from "./RegisterPageOrganism";
import SubastaFormPageOrganism from "./SubastaFormPageOrganism";
import axiosClient from "../../api/axios";
import axios from "axios";
import ModalBuscarMolecule from "../molecules/ModalBuscarMolecule";

function HeaderOrganism() {
  const isAuthenticated = window.localStorage.getItem("token");
  const [abrirModalLogin, setabrirModalLogin] = useState(false);
  const [abrirCerrarSesion, setAbrirCerrarSesion] = useState(false);
  const [abrirModalRegister, setabrirModalRegister] = useState(false);
  const [abrirModalSubasta, setAbrirModalSubasta] = useState(false);
  const [abrirBell, setAbrirBell] = useState(false);
  const [abrirBuscador, setAbrirBuscador] = useState(false);
  const [isMoonSelected, setIsMoonSelected] = useState(false);
  const [usuario, setUsuario] = useState({});
  const token = localStorage.getItem("token");

  // const [scrollY, setScrollY] = useState(0);

  // Para que el header se ponga opacity en la parte superior de la pantalla al hacer scroll
  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  //   ${scrollY > 0 ? "bg-opacity-60" : ""}`}

  // useEffect(() => {
  //   axios
  //     .get("/v1/users", {
  //       headers: {
  //         token: token,
  //       },
  //     })
  //     .then((response) => {
  //       setUsuario(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  

  const toggleCerrarSesionModal = () => {
    setAbrirCerrarSesion(!abrirCerrarSesion);
    setAbrirBell(false);
  };

  const toggleAbrirBell = () => {
    setAbrirBell(!abrirBell);
    setAbrirCerrarSesion(false);
  };

  const toggleAbrirModalRegister = () => {
    setabrirModalRegister(!abrirModalRegister);
  };

  const toggleAbrirModalBuscador = () => {
    setAbrirBuscador(!abrirBuscador);
  };

  const toggleAbrirModalLogin = () => {
    setabrirModalLogin(!abrirModalLogin);
  };

  const toggleTheme = () => {
    setIsMoonSelected((prevValue) => !prevValue);
  };

  return (
    <>
      {isAuthenticated ? (
        <nav
          className={`flex justify-between items-center bg-verdeSena2 w-full p-4 shadow-sm `}
        >
          <div className="flex flex-col">
            <TextSubAtom
              to="/subcoffee"
              color="cafeClaroLogo"
              text="Bienvenido"
            />
          </div>
          <SearchBarMolecule onClick={() => setAbrirBuscador(true)}/>
          <div className="flex gap-x-3 items-center">
            <ButtonAtom onClick={() => setAbrirModalSubasta(true)}>
              Crear subasta
            </ButtonAtom>
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
            <button
              className="flex items-center gap-x-2"
              onClick={toggleCerrarSesionModal}
            >
              <AvatarAtom img="profile_user.jfif" />
              <span className="text-gray-600 text-sm">
                {usuario.nombre_user}
              </span>
              <p className="text-xs text-gray-400">{usuario.rol_user}</p>
            </button>
          </div>
          {abrirModalSubasta && (
            <AbrirModalTemplate>
              <SubastaFormPageOrganism />
              <ButtonCerrarModalAtom
                onClose={() => setAbrirModalSubasta(false)}
              />
            </AbrirModalTemplate>
          )}
          {abrirCerrarSesion && (
            <div className="absolute top-16 right-2 flex justify-center items-center">
              <div className="bg-blanco rounded-xl">
                <ModalCerrarSesion onClose={toggleCerrarSesionModal} />
              </div>
            </div>
          )}
          {abrirBell && (
            <div className="absolute top-16 right-32 flex justify-center items-center">
              <div className="bg-blanco rounded-xl w-80">
                <ModalMessaAndNoti onClose={toggleAbrirBell} />
              </div>
            </div>
          )}
          {abrirBuscador && (
            <div className="absolute top-16 left-[800px] flex justify-center items-center">
              <div className="bg-blanco rounded-xl w-[500px]">
                <ModalBuscarMolecule onClose={toggleAbrirModalBuscador} />
                <ButtonCerrarModalAtom
                onClose={() => setAbrirBuscador(false)}
              />
              </div>
            </div>
          )}
        </nav>
      ) : (
        <nav
          className={`flex justify-between items-center bg-verdeSena1 fixed w-full m-0 top-0 p-4 shadow-sm`}
        >
          <div className="flex items-center">
            <AvatarAtom img="isotipo-SubCoffee.png" />
            <TextSubAtom to="/" color={"cafeClaroLogo"} text="Sub" />
            <TextSubAtom to="/" color={"cafeOscuroLogo"} text="Coffee" />
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
            <ButtonAtom onClick={() => setabrirModalLogin(true)}>
              Iniciar sesión
            </ButtonAtom>
            <ButtonAtom onClick={() => setabrirModalRegister(true)}>
              Registrarse
            </ButtonAtom>
          </div>
        </nav>
      )}
      {abrirModalLogin && (
        <AbrirModalTemplate>
          <LoginPageOrganism />
          <ButtonCerrarModalAtom onClose={toggleAbrirModalLogin} />
        </AbrirModalTemplate>
      )}
      {abrirModalRegister && (
        <AbrirModalTemplate>
          <RegisterPageOrganism onClose={toggleAbrirModalRegister} />
          <ButtonCerrarModalAtom onClose={toggleAbrirModalRegister} />
        </AbrirModalTemplate>
      )}
    </>
  );
}

export default HeaderOrganism;
