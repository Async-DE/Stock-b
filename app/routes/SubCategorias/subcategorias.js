import express from "express";
import {
  createSubCategoria,
  updateSubCategoria,
} from "../../controllers/SubCategorias/subcategorias.js";

const router = express.Router();

router.post("/crear", createSubCategoria);
router.put("/actualizar/:id", updateSubCategoria);

export default router;
