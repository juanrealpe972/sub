import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import FooterOrganism from "../components/organisms/FooterOrganism";
import Header from "../components/Header";
import LinkButtonAtom from "../components/atoms/LinkButtonAtom";
import { TiposDeCafeTemplates } from "../components/templates/TiposDeCafeTemplates";

function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="mt-10">
          
          <>
            <div className="flex items-center justify-center px-14">
              <span className="text-black text-4xl text-center">
                Bienvenido a Subcoffee una plataforma online donde te podras
                conectar con diferentes usuarios para subastar y pujar por café
                de alta calidad
              </span>
              <img src="./src/assets/dashboard.png" />
            </div>
            <TiposDeCafeTemplates />
            <div className="w-full flex justify-center p-12 gap-x-20 items-center">
              <div className="px-12">
                <h2 className="text-3xl font-semibold my-4">Crear subasta</h2>
                <p className=" text-gray-700">
                  Crea una subasta con el tipo de café de tu preferencia, agrega
                  la descripción del mismo e información que llame la atención
                  de los demás. Asi, Los usuarios podrán verlo e interesarse en
                  él. Puede ser un café clásico, exótico o una mezcla única que
                  quieras ofrecer al mundo.
                </p>
                <div className="flex gap-x-8 mt-8">
                  <LinkButtonAtom to="/comosubastar">
                    Crear subasta
                  </LinkButtonAtom>
                  <LinkButtonAtom to="/comosubastar">
                    Como subastar
                  </LinkButtonAtom>
                </div>
              </div>
              <img
                src="./src/assets/crearsubasta.jpg"
                alt=""
                className="w-lvw mr-32 rounded-3xl"
              />
            </div>
            <div className="w-full flex justify-center p-12 gap-x-20 items-center">
              <img
                src="./src/assets/comunidadfeliz.avif"
                alt=""
                className="mx-auto rounded-3xl"
              />
              <div className="px-12">
                <h2 className="text-3xl font-semibold my-4">
                  Pujar Por Una Subasta
                </h2>
                <p className=" text-gray-700">
                  Crea una subasta con el tipo de café de tu preferencia, agrega
                  la descripción del mismo e información que llame la atención
                  de los demás. Asi, Los usuarios podrán verlo e interesarse en
                  él. Puede ser un café clásico, exótico o una mezcla única que
                  quieras ofrecer al mundo.
                </p>
                <div className="flex gap-x-8 mt-8">
                  <LinkButtonAtom to="/comosubastar">
                    Empezar Puja
                  </LinkButtonAtom>
                  <LinkButtonAtom to="/comosubastar">Como Pujar</LinkButtonAtom>
                </div>
              </div>
            </div>
          </>
        </main>
        <FooterOrganism />
      </>
    );
  }
}

export default Dashboard;
