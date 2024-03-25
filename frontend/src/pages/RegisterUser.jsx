import React, { useState } from "react";

const RegisterUser = () => {
  const [fullName, setFullName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Cuenta creada con exito");
  };

  return (
    <div className="bg-white py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-5">
      <div className="mx-auto max-w-sm space-y-6">
        <form onSubmit={handleRegister} className="space-y-4">
          <h1 className="text-center text-3xl font-bold">Registrarse</h1>
          <div>
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700"
            >
              Nombre Completo
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nombre Completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
          <div className="flex gap-x-4">
            <div>
              <label
                htmlFor="cedula"
                className="text-sm font-medium text-gray-700"
              >
                Cédula
              </label>
              <input
                id="cedula"
                name="cedula"
                type="number"
                placeholder="Cédula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="birthdate"
                className="text-sm font-medium text-gray-700"
              >
                Fecha de Nacimiento
              </label>
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="Fecha de Nacimiento"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
          <div className="flex gap-x-2">
            <div className="w-2/4">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                placeholder="Teléfono"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="rol"
                className="text-sm font-medium text-gray-700"
              >
                Rol
              </label>
              <select
                name="rol"
                id="rol"
                type="text"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                placeholder="Rol"
                className="mt-1 w-full border rounded-md border-gray-300 shadow-sm p-2 text-gray-400"
              >
                <option value="" disabled selected hidden>
                  Seleccione un rol
                </option>
                <option className="text-black" value="vendedor">
                  Vendedor
                </option>
                <option className="text-black" value="comprador">
                  Comprador
                </option>
              </select>
            </div>
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
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
