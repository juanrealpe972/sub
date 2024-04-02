import React, { useState } from "react";
import AvatarAtom from "../atoms/AvatarAtom";
import FooterLinkAtom from "../atoms/FooterLinkAtom";
import { icono } from "../atoms/IconsAtom";
import InputWithIconAtom from "../atoms/InputWithIconAtom";
import TextSubAtom from "../atoms/TextSubAtom";
import FooterSectionMolecule from "../molecules/FooterSectionMolecule";
import ButtonAtomFull from "../atoms/ButtonAtomFull";

const FooterOrganism = () => {
  const [texto, setTexto] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Hello world!");
  };

  return (
    <section class="py-2 sm:pt-16 bg-blancoMedio1 lg:pt-16">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-2">
          <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="flex">
              <AvatarAtom img="isotipo-SubCoffee.png" alt="Logo" />
              <TextSubAtom to="/" color={"cafeClaroLogo"} text="Sub" />
              <TextSubAtom to="/" color={"cafeOscuroLogo"} text="Coffee" />
            </div>
            <p class="text-base leading-relaxed text-grisOscuro mt-2">
              Una plataforma innovadora diseñada para conectar a caficultores,
              compradores y comerciantes en un entorno de subastas eficiente y
              transparente.
              {/* Nuestro enfoque se centra en el café especial,
              brindando a los amantes del café una forma única de descubrir y
              adquirir los mejores granos. */}
            </p>
          </div>

          <div>
            <FooterSectionMolecule title={"Información"}>
              <FooterLinkAtom to={"/somos"}>¿Quiénes somos?</FooterLinkAtom>
              <FooterLinkAtom to={"/politicas"}>
                Políticas y privacidad
              </FooterLinkAtom>
              <FooterLinkAtom to={"/ayuda"}>¿Cómo funciona?</FooterLinkAtom>
            </FooterSectionMolecule>
          </div>

          <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              ¿Tienes alguna duda?
            </p>

            <form onSubmit={onSubmit} className="gap-y-2 flex flex-col">
              <InputWithIconAtom
                icon={icono.iconoGmail}
                id="text"
                name="text"
                placeholder="Duda o sugerencia..."
                required
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              />
              <ButtonAtomFull color="verdeSena1" colorHover="verdeSena2">
                Enviar Duda
              </ButtonAtomFull>
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-3">
        <div className="grow border-b border-grisMedio2"></div>
        <span className="px-2 font-semibold text-lg text-grisMedio2">
          Subcoffee
        </span>
        <div className="grow border-b border-grisMedio2"></div>
      </div>
      <p className="text-center text-sm font-medium text-grisMedio2 pb-3">
        ©Subcoffee, todos los derechos reservados
      </p>
    </section>
  );
};

export default FooterOrganism;
