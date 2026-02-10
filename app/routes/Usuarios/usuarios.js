import express from 'express';
import {
  createUsuario,
  updateEstadoUsuario,
  getUsuarios
} from '../../controllers/Usuarios/usuarios.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';

const router = express.Router();

/* Usuarios */
router.post('/crear',authMiddleware, createUsuario);
router.put('/estado/:id', authMiddleware, updateEstadoUsuario);
router.get('/ver', authMiddleware, getUsuarios);

export default router;
