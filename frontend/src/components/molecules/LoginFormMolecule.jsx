import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LinkAtom from "../atoms/LinkAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import InputWithToggleIconAtom from "../atoms/InputWithToggleIconAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import { useAuth } from "../../context/AuthContext";

const LoginFormMolecule = ({onClose}) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const URL = "http://localhost:9722/auth/validar";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, { 
        correo: email,
        password: password
      });
      if (res.status === 200) {
        alert("Usuario validado con éxito");
        login();
        navigation("/subcoffee");
        console.log(res.data);
        onClose()
      } else if (res.status === 401) {
        alert("Usuario no registrado");
      }
    } catch (error) {
      alert("Error en el sistema: " + error.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="email"
        name="email"
        placeholder="Correo electrónico"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
      <LinkAtom to="/">¿Olvidaste tu contraseña?</LinkAtom>
      <br />
      <center>
        <ButtonAtom type="submit">Iniciar Sesión</ButtonAtom>
      </center>
    </form>
  );
};

export default LoginFormMolecule;
