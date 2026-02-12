import express from 'express';

import authRoutes from './Auth/auth.js';
import ubicacionesRoutes from './Ubicaciones/ubicaciones.js';
import estantesRoutes from './Estantes/estantes.js';
import productosRoutes from './Productos/productos.js';
import ventasRoutes from './Ventas/ventas.js';
import categoriasRoutes from './Categorias/categorias.js';
import subcategoriasRoutes from './SubCategorias/subcategorias.js';
import usuariosRoutes from './Usuarios/usuarios.js';
import auditoriaRoutes from './Auditoria/auditoria.js';
import imagenesRoutes from './Imagenes/imagenes.js';
const router = express.Router();

// Rutas de autenticación (sin protección)
router.use("/auth", authRoutes);
router.use("/imagenes", imagenesRoutes);

// Rutas protegidas
router.use("/ubicaciones", ubicacionesRoutes);
router.use("/estantes", estantesRoutes);
router.use("/productos", productosRoutes);
router.use("/ventas", ventasRoutes);
router.use("/categorias", categoriasRoutes);
router.use("/subcategorias", subcategoriasRoutes);
router.use("/usuarios", usuariosRoutes);
router.use("/auditoria", auditoriaRoutes);

export default router;



