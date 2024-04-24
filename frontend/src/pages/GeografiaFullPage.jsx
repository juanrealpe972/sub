import React from "react";
import RegisterPageTipoVariedad from "../components/organisms/RegisterPageTipoVariedad";
import DepartamentoT from "./DepartamentoT";
import MunicipioT from "./MunicipioT";
import VeredaT from "./VeredaT";

function GeografiaFullPage() {
  return (
    <div className="flex px-10 gap-x-4 flex-col">
      <DepartamentoT />
      <MunicipioT />
      <VeredaT />
    </div>
  );
}

export default GeografiaFullPage;
