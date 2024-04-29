import React, { useRef, useState, useEffect } from "react";
import ComoCrearSubasta from "./ComoCrearUnaSubasta";
import InfoRolesA from "./InfoRolesA";
import ComoPujarUnaSubasta from "./ComoPujarUnaSubasta";
import { Button, ButtonGroup } from "@nextui-org/react";
import FlechaArriba from "../nextui/FlechaArriba";

function AyudaPage() {
  const comoCrearRef = useRef(null);
  const comoPujarRef = useRef(null);
  const infoRolesRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case "comoCrear":
        ref = comoCrearRef;
        break;
      case "comoPujar":
        ref = comoPujarRef;
        break;
      case "infoRoles":
        ref = infoRolesRef;
        break;
      default:
        return;
    }
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`p-8 px-44 mx-auto flex flex-col justify-center ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex justify-center w-auto items-center">
        <ButtonGroup>
          <Button
            onClick={() => scrollToSection("comoCrear")}
            className={`transition-opacity ${isScrolled ? 'opacity-40' : ''}`}
          >
            Como crear una subasta
          </Button>
          <Button
            onClick={() => scrollToSection("comoPujar")}
            className={`transition-opacity ${isScrolled ? 'opacity-40' : ''}`}
          >
            Como pujar una subasta
          </Button>
          <Button
            onClick={() => scrollToSection("infoRoles")}
            className={`transition-opacity ${isScrolled ? 'opacity-40' : ''}`}
          >
            Información de Roles
          </Button>
          <Button
            onClick={scrollToTop}
            startContent={<FlechaArriba />}
            className={`transition-opacity fixed bottom-8 right-8 ${isScrolled ? 'opacity-40' : ''}`}
          >
            Ir Arriba
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <div ref={comoCrearRef} data-section="comoCrear">
          <ComoCrearSubasta />
        </div>
        <div ref={comoPujarRef} data-section="comoPujar">
          <ComoPujarUnaSubasta />
        </div>
        <div ref={infoRolesRef} data-section="infoRoles">
          <InfoRolesA />
        </div>
      </div>
    </div>
  );
}

export default AyudaPage;
