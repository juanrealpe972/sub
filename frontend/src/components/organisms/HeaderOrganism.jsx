import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

import { icono } from "../atoms/IconsAtom";
import TextSubAtom from "../atoms/TextSubAtom";
import AvatarAtom from "../atoms/AvatarAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import SearchBarMolecule from "../molecules/SearchBarMolecule";
import ModalCerrarSesion from "../molecules/ModalLogoutMolecule";
import ModalMessaAndNoti from "../ModalMessaAndNoti";
import IconHeaderAtom from "../atoms/IconHeaderAtom";
import ButtonCerrarModalAtom from "../atoms/ButtonCerrarModalAtom";
import AbrirModalTemplate from "../templates/AbrirModalTemplate";
import LoginPageOrganism from "./LoginPageOrganism";
import RegisterPageOrganism from "./RegisterPageOrganism";
import SubastaFormPageOrganism from "./SubastaFormPageOrganism";

function HeaderOrganism() {
  const { isAuthenticated } = useAuth();
  const [abrirModalLogin, setabrirModalLogin] = useState(false);
  const [abrirCerrarSesion, setAbrirCerrarSesion] = useState(false);
  const [abrirModalRegister, setabrirModalRegister] = useState(false);
  const [abrirModalSubasta, setAbrirModalSubasta] = useState(false);
  const [abrirBell, setAbrirBell] = useState(false);
  const [isMoonSelected, setIsMoonSelected] = useState(false);
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

  const toggleCerrarSesionModal = () => {
    setAbrirCerrarSesion(!abrirCerrarSesion);
    setAbrirBell(false);
  };

  const toggleAbrirBell = () => {
    setAbrirBell(!abrirBell);
    setAbrirCerrarSesion(false);
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
          <SearchBarMolecule />
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
              <div>
                <span className="text-gray-600 text-sm">Juan Camilo</span>
                <p className="text-xs text-gray-400">Vendedor</p>
              </div>
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
          <ButtonCerrarModalAtom onClose={() => setabrirModalLogin(false)} />
        </AbrirModalTemplate>
      )}
      {abrirModalRegister && (
        <AbrirModalTemplate>
          <RegisterPageOrganism />
          <ButtonCerrarModalAtom onClose={() => setabrirModalRegister(false)} />
        </AbrirModalTemplate>
      )}
    </>
  );
}

export default HeaderOrganism;
