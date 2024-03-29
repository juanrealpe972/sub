import React, { useState } from "react";
import ButtonAtom from "../atoms/ButtonAtom";
import LinkAtom from "../atoms/LinkAtom";
import InputWithToggleIconAtom from "../atoms/InputWithToggleIconAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginFormMolecule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const URL = "http://localhost:9722/user/validar";

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(URL, { correo: email, password: password });
      if (res.status === 200) {
        const { token } = res.data;
        alert("Usuario validado con éxito");
        localStorage.setItem("Token", token);
        navigation("/subcoffee");
        console.log(res.data);
      } else if (res.status === 404) {
        alert("Usuario no validado");
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
      <LinkAtom to="#">¿Olvidaste tu contraseña?</LinkAtom>
      <br />
      <ButtonAtom type="submit">Iniciar Sesión</ButtonAtom>
    </form>
  );
};

export default LoginFormMolecule;
