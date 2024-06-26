import { Router } from "express";
import { activarVariedad, createVariedad, deleteVariedad, desactivarVariedad, getVariedadUser, getVariedades, updateVariedad } from "../controllers/variedad.controller.js";
import { verificarUserToken } from "../controllers/autenticacionController.js";
import { validationVariedad } from "../validations/variedad.validation.js";

const routerVariedad = Router();

routerVariedad.get("/variedad", verificarUserToken, getVariedades);
routerVariedad.get("/variedaduser/:id_finca", verificarUserToken, getVariedadUser);
routerVariedad.post("/variedad", verificarUserToken, validationVariedad, createVariedad);
routerVariedad.put("/variedad/:id", verificarUserToken, validationVariedad, updateVariedad);
routerVariedad.delete("/variedad/:id", verificarUserToken, deleteVariedad);
routerVariedad.put("/variedadac/:id", verificarUserToken, activarVariedad);
routerVariedad.put("/variedaddes/:id", verificarUserToken, desactivarVariedad);

export default routerVariedad;
