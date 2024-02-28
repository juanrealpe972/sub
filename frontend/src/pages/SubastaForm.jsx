import { Formik, Form } from "formik"
import { useSubasta } from "../context/SubastaContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SubastaForm() {

    const { createSubasta, getSubasta, updateSubasta } = useSubasta()
    const [subasta, setSubasta]  = useState({
        title: "",
        description: ""
    })
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const loadSubasta = async () => {
            if (params.id) {
                const subasta = await getSubasta(params.id)
                console.log(subasta);
                setSubasta({
                    title: subasta.title,
                    description: subasta.description
                })
            }
        }
        loadSubasta()
    }, [])

    return (
        <div className="flex flex-col justify-center w-full items-center">
            <h1 className="text-3xl my-6 text-center">
                {
                    params.id ? "Editar Subasta" : "Crear subasta"
                }
            </h1>

            <Formik
                initialValues={subasta}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    if(params.id) {
                        await updateSubasta(params.id, values)
                        navigate("/")
                    }else{
                        await createSubasta(values)
                    }
                    setSubasta({
                        title: "",
                        description: ""
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="flex flex-col bg-slate-100 rounded-lg w-96 py-6 px-8"
                    >
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="White a title"
                            onChange={handleChange}
                        />
                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            placeholder="White a description"
                            onChange={handleChange}
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-500 rounded-lg text-white my-5 p-1 hover:bg-blue-400"
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SubastaForm