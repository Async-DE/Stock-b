import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createVenta = async (req, res) => {
    const { varianteId, cantidad, total_venta, nombre_cliente, contacto_cliente} = req.body;

    check("varianteId").notEmpty().isInt().withMessage("varianteId debe ser un entero");
    check("cantidad").notEmpty().isInt().withMessage("cantidad debe ser un entero");
    check("total_venta").notEmpty().isFloat().withMessage("total_venta debe ser un número decimal");
    check("nombre_cliente").notEmpty().isString().withMessage("nombre_cliente debe ser una cadena de texto");
    check("contacto_cliente").notEmpty().isString().withMessage("contacto_cliente debe ser una cadena de texto");

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
                costo_compra
            },
        });
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la venta" });
    }
};

export { createVenta };