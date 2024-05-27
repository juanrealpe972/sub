import { Router } from "express"
import { createCalificacion, getCalificaciones, updateCalificacion } from "../controllers/calificaciones.controller.js"
import { verificarUserToken } from "../controllers/autenticacionController.js";

const routesCalificaciones = Router()

routesCalificaciones.get('/calificaciones/:id', verificarUserToken, getCalificaciones)
routesCalificaciones.post('/calificaciones', verificarUserToken, createCalificacion)
routesCalificaciones.put('/calificaciones', verificarUserToken, updateCalificacion)

export default routesCalificaciones
