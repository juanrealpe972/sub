import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <div className="flex-1">
          <nav className="flex justify-between text-black font-roboto-regular text-lg bg-gray-200">
            <ul className="ml-5 flex gap-x-5 items-center">
              <li className="flex flex-col">
                <Link to={"/"}>Bienvenido</Link>
                <span>Juan</span>
              </li>
            </ul>
            <ul className="flex gap-x-5 p-5">
              <li>
                <Link to={"/login"}>Crear subasta</Link>
              </li>
              <li>
                <Link to={"/register"}>Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="flex-1">
          <nav className="flex justify-between text-black font-roboto-regular bg-[#39A900]">
            <ul className="flex gap-x-5 p-5">
              <li>
                <Link to={"/"} className="text-white text-xl">Subcoffee</Link>
              </li>
            </ul>
            <ul className="flex gap-x-5 p-5">
              <li>
                <Link to={"/login"} className="text-white rounded-lg p-3 hover:bg-green-800 border-white border-2">Iniciar sesión</Link>
              </li>
              <li>
                <Link to={"/register"} className="text-[#39A900] bg-white p-3 rounded-lg">Registrarse</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
