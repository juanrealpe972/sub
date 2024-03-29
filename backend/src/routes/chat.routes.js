import { Router } from "express";
import { createChat, deleteChat, getChat, getChats, updateChat } from "../controllers/chat.controller.js";

const routerChat = Router()

routerChat.get("/chat", getChats)
routerChat.get("/chat/:id", getChat)
routerChat.post("/formchat", createChat)
routerChat.put("/formchat/:id", updateChat)
routerChat.delete("/chat/:id", deleteChat)

export default routerChat