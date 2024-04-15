import { Router } from "express";
import { activarVereda, crearVereda, desactivarVereda, editarVereda, eliminarVereda, getVereda, getVeredas } from "../controllers/veredas.controller.js";
import { verificarUserToken } from "../controllers/auth.controller.js";

const routerVereda = Router()

routerVereda.get("/veredas", verificarUserToken, getVeredas)
routerVereda.get("/veredas/:id", verificarUserToken, getVereda)
routerVereda.post("/veredas", verificarUserToken, crearVereda)
routerVereda.put("/veredas/:id", verificarUserToken, editarVereda)
routerVereda.delete("/veredas/:id", verificarUserToken, eliminarVereda)
routerVereda.put("/veredasac/:id", verificarUserToken, activarVereda)
routerVereda.put("/veredasdes/:id", verificarUserToken, desactivarVereda)

export default routerVereda