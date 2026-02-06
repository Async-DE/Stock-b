import express from "express";
import { createVenta, getVentasByDateRange,searchVentas } from "../../controllers/Ventas/ventas.js";

const router = express.Router();

router.post("/crear", createVenta);

router.post("/verRango", getVentasByDateRange);

router.post("/verbuscar", searchVentas);

export default router;