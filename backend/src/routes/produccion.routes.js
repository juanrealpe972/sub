import { Router } from "express";
import { createProduccion, deleteProduccion, getProduccion, getProducciones, updateProduccion } from "../controllers/produccion.controller.js";

const routerProduccion = Router()

routerProduccion.get("/produccion", getProducciones)
routerProduccion.get("/produccion/:id", getProduccion)
routerProduccion.post("/formproduccion", createProduccion)
routerProduccion.put("/formproduccion/:id", updateProduccion)
routerProduccion.delete("/produccion/:id", deleteProduccion)

export default routerProduccion