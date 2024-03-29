import { Router } from "express";
import {validarUser, verificarUserToken} from "../controllers/auth.controller.js"

const routerAuth = Router()

routerAuth.post("/validar", validarUser)
routerAuth.get("/users", verificarUserToken)

export default routerAuth