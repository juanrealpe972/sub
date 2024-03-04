import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller.js";

const routerUser = Router();

routerUser.get("/users", getUsers);
routerUser.get("/users/:id", getUser);
routerUser.post("/formuser", createUser);
routerUser.put("/formuser/:id", updateUser);
routerUser.delete("/users/:id", deleteUser);

export default routerUser;
