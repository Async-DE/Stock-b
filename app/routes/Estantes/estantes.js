import express from "express";
import {
  createEstante,
  getEstantes,
  getEstanteById,
} from "../../controllers/Estantes/estantes.js";

const router = express.Router();
//Crear estante
router.post("/estantes/crear", createEstante);
//Obtener estantes
router.get("/estantes", getEstantes);
//Obtener estante por ID
router.get("/estantes/:id", getEstanteById);

export default router;
