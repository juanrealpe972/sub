import LinkButtonAtom from "../components/atoms/LinkButtonAtom";

const NotFound = () => {
  return (
    <section className="bg-grisOscuro flex h-screen items-center justify-center">
      <div className="text-center text-blanco">
        <img
          src="./src/assets/nofoundpng.png"
          alt="Error 404"
          className="mb-8 h-52"
        />
        <h2 className="text-2xl mb-4">ERROR 404</h2>
        <h1 className="text-2xl font-semibold mb-4">
          Vaya, parece que la página que estás buscando no existe.
        </h1>
        <p className="text-lg mb-6">
          Pero no te vayas, vuelve e inténtalo de nuevo.
        </p>
        <LinkButtonAtom to="/">Volver al Inicio</LinkButtonAtom>
      </div>
    </section>
  );
};

export default NotFound;
