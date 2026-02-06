import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createVenta = async (req, res) => {
    const { varianteId, cantidad, total_venta, nombre_cliente, contacto_cliente, costos_extras, motivo_costo_extra } = req.body;

    check("varianteId").notEmpty().isInt().withMessage("varianteId debe ser un entero");
    check("cantidad").notEmpty().isInt().withMessage("cantidad debe ser un entero");
    check("total_venta").notEmpty().isFloat().withMessage("total_venta debe ser un número decimal");
    check("nombre_cliente").notEmpty().isString().withMessage("nombre_cliente debe ser una cadena de texto");
    check("contacto_cliente").notEmpty().isString().withMessage("contacto_cliente debe ser una cadena de texto");
    check("costos_extras").optional().isFloat().withMessage("costos_extras debe ser un número decimal");
    check("motivo_costo_extra").optional().isString().withMessage("motivo_costo_extra debe ser una cadena de texto");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const variante = await prisma.variantes.findUnique({
            where: { id: varianteId },
        });

        if (!variante) {
            return res.status(404).json({ error: "Variante no encontrada" });
        }
        const { precio_publico, precio_contratista, costo_compra } = variante;

        const nuevaVenta = await prisma.ventas.create({
            data: {
                varianteId,
                cantidad,
                total_venta,
                nombre_cliente,
                contacto_cliente,
                precio_publico,
                precio_contratista,
                costo_compra,
                costos_extras,
                motivo_costo_extra
            },
        });
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la venta" });
    }
};

//Obtener salidas de producto por rango de fechas
const getVentasByDateRange = async (req, res) => {
    const { startDate, endDate } = req.body;
    try {
        const ventas = await prisma.ventas.findMany({
            where: {
                createdAt: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
        });
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ventas" });
    }
};

//Obtener salida de producto por nombre de cliente o contacto (By Search)
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