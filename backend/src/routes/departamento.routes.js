import { Router } from "express";
import {
  getDepartamentos,
  getDepartamentoById,
  createDepartamento,
  updateDepartamento,
  deleteDepartamento,
  activarDepartamento,
  desactivarDepartamento,
} from "../controllers/departamento.controller.js";

const routerDepartamento = Router();

routerDepartamento.get("/departamentos", getDepartamentos);
routerDepartamento.get("/departamentos/:id", getDepartamentoById);
routerDepartamento.post("/departamentos", createDepartamento);
routerDepartamento.put("/departamentos/:id", updateDepartamento);
routerDepartamento.delete("/departamentos/:id", deleteDepartamento);
routerDepartamento.put("/departamentosac/:id", activarDepartamento);
routerDepartamento.put("/departamentosdes/:id", desactivarDepartamento);

export default routerDepartamento;
