import { Router } from 'express';
import { createSub, deleteSub, getSub, getSubs, updateSub } from '../controllers/subasta.controllers.js';

const routerSubasta = Router()

routerSubasta.get("/sub", getSubs)
routerSubasta.get("/sub/:id", getSub)
routerSubasta.post("/formsub", createSub)
routerSubasta.put("/formsub/:id", updateSub)
routerSubasta.delete("/sub/:id", deleteSub)

export default routerSubasta;