import { Router } from "express";
import {
  cargarImagen,
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verificarUserToken } from "../controllers/auth.controller.js";

const routerUser = Router();

routerUser.get("/users", verificarUserToken, getUsers);
routerUser.get("/users/:id", verificarUserToken, getUser);
routerUser.post("/users", verificarUserToken, createUser);
routerUser.put("/users/:id", verificarUserToken, updateUser);
routerUser.delete("/users/:id", verificarUserToken, deleteUser);

export default routerUser;
