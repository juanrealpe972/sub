import { Router } from "express";
import { createPostulacion, deletePostulacion, getPostulacion, getPostulaciones, updatePostulacion } from "../controllers/postulacion.controller.js";

const routerPostulacion = Router()

routerPostulacion.get("/postulacion", getPostulaciones)
routerPostulacion.get("/postulacion/:id", getPostulacion)
routerPostulacion.post("/formpostulacion", createPostulacion)
routerPostulacion.put("/formpostulacion/:id", updatePostulacion)
routerPostulacion.delete("/postulacion/:id", deletePostulacion)

export default routerPostulacion