import { Router } from "express"
import { createCalificacion, updateCalificacion } from "../controllers/calificaciones.controller.js"

const routesCalificaciones = Router()

routesCalificaciones.post('/calificaciones', createCalificacion)
routesCalificaciones.put('/calificaciones', updateCalificacion)

export default routesCalificaciones
