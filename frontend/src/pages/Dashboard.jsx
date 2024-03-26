import BuenasPracticas from "../components/BuenasPracticas";
import TiposDeCafe from "../components/TiposDeCafe";

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
      <div className="w-full py-11">
        <h3 className="text-4xl font-bold ml-5 my-5">Historial de subastas</h3>
        <BuenasPracticas />
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
