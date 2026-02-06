import express from "express";
import {
  createEstante,
  getEstantes,
  getEstanteById,
} from "../../controllers/Estantes/estantes.js";

const router = express.Router();

router.post("/crear", createEstante);

router.get("/ver", getEstantes);

router.get("/verId/:id", getEstanteById);

export default router;
