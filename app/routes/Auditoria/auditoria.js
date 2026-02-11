import express from "express";
import {
  getAuditoriaGeneral,
  getAuditoriaPorEntidad,
  getAuditoriaPorUsuario,
} from "../../controllers/Auditoria/auditoria.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/general", authMiddleware, getAuditoriaGeneral);
router.get("/usuario/:id", authMiddleware, getAuditoriaPorUsuario);
router.get("/entidad/:entidad/:id", authMiddleware, getAuditoriaPorEntidad);

export default router;
