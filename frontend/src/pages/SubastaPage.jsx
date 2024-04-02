import React, { useState } from "react";
import SubastaCard from "../components/SubastaCard";
import { Link } from "react-router-dom";
import ImagenesSliderOrganism from "../components/organisms/ImagenesSliderOrganism";
import AbrirModalTemplate from "../components/templates/AbrirModalTemplate";
import ButtonCerrarModalAtom from "../components/atoms/ButtonCerrarModalAtom";
import RegisterFincaOrganism from "../components/organisms/RegisterFincaOrganism";
import ButtonAtom from "../components/atoms/ButtonAtom";

function SubastaPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-14">
      <div className="w-full flex justify-center items-end my-10">
        <ImagenesSliderOrganism />
        <span className="absolute text-white text-4xl mx-52 mb-28 text-center">
          Crea una subasta en 5 minutos
        </span>
        <Link
          to={"/login"}
          className="text-white absolute mb-8 rounded-lg py-3 px-5 bg-[#39A900] hover:bg-green-900 font-semibold"
        >
          Crear subasta
        </Link>
      </div>
      <ButtonAtom onClick={() => setShowModal(true)}>Crear finca</ButtonAtom>
      <div className="w-full">
        <h1 className="font-semibold ml-5">Borbon</h1>
        <SubastaCard />
      </div>
      {showModal && (
        <AbrirModalTemplate>
          <RegisterFincaOrganism />
          <ButtonCerrarModalAtom onClose={() => setShowModal(false)} />
        </AbrirModalTemplate>
      )}
    </div>
  );
}

export default SubastaPage;
