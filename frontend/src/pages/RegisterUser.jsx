import { useState } from "react";

const RegisterUser = () => {
  const [] = useState("");

  const handleRegister = () => {
    console.log("Hola");
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" flex w-auto justify-center items-center p-8 bg-slate-400 rounded-xl drop-shadow-lg">
        <form onSubmit={handleRegister}>
          <h1 className="text-center text-3xl font-roboto-medium">
            Crear cuenta
          </h1>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">
              Nombre Completo
            </label>
            <input
              type="text"
              className="w-auto px-3 py-2 rounded-md border border-slate-400"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">Cédula</label>
            <input
              type="number"
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Cedula"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">Correo</label>
            <input
              type="email"
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Correo"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">Teléfono</label>
            <input
              type="number"
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Telefono"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="fechaNacimiento"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-roboto-regular">Contraseña</label>
            <input
              type="password"
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              placeholder="Contraseña"
            />
          </div>
          <button
            className="w-full px-10 py-2 bg-blue-700 text-white rounded-md
        hover:bg-blue-500 hover:drop-shadow-md mt-4"
            type="submit"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
