import { Router } from "express";
import { cargarImagen, createFinca, deleteFinca, getFinca, getFincas, updateFinca } from "../controllers/finca.controller.js";
import { verificarUserToken } from "../controllers/auth.controller.js";

const routerFinca = Router();

routerFinca.get("/finca", getFincas);
routerFinca.get("/finca/:id", getFinca);
routerFinca.post("/finca", verificarUserToken, cargarImagen, createFinca);
routerFinca.put("/finca/:id", cargarImagen, updateFinca);
routerFinca.delete("/finca/:id", deleteFinca);

export default routerFinca;
