import { Router } from "express";
import {validarUser, verificarUserToken} from "../controllers/auth.controllers.js"

const routerAuth = Router()

routerAuth.post("/users", validarUser)
routerAuth.get("/users", verificarUserToken)

export default routerAuth