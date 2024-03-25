import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCircleList, CiSearch } from "react-icons/ci";
import LoginUser from "../pages/LoginUser";

function Header() {
  const [isAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [abrirModalLogin, setabrirModalLogin] = useState(false);
  const [abrirModalRegister, setabrirModalRegister] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="flex-1">
          <nav className="flex justify-between text-black font-roboto-regular text-lg bg-gray-200">
            <ul className="ml-5 flex gap-x-5 items-center">
              <li className="flex flex-col">
                <Link to={"/subcoffee"}>Bienvenido</Link>
                <span>Juan</span>
              </li>
            </ul>
            <div className="flex items-center">
              <CiSearch className="absolute" />
              <input
                type="text"
                placeholder="Buscar usuarios"
                value={searchTerm}
                onChange={handleSearch}
                className="px-6 pr-40 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <CiCircleList className="absolute" />
            </div>
            <ul className="flex gap-x-5 p-5">
              <li>
                <Link to={"/login"}>Crear subasta</Link>
              </li>
              <li>
                <Link to={"/profile"}>
                  <img
                    src="./src/assets/profile_user.jfif"
                    alt=""
                    className="w-7 h-7 rounded-full cursor-pointer"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="flex-1 fixed">
          <nav className="flex justify-between items-center text-black font-roboto-regular bg-[#39A900]">
            <ul className="flex gap-x-5 p-5">
              <li className="flex">
                <Link to={"/"} className="text-white text-xl flex items-center">
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
              </li>
            </ul>
            <ul className="flex gap-x-5 p-5">
              <li>
                <button
                  className="bg-verdeSena1 py-2 px-5 rounded-lg hover:bg-naranjaSena text-blanco border-2 font-bold m-5"
                  onClick={() => setabrirModalLogin(true)}
                >
                  Iniciar sesión
                </button>
                {abrirModalLogin && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
                      <LoginUser />
                    </div>
                    <button
                      className="bg-red-500 py-2 px-5 rounded-sm text-white font-bold m-5"
                      onClick={() => setabrirModalLogin(false)}
                    >
                      Cerrar modal
                    </button>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to={"/register"}
                  className="text-white rounded-lg p-3 hover:bg-green-800 border-white border-2"
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
