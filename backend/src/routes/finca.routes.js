import { Router } from "express";
import { createFinca, deleteFinca, getFinca, getFincas, updateFinca } from "../controllers/finca.controller.js";

const routerFinca =Router()

routerFinca.get("/finca", getFincas)
routerFinca.get("/finca/:id", getFinca)
routerFinca.post("/formfinca", createFinca)
routerFinca.put("/formfinca/:id", updateFinca)
routerFinca.delete("/finca/:id", deleteFinca)

export default routerFinca