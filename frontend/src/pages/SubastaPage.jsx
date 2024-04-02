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
      <div className="w-full flex flex-col justify-center items-end my-10">
        <ImagenesSliderOrganism />
        <p>¡Tu finca tiene una historia que contar!</p>
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
