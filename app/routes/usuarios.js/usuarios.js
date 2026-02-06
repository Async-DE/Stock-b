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
router.post('/usuarios/crear', createUsuario);
router.patch('/usuarios/:id/estado', updateEstadoUsuario);
router.get('/usuarios', getUsuarios);

/* Auditoría */
router.get('/auditoria/general', getAuditoriaGeneral);
router.get('/auditoria/usuario/:id', getAuditoriaPorUsuario);

export default router;
