import { Router } from "express";
import { activarFinca, cargarImagen, createFinca, deleteFinca, desactivarFinca, getFinca, getFincas, updateFinca } from "../controllers/finca.controller.js";
import { verificarUserToken } from "../controllers/auth.controller.js";

const routerFinca = Router();

routerFinca.get("/finca", verificarUserToken, getFincas);
routerFinca.get("/finca/:id", verificarUserToken, getFinca);
routerFinca.post("/finca", cargarImagen, verificarUserToken, createFinca);
routerFinca.put("/finca/:id", cargarImagen, verificarUserToken, updateFinca);
routerFinca.delete("/finca/:id", verificarUserToken, deleteFinca);
routerFinca.put("/finca/:id", verificarUserToken, activarFinca);
routerFinca.put("/finca/:id", verificarUserToken, desactivarFinca);

export default routerFinca;
