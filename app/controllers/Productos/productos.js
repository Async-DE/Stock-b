import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createProducto = async (req, res) => {
  const { categoriaId,estantesId } = req.body;

  // Validar los datos de entrada
  await check("categoriaId", "El ID de categoría es obligatorio").notEmpty().run(req);
  await check("estantesId", "El ID de estante es obligatorio").notEmpty().run(req);

  //Validar tipos de datos
  await check("categoriaId", "El ID de categoría debe ser un número entero").isInt().run(req);
  await check("estantesId", "El ID de estante debe ser un número entero").isInt().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await prisma.productos.create({
      data: {
        categoriaId,
        estantesId,
      },
    });

    res.status(201).json("Producto creado con éxito");
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export { createProducto };
