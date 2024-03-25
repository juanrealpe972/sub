import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginUser() {
  const [correo, setcorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello World!");
  };

  return (
    <div className="bg-white py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-center text-3xl font-bold">Iniciar sesión</h1>
          <div>
            <label
              htmlFor="correo"
              className="text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              placeholder="m@example.com"
              required
              type="correo"
              value={correo}
              onChange={(e) => setcorreo(e.target.value)}
              className="mt-1 block w-96 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-0 py-2 px-4"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              required
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-96 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-0 py-2 px-4 mb-4"
            />
          </div>
          <Link
            to="#"
            className="text-xs text-left underline hover:text-green-500 text-gray-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
            </button>
            <div className="flex items-center py-3">
              <div className="flex-grow border-b-2 border-gray-400"></div>
              <span className="px-2 text-sm text-gray-500">O</span>
              <div className="flex-grow border-b-2 border-gray-400"></div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesión con Google
            </button>
          </div>
        </form>
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="underline hover:text-green-400">
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}
