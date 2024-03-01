import { Link } from "react-router-dom";

function BuenasPracticas() {
    const datos = [
        {title:"Subasta Pepe", descripcion:"Descubierta en el lago Chad, en África, es similar al café Libérica en tamaño de árbol y hojas, pero sus flores, frutos y granos son más pequeños, lo que resulta en una calidad inferior.", link:"/"},
        {title:"Campora Loma", descripcion:"Geisha: Conocida por sus flores grandes y blanco-rosadas, produce un café de alta calidad con notas de miel y frutas.", link:"/"},
        {title:"Caturro A lo largo", descripcion:"Existen varias variedades, incluyendo Borbón amarillo, rojo, rosado y Maragogipe, cada una con características únicas.", link:"/"},
    ]

    return ( 
        <div className="p-4 space-x-6 grid grid-cols-3">
            {datos.map((datos, i) => {
                return (
                    <div key={i} className="bg-white shadow-md rounded-md p-4 border-2">
                        <h2 className="text-xl font-bold mb-2">{datos.title}</h2>
                        <p className="text-gray-700">{datos.descripcion}</p>
                        <Link to={datos.link} className="text-white p-2 rounded-md hover:bg-green-800 bg-[#39A900] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2 inline-block">Ver datos</Link>
                    </div>
                );
            })}
        </div>
     );
}

export default BuenasPracticas;
