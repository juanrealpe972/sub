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
  const URL = "http://localhost:9722/formuser";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        cedula_user: cedula,
        nombre_user: fullName,
        email_user: email,
        password_user : password,
        telefono_user: phoneNumber,
        fechanacimiento_user: birthdate,
        rol_user: rol,
      });
      if (res.status === 200) {
        const { token } = res.data;
        alert("Usuario registrado con éxito, ya puedes loguearte");
        localStorage.setItem("Token", token);
        navigation("/");
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
      <div className="grid grid-cols-2 space-x-2">
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
      <div className="grid grid-cols-2 space-x-2 items-center">
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
        <SelectInputAtom
          id="rol"
          name="rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <OptionAtom value="vendedor" label="Vendedor" />
          <OptionAtom value="comprador" label="Comprador" />
        </SelectInputAtom>
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
      <div className="flex mt-4 gap-x-2">
        <input type="checkbox" />
        <p className="text-grisMedio2">Acepta terminos y condiciones</p>
      </div>
      <center>
        <ButtonAtom type="submit">Registrarse</ButtonAtom>
      </center>
    </form>
  );
};

export default RegisterFormMolecule;
