import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImagenSliderOne = "/imageSliderOne.png";
const ImagenSliderTwo = "/imageSliderTwo.png";
const ImagenSliderThree = "/imageSliderThree.png";

function ImageSlider() {
  const slides = [
    { url: ImagenSliderOne },
    { url: ImagenSliderTwo },
    { url: ImagenSliderThree },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="px-64">
      <div className="max-w-[1600px] h-auto w-full m-auto pt-10 p-4 relative">
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
          <div
            className="w-full h-full bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 p-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">¡Bienvenido a Subcoffee!</h2>
              <p className="text-2xl text-white font-semibold leading-relaxed">
                Descubre la mejor plataforma online para subastar por cafés especiales. ¡No pierdas la oportunidad de obtener un café de alta calidad!
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 flex items-center">
            <FaChevronLeft
              className="text-[#e0e0e0] text-3xl cursor-pointer"
              onClick={prevSlide}
            />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center">
            <FaChevronRight
              className="text-[#e0e0e0] text-3xl cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex justify-center items-center transition duration-300">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-[#009100]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
