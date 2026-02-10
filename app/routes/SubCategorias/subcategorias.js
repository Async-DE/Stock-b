import express from "express";
import {
  createSubCategoria,
  updateSubCategoria,
} from "../../controllers/SubCategorias/subcategorias.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, createSubCategoria);
router.put("/actualizar/:id", authMiddleware, updateSubCategoria);

export default router;
