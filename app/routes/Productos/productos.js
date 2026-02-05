import express from "express";
import {
  createProducto,
  crearVariante,
  updateVariante,
  getProductosByCategoria,
  getProductoById,
  getProductosBySearch,
} from "../../controllers/Productos/productos.js";

const router = express.Router();

/**
 * =========================
 * Productos
 * =========================
 */

// Crear producto con variante base
router.post("/productos", createProducto);

// Vincular nueva variante a producto
router.post("/productos/variantes", crearVariante);

// Actualizar variante existente
router.put("/productos/variantes/:varianteId", updateVariante);

// Obtener productos por categoría
router.get("/productos/categoria/:categoriaId", getProductosByCategoria);

// Obtener producto específico con variantes
router.get("/productos/:id", getProductoById);

// Búsqueda avanzada de productos
router.get("/productos/buscar", getProductosBySearch);

export default router;
