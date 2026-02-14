import { Router } from "express";
import { signin,intiateAdmin } from "../controllers/auth.controllers";

const router = Router();

router.post("/signin", signin);
router.post("/initiate-admin-user", intiateAdmin);

export default router;