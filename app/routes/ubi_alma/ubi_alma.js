import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware.js';
import { createUbicacionAlmacen } from "../../controllers/ubi_alma/ubi_alma.js";

const router = express.Router();

// Ruta para crear una nueva ubicación de almacén
router.post('/ubicacion-almacen', authMiddleware, createUbicacionAlmacen);

export default router;