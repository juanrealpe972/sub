import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import ComoCrearSubasta from "./ComoCrearUnaSubasta";

function AyudaPage() {
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-semibold mb-4">
        ¿Cómo podemos ayudarte?
      </h1>
      <p className="mb-2 font-semibold">Explora por tema</p>
      <div className="grid grid-cols-3 gap-x-5">
        <Link
          to={"/ayudacrearsubasta"}
          className="flex items-center border rounded-lg p-4 bg-gray-200 mb-4"
        >
          <FaRegArrowAltCircleDown className="text-3xl text-gray-600 mr-4" />
          <div>
            <p className="font-semibold mb-1">Cómo crear una subasta</p>
            <p className="text-sm">
              Aprende el paso a paso que se debe seguir para crear una subasta.
            </p>
          </div>
        </Link>
        <Link
          to={"/ayudacrearsubasta"}
          className="flex items-center border rounded-lg p-4 bg-gray-200 mb-4"
        >
          <FaRegArrowAltCircleDown className="text-3xl text-gray-600 mr-4" />
          <div>
            <p className="font-semibold mb-1">Cómo crear una subasta</p>
            <p className="text-sm">
              Aprende el paso a paso que se debe seguir para crear una subasta.
            </p>
          </div>
        </Link>
        <Link
          to={"/ayudacrearsubasta"}
          className="flex items-center border rounded-lg p-4 bg-gray-200 mb-4"
        >
          <FaRegArrowAltCircleDown className="text-3xl text-gray-600 mr-4" />
          <div>
            <p className="font-semibold mb-1">Cómo crear una subasta</p>
            <p className="text-sm">
              Aprende el paso a paso que se debe seguir para crear una subasta.
            </p>
          </div>
        </Link>
      </div>
      <div>
        <ComoCrearSubasta />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Información de Roles</h2>
        <p className="mb-4">
          Aquí tienes información sobre los roles disponibles en nuestra
          plataforma:
        </p>
        <div className="grid grid-cols-1 gap-y-4">
          <div className="border rounded-lg p-4 bg-gray-100">
            <h3 className="font-semibold">Rol: Administrador</h3>
            <p>
              El administrador tiene el control total sobre la plataforma. Sus
              funciones incluyen:
            </p>
            <ul className="list-disc list-inside">
              <li>Crear y gestionar la información de localización.</li>
              <li>
                Definir y gestionar los tipos de variedades de café disponibles
                para la subasta.
              </li>
              <li>
                Registrar a los usuarios en la plataforma para una mejor
                experiencia y control.
              </li>
              <li>
                Llevar un registro detallado de la actividad en la plataforma y
                corregir información incorrecta si es necesario.
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-gray-100">
            <h3 className="font-semibold">Rol: Vendedor</h3>
            <p>
              El vendedor es responsable de agregar productos a la subasta. Sus
              funciones incluyen:
            </p>
            <ul className="list-disc list-inside">
              <li>Registrar una finca en la plataforma.</li>
              <li>
                Registrar las variedades de café disponibles para la subasta.
              </li>
              <li>
                Crear y gestionar las subastas, utilizando la información
                proporcionada anteriormente.
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-gray-100">
            <h3 className="font-semibold">Rol: Comprador</h3>
            <p>
              El comprador participa en las subastas realizando ofertas por los
              productos disponibles. Sus funciones incluyen:
            </p>
            <ul className="list-disc list-inside">
              <li>Hacer ofertas en las subastas activas.</li>
              <li>
                Participar en el proceso de puja hasta la hora final establecida
                por el vendedor.
              </li>
              <li>
                Al finalizar la subasta, utilizar el chat para comunicarse con
                el vendedor y coordinar el método de pago.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AyudaPage;
