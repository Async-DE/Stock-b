/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Gestión de ubicaciones físicas
 */
import express from "express";
import { createUbicacion, updateUbicacion,getUbicaciones } from "../../controllers/Ubicaciones/ubicaciones.js";

const router = express.Router();

router.post("/crear", createUbicacion);

router.put("/actualizar/:id", updateUbicacion);

router.get("/ver", getUbicaciones);

export default router;
