import express from "express";
import {
  createEstante,
  getEstantes,
  getEstanteById,
} from "../../controllers/Estantes/estantes.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, createEstante);

router.get("/ver", authMiddleware, getEstantes);

router.get("/verId/:id", authMiddleware, getEstanteById);

export default router;
