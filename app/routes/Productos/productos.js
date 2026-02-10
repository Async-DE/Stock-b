/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Gestión de productos y variantes
 */
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

router.post("/crear", createProducto);

router.get("/ver/:id", getProductoById);

router.post("/verbuscar", getProductosBySearch);

router.get("/ver/categoria/:categoriaId", getProductosByCategoria);
//--------------------------------------------------------
router.post("/variantes/crear", crearVariante);

router.put("/variantes/actualizar/:varianteId", updateVariante);


export default router;
 