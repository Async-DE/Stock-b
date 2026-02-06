import express from 'express';

import ubicacionesRoutes from './Ubicaciones/ubicaciones.js';
import estantesRoutes from './Estantes/estantes.js';
import productosRoutes from './Productos/productos.js';
import ventasRoutes from './Ventas/ventas.js';
import categoriasRoutes from './Categorias/categorias.js';
import usuariosRoutes from './Usuarios/usuarios.js';
const router = express.Router();

router.use("/ubicaciones", ubicacionesRoutes);
router.use("/estantes", estantesRoutes);
router.use("/productos", productosRoutes);
router.use("/ventas", ventasRoutes);
router.use("/categorias", categoriasRoutes);
router.use("/usuarios", usuariosRoutes);

export default router;



