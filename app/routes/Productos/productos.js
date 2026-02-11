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
import upload from "../../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, upload.single("foto"), createProducto);

router.get("/ver/:id", authMiddleware, getProductoById);

router.post("/verbuscar", authMiddleware, getProductosBySearch);

router.get("/ver/categoria/:categoriaId", authMiddleware, getProductosByCategoria);
//--------------------------------------------------------
router.post("/variantes/crear", authMiddleware, upload.single("foto"), crearVariante);

router.put("/variantes/actualizar/:varianteId", authMiddleware, upload.single("foto"), updateVariante);


export default router;
 