import { Router } from "express";

const routerVereda = Router()

routerVereda.get("/veredas")
routerVereda.get("/veredas/:id")
routerVereda.post("/veredas")
routerVereda.put("/veredas/:id")
routerVereda.delete("/veredas/:id")

export default routerVereda