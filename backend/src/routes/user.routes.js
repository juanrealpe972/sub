import { Router } from "express";
import { cargarImagen, createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller.js";

const routerUser = Router();

routerUser.get("/users", getUsers);
routerUser.get("/users/:id", getUser);
routerUser.post("/users", createUser);
routerUser.put("/users/:id",cargarImagen, updateUser);
routerUser.delete("/users/:id", deleteUser);

export default routerUser;
