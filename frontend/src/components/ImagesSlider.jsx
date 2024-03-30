import { useState, useEffect } from "react";

function ImagesSlider() {
  const [imagenTiempo, setImagenTiempo] = useState(0);

  const images = [
    "./src/assets/cafe1.jpg",
    "./src/assets/cafe1.jpg",
    "./src/assets/cafe1.jpg"
  ];

  useEffect(() => {
    const validarImagen = setInterval(() => {
      setImagenTiempo((img) => (img + 1) % images.length);
    }, 300000);
    return () => clearInterval(validarImagen);
  }, [images.length]);

  return (
    <div className="flex w-full justify-center">
      <img src={images[imagenTiempo]} alt="Imagenes de inicio" className="rounded-2xl w-3/4 aspect-auto"/>
    </div>
  );
}

export default ImagesSlider;
