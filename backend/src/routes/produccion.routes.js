import { Router } from "express";
import { createProduccion, deleteProduccion, getProduccion, getProducciones, updateProduccion } from "../controllers/produccion.controller.js";

const routerProduccion = Router()

routerProduccion.get("/produccion", getProducciones)
routerProduccion.get("/produccion/:id", getProduccion)
routerProduccion.post("/produccion", createProduccion)
routerProduccion.put("/produccion/:id", updateProduccion)
routerProduccion.delete("/produccion/:id", deleteProduccion)

export default routerProduccion