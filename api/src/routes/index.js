import { Router } from "express";
import auth from './auth.js'
import user from './user.js'
import transaction from './transaction.js'

const router = Router();

router.use('/', auth);
router.use('/user', user)
router.use('/transaction', transaction)

export default router