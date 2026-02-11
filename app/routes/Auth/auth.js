import express from 'express';
import { login, logout, revocarTodasLasSesiones } from '../../controllers/Auth/auth.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', login);

router.post('/logout', authMiddleware, logout);

router.post('/logout-todas', authMiddleware, revocarTodasLasSesiones);

export default router;
