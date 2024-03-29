import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-grisOscuro h-screen flex items-center justify-center">
      <div className="text-center text-blanco">
        <img src="./src/assets/nofoundpng.png" alt="Error 404" className="mb-8" />
        <h2 className="text-6xl mb-4">ERROR 404</h2>
        <h1 className="text-4xl font-semibold mb-4">
          Vaya, parece que la página que estás buscando no existe.
        </h1>
        <p className="text-lg mb-6">
          Pero no te vayas, vuelve e inténtalo de nuevo.
        </p>
        <Link
          to="/"
          className="bg-blanco text-grisOscuro py-3 px-8 rounded-full hover:opacity-80 transition duration-300 ease-in-out inline-block"
        >
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
