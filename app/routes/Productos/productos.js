import express from "express";
import {
  createProducto,
  crearVariante,
  updateVariante,
  getProductosByCategoria,
  getProductoById,
  getProductosBySearch,
} from "../../controllers/Productos/productos.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, createProducto);

router.get("/ver/:id", authMiddleware, getProductoById);

router.post("/verbuscar", authMiddleware, getProductosBySearch);

router.get("/ver/categoria/:categoriaId", authMiddleware, getProductosByCategoria);
//--------------------------------------------------------
router.post("/variantes/crear", authMiddleware, crearVariante);

router.put("/variantes/actualizar/:varianteId", authMiddleware, updateVariante);


export default router;
 