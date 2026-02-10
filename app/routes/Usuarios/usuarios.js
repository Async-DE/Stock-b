import express from 'express';
import {
  createUsuario,
  updateEstadoUsuario,
  getUsuarios,
  getAuditoriaGeneral,
  getAuditoriaPorUsuario
} from '../../controllers/Usuarios/usuarios.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';

const router = express.Router();

/* Usuarios */
router.post('/crear', createUsuario);
router.put('/estado/:id', authMiddleware, updateEstadoUsuario);
router.get('/ver', authMiddleware, getUsuarios);

/* Auditoría */
router.get('/auditoria/general', authMiddleware, getAuditoriaGeneral);
router.get('/auditoria/usuario/:id', authMiddleware, getAuditoriaPorUsuario);

export default router;
