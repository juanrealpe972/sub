import { useState } from "react";

const LoginUser = () => {
  const [] = useState("");

  const handleLogin = () => {
    //evitar recarga de pagina
    // navigate("/dashboard", {replace:true})
    console.log("Hello");
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="flex justify-center items-center mt-16 p-10 bg-slate-400 rounded-xl drop-shadow-lg">
        <form onSubmit={handleLogin} className=" space-y-5">
          <h1 className="text-center text-3xl font-roboto-medium">
            Iniciar Sesión
          </h1>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">
              Correo Electrónico
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="email"
              required
              placeholder="Correo Electrónico"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">
              Contraseña
            </label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Contraseña"
              name="password"
              id="password"
            />
          </div>

          <button
            className="w-full px-10 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md "
            type="submit"
          >
            Iniciar Sesión
          </button>

          <p className="text-right">
            <a
              className="text-blue-600 text-sm font-light hover:underline"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
