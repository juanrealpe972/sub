import { Router } from 'express';
import { createSub, deleteSub, getSub, getSubs, updateSub } from '../controllers/subasta.controllers.js';

const routerSubasta = Router()

routerSubasta.get("/subasta", getSubs)
routerSubasta.get("/subasta/:id", getSub)
routerSubasta.post("/subasta", createSub)
routerSubasta.put("/subasta/:id", updateSub)
routerSubasta.delete("/subasta/:id", deleteSub)

export default routerSubasta;