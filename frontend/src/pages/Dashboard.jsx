import { Link } from "react-router-dom";
import BuenasPracticas from "../components/BuenasPracticas";
import NuestroUsuarios from "../components/NuestroUsuarios";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-center px-14">
        <span className="text-black text-4xl text-center">
          Bienvenido a Subcoffee una plataforma online donde te podras conectar
          con diferentes usuarios para subastar y pujar por café de alta calidad
        </span>
        <img src="./src/assets/dashboard.png"/>
      </div>
      <div className="w-full py-11">
        <h3 className="text-4xl font-bold ml-5 my-5">Historial de subastas</h3>
        <BuenasPracticas />
      </div>
      <div className="py-3">
        <h3 className="text-2xl font-bold ml-5 my-3">
          Subasta la veriedad de café de tu gusto
        </h3>
        <p className="ml-5">
          Muchos de nuestro usuario ya subastaron el producto de su gusto, que
          esperas para subastar tu café
        </p>
        <NuestroUsuarios />
      </div>
      <div className="flex items-center justify-between bg-slate-200">
        <h3 className="w-2/4 text-3xl font-bold mx-20 my-12">
          ¿Quieres subastar tu café? Hazlo ahora totalmente gratis desde
          subcoffee
        </h3>
        <ul className="flex gap-x-28 p-5 w-2/4 justify-center">
          <li>
            <Link
              to={"/login"}
              className="text-white rounded-lg py-2 px-5 bg-[#39A900] hover:bg-green-800 border-white border-2"
            >
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link
              to={"/register"}
              className="text-white rounded-lg py-2 px-5 bg-[#39A900] hover:bg-green-800 border-white border-2"
            >
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center py-3">
        <div className="grow border-b border-gray-400"></div>
        <span className="shrink px-1 pb-1 font-semibold text-gray-500">Subcoffee</span>
        <div className="grow border-b border-gray-400"></div>
      </div>
      <p className="text-center text-xs pb-3">
        ©Subcoffee, todos los derechos reservados
      </p>
    </>
  );
}

export default Dashboard;
