import express from "express";
import { createUbicacion } from "../../controllers/Ubicaciones/ubicaciones.js";

const router = express.Router();

router.post("/ubicaciones/crear", createUbicacion);

export default router;
