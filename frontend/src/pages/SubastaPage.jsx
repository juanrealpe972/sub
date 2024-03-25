import SubastaCard from "../components/SubastaCard";
import ImagesSlider from "../components/ImagesSlider";
import { Link } from "react-router-dom";

function SubastaPage() {

  function renderMain() {
    // if (subastas.length === 0) return
    <h1>No existen subastas aun</h1>;
    // return subastas.map(subasta => (<SubastaCard subasta={subasta} key={subasta.id} />))
  }

  return (
    <div>
      <div className="w-full flex justify-center items-end my-10 m-0 p-0">
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
      <div>
        <h1 className="font-semibold ml-5">Borbon</h1>
        <SubastaCard/>
      </div>
    </div>
  );
}

export default SubastaPage;
