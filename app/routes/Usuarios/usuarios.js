/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de usuarios y auditoría
 */
import express from 'express';
import {
  createUsuario,
  updateEstadoUsuario,
  getUsuarios,
  getAuditoriaGeneral,
  getAuditoriaPorUsuario
} from '../../controllers/Usuarios/usuarios.js';

const router = express.Router();

/* Usuarios */
router.post('/crear', createUsuario);
router.put('/estado/:id', updateEstadoUsuario);
router.get('/ver', getUsuarios);

/* Auditoría */
router.get('/auditoria/general', getAuditoriaGeneral);
router.get('/auditoria/usuario/:id', getAuditoriaPorUsuario);

export default router;
