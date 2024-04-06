import { Router } from "express";
import { cargarImagen, createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller.js";
import { verificarUserToken } from "../controllers/auth.controller.js";

const routerUser = Router();

routerUser.get("/users", verificarUserToken, getUsers);
routerUser.get("/users/:id", getUser);
routerUser.post("/users", createUser);
routerUser.put("/users/:id",verificarUserToken, updateUser);
routerUser.delete("/users/:id", deleteUser);

export default routerUser;
