import { Router } from "express";
import { createVariedad, deleteVariedad, getVariedad, getVariedades, updateVariedad } from "../controllers/variedad.controller.js";

const routerVariedad = Router()

routerVariedad.get("/variedad",getVariedades)
routerVariedad.get("/variedad/:id",getVariedad)
routerVariedad.post("/variedad", createVariedad)
routerVariedad.put("/variedad/:id",updateVariedad)
routerVariedad.delete("/variedad/:id",deleteVariedad)

export default routerVariedad