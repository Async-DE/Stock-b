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
router.patch('/:id/estado', updateEstadoUsuario);
router.get('/', getUsuarios);

/* Auditoría */
router.get('/auditoria/general', getAuditoriaGeneral);
router.get('/auditoria/usuario/:id', getAuditoriaPorUsuario);

export default router;
