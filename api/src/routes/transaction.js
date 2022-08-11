import { Router } from "express";
import { newTransaction, getTransactions, putTransaction, deleteTransaction } from "../controllers/transactionControllers.js";
import middleware from "../middleware/index.js";

const router = Router();

router.post('/', middleware, newTransaction);
router.get('/', middleware, getTransactions);
router.put('/:id', middleware, putTransaction);
router.delete('/:id', middleware, deleteTransaction);

export default router;