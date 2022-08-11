import { Router } from "express";
import { newTransaction, getTransactions } from "../controllers/transactionControllers.js";
import middleware from "../middleware/index.js";

const router = Router();

router.post('/', middleware, newTransaction);
router.get('/', middleware, getTransactions)

export default router;