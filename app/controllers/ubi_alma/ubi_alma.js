import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createUbicacionAlmacen = async (req, res) => {
  const { ubicacion_id, codigo, tipo, descripcion } = req.body;

  // Validar los datos de entrada
  await check("ubicacion_id").isInt().withMessage("ubicacion_id debe ser un número entero").run(req);
  await check("codigo").notEmpty().withMessage("codigo es obligatorio").run(req);
  await check("tipo").notEmpty().withMessage("tipo es obligatorio").run(req);
  await check("descripcion").notEmpty().withMessage("descripcion es obligatorio").run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: `Errores de validación ${errors.array().length}`, errors: errors.array() });
  }

  try {
    
    const nuevaUbicacion = await prisma.ubicaciones_almacen.create({
      data: {
        ubicacion_id,
        codigo,
        tipo,
        descripcion,
      }
    });

    res.status(201).json({ message: "Ubicación de almacén creada exitosamente"});
  } catch (error) {
    res.status(500).json({ message: "Error al crear la ubicación de almacén", error: error.message });
  }
};

export { createUbicacionAlmacen };
