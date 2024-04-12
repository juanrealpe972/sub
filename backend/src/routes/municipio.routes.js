import { Router } from "express";
import {
  getMunicipios,
  getMunicipioById,
  createMunicipio,
  updateMunicipio,
  deleteMunicipio,
  activarMunicipio,
  desactivarMunicipio,
} from "../controllers/municipio.controller.js";

const routerMunicipio = Router();

routerMunicipio.get("/municipios", getMunicipios);
routerMunicipio.get("/municipios/:id", getMunicipioById);
routerMunicipio.post("/municipios", createMunicipio);
routerMunicipio.put("/municipios/:id", updateMunicipio);
routerMunicipio.delete("/municipios/:id", deleteMunicipio);
routerMunicipio.put("/municipios/activar/:id", activarMunicipio);
routerMunicipio.put("/municipios/desactivar/:id", desactivarMunicipio);

export default routerMunicipio;
