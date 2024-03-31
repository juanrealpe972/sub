import FooterLinkAtom from "../atoms/FooterLinkAtom";
import FooterSectionMolecule from "../molecules/FooterSectionMolecule";

const FooterOrganism = () => {
    return (
      <footer className="bg-blancoMedio1">
        <div className="container mx-auto py-5 flex justify-evenly">
          <FooterSectionMolecule title="Información">
            <FooterLinkAtom to={"/somos"}>¿Quiénes somos?</FooterLinkAtom>
            <FooterLinkAtom to={"/politicas"}>Políticas y privacidad</FooterLinkAtom>
          </FooterSectionMolecule>
          <FooterSectionMolecule title="Ayudas">
            <FooterLinkAtom to={"/ayuda"}>¿Cómo funciona Subcoffee?</FooterLinkAtom>
            <FooterLinkAtom to={"/ayuda"}>¿Cómo funciona Subcoffee?</FooterLinkAtom>
            <FooterLinkAtom to={"/ayuda"}>¿Cómo funciona Subcoffee?</FooterLinkAtom>
          </FooterSectionMolecule>
        </div>
        <div className="flex items-center justify-center py-3">
          <div className="grow border-b border-grisMedio2"></div>
          <span className="px-2 font-semibold text-lg text-grisMedio2">Subcoffee</span>
          <div className="grow border-b border-grisMedio2"></div>
        </div>
        <p className="text-center text-sm font-medium text-grisMedio2 pb-3">©Subcoffee, todos los derechos reservados</p>  
      </footer>
    );
  };
  
  export default FooterOrganism;