import { Router } from "express";
import { getUser } from "../controllers/userControllers.js";
import middleware from "../middleware/index.js";

const router = Router();

router.get('/user', middleware, getUser)

export default router;