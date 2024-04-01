import React, { useState } from "react";
import SubastaCard from "../components/SubastaCard";
import { Link } from "react-router-dom";
import ImagenesSliderOrganism from "../components/organisms/ImagenesSliderOrganism";
import AbrirModalTemplate from "../components/templates/AbrirModalTemplate";
import ButtonCerrarModalAtom from "../components/atoms/ButtonCerrarModalAtom";
import RegisterFincaOrganism from "../components/organisms/RegisterFincaOrganism";

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
      <button
        className="bg-verdeSena1 py-1 px-3 rounded-lg hover:bg-naranjaSena text-black font-bold text-sm transition-colors"
        onClick={() => setShowModal(true)}
      >
        Crear finca
      </button>
      {showModal && (
        <AbrirModalTemplate>
          <RegisterFincaOrganism />
          <ButtonCerrarModalAtom onClick={() => setShowModal(false)} />
        </AbrirModalTemplate>
      )}
      <div className="w-full">
        <h1 className="font-semibold ml-5">Borbon</h1>
        <SubastaCard />
      </div>
    </div>
  );
}

export default SubastaPage;
