import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ButtonAtom from "../atoms/ButtonAtom";
import InputWithToggleIconAtom from "../atoms/InputWithToggleIconAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import SelectInputAtom from "../atoms/SelectInputAtom";
import OptionAtom from "../atoms/OptionAtom";

const RegisterFormMolecule = () => {
  const [cedula, setCedula] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [rol, setRol] = useState("");
  const navigation = useNavigate();
  const URL = "http://localhost:9722/user/validar";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        cedula_user,
        nombre_user,
        email_user,
        password_user,
        telefono_user,
        fechanacimiento_user,
        rol_user,
      });
      if (res.status === 200) {
        const { token } = res.data;
        alert("Usuario registrado con éxito");
        localStorage.setItem("Token", token);
        navigation("/subcoffee");
      } else {
        alert("Error al registrar el usuario");
      }
    } catch (error) {
      alert("Error en el sistema: " + error.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <InputWithIconAtom
        icon={icono.iconoUser}
        id="fullName"
        name="fullName"
        placeholder="Nombre Completo"
        required
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <div className="flex gap-x-4">
        <InputWithIconAtom
          icon={icono.iconoCedula}
          id="cedula"
          name="cedula"
          placeholder="Cédula"
          required
          type="number"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
        <InputWithIconAtom
          icon={icono.iconoFecha}
          id="birthdate"
          name="birthdate"
          placeholder="Fecha de Nacimiento"
          required
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="email"
        name="email"
        placeholder="Correo"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex gap-x-2 justify-center">
        <InputWithIconAtom
          icon={icono.iconoCelular}
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Teléfono"
          required
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div>
          <SelectInputAtom
            id="rol"
            name="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <OptionAtom value="" label="Seleccione un rol" disabled hidden />
            <OptionAtom value="vendedor" label="Vendedor" />
            <OptionAtom value="comprador" label="Comprador" />
          </SelectInputAtom>
        </div>
      </div>
      <InputWithToggleIconAtom
        icon={icono.iconoContraseña}
        id="password"
        name="password"
        placeholder="Contraseña"
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonAtom type="submit">Registrarse</ButtonAtom>
    </form>
  );
};

export default RegisterFormMolecule;
