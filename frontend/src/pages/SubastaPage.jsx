import React, { useState, useEffect } from "react";
import SubastaCard from "../components/SubastaCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SubastaPage() {
  const slides = [
    {
      url: "https://www.semana.com/resizer/LgNm70jTor0z_IKrwZmx8bvlMEY=/arc-anglerfish-arc2-prod-semana/public/MGSRCROCY5GETHHQC2XBMM2CEQ.jpg",
    },
    {
      url: "https://cdn-3.expansion.mx/dims4/default/3a43bc7/2147483647/strip/true/crop/5760x3840+0+0/resize/1800x1200!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fd3%2Fa1%2Fca36469448dea0b9dde50db5451f%2Fbeneficios-cafe.jpg",
    },
    {
      url: "https://www.solucionesparaladiabetes.com/magazine-diabetes/wp-content/uploads/cafe-696x464.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="px-14">
      <div className="max-w-[1600px] h-auto w-full m-auto pt-10 p-4">
        <div
          className="w-full h-96 rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="flex justify-center">
          <div
            className="text-2xl text-bold rounded-full p-2 text-rojo cursor-pointer transition duration-300"
            onClick={prevSlide}
          >
            <FaChevronLeft size={25} />
          </div>
          <div className="flex justify-center items-center my-4 transition duration-300">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-negro" : "bg-gridMedio1"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
          <div
            className="text-2xl text-bold rounded-full p-2 text-rojo cursor-pointer transition duration-300"
            onClick={nextSlide}
          >
            <FaChevronRight size={25} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-semibold py-5">Borbon</h1>
        <SubastaCard />
      </div>
    </div>
  );
}

export default SubastaPage;
