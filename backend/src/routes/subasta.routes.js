import { Router } from 'express';
import { activarSubasta, cargarCertificado, cargarImagen, createSubasta, deleteSubasta, desactivarSubasta, getSubasta, getSubastas, updateSubasta } from '../controllers/subasta.controllers.js';
import { verificarUserToken } from '../controllers/auth.controller.js';

const routerSubasta = Router()

routerSubasta.get("/subasta", verificarUserToken, getSubastas)
routerSubasta.get("/subasta/:id", verificarUserToken, getSubasta)
routerSubasta.post("/subasta", verificarUserToken, createSubasta)
routerSubasta.put("/subasta/:id", verificarUserToken, updateSubasta)
routerSubasta.delete("/subasta/:id", verificarUserToken, deleteSubasta)
routerSubasta.put("/subastaac/:id", verificarUserToken, activarSubasta)
routerSubasta.put("/subastades/:id", verificarUserToken, desactivarSubasta)

export default routerSubasta;