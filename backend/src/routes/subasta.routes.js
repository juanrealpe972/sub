import { Router } from 'express';
import { createSub, deleteSub, getSub, getSubs, updateSub } from '../controllers/subasta.controllers.js';

const router = Router()

router.get("/sub", getSubs)
router.get("/sub/:id", getSub)
router.post("/sub", createSub)
router.put("/sub/:id", updateSub)
router.delete("/sub/:id", deleteSub)

export default router;