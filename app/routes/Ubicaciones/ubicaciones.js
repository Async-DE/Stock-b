import express from "express";
import { createUbicacion, updateUbicacion,getUbicaciones } from "../../controllers/Ubicaciones/ubicaciones.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, createUbicacion);

router.put("/actualizar/:id", authMiddleware, updateUbicacion);

router.get("/ver", authMiddleware, getUbicaciones);

export default router;
