import { Router } from "express";
import { getUsers } from "../controllers/auth.controllers.js";

const routerUser = Router();

routerUser.get("/user", getUsers);

export default routerUser;
