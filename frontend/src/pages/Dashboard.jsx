import { Link } from "react-router-dom";
import ImagesSlider from "../components/ImagesSlider";
import BuenasPracticas from "../components/BuenasPracticas";
import NuestroUsuarios from "../components/NuestroUsuarios";

function Dashboard() {
  return (
    <>
      <div className="w-full flex justify-center items-end my-10 m-0 p-0">
        <ImagesSlider />
        <span className="absolute text-white text-4xl mx-52 mb-28 text-center">
          Bienvenido a subcoffee una plataforma online para subastar y pujar por
          café de alta calidad
        </span>
        <Link
          to={"/login"}
          className="text-white absolute mb-8 rounded-lg py-3 px-5 bg-[#39A900] hover:bg-green-900 font-semibold"
        >
          Registratre gratis
        </Link>
      </div>
      <div className="w-full flex items-center">
        <div className="flex flex-col p-5 w-2/4">
          <h2 className="text-4xl">Nuestra comunidad gusta de subcoffee</h2>
          <Link
            to="/login"
            className="py-3 mt-7 px-5 bg-[#39A900] hover:bg-green-800 rounded-lg w-56 text-center text-white font-roboto-bold"
          >
            Ver subastas
          </Link>
        </div>
        <div className="w-2/4 h-3/5">
          <img src="./src/assets/persona.jpg" alt="" className="rounded-lg" />
        </div>
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
        <NuestroUsuarios/>
      </div>
      <div className="flex items-center justify-between bg-slate-200">
        <h3 className="w-2/4 text-3xl font-bold mx-20 my-12">
          ¿Quieres subasta tu café? Hazlo ahora totalmente gratis desde
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
              className="text-[#39A900] bg-white py-2 px-5 rounded-lg border-[#39A900] border-2"
            >
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center py-3">
        <div className="grow border-b border-gray-400"></div>
        <span className="shrink px-1 pb-1 text-2xl">Subcoffee</span>
        <div className="grow border-b border-gray-400"></div>
      </div>
      <p className="text-center text-xs pb-3">
        ©Subcoffee, todos los derechos reservados
      </p>
    </>
  );
}

export default Dashboard;
