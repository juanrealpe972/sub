import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LinkButtonAtom from "../components/atoms/LinkButtonAtom";
import TiposDeCafeOrganism from "../components/organisms/TiposDeCafeOrganism";
<<<<<<< HEAD
import DesarrolladoresOrganism from "../components/organisms/DesarrolladoresOrganism";
=======
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55

function DashboardContentOrganims() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      navigate("/subcoffee");
    }
  }, [navigate]);

  return (
    <>
<<<<<<< HEAD
      <section id="inicio" className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <div>
              <span className="text-[#00684a] text-4xl md:text-5xl font-bold mb-4">
                Bienvenido a SubCoffee
              </span>
              <p className="bg-cream-100 text-lg md:text-xl text-[#3d4f58] px-4 py-2 rounded-full mb-8 md:mb-0">
                Una plataforma online donde te podrás conectar con diferentes usuarios para subastar y pujar por café de alta calidad. Solicita tu registro a esta gran familia ya
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="./src/assets/dashboard.png"
              alt="Dashboard"
              className=""
            />
          </div>
        </div>
      </section>

      <div className="min-h-screen w-full py-16">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-[#00684a] mb-8">
            Una plataforma de café perfecta para todos
          </h1>
          <p className="text-center text-lg font-medium md:text-xl text-[#3d4f58]  mb-10">
            Subasta o puja por el café de tu gusto.
          </p>
          <TiposDeCafeOrganism />
        </section>
      </div>

      {/* <div className="min-h-screen w-full flex flex-col md:grid md:grid-cols-2 justify-center p-12 gap-x-4 items-center">
        <div className="md:px-12">
          <h2 className="text-3xl font-semibold my-4 text-[#00684a]">Crear subasta</h2>
          <p className="text-lg md:text-xl text-[#3d4f58] ">
=======
      <div className="flex items-center justify-center px-12 mt-16">
        <span className="text-black text-4xl text-center">
          Bienvenido a Subcoffee una plataforma online donde te podras conectar
          con diferentes usuarios para subastar y pujar por café de alta calidad
        </span>
        <img src="./src/assets/dashboard.png" />
      </div>
      <div className="w-full py-12">
        <p className="text-center text-4xl font-semibold">
          Una plataforma de café perfecta para todos
        </p>
        <p className="text-lg font-semibold mt-8 text-center">
          Subasta o puja por el café de tu gusto.
        </p>
        <TiposDeCafeOrganism />
      </div>
      {/* <div className="w-full grid grid-cols-2 justify-center p-12 gap-x-4 items-center">
        <div className="px-12">
          <h2 className="text-3xl font-semibold my-4">Crear subasta</h2>
          <p className="text-gray-700">
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
            Crea una subasta con el tipo de café de tu preferencia, agrega la
            descripción del mismo e información que llame la atención de los
            demás. Asi, Los usuarios podrán verlo e interesarse en él. Puede ser
            un café clásico, exótico o una mezcla única que quieras ofrecer al
            mundo.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <LinkButtonAtom to="/subcoffee" className="bg-[#e9ff99] text-white px-4 py-2 rounded-md hover:bg-[#e0e0e0] hover:text-[#009100]">
              Crear subasta
            </LinkButtonAtom>
            <button to="/ayuda" className="border-[#00ed64] inline-flex items-center justify-center py-2 px-4 bg-[#00ed64] text-white  font-semibold rounded-md hover:bg-[#00ed64] border-2 hover:border-[#001e2b]  hover:text-[#001e2b]">
              Como subastar
            </button>
          </div>
        </div>
        <div className="w-full md:w-10/12">
          <img src="./src/assets/crearsubasta.jpg" alt="" className="mx-auto my-auto max-w-full rounded-3xl" />
        </div>
      </div>
      <div className="min-h-screen w-full flex flex-col-reverse md:flex-row justify-center p-12 gap-x-4 items-center bg-[#e9ff99]">
        <div className="md:px-12">
          <h2 className="text-3xl font-semibold my-4 text-[#00684a]">Pujar Por Una Subasta</h2>
          <p className=" text-lg md:text-xl text-[#3d4f58] ">
            Crea una subasta con el tipo de café de tu preferencia, agrega la
            descripción del mismo e información que llame la atención de los
            demás. Puede ser un café clásico, exótico o una mezcla única que quieras ofrecer al
            mundo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <LinkButtonAtom to="/subcoffee" >
              Empezar Puja
            </LinkButtonAtom>
            <button to="/ayuda" className="border-[#00ed64] inline-flex items-center justify-center py-2 px-4 bg-[#00ed64] text-white  font-semibold rounded-md hover:bg-[#00ed64] border-2 hover:border-[#001e2b]  hover:text-[#001e2b] transition-all ease-in-out duration-500">
              Como Pujar
            </button>
          </div>
        </div>
        <div className="w-full md:w-11/12 mb-8 md:mb-0">
          <img src="./src/assets/comunidadfeliz.avif" alt="" className="mx-auto max-w-full rounded-3xl" />
        </div>
      </div> */}

      <div className="min-h-screen w-full py-16 bg-[#fcfcfc]">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-[#00684a] mb-8">
            Desarolladores de esta gran comunidad SubCoffee
          </h1>
          <p className="text-center text-lg font-medium text-[#3d4f58] mb-10">
            Orgullosos de presentarte esta gran comunidad para cafeteros y compradores de cafe con los mas altos estandares de calidad
          </p>
          <DesarrolladoresOrganism />
        </section>
      </div>
=======
          <div className="flex gap-x-8 mt-8">
            <LinkButtonAtom to="/subcoffee">Crear subasta</LinkButtonAtom>
            <LinkButtonAtom to="/ayuda">Como subastar</LinkButtonAtom>
          </div>
        </div>
        <div className="w-10/12">
          <img src="./src/assets/crearsubasta.jpg" alt="" className="w-lvw mr-32 rounded-3xl" />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 justify-center p-12 gap-x-4 items-center">
        <div className="w-11/12">
          <img src="./src/assets/comunidadfeliz.avif" alt="" className="mx-auto rounded-3xl" />
        </div>
        <div className="px-12">
          <h2 className="text-3xl font-semibold my-4">Pujar Por Una Subasta</h2>
          <p className="text-gray-700">
            Crea una subasta con el tipo de café de tu preferencia, agrega la
            descripción del mismo e información que llame la atención de los
            demás. Asi, Los usuarios podrán verlo e interesarse en él. Puede ser
            un café clásico, exótico o una mezcla única que quieras ofrecer al
            mundo.
          </p>
          <div className="flex gap-x-8 mt-8">
            <LinkButtonAtom to="/subcoffee">Empezar Puja</LinkButtonAtom>
            <LinkButtonAtom to="/ayuda">Como Pujar</LinkButtonAtom>
          </div>
        </div>
      </div> */}
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
    </>
  );
}

export default DashboardContentOrganims;
