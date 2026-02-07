import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createVenta = async (req, res) => {
    const { varianteId, cantidad, total_venta, nombre_cliente, contacto_cliente, costos_extras, motivo_costo_extra } = req.body;

    // Ejecutar validaciones await para que validationResult funcione correctamente
    await check("varianteId").notEmpty().isInt().withMessage("varianteId debe ser un entero").run(req);
    await check("cantidad").notEmpty().isInt().withMessage("cantidad debe ser un entero").run(req);
    await check("total_venta").notEmpty().isFloat().withMessage("total_venta debe ser un número decimal").run(req);
    await check("nombre_cliente").notEmpty().isString().withMessage("nombre_cliente debe ser una cadena de texto").run(req);
    await check("contacto_cliente").notEmpty().isString().withMessage("contacto_cliente debe ser una cadena de texto").run(req);
    await check("costos_extras").optional().isFloat().withMessage("costos_extras debe ser un número decimal").run(req);
    await check("motivo_costo_extra").optional().isString().withMessage("motivo_costo_extra debe ser una cadena de texto").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const varianteIdInt = parseInt(varianteId, 10);
        const cantidadInt = parseInt(cantidad, 10);
        const totalVentaFloat = parseFloat(total_venta);
        const costosExtrasFloat = costos_extras ? parseFloat(costos_extras) : 0; // Valor por defecto si es opcional

        const variante = await prisma.variantes.findUnique({
            where: { id: varianteIdInt },
        });

        if (!variante) {
            return res.status(404).json({ error: "Variante no encontrada" });
        }
        const { precio_publico, precio_contratista, costo_compra } = variante;

        const nuevaVenta = await prisma.ventas.create({
            data: {
                variante_id: varianteIdInt, // Corregido: variante_id en schema vs varianteId en body
                cantidad: cantidadInt,
                total_venta: totalVentaFloat,
                nombre_cliente,
                contacto_cliente,
                precio_publico,
                precio_contratista,
                costo_compra,
                costos_extras: costosExtrasFloat,
                motivo_costo_extra: motivo_costo_extra || "", // Asegurar string si es requerido o null
            },
        });
        res.status(201).json(nuevaVenta);
    } catch (error) {
        console.error("Error al crear venta:", error);
        res.status(500).json({ error: "Error al crear la venta", details: error.message });
    }
};

const getVentasByDateRange = async (req, res) => {
    const { startDate, endDate } = req.body;
    try {
        const ventas = await prisma.ventas.findMany({
            where: {
                fecha_venta: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
        });
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ventas", details: error.message });
    }
};

const searchVentas = async (req, res) => {
    const { search } = req.body;
    try {
        const ventas = await prisma.ventas.findMany({
            where: {
                OR: [
                    { nombre_cliente: { contains: search, mode: 'insensitive' } },
                    { contacto_cliente: { contains: search, mode: 'insensitive' } }
                ]
            },
        });
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar las ventas" });
    }
}

export { createVenta, getVentasByDateRange, searchVentas };