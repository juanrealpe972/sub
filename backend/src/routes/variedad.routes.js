import { Router } from "express";
import { createVariedad, deleteVariedad, getVariedad, getVariedades, updateVariedad } from "../controllers/variedad.controller.js";

const routerVariedad = Router()

routerVariedad.get("/variedad",getVariedades)
routerVariedad.get("/variedad/:id",getVariedad)
routerVariedad.post("/formvariedad", createVariedad)
routerVariedad.put("/formvariedad/:id",updateVariedad)
routerVariedad.delete("/variedad/:id",deleteVariedad)

export default routerVariedad