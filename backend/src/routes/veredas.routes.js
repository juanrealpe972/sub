import { Router } from "express";
import { activarVereda, crearVereda, desactivarVereda, editarVereda, eliminarVereda, getVereda, getVeredas } from "../controllers/veredas.controller.js";

const routerVereda = Router()

routerVereda.get("/veredas", getVeredas)
routerVereda.get("/veredas/:id", getVereda)
routerVereda.post("/veredas", crearVereda)
routerVereda.put("/veredas/:id", editarVereda)
routerVereda.delete("/veredas/:id", eliminarVereda)
routerVereda.put("/veredasac/:id", activarVereda)
routerVereda.put("/veredasdes/:id", desactivarVereda)

export default routerVereda