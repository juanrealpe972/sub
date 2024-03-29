import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiCircleList, CiSearch } from "react-icons/ci";
import RegisterUser from "../pages/RegisterUser";

import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { TbSunHigh } from "react-icons/tb";

import ModalCerrarSesion from "./ModalCerrarSesion";
import ModalMessaAndNoti from "./ModalMessaAndNoti";
import SubastaFormulario from "../pages/SubastaForm";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated } = useAuth();
  const [abrirModalLogin, setabrirModalLogin] = useState(false);
  const [abrirCerrarSesion, setAbrirCerrarSesion] = useState(false);
  const [abrirModalRegister, setabrirModalRegister] = useState(false);
  const [abrirModalSubasta, setAbrirModalSubasta] = useState(false);
  const [abrirBell, setAbrirBell] = useState(false);
  const [isMoonSelected, setIsMoonSelected] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <nav
          className={`flex justify-between items-center text-black text-lg bg-white  w-full py-2 px-4 border shadow-sm ${
            scrollY > 0 ? "bg-opacity-90" : ""
          }`}
        >
          <div className="flex flex-col">
            <Link to={"/subcoffee"} className="text-gray-800">
              Bienvenido
            </Link>
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
              <button
                className="flex items-center gap-x-2"
                onClick={toggleCerrarSesionModal}
              >
                <img
                  src="./src/assets/profile_user.jfif"
                  alt=""
                  className="w-7 h-7 rounded-full cursor-pointer"
                />
                <div>
                  <span className="text-gray-600 text-sm">Juan Camilo</span>
                  <p className="-mt-1 text-xs text-gray-400">Vendedor</p>
                </div>
              </button>
            </li>
          </ul>
          {abrirCerrarSesion && (
            <div className="absolute top-16 right-2 flex justify-center items-center">
              <div className="bg-white rounded-xl">
                <ModalCerrarSesion onClose={toggleCerrarSesionModal} />
              </div>
            </div>
          )}
          {abrirBell && (
            <div className="absolute top-16 right-32 flex justify-center items-center">
              <div className="bg-white rounded-xl w-80">
                <ModalMessaAndNoti onClose={toggleAbrirBell} />
              </div>
            </div>
          )}
          {abrirModalSubasta && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm">
              <div className="absolute bg-white rounded-xl p-4">
                <SubastaFormulario
                  onClose={() => setAbrirModalSubasta(false)}
                />
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 focus:outline-none"
                  onClick={() => setAbrirModalSubasta(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </nav>
      ) : (
        <nav
          className={`flex justify-between items-center text-white bg-[#39A900] fixed w-full m-0 top-0 p-4 border shadow-sm ${
            scrollY > 0 ? "bg-opacity-55" : ""
          }`}
        >
          <div className="flex items-center">
            <Link to={"/"} className="flex items-center text-white">
              <img
                src="./src/assets/isotipo-SubCoffee.png"
                alt="Logo Subcoffee"
                className="h-8 w-auto mr-2"
              />
              <span className="font-roboto-black text-cafeClaroLogo text-2xl">
                Sub
              </span>
              <span className="font-roboto-black text-cafeOscuroLogo text-2xl">
                Coffee
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-x-3">
            <IoSunnyOutline />
            <button
              className="bg-verdeSena1 py-1 px-3 rounded-lg hover:bg-naranjaSena text-white font-bold text-sm transition-colors"
              onClick={() => setabrirModalLogin(true)}
            >
              Iniciar sesión
            </button>
            <button
              className="bg-verdeSena1 py-1 px-3 rounded-lg hover:bg-naranjaSena text-white font-bold text-sm transition-colors"
              onClick={() => setabrirModalRegister(true)}
            >
              Registrarse
            </button>
          </div>
        </nav>
      )}
      {abrirModalLogin && (
        <div className="fixed inset-0 flex justify-center items-center bg-negro bg-opacity-30 backdrop-blur-sm">
          <div className="absolute bg-blanco rounded-xl p-2">
            <LoginPage onClose={() => setabrirModalLogin(false)} />
            <button
              className="absolute top-4 right-4 text-grisMedio3 hover:text-naranjaSena focus:outline-none"
              onClick={() => setabrirModalLogin(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {abrirModalRegister && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="absolute bg-white rounded-xl p-4">
            <RegisterUser onClose={() => setabrirModalRegister(false)} />
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 focus:outline-none"
              onClick={() => setabrirModalRegister(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
