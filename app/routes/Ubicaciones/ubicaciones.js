import express from "express";
import { createUbicacion, updateUbicacion,getUbicaciones } from "../../controllers/Ubicaciones/ubicaciones.js";

const router = express.Router();

router.post("/ubicaciones/crear", createUbicacion);

router.put("/ubicaciones/actualizar/:id", updateUbicacion);

router.get("/ubicaciones", getUbicaciones);

export default router;
