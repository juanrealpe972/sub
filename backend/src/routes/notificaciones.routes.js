import { Router } from "express";
import { createNotificacion, deleteNotificacion, getNotificaciones, updateNotificacion } from "../controllers/notificacion.controller.js";

const routerNotificaciones = Router()

routerNotificaciones.get("/notificacion", getNotificaciones)
routerNotificaciones.get("/notificacion/:id", getNotificaciones)
routerNotificaciones.post("/notificacion", createNotificacion)
routerNotificaciones.put("/notificacion/:id", updateNotificacion)
routerNotificaciones.delete("/notificacion/:id", deleteNotificacion)

export default routerNotificaciones