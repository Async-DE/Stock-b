import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createCategoria = async (req, res) => {
  const { nombre } = req.body;

  // Validar los datos de entrada
  await check("nombre", "El nombre es obligatorio").notEmpty().run(req);

  //Validar tipos de datos
  await check("nombre", "El nombre debe ser una cadena de texto").isString().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await prisma.categorias.create({
      data: {
        nombre
      },
    });

    res.status(201).json("Categoría creada con éxito");
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

export { createCategoria };
