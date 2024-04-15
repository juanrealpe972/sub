import { Router } from "express";
import { activarVariedad, cargarImagen, createVariedad, deleteVariedad, desactivarVariedad, getVariedad, getVariedades, updateVariedad } from "../controllers/variedad.controller.js";
import { verificarUserToken } from "../controllers/auth.controller.js";

const routerVariedad = Router();

routerVariedad.get("/variedad", verificarUserToken, getVariedades);
routerVariedad.get("/variedad/:id", verificarUserToken, getVariedad);
routerVariedad.post( "/variedad", cargarImagen, verificarUserToken, createVariedad);
routerVariedad.put( "/variedad/:id", cargarImagen, verificarUserToken, updateVariedad);
routerVariedad.delete("/variedad/:id", verificarUserToken, deleteVariedad);
routerVariedad.put("/variedadac/:id", verificarUserToken, activarVariedad);
routerVariedad.put("/variedaddes/:id", verificarUserToken, desactivarVariedad);

export default routerVariedad;
