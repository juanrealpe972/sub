import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

import LinkAtom from "../atoms/LinkAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import InputWithToggleIconAtom from "../atoms/InputWithToggleIconAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import { icono } from "../atoms/IconsAtom";
import { useAuth } from "../../context/AuthContext";

const LoginFormMolecule = () => {
  const { login } = useAuth();
  const navigation = useNavigate();
  const URL = "http://localhost:9722/auth/validar";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(watch("example"));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        correo: email,
        password: password,
      });
      if (res.status === 200) {
        alert("Usuario validado con éxito");
        login();
        localStorage.setItem("token", res.data.token);
        navigation("/subcoffee");
        console.log(res.data);
      } else if (res.status === 401) {
        alert("Usuario no registrado");
      }
    } catch (error) {
      alert("Error en el sistema: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputWithIconAtom
        icon={icono.iconoGmail}
        id="email"
        name="email"
        placeholder="Correo electrónico"
        required
        type="email"
        {...register("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span>This field is required</span>}
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
