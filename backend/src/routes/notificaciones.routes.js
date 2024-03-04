import { Router } from "express";
import { createNotificacion, deleteNotificacion, getNotificaciones, updateNotificacion } from "../controllers/notificacion.controller.js";

const routerNotificaciones = Router()

routerNotificaciones.get("/notificacion", getNotificaciones)
routerNotificaciones.get("/notificacion/:id", getNotificaciones)
routerNotificaciones.post("/formnotificacion", createNotificacion)
routerNotificaciones.put("/formnotificacion/:id", updateNotificacion)
routerNotificaciones.delete("/notificacion/:id", deleteNotificacion)

export default routerNotificaciones