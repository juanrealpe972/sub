import TiposDeCafe from "../components/TiposDeCafe";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-center px-14">
        <span className="text-black text-4xl text-center">
          Bienvenido a Subcoffee una plataforma online donde te podras conectar
          con diferentes usuarios para subastar y pujar por café de alta calidad
        </span>
        <img src="./src/assets/dashboard.png" />
      </div>
      <div className="w-full py-12">
        <h2 className="text-center text-4xl font-semibold">
          Una plataforma de café perfecta para todos
        </h2>
        <h3 className="text-lg font-semibold mt-8 text-center">
          Subasta o puja por el café de tu gusto.
        </h3>
        <TiposDeCafe />
      </div>
      <div className="w-full flex justify-center p-12 gap-x-20 items-center">
        <div className="px-12">
          <h2 className="text-3xl font-semibold my-4">Crear subasta</h2>
          <p className=" text-gray-700">
            Crea una subasta con el tipo de café de tu preferencia, agrega la
            descripción del mismo e información que llame la atención de los
            demás. Asi, Los usuarios podrán verlo e interesarse en él. Puede ser
            un café clásico, exótico o una mezcla única que quieras ofrecer al
            mundo.
          </p>
          <div className="flex gap-x-8 mt-8">
            <Link
              to={""}
              className="px-4 py-2 text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
            >
              Crear Subasta
            </Link>
            <Link
              to={""}
              className="px-4 py-2 text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
            >
              Como Crear...
            </Link>
          </div>
        </div>
        <img
          src="./src/assets/crearsubasta.jpg"
          alt=""
          className="w-lvw mr-32 rounded-3xl"
        />
      </div>
      <div className="w-full flex justify-center p-12 gap-x-20 items-center">
        <img
          src="./src/assets/comunidadfeliz.avif"
          alt=""
          className="mx-auto rounded-3xl"
        />
        <div className="px-12">
          <h2 className="text-3xl font-semibold my-4">Pujar Por Una Subasta</h2>
          <p className=" text-gray-700">
            Crea una subasta con el tipo de café de tu preferencia, agrega la
            descripción del mismo e información que llame la atención de los
            demás. Asi, Los usuarios podrán verlo e interesarse en él. Puede ser
            un café clásico, exótico o una mezcla única que quieras ofrecer al
            mundo.
          </p>
          <div className="flex gap-x-8 mt-8">
            <Link
              to={""}
              className="px-4 py-2 text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
            >
              Empezar Puja
            </Link>
            <Link
              to={""}
              className="px-4 py-2 text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
            >
              Como Pujar...
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center py-3">
        <div className="grow border-b border-gray-400"></div>
        <span className="px-2 font-semibold text-lg text-gray-500">
          Subcoffee
        </span>
        <div className="grow border-b border-gray-400"></div>
      </div>
      <p className="text-center text-sm font-medium text-gray-700 pb-3">
        ©Subcoffee, todos los derechos reservados
      </p>
    </>
  );
}

export default Dashboard;
