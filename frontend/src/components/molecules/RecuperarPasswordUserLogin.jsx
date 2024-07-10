import React, { useState } from "react";
import { Button, Input, Modal, ModalFooter } from "@nextui-org/react";
import { useAuthContext } from "../../context/AuthContext";
import { icono } from "../atoms/IconsAtom";
import { useNavigate } from "react-router-dom";

const RecuperarPasswordUserLogin = () => {
  const navigate = useNavigate();
  const { errors, tokenPassword } = useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tokenPassword(formData);
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <Modal open={true} onClose={() => navigate("/")}>
      <form onSubmit={handleSubmit} className="space-y-2 px-4">
        {errors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <Input
          label=""
          aria-label="Email de usuario"
          variant="bordered"
          placeholder="Email de usuario"
          startContent={<icono.iconoGmail />}
          isRequired
          isClearable
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <ModalFooter className="flex justify-center">
          <Button
            type="button"
            color="default"
            onClick={() => navigate("/")}
            className="text-[#39A800] bg-[#FDFBF6] h-10 w-36 rounded-lg font-bold flex justify-center items-center border-[#39A800] border-2"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="text-[#FDFBF6] bg-[#39A800] h-10 w-36 rounded-lg font-bold flex justify-center items-center border-[#FDFBF6]"
          >
            Enviar Gmail
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default RecuperarPasswordUserLogin;
