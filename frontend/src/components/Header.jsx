import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { CiCircleList, CiSearch } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { TbSunHigh } from "react-icons/tb";

import ModalCerrarSesion from "./ModalCerrarSesion";
import ModalMessaAndNoti from "./ModalMessaAndNoti";
import SubastaFormulario from "../pages/SubastaForm";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TextSubAtom from "./atoms/TextSubAtom";
import AvatarAtom from "./atoms/AvatarAtom";
import ButtonAtom from "./atoms/ButtonAtom";
import { icono } from "./atoms/IconsAtom";
import ButtonCerrarModalAtom from "./atoms/ButtonCerrarModalAtom";

function Header() {
  const { isAuthenticated } = useAuth();
  const [abrirModalLogin, setabrirModalLogin] = useState(false);
  const [abrirCerrarSesion, setAbrirCerrarSesion] = useState(false);
  const [abrirModalRegister, setabrirModalRegister] = useState(false);
  const [abrirModalSubasta, setAbrirModalSubasta] = useState(false);
  const [abrirBell, setAbrirBell] = useState(false);
  const [isMoonSelected, setIsMoonSelected] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <>
      {isAuthenticated ? (
        <nav
          className={`flex justify-between items-center bg-verdeSena2 w-full p-4 shadow-sm `}
        >
          <div className="flex flex-col">
            <TextSubAtom to="/" color="blanco" text="Bienvenido" />
          </div>
          <div className="relative">
            <CiSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar usuarios"
              className="px-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <CiCircleList className="absolute top-3 right-3 text-gray-400" />
          </div>
          <ul className="flex gap-x-3 items-center">
            <li>
              <button
                className="text-gray-800 hover:text-green-500"
                onClick={() => setAbrirModalSubasta(true)}
              >
                Crear subasta
              </button>
            </li>
            <li>
              <HiOutlineBellAlert
                className="w-5 h-5 cursor-pointer"
                onClick={toggleAbrirBell}
              />
            </li>
            <li className="cursor-pointer">
              {isMoonSelected ? (
                <IoMoonOutline onClick={toggleTheme} />
              ) : (
                <TbSunHigh onClick={toggleTheme} />
              )}
            </li>
            <li>
              <Link
              to="profile"
                className="flex items-center gap-x-2"
                onClick={toggleCerrarSesionModal}
              >
                <AvatarAtom img="profile_user.jfif" />
                <div>
                  <span className="text-gray-600 text-sm">Juan Camilo</span>
                  <p className="-mt-1 text-xs text-gray-400">Vendedor</p>
                </div>
              </Link>
            </li>
          </ul>
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
          {abrirModalSubasta && (
            <div className="fixed inset-0 flex justify-center items-center bg-negro bg-opacity-30 backdrop-blur-sm">
              <div className="absolute bg-blanco rounded-xl p-2">
                <SubastaFormulario />
                <ButtonCerrarModalAtom
                  onClose={() => setAbrirModalSubasta(false)}
                />
              </div>
            </div>
          )}
        </nav>
      ) : (
        <nav
          className={`flex justify-between items-center bg-verdeSena1 fixed w-full m-0 top-0 p-4 shadow-sm 
          ${scrollY > 0 ? "bg-opacity-60" : ""}`}
        >
          <div className="flex items-center">
            <AvatarAtom img="isotipo-SubCoffee.png" />
            <TextSubAtom to="/" color="cafeClaroLogo" text="Sub" />
            <TextSubAtom to="/" color="cafeOscuroLogo" text="Coffee" />
          </div>
          <div className="flex items-center gap-x-3">
            <div className="cursor-pointer">
              {isMoonSelected ? (
                <IoMoonOutline onClick={toggleTheme} />
              ) : (
                <TbSunHigh onClick={toggleTheme} />
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
        <div className="fixed inset-0 flex justify-center items-center bg-negro bg-opacity-30 backdrop-blur-sm">
          <div className="absolute bg-blanco rounded-xl p-2">
            <LoginPage />
            <ButtonCerrarModalAtom onClose={() => setabrirModalLogin(false)} />
          </div>
        </div>
      )}
      {abrirModalRegister && (
        <div className="fixed inset-0 flex justify-center items-center bg-negro bg-opacity-30 backdrop-blur-sm">
          <div className="absolute bg-blanco rounded-xl p-2">
            <RegisterPage />
            <ButtonCerrarModalAtom
              onClose={() => setabrirModalRegister(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
