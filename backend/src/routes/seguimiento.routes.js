import { Router } from "express";
import { createSeguimiento, deleteSeguimiento, getSeguimiento, getSeguimientos, updateSeguimiento } from "../controllers/seguimiento.controller.js";

const routerSeguimiento = Router()

routerSeguimiento.get("/seguimiento", getSeguimientos)
routerSeguimiento.get("/seguimiento/:id", getSeguimiento)
routerSeguimiento.post("/formseguimiento", createSeguimiento)
routerSeguimiento.put("/formseguimiento/:id", updateSeguimiento)
routerSeguimiento.delete("/seguimiento/:id", deleteSeguimiento)

export default routerSeguimiento