import React from "react";
import VariedadT from "./VariedadT";
import FincaT from "./FincaT";
import SubastaT from "./SubastaT";

export default function MiSubastaT() {
  return (
    <div className="w-full flex bg-gray-100 flex-col items-center px-10 pb-12">
      <div className="pb-2">
        <div className="flex justify-center pt-8 pb-2">
          <img src="./cafe.png" alt="Cafe_imagen" className="rounded-s-2xl transition-width duration-300 md:max-w-[25%] lg:max-w-[33.33%] xl:max-w-[50%] w-full lg:w-auto xl:w-auto" />
          <img src="./carrofinca.png" alt="Finca_imagen" className="rounded-e-2xl transition-width duration-300 md:max-w-[25%] lg:max-w-[33.33%] xl:max-w-[50%] w-full lg:w-auto xl:w-auto" />
        </div>
        <p className="text-center mt-3 text-negro transition duration-300">
          ¡Tu finca tiene una historia que contar!
        </p>
      </div>
      <div className="flex flex-col justify-center gap-y-4">
        <FincaT />
        <p className="text-center"> Registra todas las maravillosas variedades de café que tienes en tu finca</p>
        <VariedadT />
        <p className="text-center"> Registra una subasta con tu café de alta calidad</p>
        <SubastaT />
      </div>
    </div>
  );
}
