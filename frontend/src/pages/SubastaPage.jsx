import SubastaCard from "../components/SubastaCard";
import ImagesSlider from "../components/ImagesSlider";
import { Link } from "react-router-dom";
import ModalFinca from "../components/ModalFinca";
import { useState } from "react";

function SubastaPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-14">
      <div className="w-full flex justify-center items-end my-10">
        <ImagesSlider />
        <span className="absolute text-white text-4xl mx-52 mb-28 text-center">
          Crea una subasta en 5 minutos
        </span>
        <Link
          to={"/login"}
          className="text-white absolute mb-8 rounded-lg py-3 px-5 bg-[#39A900] hover:bg-green-900 font-semibold"
        >
          Crear subasta
        </Link>
      </div>
      <button
        className="bg-verdeSena1 py-1 px-3 rounded-lg hover:bg-naranjaSena text-black font-bold text-sm transition-colors"
        onClick={() => setShowModal(true)}
      >
        Crear finca
      </button>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="absolute bg-white rounded-xl p-4">
            <ModalFinca />
            <button
              className="absolute top-4 right-4  text-gray-500 hover:text-red-500 focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="w-full">
        <h1 className="font-semibold ml-5">Borbon</h1>
        <SubastaCard />
      </div>
    </div>
  );
}

export default SubastaPage;
