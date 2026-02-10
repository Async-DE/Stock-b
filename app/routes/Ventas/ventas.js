import express from "express";
import { createVenta, getVentasByDateRange,searchVentas } from "../../controllers/Ventas/ventas.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/crear", authMiddleware, createVenta);

router.post("/verRango", authMiddleware, getVentasByDateRange);

router.post("/verbuscar", authMiddleware, searchVentas);

export default router;