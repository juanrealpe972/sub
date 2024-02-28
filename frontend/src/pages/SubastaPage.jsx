import { useEffect } from "react"
import SubastaCard from "../components/SubastaCard"
import { useSubasta } from "../context/SubastaContext"

function SubastaPage() {

    const { subastas, loadSubastas } = useSubasta()

    useEffect(() => {
        loadSubastas()
    }, [])

    function renderMain() {
        if (subastas.length === 0) return <h1>No existen subastas aun</h1>
        return subastas.map(subasta => (<SubastaCard subasta={subasta} key={subasta.id} />))
    }

    return (
        <div>
            <h1>Subastas</h1>
            {renderMain()}
        </div>
    )
}

export default SubastaPage