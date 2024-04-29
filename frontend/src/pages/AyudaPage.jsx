import React from "react";
import ComoCrearSubasta from "./ComoCrearUnaSubasta";
import InfoRolesA from "./InfoRolesA";
import ComoPujarUnaSubasta from "./ComoPujarUnaSubasta";
import { Button, ButtonGroup } from "@nextui-org/react";

function AyudaPage() {
  return (
    <div className="p-8 px-44 mx-auto">
      <div className="flex justify-center">
        <ButtonGroup>
          <Button>Como crear una subasta</Button>
          <Button>Como pujar una subasta</Button>
          <Button>Información de Roles</Button>
        </ButtonGroup>
      </div>
      <ComoCrearSubasta />
      <ComoPujarUnaSubasta />
      <InfoRolesA />
    </div>
  );

}

export default AyudaPage;
