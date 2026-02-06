import express from "express";
import { createVenta, getVentasByDateRange,searchVentas } from "../../controllers/Ventas/ventas.js";

const router = express.Router();

router.post("/ventas/crear", createVenta);  
router.post("/ventas", getVentasByDateRange);
router.post("/ventas/buscar", searchVentas);

export default router;