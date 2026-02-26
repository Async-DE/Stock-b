import express from "express";
import {
  createProducto,
  crearVariante,
  updateVariante,
  getProductosBySubcategoria,
  getProductoById,
  getProductosBySearch,
} from "../../controllers/Productos/productos.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import upload from "../../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, upload.array("foto", 5), createProducto);

router.get("/ver/:id", authMiddleware, getProductoById);

router.post("/verbuscar", authMiddleware, getProductosBySearch);

router.get("/ver/subcategoria/:subcategoriaId", authMiddleware, getProductosBySubcategoria);
//--------------------------------------------------------
router.post("/variantes/crear", authMiddleware, upload.array("foto", 5), crearVariante);

router.put("/variantes/actualizar/:varianteId", authMiddleware, upload.array("foto", 5), updateVariante);


export default router;