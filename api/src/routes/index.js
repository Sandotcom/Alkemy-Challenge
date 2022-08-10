import { Router } from "express";
import auth from './auth.js'
import user from './user.js'

const router = Router();

router.use('/', auth);
router.use('/', user)

export default router