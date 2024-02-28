import { useSubasta } from "../context/SubastaContext";
import { useNavigate } from "react-router-dom";

function SubastaCard({ subasta }) {

    const { deleteSubasta } = useSubasta()
    const navigate = useNavigate()

    return (
        <div>
            <h2>{subasta.title}</h2>
            <p>{subasta.description}</p>
            <span>{subasta.status === 1 ? "true" : "false"}</span>
            <span>{subasta.createAT}</span>
            <button
                onClick={() => deleteSubasta(subasta.id)}
                className="p-1 bg-red-600 text-white rounded-lg"
            >
                Delete
            </button>
            <button
                onClick={() => navigate(`/editmess/${subasta.id}`)}
                className="p-1 bg-blue-500 text-white rounded-lg"
            >
                Edit
            </button>
        </div>
    )
}

export default SubastaCard